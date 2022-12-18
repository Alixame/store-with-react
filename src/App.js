import './App.css';
import Products from './component/Products';
import Home from './component/Home';
import Cart from './component/Cart';

function App() {
    const { pathname } = window.location;

    let Component;
    if (pathname === '/products') {
        Component = Products;
    } else if (pathname === '/cart') {
        Component = Cart;
    } else {
        Component = Home;
    }

  return (
    <section>
        <Component />
    </section>
  );
}

export default App;
