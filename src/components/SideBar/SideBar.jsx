import styles from './styles.module.scss';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';
import Login from '@components/ContentSideBar/Login/Login'
import Compare from '@components/ContentSideBar/Compare/Compare'

const SideBar = () => {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen, type } = useContext(SideBarContext);

    const handleToggele = () => {
        setIsOpen(!isOpen);
    };
    
    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />;
            case 'compare':
                return <Compare />;
            case 'wishlist':
                return 'wishlist';
            case 'cart':
                return 'cart';
            default:
                return <Login />;
        }
    }

    return (
        <div className={container}>
            <div className={classNames({ [overlay]: isOpen })} onClick={handleToggele} />
            <div className={classNames(sideBar, { [slideSideBar]: isOpen })}>
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggele}>
                        <AiOutlineClose />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    );
};

export default SideBar;
