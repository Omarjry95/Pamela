const styledBy = (property, mapping) => props => mapping[props[property]];

const lights = {
    default: 'radial-gradient(circle, rgba(232, 175, 84, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
    russianViolet: 'radial-gradient(circle, rgba(53, 35, 67, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
    yellowRed: 'radial-gradient(circle, rgba(246, 187, 81, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
    jasper: 'radial-gradient(circle, rgba(220, 58, 68, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
    catawba: 'radial-gradient(circle, rgba(123, 44, 67, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
    tigerEye: 'radial-gradient(circle, rgba(226, 135, 71, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
    redPurple: 'radial-gradient(circle, rgba(164, 82, 67, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
    mayGreen: 'radial-gradient(circle, rgba(73, 159, 77, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
    hunterGreen: 'radial-gradient(circle, rgba(54, 96, 70, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
    turtleGreen: 'radial-gradient(circle, rgba(149, 151, 71, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
    rawUmber: 'radial-gradient(circle, rgba(117, 101, 69, 0.85) 35%, rgba(39, 16, 51, 0.8) 100%)',
};

export const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        backgroundImage: 'url("/images/Dancefloor.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    wrapper: {
        width: '100%',
        height: '100%',
        background: styledBy('lights', lights)
    },
    container: {
        width: '30%',
        height: '70%',
        padding: '10px 0',
        backgroundColor: 'rgba(53, 35, 67, 0.85)',
        borderRadius: '10px',
        position: 'absolute',
        top: '15%',
        left: '35%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    avatar: {
        width: '60px',
        height: '60px',
        margin: '0 0 20px 0'
    },
    message: {
        width: '90%',
        margin: '0 0 20px 0',
        color: theme.primaryColor,
        fontFamily: 'Lora',
        fontWeight: 'bold',
        textAlign: 'center'
    },
    message1: {
        width: '70%',
        padding: '8px',
        margin: '0 0 20px 0',
        borderRadius: '5px',
        backgroundColor: theme.primaryColor,
        color: theme.secondaryColor,
        fontFamily: 'Lora',
        fontWeight: 'bold',
        fontSize: '12px',
        lineHeight: '1.5',
        textAlign: 'center'
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        width: '80%',
        margin: '0 0 20px 0',
        padding: '5px',
        backgroundColor: 'rgba(232, 175, 84, 1.00)',
        borderRadius: '5px'
    },
    input: {
        color: theme.secondaryColor,
        fontFamily: 'Lora',
        fontWeight: 'bold',
        fontSize: '14px'
    },
    button: {
        padding: '5px 10px',
        backgroundColor: theme.primaryColor,
        color: theme.secondaryColor,
        border: '2px solid ' + theme.primaryColor,
        borderRadius: '5px',
        fontFamily: 'Lora',
        fontWeight: 'bold',
        textTransform: 'capitalize',
        '&:hover': {
            border: '2px solid ' + theme.primaryColor,
            backgroundColor: theme.secondaryColor,
            color: theme.primaryColor,
        }
    }
});