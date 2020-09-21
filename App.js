import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import AlbumList from "./src/components/AlbumList";
import AlbumDetail from "./src/components/AlbumDetail";
import React from "react";

const navigator = createStackNavigator(
  {
    AlbumList,
    AlbumDetail,
  },

  {
    initialRouteName: "AlbumList",
    defaultNavigationOptions: {
      headerStyle: { backgroundColor: "#ccc", height: 90 },
      headerTitleStyle: {
        textAlign: "center",
      },
    },
  }
);

const App = createAppContainer(navigator);

export default () => {
  return <App />;
};
