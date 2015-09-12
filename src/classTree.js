import React from 'react';

const getDisplayName = Component => Component.displayName || Component.name || 'Component';

const factory = ({ propName = 'classTree', separator = '__' }) => {
  return WrappedComponent => {
    const convertToClassName = (element, prefix = '') => {
      if (typeof element.type ==='string' && element.props) {
        let props = {};

        if (element.props[propName]) {
          props.className = [prefix + element.props[propName], element.props.className].filter(className => !!className).join(' ');
          prefix = `${prefix}${element.props[propName]}${separator}`;
        }

        if (element.props.children) {
          props.children = Array.isArray(element.props.children) ?
            element.props.children.map(child => convertToClassName(child, prefix)) :
            convertToClassName(element.props.children, prefix);
        }

        return React.cloneElement(element, props);
      }
      else {
        return element;
      }
    };

    const displayName = `${propName}(${getDisplayName(WrappedComponent)})`;

    return class classTree extends WrappedComponent {
      static displayName = displayName;

      render(...args) {
        return convertToClassName(super.render(...args), true);
      }
    };
  };
};

export default factory({});
export { factory };
