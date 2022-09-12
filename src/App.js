import React ,{ useState,useEffect } from "react";
import Recipe from "./Recipe";
import "./style.css" ;



function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const[query,setQuery] = useState("chicken")

  const YOUR_APP_ID = `82e453da`;
  const YOUR_APP_KEY = "3bb5d1a3b992f408b9003effd74c9c22";

  useEffect(()=>{

    getRecipeInfo();

  },[query])

  const getRecipeInfo = async () => {
    var response = await  fetch(`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`);
    var data =  await response.json();
    setRecipes(data.hits);
    console.log(data.hits)
  
  };

 

  const updateQuery = (e)=>{
    setSearch(e.target.value)
    
  }

  const getSearch = (e)=>{
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch}  className="search-form" >
        <input type="text"  className="search-bar"  value={search} onChange={updateQuery} />
        <button  className="search-button" type="submit" >Search</button>
      </form>
    {
      recipes.map(rec=>(<Recipe key={rec.recipe.label}
                                title ={rec.recipe.label }
                                calories ={rec.recipe.calories}
                                image={rec.recipe.image} 
                                ingredients={rec.recipe.ingredients}
                                />))
    }
    </div>
  );
}

export default App;
