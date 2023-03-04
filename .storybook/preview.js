// import '../src/styles/globals.css'
// import * as NextImage from 'next/image'
import { GlobalStyle } from "../src/theme/globalStyles";

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
