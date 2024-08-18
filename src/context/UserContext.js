import {createContext, useState} from "react";
import LoginService from "../API/LoginService";
import {useNavigate} from "react-router-dom";



export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

    const [credentials, setCredentials] = useState({
        username: localStorage.getItem("username") || null,
        password: localStorage.getItem("password") || null,
        id: localStorage.getItem("id") || null,
        role: localStorage.getItem("role") || null,
        isAuthenticated: localStorage.getItem("isAuthenticated") || false
    });

    const [user, setUser] = useState(localStorage.getItem('USER') || null);
    const [teams, setTeams] = useState(localStorage.getItem('teams') || []);

    const isAuth = credentials.isAuthenticated;
    const getUsername = credentials.username;
    const getPassword = credentials.password;
    const getId =  credentials.id;

    const router = useNavigate();

    const authSuccess = (email, password,loginResponse) => {

        setUser(loginResponse);
        setCredentials({...credentials,
            username: email,
            password:
            password, id:
            loginResponse.id,
            role: loginResponse.role,
            isAuthenticated: true
        });
        setTeams(loginResponse.teams);

        localStorage.setItem("username", email);
        localStorage.setItem("password", password);
        localStorage.setItem("id", loginResponse.id);
        localStorage.setItem("role", loginResponse.role);
        localStorage.setItem("isAuthenticated", true);
        localStorage.setItem("USER", JSON.stringify(loginResponse));
        localStorage.setItem("teams", JSON.stringify(loginResponse.teams));
    };

    const authError = () => {
        setCredentials({
            ...credentials,
            isAuthenticated: false
        });
    }

    const login = async (email, password) => {
        try {
            const response = await LoginService.login(email, password);
            const loginResponse = response.data;

            authSuccess(email, password, loginResponse);
            router('/user');
        } catch (e) {
            console.log(e);
            authError();
        }
    };

    const onLogout = () => {
        setCredentials({
            ...credentials,
            isAuthenticated: false
        });
        localStorage.clear();
    };

    const onRegister = async (email, password, firstName, lastName, phone) => {

        try {
            const response = await LoginService.register(email, password, firstName, lastName, phone);
            const loginResponse = response.data;

            authSuccess(email, password, loginResponse);
            router('/test');
        } catch (e) {
            authError();
        }
    }


    return (
        <UserContext.Provider value={{
            credentials,
            setCredentials,
            user,
            setUser,
            teams,
            setTeams,
            isAuth,
            getUsername,
            getPassword,
            getId,
            login,
            onLogout,
            onRegister
        }}>
            {children}
        </UserContext.Provider>
    )
}