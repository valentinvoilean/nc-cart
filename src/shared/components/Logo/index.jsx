import React from 'react';

import {Icon} from 'shared/components';
import styles from './styles.scss';
import logo from 'static/svg/logo.svg';

export default class Logo extends React.PureComponent {
  render() {
    return (
      <a className={`${styles.logo} clearfix`} href="/">
        <Icon glyph={logo} className={styles.logoIcon} />
      </a>
    );
  }
}
