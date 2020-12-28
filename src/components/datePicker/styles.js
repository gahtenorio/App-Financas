import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${Platform.OS === 'ios' ? '#00000066' : 'transparent'};
  position: absolute;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  width: 100%;
  padding: 16%;
  justify-content: flex-end;
  align-items: center;
  background-color: white;
  border-bottom: 1px;
  border-color: grey;
`;