import React from "react";
import { GlobalContext } from "./Context/Context";

function SearchForm() {

  const {setSearchTerm} = GlobalContext();
  
  const handleSubmit = (e) =>{
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if(!searchValue) return;
    setSearchTerm(searchValue);
  }

  return (
    <section>
      <h1 className="title">Unsplash Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input type="text" className="form-input search-input" name="search" placeholder="Search Item ...."></input>
        <button type="submit" className="btn">search</button>
        </form>
    </section>
  );
}

export default SearchForm;
