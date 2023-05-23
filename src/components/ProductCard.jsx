import { useNavigate, useParams } from "react-router-dom"
import { createWebPay } from "../api/product.api";
import { BuyPage } from "../pages/buy";

export function ProductCard({ product , dolar}){

    const navigate = useNavigate();
    const params = useParams();
    const formatterUSD = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      });
    const formatterCLP = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'CLP',
    });
    return (
        <div 
        onClick={()=>{
            navigate('/products/'+ product.id)
        }}
        className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer rounded-md">
            <img src="../src/images/guitarra-electroacustica-bte-koa-taylor.jpg" alt="guitarra" width="500" height="600"></img>
            <h1 className="font-bold uppercase">{product.nombre}</h1>
            <p className="text-slate-200">Precio</p>
            <p className="text-slate-400">{formatterCLP.format(product.precio)}</p>
            <p className="text-slate-400">USD {formatterUSD.format(product.precio/dolar)}</p>
            {
                params.id &&(
                    <button
                    onClick={async()=>{
                        navigate('/comprar')
                    }}
                    className="bg-indigo-500 px-3 py2 rounded-lg">
                        Comprar
                    </button>
                )
            }
        </div>
    )
}