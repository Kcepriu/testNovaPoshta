import axios from 'axios';

const KEY = '3b13b4f3bbf7d62fa77c4bcdea3099c7';
const URL = 'https://api.novaposhta.ua/v2.0/json/';

const gerRuquestStatusDocument = (documentNumber, phone = '') => {
  return {
    apiKey: KEY,
    modelName: 'TrackingDocument',
    calledMethod: 'getStatusDocuments',
    methodProperties: {
      Documents: [
        {
          DocumentNumber: documentNumber,
          Phone: phone,
        },
      ],
    },
  };
};

const getRequestSearchCity = nameCity => {
  return {
    apiKey: KEY,
    modelName: 'Address',
    calledMethod: 'searchSettlements',
    methodProperties: {
      CityName: nameCity,
      Limit: '10',
      Page: '1',
    },
  };
};

export async function fetchInformationDocument(controller, numberDocument) {
  const result = await axios.post(
    URL,
    gerRuquestStatusDocument(numberDocument),
    {
      signal: controller.signal,
    }
  );

  return result;
}

export async function searchCity(controller, nameCity) {
  const result = await axios.post(URL, getRequestSearchCity(nameCity), {
    signal: controller.signal,
  });

  return result;
}
