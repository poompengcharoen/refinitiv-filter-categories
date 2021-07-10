import { useCallback, useEffect, useState } from "react";

import Checkbox from "./components/Checkbox/Checkbox";
import { Container } from "reactstrap";
import Error from "./components/Error/Error";
import Results from "./components/Results/Results";
import SearchBar from "./components/SearchBar/SearchBar";

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [cachedItems, setCachedItems] = useState([]);
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isCaseSensitive, setIsCaseSensitive] = useState(false);

  // Handle search
  const onSearch = useCallback(
    (e) => {
      const searchTerm = e.target.value;
      setSearchTerm(searchTerm);

      if (items.length && searchTerm !== "") {
        const filteredItems = items.filter((item) => {
          if (isCaseSensitive) {
            return item.includes(searchTerm);
          }

          return item.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setItems(filteredItems);
      }
    },
    [isCaseSensitive, items]
  );

  // Handle case condition changes
  const onCaseChange = useCallback(() => {
    setIsCaseSensitive((i) => !i);
  }, []);

  // Fetch data from API
  useEffect(() => {
    if (!isLoaded) {
      fetch("https://api.publicapis.org/categories")
        .then((res) => res.json())
        .then(
          (result) => {
            setCachedItems(result);
            setItems(result);
            setIsLoaded(true);
            setError(null);
          },
          (error) => {
            setError(error.message);
          }
        );
    }
  }, [isLoaded]);

  // Get all items from cached items
  useEffect(() => {
    if (isLoaded && searchTerm === "" && cachedItems.length) {
      setItems(cachedItems);
      setError(null);
    }
  }, [cachedItems, isLoaded, searchTerm]);

  return (
    <Container className="py-5">
      <h1>Refinitiv Categories Filter</h1>
      <SearchBar value={searchTerm} onChange={onSearch} />
      <Checkbox
        label="Case-sensitive Search"
        checked={isCaseSensitive}
        onChange={onCaseChange}
      />
      <Error error={error} />
      <Results items={items} />
    </Container>
  );
};

export default App;
