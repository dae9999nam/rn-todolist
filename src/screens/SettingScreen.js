import { StyleSheet, Text, View } from 'react-native';
import Button, { ButtonTypes } from '../component/Button';
import { useUserContext } from '../contexts/UserContext';

const SettingScreen = () => {
  const { setUser } = useUserContext();

  return (
    <View style={StyleSheet.container}>
      <Button
        title="로그아웃"
        onPress={() => setUser(null)}
        buttonType={ButtonTypes.DANGER}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
});

export default SettingScreen;
