let getElements = document.querySelector('.list-of-products');

function renderProducts(getProducts) {
    getElements.innerHTML=getProducts.map(singleProductItem => `<p> ${singleProductItem.title}</p>`).join(' ')
}

async function fetchElements(){
    try {
        const apiResponse = await fetch('https://dummyjson.com/products',{
            method: 'GET'
    })
    const result=await apiResponse.json()
    console.log(result);

    if (result?.products?.length>0) renderProducts(result?.products)

    }catch(e) {
        console.log(e);
    }
}






fetchElements()