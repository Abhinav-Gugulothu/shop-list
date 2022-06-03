import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { closeModal } from '../features/modal/modalSlice';
import { updateArray } from '../features/cart/cartSlice';

function Modal() {
  const [name , setName] = useState('');
  const [area , setArea] = useState('');
  const [category , setCategory] = useState('');
  const [openingdate , setOpeningDate] = useState('');
  const [closingdate , setClosingDate] = useState('');
  const [Id , setId] = useState('');
  const dispatch = useDispatch();
  var temp
  let flag = false;


  function handleSubmit(event) {
    event.preventDefault();
    const re = /^[A-Za-z ]+$/;
    if ( re.test(name)) {
      setName(name);
    }
    else
    {
      alert("Name of the shop should only contain alphabets")
    }
    

    if (openingdate <= closingdate)
    {
      temp = 
      {
        id : Id,
        name : name,
        area : area,
        category : category,
        closingdate : closingdate,
        openingdate : openingdate,

      };
      console.log("Entered Here");
      flag = true;
      console.log(temp);
    }
    else
    {
      alert("Opening Date of the shop must be eariler than the Closing Date");
      return false;
    }
    flag && dispatch(updateArray(temp));
    flag && dispatch(closeModal())
  }




  return (
  <aside className='modal-container'>
      <div className='modal'>
        <h4>Fill the Details</h4>
        <div >
          <form className='input-form' onSubmit={handleSubmit}>
          <div className='form-item'>I.D. Number
                  <input
                    id="name"
                    type="text"
                    value={Id}
                    required={true}
                    placeholder='Enter Identification Number'
                    onChange={(e) => setId(e.target.value)}
                  />
              </div>
              <div className='form-item'>Name of the Shop
                  <input
                    id="name"
                    type="text"
                    value={name}
                    required={true}
                    placeholder='Enter Name'
                    onChange={(e) => setName(e.target.value)}
                  />
              </div>
              <div className='form-item'>
                Your Area
                <select 
                    id="name"
                    type="text"
                    value={area}
                    required={true}
                    onChange={(e) => setArea(e.target.value)}>
                  <option value="">select</option>
                  <option value="Thane">Thane</option>
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                  <option value="Thane">Thane</option>
                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
              </div>
              <div className='form-item'>
              Category
              <select  
                    id="name"
                    type="text"
                    value={category}
                    required={true}
                    onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">select</option>
                <option value="Grocery">Grocery</option>
                <option value="Butcher">Butcher</option>
                <option value="Chemist">Chemist</option>
                <option value="Baker">Baker</option>
              </select>
            </div>
            <div className='form-item'>Opening Date
            <input type='date'  
                    id="name"
                    value={openingdate}
                    required={true}
                    onChange={(e) => setOpeningDate(e.target.value)}></input>
            </div>
            <div className='form-item'>Closing Date
            <input type='date'  
                    id="name"
                    value={closingdate}
                    required={true}
                    onChange={(e) => setClosingDate(e.target.value)}></input>
            </div>
            <div className='btn-container'>
          <button type='submit' className='btn confirm-btn'>Add</button>
          <button type='button' className='btn clear-btn' onClick={() => { dispatch(closeModal())}}>
            Close</button>
        </div>
          </form>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
