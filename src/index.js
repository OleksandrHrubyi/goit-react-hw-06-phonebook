import ReactDOM from "react-dom";
import App from "./components/App/App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/Contacts/store";
import { PersistGate } from "redux-persist/integration/react";
import "index.css";

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.querySelector("#root")
);
