import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../Contexts/auth';
import {
  Background,
  Container,
  Logo,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
  Link,
  LinkText
} from './styles';

import logo from '../../assets/Logo.png'

export default function SignIn() {

  const navigation = useNavigation();

  function navigateToSignUp() {
    navigation.navigate('SignUp');
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { signIn, loadingAuth } = useContext(AuthContext);

  function handleLogin() {
    signIn(email, password);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
      >
        <Logo source={logo} />

        <AreaInput>
          <Input
            placeholder='Email'
            autoCorrect={false}
            autoCapitalize='none'
            value={email}
            onChangeText={setEmail}
          />
        </AreaInput>

        <AreaInput>
          <Input
            placeholder='Senha'
            autoCorrect={false}
            autoCapitalize='none'
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
        </AreaInput>

        <SubmitButton
          onPress={handleLogin}
        >
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color='#FFF' />
            ) :
              (
                <SubmitText>Acessar</SubmitText>
              )
          }
        </SubmitButton>

        <Link
          onPress={navigateToSignUp}
        >
          <LinkText>Criar uma conta!</LinkText>
        </Link>
      </Container>
    </Background>
  );
}