import React, {useState} from 'react';
import {StatusBar} from 'react-native';
// import ErrorBoundary from 'react-native-error-boundary';
import {SafeAreaProvider} from 'react-native-safe-area-context';
// import Boundary from './components/errors/Boundary';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import MainNavigation from './navigation/TabNavigation';

// import { lighTheme } from './constants/lightTheme';
// import { darkTheme } from './constants/darkTheme';


const Main = () => {
  // const [isDark, setIsDark] = useState(false);

  // const theme = isDark ? darkTheme : lighTheme
  return(
  <>
    {/* <SafeAreaProvider> */}
      {/* <TigerbudTheme> */}
        {/* <ErrorBoundary FallbackComponent={Boundary}> */}
          <StatusBar barStyle="light-content" hidden={false} />
          {/* <PaperProvider theme={theme}> */}
            <MainNavigation />
          {/* </PaperProvider> */}
        {/* </ErrorBoundary> */}
      {/* </TigerbudTheme> */}
    {/* </SafeAreaProvider> */}
  </>
)
};

export default Main;
