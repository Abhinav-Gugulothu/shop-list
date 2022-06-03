import CartItem from './CartItem';
import { useDispatch, useSelector} from 'react-redux';
import { useState } from 'react';
import {BsSearch} from 'react-icons/bs'
import { openModal } from '../features/modal/modalSlice';




const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((store) => store.cart);


  const [query, setQuery] = useState("");
  const keys = ["name" , "area"];
  const search = (data) => {
    return data.filter((item) => 
      keys.some((key) => item[key].toLowerCase().includes(query))
    );
  };







  return (
    <section className='cart'>
      <header>
        <h2>Your List</h2>
      </header>
      <div >
      <form className='filter-bar'>
        <label className='filter-label'><BsSearch /></label>
        <input 
          className='search-box'  
          type="text" 
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter an area or category ..."></input>
      </form>
      </div>
      <div className='container'>
      <div className='info-header'>
        <div className='header-item'>Shop Name</div>
        <div className='header-item'>Area</div>
        <div className='header-item'>Opened/Closed</div>
        <div className='header-item'>Category</div>
      </div>
      <div className='info-details'>{search(cartItems).map((item) => {
            return <CartItem key={item.id} {...item} />
          })}</div>
      </div>
      <footer>
        <hr />
        <button className='btn clear-btn' onClick={() => dispatch(openModal())}>
          Add shop
        </button>
      </footer>
    </section>
  );
};
export default CartContainer;
