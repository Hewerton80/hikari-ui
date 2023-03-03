// import '../src/styles/globals.css'
// import * as NextImage from 'next/image'
import { createGlobalStyle } from "styled-components";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
    // darkMode: {
    //   // Set the initial theme
    //   current: 'light',
    // },
  },
  layout: "centered",
};

export const globalTypes = {
  darkMode: false,
};

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
  }
  body {

    /* font-family: "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif; */
  }

`;

const withGlobalStyle = (Story) => (
  <>
    <GlobalStyle />
    <Story />
  </>
);

export const decorators = [withGlobalStyle];

// const OriginalNextImage = NextImage.default

// Object.defineProperty(NextImage, 'default', {
//   configurable: true,
//   value: (props) => <OriginalNextImage {...props} unoptimized />,
// })
