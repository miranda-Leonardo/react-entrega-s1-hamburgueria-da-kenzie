import "../../normalize.css";
import styles from "../styles.module.css";
import { Form } from "../Styled/styled";

export const Header = ({
  mostrarProdutos,
  pesquisa,
  setPesquisa,
  setItensFiltrados,
}) => {
  return (
    <header className={styles.container}>
      <div className={styles.header}>
        <h1
          className={`heading1 ${styles.title__h1}`}
          onClick={() => setItensFiltrados(null)}
        >
          Burguer <span className={styles.title__span}>Kenzie</span>
        </h1>
        <div>
          <Form
            onSubmit={(event) => {
              event.preventDefault();
              mostrarProdutos(pesquisa);
            }}
          >
            <input
              className={styles.input}
              type="text"
              name="search"
              id="search"
              value={pesquisa}
              placeholder="Digitar pesquisa"
              onChange={(event) => {
                setPesquisa(event.target.value);
              }}
            />
            <button className="buttonMedium1" type="submit">
              Pesquisar
            </button>
          </Form>
        </div>
      </div>
    </header>
  );
};
