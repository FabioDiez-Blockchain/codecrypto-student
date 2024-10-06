geth --datadir node1 account new –-password .\pwd.txt

puppet

geth --datadir node3 init curso.json




geth 
--datadir node1
--networkid 333444
--syncmode full 
--datadir node1
--http -–graphql 
--http.port 8545 
--http.api admin,eth,miner,net,txpool,personal,web3
--allow-insecure-unlock --unlock "0xf8a879834a3872916f327782eeb7b6441d78fe6f"
--password pwd.txt
--port 30034 
--bootnodes 
"enode://a4e921236bda9bc92341249b91132fb6aeae2b620716e2e4ff17c7e554bb83fb927db62a5fc3212e8cd4af5e3b0dd413bbb3d97f37cf46a7473830b69e9f72ef@127.0.0.1:0?discport=30301"

 geth --datadir node1 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal,web3 --http.port 8545 --allow-insecure-unlock --unlock "0xf8a879834a3872916f327782eeb7b6441d78fe6f" --password pwd.txt --port 30034 --bootnodes "enode://e2ae7290b971737870ea7f1939f19c41061ef2ec718c21f65f87c125b7a1f1ea07fe39ea48689dcd4c4b8f2dbb648654cbf1862d9d90ed113b578210375cef72@127.0.0.1:0?discport=30301"             

  geth --authrpc.port 8552 --ipcpath \\.\pipe\geth2.ipc --datadir node2 --networkid 333444 --syncmode full --http --http.port 8546 --http.api admin,eth,miner,net,txpool,personal,web3 --allow-insecure-unlock --unlock "0x73d9c39ac368e7bc13c80feb2ca1970b539dd48a" --password pwd.txt --port 30035 --bootnodes "enode://a4e921236bda9bc92341249b91132fb6aeae2b620716e2e4ff17c7e554bb83fb927db62a5fc3212e8cd4af5e3b0dd413bbb3d97f37cf46a7473830b69e9f72ef@127.0.0.1:0?discport=30301"   



  geth --authrpc.port 8553 --ipcpath \\.\pipe\geth3.ipc --datadir node3 --networkid 333444 --syncmode full --http --http.port 8547 --http.api admin,eth,miner,net,txpool,personal,web3 --allow-insecure-unlock --unlock "0x43ada5f06359b078b02dcb1d90f2925f87aa780d" --password pwd.txt --port 30036 --bootnodes "enode://a4e921236bda9bc92341249b91132fb6aeae2b620716e2e4ff17c7e554bb83fb927db62a5fc3212e8cd4af5e3b0dd413bbb3d97f37cf46a7473830b69e9f72ef@127.0.0.1:0?discport=30301"   


   geth --authrpc.port 8554 --ipcpath \\.\pipe\geth4.ipc --datadir node4 --syncmode full --http --http.api admin,eth,miner,net,txpool,personal --http.port 8548 --allow-insecure-unlock --unlock "0x23db7a6a22fa8f1c311ac076abfa4b259567d2ce" --password pwd.txt --port 30037 --bootnodes "enode://e2ae7290b971737870ea7f1939f19c41061ef2ec718c21f65f87c125b7a1f1ea07fe39ea48689dcd4c4b8f2dbb648654cbf1862d9d90ed113b578210375cef72@127.0.0.1:0?discport=30301" 
                          