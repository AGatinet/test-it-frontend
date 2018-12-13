import { createStackNavigator } from "react-navigation";
import FirstMainScreen from "../screens/Connexion/EcranAccueil";
import SignUpScreen from "../screens/Connexion/EcranCreationCompte";
import LogInScreen from "../screens/Connexion/EcranConnexion";
import StartingProfileScreen from "../screens/Connexion/EcranProfilTesteur";
import TransitionScreen from "../screens/Connexion/EcranTransition";
import ForgotPasswordScreen from "../screens/Connexion/ForgotPassword";

const App = createStackNavigator({
  FirstMain: { screen: FirstMainScreen },
  SignUp: { screen: SignUpScreen },
  LogIn: { screen: LogInScreen },
  StartingProfile: { screen: StartingProfileScreen },
  Transition: { screen: TransitionScreen },
  ForgotPassword: { screen: ForgotPasswordScreen }
});

export default App;
