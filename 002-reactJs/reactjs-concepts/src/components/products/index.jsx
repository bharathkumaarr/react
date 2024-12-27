import { literal } from "zod";
import ProductItem from "./components/product-item";






function ProductList({name,city, listOfProducts}) {
    // console.log(props);
    // const {name,city} = props;
    return <div>
        <h3>Ecommerce</h3>
        {/* <ProductItem /> */}
        <h4>name is {name}, from {city}</h4>

        <ul>
            {
                listOfProducts.map((item,index)=> (
                <ProductItem singleProductItem={item} key={index} />
                ))
            }
        </ul>
    </div>
}
export default ProductList;