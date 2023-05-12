import B from './B';
import C from './C';
import store from './store';
import { Provider } from 'react-redux';

function A() {
  return (
    <Provider store={store}>
      <div style={{ margin: "30px" }} >
        <B />
        <C />
      </div>
    </Provider>
  );
}

export default A;
