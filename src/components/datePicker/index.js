import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform, TouchableOpacity, Text } from 'react-native';

import {
  Container,
  Header
} from './styles';

export default function datePicker(date, onClose, onChange) {

  const [dateNow, setDateNow] = useState(new Date());

  return (
    <Container>
      {Platform.OS === 'ios' && (
        <Header>
          <TouchableOpacity onPress={onClose}>
            <Text>Fechar</Text>
          </TouchableOpacity>
        </Header>
      )}
      <DateTimePicker
        value={dateNow}
        mode="date"
        display="default"
        onChange={(e, d) => {
          const currentDate = d || dateNow;
          setDateNow(currentDate);
          onChange(currentDate);
        }}
        style={{ backgroundColor: 'white' }}
      />
    </Container>

  );
}