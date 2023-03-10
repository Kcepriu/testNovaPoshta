import { useEffect, useState } from 'react';
import { saveToLocalStorage, loadFromLocalStorage } from 'helpers/localStorage';

const NAME_LOCALSTORAGE = 'HISTORY_NOVAPOSHTA';

const initialHistory = [];
// const initialHistory = [
//   '20450669024794',
//   '20450669024700',
//   '20450669024702',
//   '20450669024703',
//   '20450669024704',
//   '20450669024705',
//   '20450669024706',
//   '20450669024707',
// ];

const useHistory = () => {
  console.log(loadFromLocalStorage(NAME_LOCALSTORAGE, initialHistory));

  const [historyTTN, setHistoryTTN] = useState(() =>
    loadFromLocalStorage(NAME_LOCALSTORAGE, initialHistory)
  );

  useEffect(() => {
    saveToLocalStorage(NAME_LOCALSTORAGE, historyTTN);
  }, [historyTTN]);

  return [historyTTN, setHistoryTTN];
};

export default useHistory;
