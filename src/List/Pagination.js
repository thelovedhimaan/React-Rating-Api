import React from 'react';

export default function Pagination({ ReviewsPerPage, totalReviews, paginate }) {
   const pageNumbers = [];
   for (let i = 1; i <= Math.ceil(totalReviews / ReviewsPerPage); i++) {
      pageNumbers.push(i);
   }
   return (
      <div>
         <nav>
            <ul className="pagination">
               {pageNumbers.map((num) => (
                  <li key={num} className="page-item">
                     <a
                        onClick={(evt) => {
                           evt.preventDefault();
                           paginate(num);
                        }}
                        href="!#"
                        className="page-link"
                     >
                        {num}
                     </a>
                  </li>
               ))}
            </ul>
         </nav>
      </div>
   );
}
