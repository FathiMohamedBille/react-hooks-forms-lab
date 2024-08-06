import React, { useState } from 'react';
import Filter from './Filter';
import ItemList from './ItemList';

const App = () => {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState([
    { id: 1, name: "Lettuce" },
    { id: 2, name: "Yogurt" },
    { id: 3, name: "Swiss Cheese" },
    { id: 4, name: "String Cheese" },
  ]);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Filter search={search} onSearchChange={setSearch} />
      <ItemList items={filteredItems} />
    </div>
  );
};

export default App;