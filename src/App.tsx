import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";

import Product from "./pages/Product";
import Pricing from "./pages/Pricing";
import Home from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import AppLayout from "./pages/AppLayout";
import Login from "./pages/Login";
import CityList from "./Components/CityList";
import CountriesList from "./Components/CountriesList";
import CityComp from "./Components/City";
import Form from "./Components/Form";
import { CitiesProvider } from "./Contexts/CitiesContext";
import { AuthProvider } from "./Contexts/AuthContext";

function App() {
  return (
    <CitiesProvider>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <AuthProvider>
            <Route path="login" element={<Login />} />
          </AuthProvider>
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities" />} />
            <Route path="cities" element={<CityList />} />
            <Route path="cities/:id" element={<CityComp />} />
            <Route path="countries" element={<CountriesList />} />
            <Route path="form" element={<Form />} />
          </Route>
          <Route path="product" element={<Product />} />
          <Route path="pricing" element={<Pricing />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </CitiesProvider>
  );
}

export default App;
