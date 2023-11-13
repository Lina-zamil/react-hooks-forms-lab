import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  const [formData, setFormData] = useState({name: "",category: "Produce"});

  function handleChanges(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({...formData,[name]: value});
  }

  function handleSubmitChange(e) {
    e.preventDefault();
    const newFormData = { ...formData, id: uuid() };
    onItemFormSubmit(newFormData);
    setFormData({name: "",category: "Produce"});
  }

  return (
    <form className="NewItem" onSubmit={handleSubmitChange}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChanges} />
      </label>
      <label>
        Category:
        <select name="category" value={formData.category} onChange={handleChanges} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>
      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;