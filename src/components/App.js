import React, { Fragment,useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "../components/ui/Header";
import Home from "./home/Home";
import PropertyDetail from "./property/PropertyDetail";
import PropertyPage from "./property/PropertyPage";
import Footer from "./ui/Footer";
import VehicleDetail from "./vehicle/VehicleDetail";
import VehiclePage from "./vehicle/VehiclePage";
import VehicleAddForm from "./vehicle/form/VehicleAddForm";
import ElectronicDetail from "./electronic/ElectronicDetail";
// import ElectronicPage from "./electronic/ElectronicPage";
import ElectronicAddForm from "./electronic/form/ElectronicAddForm";
import PropertyAddForm from "./property/form/PropertyAddForm";
import Login from './Login/Login'
import BusinessPage from './business&services/BusinessPage'
import ElectronicPage from '../components/electronic/ElectronicPage'
import Register from "./Register/Register";
import ErrorModel from "./reusable/NotificationModal";
import SuccessfulModel from "./reusable/SuccessfulModel";
import Profile from '../components/profile/Profile'
import AdminHome from '../admin/AdminHome'
import {useSelector,useDispatch} from 'react-redux'

import {useLocation} from 'react-router-dom'
import {refresh} from '../store/loginSlice'

function App() {
  const [loginData,setLoginData] = useState(null)
  const logOut = () =>{
    setLoginData(null)
  }
 const isLogged = useSelector(state => state.login.loginState)
 const userId = useSelector(state => state.login.userId)

 const dispatch = useDispatch(refresh())


  return (
    <Router>
    <Header loginData={loginData} logOut={logOut} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/property/add-form">
          <PropertyAddForm />
        </Route>
        <Route exact path="/property/:id">
          <PropertyDetail />
        </Route>
        <Route exact path="/property">
          <PropertyPage />
        </Route>
        <Route path="/vehicle/add-form">
          <VehicleAddForm />
        </Route>
        <Route exact path="/vehicle/:id">
          <VehicleDetail />
        </Route>

        <Route exact path="/service">
          <BusinessPage />
        </Route>
        <Route path="/business/add-form">
          {/* <BusinessAddForm /> */}
        </Route>
        <Route exact path="/service/:id">
          {/* <ServiceDetail /> */}
        </Route>
        <Route path="/vehicle">
          <VehiclePage />
        </Route>
        <Route path="/services">
          <BusinessPage />
        </Route>
        <Route path="/electronic/add-form">
          <ElectronicAddForm />
        </Route>

        <Route exact path="/electronic/:id">
          <ElectronicDetail />
        </Route>

        <Route path="/electronic">
          <ElectronicPage />
        </Route>
      
       
        <Route path="/login">
         {!isLogged ? <Login setLoginData={setLoginData}/> : <Home/>}
        </Route>
        <Route path="/register">
          <Register/>
        </Route>
        <Route path="/successful">
          <SuccessfulModel/>
        </Route>
        <Route path="/user-profile">
          <Profile />
        </Route>
    
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
