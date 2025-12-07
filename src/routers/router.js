import { lazy } from 'react';

const routers = [
    {
        path: '/',
        conponent: lazy(() => import('@components/HomePage/HomePage'))
    },
    {
        path: '/Blog',
        conponent: lazy(() => import('@components/Blog/Blog'))
    }
];
export default routers;
