import Router from "./route/Index";

import ThemeProvider from "./layout/provider/Theme";
import AppLocaleProvider from "./medify/context/AppLocaleProvider";

const App = () => {
  return (
    <ThemeProvider>
      {/* <AppLocaleProvider> */}
      <Router />
      {/* </AppLocaleProvider> */}
    </ThemeProvider>
  );
};
export default App;
