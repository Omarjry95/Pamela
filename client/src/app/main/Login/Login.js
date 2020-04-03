import React, {Component} from 'react';
import {withStyles} from '@material-ui/core';
import {bindActionCreators} from "redux";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";
import {styles} from './styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import * as Actions from '../../store/actions/actions';
import history from "../../../history";

const ambiances = ["russianViolet", "yellowRed", "jasper", "catawba", "tigerEye", "redPurple", "mayGreen", "hunterGreen",
    "turtleGreen", "rawUmber"];

const Wrapper = withStyles(styles)(({ classes, lights, ...other }) => (
    <div className={classes.wrapper} {...other}>
    </div>
));

export class Login extends Component
{
    constructor(props)
    {
        super(props);

        this.state = {
            username: '',
            password: '',

            disabled: true,

            lights: 'default',
            timer: null,

            loading: false
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot)
    {
        const changedUsername = prevState.username !== this.state.username;
        const changedPassword = prevState.password !== this.state.password;

        if (changedUsername || changedPassword)
        {
            this.handleFormValidation(this.state);
            this.switchLights();
        }
    }

    handleFormValidation = (state) =>
    {
        const emptyUsername = state.username === '';
        const emptyPassword = state.password === '';

        const empty = emptyUsername || emptyPassword;

        this.setState({disabled: empty});
    };

    switchLights = () =>
    {
        if (this.state.timer)
        {
            clearTimeout(this.state.timer);
        }

        let index = Math.floor(Math.random() * (ambiances.length - 1));

        while (index === ambiances.indexOf(this.state.lights))
        {
            index = Math.floor(Math.random() * (ambiances.length - 1));
        }

        let timer = setTimeout(() => this.setState({lights: 'default'}), 1000);

        this.setState({lights: ambiances[index], timer});
    };

    handleUsernameChange = event =>
    {
        this.setState({username: event.target.value});
    };

    handlePasswordChange = event =>
    {
        this.setState({password: event.target.value});
    };

    handleLogin = async event =>
    {
        event.preventDefault();

        this.setState({loading: true});

        const credentials = {
            username: this.state.username,
            password: this.state.password
        };

        await this.props.signIn(credentials);

        //await this.props.signInSpotify();

        this.setState({loading: false});

        if (this.props.success)
        {
            history.push('/');
        }
    };

    render()
    {
        const {classes, success, message} = this.props;
        const {username, password, disabled, lights} = this.state;

        return (
            <div className={classes.root}>
                <Wrapper lights={lights}>
                    <div className={classes.container}>
                        <Avatar alt="Pamela" src={process.env.PUBLIC_URL + '/images/Pamela.png'} className={classes.avatar}
                                variant="square" style={{animation: this.state.loading ? "spin 2s infinite linear" : "none"}}
                        />

                        <Typography className={classes.message} variant="subtitle1" gutterBottom>
                            Welcome to Pamela, Your Music Assistant. Please Sign In With Your Username or E-mail.
                        </Typography>

                        <form className={classes.form} onSubmit={this.handleLogin}>
                            <TextField type="text" value={username} onChange={this.handleUsernameChange}
                                       className={classes.textField} placeholder="Username"
                                       InputProps={{classes: {root: classes.input}, disableUnderline: true}}
                            />

                            <TextField type="password" value={password} onChange={this.handlePasswordChange}
                                       className={classes.textField} placeholder="Password"
                                       InputProps={{classes: {root: classes.input}, disableUnderline: true}}
                            />

                            {!success && message.length > 0 && (
                                <span className={classes.message1}>
                                    {message}
                                </span>
                            )}

                            <Button type="submit" className={classes.button} disabled={disabled}>
                                Sign In
                            </Button>
                        </form>
                    </div>
                </Wrapper>
            </div>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        signIn: Actions.signIn,
        signInSpotify: Actions.signInSpotify
    }, dispatch);
}

function mapStateToProps({pamela})
{
    return {
        success: pamela.loginState.success,
        message: pamela.loginState.message
    }
}

export default withStyles(styles) (withRouter(connect(mapStateToProps, mapDispatchToProps) (Login)));