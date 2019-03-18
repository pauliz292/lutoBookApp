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
})

export default styles