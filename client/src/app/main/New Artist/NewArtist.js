import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {styles} from './styles';
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export class NewArtist extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            name: ''
        }
    }

    handleNameChange = event =>
    {
        this.setState({ name: event.target.value })
    };

    sendArtist = event =>
    {

    };

    render()
    {
        const {classes, tab} = this.props;
        const {name} = this.state;

        return ( tab === 0 ?
                (<div className={classes.root0}>
                    <form
                        className={classes.form}
                        onSubmit={this.sendArtist}
                    >
                        <div className={classes.container}>
                            <Typography
                                variant="caption"
                                className={classes.label}
                            >
                                Artist Name
                            </Typography>
                            <TextField
                                type="text"
                                value={name}
                                onChange={this.handleNameChange}
                                className={classes.textField}
                                placeholder="Artist Name"
                                InputProps={{classes: {root: classes.input}, disableUnderline: true}}
                            />
                        </div>

                    </form>
                </div>)
                :
                (<div className={classes.root0}>

                </div>)
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

export default withStyles(styles) (withRouter(connect(mapStateToProps, mapDispatchToProps) (NewArtist)));