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
    <UserContext.Provider value={'Seunghyeon'}>
      <NavigationContainer>
        <StatusBar style="dark" />
        {user ? (
          <MainStack user={user} setUser={setUser} />
        ) : (
          <AuthStack user={user} setUser={setUser} />
        )}
      </NavigationContainer>
    </UserContext.Provider>
  );
};

export default App;
