export const styles = theme => ({
    root: {
        width: 'calc(80% - 40px)',
        height: '55px',
        marginLeft: 'calc(20% + 10px)',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        position: 'fixed',
        zIndex: 1
    },
    container: {
        width: "40px",
        height: "40px",
        margin: '0 20px',
        borderRadius: "50%",
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: "20px",
        height: "20px",
        '&:hover': {
            cursor: 'pointer'
        }
    },
    paper: {
        backgroundColor: theme.primaryColor,
        border: '2px solid ' + theme.secondaryColor,
        borderRadius: '10px'
    },
    text: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold'
    },
    actions: {
        display: 'flex',
        justifyContent: 'center'
    },
    button: {
        width: '40px',
        minWidth: '40px',
        height: '40px',
        minHeight: '40px',
        borderRadius: '50%',
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.secondaryColor,
            color: theme.primaryColor
        }
    }
});