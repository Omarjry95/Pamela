export const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    title: {
        width: '100%',
        margin: '10px 0 10px 0',
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center'
    },
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    container_2: {
        width: '30%',
        height: '90px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        perspective: '1000px',
    },
    container_3: {
        position: 'relative',
        width: '70px',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'transform 1s',
        transformStyle: 'preserve-3d',
        '&:hover': {
            cursor: 'pointer',
            transform: 'rotateY(180deg)'
        }
    },
    avatar: {
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        position: 'absolute',
        backfaceVisibility: 'hidden'
    },
    heading: {
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontStyle: 'italic',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotateY(180deg)',
        backfaceVisibility: 'hidden'
    },
    fab: {
        width: '50px',
        height: '50px',
        backgroundColor: theme.secondaryColor,
        position: 'absolute',
        backfaceVisibility: 'hidden'
    },
    fab_icon: {
        width: '50%',
        height: '50%'
    },
    heading_add: {
        width: '50px',
        height: '50px',
        backgroundColor: 'white',
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontStyle: 'italic',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        transform: 'rotateY(180deg)',
        backfaceVisibility: 'hidden'
    },
    container_1: {
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_form: {
        width: '90%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        width: '100%',
        padding: '5px',
        margin: '0 0 10px 0',
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
    container_buttons: {
        width: '100%'
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
    button_disabled: {
        border: '2px solid ' + theme.secondaryColor + '66',
        '& $buttonHeading': {
            color: theme.secondaryColor + '66'
        }
    },
    buttonHeading: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        textTransform: 'capitalize',
    }
});