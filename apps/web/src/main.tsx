import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { store } from "@/store";
import { Provider } from "react-redux";
import App from "@/app";
import "@/index.css";

const el = document.getElementById("root");
if (el) {
  const root = createRoot(el);
  root.render(
    <StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </StrictMode>
  );
} else {
  throw new Error("Could not find root element");
}
