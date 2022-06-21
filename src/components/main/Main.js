/* eslint-disable no-unused-vars */
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { showModal } from '../../actions/modalActions';
import { useGetUserProfile } from '../../customHooks/useGetUserProfile';
import { Icon } from '../../styledComponents/Icon';
import { User } from '../user/User';

const Container = styled.main`
  display: grid;
  grid-template-rows: 1fr 6em;
  gap: 1em;
  height: calc(100vh - 80px);
`;

const Section = styled.section`
  display: block;
  height: 100%;
`;

const ActionButton = styled.section`
  display: flex;
  justify-content: space-around;
  height: 100%;
`;

export const Main = () => {
  const dispatch = useDispatch();
  const apiUserUrl = 'https://randomuser.me/api/';
  const apiTextUrl = 'http://asdfast.beobit.net/api/?length=1';

  const loadUser = useGetUserProfile(apiUserUrl, apiTextUrl, dispatch);

  return (
    <Container>
      <Section>{<User />}</Section>
      <ActionButton>
        <Icon
          type='button'
          onClick={loadUser}
          url='https://www.emojiall.com/images/animations/joypixels/128px/broken_heart.gif'
        />
        <Icon
          type='button'
          onClick={() => dispatch(showModal())}
          url='https://i.pinimg.com/originals/58/4b/60/584b607f5c2ff075429dc0e7b8d142ef.gif'
        />
        <Icon
          type='button'
          onClick={loadUser}
          url='https://i.pinimg.com/originals/2b/37/1a/2b371af9251ab2ff1ab2ba415d5bcb09.gif'
        />
      </ActionButton>
    </Container>
  );
};
