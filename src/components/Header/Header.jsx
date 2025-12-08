import React, { useState, useEffect, useContext } from 'react';
import BoxIcon from './BoxIcon/BoxIcon';
import { dataBoxIcon, dataMenu } from './constants';
import styles from './styles.module.scss';
import Menu from './Menu/Menu';
import Logo from '@icons/images/Logo-retina.webp';
import useScrollHandling from '@/hooks/useScrollHandling';
import classNames from 'classnames';
import { SideBarContext } from '../../contexts/SideBarProvider';
import { TfiReload } from 'react-icons/tfi';
import { CiHeart } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';

const Header = () => {
    const {
        containerBoxIcon,
        containerMenu,
        containerHeader,
        containerBox,
        container,
        fixedHeader,
        topHeader
    } = styles;
    const { scrollPosition } = useScrollHandling();
    const [fixedPosition, setFixedPosition] = useState(false);
    const { setIsOpen, setType } = useContext(SideBarContext);

    const handleOpenSidebar = (type) => {
        setIsOpen(true);
        setType(type);
    };

    useEffect(() => {
        // Update fixedPosition based on scrollPosition
        setFixedPosition(scrollPosition > 80);
    }, [scrollPosition]);
    return (
        <div
            className={classNames(container, {
                [topHeader]: !fixedPosition,
                [fixedHeader]: fixedPosition
            })}
        >
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {dataBoxIcon.slice(0, 3).map((item) => {
                            return <BoxIcon type={item.type} href={item.href} />;
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item) => {
                            return <Menu content={item.content} href={item.href} />;
                        })}
                    </div>
                </div>
                <div>
                    <img src={Logo} alt="Logo" style={{ width: '153px', height: '53px' }} />
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {dataMenu.slice(3, dataMenu.length).map((item) => {
                            return (
                                <Menu
                                    content={item.content}
                                    href={item.href}
                                    setIsOpen={setIsOpen}
                                />
                            );
                        })}
                    </div>
                    <div className={containerBoxIcon}>
                        <TfiReload
                            style={{
                                fontSize: '20px'
                            }}
                            onClick={() => handleOpenSidebar('compare')}
                        />
                        <CiHeart
                            style={{
                                fontSize: '30px'
                            }}
                            onClick={() => handleOpenSidebar('wishlist')}
                        />
                        <CiShoppingCart
                            style={{
                                fontSize: '25px'
                            }}
                            onClick={() => handleOpenSidebar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
