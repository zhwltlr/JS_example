import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const SearchId = ({ searchInput }) => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/parkjiyoung/feedData.json')
      .then(response => response.json())
      .then(result => setFeedData(result));
  }, []);

  const searchIdData = feedData.filter(el => el.username.includes(searchInput));

  if (searchInput.length > 0 && searchIdData.length > 0) {
    return (
      <div className="filterBox">
        {searchIdData.map((el, i) => {
          return (
            <div key={i} className="filterId">
              <img src={el.profileimg} alt="img" className="filterImg" />
              {el.username}
            </div>
          );
        })}
      </div>
    );
  }
};

export default SearchId;
