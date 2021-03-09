import React, { Component } from 'react';
import './styleorder.css';
import data from '../../assets/data/data.json';

class Products extends Component {
    addtoCart = (item) => {
        if (!item.quantity) {
            item.quantity = 1
        }
        let localArray = localStorage.getItem("item")
        if (localArray) {
            localArray = JSON.parse(localArray)
        } else {
            localArray = []
        }
        localArray.push(item)
        localStorage.setItem("item", JSON.stringify(localArray));
    }

    onChangeQuantity = (item, event) => {
        if (event.target.value) {
            item.quantity = parseInt(event.target.value)
        }
    }

    bindHeight(category) {
        if (category === 'sports') {
            return "250px"
        } else if(category === 'books') {
            return "370px"
        } else if (category === 'kids') {
            return "360px"
        } else {
            return "260px"
        }
    }

    render() {
        const products = data.product.map((item, index) => {
            return (
                <div className="gallery" key={index}>
                    <div style={{height: this.bindHeight(item.category)}}>
                        <img src={"../../assets/images/" + item.image + ""} alt=""></img>
                        <div className="desc">
                            <h5>{item.productName}</h5>
                            <h6>{item.price} - {item.quantity}</h6>
                            {/* <h6>{item.category}</h6> */}
                        </div>
                    </div>
                    <div className="quantity">
                        <select onChange={(event) => this.onChangeQuantity(item, event)}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="button">
                        <button type="button" className='btn btn-dark' onClick={() => this.addtoCart(item)}>Add to cart</button>
                    </div>
                </div>
            )
        })
        return (
            <div className="container">
                <div className="row">
                    {products}
                </div>
            </div>
        )
    }
}
export default Products;