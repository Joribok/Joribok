import { ChangeEventHandler, useState } from 'react';

type useInputProps = string | number;

const useInput = <T extends useInputProps>(initialValue: T) => {
  const [value, setValue] = useState(initialValue);

  const changeValue: ChangeEventHandler<HTMLInputElement> = e => {
    setValue(e.currentTarget.value as T);
  };

  return [value, changeValue] as const;
};

export default useInput;
