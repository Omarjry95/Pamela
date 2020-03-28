import React from "react";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core';
import {withRouter} from 'react-router-dom';

function Theme({children})
{
    let mainTheme = createMuiTheme();

    mainTheme.primaryColor = '#E6F14A';
    mainTheme.secondaryColor = '#388697';
    mainTheme.thirdColor = '#25436D';

    return (
        <MuiThemeProvider theme={mainTheme}>
            {children}
        </MuiThemeProvider>
    )
}

export default withRouter(Theme);