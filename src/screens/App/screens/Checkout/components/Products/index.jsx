import React, {PropTypes} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Spinner, Intent} from '@blueprintjs/core';

import {Product} from './components';

import styles from './styles.scss';

export default class Products extends React.PureComponent {
  static propTypes = {
    // Store Props
    products: PropTypes.array.isRequired,

    // Store actions
    actions: PropTypes.object.isRequired
  };

  componentDidMount() {
    this.props.actions.loadProducts();
  }

  render() {
    const {products, actions} = this.props;

    const returnProducts = () => {
      return products.map(productData => <Product key={productData.name} {...productData} actions={actions} />);
    };

    return (
      <section className={`${styles.wrapper} clearfix`}>
        <h2>The shop</h2>
        <p>Ahoy landman! Pick what you need for the big trip. You gonna be out there some days,
          so better leave prepared.</p>
        <p className="strong">Please note: All prices are without VAT!</p>
          <div className={styles.productsContainer}>
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
            {products.length ?
              returnProducts()
              :
              <Spinner className={styles.spinner} intent={Intent.PRIMARY} />
            }
            </ReactCSSTransitionGroup>
          </div>
      </section>
    );
  }
}
