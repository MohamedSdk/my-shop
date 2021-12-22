import mainLogo from '../assets/img/patterson-agency-logo.png';
import shoppingBasketLogo from '../assets/img/carrito.svg';
export default function Header(props) {
    return (
        <div className='container'>
            <nav className="navbar">
                <a className="navbar-brand" href="#">
                    <img src={mainLogo} className="d-inline-block align-top" alt="" />
                </a>
                <div className='shoppingbasket'>
                    <div className='shoppingbasket__logo'>
                        <a className="navbar-brand" onClick={() => props.onHandleCart()} href="#">
                            <img src={shoppingBasketLogo} width="30" height="30" className="d-inline-block align-top" alt="" />
                            <span className='numaddedproducts'>{props.totalProductsAdded}</span>
                        </a>
                    </div>
                    <div className='shoppingbasket__summary'>
                        <span>{props.totalPrice.toFixed(2)} €</span>
                        <span><b>Mi carrito</b></span>
                    </div>
                </div>
            </nav>
        </div>
    );
}

