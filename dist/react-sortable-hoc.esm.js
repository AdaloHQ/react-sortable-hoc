import _extends from '@babel/runtime/helpers/esm/extends';
import '@babel/runtime/helpers/esm/readOnlyError';
import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';
import _toConsumableArray from '@babel/runtime/helpers/esm/toConsumableArray';
import _classCallCheck from '@babel/runtime/helpers/esm/classCallCheck';
import _createClass from '@babel/runtime/helpers/esm/createClass';
import _possibleConstructorReturn from '@babel/runtime/helpers/esm/possibleConstructorReturn';
import _getPrototypeOf from '@babel/runtime/helpers/esm/getPrototypeOf';
import _inherits from '@babel/runtime/helpers/esm/inherits';
import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import React__default, {createElement, Component, createRef} from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';

var Manager = (function() {
  function Manager() {
    _classCallCheck(this, Manager);
    _defineProperty(this, 'refs', {});
  }
  return _createClass(Manager, [
    {
      key: 'add',
      value: function add(collection, ref) {
        if (!this.refs[collection]) {
          this.refs[collection] = [];
        }
        this.refs[collection].push(ref);
      },
    },
    {
      key: 'remove',
      value: function remove(collection, ref) {
        var index = this.getIndex(collection, ref);
        if (index !== -1) {
          this.refs[collection].splice(index, 1);
        }
      },
    },
    {
      key: 'isActive',
      value: function isActive() {
        return this.active;
      },
    },
    {
      key: 'getActive',
      value: function getActive() {
        var _this = this;
        return this.refs[this.active.collection].find(function(_ref) {
          var node = _ref.node;
          return node.sortableInfo.index == _this.active.index;
        });
      },
    },
    {
      key: 'getIndex',
      value: function getIndex(collection, ref) {
        return this.refs[collection].indexOf(ref);
      },
    },
    {
      key: 'getOrderedRefs',
      value: function getOrderedRefs() {
        var collection =
          arguments.length > 0 && arguments[0] !== undefined
            ? arguments[0]
            : this.active.collection;
        return this.refs[collection].sort(sortByIndex);
      },
    },
  ]);
})();
function sortByIndex(_ref2, _ref3) {
  var index1 = _ref2.node.sortableInfo.index;
  var index2 = _ref3.node.sortableInfo.index;
  return index1 - index2;
}

