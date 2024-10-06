--------------------------------------------
CREAR CUENTA

docker run -v C:\Users\vario\Desktop\CURSO\PROYECTOS\FAUCET\nodo\pwd.txt:/p.txt -v C:\Users\vario\Desktop\CURSO\PROYECTOS\FAUCET\nodo\datos:/data ethereum/client-go:v1.13.15 account new --datadir /data --password /p.txt

docker run -v C:/Users/vario/Desktop/CURSO/PROYECTOS/FAUCET/nodo/pwd.txt:/p.txt -v C:/Users/vario/Desktop/CURSO/PROYECTOS/FAUCET/nodo/datos:/data ethereum/client-go:v1.13.15 account new --datadir /data --password /p.txt

-------------------------------------------
CREAR BASE DE DATOS ETH

docker run -v C:\Users\vario\Desktop\CURSO\PROYECTOS\FAUCET\nodo\genesis.json:/gen.json -v C:\Users\vario\Desktop\CURSO\PROYECTOS\FAUCET\nodo\datos:/data ethereum/client-go:v1.13.15 init --datadir /data /gen.json

docker run -v C:/Users/vario/Desktop/CURSO/PROYECTOS/FAUCET/nodo/genesis.json:/gen.json -v C:/Users/vario/Desktop/CURSO/PROYECTOS/FAUCET/nodo/datos:/data ethereum/client-go:v1.13.15 init --datadir /data /gen.json

--------------------------------------------
INICIALIZAR NODO

docker run -d --rm -v C:\Users\vario\Desktop\CURSO\PROYECTOS\FAUCET\nodo\pwd.txt:/p.txt -v C:\Users\vario\Desktop\CURSO\PROYECTOS\FAUCET\nodo\datos:/data -p 5556:8545 ethereum/client-go:v1.13.15 --datadir /data --unlock f853faa648164def050e02c9082ce4c90efd6191 --allow-insecure-unlock --mine --miner.etherbase f853faa648164def050e02c9082ce4c90efd6191 --password /p.txt --nodiscover --http --http.addr "0.0.0.0" --http.api "admin,eth,debug,miner,net,txpool,personl,web3" --http.corsdomain "*"    


docker run --rm -v C:/Users/vario/Desktop/CURSO/PROYECTOS/FAUCET/nodo/pwd.txt:/p.txt -v C:/Users/vario/Desktop/CURSO/PROYECTOS/FAUCET/nodo/datos:/data -p 5556:8545 ethereum/client-go:v1.13.15 --datadir /data --unlock 7a689f697b738034a7aa9a3954449cf4cd780099 --allow-insecure-unlock --mine --miner.etherbase 7a689f697b738034a7aa9a3954449cf4cd780099 --password /p.txt --nodiscover --http --http.addr "0.0.0.0" --http.api "admin,eth,debug,miner,net,txpool,personal,web3" --http.corsdomain "*"

--------------------------------------------
docker logs 41b



-------------------------------------------
BALANCE ETH

import express from "express";
import { Request, Response } from "express";
import cors from "cors";
import { json } from "stream/consumers";
import { RevertInstructionError } from "web3";
import {ethers} from "ethers";

const app = express();
app.use(express.json());
app.use(cors());
const port = 3333;

app.get("/api/balanceEthers/:address", async(req: Request, res: Response) => 
    {
    const {address} = req.params;
    const provider = new ethers.JsonRpcProvider("http://localhost:5556");
    const balance = await provider.getBalance(address);
    
    res.json(
        {address,
        balance: Number(balance)/10**18,
        fecha: new Date().toISOString()});
    })


app.get("/api/balance/:address", async(req: Request, res: Response) => 
    {
    const {address} = req.params;
    const retorno = await fetch("http://localhost:5556/", {
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
----------------------------------------------------------------------------
APP:GET DESENCRYPTAR WALLET

/*
app.get("/api/decrypt", async (req: Request, res: Response) => {
    
        const keystorePath = "C:/Users/vario/Desktop/CURSO/PROYECTOS/FAUCET/nodo/datos/keystore/UTC--2024-07-02T23-17-32.224764311Z--7a689f697b738034a7aa9a3954449cf4cd780099";


        const passwordPath = "C:/Users/vario/Desktop/CURSO/PROYECTOS/FAUCET/nodo/pwd.txt";

        // Leer el archivo keystore y la contraseña
        const keystoreData = fs.readFileSync(keystorePath, "utf8");
        const password = fs.readFileSync(passwordPath, "utf8").trim();

        // Desencriptar el archivo keystore
        const wallet = await ethers.Wallet.fromEncryptedJson(keystoreData, '123456');

        // Devolver la dirección de la cartera
        res.json({ address: wallet.address });
    
});

*/
-------------------------------------------------------------------------------
FRONT NODE CON TAILWIND

npm create vite@latest front -- --template react-ts

cd front
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

tailwind.config.js
        /** @type {import('tailwindcss').Config} */
        export default {
        content: [
            "./index.html",
            "./src/**/*.{js,ts,jsx,tsx}",
        ],
        theme: {
            extend: {},
        },
        plugins: [],
        }

index.css
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        
app.tsx
        export default function App() {
        return (
            <h1 className="text-3xl font-bold underline">
            Hello world!
            </h1>
        )
        }

npm run dev 



tsconfig.json

agregar:

    "compilerOptions": {
    
        "baseUrl": ".",
        "paths": {
        "@/*": [
            "./src/*"
        ]
        }
    
    }


npm i -D @types/node


vite.config.ts

        import path from "path"
        import react from "@vitejs/plugin-react"
        import { defineConfig } from "vite"

        export default defineConfig({
        plugins: [react()],
        resolve: {
            alias: {
            "@": path.resolve(__dirname, "./src"),
            },
        },
        })

npx shadcn-ui@latest init

        Would you like to use TypeScript (recommended)?  yes
        Which style would you like to use? › Default
        Which color would you like to use as base color? › Slate
        Where is your global CSS file? › › src/index.css
        Do you want to use CSS variables for colors? › yes
        Where is your tailwind.config.js located? › tailwind.config.js
        Configure the import alias for components: › @/components
        Configure the import alias for utils: › @/lib/utils
        Are you using React Server Components? › no 

------------------------------------------------------