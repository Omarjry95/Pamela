import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {matchRoutes} from 'react-router-config';
import AppContext from '../AppContext';
import _ from "../utils/lodash";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as Actions from "../store/actions/actions";

class ControlAccess extends Component
{
    constructor(props, context)
    {
        super(props);

        const {routes} = context;

        this.state = {
            accessGranted: true,
            routes
        };
    }

    componentDidMount()
    {
        if (!this.state.accessGranted)
        {
            this.redirectRoute();
        }
    }

    componentDidUpdate()
    {
        if (!this.state.accessGranted)
        {
            this.redirectRoute();
        }
    }

    static getDerivedStateFromProps(props, state)
    {
        const {location} = props;
        const {pathname} = location;

        let accessGranted = true;

        const matched = matchRoutes(state.routes, pathname)[0];

        if (matched)
        {
            let user = localStorage.getItem('pamela_user_has_signed_in');

            if (!_.isEqual(matched.route.path, "/login"))
            {
                if (!user)
                {
                    props.logOut();
                    props.setLayout("emptyLayout");
                    accessGranted = false;
                }
                else
                {
                    props.updateLoginState(user);
                    props.setLayout("mainLayout");
                }
            }
            else
            {
                if (user)
                {
                    props.updateLoginState(user);
                    props.setLayout("mainLayout");
                    accessGranted = false;
                }
                else
                {
                    props.logOut();
                    props.setLayout("emptyLayout");
                }
            }
        }

        return {
            accessGranted
        };
    }

    shouldComponentUpdate(nextProps, nextState, nextContext)
    {
        return !nextState.accessGranted;
    }

    redirectRoute = () =>
    {
        if (this.props.success)
        {
            let url = '/';

            this.props.history.push(url);
        }
        else
        {
            let url = '/login';

            this.props.history.push(url);
        }
    };

    render()
    {
        const {children} = this.props;

        return (
            <React.Fragment>
                {children}
            </React.Fragment>);
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({
        updateLoginState: Actions.updateLoginState,
        logOut: Actions.logOut,
        setLayout: Actions.setLayout
    }, dispatch);
}

function mapStateToProps({pamela})
{
    return {
        success: pamela.loginState.success
    }
}

ControlAccess.contextType = AppContext;

export default withRouter(connect(mapStateToProps, mapDispatchToProps) (ControlAccess));