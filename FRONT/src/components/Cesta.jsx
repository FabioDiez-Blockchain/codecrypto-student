import { useContext, useState, useEffect } from "react";
import { Context } from "../main";
import { ethers } from "ethers";
import { Link } from "react-router-dom";


export function Cesta() {
    const[estado, setEstado] = useContext(Context);
    const [cuenta, setCuenta] = useState(null);
    const [txOk, setTxOk] = useState(null);
    const [txKo, setTxKo] = useState(null);
    const total = estado.cesta.reduce((acc, item)=> acc + item.total, 0)
    useEffect(()=>{
        window.ethereum && window.ethereum.request({
            method: "eth_requestAccounts"
        }).then (cuentas =>{
            setCuenta(cuentas[0]);
            ethereum.on("accountsChanged", (cuentas)=>{
                setCuenta(cuentas[0])
            })

        })
    },[])


    async function pagar() {
        const txParams = {
            to: "0x775985052Fd7066942E7ff170425BE31B0c0cbF5",
            //to: "0xad65D72142570D768Bb3e3dAA5d49fc73FEf7226",
            from: cuenta,
            value: ethers.toBeHex(ethers.parseEther(total.toString()))

        };
        console.log("antes ",txParams);

        try {
            const tx = await ethereum.request({
                method: "eth_sendTransaction",
                params: [txParams]
            });
            setTxOk(tx);
        }catch (error){
            setTxKo(error);
        }
        console.log(txParams);
    }

    return <div>
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                    <th>TOTAL</th>
                </tr>
            </thead>
            <tbody>
                {estado.cesta.map(i => (
                    <tr key={i.producto.ProductID}>
                        <td>
                            <Link to= {`/productos/${i.producto.ProductID}`}>
                            {i.producto.ProductID}</Link>
                        </td>
                        <td>{i.producto.ProductName}</td>
                        <td>{i.cantidad}</td>
                        <td>{i.producto.UnitPrice}</td>
                        <td>{i.total}</td>

                    </tr>


                ))}
            </tbody>
        </table>
        <h3 style = {{textAlign:"right"}} >TOTAL {total}
        <div><h4>{cuenta}</h4></div>    
        <div><button onClick={()=> pagar()} className="btn btn-primary">Pagar</button></div>
        {txOk && <p className="alert alert-success">{txOk}</p>}
        {txKo && <p className="alert alert-danger">{txKo}</p>}
        </h3>






    </div>
}