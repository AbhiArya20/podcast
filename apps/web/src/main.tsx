import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "@/store";
import { BrowserRouter } from "react-router-dom";
import App from "@/app";

const el = document.getElementById("root");
if (el) {
  const root = createRoot(el);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </StrictMode>
  );
} else {
  throw new Error("Could not find root element");
}
