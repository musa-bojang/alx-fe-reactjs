import { create } from "zustand";

const useRecipeStore = create ((set) => ({
    recipes: [],
    searchTerm: '',
    setSearchTerm: (term) => set({ searchTerm: term }),
    filteredRecipes: [],
    filterRecipes: () => set(state => ({
        filteredRecipes: state.recipes.filter(recipe => 
            recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
        )
    })),
    // get filteredRecipes() {
    //     const { recipes, searchTerm } = get();
    //     return recipes.filter((recipe) =>
    //       recipe.title.toLowerCase().includes(searchTerm.toLowerCase())
    //     );
    //   },
    addRecipe: (newRecipe) => set(state => ({
        recipes: [...state.recipes, newRecipe]
    })),
    setRecipes: (recipes) => set({ recipes }),
    updateRecipe: (id, updatedRecipe) => set(state => ({
        recipes: state.recipes.map(recipe => 
            recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe
        )
    })),
  
    deleteRecipe: (id) => set(state => ({
        recipes: state.recipes.filter(recipe => recipe.id !== id)
    })),
    clearRecipes: () => set({ recipes: [] }),
}));


export default useRecipeStore;