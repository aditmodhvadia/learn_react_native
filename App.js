import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from "./src/Home";
import Second from "./src/secondScreen";

const MainNavigator = createStackNavigator(
  {
    Home: { screen: Home },
    Second: { screen: Second }
  }
);

const App = createAppContainer(MainNavigator);

export default App;
