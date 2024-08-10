import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../router";

const AppRouter = () => {
    const [isAuth, setIsAuth] = React.useState(false);

    return (
        <div>
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
                    </Routes>
            }

        </div>
    );
};

export default AppRouter;