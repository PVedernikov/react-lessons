import React, {FC} from 'react';
import AppRouter from "./components/AppRouter";
import {Layout} from "antd";
import Navbar from "./components/Navbar";
//import 'antd/dist/antd.css'; // or 'antd/dist/antd.less' // moved to App.css
import './App.css'
const App:FC = () => {
    return (
        <Layout>
            <Navbar />
            <Layout.Content>
                <AppRouter />
            </Layout.Content>
        </Layout>
    );
};

export default App;