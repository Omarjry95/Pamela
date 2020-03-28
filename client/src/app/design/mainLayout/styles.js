export const styles = theme => ({
    root: {
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: theme.primaryColor
    },
    content: {
        width: 'calc(80% - 30px)',
        height: 'calc(100% - 90px)',
        borderRadius: '10px',
        position: 'absolute',
        left: '20%',
        top: '60px'
    }
});