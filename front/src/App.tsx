import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Dashboard } from "./components/dashboard";
import { Home } from "./components/home";
import { Balance } from "./components/balance";
import { Faucet } from "./components/faucet";
import { Transfer } from "./components/transfer";
import { createContext, useState } from "react";



const router = createBrowserRouter([
  {path: "/", 
    element: <Dashboard />,
    children:[
      {path: "home", element: <Home />},
      {path: "balance", element: <Balance />},  
      {path: "faucet", element: <Faucet />},
      {path: "transfer", element: <Transfer />}
    ]  
  }
]);

export const  UserContext = createContext({});

  
export default function App(){
  const [state, setState] = useState({
    acc: "",
  });
  return <UserContext.Provider value={{state, setState}}>
      <RouterProvider router={router} />
   </UserContext.Provider> 


}