import { useEffect, useState } from 'react';
const useCloseHistory = () => {
  const [isCloseHistory, setIsCloseHistory] = useState(false);

  useEffect(() => {
    //For close this element
    const handlerKeyDownESC = event => {
      console.log('ESC');

      // key press esc Close modal
      if (event.key === 'Escape') setIsCloseHistory(true);
    };

    const handlerClickBody = event => {
      if (event.target.closest('#historyDocuments')) return;
      if (event.target.closest('#buttonHistoryDocuments')) return;

      setIsCloseHistory(true);
    };

    window.addEventListener('keydown', handlerKeyDownESC);
    document.body.addEventListener('click', handlerClickBody);

    return () => {
      window.removeEventListener('keydown', handlerKeyDownESC);
      document.body.removeEventListener('click', handlerClickBody);
    };
  }, []);
  return [isCloseHistory];
};

export default useCloseHistory;
