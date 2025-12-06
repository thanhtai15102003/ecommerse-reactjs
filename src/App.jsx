import { useEffect } from 'react';
import HomePage from '@components/HomePage/HomePage';
import getProduct from '@/apis/productService';

function App() {
    useEffect(() => {
        getProduct();
    }, []);
    return (
        <>
            <HomePage />
        </>
    );
}

export default App;
