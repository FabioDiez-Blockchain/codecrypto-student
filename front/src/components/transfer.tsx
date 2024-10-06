import {useForm} from "react-hook-form";
import { Button } from "./ui/button";
import {ethers} from "ethers";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../components/ui/form"
import { Input } from "../components/ui/input"
import { useState } from "react";
import { Loader2 } from "lucide-react";


export function Transfer(){
  const [tx, setTx] = useState<object | null>(null);
  const [loading, setLoading] = useState(false);
  const form = useForm({
      defaultValues: {
        from: "0xcE839E52dDF9CC4410D0d8A98812c6d771D1A2Fe",
        to: "0x7bc9C881c1a6DB072c1B7B56551704aa426F81A3",
        amount: 594,
      },
    }
  );

  const onSubmit = async (data : any) => {
    setLoading(true);
    const provider = new ethers.BrowserProvider(window.ethereum)
    const signer = await provider.getSigner(data.from)
    const t = await signer.sendTransaction({
      to: data.to,
      value: ethers.parseEther(data.amount.toString()),

    });
    const tx = await t.wait();
    setLoading(false);
    setTx({tx, t, data});
    
  };

  return (
      <div className="space-y-4 mt-3">
      <h1 className="text-xl font-bold " >Transfer</h1>
      <p>Transfer your Money here</p>
      <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">

      <FormField
          control={form.control}
          name="from"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Origen</FormLabel>
              <FormControl>
                <Input placeholder="0x..." {...field} />
              </FormControl>
              <FormDescription>
                Cuenta de Origen
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />  
      <FormField
          control={form.control}
          name="to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Destino</FormLabel>
              <FormControl>
                <Input placeholder="0x....." {...field} />
              </FormControl>
              <FormDescription>
                Cuenta de Destino
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

      <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cantidad</FormLabel>
              <FormControl>
                <Input placeholder="123..." {...field} />
              </FormControl>
              <FormDescription>
                Cantidad a Transferir
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />


      <Button type="submit">
        <Loader2 size = {16} className = {loading ? "animate-spin" : "hidden"} />
        Transfer</Button> 
      
      </form>
    </Form>
      {
        tx && (
          <div>
            <h2>Transaccion Realizada</h2>
            <pre>{JSON.stringify(tx, null, 4)}</pre>
          </div>  
        )
      }

  </div>
  );
}
