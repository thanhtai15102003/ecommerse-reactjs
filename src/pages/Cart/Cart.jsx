import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Steps from '@/pages/Cart/components/Steps/Steps';
import Contents from '@/pages/Cart/components/Contents/Contents';
import Layout from '@components/Layout/Layout'
import styles from './styles.module.scss';


const Cart = () => {
    const { container } = styles;
    return (
        <>
            <Header />
            <div className={container}>
                <Steps />
                <Layout>
                <Contents />
                </Layout>
            </div>
            <Footer />
        </>
    );
};

export default Cart;
