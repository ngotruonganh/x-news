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
          <a className="page-back" href="#" aria-label="Previous">
            <img src="/assets/images/back.svg" alt="back" />
            <span className="sr-only">Previous</span>
          </a>
        </li>
        {pageNumber.map((Number) => (
          <li className="page-item">
            <a className="page-link" href="#">
              {Number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a className="page-next" href="#" aria-label="Next">
            <img src="/assets/images/next.svg" alt="next" />

            <span className="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
