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
    }
];
export default routers;
