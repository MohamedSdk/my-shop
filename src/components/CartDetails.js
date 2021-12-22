import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
class CartDetails extends Component {
    render() {
        let totalPrice = this.props.productsAdded.map(x => x.price).reduce((a, b) => a + b, 0)
        return (
            <div className="shoppingbasket__details mt-5 mb-5">

                <div className="row">
                    <div className="col-lg-7 col-md-12 col-sm-12 mb-5 shoppingbasket__details-products">
                        <div className="p-2">
                            <h4>CARRITO</h4>
                        </div>
                        <hr />
                        {this.props.productsAdded.map((product, index) => {
                            return (
                                <div key={index} className="row justify-content-center text-center mb-5">
                                    <div className="col-md-4"><img className="rounded" src={product.image} alt={product.title} width="100" /></div>
                                    <div className="col-md-4 product-details">
                                        <div className="size mr-1"><span className="font-weight-bold">{product.title}</span></div>
                                    </div>
                                    <div className='col-md-2'>
                                        <h5 className="text-grey">{product.price} €</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <FontAwesomeIcon type='button' onClick={() => this.props.onDeleteProductClick(product)} icon={faTrash} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <div className='col-lg-4 col-md-12 col-sm-12 offset-lg-1'>
                        <div className="p-2 row shoppingbasket__details-price">
                            <div className='col-md-6 shoppingbasket__details-price--title'>
                                <p>{this.props.productsAdded.length} articulo(s)</p>
                            </div>
                            <div className='col-md-6 shoppingbasket__details-price--total'>
                                <b>{totalPrice.toFixed(2)} €</b>
                            </div>
                            <hr />
                            <div className='col-md-12 shoppingbasket__details-price--action'>
                                <button className="btn btn-secondary btn-lg ml-2 pay-button" disabled type="button">Finalizar compra</button>
                            </div>
                        </div>
                        <div className="row shoppingbasket__details-promocode">
                            <div className='col-md-3 shoppingbasket__details-promocode--title'>
                                <p>Código de descuento</p>
                            </div>
                            <div className='col-md-5 shoppingbasket__details-promocode--input'>
                                <input type="text" className="form-control" />
                            </div>
                            <div className='col-md-4 shoppingbasket__details-promocode--action'>
                                <button className="btn btn-dark" type="button">Aplicar</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <a className="ml-2 mt-5 text-dark" type='button' onClick={() => this.props.onHandleKeepBuying()}>{'<'} Seguir comprando</a>
                </div>
            </div>
        );
    }
}

export default CartDetails;