import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import store from "./redux/store";
import AppRouters from "./routers/AppRouters";

function App() {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppRouters />
      </Provider>
    </HashRouter>
  );
}

export default App;
