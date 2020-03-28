import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {withStyles} from '@material-ui/core';
import {styles} from './styles/NavigationStyles';
import navigation from "../../../routing/navigation";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";

export class Navigation extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            on:  null
        }
    }

    changeIcon = (on) => event =>
    {
        this.setState({ on });
    };

    render()
    {
        const {classes} = this.props;
        const {on} = this.state;

        return (
            <div className={classes.root}>
                {navigation.map(item =>
                    <Link
                        key={"nav-" + navigation.indexOf(item)}
                        className={classes.container}
                        href={item.route}
                    >
                        <div
                            className={classes.container1}
                            onMouseOver={this.changeIcon(navigation.indexOf(item))}
                            onMouseOut={this.changeIcon(null)}
                        >
                            <Avatar
                                src={process.env.PUBLIC_URL + "/icons/" + item.icon + "-" +
                                (on === navigation.indexOf(item) ? "secondary" : "primary") + ".png"}
                                alt={item.label}
                                className={classes.icon}
                                variant="square"
                            />

                            <Typography
                                variant="body2"
                                className={classes.itemHeading}
                            >
                                {item.label}
                            </Typography>
                        </div>
                    </Link>
                )}
            </div>
        );
    }
}

export default withStyles(styles, {withTheme: true}) (withRouter(Navigation));