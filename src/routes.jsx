import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './layout/RootLayout';
import Home from './pages/Home';
<<<<<<< HEAD
import Payment from './pages/Payment';
import Cart from './pages/Cart';

=======
import Products from './pages/Products';
import ProductEdit from './pages/ProductEdit';
import Contact from './pages/Contact';


>>>>>>> 2e739a58ff822b46fb223455211698b14659f23a
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
<<<<<<< HEAD
      <Route path="products" element={<Cart />} />
      <Route path="contact" element={<Payment />} />
=======
      <Route path="products" element={<Products />} />
      <Route path="product/edit/:productId" element={<ProductEdit />} />
      <Route path="contact" element={<Contact />} />
>>>>>>> 2e739a58ff822b46fb223455211698b14659f23a
    </Route>
  )
)

<<<<<<< HEAD
export default router;
=======
export default router;
>>>>>>> 2e739a58ff822b46fb223455211698b14659f23a
