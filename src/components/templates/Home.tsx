import React, { FC } from 'react';
import { useDispatch } from 'react-redux';
import { RouteProps, RouterProps, RouteComponentProps } from 'react-router-dom';
import { setUserName } from '../../store/slices/userSlice';
import Container from '../atoms/Container';
import NameSelector from '../organisms/NameSelector';

const Home: FC<RouteComponentProps> = ({ history }) => {
  const dispatch = useDispatch();
  const setUserNameAction = (name: string) => {
    dispatch(setUserName(name));
    history.push('/dashboard');
  };

  return (
    <div>
      <Container variant='center'>
        <NameSelector action={setUserNameAction} />
      </Container>
    </div>
  );
};

export default Home;
