import React, {Component} from 'react';

class Auth extends Component
{
    /*eslint-disable-next-line no-useless-constructor*/
    constructor(props)
    {
        super(props);

        this.state = {

        }
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