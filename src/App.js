import { StatusBar } from 'expo-status-bar';
import { UserProvider } from './contexts/UserContext';
import Navigation from './navigations/Navigation';

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <StatusBar style="dark" />
        <Navigation />
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
