import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import ListScreen from '../screens/ListScreen';
import { PRIMARY, WHITE } from '../colors';
import HeaderLeftButton from '../component/HeaderLeftButton';
import HeaderRightButton from '../component/HeaderRightButton';
import SettingScreen from '../screens/SettingScreen';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: { backgroundColor: WHITE },
        headerTitleAlign: 'center',
        headerTintColor: PRIMARY.DEFAULT,
        headerTitleStyle: {
          fontWeight: '700',
        },
        headerLeft: HeaderLeftButton,
      }}
    >
      <Stack.Screen
        name="List"
        component={ListScreen}
        options={{
          title: 'ToDo List',
          headerRight: HeaderRightButton,
        }}
      />
      <Stack.Screen name="Settings" component={SettingScreen} />
    </Stack.Navigator>
  );
};

export default MainStack;
