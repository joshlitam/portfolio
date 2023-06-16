import './App.css';
import { ThemeContext } from './Context';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Intro from './components/intro/Intro';
import ProductList from './components/productList/ProductList';
import Toggle from './components/toggle/Toggle';
import { useContext } from 'react';

function App() {
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode

  return (
    <div style={{backgroundColor: darkMode ? "#222" : "white", color: darkMode ? "white" : "black"}}className="App">
      <Toggle></Toggle>
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>
    </div>
  );
}

export default App;
