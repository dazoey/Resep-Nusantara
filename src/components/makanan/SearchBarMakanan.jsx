import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const SearchbarMakanan = ({ searchQuery, setSearchQuery }) => {
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <form className="col-span-3 gap-4 mb-4" onSubmit={(e) => e.preventDefault()}>
      <div className="relative">
        <input
          type="search"
          className="w-full p-4 rounded-full border-slate-300 focus:ring-4 focus:ring-blue-200 transition outline-blue-500 outline-2"
          placeholder="Cari Makanan..."
          value={searchQuery}
          onChange={handleSearch}
        />
        <button
          type="submit"
          className="absolute right-1 top-1/2 -translate-y-1/2 p-4 bg-blue-500 rounded-full"
        >
          <AiOutlineSearch />
        </button>
      </div>
    </form>
  );
};

export default SearchbarMakanan;
