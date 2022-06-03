import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';

import {useSelector } from 'react-redux';
import Modal from './components/Modal';
function App() {
  const { isOpen } = useSelector((store) => store.modal);



  return (
    <main>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </main>
  );
}
export default App;
