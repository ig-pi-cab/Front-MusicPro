import { useEffect, useState } from "react"
import { getAllProducts, getDolar} from "../api/product.api";
import { ProductCard } from "./ProductCard";

export function ProductList(){

    const [product, setProduct] = useState([]);
    const [dolar, setDolar] = useState([]);
    useEffect(() => {
        async function loadProducts(){
            const res = await getAllProducts()
            setProduct(res.data);
        }
        async function loadDolar(){
            const resdolar = await getDolar()
            setDolar(resdolar.data)
        }
        loadProducts();
        loadDolar();
    },[]);
    return (
        <div className="grid grid-cols-3 gap-3">
            {product.map((product) => (
                <ProductCard key={product.id} product={product} dolar={dolar} />
        ))}
    </div>
    );
}
