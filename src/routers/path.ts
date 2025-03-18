import { generatePath } from 'react-router-dom';

// add paths here
export const PATH = {
  home: '/',
  signin: '/signin',
  signup: '/signup',
  lp: { list: '/lps', detail: '/lps/:id' },
};

// add routes here
export const routes = {
  home: () => generatePath(PATH.home),
  signIn: () => generatePath(PATH.signin),
  signUp: () => generatePath(PATH.signup),
  lp: {
    list: () => generatePath(PATH.lp.list),
    detail: (id: string) => generatePath(PATH.lp.detail, { id }),
  },
};
