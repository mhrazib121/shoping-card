import './App.css';
import Home from './Pages/Home';
import ShoppingCartPage from './Pages/ShopingCartPage';
import Navbar from './Componets/Navbar';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { useState } from 'react';

function App() {
  const [isHome, setIsHome] = useState(true)
  return (
    <Provider store={store}>
      <Navbar setIsHome={setIsHome} />
      {isHome ? <Home /> :
        <ShoppingCartPage />}

    </Provider>
  );
}

export default App;
