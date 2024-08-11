import Login from "../pages/Login";
import Register from "../pages/Register";
import User from "../pages/User";
import TestCompetence from "../pages/TestCompetence";


export const privateRoutes = [
    {path: '/user', component: User, exact: true},
    {path: '/test-competence', component: TestCompetence, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: Login, exact: true},
    {path: '/register', component: Register, exact: true},


]