import {ProductList} from '../components/ProductList'

export function ProductsPage(){
    return(
        <div className="flex">
            <div className="w-50 h-screen p-10">
                <div className="bg-gray-200 w-80 h-1 p-10">
                </div>
            </div>
            <div className='container mx-auto pt-10 pr-10'>
                <ProductList/>;
            </div>
        </div>
    )
}
