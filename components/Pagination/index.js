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
          <Link className="page-back" href="/" aria-label="Previous" passHref>
            <img src="/assets/images/back.svg" alt="back" />
            <span className="sr-only">Previous</span>
          </Link>
        </li>
        {pageNumber.map((Number,idx) => (
          <li className="page-item" key={idx}>
            <Link className="page-link" href="/" passHref>
              {Number}
            </Link>
          </li>
        ))}
        <li className="page-item">
          <Link className="page-next" href="/" aria-label="Next" passHref>
            <img src="/assets/images/next.svg" alt="next" />

            <span className="sr-only">Next</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
