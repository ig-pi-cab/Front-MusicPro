import { useForm } from 'react-hook-form'
import { useNavigate, useParams} from 'react-router-dom';
import { createProduct, updateProduct ,getSingleProduct} from '../api/product.api';
import { useEffect } from 'react';

export function ProductFormPage(){

    const navigate = useNavigate();
    const params = useParams();
    const {
        register,
        handleSubmit,
        formState: {errors},
        setValue
    } = useForm();

    const onSubmit = handleSubmit(async data => {
        if (params.id){
            updateProduct();
            console.log("pa alla vamoh")
        } else {
            await createProduct(data);
            navigate('/about');
        }
    })

    useEffect(()=>{
        async function loadProduct() {
            if (params.id){
                const res = await getSingleProduct(params.id)
                setValue('nombre',res.data.nombre);
                setValue('precio',res.data.precio);
                setValue('marcaId',res.data.marca.id);
                setValue('categoriaId',res.data.categoria.id);
            }
        }
        loadProduct()
    },[])

    return(
        <div className='max-w-xl mx-auto pt-8'>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Nombre Producto"
                    {...register("nombre",{required:true})}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                {errors.name && <span> Nombre es requerido</span>}
                <input 
                    type="number" 
                    placeholder="Precio"
                    {...register("precio",{required:true})}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                {errors.price && <span> Precio es requerido</span>}
                <input 
                    type="number" 
                    placeholder="ID Marca"
                    {...register("marcaId",{required:true})}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                <input 
                    type="number" 
                    placeholder="ID Categoria"
                    {...register("categoriaId",{required:true})}
                    className='bg-zinc-700 p-3 rounded-lg block w-full mb-3'
                />
                <button
                    className='bg-indigo-500 p-3 rounded-lg w-full mt-3'
                >Guardar</button>
            </form>
        </div>
    )
}