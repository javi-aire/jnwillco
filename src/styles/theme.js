import { css } from 'styled-components';

const colors = {
	denimBlue: '#214BB5',
	platinum: '#EEE7E0',
	melon: '#F9B4B2',
	darkLavender: '#774D95',
	yankeesBlue: '#141B41'
}

export default {
  colors: colors,
  breakpoints: {
    small: 0,
    medium: 414,
    large: 768,
    xlarge: 1024,
    xxlarge: 1440
  },
  spacing: {
    tiny: 8,
    small: 16,
    moderate: 24,
    medium: 32,
    large: 40,
    xlarge: 80
  }
}