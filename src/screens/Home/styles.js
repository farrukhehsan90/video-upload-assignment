import { StyleSheet } from 'react-native';
import { screenWidth, screenHeight } from '../../constants/screen';

export default StyleSheet.create({
    container: {
        width: screenWidth,
        height: screenHeight,
        backgroundColor: '#2d2926ff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    loaderText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18,
        marginBottom: 20
    },
    backgroundVideo: {
        width: screenWidth / 1.1,
        height: 200,
        marginBottom: 20
    }
});