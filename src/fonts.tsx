import { Global } from '@emotion/react';

export const Fonts = () => (
	<Global
		styles={`
    /* latin-ext */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSfSnk-DKQJRBg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 200;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSfSnk-NKQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmScMnk-DKQJRBg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 300;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmScMnk-NKQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSdSnk-DKQJRBg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSdSnk-NKQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSdgnk-DKQJRBg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSdgnk-NKQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSeMmU-DKQJRBg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSeMmU-NKQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSe1mU-DKQJRBg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSe1mU-NKQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* latin-ext */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSfSmU-DKQJRBg.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Sora';
  font-style: normal;
  font-weight: 800;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/sora/v10/xMQOuFFYT72X5wkB_18qmnndmSfSmU-NKQI.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`}
	/>
);
