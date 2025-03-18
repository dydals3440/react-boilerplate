export const SERVER_URL = 'http://localhost:8000';

export const NAVIGATION_PATH = {
  home: '/',
  signin: '/signin',
  signup: '/signup',
  lp: { list: '/lps', detail: '/lps/:id' },
};

export const API_PATH = {
  lp: {
    list: `${SERVER_URL}/lps`,
    detail: `${SERVER_URL}/lps/:id`,
  },
};
