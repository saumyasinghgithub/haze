import "./App.css";
import CustomRoutes from "./CustomRoutes";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = (props) => {
  const RoutedLayout = () => {
    return (
      <>
        <Router>
          <Routes>
            {CustomRoutes.map((route, index) => {
              if (route.secure) {
                return (
                  <Route
                    key={index}
                    path={`${process.env.PUBLIC_URL}/login`}
                    component={() => (
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    )}
                  />
                );
              } else {
                return (
                  <Route
                    key={index}
                    path={process.env.PUBLIC_URL + route.path}
                    exact={route.exact || false}
                    element={
                      <route.layout {...props}>
                        <route.component {...props} />
                      </route.layout>
                    }
                  />
                );
              }
            })}
          </Routes>
        </Router>
      </>
    );
  };

  const Provider = () => {
    return <RoutedLayout />;
  };

  return <Provider />;
};

export default App;
