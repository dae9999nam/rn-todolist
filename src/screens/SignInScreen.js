import { Alert, Image, StyleSheet, View, Keyboard } from 'react-native';

import Input, {
  IconNames,
  KeyboardTypes,
  ReturnKeyTypes,
} from '../component/Input';

import SafeInputView from '../component/SafeInputView';
import { useEffect, useRef, useState } from 'react';
import Button from '../component/Button';
import { signIn } from '../api/auth';
import { useUserContext } from '../contexts/UserContext';
import PropTypes from 'prop-types';
import UserContext from '../contexts/UserContext';

//상태변수 설정
const SignInScreen = ({ setUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const passwordRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setDisabled(!email || !password);
  }, [email, password]);

  const onSubmit = async () => {
    if (!isLoading && !disabled) {
      try {
        setIsLoading(true);
        Keyboard.dismiss();
        const data = await signIn(email, password);
        console.log(data);
        setIsLoading(false);
        setUser(data);
      } catch (error) {
        Alert.alert('로그인 실패', error, [
          { text: '확인', onPress: () => setIsLoading(false) },
        ]);
      }
    }
  };

  return (
    <UserContext.Consumer>
      {(value) => {
        console.log(value);

        return (
          <SafeInputView>
            <View style={styles.container}>
              <Image
                source={require('../../assets/ch4_assets/main.png')}
                style={styles.image}
              />
              <Input
                title={'이메일'}
                placeholder="your@email.com"
                keyboardType={KeyboardTypes.EMAIL}
                returnKeyType={ReturnKeyTypes.NEXT}
                value={email}
                onChangeText={(email) => setEmail(email.trim())}
                iconName={IconNames.EMAIL}
                onSubmitEditing={() => passwordRef.current.focus()}
              />
              <Input
                ref={passwordRef}
                title={'비밀번호'}
                returnKeyType={ReturnKeyTypes.DONE}
                secureTextEntry
                value={password}
                onChangeText={(password) => setPassword(password.trim())}
                iconName={IconNames.PASSWORD}
                onSubmitEditing={onSubmit}
              />
              <View style={styles.buttonContainer}>
                <Button
                  title="로그인"
                  onPress={onSubmit}
                  disabled={disabled}
                  isLoading={isLoading}
                />
              </View>
            </View>
          </SafeInputView>
        );
      }}
    </UserContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: '100%',
    marginTop: 30,
    paddingHorizontal: 20,
  },
  image: {
    width: 200,
    height: 200,
  },
});

SignInScreen.propTypes = {
  navigation: PropTypes.object,
};

export default SignInScreen;
