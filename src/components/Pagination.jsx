import React, { useState, useEffect } from "react";

const Pagination = ({base_url, totalPages, actualPage, setPage }) => {
    
  const [nextPage, setNextPage] = useState(1);
  const [prevPage, setPrevPage] = useState(1);

  const [goToPage , setGoToPage] = useState(actualPage);


  const changePage = (next, actual) => {
    if (next) {
      if (actual < totalPages - 1) actual = actual + 1;
      else actual = 1;
    } else {
      if (actual > 1) {
        actual = actual - 1;
      } else actual = totalPages - 1;
    }
    return actual;
  };

  useEffect(() => {
    setNextPage(changePage(true, Number(actualPage)));
    setPrevPage(changePage(false, Number(actualPage)));
  }, []);

  return (
    <div className="flex flex-row justify-center gap-4 text-sm text-neutral-300 py-4 items-center ">
      <a href={`${base_url}/page=${prevPage}`} className="bg-violet-900 px-6 py-1 rounded-sm" >
        Previous
      </a>
      <h1 className="text-neutral-600">page</h1>
      <div className="flex flex-row items-center ">
        <input type="text" className="bg-transparent outline-none border border-neutral-700 border-r-0 rounded-l-md w-10 p-1 text-center text-neutral-600" defaultValue={actualPage}
         onChange={(e) => {console.log(e); setGoToPage(e.target.value)}} />
        <a href={`${base_url}/page=${goToPage}`} className="bg-violet-900 px-2  rounded-r-sm  border border-violet-900 py-1"> go </a>
      </div>
      <a href={`${base_url}/page=${nextPage}`} className="bg-violet-900 px-6 py-1 rounded-sm">
        Next
      </a>
    </div>
  );
};

export default Pagination;
