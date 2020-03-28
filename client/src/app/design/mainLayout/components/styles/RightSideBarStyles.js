export const styles = theme => ({
    root: {
        width: '20%',
        height: 'calc(100% - 10px)',
        padding: '10px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'fixed',
        zIndex: 2
    },
    avatar: {
        width: '50px',
        height: '50px',
        margin: '0 0 5px 0',
        boxShadow: '0px 0px 10px ' + theme.secondaryColor,
        '&:hover': {
            cursor: 'pointer',
            boxShadow: '0px 0px 20px ' + theme.secondaryColor,
        }
    },
    logoName: {
        margin: '0 0 20px 0',
        color: theme.secondaryColor,
        fontFamily: 'Remachine'
    },
    heading: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    menuHeading: {
        padding: '0 5px',
        color: theme.primaryColor,
        fontFamily: 'Lora',
        fontWeight: 'bold'
    },
    hr: {
        height: '1px',
        backgroundColor: theme.primaryColor,
        border: 'none',
        borderTop: '2px ' + theme.primaryColor,
        color: theme.primaryColor
    }
});