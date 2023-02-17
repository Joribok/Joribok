import { ChangeEventHandler, useState } from 'react';

type useInputProps = string | number;

const useInput = <T extends useInputProps>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const changeValue: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = e => {
    setValue(e.currentTarget.value as T);
  };

  const resetValue = () => {
    setValue(initialValue);
  };

  return [value, changeValue, resetValue] as const;
};

export default useInput;
