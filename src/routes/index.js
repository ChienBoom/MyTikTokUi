import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import DefaultLayout from '~/Layout/DefaultLayout';

const publicRoute = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/follow',
        component: Follow,
        layout: DefaultLayout,
    },
    {
        path: '/upload',
        component: Upload,
        layout: DefaultLayout,
    },
    {
        path: '/@:nickname',
        component: Profile,
        layout: DefaultLayout,
    },
];

const privateRoutes = [];

export { publicRoute, privateRoutes };
