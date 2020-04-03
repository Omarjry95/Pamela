import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {styles} from './styles/UserStyles';
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import { openDB } from 'idb';
import moment from "moment";

const units = ["seconds", "minutes", "hours", "days", "weeks", "months", "years"];

export class User extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            user: null
        }
    }

    async componentDidMount()
    {
        await this.getUserData();
    }

    getUserData = async () =>
    {
        let db = await openDB('pamela_current_user_db', 1);

        const transaction = db.transaction('pamela_current_user_db');
        const store = transaction.objectStore('pamela_current_user_db');

        const user = await store.get(1);

        if (user)
        {
            this.setState({ user });
        }
    };

    getPeriod = (date) =>
    {
        let index = 0;
        let period;

        while (moment().diff(moment(date), units[index]) >= 1)
        {
            period = moment().diff(moment(date), units[index]);
            index++;

            if (index >= units.length)
            {
                break;
            }
        }

        if (index === 0)
        {
            period = "one";
            const unit = "second";

            return period + " " + unit;
        }

        if (period === 1)
        {
            period = "one";
            const unit = units[index - 1].substr(0, units[index - 1].length - 1);

            return period + " " + unit;
        }

        return period + " " + units[index - 1];
    };

    render()
    {
        const {classes} = this.props;
        const {user} = this.state;

        return ( user ?
            <div className={classes.root}>
                <div className={classes.container}>
                    <Typography
                        className={classes.containerHeading}
                        variant="body1"
                    >
                        {user.username}
                    </Typography>
                    <Typography
                        className={classes.caption}
                        variant="caption"
                    >
                        {"Last logged in: " + this.getPeriod(user.lastSignIn) + " ago"}
                    </Typography>
                </div>

                <Avatar
                    src={"http://localhost:5000/images/profile_pictures/" + user.profilePicture}
                    alt={user.username}
                    variant="circle"
                    className={classes.avatar}
                />
            </div> : null
        );
    }
}

export default withStyles(styles, {withTheme: true}) (withRouter(User));