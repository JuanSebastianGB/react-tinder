import styled from 'styled-components';

export const ProfileImage = styled.figure`
  display: block;
  width: 80vmin;
  height: 80vmin;
  background-image: url(${props => props.url});
  background-size: 100% 100%;
`;
