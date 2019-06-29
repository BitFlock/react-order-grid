import React from "react";
import OfferGrid from "./components/OfferGrid";

import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <ReduxProvider store={reduxStore}>
        <OfferGrid />
    </ReduxProvider>
  );
}

export default App;
