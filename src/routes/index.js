import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import DefaultLayout from '~/Layout/DefaultLayout';
import UploadLayout from '~/Layout/UploadLayout';

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
        layout: UploadLayout,
    },
    {
        path: '/profile',
        component: Profile,
        layout: UploadLayout,
    },
];

const privateRoutes = [];

export { publicRoute, privateRoutes };
