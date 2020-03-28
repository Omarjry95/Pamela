import React from 'react';
import {renderRoutes} from 'react-router-config'
import {withStyles} from '@material-ui/core';
import AppContext from '../../AppContext';
import {styles} from './styles';
import RightSideBar from "./components/RightSideBar";
import ToolBar from "./components/ToolBar";
import Paper from "@material-ui/core/Paper";

const MainLayout = ({classes, children}) => {

    return (
        <AppContext.Consumer>
            {({routes}) => (
                <div className={classes.root}>

                    <RightSideBar />

                    <ToolBar />

                    <Paper
                        className={classes.content}
                        elevation={0}
                    >
                        {renderRoutes(routes)}
                        {children}
                    </Paper>
                </div>)}
        </AppContext.Consumer>
    );
};

export default withStyles(styles, {withTheme: true})(MainLayout);