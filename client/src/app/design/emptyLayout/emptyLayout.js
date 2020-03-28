import React from 'react';
import {renderRoutes} from 'react-router-config'
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import AppContext from '../../AppContext';
import {bindActionCreators} from "redux";
import {connect} from "react-redux";

const styles = theme => ({
    root: {
        width: '100%',
        height: '100%'
    }
});

const EmptyLayout = ({classes, children}) => {

    return (
        <AppContext.Consumer>
            {({routes}) => (
                <div className={classes.root}>
                    {renderRoutes(routes)}
                    {children}
                </div>)}
        </AppContext.Consumer>
    );
};

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({

    }, dispatch);
}

function mapStateToProps({})
{
    return {

    }
}

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(EmptyLayout)));