import { lazy } from 'react';

const routers = [
    {
        path: '/',
        conponent: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/blog',
        conponent: lazy(() => import('@components/Blog/Blog'))
    },
    {
        path: '/shop',
        conponent: lazy(() => import('@pages/OurShop/OurShop'))
    },
    {
        path: '/cart',
        conponent: lazy(() => import('@pages/Cart/Cart'))
    },
    {
        path: '/product/:id',
        conponent: lazy(() => import('@pages/DetailProduct/index'))
    }
];
export default routers;