function arrayMove(array, from, to) {
  array = array.slice();
  array.splice(to < 0 ? array.length + to : to, 0, array.splice(from, 1)[0]);
  return array;
}
function omit(obj) {
  for (
    var _len = arguments.length,
      keysToOmit = new Array(_len > 1 ? _len - 1 : 0),
      _key = 1;
    _key < _len;
    _key++
  ) {
    keysToOmit[_key - 1] = arguments[_key];
  }
  return Object.keys(obj).reduce(function(acc, key) {
    if (keysToOmit.indexOf(key) === -1) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
var events = {
  start: ['touchstart', 'mousedown'],
  move: ['touchmove', 'mousemove'],
  end: ['touchend', 'touchcancel', 'mouseup'],
};
var vendorPrefix = (function() {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return '';
  }
  var styles = window.getComputedStyle(document.documentElement, '') || [
    '-moz-hidden-iframe',
  ];
  var pre = (Array.prototype.slice
    .call(styles)
    .join('')
    .match(/-(moz|webkit|ms)-/) ||
    (styles.OLink === '' && ['', 'o']))[1];
  switch (pre) {
    case 'ms':
      return 'ms';
    default:
      return pre && pre.length ? pre[0].toUpperCase() + pre.substr(1) : '';
  }
})();
function closest(el, fn) {
  while (el) {
    if (fn(el)) {
      return el;
    }
    el = el.parentNode;
  }
  return null;
}
function limit(min, max, value) {
  return Math.max(min, Math.min(value, max));
}
function getPixelValue(stringValue) {
  if (stringValue.substr(-2) === 'px') {
    return parseFloat(stringValue);
  }
  return 0;
}
function getElementMargin(element) {
  var style = window.getComputedStyle(element);
  return {
    top: getPixelValue(style.marginTop),
    right: getPixelValue(style.marginRight),
    bottom: getPixelValue(style.marginBottom),
    left: getPixelValue(style.marginLeft),
  };
}
function provideDisplayName(prefix, Component$$1) {
  var componentName = Component$$1.displayName || Component$$1.name;
  return componentName
    ? ''.concat(prefix, '(').concat(componentName, ')')
    : prefix;
}
function getPosition(event) {
  if (event.touches && event.touches.length) {
    return {
      x: event.touches[0].pageX,
      y: event.touches[0].pageY,
    };
  } else if (event.changedTouches && event.changedTouches.length) {
    return {
      x: event.changedTouches[0].pageX,
      y: event.changedTouches[0].pageY,
    };
  } else {
    return {
      x: event.pageX,
      y: event.pageY,
    };
  }
}
function isTouchEvent(event) {
  return (
    (event.touches && event.touches.length) ||
    (event.changedTouches && event.changedTouches.length)
  );
}
function getEdgeOffset(node, parent) {
  var offset =
    arguments.length > 2 && arguments[2] !== undefined
      ? arguments[2]
      : {
          top: 0,
          left: 0,
        };
  if (!node) {
    return undefined;
  }
  var nodeOffset = {
    top: offset.top + node.offsetTop,
    left: offset.left + node.offsetLeft,
  };
  if (node.parentNode === parent) {
    return nodeOffset;
  }
  return getEdgeOffset(node.parentNode, parent, nodeOffset);
}
function getLockPixelOffset(_ref) {
  var lockOffset = _ref.lockOffset,
    width = _ref.width,
    height = _ref.height;
  var offsetX = lockOffset;
  var offsetY = lockOffset;
  var unit = 'px';
  if (typeof lockOffset === 'string') {
    var match = /^[+-]?\d*(?:\.\d*)?(px|%)$/.exec(lockOffset);
    invariant(
      match !== null,
      'lockOffset value should be a number or a string of a ' +
        'number followed by "px" or "%". Given %s',
      lockOffset,
    );
    offsetX = parseFloat(lockOffset);
    offsetY = parseFloat(lockOffset);
    unit = match[1];
  }
  invariant(
    isFinite(offsetX) && isFinite(offsetY),
    'lockOffset value should be a finite. Given %s',
    lockOffset,
  );
  if (unit === '%') {
    offsetX = (offsetX * width) / 100;
    offsetY = (offsetY * height) / 100;
  }
  return {
    x: offsetX,
    y: offsetY,
  };
}

var SortableElementContext = React__default.createContext({});

function _finallyRethrows(body, finalizer) {
  try {
    var result = body();
  } catch (e) {
    return finalizer(true, e);
  }
  if (result && result.then) {
    return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
  }
  return finalizer(false, value);
}
function _callSuper(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e),
    )
  );
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function() {}),
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function sortableContainer(WrappedComponent) {
  var _WithSortableContainer;
  var config =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          withRef: false,
        };
  return (
    (_WithSortableContainer = (function(_React$Component) {
      function WithSortableContainer(props) {
        var _this;
        _classCallCheck(this, WithSortableContainer);
        _this = _callSuper(this, WithSortableContainer, [props]);
        _defineProperty(_this, 'getEventTarget', function(container, key) {
          if (key === 'start') {
            return container;
          }
          return window;
        });
        _defineProperty(_this, 'handleStart', function(event) {
          var _this$props = _this.props,
            distance = _this$props.distance,
            shouldCancelStart = _this$props.shouldCancelStart;
          console.log(distance);
          if (event.button === 2 || shouldCancelStart(event)) {
            return;
          }
          _this._touched = true;
          _this._pos = getPosition(event);
          var node = closest(event.target, function(el) {
            return el.sortableInfo != null;
          });
          if (
            node &&
            node.sortableInfo &&
            _this.nodeIsChild(node) &&
            !_this.state.sorting
          ) {
            var useDragHandle = _this.props.useDragHandle;
            var _node$sortableInfo = node.sortableInfo,
              index = _node$sortableInfo.index,
              collection = _node$sortableInfo.collection;
            if (
              useDragHandle &&
              !closest(event.target, function(el) {
                return el.sortableHandle != null;
              })
            ) {
              return;
            }
            _this.manager.active = {
              index: index,
              collection: collection,
            };
            if (
              !isTouchEvent(event) &&
              event.target.tagName.toLowerCase() === 'a'
            ) {
              event.preventDefault();
            }
            if (!distance) {
              if (_this.props.pressDelay === 0) {
                _this.handlePress(event);
              } else {
                _this.pressTimer = setTimeout(function() {
                  return _this.handlePress(event);
                }, _this.props.pressDelay);
              }
            }
          }
        });
        _defineProperty(_this, 'nodeIsChild', function(node) {
          return node.sortableInfo.manager === _this.manager;
        });
        _defineProperty(_this, 'handleMove', function(event) {
          var _this$props2 = _this.props,
            distance = _this$props2.distance,
            pressThreshold = _this$props2.pressThreshold;
          if (
            !_this.state.sorting &&
            _this._touched &&
            !_this._awaitingUpdateBeforeSortStart
          ) {
            var position = getPosition(event);
            var delta = {
              x: _this._pos.x - position.x,
              y: _this._pos.y - position.y,
            };
            var combinedDelta = Math.abs(delta.x) + Math.abs(delta.y);
            _this.delta = delta;
            if (
              !distance &&
              (!pressThreshold ||
                (pressThreshold && combinedDelta >= pressThreshold))
            ) {
              clearTimeout(_this.cancelTimer);
              _this.cancelTimer = setTimeout(_this.cancel, 0);
            } else if (
              distance &&
              combinedDelta >= distance &&
              _this.manager.isActive()
            ) {
              _this.handlePress(event);
            }
          }
        });
        _defineProperty(_this, 'handleEnd', function() {
          _this._touched = false;
          _this.cancel();
        });
        _defineProperty(_this, 'cancel', function() {
          var distance = _this.props.distance;
          var sorting = _this.state.sorting;
          if (!sorting) {
            if (!distance) {
              clearTimeout(_this.pressTimer);
            }
            _this.manager.active = null;
          }
        });
        _defineProperty(_this, 'handlePress', function(event) {
          try {
            var active = _this.manager.getActive();
            var _temp4 = (function() {
              if (active) {
                var _temp3 = function _temp3() {
                  var margin = getElementMargin(node);
                  var containerBoundingRect = _this.container.getBoundingClientRect();
                  var dimensions = getHelperDimensions({
                    index: index,
                    node: node,
                    collection: collection,
                  });
                  _this.node = node;
                  _this.margin = margin;
                  _this.width = dimensions.width;
                  _this.height = dimensions.height;
                  _this.marginOffset = {
                    x: _this.margin.left + _this.margin.right,
                    y: Math.max(_this.margin.top, _this.margin.bottom),
                  };
                  _this.boundingClientRect = node.getBoundingClientRect();
                  _this.containerBoundingRect = containerBoundingRect;
                  _this.index = index;
                  _this.newIndex = index;
                  _this.axis = {
                    x: axis.indexOf('x') >= 0,
                    y: axis.indexOf('y') >= 0,
                  };
                  _this.offsetEdge = getEdgeOffset(node, _this.container);
                  _this.initialOffset = getPosition(event);
                  _this.initialScroll = {
                    top: _this.container.scrollTop,
                    left: _this.container.scrollLeft,
                  };
                  _this.initialWindowScroll = {
                    top: window.pageYOffset,
                    left: window.pageXOffset,
                  };
                  var fields = node.querySelectorAll('input, textarea, select');
                  var clonedNode = node.cloneNode(true);
                  var clonedFields = _toConsumableArray(
                    clonedNode.querySelectorAll('input, textarea, select'),
                  );
                  clonedFields.forEach(function(field, i) {
                    if (field.type !== 'file' && fields[index]) {
                      field.value = fields[i].value;
                    }
                  });
                  _this.helper = _this.helperContainer.appendChild(clonedNode);
                  _this.helper.style.position = 'fixed';
                  _this.helper.style.top = ''.concat(
                    _this.boundingClientRect.top - margin.top,
                    'px',
                  );
                  _this.helper.style.left = ''.concat(
                    _this.boundingClientRect.left - margin.left,
                    'px',
                  );
                  _this.helper.style.width = ''.concat(_this.width, 'px');
                  _this.helper.style.height = ''.concat(_this.height, 'px');
                  _this.helper.style.boxSizing = 'border-box';
                  _this.helper.style.pointerEvents = 'none';
                  if (hideSortableGhost) {
                    _this.sortableGhost = node;
                    node.style.visibility = 'hidden';
                    node.style.opacity = 0;
                  }
                  _this.minTranslate = {};
                  _this.maxTranslate = {};
                  if (_this.axis.x) {
                    _this.minTranslate.x =
                      (useWindowAsScrollContainer
                        ? 0
                        : containerBoundingRect.left) -
                      _this.boundingClientRect.left -
                      _this.width / 2;
                    _this.maxTranslate.x =
                      (useWindowAsScrollContainer
                        ? _this.contentWindow.innerWidth
                        : containerBoundingRect.left +
                          containerBoundingRect.width) -
                      _this.boundingClientRect.left -
                      _this.width / 2;
                  }
                  if (_this.axis.y) {
                    _this.minTranslate.y =
                      (useWindowAsScrollContainer
                        ? 0
                        : containerBoundingRect.top) -
                      _this.boundingClientRect.top -
                      _this.height / 2;
                    _this.maxTranslate.y =
                      (useWindowAsScrollContainer
                        ? _this.contentWindow.innerHeight
                        : containerBoundingRect.top +
                          containerBoundingRect.height) -
                      _this.boundingClientRect.top -
                      _this.height / 2;
                  }
                  if (helperClass) {
                    var _this$helper$classLis;
                    (_this$helper$classLis = _this.helper.classList).add.apply(
                      _this$helper$classLis,
                      _toConsumableArray(helperClass.split(' ')),
                    );
                  }
                  _this.listenerNode = event.touches
                    ? node
                    : _this.contentWindow;
                  events.move.forEach(function(eventName) {
                    return _this.listenerNode.addEventListener(
                      eventName,
                      _this.handleSortMove,
                      false,
                    );
                  });
                  events.end.forEach(function(eventName) {
                    return _this.listenerNode.addEventListener(
                      eventName,
                      _this.handleSortEnd,
                      false,
                    );
                  });
                  _this.setState({
                    sorting: true,
                    sortingIndex: index,
                  });
                  if (onSortStart) {
                    onSortStart(
                      {
                        node: node,
                        index: index,
                        collection: collection,
                      },
                      event,
                    );
                  }
                };
                var _this$props3 = _this.props,
                  axis = _this$props3.axis,
                  getHelperDimensions = _this$props3.getHelperDimensions,
                  helperClass = _this$props3.helperClass,
                  hideSortableGhost = _this$props3.hideSortableGhost,
                  updateBeforeSortStart = _this$props3.updateBeforeSortStart,
                  onSortStart = _this$props3.onSortStart,
                  useWindowAsScrollContainer =
                    _this$props3.useWindowAsScrollContainer;
                var node = active.node,
                  collection = active.collection;
                var index = node.sortableInfo.index;
                var _temp2 = (function() {
                  if (typeof updateBeforeSortStart === 'function') {
                    _this._awaitingUpdateBeforeSortStart = true;
                    var _temp = _finallyRethrows(
                      function() {
                        return Promise.resolve(
                          updateBeforeSortStart(
                            {
                              node: node,
                              index: index,
                              collection: collection,
                            },
                            event,
                          ),
                        ).then(function() {});
                      },
                      function(_wasThrown, _result) {
                        _this._awaitingUpdateBeforeSortStart = false;
                        if (_wasThrown) throw _result;
                        return _result;
                      },
                    );
                    if (_temp && _temp.then) return _temp.then(function() {});
                  }
                })();
                return _temp2 && _temp2.then
                  ? _temp2.then(_temp3)
                  : _temp3(_temp2);
              }
            })();
            return Promise.resolve(
              _temp4 && _temp4.then ? _temp4.then(function() {}) : void 0,
            );
          } catch (e) {
            return Promise.reject(e);
          }
        });
        _defineProperty(_this, 'handleSortMove', function(event) {
          var onSortMove = _this.props.onSortMove;
          event.preventDefault();
          _this.updatePosition(event);
          _this.animateNodes();
          _this.autoscroll();
          if (onSortMove) {
            onSortMove(event);
          }
        });
        _defineProperty(_this, 'handleSortEnd', function(event) {
          var _this$props4 = _this.props,
            hideSortableGhost = _this$props4.hideSortableGhost,
            onSortEnd = _this$props4.onSortEnd;
          var collection = _this.manager.active.collection;
          if (_this.listenerNode) {
            events.move.forEach(function(eventName) {
              return _this.listenerNode.removeEventListener(
                eventName,
                _this.handleSortMove,
              );
            });
            events.end.forEach(function(eventName) {
              return _this.listenerNode.removeEventListener(
                eventName,
                _this.handleSortEnd,
              );
            });
          }
          _this.helper.parentNode.removeChild(_this.helper);
          if (hideSortableGhost && _this.sortableGhost) {
            _this.sortableGhost.style.visibility = '';
            _this.sortableGhost.style.opacity = '';
          }
          var nodes = _this.manager.refs[collection];
          for (var i = 0, len = nodes.length; i < len; i++) {
            var node = nodes[i];
            var el = node.node;
            node.edgeOffset = null;
            el.style[''.concat(vendorPrefix, 'Transform')] = '';
            el.style[''.concat(vendorPrefix, 'TransitionDuration')] = '';
          }
          clearInterval(_this.autoscrollInterval);
          _this.autoscrollInterval = null;
          _this.manager.active = null;
          _this.setState({
            sorting: false,
            sortingIndex: null,
          });
          if (typeof onSortEnd === 'function') {
            onSortEnd(
              {
                oldIndex: _this.index,
                newIndex: _this.newIndex,
                collection: collection,
              },
              event,
            );
          }
          _this._touched = false;
        });
        _defineProperty(_this, 'autoscroll', function() {
          var disableAutoscroll = _this.props.disableAutoscroll;
          if (disableAutoscroll) {
            return;
          }
          var translate = _this.translate;
          var direction = {
            x: 0,
            y: 0,
          };
          var speed = {
            x: 1,
            y: 1,
          };
          var acceleration = {
            x: 10,
            y: 10,
          };
          var _this$scrollContainer = _this.scrollContainer,
            scrollTop = _this$scrollContainer.scrollTop,
            scrollLeft = _this$scrollContainer.scrollLeft,
            scrollHeight = _this$scrollContainer.scrollHeight,
            scrollWidth = _this$scrollContainer.scrollWidth,
            clientHeight = _this$scrollContainer.clientHeight,
            clientWidth = _this$scrollContainer.clientWidth;
          var isTop = scrollTop === 0;
          var isBottom = scrollHeight - scrollTop - clientHeight === 0;
          var isLeft = scrollLeft === 0;
          var isRight = scrollWidth - scrollLeft - clientWidth === 0;
          if (
            translate.y >= _this.maxTranslate.y - _this.height / 2 &&
            !isBottom
          ) {
            direction.y = 1;
            speed.y =
              acceleration.y *
              Math.abs(
                (_this.maxTranslate.y - _this.height / 2 - translate.y) /
                  _this.height,
              );
          } else if (
            translate.x >= _this.maxTranslate.x - _this.width / 2 &&
            !isRight
          ) {
            direction.x = 1;
            speed.x =
              acceleration.x *
              Math.abs(
                (_this.maxTranslate.x - _this.width / 2 - translate.x) /
                  _this.width,
              );
          } else if (
            translate.y <= _this.minTranslate.y + _this.height / 2 &&
            !isTop
          ) {
            direction.y = -1;
            speed.y =
              acceleration.y *
              Math.abs(
                (translate.y - _this.height / 2 - _this.minTranslate.y) /
                  _this.height,
              );
          } else if (
            translate.x <= _this.minTranslate.x + _this.width / 2 &&
            !isLeft
          ) {
            direction.x = -1;
            speed.x =
              acceleration.x *
              Math.abs(
                (translate.x - _this.width / 2 - _this.minTranslate.x) /
                  _this.width,
              );
          }
          if (_this.autoscrollInterval) {
            clearInterval(_this.autoscrollInterval);
            _this.autoscrollInterval = null;
            _this.isAutoScrolling = false;
          }
          if (direction.x !== 0 || direction.y !== 0) {
            _this.autoscrollInterval = setInterval(function() {
              _this.isAutoScrolling = true;
              var offset = {
                left: speed.x * direction.x,
                top: speed.y * direction.y,
              };
              _this.scrollContainer.scrollTop += offset.top;
              _this.scrollContainer.scrollLeft += offset.left;
              _this.translate.x += offset.left;
              _this.translate.y += offset.top;
              _this.animateNodes();
            }, 5);
          }
        });
        _this.manager = new Manager();
        _this.events = {
          start: _this.handleStart,
          move: _this.handleMove,
          end: _this.handleEnd,
        };
        invariant(
          !(props.distance && props.pressDelay),
          'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.',
        );
        _this.state = {};
        _this.wrappedInstanceRef = createRef();
        return _this;
      }
      _inherits(WithSortableContainer, _React$Component);
      return _createClass(WithSortableContainer, [
        {
          key: 'getContext',
          value: function getContext() {
            return {
              manager: this.manager,
            };
          },
        },
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this2 = this;
            var useWindowAsScrollContainer = this.props
              .useWindowAsScrollContainer;
            var container = this.getContainer();
            Promise.resolve(container).then(function(containerNode) {
              var _this2$container;
              _this2.container = containerNode;
              _this2.document =
                ((_this2$container = _this2.container) === null ||
                _this2$container === void 0
                  ? void 0
                  : _this2$container.ownerDocument) || document;
              var contentWindow =
                _this2.props.contentWindow ||
                _this2.document.defaultView ||
                window;
              _this2.contentWindow =
                typeof contentWindow === 'function'
                  ? contentWindow()
                  : contentWindow;
              _this2.scrollContainer = useWindowAsScrollContainer
                ? _this2.document.scrollingElement ||
                  _this2.document.documentElement
                : _this2.container;
              var _loop = function _loop(key) {
                if (_this2.events.hasOwnProperty(key)) {
                  var eventTarget = _this2.getEventTarget(
                    _this2.container,
                    key,
                  );
                  events[key].forEach(function(eventName) {
                    return eventTarget.addEventListener(
                      eventName,
                      _this2.events[key],
                      false,
                    );
                  });
                }
              };
              for (var key in _this2.events) {
                _loop(key);
              }
            });
          },
        },
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            var _this3 = this;
            var _loop2 = function _loop2(key) {
              if (_this3.events.hasOwnProperty(key)) {
                var eventTarget = _this3.getEventTarget(_this3.container, key);
                events[key].forEach(function(eventName) {
                  return (
                    eventTarget &&
                    eventTarget.removeEventListener(
                      eventName,
                      _this3.events[key],
                    )
                  );
                });
              }
            };
            for (var key in this.events) {
              _loop2(key);
            }
          },
        },
        {
          key: 'getLockPixelOffsets',
          value: function getLockPixelOffsets() {
            var width = this.width,
              height = this.height;
            var lockOffset = this.props.lockOffset;
            var offsets = Array.isArray(lockOffset)
              ? lockOffset
              : [lockOffset, lockOffset];
            invariant(
              offsets.length === 2,
              'lockOffset prop of SortableContainer should be a single ' +
                'value or an array of exactly two values. Given %s',
              lockOffset,
            );
            var _offsets = _slicedToArray(offsets, 2),
              minLockOffset = _offsets[0],
              maxLockOffset = _offsets[1];
            return [
              getLockPixelOffset({
                lockOffset: minLockOffset,
                width: width,
                height: height,
              }),
              getLockPixelOffset({
                lockOffset: maxLockOffset,
                width: width,
                height: height,
              }),
            ];
          },
        },
        {
          key: 'updatePosition',
          value: function updatePosition(event) {
            var _this$props5 = this.props,
              lockAxis = _this$props5.lockAxis,
              lockToContainerEdges = _this$props5.lockToContainerEdges;
            var offset = getPosition(event);
            var translate = {
              x: offset.x - this.initialOffset.x,
              y: offset.y - this.initialOffset.y,
            };
            translate.y -= window.pageYOffset - this.initialWindowScroll.top;
            translate.x -= window.pageXOffset - this.initialWindowScroll.left;
            this.translate = translate;
            if (lockToContainerEdges) {
              var _this$getLockPixelOff = this.getLockPixelOffsets(),
                _this$getLockPixelOff2 = _slicedToArray(
                  _this$getLockPixelOff,
                  2,
                ),
                minLockOffset = _this$getLockPixelOff2[0],
                maxLockOffset = _this$getLockPixelOff2[1];
              var minOffset = {
                x: this.width / 2 - minLockOffset.x,
                y: this.height / 2 - minLockOffset.y,
              };
              var maxOffset = {
                x: this.width / 2 - maxLockOffset.x,
                y: this.height / 2 - maxLockOffset.y,
              };
              translate.x = limit(
                this.minTranslate.x + minOffset.x,
                this.maxTranslate.x - maxOffset.x,
                translate.x,
              );
              translate.y = limit(
                this.minTranslate.y + minOffset.y,
                this.maxTranslate.y - maxOffset.y,
                translate.y,
              );
            }
            if (lockAxis === 'x') {
              translate.y = 0;
            } else if (lockAxis === 'y') {
              translate.x = 0;
            }
            this.helper.style[
              ''.concat(vendorPrefix, 'Transform')
            ] = 'translate3d('
              .concat(translate.x, 'px,')
              .concat(translate.y, 'px, 0)');
          },
        },
        {
          key: 'animateNodes',
          value: function animateNodes() {
            var _this$props6 = this.props,
              transitionDuration = _this$props6.transitionDuration,
              hideSortableGhost = _this$props6.hideSortableGhost,
              onSortOver = _this$props6.onSortOver;
            var nodes = this.manager.getOrderedRefs();
            var containerScrollDelta = {
              left: this.container.scrollLeft - this.initialScroll.left,
              top: this.container.scrollTop - this.initialScroll.top,
            };
            var sortingOffset = {
              left:
                this.offsetEdge.left +
                this.translate.x +
                containerScrollDelta.left,
              top:
                this.offsetEdge.top +
                this.translate.y +
                containerScrollDelta.top,
            };
            var windowScrollDelta = {
              top: window.pageYOffset - this.initialWindowScroll.top,
              left: window.pageXOffset - this.initialWindowScroll.left,
            };
            var prevIndex = this.newIndex;
            this.newIndex = null;
            for (var i = 0, len = nodes.length; i < len; i++) {
              var node = nodes[i].node;
              var index = node.sortableInfo.index;
              var width = node.offsetWidth;
              var height = node.offsetHeight;
              var offset = {
                width: this.width > width ? width / 2 : this.width / 2,
                height: this.height > height ? height / 2 : this.height / 2,
              };
              var translate = {
                x: 0,
                y: 0,
              };
              var edgeOffset = nodes[i].edgeOffset;
              if (!edgeOffset) {
                edgeOffset = getEdgeOffset(node, this.container);
                nodes[i].edgeOffset = edgeOffset;
              }
              var nextNode = i < nodes.length - 1 && nodes[i + 1];
              var prevNode = i > 0 && nodes[i - 1];
              if (nextNode && !nextNode.edgeOffset) {
                nextNode.edgeOffset = getEdgeOffset(
                  nextNode.node,
                  this.container,
                );
              }
              if (index === this.index) {
                if (hideSortableGhost) {
                  this.sortableGhost = node;
                  node.style.visibility = 'hidden';
                  node.style.opacity = 0;
                }
                continue;
              }
              if (transitionDuration) {
                node.style[
                  ''.concat(vendorPrefix, 'TransitionDuration')
                ] = ''.concat(transitionDuration, 'ms');
              }
              if (this.axis.x) {
                if (this.axis.y) {
                  if (
                    index < this.index &&
                    ((sortingOffset.left +
                      windowScrollDelta.left -
                      offset.width <=
                      edgeOffset.left &&
                      sortingOffset.top + windowScrollDelta.top <=
                        edgeOffset.top + offset.height) ||
                      sortingOffset.top +
                        windowScrollDelta.top +
                        offset.height <=
                        edgeOffset.top)
                  ) {
                    translate.x = this.width + this.marginOffset.x;
                    if (
                      edgeOffset.left + translate.x >
                      this.containerBoundingRect.width - offset.width
                    ) {
                      if (nextNode) {
                        translate.x =
                          nextNode.edgeOffset.left - edgeOffset.left;
                        translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                      }
                    }
                    if (this.newIndex === null) {
                      this.newIndex = index;
                    }
                  } else if (
                    index > this.index &&
                    ((sortingOffset.left +
                      windowScrollDelta.left +
                      offset.width >=
                      edgeOffset.left &&
                      sortingOffset.top +
                        windowScrollDelta.top +
                        offset.height >=
                        edgeOffset.top) ||
                      sortingOffset.top +
                        windowScrollDelta.top +
                        offset.height >=
                        edgeOffset.top + height)
                  ) {
                    translate.x = -(this.width + this.marginOffset.x);
                    if (
                      edgeOffset.left + translate.x <
                      this.containerBoundingRect.left + offset.width
                    ) {
                      if (prevNode) {
                        translate.x =
                          prevNode.edgeOffset.left - edgeOffset.left;
                        translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                      }
                    }
                    this.newIndex = index;
                  }
                } else {
                  if (
                    index > this.index &&
                    sortingOffset.left +
                      windowScrollDelta.left +
                      offset.width >=
                      edgeOffset.left
                  ) {
                    translate.x = -(this.width + this.marginOffset.x);
                    this.newIndex = index;
                  } else if (
                    index < this.index &&
                    sortingOffset.left + windowScrollDelta.left <=
                      edgeOffset.left + offset.width
                  ) {
                    translate.x = this.width + this.marginOffset.x;
                    if (this.newIndex == null) {
                      this.newIndex = index;
                    }
                  }
                }
              } else if (this.axis.y) {
                if (
                  index > this.index &&
                  sortingOffset.top + windowScrollDelta.top + offset.height >=
                    edgeOffset.top
                ) {
                  translate.y = -(this.height + this.marginOffset.y);
                  this.newIndex = index;
                } else if (
                  index < this.index &&
                  sortingOffset.top + windowScrollDelta.top <=
                    edgeOffset.top + offset.height
                ) {
                  translate.y = this.height + this.marginOffset.y;
                  if (this.newIndex == null) {
                    this.newIndex = index;
                  }
                }
              }
              node.style[
                ''.concat(vendorPrefix, 'Transform')
              ] = 'translate3d('
                .concat(translate.x, 'px,')
                .concat(translate.y, 'px,0)');
            }
            if (this.newIndex == null) {
              this.newIndex = this.index;
            }
            if (onSortOver && this.newIndex !== prevIndex) {
              onSortOver({
                newIndex: this.newIndex,
                oldIndex: prevIndex,
                index: this.index,
                collection: this.manager.active.collection,
              });
            }
          },
        },
        {
          key: 'getWrappedInstance',
          value: function getWrappedInstance() {
            invariant(
              config.withRef,
              'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableContainer() call',
            );
            return this.refs.wrappedInstance;
          },
        },
        {
          key: 'getContainer',
          value: function getContainer() {
            var getContainer = this.props.getContainer;
            if (typeof getContainer !== 'function') {
              var _this$wrappedInstance;
              return (_this$wrappedInstance = this.wrappedInstanceRef) ===
                null || _this$wrappedInstance === void 0
                ? void 0
                : _this$wrappedInstance.current.firstElementChild;
            }
            return getContainer(
              config.withRef ? this.getWrappedInstance() : undefined,
            );
          },
        },
        {
          key: 'render',
          value: function render() {
            var ref = config.withRef ? this.wrappedInstanceRef : null;
            return createElement(
              SortableElementContext.Provider,
              {
                value: this.getContext(),
              },
              createElement(
                'div',
                {
                  ref: this.wrappedInstanceRef,
                },
                createElement(
                  WrappedComponent,
                  _extends(
                    {
                      ref: ref,
                    },
                    omit(
                      this.props,
                      'contentWindow',
                      'useWindowAsScrollContainer',
                      'distance',
                      'helperClass',
                      'hideSortableGhost',
                      'transitionDuration',
                      'useDragHandle',
                      'pressDelay',
                      'pressThreshold',
                      'shouldCancelStart',
                      'updateBeforeSortStart',
                      'onSortStart',
                      'onSortMove',
                      'onSortEnd',
                      'axis',
                      'lockAxis',
                      'lockOffset',
                      'lockToContainerEdges',
                      'getContainer',
                      'getHelperDimensions',
                      'helperContainer',
                      'disableAutoscroll',
                    ),
                  ),
                ),
              ),
            );
          },
        },
        {
          key: 'helperContainer',
          get: function get() {
            var helperContainer = this.props.helperContainer;
            if (typeof helperContainer === 'function') {
              return helperContainer();
            }
            return this.props.helperContainer || this.document.body;
          },
        },
      ]);
    })(Component)),
    _defineProperty(
      _WithSortableContainer,
      'displayName',
      provideDisplayName('sortableList', WrappedComponent),
    ),
    _defineProperty(_WithSortableContainer, 'defaultProps', {
      axis: 'y',
      transitionDuration: 300,
      pressDelay: 0,
      pressThreshold: 5,
      distance: 0,
      useWindowAsScrollContainer: false,
      hideSortableGhost: true,
      shouldCancelStart: function shouldCancelStart(event) {
        var disabledElements = [
          'input',
          'textarea',
          'select',
          'option',
          'button',
        ];
        if (
          disabledElements.indexOf(event.target.tagName.toLowerCase()) !== -1
        ) {
          return true;
        }
        return false;
      },
      lockToContainerEdges: false,
      lockOffset: '50%',
      getHelperDimensions: function getHelperDimensions(_ref) {
        var node = _ref.node;
        return {
          width: node.offsetWidth,
          height: node.offsetHeight,
        };
      },
      disableAutoscroll: false,
    }),
    _defineProperty(_WithSortableContainer, 'propTypes', {
      axis: PropTypes.oneOf(['x', 'y', 'xy']),
      distance: PropTypes.number,
      lockAxis: PropTypes.string,
      helperClass: PropTypes.string,
      transitionDuration: PropTypes.number,
      contentWindow: PropTypes.any,
      updateBeforeSortStart: PropTypes.func,
      onSortStart: PropTypes.func,
      onSortMove: PropTypes.func,
      onSortOver: PropTypes.func,
      onSortEnd: PropTypes.func,
      shouldCancelStart: PropTypes.func,
      pressDelay: PropTypes.number,
      pressThreshold: PropTypes.number,
      useDragHandle: PropTypes.bool,
      useWindowAsScrollContainer: PropTypes.bool,
      hideSortableGhost: PropTypes.bool,
      lockToContainerEdges: PropTypes.bool,
      lockOffset: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
        PropTypes.arrayOf(
          PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        ),
      ]),
      getContainer: PropTypes.func,
      getHelperDimensions: PropTypes.func,
      helperContainer: PropTypes.oneOfType([
        PropTypes.func,
        typeof HTMLElement === 'undefined'
          ? PropTypes.any
          : PropTypes.instanceOf(HTMLElement),
      ]),
      disableAutoscroll: PropTypes.bool,
    }),
    _WithSortableContainer
  );
}

