import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    banner: {
        width: Dimensions.get('window').width,
        height: 300,
        backgroundColor: 'gray',
    },
    image: {
        width: Dimensions.get('window').width,
        height: 400,
    },
})

export default styles;