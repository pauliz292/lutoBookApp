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
        backgroundColor: 'gray',
        height: 400,
    },
    image: {
        width: Dimensions.get('window').width,
        height: 400,
    },
    search: {
        height: 50,
        marginTop: 30,
    },
    content: {
        marginTop: 30,
        height: 100,
        flexDirection: 'column-reverse',
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