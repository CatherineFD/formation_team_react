import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";


export const privateRoutes = [
    // {path: '/about', component: About, exact: true},
    // {path: '/posts', component: Posts, exact: true},
    // {path: '/posts/:id', component: PostIdPage, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/register', component: Register, exact: true},

    {path: '/', component: User, exact: true}
]