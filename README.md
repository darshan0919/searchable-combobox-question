# Searchable Combobox

Implement a **searchable combobox**: an input that filters a list of options as the user types, supports keyboard navigation, and lets the user pick one option. The layout and styles are already built. Your task is to connect the search logic, debouncing, keyboard handling, and selection behavior.

## Start here

| File                                                      | Your task                          |
| --------------------------------------------------------- | ---------------------------------- |
| `src/components/SearchableCombobox/SearchableCombobox.js` | **Implement milestones M1–M4**     |
| `src/api/mockSearch.js`                                   | Provided — simulates async search  |
| `src/lib/getFocusedIndex.js`                              | Provided — use for arrow-key focus |
| `src/__tests__/SearchableCombobox.test.js`                | Run `npm test` to check progress   |

Open **SearchableCombobox.js** first. Each milestone has a `// --- Milestone N ---` section.

## Setup

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). The subtitle reads: _Type to search and select an option._

## Milestones (~7 min each)

### M1 — Fetch and show results

On input change, call `searchOptions(query)` and render matching options in the list.

### M2 — Debounce search (300ms)

Debounce calls to `searchOptions`. Clear pending timers when the query changes or the component unmounts.

### M3 — Keyboard navigation

- **Arrow Down / Arrow Up** — move the focused option (wrap at the ends)
- **Enter** — select the focused option

Use the provided `getFocusedIndex(currentIndex, itemCount, direction)` helper.

### M4 — Select and empty state

- Clicking an option or pressing Enter fills the input with the label and closes the list
- When a search completes with no matches, show **"No results found"** (do not show it while loading)

## Verify progress

```bash
npm test
```

Each `describe("Milestone N")` block maps to one milestone. Aim for 4/4 passing.

## Provided — do not edit

- `SearchableCombobox.css` — all styles
- JSX structure in `SearchableCombobox.js` (handlers are stubs only)
- `src/api/mockSearch.js` — mock async search with 8 fruit options
- `src/lib/getFocusedIndex.js` — keyboard index helper
- `src/App.js`, tests, and config files

## Out of scope

Groups, nested menus, scroll pagination, mouse hover-to-focus sync, click-outside (dropdown closes on select only).

**Time target:** 25–30 minutes
