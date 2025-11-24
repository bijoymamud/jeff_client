import { StrictMode, Suspense, useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { router } from "./routes/routes.jsx";
import { RouterProvider } from "react-router";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { WebLoading } from "./LoadingPages/WebLoading";
import { ThemeProvider } from "./Themes/Themes";

function DelayedFallback({ children }) {
  const [showApp, setShowApp] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowApp(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return showApp ? children : <WebLoading />;
}

createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <Provider store={store}>
      <div>
        <StrictMode>
          {/* <Suspense fallback={<LoadingScreen />}> */}
          <Suspense fallback={<WebLoading />}>
            <DelayedFallback>
              <RouterProvider router={router} />
            </DelayedFallback>
          </Suspense>
        </StrictMode>
      </div>
    </Provider>
  </ThemeProvider>
);
