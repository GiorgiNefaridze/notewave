import { createStackNavigator } from "@react-navigation/stack";

import { Routes } from "./Routes";
import Introduction from "../screens/Introduction/Introduction";
import Home from "../screens/Home/Home";

const Stack = createStackNavigator();

const ScreenNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Routes.Home}
      screenOptions={{ header: () => {} }}
    >
      <Stack.Screen name={Routes.Introduction} component={Introduction} />
      <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default ScreenNavigation;
