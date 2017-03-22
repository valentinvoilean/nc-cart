import React from 'react';

import {HeaderBanner} from './components';
import {Logo} from 'shared/components';

import styles from './styles.scss';

export default class Header extends React.PureComponent {
  render() {
    return (
      <div className={`${styles.header} container`}>
        <Logo />
        <HeaderBanner />
      </div>
    );
  }
}
