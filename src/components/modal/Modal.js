import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { ProfileImage } from '../../styledComponents/ProfileImage';
import { Icon } from '../../styledComponents/Icon';
import { hideModal } from '../../actions/modalActions';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2em;
  background-color: #e55056;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h2`
  font-family: 'Caveat', cursive;
  margin: 0px;
  text-align: center;
`;
const Description = styled.section`
  font-family: sans-serif;
  color: white;
  font-weight: bold;
`;

export const Modal = () => {
  const dispatch = useDispatch();
  const state = useSelector(state => state);
  const {
    user: { user },
  } = state;
  if (!user) return <Fragment></Fragment>;
  const {
    name: { title, first, last },
    email,
    picture: { large: image },
  } = user;
  console.log('im here');
  const closeModal = () => {
    dispatch(hideModal());
  };
  return createPortal(
    <Container>
      <ProfileImage url={image} />
      <Title>
        {title} {first} {last}
      </Title>
      <Description>{email}</Description>
      <Icon
        type='button'
        onClick={closeModal}
        url='https://findicons.com/files/icons/987/niome/256/error.png'
      />
    </Container>,
    document.getElementById('modal')
  );
};
