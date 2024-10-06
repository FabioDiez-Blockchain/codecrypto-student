GENESIS

{
"config": {
"chainId": 8888,
"homesteadBlock": 0,
"eip150Block": 0,
"eip155Block": 0,
"eip158Block": 0,
"byzantiumBlock": 0,
"constantinopleBlock": 0,
"petersburgBlock": 0,
"ethash": {}
},
"difficulty": "1",
"gasLimit": "12000000",
"alloc": {
"ad65D72142570D768Bb3e3dAA5d49fc73FEf7226":
{ "balance": "3000000000000000000000000000000000000" },
"0e34b0Ce9fDF5037782ece6dE292daaa4b2D705c":
{ "balance": "3000000000000000000000000000000000000" }
}

}
--------------------------------------------------------------------------
BASE DE DATOS NODO ethash

docker run -d --name eth -v ${PWD}/data:/data -v ${PWD}/genesis.json:/genesis.json ethereum/client-go:v1.13.15 init --datadir /data /genesis.json 

docker run --rm --name eth -v C:\Users\vario\Desktop\CURSO\PROYECTOS\CESTA\NODO\datos:/data -v C:\Users\vario\Desktop\CURSO\PROYECTOS\CESTA\NODO\genesis.json:/genesis.json ethereum/client-go:v1.10.23 init --datadir /data /genesis.json       




--------------------------------------------------------------------------
INICIAR NODO

docker run -d -p 8545:8545 --name eth2 -v C:\Users\vario\Desktop\CURSO\PROYECTOS\CESTA\NODO\datos:/data ethereum/client-go:v1.11.6 --datadir /data --http --http.api personal,admin,eth,net,web3 --http.addr 0.0.0.0 --http.port 8545 --networkid 8888 --mine --miner.etherbase 0x0e34b0Ce9fDF5037782ece6dE292daaa4b2D705c --http.corsdomain "*" --miner.threads 1