import { useGlobalContext } from "../context";

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <section className="section-center search-center">
      <h2 className="form-title">search your favorite cocktail</h2>
      <form className="form">
        <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      </form>
    </section>
  );
};

export default SearchForm;
