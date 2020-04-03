import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import _ from '../../utils/lodash';
import {styles} from './styles';
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Collapse from "@material-ui/core/Collapse";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";

const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U',
    'V', 'W', 'X', 'Y', 'Z'];

export class GridForm extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            link: null,

            name: '',
            url: '',

            disabled: true
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const changed = prevState.name !== this.state.name || prevState.url !== this.state.url;

        if (changed)
        {
            this.handleLinkSend();
        }
    }

    checkLink = (link) =>
    {
        let external = false;

        if (link)
        {
            external = !!_.find(this.props.links, function (l) { return l.id === link.id; });
        }

        return external;
    };

    checkItem = link =>
    {
        let external = false;

        if (link)
        {
            external = !!_.find(this.props.items, function (l) { return l.id === link.id; });
        }

        return external;
    };

    handleNameChange = event =>
    {
        this.setState({ name: event.target.value });
    };

    handleURLChange = event =>
    {
        this.setState({ url: event.target.value });
    };

    requestLink = (link) => event =>
    {
        if (!link)
        {
            let id;
            let external = '';

            while (external !== undefined)
            {
                id = '';

                for (let i = 0; i < 6; i++)
                {
                    let index = Math.floor(Math.random() * alphabet.length);

                    let char = alphabet[index];

                    id = id + char;
                }

                external = _.find(this.props.links, function (l) { return l.id === id; });
            }

            const link_1 = {
                id: id,
                name: '',
                url: ''
            };

            this.setState({ link: link_1, name: link_1.name, url: link_1.url });
        }
        else
        {
            if (link.name !== this.state.name)
            {
                let external = _.find(this.props.links, function (l) { return l.id === link.id; });

                if (external)
                {
                    this.setState({ link: external, name: external.name, url: external.url });
                }
                else
                {
                    this.setState({ link, name: link.name, url: '' });
                }
            }
        }
    };

    handleLinkSend = () =>
    {
        const disabled = this.state.name === '' || this.state.url === '';

        this.setState({ disabled });
    };

    handleLinkClose = event =>
    {
        this.setState({ link: null, name: '', url: '' });
    };

    unlink = (link) => event =>
    {
        this.props.onLinkRemove(link);

        this.setState({ link: null, name: '', url: '' });
    };

    sendLink = event =>
    {
        const link = {
            id: this.state.link.id,
            name: this.state.name,
            url: this.state.url
        };

        this.props.onLinkSend(link);

        this.setState({ link: null, name: '', url: '' });
    };

    render()
    {
        const {classes, items, links} = this.props;
        const {link, name, url, disabled} = this.state;

        return (
            <div className={classes.root}>
                <Typography
                    variant="body1"
                    className={classes.title}
                >
                    Keep Your Artist Close To You
                </Typography>
                <div className={classes.container}>
                    {items.map(external =>
                        (<div
                            key={items.indexOf(external)}
                            className={classes.container_2}
                            onClick={this.requestLink(external)}
                        >
                            <div className={classes.container_3}>
                                <Avatar
                                    src={process.env.PUBLIC_URL + "/icons/" + external.name.toLowerCase() + ".png"}
                                    alt={external.name}
                                    variant="square"
                                    className={classes.avatar}
                                    style={{opacity: this.checkLink(external) ? 1 : 0.4}}
                                />

                                <Typography
                                    variant="caption"
                                    className={classes.heading}
                                    style={{color: '#' + external.color }}
                                >
                                    {external.name}
                                </Typography>
                            </div>
                        </div>)
                    )}

                    {links.map(external => !this.checkItem(external) &&
                        (<div
                            key={links.indexOf(external)}
                            className={classes.container_2}
                            onClick={this.requestLink(external)}
                        >
                            <div className={classes.container_3}>
                                <Avatar
                                    src={process.env.PUBLIC_URL + "/images/no-image.png"}
                                    alt={external.name}
                                    variant="square"
                                    className={classes.avatar}
                                    style={{opacity: 1}}
                                />

                                <Typography
                                    variant="caption"
                                    className={classes.heading_add}
                                >
                                    {external.name}
                                </Typography>
                            </div>
                        </div>)
                    )}

                    <div
                        className={classes.container_2}
                        onClick={this.requestLink(null)}
                    >
                        <div className={classes.container_3}>
                            <Fab
                                className={classes.fab}
                                aria-label="New Link"
                            >
                                <Avatar
                                    src={process.env.PUBLIC_URL + "/icons/new-link-neutral.png"}
                                    alt="+"
                                    variant="square"
                                    className={classes.fab_icon}
                                />
                            </Fab>

                            <Typography
                                variant="caption"
                                className={classes.heading_add}
                            >
                                Another Link
                            </Typography>
                        </div>
                    </div>
                </div>
                <Collapse in={link !== null}>
                    <div className={classes.container_1}>
                        <div className={classes.container_form}>
                            <TextField
                                type="text"
                                value={name}
                                onChange={this.handleNameChange}
                                className={classes.textField}
                                placeholder="Platform"
                                InputProps={{classes: {root: classes.input},
                                    disableUnderline: true, readOnly: link && (this.checkItem(link))}}
                            />

                            <TextField
                                multiline
                                rows={3}
                                type="text"
                                value={url}
                                onChange={this.handleURLChange}
                                className={classes.textField}
                                placeholder="paste/write url here..."
                                InputProps={{classes: {root: classes.input},
                                    disableUnderline: true}}
                            />

                            <div className={classes.container_buttons}>
                                {this.checkLink(link) &&
                                (<Button
                                    className={classes.button}
                                    style={{float: 'left'}}
                                    onClick={this.unlink(link)}
                                >
                                    <Typography
                                        variant="caption"
                                        className={classes.buttonHeading}
                                    >
                                        Remove Link
                                    </Typography>
                                </Button>)}

                                <Button
                                    className={classes.button}
                                    classes={{disabled: classes.button_disabled}}
                                    style={{float: 'right'}}
                                    disabled={disabled}
                                    onClick={this.sendLink}
                                >
                                    <Typography
                                        variant="caption"
                                        className={classes.buttonHeading}
                                    >
                                        Done
                                    </Typography>
                                </Button>

                                <Button
                                    className={classes.button}
                                    style={{float: 'right', margin: '0 10px 0 0'}}
                                    onClick={this.handleLinkClose}
                                >
                                    <Typography
                                        variant="caption"
                                        className={classes.buttonHeading}
                                    >
                                        Cancel
                                    </Typography>
                                </Button>
                            </div>
                        </div>
                    </div>
                </Collapse>
            </div>
        );
    }
}

export default withStyles(styles)(GridForm);