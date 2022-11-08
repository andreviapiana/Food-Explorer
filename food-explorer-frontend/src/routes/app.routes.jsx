import { Routes, Route } from "react-router-dom";

import { Cart } from "../pages/Cart";
import { CreateDish } from "../pages/CreateDish";
import { EditDish } from "../pages/EditDish";
import { EditDish2 } from "../pages/EditDish2";

import { Details } from "../pages/Details";
import { Home } from "../pages/Home";

import { MyOrders } from "../pages/MyOrders";
import { Orders } from "../pages/Orders";

import { Profile } from "../pages/Profile";

export function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createdish" element={<CreateDish />} />
            <Route path="/editdish/:id" element={<EditDish />} />
            <Route path="/editdish2/:id" element={<EditDish2 />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/myorders" element={<MyOrders />} />
        </Routes>
    )
}
