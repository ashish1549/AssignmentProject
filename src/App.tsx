import React, { useState } from "react";

import { theme, ThemeContext } from "./util/theme";
import AppNavigator from "./AppNavigator";

const App: React.FC = () => {
  const [processing] = useState(true);

  return (
    <ThemeContext.Provider value={theme}>
      <AppNavigator initProcessing={processing} />
    </ThemeContext.Provider>
  );
};

export default App;
