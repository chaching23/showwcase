import React, { FC } from 'react';
import Input from '../atoms/Input';
import Label from '../atoms/Label';

interface Props {
  label: string;
  placeholder?: string;
  onChange: (text: string) => void;
  value: string;
}

const LabeledInput: FC<Props> = ({ label, placeholder, onChange, value }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        width={2 / 3}
      />
    </>
  );
};

export default LabeledInput;
