import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";
import {UserContext} from "../context/UserContext";

const AppRouter = () => {
    const {isAuth} = useContext(UserContext);

    return (
        <div className="container w-100">
            {
                (isAuth)
                    ?
                    <Routes>
                        {privateRoutes.map(route =>
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.component/>}
                                exact={route.exact}
                            />
                        )}

                        <Route path="*" element={<Navigate to={"/user"}/>}/>
                    </Routes>
                    :
                    <Routes>
                        {publicRoutes.map(route =>
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.component/>}
                                exact={route.exact}
                            />
                        )}

                        <Route path="*" element={<Navigate to={"/login"}/>}/>
                    </Routes>
            }

        </div>
    );
};

export default AppRouter;