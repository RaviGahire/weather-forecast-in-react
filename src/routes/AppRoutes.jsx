import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { WeatherDashboard } from "../components/Dashboard";
import {UserLocationFinder} from "../context/UserLocationFinder"


export const AppRoutes = () => {

  const allRoute = [
    { path: '/', element: <Home/> },
    { path: '/weather-dashboard', element: <UserLocationFinder><WeatherDashboard/></UserLocationFinder>  },
    { path: '/news', element: <h1>News</h1> },
    { path: '/about', element: <h1>About</h1> },
    { path: '/contact', element: <h1>Contact</h1> },
  ];

  return (
    <Router>
      <MainLayout>
        <Routes>
          {allRoute.map((val, indx) => (
            <Route 
              key={indx}
              path={val.path}
              element={val.element}
            />
          ))}
        </Routes>
      </MainLayout>
    </Router>
  );
};