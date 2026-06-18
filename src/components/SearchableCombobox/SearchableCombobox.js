/* eslint-disable no-unused-vars -- stubs until milestones M1–M4 are implemented */
import { useState } from "react";
import { searchOptions } from "../../api/mockSearch";
import { getFocusedIndex } from "../../lib/getFocusedIndex";
import "./SearchableCombobox.css";

export default function SearchableCombobox() {
  const [query, setQuery] = useState("");
  const [options, setOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);

  // --- Milestone 1: Fetch and show results ---
  const handleInputChange = (event) => {
    /* TODO: update query and open the list; fetch options via searchOptions */
  };

  const handleFocus = () => {
    /* TODO: open the list on focus */
  };

  // --- Milestone 2: Debounce search (300ms) ---
  // Hint: use useEffect on `query` with setTimeout / clearTimeout in cleanup

  // --- Milestone 3: Keyboard navigation ---
  const handleKeyDown = (event) => {
    /* TODO: ArrowDown/ArrowUp move focus; Enter selects the focused option */
  };

  // --- Milestone 4: Select and empty state ---
  const handleSelect = (option) => {
    /* TODO: fill input, close list; show empty state when no matches */
  };

  const showList =
    isOpen && (loading || options.length > 0 || query.length > 0);
  const showEmpty = !loading && options.length === 0 && query.length > 0;

  return (
    <div className="combobox">
      <input
        type="text"
        className="combobox__input"
        data-testid="combobox-input"
        value={query}
        placeholder="Select an option"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        onChange={handleInputChange}
        onFocus={handleFocus}
        onKeyDown={handleKeyDown}
      />

      {showList && (
        <ul
          className="combobox__list"
          data-testid="combobox-list"
          role="listbox"
        >
          {loading && (
            <li className="combobox__status" data-testid="combobox-loading">
              Loading...
            </li>
          )}

          {!loading &&
            options.map((option, index) => (
              <li
                key={option.id}
                className="combobox__option"
                data-testid={`combobox-option-${option.id}`}
                data-active={index === focusedIndex ? "true" : "false"}
                role="option"
                aria-selected={index === focusedIndex}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))}

          {showEmpty && (
            <li
              className="combobox__status combobox__status--empty"
              data-testid="combobox-empty"
            >
              No results found
            </li>
          )}
        </ul>
      )}
    </div>
  );
}
