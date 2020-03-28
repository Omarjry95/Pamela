import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {styles} from "./styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import DialogContent from "@material-ui/core/DialogContent";
import NewArtist from "../New Artist/NewArtist";

function a11yProps(index)
{
    return {
        id: `tab-${index}`,
        'aria-controls': `tabpanel-${index}`,
    };
}

function label(icon, label)
{
    return <div
            style={{width: '100%',
                height: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center'
            }}
            >
        <Avatar
            src={process.env.PUBLIC_URL + "/icons/" + icon + ".png"}
            alt="Add"
            variant="square"
            style={{
                width: '40px',
                height: '40px',
                margin: '0 10px 0 0'
            }}
        />

        <Typography
            variant="body2"
            style={{color: '#E6F14A',
                fontFamily: 'Merriweather',
                fontWeight: 'bold',
                textTransform: 'none'
            }}
        >
            {label}
        </Typography>
    </div>
}

export class Artists extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            open: false,
            tab: 0,
            newIcon: "primary"
        }
    }

    handleDialog = (open) => event =>
    {
        this.setState({ open });
    };

    handleTab = (event, tab) =>
    {
        this.setState({ tab });
    };

    toggleIcon = (newIcon) => event =>
    {
        this.setState({ newIcon });
    };

    render()
    {
        const {classes} = this.props;
        const {open, tab, newIcon} = this.state;

        return (
            <div className={classes.root}>
                <Grid
                    container
                    spacing={2}
                    className={classes.grid}
                >
                    <Grid item xs={3}>
                        <Paper
                            elevation={0}
                            className={classes.paper}
                            onMouseOver={this.toggleIcon("secondary")}
                            onMouseOut={this.toggleIcon("primary")}
                            onClick={this.handleDialog(true)}
                        >
                            <Avatar
                                src={process.env.PUBLIC_URL + "/icons/new-artist-" + newIcon + ".png"}
                                alt={"+"}
                                className={classes.avatar}
                                variant="square"
                            />

                            <Typography
                                variant="body2"
                                className={classes.itemHeading}
                            >
                                New Artist
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>

                <Dialog
                    open={open}
                    onClose={this.handleDialog(false)}
                    PaperProps={{classes: {rounded: classes.rounded}}}
                >
                    <DialogTitle className={classes.header}>
                        <Tabs
                            value={tab}
                            onChange={this.handleTab}
                            classes={{indicator: classes.indicator}}
                        >
                            <Tab
                                label={label("new-artist-primary", "New Artist")}
                                className={classes.tab}
                                {...a11yProps(0)}
                            />

                            <Tab
                                label={label("spotify", "New Artist via Spotify")}
                                className={classes.tab}
                                {...a11yProps(1)}
                            />
                        </Tabs>
                    </DialogTitle>
                    <DialogContent className={classes.content}>
                        <NewArtist tab={tab} />
                    </DialogContent>
                </Dialog>
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

export default withStyles(styles) (withRouter(connect(mapStateToProps, mapDispatchToProps) (Artists)));