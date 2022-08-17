import { useState } from "react";
import "./App.css";
import CategoryForm from "./components/CategoryForm";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  return (
    <>
      <div className="bg-slate-800 min-h-screen ">
        <div className="h-12 flex items-center justify-center gap-x-4 bg-slate-700 mb-6">
          <h1 className="md:text-xl text-sm font-bold text-slate-300">
            Inventory App using tailwind & ReactJs
          </h1>
          <span className="bg-slate-600 w-6 rounded-full flex justify-center text-slate-300 ring ring-slate-300  items-center font-bold">
            7
          </span>
        </div>
        <div className="container max-w-screen-sm mx-auto p-4">
          <CategoryForm setCategoryList={setCategoryList} />
          <ProductForm categoryList={categoryList} setProductList={setProductList}/>
          <ProductList products={productList} categoryList={categoryList} setProductList={setProductList} />
        </div>
      </div>
    </>
  );
}

export default App;
