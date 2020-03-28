export const styles = theme => ({
    root: {
        height: '40px',
        padding: '5px 10px',
        margin: '0 10px',
        backgroundColor: theme.secondaryColor,
        borderRadius: '10px',
        textAlign: 'right',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    container: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    containerHeading: {
        color: theme.primaryColor,
        fontFamily: 'Patua One'
    },
    caption: {
        color: theme.primaryColor,
        fontFamily: 'Merriweather',
        fontSize: '8px',
        fontWeight: 'bold'
    },
    avatar: {
        width: '40px',
        height: '40px',
        margin: '0 0 0 10px'
    }
});