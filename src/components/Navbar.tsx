import React, {FC} from 'react';
import {Header} from "antd/es/layout/layout";
import {Menu, Row} from "antd";
import {useNavigate } from "react-router-dom";
import {RouteNames} from "../router";

const Navbar:FC = () => {
    const router = useNavigate();
    const auth = true;
    return (
        <Header>
            <Row justify="end">
                {auth
                    ? <>
                        <div style={{color: 'white' }}>{'%username%'}</div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item onClick={() => console.log('!!! Выйти !!!')} key={1}>Выйти</Menu.Item>
                        </Menu>
                    </>
                    : <Menu theme="dark" mode="horizontal" selectable={false}>
                        <Menu.Item onClick={() => router(RouteNames.LOGIN)} key={1}>Логин</Menu.Item>
                    </Menu>
                }

            </Row>
        </Header>
    );
};

export default Navbar;