import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Feed from './Feed';

const FeedList = () => {
  const [feedData, setFeedData] = useState([]);

  useEffect(() => {
    fetch('/data/parkjiyoung/feedData.json')
      .then(response => response.json())
      .then(result => setFeedData(result));
  }, []);
  return feedData.map((feedinfo, i) => <Feed key={i} feedinfo={feedinfo} />);
};

export default FeedList;
