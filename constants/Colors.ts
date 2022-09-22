const tintColorLight = '#2f95dc';
const tintColorDark = '#fff';
const toastBgColor = '#7766e8'
const controlBgColor = '#183153'
const controlPressedBgColor = tintColorLight

export default {
  light: {
    text: '#000',
    background: '#fff',
    tint: tintColorLight,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorLight,
    toastBgColor,
    controlBgColor,
    controlPressedBgColor,
  },
  dark: {
    text: '#fff',
    background: '#000',
    tint: tintColorDark,
    tabIconDefault: '#ccc',
    tabIconSelected: tintColorDark,
  },
};

export const pressDurations = {
  SHORT: 20,
  LONG: 20 * 3,
}
