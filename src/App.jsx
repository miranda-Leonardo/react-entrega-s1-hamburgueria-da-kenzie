import "./reset.css";
import "./normalize.css";
import "./App.css";
import { Header } from "./Components/Header";
import { Body } from "./Components/Body";
import { useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [itensFiltrados, setItensFiltrados] = useState(null);
  const [pesquisa, setPesquisa] = useState("");

  const mostrarProdutos = (data) => {
    const product = products.filter(
      (products) =>
        products.name.toLowerCase().includes(data.toLowerCase()) ||
        products.category.toLowerCase().includes(data.toLowerCase())
    );
    setItensFiltrados(product);
  };

  return (
    <main>
      <Header
        mostrarProdutos={mostrarProdutos}
        pesquisa={pesquisa}
        setPesquisa={setPesquisa}
        setItensFiltrados={setItensFiltrados}
      />
      <Body
        products={products}
        setProducts={setProducts}
        itensFiltrados={itensFiltrados}
        pesquisa={pesquisa}
      />
    </main>
  );
}

export default App;
