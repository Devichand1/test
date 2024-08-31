import {TextStyle, useWindowDimensions, ViewStyle} from 'react-native';
import {
  GREEN_COLOR,
  PRIMARY_COLOR,
  SLICE_COLOR,
  SLICE_LIGHT_COLOR,
} from '../../constants/colors';

const useStyles = () => {
  const {width, height} = useWindowDimensions();
  const SLICE_WIDTH = (width - 76) / 3;
  return {
    container: {
      flex: 1,
      padding: 24,
    } as ViewStyle,
    body: {
      borderColor: GREEN_COLOR,
      borderWidth: 2,
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      borderRadius: 12,
      gap: 4,
      padding: 8,
    } as ViewStyle,
    slice: {
      backgroundColor: SLICE_COLOR,
      height: SLICE_WIDTH,
      width: SLICE_WIDTH,
      borderRadius: 12,
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle,
    botSelectedSlice: {
      backgroundColor: SLICE_LIGHT_COLOR,
      height: SLICE_WIDTH,
      width: SLICE_WIDTH,
      borderRadius: 12,
    } as ViewStyle,
    mySelectedSlice: {
      backgroundColor: GREEN_COLOR,
      height: SLICE_WIDTH,
      width: SLICE_WIDTH,
      borderRadius: 12,
    } as ViewStyle,
    text: {
      fontSize: 52,
      color: PRIMARY_COLOR,
      fontWeight: 'bold',
    } as TextStyle,
  };
};
export default useStyles;
