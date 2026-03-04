import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { WeatherDashboard } from "../components/Dashboard";
import {UserLocationFinder} from "../context/UserLocationFinder"
import { WeatherNews } from "../pages/News";
import { About } from "../pages/About";
import { Contact } from "../pages/Contact";



export const AppRoutes = () => {

  const allRoute = [
    { path: '/', element: <Home/> },
    { path: '/weather-dashboard', element: <UserLocationFinder><WeatherDashboard/></UserLocationFinder>  },
    { path: '/news', element: <WeatherNews/> },
    { path: '/about', element: <About/> },
    { path: '/contact', element: <Contact/> },
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