import axios from 'axios';
import * as faker from 'faker';

const BASE_URL = `http://localhost:3000/`; // Make this config driven

const http = axios.create();
http.interceptors.request.use(request => {
  console.log('Starting Request', request);
  request.headers.Authorization = `Bearer you_are_golden`;

  return request;
});

http.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.log('Error', error);
    return Promise.reject(error.response.data.errors);
  }
);

export let mockClient = null;
export let mockProject = null;

export const setUp = () => {
  return buildMockData()
    .then(res => createMockClient(mockClient))
    .then(res => {
      mockClient.id = res.data.id;
      mockProject.customerId = res.data.id;
      return mockClient;
    })
    .then(res => createMockProject(mockProject))
    .then(res => {
      mockProject.id = res.data.id;
      return mockProject;
    });
};

export const cleanUp = () => {
  return deleteMockProject(mockProject)
    .then(res => deleteMockClient(mockClient));
}

// -------------------------------------------------------------------
// MOCK DATA
// -------------------------------------------------------------------
export const buildMockData = () => {
  mockClient = buildMockClient();
  mockProject = buildMockProject();
  return Promise.resolve({mockClient, mockProject});
}

export const buildMockClient = () => ({
  id: null,
  firstName: `E2E_AUTO_${faker.name.firstName()}`,
  lastName: `E2E_AUTO_${faker.name.lastName()}`,
  email: `E2E_AUTO_${faker.random.alphaNumeric(10)}@email.com`,
});

export const buildMockProject = () => ({
  id: null,
  title: `E2E_AUTO_${faker.random.alphaNumeric(5)}`,
  notes: `E2E_AUTO_${faker.random.alphaNumeric(10)}`,
  percentComplete: 20,
  approved: false,
  customerId: null,
});

// -------------------------------------------------------------------
// SETUP
// -------------------------------------------------------------------
export const createMockClient = async (client) => {
  const model = 'customers/';
  return await http.post(`${BASE_URL}${model}`, client);
}

export const createMockProject = async (project) => {
  const model = 'projects/';
  return await http.post(`${BASE_URL}${model}`, project);
}

// -------------------------------------------------------------------
// CLEANUP
// -------------------------------------------------------------------
export const deleteMockProject = async (project) => {
  const model = 'projects/';
  return await http.delete(`${BASE_URL}${model}${project.id}`);
}

export const deleteMockClient = async (client) => {
  const model = 'customers/';
  return await http.delete(`${BASE_URL}${model}${client.id}`);
}