function _callSuper$1(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct$1()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e),
    )
  );
}
function _isNativeReflectConstruct$1() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function() {}),
    );
  } catch (t) {}
  return (_isNativeReflectConstruct$1 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function sortableElement(WrappedComponent) {
  var _WithSortableElement;
  var config =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          withRef: false,
        };
  return (
    (_WithSortableElement = (function(_React$Component) {
      function WithSortableElement() {
        var _this;
        _classCallCheck(this, WithSortableElement);
        for (
          var _len = arguments.length, args = new Array(_len), _key = 0;
          _key < _len;
          _key++
        ) {
          args[_key] = arguments[_key];
        }
        _this = _callSuper$1(this, WithSortableElement, [].concat(args));
        _defineProperty(_this, 'nodeRef', createRef());
        return _this;
      }
      _inherits(WithSortableElement, _React$Component);
      return _createClass(WithSortableElement, [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this$props = this.props,
              collection = _this$props.collection,
              disabled = _this$props.disabled,
              index = _this$props.index;
            if (!disabled) {
              this.setDraggable(collection, index);
            }
          },
        },
        {
          key: 'componentDidUpdate',
          value: function componentDidUpdate(prevProps) {
            if (this.props.index !== prevProps.index && this.node) {
              this.node.sortableInfo.index = this.props.index;
            }
            var _this$props2 = this.props,
              collection = _this$props2.collection,
              disabled = _this$props2.disabled,
              index = _this$props2.index;
            if (this.props.disabled !== prevProps.disabled) {
              if (disabled) {
                this.removeDraggable(collection);
              } else {
                this.setDraggable(collection, index);
              }
            } else if (this.props.collection !== prevProps.collection) {
              this.removeDraggable(prevProps.collection);
              this.setDraggable(collection, index);
            }
          },
        },
        {
          key: 'componentWillUnmount',
          value: function componentWillUnmount() {
            var _this$props3 = this.props,
              collection = _this$props3.collection,
              disabled = _this$props3.disabled;
            if (!disabled) {
              this.removeDraggable(collection);
            }
          },
        },
        {
          key: 'setDraggable',
          value: function setDraggable(collection, index) {
            var node = this.nodeRef.current.firstElementChild;
            if (!node) {
              console.warn('Sortable nodeRef is not attached');
              return;
            }
            node.sortableInfo = {
              index: index,
              collection: collection,
              manager: this.context.manager,
            };
            this.node = node;
            this.ref = {
              node: node,
            };
            this.context.manager.add(collection, this.ref);
          },
        },
        {
          key: 'removeDraggable',
          value: function removeDraggable(collection) {
            this.context.manager.remove(collection, this.ref);
          },
        },
        {
          key: 'getWrappedInstance',
          value: function getWrappedInstance() {
            invariant(
              config.withRef,
              'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call',
            );
            return this.nodeRef.current.firstElementChild;
          },
        },
        {
          key: 'render',
          value: function render() {
            var props = omit(this.props, 'collection', 'disabled', 'index');
            var ref = config.withRef ? this.nodeRef : null;
            return createElement(
              'div',
              {
                ref: this.nodeRef,
              },
              createElement(
                WrappedComponent,
                _extends(
                  {
                    ref: ref,
                  },
                  props,
                ),
              ),
            );
          },
        },
      ]);
    })(Component)),
    _defineProperty(
      _WithSortableElement,
      'displayName',
      provideDisplayName('sortableElement', WrappedComponent),
    ),
    _defineProperty(
      _WithSortableElement,
      'contextType',
      SortableElementContext,
    ),
    _defineProperty(_WithSortableElement, 'propTypes', {
      index: PropTypes.number.isRequired,
      collection: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      disabled: PropTypes.bool,
    }),
    _defineProperty(_WithSortableElement, 'defaultProps', {
      collection: 0,
    }),
    _WithSortableElement
  );
}

