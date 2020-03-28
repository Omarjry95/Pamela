import Login from '../main/Login/Login';
import Home from '../main/Home/Home';
import Artists from "../main/Artists/Artists";

const routes = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: '/artists',
        component: Artists,
        exact: true
    },
    {
        path: '/login',
        component: Login,
        exact: true
    },
];

export default routes;