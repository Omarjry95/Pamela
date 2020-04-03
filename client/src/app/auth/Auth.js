import React, {Component} from 'react';
import axios from "axios";

class Auth extends Component
{
    /*eslint-disable-next-line no-useless-constructor*/
    constructor(props)
    {
        super(props);

        this.state = {

        }
    }

    componentDidMount()
    {
        axios.defaults.withCredentials = true;
    }

    render()
    {
        const {children} = this.props;

        return (
            <React.Fragment>
                {children}
            </React.Fragment>
        );
    }
}

export default Auth;