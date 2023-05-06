import { Router } from './routes';
import { Theme } from './themes';

export const App = () => {
  return (
    <Theme>
      <Router />
    </Theme>
  );
};

export default App;
