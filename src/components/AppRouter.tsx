import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {Login} from "../pages/Login";
import {Event} from "../pages/Event";

//import {privateRoutes, publicRoutes, RouteNames} from "../router";
import { RouteNames} from "../router";

const AppRouter = () => {
    const auth = true;
    // @ts-ignore
    return (
        auth
            ? <Routes>
                 { /* privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.component}
                        //exact={route.exact}
                    />
                ) */ }
                <Route key={RouteNames.EVENT}
                       path={RouteNames.EVENT}
                       element={<Event/>}
                />
                <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
            : <Routes>
                { /*publicRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={route.component}
                        //exact={route.exact}
                    />
                )*/ }
                <Route key={RouteNames.LOGIN}
                       path={RouteNames.LOGIN}
                       element={<Login/>}
                />
                <Route path="*" element={<Navigate replace to="/login" />} />
            </Routes>
    );
};

export default AppRouter;