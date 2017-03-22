import React, {PropTypes} from 'react';

import styles from './styles.scss';

export default class MainContainer extends React.PureComponent {
  static propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.array,
      PropTypes.string
    ])
  };

  render() {
    const {children} = this.props;

    return (
      <div className={`${styles.mainContainer} clearfix container`}>
        {children}
      </div>
    );
  }
}
