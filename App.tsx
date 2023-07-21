import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import ScreenNavigation from "./navigation/ScreenNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <ScreenNavigation />
    </NavigationContainer>
  );
};

export default App;
