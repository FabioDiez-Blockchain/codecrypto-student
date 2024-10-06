import { UserContext } from "../App";
import { useContext, useEffect, useState } from "react";



export function Balance() {
    const {state, setState}  = useContext(UserContext);
    const [balance, setBalance] = useState<number>(0);
    
    useEffect(() => {
        const ethereum = (window as any).ethereum;
        if (ethereum == null) {
            alert("Instalar Metamask");
            return;
        }
        //console.log("HOLAAAAAAA1");
        //console.log(state.acc);
        ethereum.request({ method:"eth_getBalance", params:[state.acc] }).then((data: string) => {
            //console.log(Number(data));
            //console.log(state.acc);
            setBalance(Number(data)/10**18);
        })   
    }
    , [state.acc]);

    return <div>
        <h1>Balance</h1>
        <p>cuenta: {state.acc} saldo:{balance}</p>
        </div>;
       
}