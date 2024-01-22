import { Routes , Route } from "react-router-dom";
import React, { useState } from 'react';
import CPWlogin from "./Login/CPWlogin";
import SetUser from "./Set permisstion/SetUser";
import UserCreate from "./Set permisstion/UserCreate";
import UserUpdate from "./Set permisstion/UserUpdate";
import Dashboard from "./Dashboard/Dashboard";
import Profile from "./Account/profile";
import Account from "./Account/Account";
import MenuList from "./MenuBar/Menu_list";
import FAQ from "./FAQ/Faq";
import HomeChat from "./MainChat/HomeChat";
import Header from "./Header";

import CPWlogin02 from "./Login/CPWlogin2";
import CPWregister from "./Login/CPWregister";
import Setpermission from "./Set permisstion/Setpermission";
import "./style.scss"
import FAQcrud from "./FAQ/FAQcrud";
import Addfaq from "./FAQ/Addfaq";
import Demo from "./demo";

import MainAdmin from "./Page/MainAdmin";
import MainManager from "./Page/MainManager";
import MainUser from "./Page/MainUser";

import FAQcrudA1 from "./FAQ/FAQa1";
import MainAgency1 from "./Page/MainAgency1";
import MainAgency3 from "./Page/MainAgency3";
import MainAgency2 from "./Page/MainAgency2";
import MainAgency4 from "./Page/MainAgency4";
import MainAgency5 from "./Page/MainAgency5";
import CPWlogin03 from "./Login/CPWlogin3";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div>
      <Header/>
      {/* <MainAdmin /> */}
      <span>
      <Routes>
          <Route path="saclogin" element = {<CPWregister/>} />
          <Route path="CPWlogin" element = {<CPWlogin/>} />
          <Route path="setuser" element = {<SetUser/>} />
          <Route path='/create' element={<UserCreate />} />
          <Route path='/update/:id' element={<UserUpdate />} />
          <Route path="dashboard" element={<Dashboard/>} />
          <Route path="profile" element={<Profile/>} />
          <Route path="account" element={<Account/>} />
          <Route path="HomeChat" element = {<HomeChat/>} />


          <Route path="MenuList" element={<MenuList/>} />
          <Route path="FAQ" element = {<FAQ/>} />
          <Route path="Login2" element = {<CPWlogin02/>} />
          <Route path="Login3" element = {<CPWlogin03/>} />
          <Route path="setpermisstion" element = {<Setpermission/>} />
          <Route path="FAQcrud" element = {<FAQcrud/>} />
          <Route path="Addfaq" element = {<Addfaq />} />
          <Route path="Demo" element = {<Demo />} />

          <Route path="MainAdmin" element = {<MainAdmin />} />
          <Route path="MainManager" element = {<MainManager />} />
          <Route path="MainUser" element = {<MainUser />} />

          <Route path="MainAgency1" element = {<MainAgency1 />} />
          <Route path="MainAgency2" element = {<MainAgency2 />} />
          <Route path="MainAgency3" element = {<MainAgency3 />} />
          <Route path="MainAgency4" element = {<MainAgency4 />} />
          <Route path="MainAgency5" element = {<MainAgency5 />} />

          <Route path="FAQcrudA1" element = {<FAQcrudA1 />} />

      </Routes>
      </span>

    </div>
  );
}

export default App;
