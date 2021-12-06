import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Products from './components/Products/Products'
import Slideshow from './components/Slide/Slideshow';
import ContactForm from './components/Contact/Contact';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import {commerce} from './lib/commerce';
import { Products,Navbar, Cart,Checkout } from './components';
import { green } from '@material-ui/core/colors';
import MediawithText from './components/MediawithText/MediawithText';
import TopBanner from './components/TopBanner/TopBanner';
import Gallery from './components/Gallery/Gallery';

const App = () => {
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [order, setOrder] = useState({});
    const [errorMessage, setErrorMessage] = useState('');
  
    const fetchProducts = async () => {
      const { data } = await commerce.products.list();
  
      setProducts(data);
    };
  
    const fetchCart = async () => {
      setCart(await commerce.cart.retrieve());
    };
  
    const handleAddToCart = async (productId, quantity) => {
      const item = await commerce.cart.add(productId, quantity);
  
      setCart(item.cart);

      
const toastifySuccess = () => {
  toast.success('Succes add it!', {
    position: 'bottom-right',
    autoClose: 5000,
    hideProgressBar: true,
    color:'green',
    closeOnClick: true,
    pauseOnHover: true,
    draggable: false,
    className: 'submit-feedback success',
    toastId: 'notifyToast'
  });
};

toastifySuccess();
    };
  
    const handleUpdateCartQty = async (lineItemId, quantity) => {
      const response = await commerce.cart.update(lineItemId, { quantity });
  
      setCart(response.cart);
    };
  
    const handleRemoveFromCart = async (lineItemId) => {
      const response = await commerce.cart.remove(lineItemId);
  
      setCart(response.cart);
    };
  
    const handleEmptyCart = async () => {
      const response = await commerce.cart.empty();
  
      setCart(response.cart);
    };
  
    const refreshCart = async () => {
      const newCart = await commerce.cart.refresh();
  
      setCart(newCart);
    };
  
    const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
      try {
        const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);
  
        setOrder(incomingOrder);
  
        refreshCart();
      } catch (error) {
        setErrorMessage(error.data.error.message);
      }
    };
  
    useEffect(() => {
      fetchProducts();
      fetchCart();
    }, []);
  
    const handleDrawerToggle = () => setMobileOpen(!mobileOpen);
    
    return (
        <Router>
        <div style={{backgroundColor:'white'}}>
            <Navbar totalItems={cart.total_items}/>
            <Switch>
                <Route exact path="/">
                <TopBanner/>
                    <Slideshow/>
                    <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty/>
                    <Gallery/>
                    <MediawithText/>
                    <ContactForm/>
                </Route>
                <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
            </Switch>
        </div>
        </Router>
    )
}

export default App
