import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    banner: {
        width: Dimensions.get('window').width,
        height: 500,
        backgroundColor: 'gray',
    },
    image: {
        width: Dimensions.get('window').width,
        height: 500,
    },
    linksContainer: {
        height: 50,
        backgroundColor: 'steelblue',
        width: Dimensions.get('window').width,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
    },
    linkText: {
        color: '#fff',
        marginTop: 0,
        fontSize: 18,
    },  
})

export default styles;