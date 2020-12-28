import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/auth';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/Header';
import {
  Container,
  Name,
  NewLink,
  NewText,
  Logout,
  LogoutText
} from './styles';

export default function Profile() {

  const { user, signOut } = useContext(AuthContext);

  const navigation = useNavigation();

  function navigateToNew() {
    navigation.navigate('Registrar');
  }

  return (
    <Container>
      <Header />
      <Name>{user && user.nome}</Name>

      <NewLink
        onPress={navigateToNew}
      >
        <NewText>Registrar gastos</NewText>
      </NewLink>

      <Logout
        onPress={() => signOut()}
      >
        <LogoutText>Sair</LogoutText>
      </Logout>
    </Container>
  );
}