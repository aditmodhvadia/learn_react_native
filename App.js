import {
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator
} from "react-navigation";
import Home from "./src/Home";
import Second from "./src/secondScreen";
import drawerScreen from "./src/drawerScreen";

const MainNavigator = createDrawerNavigator(
  {
    Home: { screen: Home },
    Second: { screen: Second }
  },
  {
    contentComponent: drawerScreen,
    drawerWidth: 350
  },
  {
    initialRouteName: "Home"
  }
);

const App = createAppContainer(MainNavigator);

export default App;
