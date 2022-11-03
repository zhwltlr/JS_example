import React, { useState } from 'react';

const Comment = ({ comment, onDelete }) => {
  const [turnRed, setTurnRed] = useState(false);
  return (
    <div className="comments">
      <span>jyp_0808</span>
      {comment}
      <img
        onClick={() => {
          setTurnRed(!turnRed);
        }}
        src={
          turnRed === false
            ? '/images/img.jiyoungpark/heart.png'
            : '/images/img.jiyoungpark/redheart.png'
        }
        alt="heart"
      />
      <img
        onClick={onDelete}
        src="/images/img.jiyoungpark/delete.png"
        alt="delete"
      />
    </div>
  );
};

export default Comment;
