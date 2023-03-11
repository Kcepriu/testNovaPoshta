import { useEffect, useState } from 'react';
const useCloseSearchCityElement = () => {
  const [isCloseSearch, setIsCloseSearch] = useState(false);

  useEffect(() => {
    //For close this element
    const handlerKeyDownESC = event => {
      // key press esc Close modal
      if (event.key === 'Escape') setIsCloseSearch(true);
    };

    const handlerClickBody = event => {
      if (event.target.closest('#descriptionCity')) return;
      if (event.target.closest('#searchCity')) return;
      setIsCloseSearch(true);
    };

    window.addEventListener('keydown', handlerKeyDownESC);
    document.body.addEventListener('click', handlerClickBody);

    return () => {
      window.removeEventListener('keydown', handlerKeyDownESC);
      document.body.removeEventListener('click', handlerClickBody);
    };
  }, []);
  return [isCloseSearch];
};

export default useCloseSearchCityElement;
