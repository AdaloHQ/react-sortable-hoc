import * as React from 'react';
import PropTypes from 'prop-types';
import invariant from 'invariant';

import {provideDisplayName, omit} from '../utils';
import SortableElementContext from '../contexts/SortableElementContext';

export default function sortableElement(
  WrappedComponent,
  config = {withRef: false},
) {
  return class WithSortableElement extends React.Component {
    static displayName = provideDisplayName(
      'sortableElement',
      WrappedComponent,
    );

    static contextType = SortableElementContext;

    static propTypes = {
      index: PropTypes.number.isRequired,
      collection: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
      disabled: PropTypes.bool,
    };

    static defaultProps = {
      collection: 0,
    };

    nodeRef = React.createRef();

    componentDidMount() {
      const {collection, disabled, index} = this.props;
      if (!disabled) {
        this.setDraggable(collection, index);
      }
    }

    componentDidUpdate(prevProps) {
      if (this.props.index !== prevProps.index && this.node) {
        this.node.sortableInfo.index = this.props.index;
      }

      const {collection, disabled, index} = this.props;
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
    }

    componentWillUnmount() {
      const {collection, disabled} = this.props;

      if (!disabled) {
        this.removeDraggable(collection);
      }
    }

    setDraggable(collection, index) {
      const node = this.nodeRef.current.firstElementChild;

      if (!node) {
        // eslint-disable-next-line no-console
        console.warn('Sortable nodeRef is not attached');
        return;
      }

      node.sortableInfo = {
        index,
        collection,
        manager: this.context.manager,
      };

      this.node = node;
      this.ref = {node};
      this.context.manager.add(collection, this.ref);
    }

    removeDraggable(collection) {
      this.context.manager.remove(collection, this.ref);
    }

    getWrappedInstance() {
      invariant(
        config.withRef,
        'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableElement() call',
      );
      return this.refs.wrappedInstance;
    }

    render() {
      const props = omit(this.props, 'collection', 'disabled', 'index');
      const ref = config.withRef ? 'wrappedInstance' : null;
      return (
        <div ref={this.nodeRef}>
          <WrappedComponent ref={ref} {...props} />
        </div>
      );
    }
  };
}
