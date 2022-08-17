import { useEffect, useState } from "react";
import "./App.css";
import CategoryForm from "./components/CategoryForm";
import Filter from "./components/Filter";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

function App() {
  const [categoryList, setCategoryList] = useState([]);
  const [productList, setProductList] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [sort, setSort] = useState("latest");
  const [search, setSearch] = useState("");

  useEffect(() => {
    let result=productList;
    result=FilterTitleProducts(result);
    result=SortDate(result);
    setFilterProduct(result);
  }, [productList, sort, search]);

  const searchProducts = (e) => {
    setSearch(e.target.value.trim().toLowerCase());
    console.log(search);

  };
  const sortProducts = (e) => {
    setSort(e.target.value);
    
  };

  const FilterTitleProducts = (array) => {
    return array.filter((p) => p.title.toLowerCase().includes(search));
  };
  const SortDate=(array)=>{
    if (sort === "latest") {
      return array.sort((a, b) => {
        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
      });
    } else if (sort === "earliest") {
      return array.sort((a, b) => {
        return new Date(a.createdAt) > new Date(b.createdAt) ? -1 : 1;
      });
    }

  }

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
          <ProductForm
            categoryList={categoryList}
            setProductList={setProductList}
          />
          <Filter
            onSort={sortProducts}
            onSearch={searchProducts}
            search={search}
            sort={sort}
          />
          <ProductList
            products={filterProduct}
            categoryList={categoryList}
            setProductList={setProductList}
          />
        </div>
      </div>
    </>
  );
}

export default App;
