import React, { Component } from 'react';
import './style.css';
import cart from '../../assets/images/icons/shopcart.jpg';
import logo from '../../assets/images/icons/shopping.jpg';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCart: false,
            items: [],
        };
    }
    componentDidMount() {
        this.onInit()
    }

    onInit() {
        let tamount = 0
        let list = localStorage.getItem("item")
        if (list) {
            list = JSON.parse(list)
            list.map((item) => {
                return tamount += parseInt(item.price * item.quantity)
            })
            this.setState({ items: list, totalAmount: tamount })
        }
    }

    cartImg = () => {
        console.log(this.props)
        this.props.history.push('/cart')
        this.setState({ showCart: true })
    }
    render() {
        return (
            <div className="header">
                <div className="text">
                    <div className="list">
                        <h2><a href="/" style={{ color: "white;" }}>Shop world</a></h2>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} alt="" width="60" height="60"></img>
                </div>
                <table className="cart-pos">
                    <tbody className="cartinfo">
                        <tr>
                            <td>No of items</td>
                            <td>:</td>
                            <td>{this.state.items.length}</td>
                        </tr>
                        <tr><td>Total Price</td>
                            <td>:</td>
                            <td>Rs. {this.state.totalAmount}</td>
                        </tr>
                    </tbody>
                </table>
                <a href="/cart">
                    <img className="cart" src={cart} alt="logo" width="50" height="50" background="white" onClick={this.cartImg} ></img></a>
            </div>
        )
    }
}
export default Header;