import { useEffect, useState } from "react";
import styles from "../styles.module.css";
import { api } from "../../Services/api";

export const Body = ({ products, setProducts, itensFiltrados, pesquisa }) => {
  const [productsCar, setProductsCar] = useState(null);

  useEffect(() => {
    api
      .get("products")
      .then((resp) => setProducts(resp.data))
      .catch((err) => console.log(err));
  }, []);

  const addCar = (id) => {
    const item = products.find((product) => product.id === id);
    productsCar
      ? setProductsCar([...productsCar, item])
      : setProductsCar([item]);
  };
  console.log(productsCar);
  console.log(products);

  const removeCar = (id) => {
    const newList = productsCar.filter((product) => product.id !== id);
    setProductsCar(newList);
  };

  return (
    <section>
      <div className={styles.main__container}>
        <section className={styles.products}>
          <ul>
            {itensFiltrados
              ? itensFiltrados.map((product) => {
                  const { id, name, category, price, img } = product;
                  return (
                    <>
                      <li key={id}>
                        <img src={`${img}`} alt="" />
                        <h2 className="heading3">{name}</h2>
                        <p className="caption">{category}</p>
                        <p className="body">{`R$ ${price}`}</p>
                        <button
                          onClick={() => addCar(id)}
                          className="buttonMedium1"
                        >
                          Adicionar
                        </button>
                      </li>
                    </>
                  );
                })
              : products?.map((product) => {
                  const { id, name, category, price, img } = product;
                  return (
                    <li key={id}>
                      <img src={`${img}`} alt="" />
                      <h2 className="heading3 padding">{name}</h2>
                      <p className="caption padding">{category}</p>
                      <p className="body padding">{`R$ ${price.toFixed(2)}`}</p>
                      <button
                        onClick={() => addCar(id)}
                        className="buttonMedium1"
                      >
                        Adicionar
                      </button>
                    </li>
                  );
                })}
            {/* <li>
              <img src="" alt="Imagem do produto" />
              <h2 className="heading3">Nome do produto</h2>
              <p className="caption">tipo do produto</p>
              <p className="body">R$ 1,00</p>
              <button className="buttonMedium1">Adicionar</button>
            </li>
            <li>
              <img src="" alt="Imagem do produto" />
              <h2 className="heading3">Nome do produto</h2>
              <p className="caption">tipo do produto</p>
              <p className="body">R$ 1,00</p>
              <button className="buttonMedium1">Adicionar</button>
            </li>
            <li>
              <img src="" alt="Imagem do produto" />
              <h2 className="heading3">Nome do produto</h2>
              <p className="caption">tipo do produto</p>
              <p className="body">R$ 1,00</p>
              <button className="buttonMedium1">Adicionar</button>
            </li> */}
          </ul>
        </section>
        <section className={styles.carShop}>
          <div className={styles.carShop__header}>
            <h2 className="heading3">Carrinho de compras</h2>
          </div>
          <div className={styles.carShop__main}>
            <ul>
              {productsCar ? (
                productsCar.map((product) => {
                  const { id, name, category, price, img } = product;
                  return (
                    <li key={id}>
                      <img src={`${img}`} alt="foto do produto" />
                      <div>
                        <h2 className="heading3">{name}</h2>
                        <p className="caption">{category}</p>
                      </div>
                      <button onClick={() => removeCar(id)}>Remover</button>
                    </li>
                  );
                })
              ) : (
                <p className="body-600">Ainda não há produtos no carrinho</p>
              )}
              {/* <li>
                <img src="" alt="foto do produto" />
                <div>
                  <h2 className="heading3">nome do produto</h2>
                  <p className="caption">tipo do produto</p>
                </div>
                <button>Remover</button>
              </li>
              <li>
                <img src="" alt="foto do produto" />
                <div>
                  <h2 className="heading3">nome do produto</h2>
                  <p className="caption">tipo do produto</p>
                </div>
                <button>Remover</button>
              </li>
              <li>
                <img src="" alt="foto do produto" />
                <div>
                  <h2 className="heading3">nome do produto</h2>
                  <p className="caption">tipo do produto</p>
                </div>
                <button>Remover</button>
              </li> */}
            </ul>
          </div>
          <div className={styles.carShop__footer}>
            <div>
              <p className="headline">Total</p>
              <p className="body">
                {`R$ ${
                  productsCar
                    ? productsCar
                        ?.reduce(
                          (previous, current) => previous + current.price,
                          0
                        )
                        .toFixed(2)
                    : 0
                }`}
              </p>
            </div>
            <button
              onClick={() => setProductsCar(null)}
              className="buttonMedium2"
            >
              Remover todos
            </button>
          </div>
        </section>
      </div>
    </section>
  );
};
