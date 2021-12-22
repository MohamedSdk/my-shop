import React, { Component} from 'react';
import "react-multi-carousel/lib/styles.css";
import Header from './Header';
import Products from './Products';
import CartDetails from './CartDetails';
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            products: [],
            productsAdded: [],
            showCartDetails: false
        };
        this.onHandleAddToCart = this.onHandleAddToCart.bind(this)
        this.onHandleCart = this.onHandleCart.bind(this)
        this.onDeleteProductClick = this.onDeleteProductClick.bind(this)
        this.onHandleKeepBuying = this.onHandleKeepBuying.bind(this)
    }

    componentDidMount() {
        this.setState({ loading: true });
        fetch(
            "https://fakestoreapi.com/products?limit=4"
        )
            .then(data => data.json())
            .then(data =>
                this.setState({ products: data, loading: false })
            );
    }
    onHandleAddToCart(clickedItem) {
        this.state.productsAdded.push(clickedItem);
        this.setState({ productsAdded: this.state.productsAdded });
    }

    onDeleteProductClick(productToDelete) {
        var productsShoppingBasket = this.state.productsAdded.filter(function (item) {
            return item.id !== productToDelete.id
        })
        this.setState({ productsAdded: productsShoppingBasket });
    }

    onHandleCart() {
        this.setState({ showCartDetails: true });
    }

    onHandleKeepBuying() {
        this.setState({ showCartDetails: false });
    }
    render() {
        const shoppingBasketProducts = this.state.productsAdded
        let totalPrice = shoppingBasketProducts.map(x => x.price).reduce((a, b) => a + b, 0)
        debugger;
        return (
            <div>
                <Header
                    totalProductsAdded={shoppingBasketProducts.length}
                    totalPrice={totalPrice} onHandleCart={this.onHandleCart}
                />
                {this.state.showCartDetails ? (
                    <div className='container'>
                        <CartDetails
                            onDeleteProductClick={this.onDeleteProductClick}
                            onHandleKeepBuying={this.onHandleKeepBuying}
                            productsAdded={this.state.productsAdded} />
                    </div>

                ) : (
                    <Products 
                        loading={this.state.loading}
                        products={this.state.products}
                        onHandleAddToCart={this.onHandleAddToCart}
                    />
                )}
            </div>
        );
    };
}