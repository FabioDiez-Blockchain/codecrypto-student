import express from "express";
import { Request, Response } from "express";
import cors from "cors";
//import { json } from "stream/consumers";
//import { RevertInstructionError, eth } from "web3";
import {ethers} from "ethers";
import fs from "fs";    

require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());
const port = 3333;

app.get("/api/balanceEthers/:address", async(req: Request, res: Response) => 
    {
    const {address} = req.params;
    const provider = new ethers.JsonRpcProvider(process.env.URL_NODO as string);
    const balance = await provider.getBalance(address);
    
    res.json(
        {address,
        balance: Number(balance)/10**18,
        fecha: new Date().toISOString()});
    })

app.get("/api/balance/:address", async(req: Request, res: Response) => 
    {
    const {address} = req.params;
    const retorno = await fetch(process.env.URL_NODO as string, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            jsonrpc: "2.0",
            method: "eth_getBalance",
            params: [
                address, "latest"],
            id: 1
        })
     })
     const data:any = await retorno.json();
     res.json(
         {address,
         balance: Number(data.result)/10**18,
         fecha: new Date().toISOString()});
 
})

//-----------------------------------
//CODIGO BUENO DEL CURSO
app.get("/api/faucet/:address/:amount", async (req:Request, res:Response) => {
    const {address, amount} = req.params;
    const provider = new ethers.JsonRpcProvider(process.env.URL_NODO as string);
    //const ruta = "../nodo/datos/keystore/UTC--2024-07-02T23-17-32.224764311Z--7a689f697b738034a7aa9a3954449cf4cd780099";
    const ruta = process.env.KESYTORE_FILE as string
    const rutaData = fs.readFileSync(ruta, "utf8");
    //const pass = "../nodo/pwd.txt";
    //const passw = fs.readFileSync(pass, "utf8").trim();
    //const wallet = await ethers.Wallet.fromEncryptedJson(rutaData, passw);
    const wallet = await ethers.Wallet.fromEncryptedJson(rutaData, process.env.KESYTORE_PWD as string);
    const walletConnected = wallet.connect(provider);
    const tx = await walletConnected.sendTransaction ({
        to: address,
        value: ethers.parseEther(amount)      
    });
    await tx.wait();
    //res.json({address, amount, fecha: new Date().toISOString()});
    const balance = await provider.getBalance(address);
    //console.log("balance: " ,balance.toString());
    res.json({address, amount, balance: Number(balance)/10**18, fecha: new Date().toISOString()});



})
    
app.get("/", (req: Request,  res: Response) => {
    
    res.send ("Hello World from back");
})


app.post("/", (req: Request, res:Response) =>  { 
    const body = req.body;
    res.send(
        `{"message": "Hello from Post", "body": ${JSON.stringify(body)}}`
    );
})

app.get("/:p1/:p2", (req: Request, res: Response) => {
    const {p1, p2} = req.params;
    res.send(
        {p1:p1, p2:p2}
    );

});


app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});