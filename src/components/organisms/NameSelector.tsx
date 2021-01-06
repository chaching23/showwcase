import React, { FC, useState } from 'react';
import Button from '../atoms/Button';
import Title from '../atoms/Title';
import LabeledInput from '../molecules/LabeledInput';

interface Props {
  action: (value: string) => void;
}

const NameSelector: FC<Props> = ({ action }) => {
  const [name, setName] = useState('');

  const handleAction = () => {
    action(name);
  };
  return (
    <div
      style={{
        alignSelf: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
      <Title>Hi there! Welcome to your education showcase</Title>

      <LabeledInput
        label='Submit your name to begin!'
        placeholder='your name ....'
        onChange={setName}
        value={name}
      />
      <Button onClick={handleAction} variant='mid'>
        Enter
      </Button>
    </div>
  );
};

export default NameSelector;
