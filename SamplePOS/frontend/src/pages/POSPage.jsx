import { React, useEffect,useRef, useState } from 'react'
// import {Link} from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import axios from "axios"
import {toast} from 'react-toastify';
import { ComponentToPrint } from '../components/ComponentsToPrint';
import { useReactToPrint } from 'react-to-print';

function POSPage() {

  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [cart,setCart] = useState([]);
  const [total, setTotal]= useState(0);

  const fetchProducts = async () => {
    setIsLoading(true);
    const result = await axios.get('products');
    setProducts(await result.data);
    setIsLoading(false);
  }

  const addProductToCart =async(product) =>{
    // chec if adding product exist
    let findProductInCart = await cart.find(i=>{
      return i.id === product.id
    });

    if(findProductInCart){
      let newCart= [];
      let newItem;

      cart.forEach(cartItem =>{
        if(cartItem.id===product.id){
          newItem = {
            ...cartItem,
            quantity: cartItem.quantity+1,
            totalAmount: cartItem.price * (cartItem.quantity+1)
          }
          newCart.push(newItem);
        }else{
          newCart.push(cartItem);
        }
      });
      setCart(newCart);
      toast(`Added ${newItem.name} to cart`)
    }else{
      let addingProduct={
        ...product,
        'quantity':1,
        'totalAmount': product.price,
      }
      setCart([...cart,addingProduct])
      toast(`Added ${product.name} to cart`)
    }
  }

  const removeProduct = async(product) =>{
    const newCart= cart.filter(cartItem=> cartItem.id !== product.id);
    setCart(newCart);
  }

  const componentRef =useRef();

  const handleReactToPrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const handlePrint = () => {
    handleReactToPrint()
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    let newTotal=0;
    cart.forEach(icart=>{
      newTotal=newTotal+ parseInt(icart.totalAmount);
    })
    setTotal(newTotal);
  }, [cart])

  return (
    <MainLayout>
      <div className="row">
        <div className="col-lg-8 col-md-6">
          {isLoading ? 'loading' :
            <div className='row'>
              {products.map((product, key) => 
                <div key={key} className="col-lg-4">
                  <div className="border pos-item px-3 text-center" onClick={(()=> addProductToCart(product))}>
                    <p>{product.name}</p>
                    <img src={product.image} className='img-fluid' alt={product.name} />
                    <p>${product.price}</p>
                  </div>
                </div>
              )}
            </div>
          }

        </div>
        <div className="col-lg-4 col-md-6">
          <div style={{display: "none"}}>
            <ComponentToPrint cart={cart} total = {total} ref={componentRef} />
          </div>
          <div className="table-responsive bg-dark">
            <table className='table table-responsive table-dark table-hover'>
              <thead>
                <tr>
                  <td>id</td>
                  <td>Name</td>
                  <td>Price</td>
                  <td>Qty</td>
                  <td>Total</td>
                  <td>Action</td>
                </tr>
              </thead>
              <tbody>
                { cart ? cart.map((cartProduct, key)=><tr key={key}>
                  <td>{cartProduct.id}</td>
                  <td>{cartProduct.name}</td>
                  <td>{cartProduct.price}</td>
                  <td>{cartProduct.quantity}</td>
                  <td>{cartProduct.totalAmount}</td>
                  <td>
                    <button className="btn btn-danger btn-sm" onClick={()=> removeProduct(cartProduct)}>remove</button>
                  </td>
                </tr>)
                : "No item in the cart"}
              </tbody>
            </table>
            <h2 className='px-2 text-white'>Total Amount: ${total}</h2>
          </div>
          <div className="mt-3">
            {
              total !== 0 ? 
              <div>
                <button className='btn btn-primary' onClick={handlePrint}>
                  Pay now
                </button>
              </div> 
              : "Please add a product to the cart"
            }
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default POSPage
