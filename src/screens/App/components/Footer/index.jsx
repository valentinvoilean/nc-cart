import React from 'react';

import {Logo} from 'shared/components';

import styles from './styles.scss';

export default class Footer extends React.PureComponent {
  render() {
    return (
      <footer className={`${styles.footer} clearfix container`}>
        <Logo />
        <span className={styles.copyright}><span role="img" aria-label="copyright">©</span>2017</span>
      </footer>
    );
  }
}
