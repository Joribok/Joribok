import { PropsWithChildren, useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

interface CreatePortalProps {
  modalId: 'snack-bar';
}

const CreatePortal = ({ modalId, children }: PropsWithChildren<CreatePortalProps>) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const target = document.querySelector<HTMLDivElement>(`${modalId}`);
  return mounted && target ? ReactDOM.createPortal(children, target) : <></>;
};

export default CreatePortal;
