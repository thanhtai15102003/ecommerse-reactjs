import Header from '@components/Header/Header';
import Layout from '@components/Layout/Layout';
import styles from './styles.module.scss';
import { useNavigate } from 'react-router-dom';
import Banner from '@pages/OurShop/components/Banner';
import { OurShopProvider } from '@contexts/OurShopProvider';
import Filter from '@pages/OurShop/components/Filter';
import Footer from '@components/Footer/Footer';
import ListProducts from '@pages/OurShop/components/ListProducts';

const OurShop = () => {
    const { container, funcBox, specialText, btnBack } = styles;
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <>
            <OurShopProvider>
                <Header />
                <Layout>
                    <div className={container}>
                        <div className={funcBox}>
                            <div>
                                Home {'>'} <spa className={specialText}>Shop</spa>
                            </div>
                            <div className={btnBack} onClick={() => handleBack()}>
                                {' '}
                                {'<'}Return to previous page
                            </div>
                        </div>
                    </div>
                    <Banner />

                    <div>
                        <Filter />
                        <ListProducts />
                    </div>
                </Layout>
                <Footer />
            </OurShopProvider>
        </>
    );
};

export default OurShop;
