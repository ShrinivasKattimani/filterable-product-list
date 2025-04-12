// import { useState } from "react";
import "./App.css";
import FilterableProductList from "./components/FilterableProductList";
import { PRODUCTS } from "./data/products";

function App() {
  return <FilterableProductList products={PRODUCTS} />;
}

export default App;
