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
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import * as Actions from '../../store/actions';
import Drawer from "@material-ui/core/Drawer";
import { openDB } from 'idb';
import _ from '../../utils/lodash';

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
                width: '35px',
                height: '35px',
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
            drawer: false,
            tab: 0,
            step: 1,

            newIcon: "primary"
        }
    }

    toggleIcon = (newIcon) => event =>
    {
        this.setState({ newIcon });
    };

    handleDialog = (open) => event =>
    {
        this.setState({ open });
    };

    handleDrawer = (drawer) => event =>
    {
        this.setState({ drawer });
    };

    handleTab = (event, tab) =>
    {
        this.setState({ tab });
    };

    handleStep = (move) => event =>
    {
        let step = this.state.step + move;

        this.setState({ step });
    };

    adjustLinks = (links) =>
    {
        let data = [];

        for (let i = 0; i < links.length; i++)
        {
            const link = _.find(this.props.externals.list, function (l) { return l.id === links[i].id; });

            let external;

            if (link)
            {
                external = {
                    id: links[i].id,
                    name: null,
                    url: links[i].url
                };
            }
            else
            {
                external = {
                    id: null,
                    name: links[i].name,
                    url: links[i].url
                };
            }

            data.push(external);
        }

        return data;
    };

    sendArtist = async event =>
    {
        let db = await openDB('pamela_current_user_db', 1);

        const transaction = db.transaction('pamela_current_user_db');
        const store = transaction.objectStore('pamela_current_user_db');

        const user = await store.get(1);

        if (user)
        {
            const artist = {
                id: user.id,
                name: this.props.artist.name,
                image: this.props.artist.image,
                genres: this.props.artist.genres,
                links: this.adjustLinks(this.props.artist.links)
            };

            if (artist.image)
            {
                let musician = new FormData();

                musician.append('id', artist.id);
                musician.append('name', artist.name);
                musician.append('image', artist.image);
                musician.append('genres', JSON.stringify(artist.genres));
                musician.append('links', JSON.stringify(artist.links));

                await this.props.addArtist(musician);
            }
            else
            {
                await this.props.addArtistWithoutImage(artist);
            }

            if (this.props.artists.operation)
            {
                this.setState({ open: false, drawer: false, tab: 0, step: 1})
            }
        }
    };

    render()
    {
        const {classes, artist} = this.props;
        const {open, drawer, tab, step, newIcon} = this.state;

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
                    PaperProps={{classes: {root: classes.dialog, rounded: classes.rounded}}}
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
                        <NewArtist tab={tab} step={step} />
                    </DialogContent>

                    <DialogActions
                        className={classes.footer}
                    >
                        {step > 1 &&
                        (<Button
                            className={classes.button}
                            onClick={this.handleStep(-1)}
                            style={{float: 'left'}}
                        >
                            <Typography
                                variant="caption"
                                className={classes.buttonHeading}
                            >
                                Previous
                            </Typography>
                        </Button>)}

                        {(step < 4 && artist.name.length > 0) &&
                        (<Button
                            className={classes.button}
                            onClick={this.handleStep(1)}
                            style={{float: 'right'}}
                        >
                            <Typography
                                variant="caption"
                                className={classes.buttonHeading}
                            >
                                Next
                            </Typography>
                        </Button>)}

                        {artist.name.length > 0 &&
                        (<Button
                            className={classes.button}
                            onClick={this.handleDrawer(true)}
                            style={{float: 'right', margin: '0 10px 0 0'}}
                        >
                            <Typography
                                variant="caption"
                                className={classes.buttonHeading}
                            >
                                Confirm
                            </Typography>
                        </Button>)}
                    </DialogActions>
                </Dialog>

                <Drawer
                    anchor="bottom"
                    open={drawer}
                    onClose={this.handleDrawer(false)}
                    classes={{paper: classes.drawer}}
                >
                    <div className={classes.container_drawer}>
                        <Typography
                            variant="body2"
                            className={classes.drawerHeading}
                        >
                            Do you confirm adding "{artist.name}" to your artists' collection ?
                        </Typography>

                        <div className={classes.container_drawer_1}>
                            <Button
                                className={classes.button}
                                onClick={this.handleDrawer(false)}
                                style={{margin: '0 10px 0 0'}}
                            >
                                <Typography
                                    variant="caption"
                                    className={classes.buttonHeading}
                                >
                                    No
                                </Typography>
                            </Button>

                            <Button
                                className={classes.button}
                                onClick={this.sendArtist}
                            >
                                <Typography
                                    variant="caption"
                                    className={classes.buttonHeading}
                                >
                                    Yes
                                </Typography>
                            </Button>
                        </div>
                    </div>
                </Drawer>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        addArtist: Actions.addArtist,
        addArtistWithoutImage: Actions.addArtistWithoutImage
    }, dispatch);
}

function mapStateToProps({newArtist, artists})
{
    return {
        artists: artists.artistsList,
        artist: newArtist.artist,
        externals: newArtist.externals
    }
}

export default withStyles(styles) (withRouter(connect(mapStateToProps, mapDispatchToProps) (Artists)));