import React from "react";
import { Route, Routes } from "react-router-dom";
import Users from "./user/Users.jsx";

import Home from "./core/Home";
import Signup from "./user/Signup";
import Signin from "./lib/Signin.jsx";
import Profile from "./user/Profile.jsx";
import EditProfile from "./user/EditProfile.jsx";
import Shops from "./shop/Shops";

import PrivateRoute from "./lib/PrivateRoute.jsx";
import MyShops from './shop/MyShops'
import NewShop from './shop/NewShop'
import EditShop from './shop/EditShop'

import Menu from "./core/Menu";

function MainRouter() {
  return (
    <div>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} /> 
                <Route path="/shops/all" element={<Shops />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route
          path="/user/edit/:userId"
          element={
            <PrivateRoute>
              <EditProfile />
            </PrivateRoute>
          }
        />
        <Route path="/user/:userId" element={<Profile />} />
        <Route path="/seller/shops" element={ <PrivateRoute><MyShops /></PrivateRoute>}/>
        
        <Route path="/seller/shop/new" element={<PrivateRoute><NewShop /></PrivateRoute>}/>
        <Route path="/seller/shop/edit/:shopId" element={<PrivateRoute><EditShop /></PrivateRoute>}/>

      </Routes>
    </div>
  );
}

export default MainRouter;
