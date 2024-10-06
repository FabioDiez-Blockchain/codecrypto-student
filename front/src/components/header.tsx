import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useContext, useEffect } from "react";
import { UserContext } from "../App";


export function Header(){
    const {state, setState} = useContext(UserContext);

    useEffect(() => {
        const ethereum = (window as any).ethereum;
        if (ethereum == null) {
            alert("Instalar Metamask");
            return;
        }
        ethereum.request ({ method: "eth_requestAccounts"}).then((acc: string[]) => {
            setState({acc: acc[0]});
        });
        ethereum.on("accountsChanged", function (acc: string[]) {
            setState({acc: acc[0]});
        })



    }, [setState]);

    return <div className="flex gap-5 justify-center pt-4">
      <Link to="Home"><Button>Home</Button></Link>
      <Link to="Transfer"><Button>Transfer</Button></Link>
      <Link to="Balance"><Button>Balance</Button></Link>
      <Link to="Faucet"><Button>Faucet</Button></Link>   
      <div className="flex gap-1 justify-center pt-50"></div>
        {state.acc ? <p className="text-lg font-bold text-center border-2 pt-1">{state.acc}</p> : <div className="flex pt-2">Cuenta no seleccionada</div>}

      </div>



 
}