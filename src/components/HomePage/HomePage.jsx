import Header from '@components/Header/Header';
import Banner from '@components/Banner/Banner';
import styles from './styles.module.scss';
import AdvanceHeadling from '@components/AdvanceHeadling/AdvanceHeadling';
import Info from '@components/Info/Info';
import HeadingListProduct from '@components/HeadingListProduct/HeadingListProduct';

const HomePage = () => {
    const { container } = styles;
    return (
        <div>
            <div className={container}>
                <Header />
                <Banner />
                 <Info />
                <AdvanceHeadling />
                <HeadingListProduct />
            </div>
        </div>
    );
};

export default HomePage;
