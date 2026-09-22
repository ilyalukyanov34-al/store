import "./Search.scss";
import { Search as SearchIcon } from "lucide-react";
import { useState, useRef } from "react";

type SearchProps = {
  onSearch: (value: string) => void;
  onTyping: () => void;
};

const Search = (props: SearchProps) => {
  const [inputValue, setInputValue] = useState("");
  const timeoutRef = useRef<number | null>(null);
  return (
    <div className="search">
      <button
        className="search__icon-btn"
        onClick={() => props.onSearch(inputValue)}
      >
        <SearchIcon size={18} className="search__icon" />
      </button>
      <input
        type="text"
        placeholder="порадуйте себя новой покупкой..."
        className="search__input"
        value={inputValue}
        onChange={(e) => {
          const newValue = e.target.value;
          setInputValue(newValue);

          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }

          if (newValue === "") {
            props.onSearch("");
            return;
          }

          props.onTyping();

          timeoutRef.current = window.setTimeout(() => {
            props.onSearch(newValue);
          }, 2500);
        }}
      />
    </div>
  );
};

export default Search;
