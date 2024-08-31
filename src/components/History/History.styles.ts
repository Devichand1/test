import {TextStyle, ViewStyle} from 'react-native';
import {SLICE_LIGHT_COLOR} from '../../constants/colors';

const useStyles = () => {
  return {
    container: {
      flex: 1,
      padding: 20,
    } as ViewStyle,
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      color: 'white',
      marginBottom: 10,
    } as TextStyle,
    historyItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      borderBottomColor: SLICE_LIGHT_COLOR,
      borderBottomWidth: 1,
      paddingBottom: 10,
    } as ViewStyle,
    status: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    } as ViewStyle,
    gameNumber: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    } as ViewStyle,
    info: {
      flexDirection: 'column',
    } as ViewStyle,
    time: {
      fontSize: 12,
      fontWeight: 'bold',
      color: 'grey',
    } as TextStyle,
  };
};
export default useStyles;
