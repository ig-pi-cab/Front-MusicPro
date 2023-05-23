import { useParams, useNavigate } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { useEffect, useState } from "react"
import { getSingleProduct, deleteProduct,getDolar } from '../api/product.api';

export function ProductPage(){
    const params = useParams()
    const [product, setProduct] = useState([]);
    const [dolar, setDolar] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        async function loadProduct(){
            const res = await getSingleProduct(params.id)
            setProduct(res.data);
        }
        async function loadDolar(){
            const resdolar = await getDolar()
            setDolar(resdolar.data)
        }
        loadProduct();
        loadDolar();
    });
    return(
        <div className="flex pt-10">
            <div className="w-200 h-screen px-10">
                <div className="bg-gray-200 rounded-lg p-5">
                    <button 
                    onClick={async()=>{
                        const accepted = window.confirm('Seguro que quieres eliminar el producto?');
                        if (accepted) {
                            await deleteProduct(params.id);
                            navigate("/about")
                        }
                    }}
                    className="container my-3 bg-red-900 px-3 py-2 rounded-lg">Eliminar Producto</button>
                    <button
                    onClick={async()=>{
                        navigate("/modify/"+params.id)
                    }}
                    className="container my-3 bg-slate-600 px-3 py-2 rounded-lg">Modificar Producto</button>
                </div>
            </div>
            <ProductCard key={product.id} product={product} dolar={dolar} />
        </div>
    )
}