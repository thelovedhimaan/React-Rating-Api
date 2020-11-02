import React, { useState } from 'react';
import axios from 'axios';
import './List.css';
import Review from '../Review/Review';
import { Card } from 'bootstrap-4-react';
import Pagination from './Pagination';

export default function List() {
   const [Product, setProduct] = useState('');
   const [Viewer, setViewer] = useState('');
   const [Reviews, setReviews] = useState([]);
   const [Load, setLoad] = useState(false);
   const [CurrentPage, setCurrentPage] = useState(1);
   const [ReviewsPerPage] = useState(3);

   const handleProduct = (evt) => {
      setProduct(evt.target.value);
   };
   const handleViewer = (evt) => {
      setViewer(evt.target.value);
   };
   const handleSubmit = (evt) => {
      evt.preventDefault();
      getReviews(Product, Viewer);
   };

   //Api call
   const getReviews = async (a, b) => {
      try {
         setLoad(true);
         let getApi = await axios.get(`http://www.i2ce.in/reviews/${a}/${b}`);
         setLoad(false);
         setReviews(getApi.data.reviews);
         console.log(getApi.data.reviews);
      } catch (e) {
         console.log(e);
         setLoad(false);
      }
   };

   //Change page Number
   const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
   };

   //Sorting
   const handleSortOverall = () => {
      Reviews.sort((a, b) => {
         return b.ratings.Overall - a.ratings.Overall;
      });
   };
   const handleSortConnectionLevel = () => {
      Reviews.sort((a, b) => {
         return b.reviewer.connection_level - a.reviewer.connection_level;
      });
   };
   const handleSortUsefulness = () => {
      Reviews.sort((a, b) => {
         return b.usefulness - a.usefulness;
      });
   };

   // Loading State
   if (Load) {
      return (
         <div style={{ padding: '300px', backgroundColor: 'white' }}>
            <div className="spinner">
               <i
                  style={{ color: 'midnightblue' }}
                  className="far fa-8x fa-laugh fa-spin"
               ></i>
               <h1
                  style={{ color: 'midnightblue', backgroundColor: 'white' }}
                  className="title"
               >
                  Loading...
               </h1>
            </div>
         </div>
      );
   } else {
      return (
         <div className="main">
            <header>Reviews</header>
            <div className="Container">
               <main>
                  <form onSubmit={handleSubmit}>
                     <br></br>
                     <label htmlFor="products">PRODUCT ID </label>
                     <div className="Align">
                        <input
                           type="number"
                           className="Form"
                           max="20"
                           name="products"
                           key="products"
                           value={Product}
                           onChange={handleProduct}
                           placeholder="No. from 1 - 20"
                           required
                        ></input>
                     </div>
                     <label htmlFor="viewer">VIEWER ID </label>
                     <div className="Align">
                        <input
                           type="number"
                           max="10"
                           className="Form"
                           name="viewer"
                           key="viewer"
                           value={Viewer}
                           onChange={handleViewer}
                           placeholder="No. from 1 - 10"
                           required
                        ></input>
                     </div>
                     <br></br>
                     <div className="Align">
                        <button className="Search">Search</button>
                     </div>
                  </form>
                  <br></br>
                  <div className="pagination">
                     <select id="SortBy">
                        <option value="SortBy" defaultValue>
                           Sort By
                        </option>
                        <option
                           value="OverallRatings"
                           onClick={handleSortOverall}
                        >
                           Overall Ratings High - Low
                        </option>
                        <option
                           value="ReviewerConnectionLevel"
                           onClick={handleSortConnectionLevel}
                        >
                           Reviewer Connection Level High - Low
                        </option>
                        <option
                           value="Usefulness"
                           onClick={handleSortUsefulness}
                        >
                           Usefullness High - Low
                        </option>
                     </select>
                  </div>
               </main>
            </div>
            <Card text="center">
               {Reviews.slice(
                  CurrentPage * ReviewsPerPage - ReviewsPerPage,
                  CurrentPage * ReviewsPerPage
               ).map((each) => (
                  <Review
                     key={each.name}
                     title={each.title}
                     comment={each.comment}
                     usefulness={each.usefulness}
                     name={each.reviewer.name}
                     friend={each.friend}
                     email={each.email}
                     Overall={each.ratings.Overall}
                     delivery_time={each.ratings.delivery_time}
                     discounts_and_offers={each.ratings.discounts_and_offers}
                     matches_description={each.ratings.matches_description}
                     matches_photo={each.ratings.matches_photo}
                     packaging={each.ratings.packaging}
                     price={each.ratings.price}
                     connection_level={each.reviewer.connection_level}
                  />
               ))}
               <Pagination
                  ReviewsPerPage={ReviewsPerPage}
                  totalReviews={Reviews.length}
                  paginate={paginate}
               />
            </Card>
            <footer className="footer">
               <div></div>
               Created By : Love Dhimaan
            </footer>
         </div>
      );
   }
}
