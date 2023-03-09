import axios from 'axios';

const KEY = 'BrDUQy9MltpcAPOJSqyDfcAbzRMuuG41';
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
