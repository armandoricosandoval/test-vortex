import { Provider } from "react-redux";
import store from "./redux/store";
import AppRouters from "./routers/AppRouters";

function App() {
  return (
    <Provider store={store}>
      <AppRouters />
    </Provider>
  );
}

export default App;
