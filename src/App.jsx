import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { publicRoutes } from "./routes";
import AdminPanel from "./pages/AdminPanel";
import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  const isLogged = localStorage.getItem("token");
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <div className="App scrollbar bg-[#fafafa] font-custom  ">
          <Routes>
            {publicRoutes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              );
            })}
            <Route
              path="/admin"
              element={
                <ProtectedRoute isLogged={isLogged}>
                  <AdminPanel />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
