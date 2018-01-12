import React from 'react';
import PropTypes from 'prop-types';


const propTypes = {
  shouldUpdate:PropTypes.bool
}
const defaultProps = { 
  shouldUpdate: true 
}
export class StaticContainer extends React.Component{
  shouldComponentUpdate(nextProps){
    return !!nextProps.shouldUpdate;
  }

  render() {
    const child = this.props.children;
    if (!child) {
      return null;
    }
    //console.log(React.Children.count(child))
    return React.Children.only(child);
  }
}

StaticContainer.propTypes = propTypes;
StaticContainer.defaultProps = defaultProps;
