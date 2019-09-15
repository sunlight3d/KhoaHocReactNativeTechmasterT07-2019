import {
    StyleSheet,
    Platform
} from 'react-native';

const getSize = (phoneSize, padSize) => {    
    if(Platform.OS === 'ios') {
        return Platform.isPad ? padSize : phoneSize     
    } else if(Platform.OS == 'android') {
        return Platform.isPad ? padSize : phoneSize    
    }
    return 0
}
export {
    getSize
}