import React, { useState } from 'react';
import './Review.css';
import StarRatings from 'react-star-ratings';
import { Blockquote } from 'bootstrap-4-react';
import { Button } from 'bootstrap-4-react';
export default function Review(props) {
   const [View, setView] = useState(false);
   const handleClick = () => {
      setView(!View);
   };

   return (
      <div className="Card">
         <div className="Title"> {props.title}</div>
         <div className="Usefullness"> Usefullness {props.usefulness}</div>
         <div className="Comments">{props.comment}</div>
         <Blockquote>
            <div className="Name">
               Reviewed By
               <cite title="Source Title">
                  {props.friend === true ? (
                     <div className="Name">- {props.name}</div>
                  ) : (
                     <div className="Name">Only visible to friends. </div>
                  )}
               </cite>
            </div>
         </Blockquote>
         <div className="ratingName"> Overall Ratings</div>
         <StarRatings
            rating={props.Overall}
            starRatedColor="Darkblue"
            numberOfStars={6}
            name="rating"
            starDimension="24px"
            starSpacing="15px"
         />
         <br></br>
         <br></br>

         {View === true ? (
            <div>
               <Button onClick={handleClick} primary outline>
                  Less Ratings
               </Button>
               <div className="ratingName">delivery_time</div>
               <StarRatings
                  rating={props.delivery_time}
                  starRatedColor="Darkblue"
                  numberOfStars={6}
                  name="rating"
                  starDimension="24px"
                  starSpacing="15px"
               />
               <div className="ratingName">discounts_and_offers</div>
               <StarRatings
                  rating={props.discounts_and_offers}
                  starRatedColor="Darkblue"
                  numberOfStars={6}
                  name="rating"
                  starDimension="24px"
                  starSpacing="15px"
               />
               <div className="ratingName"> matches_description</div>
               <StarRatings
                  rating={props.matches_description}
                  starRatedColor="Darkblue"
                  numberOfStars={6}
                  name="rating"
                  starDimension="24px"
                  starSpacing="15px"
               />
               <div className="ratingName"> matches_photo</div>
               <StarRatings
                  rating={props.matches_photo}
                  starRatedColor="Darkblue"
                  numberOfStars={6}
                  name="rating"
                  starDimension="24px"
                  starSpacing="15px"
               />
               <div className="ratingName">packaging</div>
               <StarRatings
                  rating={props.packaging}
                  starRatedColor="Darkblue"
                  numberOfStars={6}
                  name="rating"
                  starDimension="24px"
                  starSpacing="15px"
               />
               <div className="ratingName">price</div>
               <StarRatings
                  rating={props.price}
                  starRatedColor="Darkblue"
                  numberOfStars={6}
                  name="rating"
                  starDimension="24px"
                  starSpacing="12px"
               />
            </div>
         ) : (
            <Button onClick={handleClick} primary outline>
               More Ratings
            </Button>
         )}
      </div>
   );
}
