import { useEffect, useState } from 'react';

import useInput from './useInput';

interface ValidateInputProps {
  validator: Function;
  initState?: string;
}

const useValidateInput = ({ validator, initState = '' }: ValidateInputProps) => {
  const [data, changeData] = useInput(initState);
  const [isValidateData, setIsValidateData] = useState(false);

  useEffect(() => {
    if (data) {
      setIsValidateData(validator(data));
    }
  }, [data, validator]);

  return [data, changeData, isValidateData, setIsValidateData] as const;
};

export default useValidateInput;
