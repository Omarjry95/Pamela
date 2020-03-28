import React from "react";
import { Router } from 'react-router-dom';
import AppContext from './AppContext';
import routes from './routing/routes';
import Provider from 'react-redux/es/components/Provider';
import store from './store';
import {Auth, ControlAccess} from './auth';
import Theme from "./design/Theme";
import Layout from "./design/Layout";
import history from "../history";

const App = () =>
{
    return (
        <AppContext.Provider value={{routes}}>
            <Provider store={store}>
                <Auth>
                    <Router history={history}>
                        <ControlAccess>
                            <Theme>
                                <Layout/>
                            </Theme>
                        </ControlAccess>
                    </Router>
                </Auth>
            </Provider>
        </AppContext.Provider>
    );
};

export default App;