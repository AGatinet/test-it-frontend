import { createStackNavigator } from "react-navigation";
import MainScreen from "../screens/Connexion/EcranAccueil";
import SignUpScreen from "../screens/Connexion/EcranCreationCompte";
import LogInScreen from "../screens/Connexion/EcranConnexion";

const App = createStackNavigator({
  Main: { screen: MainScreen },
  SignUp: { screen: SignUpScreen },
  LogIn: { screen: LogInScreen }
});

export default App;
