import { SearchBar } from "./searchBar.styles";

interface Props {
  onSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  search: string;
}

const Search: React.FC<Props> = ({ onSearch, search }) => {
  return (
    <SearchBar>
      <input
        value={search}
        onChange={onSearch}
        type="search"
        placeholder="Search..."
      />
    </SearchBar>
  );
};

export default Search;
