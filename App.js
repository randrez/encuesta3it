import { AppRegistry, Text, View } from 'react-native'
import {expo} from './app.json'
import StackNavigation from './navigation/stackNavigation'

export default function App() {
  return (
    <>
      <StackNavigation/>
    </>
  );
}

AppRegistry.registerComponent(expo.name, ()=>App)


