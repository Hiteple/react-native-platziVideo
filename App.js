import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import Movie from './src/screens/containers/Movie';
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ApplicationLayout from './src/ApplicationLayout';

import Loading from './src/sections/components/Loading';
import {Provider} from 'react-redux';

// Persistent store
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './store';

const Stack = createStackNavigator();
const myIcon = <Icon name="arrow-left" size={20} color="#fff" />;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerBackImage: () => <Text>{'<-'}</Text>,
              headerTintColor: '#fff',
              headerStyle: {backgroundColor: '#70b124'},
              headerBackImage: () => myIcon,
            }}>
            <Stack.Screen name="Home" component={ApplicationLayout} />
            <Stack.Screen name="Movie" component={Movie} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
