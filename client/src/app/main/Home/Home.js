import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

const styles = theme => ({
    root: {

    }
});

export class Home extends Component {

    componentDidMount()
    {

    }

    render()
    {
        const {classes} = this.props;

        return (
            <div className={classes.root}>

            </div>
        );
    }
}

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

export default withStyles(styles) (withRouter(connect(mapStateToProps, mapDispatchToProps) (Home)));