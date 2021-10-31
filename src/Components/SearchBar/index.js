import React, { useState } from 'react';
import "./style.css";

const SearchBar = () => {
  const [formState, setFormState] = useState({
    userName: ''
  });

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <div className="flex flex-column mt2">
          <input
            value={formState.userName}
            onChange={(e) =>
              setFormState({
                ...formState,
                userName: e.target.value
              })
            }
            type="text"
            placeholder="Search repositories from..."
          />        
        <button>Search !</button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;