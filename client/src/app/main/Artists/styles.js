export const styles = theme => ({
    root: {
        width: '100%',
        height: 'calc(100% - 10px)',
        padding: '5px 0',
        flexGrow: 1
    },
    grid: {
        width: 'calc(100% - 5px)',
        maxHeight: '100%',
        padding: '0 10px 0 0',
        margin: '0',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '5px'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: theme.secondaryColor + '33',
            borderRadius: '10px'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.secondaryColor,
            borderRadius: '10px'
        }
    },
    paper: {
        width: '100%',
        height: '235px',
        padding: '5px',
        backgroundColor: theme.secondaryColor,
        borderRadius: '10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.primaryColor,
            '& $itemHeading': {
                color: theme.secondaryColor
            }
        }
    },
    avatar: {
        width: '40px',
        height: '40px',
        margin: '0 0 10px 0'
    },
    itemHeading: {
        color: theme.primaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold'
    },
    dialog: {
        width: '100%',
        maxHeight: '90%'
    },
    rounded: {
        borderRadius: '3px'
    },
    header: {
        padding: 0
    },
    content: {
        padding: 0
    },
    tab: {
        minWidth: '50%',
        maxWidth: '100%',
        padding: '10px 10px',
        backgroundColor: theme.secondaryColor
    },
    indicator: {
        height: '3px',
        backgroundColor: theme.primaryColor
    },
    footer: {
        width: 'calc(100% - 20px)',
        padding: '10px',
        display: 'block'
    },
    button: {
        padding: '5px 10px',
        border: '2px solid ' + theme.secondaryColor,
        borderRadius: '5px',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.secondaryColor,
            '& $buttonHeading': {
                color: theme.primaryColor
            }
        }
    },
    buttonHeading: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    },
    drawer: {
        height: '15%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_drawer: {
        width: '100%',
        height: '100%',
        padding: '5px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    drawerHeading: {
        margin: '0 0 20px 0',
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
    },
    container_drawer_1: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});