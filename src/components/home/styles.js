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
        height: 400,
        backgroundColor: 'gray',
    },
    image: {
        width: Dimensions.get('window').width,
        height: 400,
    },
    linksContainer: {
        height: 100,
        backgroundColor: 'steelblue',
        width: Dimensions.get('window').width,
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
    },
    linkText: {
        color: '#fff',
        marginTop: 10,
        fontSize: 18,
    },  
})

export default styles;