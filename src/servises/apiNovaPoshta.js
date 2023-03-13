import axios from 'axios';
import { PAGE_FROM_REQUEST } from 'helpers/constants';

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

const getRequestSearchWarehouse = (
  cityRef,
  typeOfWarehouseRef,
  page,
  searchText
) => {
  return {
    apiKey: KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityRef: cityRef,

      Page: page,
      Limit: PAGE_FROM_REQUEST,
      // Limit: 5000,
      Language: 'UA',
      TypeOfWarehouseRef: typeOfWarehouseRef,
      FindByString: searchText,
      // WarehouseId: '',
    },
  };
};

const getRequestWarehouseTypes = () => {
  return {
    apiKey: KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouseTypes',
    methodProperties: {},
  };
};

const getRequestCity = cityRef => {
  return {
    apiKey: KEY,
    modelName: 'Address',
    calledMethod: 'getCities',
    methodProperties: {
      Ref: cityRef,
      Page: '1',
      Limit: '20',
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

export async function fetchWarehouses({
  controller,
  cityRef,
  typeOfWarehouseRef = '',
  page = 1,
  searchText = '',
}) {
  const result = await axios.post(
    URL,
    getRequestSearchWarehouse(cityRef, typeOfWarehouseRef, page, searchText),
    {
      signal: controller.signal,
    }
  );

  return result;
}

export async function getWarehouseTypes(controller) {
  const result = await axios.post(URL, getRequestWarehouseTypes(), {
    signal: controller.signal,
  });

  return result;
}

export async function fetchNameCity(controller, cityRef) {
  const result = await axios.post(URL, getRequestCity(cityRef), {
    signal: controller.signal,
  });

  return result;
}
