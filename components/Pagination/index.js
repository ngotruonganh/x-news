import Link from "next/link";
import { useState } from "react";

function Pagination({ postPerPage, totalPost }) {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumber.push(i);
  }
  return (
    <nav>
      <ul className="pagination">
        <li className="page-item">
          <span className="page-back" href="/" aria-label="Previous">
            <img src="/assets/images/back.svg" alt="back" />
            <span className="sr-only">Previous</span>
          </span>
        </li>
        {pageNumber.map((Number,idx) => (
          <li className="page-item" key={idx}>
            <span className="page-link" >
              {Number}
            </span>
          </li>
        ))}
        <li className="page-item">
          <span className="page-next" href="/" aria-label="Next">
            <img src="/assets/images/next.svg" alt="next" />

            <span className="sr-only">Next</span>
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
