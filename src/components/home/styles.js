import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
    },
    banner: {
        width: Dimensions.get('window').width,
        height: 200,
        backgroundColor: 'gray',
    },
    image: {
        width: Dimensions.get('window').width,
        height: 200,
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
    box: {
        width: Dimensions.get('window').width,
        alignSelf: 'center',
        backgroundColor: 'gray',
        zIndex: 200,
    },
    text: {
        color: '#fff',
        fontSize: 18,
    },  
})

export default styles;