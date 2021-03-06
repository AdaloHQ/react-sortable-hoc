(function(global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? factory(
        exports,
        require('react'),
        require('prop-types'),
        require('react-dom'),
      )
    : typeof define === 'function' && define.amd
    ? define(['exports', 'react', 'prop-types', 'react-dom'], factory)
    : ((global = global || self),
      factory(
        (global.SortableHOC = {}),
        global.React,
        global.PropTypes,
        global.ReactDOM,
      ));
})(this, function(exports, React, PropTypes, reactDom) {
  'use strict';

  PropTypes =
    PropTypes && PropTypes.hasOwnProperty('default')
      ? PropTypes['default']
      : PropTypes;

  function createCommonjsModule(fn, module) {
    return (module = {exports: {}}), fn(module, module.exports), module.exports;
  }

  var _extends_1 = createCommonjsModule(function(module) {
    function _extends() {
      module.exports = _extends =
        Object.assign ||
        function(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
              if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
              }
            }
          }

          return target;
        };

      return _extends.apply(this, arguments);
    }

    module.exports = _extends;
  });

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  var arrayWithHoles = _arrayWithHoles;

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (
        var _i = arr[Symbol.iterator](), _s;
        !(_n = (_s = _i.next()).done);
        _n = true
      ) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return'] != null) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  var iterableToArrayLimit = _iterableToArrayLimit;

  function _nonIterableRest() {
    throw new TypeError('Invalid attempt to destructure non-iterable instance');
  }

  var nonIterableRest = _nonIterableRest;

  function _slicedToArray(arr, i) {
    return (
      arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest()
    );
  }

  var slicedToArray = _slicedToArray;

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    }
  }

  var arrayWithoutHoles = _arrayWithoutHoles;

  function _iterableToArray(iter) {
    if (
      Symbol.iterator in Object(iter) ||
      Object.prototype.toString.call(iter) === '[object Arguments]'
    )
      return Array.from(iter);
  }

  var iterableToArray = _iterableToArray;

  function _nonIterableSpread() {
    throw new TypeError('Invalid attempt to spread non-iterable instance');
  }

  var nonIterableSpread = _nonIterableSpread;

  function _toConsumableArray(arr) {
    return (
      arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread()
    );
  }

  var toConsumableArray = _toConsumableArray;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError('Cannot call a class as a function');
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ('value' in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var _typeof_1 = createCommonjsModule(function(module) {
    function _typeof2(obj) {
      if (typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol') {
        _typeof2 = function _typeof2(obj) {
          return typeof obj;
        };
      } else {
        _typeof2 = function _typeof2(obj) {
          return obj &&
            typeof Symbol === 'function' &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : typeof obj;
        };
      }
      return _typeof2(obj);
    }

    function _typeof(obj) {
      if (
        typeof Symbol === 'function' &&
        _typeof2(Symbol.iterator) === 'symbol'
      ) {
        module.exports = _typeof = function _typeof(obj) {
          return _typeof2(obj);
        };
      } else {
        module.exports = _typeof = function _typeof(obj) {
          return obj &&
            typeof Symbol === 'function' &&
            obj.constructor === Symbol &&
            obj !== Symbol.prototype
            ? 'symbol'
            : _typeof2(obj);
        };
      }

      return _typeof(obj);
    }

    module.exports = _typeof;
  });

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      );
    }

    return self;
  }

  var assertThisInitialized = _assertThisInitialized;

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof_1(call) === 'object' || typeof call === 'function')) {
      return call;
    }

    return assertThisInitialized(self);
  }

  var possibleConstructorReturn = _possibleConstructorReturn;

  var getPrototypeOf = createCommonjsModule(function(module) {
    function _getPrototypeOf(o) {
      module.exports = _getPrototypeOf = Object.setPrototypeOf
        ? Object.getPrototypeOf
        : function _getPrototypeOf(o) {
            return o.__proto__ || Object.getPrototypeOf(o);
          };
      return _getPrototypeOf(o);
    }

    module.exports = _getPrototypeOf;
  });

  var setPrototypeOf = createCommonjsModule(function(module) {
    function _setPrototypeOf(o, p) {
      module.exports = _setPrototypeOf =
        Object.setPrototypeOf ||
        function _setPrototypeOf(o, p) {
          o.__proto__ = p;
          return o;
        };

      return _setPrototypeOf(o, p);
    }

    module.exports = _setPrototypeOf;
  });

  function _inherits(subClass, superClass) {
    if (typeof superClass !== 'function' && superClass !== null) {
      throw new TypeError('Super expression must either be null or a function');
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true,
      },
    });
    if (superClass) setPrototypeOf(subClass, superClass);
  }

  var inherits = _inherits;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true,
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var defineProperty = _defineProperty;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  /**
   * Use invariant() to assert state which your program assumes to be true.
   *
   * Provide sprintf-style format (only %s is supported) and arguments
   * to provide information about what broke and what you were
   * expecting.
   *
   * The invariant message will be stripped in production, but the invariant
   * will remain to ensure logic does not differ in production.
   */

  var NODE_ENV = process.env.NODE_ENV;

  var invariant = function(condition, format, a, b, c, d, e, f) {
    if (NODE_ENV !== 'production') {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }

    if (!condition) {
      var error;
      if (format === undefined) {
        error = new Error(
          'Minified exception occurred; use the non-minified dev environment ' +
            'for the full error message and additional helpful warnings.',
        );
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(
          format.replace(/%s/g, function() {
            return args[argIndex++];
          }),
        );
        error.name = 'Invariant Violation';
      }

      error.framesToPop = 1; // we don't care about invariant's own frame
      throw error;
    }
  };

  var invariant_1 = invariant;

  var Manager = (function() {
    function Manager() {
      classCallCheck(this, Manager);

      defineProperty(this, 'refs', {});
    }

    createClass(Manager, [
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

    return Manager;
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
  function provideDisplayName(prefix, Component) {
    var componentName = Component.displayName || Component.name;
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
      invariant_1(
        match !== null,
        'lockOffset value should be a number or a string of a ' +
          'number followed by "px" or "%". Given %s',
        lockOffset,
      );
      offsetX = parseFloat(lockOffset);
      offsetY = parseFloat(lockOffset);
      unit = match[1];
    }

    invariant_1(
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

  function _finallyRethrows(body, finalizer) {
    try {
      var result = body();
    } catch (e) {
      return finalizer(true, e);
    }

    if (result && result.then) {
      return result.then(
        finalizer.bind(null, false),
        finalizer.bind(null, true),
      );
    }

    return finalizer(false, value);
  }
  function sortableContainer(WrappedComponent) {
    var _class, _temp;

    var config =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            withRef: false,
          };
    return (
      (_temp = _class = (function(_React$Component) {
        inherits(WithSortableContainer, _React$Component);

        function WithSortableContainer(props) {
          var _this;

          classCallCheck(this, WithSortableContainer);

          _this = possibleConstructorReturn(
            this,
            getPrototypeOf(WithSortableContainer).call(this, props),
          );

          defineProperty(
            assertThisInitialized(assertThisInitialized(_this)),
            'getEventTarget',
            function(container, key) {
              if (key === 'start') {
                return container;
              }

              return window;
            },
          );

          defineProperty(
            assertThisInitialized(assertThisInitialized(_this)),
            'handleStart',
            function(event) {
              var _this$props = _this.props,
                distance = _this$props.distance,
                shouldCancelStart = _this$props.shouldCancelStart;

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
            },
          );

          defineProperty(
            assertThisInitialized(assertThisInitialized(_this)),
            'nodeIsChild',
            function(node) {
              return node.sortableInfo.manager === _this.manager;
            },
          );

          defineProperty(
            assertThisInitialized(assertThisInitialized(_this)),
            'handleMove',
            function(event) {
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
            },
          );

          defineProperty(
            assertThisInitialized(assertThisInitialized(_this)),
            'handleEnd',
            function() {
              _this._touched = false;

              _this.cancel();
            },
          );

          defineProperty(
            assertThisInitialized(assertThisInitialized(_this)),
            'cancel',
            function() {
              var distance = _this.props.distance;
              var sorting = _this.state.sorting;

              if (!sorting) {
                if (!distance) {
                  clearTimeout(_this.pressTimer);
                }

                _this.manager.active = null;
              }
            },
          );

          defineProperty(
            assertThisInitialized(assertThisInitialized(_this)),
            'handlePress',
            function(event) {
              try {
                var active = _this.manager.getActive();

                var _temp6 = (function() {
                  if (active) {
                    var _temp7 = function _temp7() {
                      var margin = getElementMargin(_node);

                      var containerBoundingRect = _this.container.getBoundingClientRect();

                      var dimensions = _getHelperDimensions({
                        index: _index,
                        node: _node,
                        collection: _collection,
                      });

                      _this.node = _node;
                      _this.margin = margin;
                      _this.width = dimensions.width;
                      _this.height = dimensions.height;
                      _this.marginOffset = {
                        x: _this.margin.left + _this.margin.right,
                        y: Math.max(_this.margin.top, _this.margin.bottom),
                      };
                      _this.boundingClientRect = _node.getBoundingClientRect();
                      _this.containerBoundingRect = containerBoundingRect;
                      _this.index = _index;
                      _this.newIndex = _index;
                      _this.axis = {
                        x: _axis.indexOf('x') >= 0,
                        y: _axis.indexOf('y') >= 0,
                      };
                      _this.offsetEdge = getEdgeOffset(_node, _this.container);
                      _this.initialOffset = getPosition(event);
                      _this.initialScroll = {
                        top: _this.container.scrollTop,
                        left: _this.container.scrollLeft,
                      };
                      _this.initialWindowScroll = {
                        top: window.pageYOffset,
                        left: window.pageXOffset,
                      };

                      var fields = _node.querySelectorAll(
                        'input, textarea, select',
                      );

                      var clonedNode = _node.cloneNode(true);

                      var clonedFields = toConsumableArray(
                        clonedNode.querySelectorAll('input, textarea, select'),
                      );

                      clonedFields.forEach(function(field, i) {
                        if (field.type !== 'file' && fields[_index]) {
                          field.value = fields[i].value;
                        }
                      });
                      _this.helper = _this.helperContainer.appendChild(
                        clonedNode,
                      );
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

                      if (_hideSortableGhost) {
                        _this.sortableGhost = _node;
                        _node.style.visibility = 'hidden';
                        _node.style.opacity = 0;
                      }

                      _this.minTranslate = {};
                      _this.maxTranslate = {};

                      if (_this.axis.x) {
                        _this.minTranslate.x =
                          (_useWindowAsScrollContainer
                            ? 0
                            : containerBoundingRect.left) -
                          _this.boundingClientRect.left -
                          _this.width / 2;
                        _this.maxTranslate.x =
                          (_useWindowAsScrollContainer
                            ? _this.contentWindow.innerWidth
                            : containerBoundingRect.left +
                              containerBoundingRect.width) -
                          _this.boundingClientRect.left -
                          _this.width / 2;
                      }

                      if (_this.axis.y) {
                        _this.minTranslate.y =
                          (_useWindowAsScrollContainer
                            ? 0
                            : containerBoundingRect.top) -
                          _this.boundingClientRect.top -
                          _this.height / 2;
                        _this.maxTranslate.y =
                          (_useWindowAsScrollContainer
                            ? _this.contentWindow.innerHeight
                            : containerBoundingRect.top +
                              containerBoundingRect.height) -
                          _this.boundingClientRect.top -
                          _this.height / 2;
                      }

                      if (_helperClass) {
                        var _this$helper$classLis;

                        (_this$helper$classLis =
                          _this.helper.classList).add.apply(
                          _this$helper$classLis,
                          toConsumableArray(_helperClass.split(' ')),
                        );
                      }

                      _this.listenerNode = event.touches
                        ? _node
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
                        sortingIndex: _index,
                      });

                      if (_onSortStart) {
                        _onSortStart(
                          {
                            node: _node,
                            index: _index,
                            collection: _collection,
                          },
                          event,
                        );
                      }
                    };

                    var _this$props3 = _this.props,
                      _axis = _this$props3.axis,
                      _getHelperDimensions = _this$props3.getHelperDimensions,
                      _helperClass = _this$props3.helperClass,
                      _hideSortableGhost = _this$props3.hideSortableGhost,
                      updateBeforeSortStart =
                        _this$props3.updateBeforeSortStart,
                      _onSortStart = _this$props3.onSortStart,
                      _useWindowAsScrollContainer =
                        _this$props3.useWindowAsScrollContainer;
                    var _node = active.node,
                      _collection = active.collection;
                    var _index = _node.sortableInfo.index;

                    var _temp8 = (function() {
                      if (typeof updateBeforeSortStart === 'function') {
                        _this._awaitingUpdateBeforeSortStart = true;

                        var _temp9 = _finallyRethrows(
                          function() {
                            return Promise.resolve(
                              updateBeforeSortStart(
                                {
                                  node: _node,
                                  index: _index,
                                  collection: _collection,
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

                        if (_temp9 && _temp9.then)
                          return _temp9.then(function() {});
                      }
                    })();

                    return _temp8 && _temp8.then
                      ? _temp8.then(_temp7)
                      : _temp7(_temp8);
                  }
                })();

                return Promise.resolve(
                  _temp6 && _temp6.then ? _temp6.then(function() {}) : void 0,
                );
              } catch (e) {
                return Promise.reject(e);
              }
            },
          );

          defineProperty(
            assertThisInitialized(assertThisInitialized(_this)),
            'handleSortMove',
            function(event) {
              var onSortMove = _this.props.onSortMove;
              event.preventDefault();

              _this.updatePosition(event);

              _this.animateNodes();

              _this.autoscroll();

              if (onSortMove) {
                onSortMove(event);
              }
            },
          );

          defineProperty(
            assertThisInitialized(assertThisInitialized(_this)),
            'handleSortEnd',
            function(event) {
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
                var _node2 = nodes[i];
                var el = _node2.node;
                _node2.edgeOffset = null;
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
            },
          );

          defineProperty(
            assertThisInitialized(assertThisInitialized(_this)),
            'autoscroll',
            function() {
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

              if (translate.y >= _this.maxTranslate.y - _this.height / 2) {
                direction.y = 1;
                speed.y =
                  acceleration.y *
                  Math.abs(
                    (_this.maxTranslate.y - _this.height / 2 - translate.y) /
                      _this.height,
                  );
              } else if (
                translate.x >=
                _this.maxTranslate.x - _this.width / 2
              ) {
                direction.x = 1;
                speed.x =
                  acceleration.x *
                  Math.abs(
                    (_this.maxTranslate.x - _this.width / 2 - translate.x) /
                      _this.width,
                  );
              } else if (
                translate.y <=
                _this.minTranslate.y + _this.height / 2
              ) {
                direction.y = -1;
                speed.y =
                  acceleration.y *
                  Math.abs(
                    (translate.y - _this.height / 2 - _this.minTranslate.y) /
                      _this.height,
                  );
              } else if (
                translate.x <=
                _this.minTranslate.x + _this.width / 2
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
            },
          );

          _this.manager = new Manager();
          _this.events = {
            start: _this.handleStart,
            move: _this.handleMove,
            end: _this.handleEnd,
          };
          invariant_1(
            !(props.distance && props.pressDelay),
            'Attempted to set both `pressDelay` and `distance` on SortableContainer, you may only use one or the other, not both at the same time.',
          );
          _this.state = {};
          return _this;
        }

        createClass(WithSortableContainer, [
          {
            key: 'getChildContext',
            value: function getChildContext() {
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
                _this2.container = containerNode;
                _this2.document = _this2.container.ownerDocument || document;
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
                  var eventTarget = _this3.getEventTarget(
                    _this3.container,
                    key,
                  );

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
              invariant_1(
                offsets.length === 2,
                'lockOffset prop of SortableContainer should be a single ' +
                  'value or an array of exactly two values. Given %s',
                lockOffset,
              );

              var _offsets = slicedToArray(offsets, 2),
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
                  _this$getLockPixelOff2 = slicedToArray(
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
                var _node3 = nodes[i].node;
                var _index2 = _node3.sortableInfo.index;
                var width = _node3.offsetWidth;
                var height = _node3.offsetHeight;
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
                  edgeOffset = getEdgeOffset(_node3, this.container);
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

                if (_index2 === this.index) {
                  if (hideSortableGhost) {
                    this.sortableGhost = _node3;
                    _node3.style.visibility = 'hidden';
                    _node3.style.opacity = 0;
                  }

                  continue;
                }

                if (transitionDuration) {
                  _node3.style[
                    ''.concat(vendorPrefix, 'TransitionDuration')
                  ] = ''.concat(transitionDuration, 'ms');
                }

                if (this.axis.x) {
                  if (this.axis.y) {
                    if (
                      _index2 < this.index &&
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
                        translate.x =
                          nextNode.edgeOffset.left - edgeOffset.left;
                        translate.y = nextNode.edgeOffset.top - edgeOffset.top;
                      }

                      if (this.newIndex === null) {
                        this.newIndex = _index2;
                      }
                    } else if (
                      _index2 > this.index &&
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
                        translate.x =
                          prevNode.edgeOffset.left - edgeOffset.left;
                        translate.y = prevNode.edgeOffset.top - edgeOffset.top;
                      }

                      this.newIndex = _index2;
                    }
                  } else {
                    if (
                      _index2 > this.index &&
                      sortingOffset.left +
                        windowScrollDelta.left +
                        offset.width >=
                        edgeOffset.left
                    ) {
                      translate.x = -(this.width + this.marginOffset.x);
                      this.newIndex = _index2;
                    } else if (
                      _index2 < this.index &&
                      sortingOffset.left + windowScrollDelta.left <=
                        edgeOffset.left + offset.width
                    ) {
                      translate.x = this.width + this.marginOffset.x;

                      if (this.newIndex == null) {
                        this.newIndex = _index2;
                      }
                    }
                  }
                } else if (this.axis.y) {
                  if (
                    _index2 > this.index &&
                    sortingOffset.top + windowScrollDelta.top + offset.height >=
                      edgeOffset.top
                  ) {
                    translate.y = -(this.height + this.marginOffset.y);
                    this.newIndex = _index2;
                  } else if (
                    _index2 < this.index &&
                    sortingOffset.top + windowScrollDelta.top <=
                      edgeOffset.top + offset.height
                  ) {
                    translate.y = this.height + this.marginOffset.y;

                    if (this.newIndex == null) {
                      this.newIndex = _index2;
                    }
                  }
                }

                _node3.style[
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
              invariant_1(
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
                return reactDom.findDOMNode(this);
              }

              return getContainer(
                config.withRef ? this.getWrappedInstance() : undefined,
              );
            },
          },
          {
            key: 'render',
            value: function render() {
              var ref = config.withRef ? 'wrappedInstance' : null;
              return React.createElement(
                WrappedComponent,
                _extends_1(
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
                  ),
                ),
              );
            },
          },
          {
            key: 'helperContainer',
            get: function get() {
              return this.props.helperContainer || this.document.body;
            },
          },
        ]);

        return WithSortableContainer;
      })(React.Component)),
      defineProperty(
        _class,
        'displayName',
        provideDisplayName('sortableList', WrappedComponent),
      ),
      defineProperty(_class, 'defaultProps', {
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
      }),
      defineProperty(_class, 'propTypes', {
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
        helperContainer:
          typeof HTMLElement === 'undefined'
            ? PropTypes.any
            : PropTypes.instanceOf(HTMLElement),
      }),
      defineProperty(_class, 'childContextTypes', {
        manager: PropTypes.object.isRequired,
      }),
      _temp
    );
  }

  function sortableElement(WrappedComponent) {
    var _class, _temp;

    var config =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            withRef: false,
          };
    return (
      (_temp = _class = (function(_React$Component) {
        inherits(WithSortableElement, _React$Component);

        function WithSortableElement() {
          classCallCheck(this, WithSortableElement);

          return possibleConstructorReturn(
            this,
            getPrototypeOf(WithSortableElement).apply(this, arguments),
          );
        }

        createClass(WithSortableElement, [
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
            key: 'componentWillReceiveProps',
            value: function componentWillReceiveProps(nextProps) {
              if (this.props.index !== nextProps.index && this.node) {
                this.node.sortableInfo.index = nextProps.index;
              }

              if (this.props.disabled !== nextProps.disabled) {
                var collection = nextProps.collection,
                  disabled = nextProps.disabled,
                  index = nextProps.index;

                if (disabled) {
                  this.removeDraggable(collection);
                } else {
                  this.setDraggable(collection, index);
                }
              } else if (this.props.collection !== nextProps.collection) {
                this.removeDraggable(this.props.collection);
                this.setDraggable(nextProps.collection, nextProps.index);
              }
            },
          },
          {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
              var _this$props2 = this.props,
                collection = _this$props2.collection,
                disabled = _this$props2.disabled;

              if (!disabled) {
                this.removeDraggable(collection);
              }
            },
          },
          {
            key: 'setDraggable',
            value: function setDraggable(collection, index) {
              var node = reactDom.findDOMNode(this);
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
              invariant_1(
                config.withRef,
                'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call',
              );
              return this.refs.wrappedInstance;
            },
          },
          {
            key: 'render',
            value: function render() {
              var ref = config.withRef ? 'wrappedInstance' : null;
              return React.createElement(
                WrappedComponent,
                _extends_1(
                  {
                    ref: ref,
                  },
                  omit(this.props, 'collection', 'disabled', 'index'),
                ),
              );
            },
          },
        ]);

        return WithSortableElement;
      })(React.Component)),
      defineProperty(
        _class,
        'displayName',
        provideDisplayName('sortableElement', WrappedComponent),
      ),
      defineProperty(_class, 'contextTypes', {
        manager: PropTypes.object.isRequired,
      }),
      defineProperty(_class, 'propTypes', {
        index: PropTypes.number.isRequired,
        collection: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        disabled: PropTypes.bool,
      }),
      defineProperty(_class, 'defaultProps', {
        collection: 0,
      }),
      _temp
    );
  }

  function sortableHandle(WrappedComponent) {
    var _class, _temp;

    var config =
      arguments.length > 1 && arguments[1] !== undefined
        ? arguments[1]
        : {
            withRef: false,
          };
    return (
      (_temp = _class = (function(_React$Component) {
        inherits(WithSortableHandle, _React$Component);

        function WithSortableHandle() {
          classCallCheck(this, WithSortableHandle);

          return possibleConstructorReturn(
            this,
            getPrototypeOf(WithSortableHandle).apply(this, arguments),
          );
        }

        createClass(WithSortableHandle, [
          {
            key: 'componentDidMount',
            value: function componentDidMount() {
              var node = reactDom.findDOMNode(this);
              node.sortableHandle = true;
            },
          },
          {
            key: 'getWrappedInstance',
            value: function getWrappedInstance() {
              invariant_1(
                config.withRef,
                'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call',
              );
              return this.refs.wrappedInstance;
            },
          },
          {
            key: 'render',
            value: function render() {
              var ref = config.withRef ? 'wrappedInstance' : null;
              return React.createElement(
                WrappedComponent,
                _extends_1(
                  {
                    ref: ref,
                  },
                  this.props,
                ),
              );
            },
          },
        ]);

        return WithSortableHandle;
      })(React.Component)),
      defineProperty(
        _class,
        'displayName',
        provideDisplayName('sortableHandle', WrappedComponent),
      ),
      _temp
    );
  }

  exports.SortableContainer = sortableContainer;
  exports.sortableContainer = sortableContainer;
  exports.SortableElement = sortableElement;
  exports.sortableElement = sortableElement;
  exports.SortableHandle = sortableHandle;
  exports.sortableHandle = sortableHandle;
  exports.arrayMove = arrayMove;

  Object.defineProperty(exports, '__esModule', {value: true});
});
