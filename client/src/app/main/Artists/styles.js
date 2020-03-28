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
        width: '50%',
        padding: '10px 10px',
        backgroundColor: theme.secondaryColor
    },
    indicator: {
        height: '3px',
        backgroundColor: theme.primaryColor
    }
});