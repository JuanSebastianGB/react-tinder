import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ProfileImage } from '../../styledComponents/ProfileImage';

const Title = styled.h2`
  font-family: 'Caveat', cursive;
`;

export const User = () => {
  const state = useSelector(state => state);
  const {
    user: { user },
  } = state;
  if (!user) return <Fragment></Fragment>;
  const {
    name: { title, first, last },
    picture: { large: image },
  } = user;
  return (
    <Fragment>
      <ProfileImage url={image} />
      <Title>
        {title} {first} {last}
      </Title>
    </Fragment>
  );
};
