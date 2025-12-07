import HeaderSideBar from '@components/ContentSideBar/components/HeaderSideBar/HeaderSideBar';
import { TfiReload } from 'react-icons/tfi';
import styles from './styles.module.scss';
import ItemProduct from '../components/ItemProduct/ItemProduct';
import Button from '@components/Button/Button';

const Compare = () => {
    const { container } = styles;
    return (
        <div className={container}>
            <div>
                <HeaderSideBar icon={<TfiReload style={{ fontSize: '30px' }} />} title="COMPARE" />
                <ItemProduct />
            </div>

            <Button content={'  VIEW COMPARE  '} />
        </div>
    );
};

export default Compare;
