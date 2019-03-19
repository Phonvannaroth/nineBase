import {Platform} from 'react-native';

const font = {
    GoogleSans: {
      weights: {
        Bold: '700',
        SemiBold: '600',
        Normal: '400'
      },
    },
  }
  
const fontMaker = (options) => {
    let { weight,family,familyIOS } = Object.assign({
      weight: null,
      family: 'GoogleSans',
      familyIOS:'Google Sans'
    }, options)
    const { weights } = font[family]
    if (Platform.OS === 'android') {
      weight = weights[weight] ? weight : ''
      const suffix = weight
      return {
        fontFamily: family + (suffix.length ? `-${suffix}` : '')
      }
    } else {
      weight = weights[weight] || weights.Normal
      return {
        fontFamily: familyIOS,
        fontWeight: weight,
      }
    }
  }

  export const fontNormal = fontMaker({ weight: 'Normal'})
  export const fontSemiBold= fontMaker({ weight: 'SemiBold'})
  export const fontBold = fontMaker({ weight: 'Bold'})