function _callSuper$2(t, o, e) {
  return (
    (o = _getPrototypeOf(o)),
    _possibleConstructorReturn(
      t,
      _isNativeReflectConstruct$2()
        ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor)
        : o.apply(t, e),
    )
  );
}
function _isNativeReflectConstruct$2() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function() {}),
    );
  } catch (t) {}
  return (_isNativeReflectConstruct$2 = function _isNativeReflectConstruct() {
    return !!t;
  })();
}
function sortableHandle(WrappedComponent) {
  var _WithSortableHandle;
  var config =
    arguments.length > 1 && arguments[1] !== undefined
      ? arguments[1]
      : {
          withRef: false,
        };
  return (
    (_WithSortableHandle = (function(_React$Component) {
      function WithSortableHandle(props) {
        var _this;
        _classCallCheck(this, WithSortableHandle);
        _this = _callSuper$2(this, WithSortableHandle, [props]);
        _this.wrappedInstanceRef = createRef();
        return _this;
      }
      _inherits(WithSortableHandle, _React$Component);
      return _createClass(WithSortableHandle, [
        {
          key: 'componentDidMount',
          value: function componentDidMount() {
            var _this$wrappedInstance;
            var node =
              (_this$wrappedInstance = this.wrappedInstanceRef) === null ||
              _this$wrappedInstance === void 0 ||
              (_this$wrappedInstance = _this$wrappedInstance.current) ===
                null ||
              _this$wrappedInstance === void 0
                ? void 0
                : _this$wrappedInstance.firstElementChild;
            console.log('sortableHandle: ', node);
            if (node) {
              node.sortableHandle = true;
            }
          },
        },
        {
          key: 'getWrappedInstance',
          value: function getWrappedInstance() {
            invariant(
              config.withRef,
              'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call',
            );
            return this.wrappedInstanceRef;
          },
        },
        {
          key: 'render',
          value: function render() {
            var ref = config.withRef ? this.wrappedInstanceRef : null;
            return createElement(
              'div',
              {
                ref: this.nodeRef,
              },
              createElement(
                WrappedComponent,
                _extends(
                  {
                    ref: ref,
                  },
                  this.props,
                ),
              ),
            );
          },
        },
      ]);
    })(Component)),
    _defineProperty(
      _WithSortableHandle,
      'displayName',
      provideDisplayName('sortableHandle', WrappedComponent),
    ),
    _WithSortableHandle
  );
}

export {
  sortableContainer as SortableContainer,
  sortableContainer,
  sortableElement as SortableElement,
  sortableElement,
  sortableHandle as SortableHandle,
  sortableHandle,
  arrayMove,
};
