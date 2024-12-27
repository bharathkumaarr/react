import Functionalcomponent from './components/Functionalcomponent'
import ProductList from './components/products'
import './App.css'


const dummyProductData = ['product 1', 'product 2', 'product 3'];


function App() {
  return (
   <div>
    <h1>React js concepts</h1>
    {/* <Functionalcomponent /> */}
    <ProductList listOfProducts={dummyProductData} name='bharath' city="b'lore" />
   </div>
  )
}

export default App
