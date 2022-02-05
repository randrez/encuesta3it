
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import PollScreen from '../screens/poll'
import ResultsScreen from '../screens/results'
import AboutScreen from '../screens/about'

const Drawer = createDrawerNavigator();

export default () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Poll">
                <Drawer.Screen name="Encuesta" component={PollScreen} />
                <Drawer.Screen name="Resultados" component={ResultsScreen} />
                <Drawer.Screen name="About" component={AboutScreen} />
            </Drawer.Navigator>
      </NavigationContainer>
    )
}