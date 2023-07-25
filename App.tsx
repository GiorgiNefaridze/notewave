import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { NotesContextProvider } from "./context/noteContext";
import ScreenNavigation from "./navigation/ScreenNavigation";

const App = () => {
  return (
    <NavigationContainer>
      <NotesContextProvider>
        <ScreenNavigation />
      </NotesContextProvider>
    </NavigationContainer>
  );
};

export default App;
