import { render } from '@testing-library/react';

import App from './App';

describe('App Component', () => {
  it('should render the heading', () => {
    const { getByText } = render(<App />);
    const heading = getByText('Hello, React with Webpack!');
    // expect(heading).toBeInTheDocument();
  });
});
