import styles from './styles.module.scss';
import { useContext } from 'react';
import { SideBarContext } from '@/contexts/SideBarProvider';
import classNames from 'classnames';
import { AiOutlineClose } from 'react-icons/ai';
import Login from '@components/ContentSideBar/Login/Login'

const SideBar = () => {
    const { container, overlay, sideBar, slideSideBar, boxIcon } = styles;
    const { isOpen, setIsOpen } = useContext(SideBarContext);

    const handleToggele = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={container}>
            <div className={classNames({ [overlay]: isOpen })} onClick={handleToggele} />
            <div className={classNames(sideBar, { [slideSideBar]: isOpen })}>
                {isOpen && (
                    <div className={boxIcon} onClick={handleToggele}>
                        <AiOutlineClose />
                    </div>
                )}
                <Login />
            </div>
        </div>
    );
};

export default SideBar;
