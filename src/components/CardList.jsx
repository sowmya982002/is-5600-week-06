import React, { useEffect, useState } from "react";
import Card from "./Card";
import Button from "./Button";
import Search from "./Search";

const limit = 10;

const CardList = ({ data }) => {
  const [offset, setOffset] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [products, setProducts] = useState(data.slice(0, limit));

  const currentPage = Math.floor(offset / limit) + 1;
  const totalPages = Math.ceil(filteredData.length / limit);

  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  const handlePagination = (dir) => {
    if (dir === "previous" && offset > 0) setOffset(offset - limit);
    if (dir === "next" && offset + limit < filteredData.length)
      setOffset(offset + limit);
  };

  const goToPage = (page) => {
    setOffset((page - 1) * limit);
  };

  const filterTags = (searchTerm) => {
    const term = searchTerm.toLowerCase().trim();

    if (term === "") {
      setFilteredData(data);
      setOffset(0);
      return;
    }

    const filtered = data.filter((product) => {
      const text = Object.values(product).flat().join(" ").toLowerCase();
      return text.includes(term);
    });

    setFilteredData(filtered);
    setOffset(0);
  };

  return (
    <div className="cf pa2">
      <Search handleSearch={filterTags} />

      <div className="mt2 mb2">
        {products.length > 0 ? (
          products.map((p) => <Card key={p.id} {...p} />)
        ) : (
          <p className="tc gray">No products found</p>
        )}
      </div>

      <div className="pa4 flex flex-column items-center">
        <div className="flex mb3">
          <Button
            text="Previous"
            handleClick={() => handlePagination("previous")}
            disabled={offset === 0}
          />
          <Button
            text="Next"
            handleClick={() => handlePagination("next")}
            disabled={offset + limit >= filteredData.length}
          />
        </div>

        <div className="flex flex-wrap justify-center w-80">
          {Array.from({ length: totalPages }, (_, i) => {
            const page = i + 1;
            return (
              <button
                key={page}
                className={
                  page === currentPage
                    ? "ma1 pa2 bg-dark-blue white"
                    : "ma1 pa2 ba"
                }
                onClick={() => goToPage(page)}
              >
                {page}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CardList;