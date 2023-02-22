import React, {Component} from "react";
import {connect} from "react-redux";
import './shop-header.css';
import {Link} from "react-router-dom";

class ShopHeader extends Component {
    render() {
        const {numItems, total} = this.props;
        return (
            <header className="shop-header row">
                <Link className="logo text-dark" to="/">ReStore</Link>
                <Link className="shopping-cart" to="/cart">
                    <i className="cart-icon fa fa-shopping-cart"></i>
                    {numItems} {numItems > 0 && `items (${total})`}
                </Link>
            </header>
        );
    }
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => ({
    numItems: cartItems.length,
    total: orderTotal
});

export default connect(mapStateToProps)(ShopHeader);
