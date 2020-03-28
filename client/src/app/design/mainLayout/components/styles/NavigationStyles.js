export const styles = theme => ({
    root: {
        width: 'calc(100% - 60px)',
        maxHeight: '75%',
        margin: '10px 0 0 0',
        display: 'flex',
        flexDirection: 'column',
        overflowY: 'auto',
        '&::-webkit-scrollbar': {
            width: '2px'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: theme.primaryColor
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: theme.secondaryColor
        }
    },
    container: {
        width: '100%',
        minHeight: '50px',
        '&:hover': {
            textDecoration: 'none'
        }
    },
    container1: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            cursor: 'pointer',
            '& $itemHeading': {
                color: theme.thirdColor
            }
        }
    },
    icon: {
        height: '25px',
        width: '25px',
        margin: '0 20px 0 0'
    },
    itemHeading: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bolder'
    }
});