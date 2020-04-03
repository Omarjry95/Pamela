export const styles = theme => ({
    root: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    container: {
        width: '200px',
        height: '200px',
        margin: '0 0 10px 0',
        border: '2px solid ' + theme.secondaryColor,
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        '&:hover': {
            cursor: 'pointer'
        }
    },
    avatar: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0
    },
    heading: {
        width: 'calc(100% - 40px)',
        padding: '5px 10px',
        backgroundColor: theme.secondaryColor,
        borderRadius: '5px',
        color: theme.primaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        textAlign: 'center',
        zIndex: 1
    },
    grid_list: {
        width: '100%',
        height: '150px',
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        '&::-webkit-scrollbar': {
            height: '5px'
        },
        '&::-webkit-scrollbar-track': {
            backgroundColor: 'white'
        },
        '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'black'
        }
    },
    bar: {
        height: 'auto',
        backgroundColor: 'white'
    },
    barTitle: {
        color: 'black',
        fontFamily: 'Merriweather',
        fontSize: '10px',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    action_avatar: {
        width: '15px',
        height: '15px',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    container_1: {
        width: '100%',
        padding: '5px 0',
        textAlign: 'center'
    },
    heading_1: {
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    paper: {
        width: '15%'
    },
    container_2: {
        width: 'calc(100% - 20px)',
        padding: '5px 10px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    avatar_1: {
        width: '25px',
        height: '25px'
    },
    heading_2: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold'
    },
    heading_2_caption: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    wrapper: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column'
    },
    container_3: {
        width: '100%',
        padding: '5px 0',
        margin: '0 0 2px 0',
        backgroundColor: theme.secondaryColor + 'CC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.secondaryColor
        }
    },
    container_3_selected: {
        width: '100%',
        padding: '5px 0',
        margin: '0 0 2px 0',
        backgroundColor: theme.primaryColor + 'CC',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.primaryColor
        }
    },
    heading_3: {
        margin: '0 0 2px 0',
        color: theme.primaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    heading_3_selected: {
        margin: '0 0 2px 0',
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    heading_4: {
        color: theme.primaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold'
    },
    heading_4_selected: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold'
    },
    container_4: {
        width: '100%',
        margin: '-2px 0 0 0',
        display: 'flex',
        flexDirection: 'column'
    },
    container_5: {
        width: '100%',
        padding: '5px 0',
        textAlign: 'center',
        '&:hover': {
            cursor: 'pointer',
            backgroundColor: theme.primaryColor
        }
    },
    container_5_selected: {
        width: '100%',
        padding: '5px 0',
        backgroundColor: theme.primaryColor,
        textAlign: 'center',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    heading_5: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    grid: {
        width: '100%',
        border: '2px solid ' + theme.secondaryColor
    },
    paper_1: {
        width: '100%',
        maxHeight: '170px',
        padding: '5px 0',
        backgroundColor: 'white',
        borderRadius: '0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative'
    },
    heading_6: {
        color: theme.secondaryColor,
        fontFamily: 'Merriweather',
        fontWeight: 'bold',
        fontStyle: 'italic'
    },
    avatar_2: {
        width: '90%',
        height: '100%',
        flexShrink: 1
    },
    container_6: {
        width: '100%',
        height: '100%',
        backgroundColor: '#000000CC',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: 0,
        left: 0
    },
    avatar_3: {
        width: '40px',
        height: '40px',
        '&:hover': {
            cursor: 'pointer',
            width: '50px',
            height: '50px',
        }
    },
    container_search: {
        width: '100%',
        padding: '5px 0',
        margin: '0 0 10px 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textField: {
        width: '80%',
        padding: '0 5px',
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
    animate: {
        animation: `$spin2 60s infinite linear`
    },
    "@keyframes spin2": {
        "0%": {
            transform: "rotate(0deg)"
        },
        "100%": {
            transform: "rotate(360deg)"
        }
    }
});