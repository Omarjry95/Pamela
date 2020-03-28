import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {styles} from './styles/ToolBarStyles';
import Avatar from "@material-ui/core/Avatar";
import User from "./User";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import { deleteDB } from 'idb';

const Transition = React.forwardRef(function Transition(props, ref)
{
    return <Slide direction="right" ref={ref} {...props} />;
});

export class ToolBar extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            logOutIcon: "sign-out-secondary",
            open: false
        }
    }

    logOut = (history) => async event =>
    {
        localStorage.removeItem('pamela_user_has_signed_in');

        await deleteDB('pamela_current_user_db');

        history.push("/login");
    };

    handleDialog = (open) => event =>
    {
        this.setState({ open });
    };

    changeIcon = (logOutIcon) => event =>
    {
        this.setState({logOutIcon});
    };

    render()
    {
        const {classes, history} = this.props;
        const {logOutIcon, open} = this.state;

        return (
            <div className={classes.root}>
                <User />

                <div
                    className={classes.container}
                    style={{backgroundColor: logOutIcon === "sign-out-primary" ? '#388697' : 'transparent'}}
                >
                    <Avatar
                        src={process.env.PUBLIC_URL + "/icons/" + logOutIcon + ".png"}
                        alt="Sign Out"
                        variant="square"
                        className={classes.avatar}
                        onMouseOver={this.changeIcon("sign-out-primary")}
                        onMouseOut={this.changeIcon("sign-out-secondary")}
                        onClick={this.handleDialog(true)}
                    />
                </div>

                <Dialog
                    open={open}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleDialog(false)}
                    classes={{paper: classes.paper}}
                >
                    <DialogContent>
                        <DialogContentText className={classes.text}>
                            Are you sure you want to sign out ?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions
                        classes={{root: classes.actions}}
                    >
                        <Button
                            className={classes.button}
                            onClick={this.logOut(history)}
                        >
                            Yes
                        </Button>

                        <Button
                            className={classes.button}
                            onClick={this.handleDialog(false)}
                        >
                            No
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true}) (withRouter(ToolBar));