import { css } from 'styled-components';


export const fonts = css`
	font-family: 'Noto Serif', serif;
`

export const normalize = css`
  html,
  body {
    font-size: 100%;
  }

  body {
    position: relative;
    -webkit-font-smoothing: antialiased;
    font-smooth: antialiased;
    -moz-font-smoothing: antialiased;
  }

  button {
    border: 0;
    border-radius: 0;
    padding: 0;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  a,
  a:link {
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol {
    margin: 0;
    padding: 0;
  }

  * {
    box-sizing: border-box;
  }
`;

export default css`
	${fonts};
  ${normalize};


  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    font-family: 'Noto Serif', serif;
    font-size: 14px;
    letter-spacing: 1.25px;
	}
`