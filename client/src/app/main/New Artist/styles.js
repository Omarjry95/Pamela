export const styles = theme => ({
    root0: {
        width: '100%',
        height: '100%',
        padding: '10px 0'
    },
    root1: {

    },
    form: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    container: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    label: {
        margin: '0 0 10px 0',
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold'
    },
    textField: {
        width: '100%',
        padding: '5px',
        border: '2px solid ' + theme.secondaryColor + '66',
        borderRadius: '5px',
        '&:hover': {
            border: '2px solid ' + theme.secondaryColor
        }
    },
    input: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontSize: '0.75rem'
    },
    container_1: {
        width: '90%',
        margin: '0 0 20px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
    },
    avatar: {
        width: '200px',
        height: '200px',
        margin: '0 0 10px 0'
    },
    file: {
        width: 0.1,
        height: 0.1,
        opacity: 0,
        overflow: 'hidden',
        position: 'absolute',
        zIndex: -1
    },
    file_label: {
        padding: '5px',
        border: '2px solid ' + theme.secondaryColor,
        borderRadius: '5px',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.secondaryColor,
            '& $label_heading': {
                color: theme.primaryColor
            }
        }
    },
    label_avatar: {
        width: '15px',
        height: '15px',
        margin: '0 5px 0 0'
    },
    label_heading: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
    },
    info_avatar: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        top: 0,
        left: '100%',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    remove_avatar: {
        width: '20px',
        height: '20px',
        position: 'absolute',
        top: 0,
        left: 'calc(100% - 30px)',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    tooltip: {
        padding: '10px 10px 10px 5px',
        margin: '0 5px 0 0',
        backgroundColor: theme.secondaryColor
    },
    tooltip_1: {
        margin: '5px 0 0 0',
        backgroundColor: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
    }
});