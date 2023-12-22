import Home from '~/pages/Home';
import Follow from '~/pages/Follow';
import Upload from '~/pages/Upload';
import Profile from '~/pages/Profile';
import DefaultLayout from '~/Layout/DefaultLayout';
import config from '~/config';

const publicRoute = [
    {
        path: config.routes.home,
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: config.routes.follow,
        component: Follow,
        layout: DefaultLayout,
    },
    {
        path: config.routes.upload,
        component: Upload,
        layout: DefaultLayout,
    },
    {
        path: config.routes.profile,
        component: Profile,
        layout: DefaultLayout,
    },
    {
        path: config.routes.search,
        component: Profile,
        layout: DefaultLayout,
    },
];

const privateRoutes = [];

export { publicRoute, privateRoutes };
