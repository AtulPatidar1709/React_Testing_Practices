import './App.css';
import Product from './components/Product';
import Products from './components/Products';
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Login from './components/Login/page';
import Signup from './components/Signup/page';
import { MyContextProvider } from './context/cart';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { useState } from 'react';

const queryClient = new QueryClient();

function App() {

  const [data, setData] = useState('')
  const [dataBtn, setDataBtn] = useState('')

  function handleClick() {
    setDataBtn("Hello I am here")
  }

  return (
    <QueryClientProvider client={queryClient}>
      <MyContextProvider>
        <Router>
          <header>
            <h1>Jai Shree Ram</h1>
            <input type="text" value={data} onChange={(e) => setData(e.target.value + "test")} placeholder='text' name='text' />
            <button onClick={() => { handleClick() }}>Click Me</button>
            <h1>{dataBtn}</h1>
          </header>
          <Navbar />
          <Routes>
            <Route element={<Products />} path="/" />
            <Route element={<Product />} path="/:id" />
            <Route element={<Login />} path="/login" />
            <Route element={<Signup />} path="/signup" />
          </Routes>
        </Router>
      </MyContextProvider>
      {process.env.NODE_ENV === 'development' && <ReactQueryDevtools initialIsOpen={false} />}
    </QueryClientProvider>
  );
}

export default App;
