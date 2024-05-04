import React, { useState } from "react";
import { UnitPriceItem } from "./components/UnitPriceItem";

const App = () => {
  const [items, setItems] = useState<string[]>([]);
  const [unitName, setUnitName] = useState("");

  const handleAddItems = () => {
    if (unitName.trim() !== "") {
      setItems([...items, unitName]);
      setUnitName("");
    }
  };

  const handleRemoveItems = (indexToRemove: number) => {
    setItems(items.filter((_, index) => index !== indexToRemove));
  };

  const handleInputChange = (e: any) => {
    setUnitName(e.target.value);
  };

  const handleInputBlur = () => {
    handleAddItems();
  };

  const handleInputKeyPress = (e: any) => {
    if (e.key === "Enter") {
      handleAddItems();
    }
  };
  return (
    <div className="max-w-[1000px] relative top-0 left-1/2 -translate-x-2/4 pt-10">
      <div className="text-2xl font-bold">Units & Pricing</div>
      <div className="mt-6">
        <div className="flex rounded-t-md border border-b-0 border-solid border-gray-2 px-3 py-1">
          <div className="flex-[4] text-gray-1 font-medium">Unit</div>
          <div className="flex-[5] text-gray-1 font-medium">
            <div className="w-1/2 flex justify-end pr-3">Measure</div>
          </div>
          <div className="flex-[3] text-gray-1 font-medium pl-10">Price</div>
          <div className="flex-[3] text-gray-1 font-medium">Supplier</div>
        </div>

        {items.map((name, index) => (
          <UnitPriceItem
            key={index}
            index={index}
            unitName={name}
            onRemove={handleRemoveItems}
          />
        ))}

        <input
          type="text"
          placeholder="+ Add Unit"
          className="add-unit-input"
          value={unitName}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          // onKeyPress={handleInputKeyPress}
          onKeyDown={handleInputKeyPress}
        />
      </div>
    </div>
  );
};

export default App;
