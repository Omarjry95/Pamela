import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import AppContext from '../AppContext';
import Layouts from './Layouts';
import {bindActionCreators} from 'redux';

const styles = theme => ({
    root: {

    }
});

class Layout extends Component {

    render()
    {
        const {classes, layout} = this.props;

        const Layer = Layouts[layout];

        return (
            <Layer className={classes.root} {...this.props}/>
        );
    }
}

function mapDispatchToProps(dispatch)
{
    return bindActionCreators({

    }, dispatch);
}

function mapStateToProps({pamela})
{
    return {
        layout: pamela.layout
    }
}

Layout.contextType = AppContext;

export default withStyles(styles, {withTheme: true})(withRouter(connect(mapStateToProps, mapDispatchToProps)(Layout)));