import Button from '@components/Button/Button';

import useHello from '@hooks/useHello';

const App = () => {
  useHello();
  console.log(process.env.SENTRY_AUTH_TOKEN);
  return (
    <div>
      <h1>Hello, React with Webpack!</h1>
      <Button name="Hello" />
    </div>
  );
};

export default App;
