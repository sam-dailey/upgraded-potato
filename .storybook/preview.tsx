import * as React from 'react';
import { JssThemeProvider } from '@bb-ui/react-library/dist/components/JssThemeProvider';

export const decorators = [
  (Story: any, context: any) => {
    return (
      <JssThemeProvider theme="light"><Story /></JssThemeProvider>);
  }
];
