
import * as Font from 'expo-font';

export const LoadFonts = async () => {

  await Font.loadAsync({
    'sans-light': require('../../assets/fonts/Bahij_TheSansArabic-Light.ttf'),
    'sans-black': require('../../assets/fonts/Bahij_TheSansArabic-Black.ttf'),
    'sans-bold': require('../../assets/fonts/Bahij_TheSansArabic-Bold.ttf'),
    'sans-extrBold': require('../../assets/fonts/Bahij_TheSansArabic-ExtraBold.ttf'),
    'sans-extrLight': require('../../assets/fonts/Bahij_TheSansArabic-ExtraLight.ttf'),
    'sans-plain': require('../../assets/fonts/Bahij_TheSansArabic-Plain.ttf'),
    'sans-semiLight': require('../../assets/fonts/Bahij_TheSansArabic-SemiLight.ttf'),
    'sans-semiBold': require('../../assets/fonts/Bahij_TheSansArabic-SemiBold.ttf'),
    'noto-naskhBold': require('../../assets/fonts/NotoNaskhArabicUI-Bold.ttf'),
    'noto-naskhRegular': require('../../assets/fonts/NotoNaskhArabicUI-Regular.ttf'),
    'shilia-medium': require('../../assets/fonts/Shilia-W23-530-Medium.ttf'),
    'Questv1': require('../../assets/fonts/Questv1-Bold.otf'),
  });
}


