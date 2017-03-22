import React, {PropTypes} from 'react';
import {Alert, Intent} from '@blueprintjs/core';

import styles from './styles.scss';

export default class CartProduct extends React.PureComponent {
  static propTypes = {
    // Store Props
    products: PropTypes.array.isRequired,
    id: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired,

    // Store actions
    actions: PropTypes.object.isRequired,

    onRemove: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    const {products, id, qty} = props;
    const {name} = products.filter(props => props.id === id)[0];

    this.state = {
      isOpenAlert: false,
      name: name,
      inputValue: qty
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({inputValue: nextProps.qty});
  }

  onAdd() {
    const {id, actions} = this.props;
    actions.addItem(id);
  }

  onDeduct() {
    const {id, actions} = this.props;

    if (parseInt(this.input.value) === 1) {
      this.onClickRemoveButton();
    } else {
      actions.deductItem(id);
    }
  }

  onClickRemoveButton() {
    this.setState({
      isOpenAlert: true,
      lastRemovedFile: this.state.name
    });
  }

  handleRemove() {
    this.setState({
      isOpenAlert: false
    });

    this.props.onRemove(this.props.id, this.state.lastRemovedFile);
  }

  handleClose() {
    this.setState({ isOpenAlert: false });
  }

  handleUpdateQuantity(e) {
    const {id, actions} = this.props;
    let value = parseInt(e.target.value);

    if (!value || value < 1) {
      e.target.value = 1;
    }

    actions.updateItem({id, qty: parseInt(e.target.value)});
  }

  handleInputChange(e) {
    this.setState({inputValue: e.target.value});
  }

  render() {
    const {products, id} = this.props;
    const {name, description, price, productId} = products.filter(props => props.id === id)[0];

    return (
      <tr className={styles.product}>
        <td>
          <h3 className={styles.title}>{name}</h3>
          <p>{description}</p>
          <buton className={styles.button} onClick={::this.onClickRemoveButton}>Remove</buton>
        </td>
        <td>
          <span>€{price}</span>
        </td>
        <td>
          <input name={productId}
                 type="number"
                 min="1"
                 value={this.state.inputValue}
                 onChange={::this.handleInputChange}
                 onBlur={::this.handleUpdateQuantity}
                 ref={(c) => this.input = c}
          />
          <button type="button" onClick={::this.onAdd}>+</button>
          <button type="button" onClick={::this.onDeduct}>-</button>
          <Alert
            intent={Intent.PRIMARY}
            isOpen={this.state.isOpenAlert}
            confirmButtonText="Remove from cart"
            cancelButtonText="Cancel"
            onConfirm={::this.handleRemove}
            onCancel={::this.handleClose}
          >
            <p>Are you sure you want to remove <b>{name}</b> from cart ?</p>
          </Alert>
        </td>
      </tr>
    );
  }
}
