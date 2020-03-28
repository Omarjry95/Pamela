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
        margin: '0 0 10px 0',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    label: {
        width: '25%',
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold'
    },
    textField: {
        width: '65%',
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
    }
});