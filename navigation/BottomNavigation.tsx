import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Routes } from "./Routes";
import Notes from "../screens/Notes/Notes";
import Search from "../screens/Search/Search";
import CreateNote from "../screens/CreateNote/CreateNote";

const Tab = createBottomTabNavigator();

interface IProps {
  name: string;
  component: () => JSX.Element;
  inactive: HTMLImageElement;
  active: HTMLImageElement;
}

const tabs = [
  {
    name: Routes.Notes,
    component: Notes,
    inactive: require("../assets/notes.png"),
    active: require(`../assets/notes-active.png`),
  },
  {
    name: Routes.Search,
    component: Search,
    inactive: require("../assets/search.png"),
    active: require(`../assets/search-active.png`),
  },
  {
    name: Routes.CreateNotes,
    component: CreateNote,
    inactive: require("../assets/createNote.png"),
    active: require(`../assets/createNote-active.png`),
  },
];

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={Routes.Notes}
      screenOptions={{ header: () => {} }}
    >
      {tabs?.map(({ name, component, active, inactive }: IProps) => (
        <Tab.Screen
          name={name}
          component={component}
          options={{
            title: name,
            tabBarIcon: ({ focused }) => (
              <Image source={focused ? active : inactive} />
            ),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomNavigation;
