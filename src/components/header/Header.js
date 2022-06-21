import styled from 'styled-components';
const Container = styled.header`
  display: flex;
  height: 50px;
  background-color: #fbf0f3;
  justify-content: flex-start;
  align-items: center;
  gap: 1em;
`;
const Icon = styled.figure`
  background-image: url(https://cdn.iconscout.com/icon/free/png-256/tinder-4054273-3352955.png);
  height: 50px;
  width: 50px;
  background-size: 100% 100%;
`;
const Title = styled.h1`
  font-family: 'Caveat', cursive;
  margin: 0px;
`;
export const Header = () => {
  return (
    <Container>
      <Icon />
      <Title>Home</Title>
    </Container>
  );
};
