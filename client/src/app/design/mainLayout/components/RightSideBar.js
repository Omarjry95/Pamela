import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {styles} from './styles/RightSideBarStyles';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Navigation from "./Navigation";

export class RightSideBar extends Component
{
    goToHome = (history) => event =>
    {
        if (event.type === 'click')
        {
            history.push("/");
        }
    };

    render()
    {
        const {classes, history} = this.props;

        return (
            <div className={classes.root}>
                <Avatar
                    src={process.env.PUBLIC_URL + "/images/pamela.png"}
                    className={classes.avatar}
                    alt="Pamela"
                    variant="rounded"
                    onClick={this.goToHome(history)}
                />
                <Typography
                    variant="h4"
                    className={classes.logoName}
                >
                    Pamela
                </Typography>

                <Navigation/>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true}) (withRouter(RightSideBar));