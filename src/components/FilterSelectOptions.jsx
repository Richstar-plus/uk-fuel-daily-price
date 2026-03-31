export function FilterSelectOptions({
  filter,
  setFilterValue,
  setFilter,
  filterValue,
  setSearchTrigger,
}) {
  return (
    <div className="filter-select">
      <select
        name="filter"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >
        <option value="">Filter by...</option>
        <option value="all">All Brands</option>
        <option value="specific">Specific Brand</option>
        <option value="fuel-type">Fuel Type</option>
      </select>

      {filter === "specific" ? (
        <div className="filter-input-container">
          <select
            name="filter-type"
            className="filter-type"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="Asda">Asda</option>
            <option value="ESSO">ESSO</option>
            <option value="Jet">Jet</option>
            <option value="Morrisons">Morrisons</option>
            <option value="SHELL">SHELL</option>
            <option value="Sainsbury's">Sainsbury's</option>
            <option value="TEXACO">TEXACO</option>
            <option value="TESCO">TESCO</option>
          </select>
          <button
            className="search-btn"
            onClick={() => setSearchTrigger((prev) => prev + 1)}
          >
            Search
          </button>
        </div>
      ) : filter === "fuel-type" ? (
        <div className="filter-input-container">
          <select
            name="filter-type"
            className="filter-type"
            value={filterValue}
            onChange={(e) => setFilterValue(e.target.value)}
          >
            <option value="">Select...</option>
            <option value="E5">E5</option>
            <option value="SDV">SDV</option>
            <option value="B7">B7</option>
            <option value="E10">E10</option>
          </select>
          <button
            className="search-btn"
            onClick={() => setSearchTrigger((prev) => prev + 1)}
          >
            Search
          </button>
        </div>
      ) : null}
    </div>
  );
}
