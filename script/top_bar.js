const top_bar=()=>{
    return `  <h3 id="filter">Filters</h3>
    <div id="btns">
     <button>Bundle</button>
    <button>Country of Origin</button>
    <button>Size</button>
    
     <label for="sort"></label>
    <select  name="sort" id="change" >
      <option >Sort :<strong>Recommended</strong></option>
     <option value="Recommend">Recommended</option>
     <option value="New">Whats New</option>
     <option value="trend">Popularity</option>
     <option value="save">Better Discount</option>
     <option value="htol">Price: High to Low</option>
     <option value="ltoh">Price: Low to High</option>
     <option value="cr">Customer Rating</option>

    </select></div>`
}
export {top_bar}