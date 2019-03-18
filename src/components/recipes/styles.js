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
    content: {
        marginTop: 30,
        height: 50,
    },
    buttonStyle: {
        borderRadius: 10,
        marginLeft: 0,
        marginRight: 0,
        marginBottom: 10,
        height: 50,
    },
})

export default styles