import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {
  // State to manage the input fields
  const [itemName, setItemName] = useState("");
  const [itemCategory, setItemCategory] = useState("Produce");

  // Handle the form's submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    // Call the callback prop with the new item
    onItemFormSubmit(newItem);

    // Clear the form inputs
    setItemName("");
    setItemCategory("Produce");
  };

  // Update state when inputs change
  const handleNameChange = (e) => {
    setItemName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setItemCategory(e.target.value);
  };

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={itemName}
          onChange={handleNameChange}
          required
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          value={itemCategory}
          onChange={handleCategoryChange}
          required
        >
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
