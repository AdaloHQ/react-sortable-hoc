import * as React from 'react';
import invariant from 'invariant';

import { provideDisplayName } from '../utils';

export default function sortableHandle(
  WrappedComponent,
  config = { withRef: false },
) {
  return class WithSortableHandle extends React.Component {
    static displayName = provideDisplayName('sortableHandle', WrappedComponent);

    constructor(props) {
      super(props);
      this.wrappedInstanceRef = React.createRef();
    }

    componentDidMount() {
      const node = this.wrappedInstanceRef.current;
      if (node) {
        node.sortableHandle = true;
      }
    }

    getWrappedInstance() {
      invariant(
        config.withRef,
        'To access the wrapped instance, you need to pass in {withRef: true} as the second argument of the SortableHandle() call',
      );
      return this.wrappedInstanceRef.current;
    }

    render() {
      const ref = config.withRef ? this.wrappedInstanceRef : null;

      return <WrappedComponent ref={ref} {...this.props} />;
    }
  };
}
