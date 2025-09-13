import React from "react";
import useRecipeStore from "./recipeStore";

function SearchBar() {
    const { setSearchTerm, filterRecipes } = useRecipeStore();
     
    const handleChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        filterRecipes();
      }
    return (
        <input
          type="text"
          placeholder="Search recipes..."
          onChange={handleChange}
        />
      );
    };

    export default SearchBar;