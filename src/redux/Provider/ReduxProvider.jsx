
import React from "react";

import { store } from "../store";
/* Core */
import { Provider } from "react-redux";

/* Instruments */

export const ReduxProvider = ({children}) => {
  return <Provider store={store}>{children}</Provider>;
};
