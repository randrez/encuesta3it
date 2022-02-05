
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer'
import SurveyScreen from '../screens/survey'
import ResultsScreen from '../screens/results'
import AboutScreen from '../screens/about'

const Drawer = createDrawerNavigator();

export default () => {
    return(
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Survey">
                <Drawer.Screen name="Encuesta" component={SurveyScreen} />
                <Drawer.Screen name="Resultados" component={ResultsScreen} />
                <Drawer.Screen name="Acerca de" component={AboutScreen} />
            </Drawer.Navigator>
      </NavigationContainer>
    )
}