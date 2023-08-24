import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import UIProvider from "./providers/ui";
import { BrowserRouter as Router } from "react-router-dom";
import AccountProvider from "./providers/account";
import L10nProvider from "./providers/l10n";
import DimensionProvider from "./providers/dimen";
import DocumentClickEventListenerProvider from "./providers/documentClickEventListener";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DocumentClickEventListenerProvider>
	  <DimensionProvider>
		<UIProvider>
		  <AccountProvider>
			<Router>
				<L10nProvider>
				  <App />
				</L10nProvider>
			</Router>
		  </AccountProvider>
		</UIProvider>
	  </DimensionProvider>
    </DocumentClickEventListenerProvider>
  </React.StrictMode>
);
