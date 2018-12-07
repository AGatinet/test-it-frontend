import { createStackNavigator } from "react-navigation";
import MainScreen from "../screens/Connexion/EcranAccueil";
import SignUpScreen from "../screens/Connexion/EcranCreationCompte";
import LogInScreen from "../screens/Connexion/EcranConnexion";
import StartingProfileScreen from "../screens/Connexion/EcranProfilTesteur";
import TransitionScreen from "../screens/Connexion/EcranTransition";

const App = createStackNavigator({
  Main: { screen: MainScreen },
  SignUp: { screen: SignUpScreen },
  LogIn: { screen: LogInScreen },
  StartingProfile: { screen: StartingProfileScreen },
  Transition: { screen: TransitionScreen }
});

export default App;
