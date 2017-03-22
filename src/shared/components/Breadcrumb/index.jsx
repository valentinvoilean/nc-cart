import React, {PropTypes} from 'react';
import Breadcrumbs from 'react-router-breadcrumbs';

import styles from './styles.scss';

export default class Breadcrumb extends React.PureComponent {
  static propTypes = {
    routes: PropTypes.array
  };

  static defaultProps = {
    routes: []
  };

  render() {
    const {routes} = this.props;

    return (
      <Breadcrumbs routes={routes} createSeparator=" » " className={styles.breadcrumb} />
    );
  }
}
