import React, {PropTypes} from 'react';
import {Toaster, Intent} from '@blueprintjs/core';

import styles from './styles.scss';

export default class Product extends React.PureComponent {
  static propTypes = {
    // Store Props
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,

    actions: PropTypes.object.isRequired
  };

  handleClick() {
    const {id, actions, name} = this.props;

    this.toaster.show({
      intent: Intent.SUCCESS,
      iconName: 'tick',
      message: `${name} has been added to cart !`
    });

    actions.addItem(id);
  }

  render() {
    const {name, description, price} = this.props;

    return (
      <div className={styles.product}>
        <h3 className={styles.title}>{name}</h3>
        <p className={styles.description}>{description}</p>
        <div className={styles.group}>
          <button className={styles.button} onClick={::this.handleClick}>Add to cart</button>
          <div className={styles.price}>€{price}</div>
        </div>
        <Toaster ref={(c) => this.toaster = c} className="toaster" />
      </div>
    );
  }
}
