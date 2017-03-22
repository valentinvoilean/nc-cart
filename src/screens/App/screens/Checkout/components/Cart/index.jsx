import React, {PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Intent, Toaster} from '@blueprintjs/core';

import {CartProduct} from './components';

import styles from './styles.scss';

export default class Cart extends React.PureComponent {
  static propTypes = {
    // Store Props
    products: PropTypes.array.isRequired,
    cartItems: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    subtotal: PropTypes.number.isRequired,
    vat: PropTypes.number.isRequired,

    // Store actions
    actions: PropTypes.object.isRequired
  };

  handleRemove(id, name) {
    this.toaster.show({
      intent: Intent.PRIMARY,
      iconName: 'trash',
      message: `${name} has been removed from cart !`
    });
    this.props.actions.removeItem(id);
  }

  render() {
    const {products, cartItems, total, subtotal, vat, actions} = this.props;

    const returnCartItems = () => {
      return cartItems.map(productData => {
        return (
          <CartProduct key={`cart-product-${productData.id}`}
                       {...productData}
                       products={products}
                       actions={actions}
                       onRemove={::this.handleRemove}
          />
        );
      });
    };

    return (
      <section className={`${styles.wrapper} clearfix`}>
        <h2>{'Your boat\'s shopping cart'}</h2>
        <p>Free shipping! We will fly your order to your boat with one of our Netcentric drones the moment you click
          that checkout button!</p>
        <form>
          <table className={styles.table} cellPadding="0" cellSpacing="0">
            <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            </thead>
            <ReactCSSTransitionGroup
              component="tbody"
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
            {returnCartItems()}
            </ReactCSSTransitionGroup>
            <tfoot>
            <tr>
              <td colSpan="2">Price VAT exclusive:</td>
              <td id="net">€{subtotal}</td>
            </tr>
            <tr>
              <td colSpan="2">VAT @ 20%:</td>
              <td id="tax">€{vat}</td>
            </tr>
            <tr>
              <td colSpan="2">Total to be paid:</td>
              <td id="gross">€{total}</td>
            </tr>
            </tfoot>
          </table>
          <div className={styles.actionButtons}>
            <a href="/">Continue shopping</a>
            <span>or</span>
            <button className={styles.cartButton} type="submit">Proceed to Checkout</button>
          </div>
        </form>
        <Toaster ref={(c) => this.toaster = c} className="toaster" />
      </section>
    );
  }
}
