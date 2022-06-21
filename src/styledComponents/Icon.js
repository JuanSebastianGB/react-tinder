import styled from 'styled-components';

export const Icon = styled.figure`
  border: none;
  outline: none;
  background-color: transparent;
  background-image: url(${props => props.url});
  height: 50px;
  width: 50px;
  background-size: 100% 100%;
`;
