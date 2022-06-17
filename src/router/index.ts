import React from "react";
import {Login} from "../pages/Login";
import {Event} from "../pages/Event";
import Events from "events";

export interface IRoute {
    path: string;
    element: JSX.Element;
}

export enum RouteNames {
    LOGIN= '/login',
    EVENT= '/'
}

/*
export const publicRoutes:IRoute[] = [
    {path: RouteNames.LOGIN, element: <Login/>, }
];

export const privateRoutes:IRoute[] = [
    {path: RouteNames.EVENT, element: <Event/>, }
];
*/
/*
export const publicRoutes = [
        {path: RouteNames.LOGIN, element: {<Login/>} }
];

export const privateRoutes = [
    {path: RouteNames.EVENT, component: {<Event/>} }
];
*/
/*
* export const privateRoutes = {
    path: "/",
    element: <Layout/>,
    children: [
        {path: RouteNames.Reports, element: <Reports/>},
        {path: RouteNames.Events, element: <Events/>},

        {path: RouteNames.Journal, element: <Journal/>},
        {path: RouteNames.Users, element: <Users/>}
    ],
};
* */