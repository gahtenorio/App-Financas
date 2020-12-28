import React, { useContext } from 'react';
import { Text, View, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';

import { AuthContext } from '../../Contexts/auth';

import logo from '../../assets/Logo.png';

export default function CustomDrawer(props) {

  const { user, signOut } = useContext(AuthContext);

  return (
    <DrawerContentScrollView {...props}>
      <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 25 }}>
        <Image
          source={logo}
          style={{ width: 85, height: 85 }}
          resizeMode='contain'
        />
        <Text style={{ color: '#FFF', fontSize: 18, marginTop: 5 }}>Bem-vindo</Text>
        <Text style={{ color: '#FFF', fontSize: 17, fontWeight: 'bold', paddingBottom: 25 }}>{user && user.nome}</Text>
      </View>

      <DrawerItemList {...props} />

      <DrawerItem
        {...props}
        label='Sair do app'
        inactiveBackgroundColor='#C62C36'
        onPress={() => signOut()}
      />
    </DrawerContentScrollView>
  );
}