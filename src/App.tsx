import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Loader from './components/Loader.tsx';

// import Home from './pages/home';
// import Search from './pages/search';
// import Cart from './pages/cart';

const Home = lazy(() => import('./pages/Home.tsx'));
const Search = lazy(() => import('./pages/Search.tsx'));
const Cart = lazy(() => import('./pages/Cart.tsx'));

// Admin routes
const Dashboard = lazy(() => import('./pages/admin/Dashboard.tsx'));
const Customers = lazy(() => import('./pages/admin/Customers.tsx'));
const Products = lazy(() => import('./pages/admin/Products.tsx'));
const Transaction = lazy(() => import('./pages/admin/Transaction.tsx'));

function App() {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/search" element={<Search />} />
                    <Route path="/route" element={<Cart />} />

                    {/* ADMIN DASHBOARD */}
                    <Route path="/admin/dashboard" element={<Dashboard />} />
                    <Route path="/admin/customers" element={<Customers />} />
                    <Route path="/admin/products" element={<Products />} />
                    <Route path="/admin/transaction" element={<Transaction />} />

                    {/* CHARTS DASHBOARD */}
                </Routes>
            </Suspense>
        </Router>
    );
}

export default App;
