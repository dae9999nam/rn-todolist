import { StatusBar } from 'expo-status-bar';
import Navigation from './navigations/Navigation';
import UserContext from './contexts/UserContext';
import { useState } from 'react';
import MainStack from './navigations/MainStack';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './navigations/AuthStack';

const App = () => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <NavigationContainer>
        <StatusBar style="dark" />
        {user ? <MainStack /> : <AuthStack />}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
