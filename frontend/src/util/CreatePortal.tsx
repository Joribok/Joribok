import { PropsWithChildren, useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

interface CreatePortalProps {
  modalId: 'snack-bar';
}

const CreatePortal = ({ modalId, children }: PropsWithChildren<CreatePortalProps>) => {
  const portalRef = useRef<Element | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    portalRef.current = document.querySelector<HTMLElement>(`#${modalId}`);
    setMounted(true);
  }, []);

  if (mounted && portalRef.current) {
    return ReactDOM.createPortal(children, portalRef.current);
  }
  return <></>;
};

export default CreatePortal;
