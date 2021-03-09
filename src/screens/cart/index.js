import React, { Component } from 'react';
import remove from '../../assets/images/icons/delete.jpg'

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listCartItems: [],
        };
    }

    componentDidMount() {
        this.loadCartItems()
    }

    loadCartItems() {
        let localItem = localStorage.getItem("item")
        if (localItem) {
            localItem = JSON.parse(localItem)
        }
        this.setState({ listCartItems: localItem })
    }
    removeCart = (index) => {
        if (window.confirm("are you sure want to delete this item")) {
            let list = this.state.listCartItems
            list.splice(index, 1)
            this.setState({ listCartItems: list })
            localStorage.setItem("item", JSON.stringify(list))
        }
    }

    render() {
        let arrayLength = this.state.listCartItems.length
        let totalAmount = 0
        const bindcart = this.state.listCartItems && this.state.listCartItems.map(function (item, index) {
            totalAmount += parseInt(item.price * item.quantity)
            return (
                <tbody key={index + 1}>
                    <tr>
                        <td>{item.productName}</td>
                        <td>{item.quantity}</td>
                        <td>{item.price}</td>
                        <td><a href="#"><img src={remove} alt="logo" width="25" height="25" onClick={() => this.removeCart(index)}></img></a></td>
                    </tr>

                    { arrayLength === index + 1 &&
                        <tr>
                            <td colSpan="3" style={{ textAlign: 'right' }}>Total Price: Rs. {totalAmount}</td>
                        </tr>
                    }
                </tbody>
            )
        }, this
        )
        return (
            <div>
                <div className="container">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Quantity</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {bindcart}
                        {arrayLength === 0 &&
                            <td colSpan="3" style={{ textAlign: "center" }}>No items found</td>}
                    </table>
                </div>
            </div>
        )
    }
}
export default Cart;