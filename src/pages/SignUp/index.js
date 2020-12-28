import React, { useState, useContext } from 'react';
import { Platform, ActivityIndicator } from 'react-native';
import { AuthContext } from '../../Contexts/auth';
import {
  Background,
  Container,
  AreaInput,
  Input,
  SubmitButton,
  SubmitText,
} from './styles';

export default function SignUp() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nome, setNome] = useState('');

  const { signUp, loadingAuth } = useContext(AuthContext);

  function handleSignUp() {
    signUp(email, password, nome);
  }

  return (
    <Background>
      <Container
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        enabled
      >
        <AreaInput>
          <Input
            placeholder='Nome'
            autoCorrect={false}
            autoCapitalize='none'
            value={nome}
            onChangeText={setNome}
          />
        </AreaInput>

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
          onPress={handleSignUp}
        >
          {
            loadingAuth ? (
              <ActivityIndicator size={20} color='#FFF' />
            ) :
              (
                <SubmitText>Cadastrar</SubmitText>
              )
          }
        </SubmitButton>
      </Container>
    </Background>
  );
}