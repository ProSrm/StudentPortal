import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Reviews = () => {
  const [counter, setCounter] = useState(3);
  const { id, name, job, image, text } = people[counter];

  //function for checking if no is less than zero or greater than value .
  const checNum = (counter) => {
    if (counter > people.length - 1) {
      return 0;
    }
    if (counter < 0) {
      return people.length - 1;
    }
    return counter;
  };

  //function for previous person
  const prevPerson = () => {
    setCounter((counter) => {
      let Newcounter = counter - 1;
      return checNum(Newcounter);
    });
  };

  //functon for nextperson
  const nextPerson = () => {
    setCounter((counter) => {
      let Newcounter = counter + 1;
      return checNum(Newcounter);
    });
  };

  return (
    <article className="review ">
      <div className="img-container">
        <img src={image} alt="{name}" className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
        <h4 className="Author"></h4>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevPerson}>
          <FaChevronLeft />
        </button>

        <button className="next-btn" onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
};
export default Reviews;
