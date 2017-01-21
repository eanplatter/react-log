import React, { PropTypes } from 'react';
import compiler from './compiler';
import { serializeStyleObject } from './utils/styleObjectSerializer';

class Log extends React.Component {
  componentDidMount() {
    this.log();
  }

  componentWillUpdate() {
    if (console.clear) {
      console.clear();
    } else {
      clear();
    }
  }

  componentDidUpdate() {
    this.log();
  }

  log() {
    const { children } = this.props;

    const body = React.createElement('body', null, children);
    const compiledData = compiler(body);
    const styles = compiledData.styles.map((item) => serializeStyleObject(item));

    console.log(compiledData.value, ...styles);
  }

  render() {
    return false;
  }
}

Log.propTypes = {
  children: PropTypes.node,
};

export default Log;
