import { useState } from "react";
import useRecipeStore from "./recipeStore";

function AddRecipeForm() {
    const { addRecipe } = useRecipeStore();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        addRecipe({ id: Date.now(), title, description });
        setTitle("");
        setDescription("");
    }
  return (  
    <form onSubmit={handleSubmit}>

        <input type="text" value={title} onChange={(e)=> setTitle(e.target.value)} />
        <textarea  value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        <button type="submit"> Add recipe</button>
    </form>
  );
   
}
export default AddRecipeForm;