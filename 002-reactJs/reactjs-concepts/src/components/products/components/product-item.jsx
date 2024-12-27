
function ButtonComponent(){
    return <button>
        click
    </button>
}


function ProductItem(){
    return <div>
        <p>Product 1 hard coded</p>

        <ButtonComponent /> 
    </div>
}

export default ProductItem;