import React from 'react';

const Comment = props => {
  return props.commentArr.map(function (el, i) {
    return (
      <div key={i} className="comments">
        <span>jyp_0808</span>
        {el}
        <img
          onClick={() => {
            props.setTurnRed(!props.turnRed);
          }}
          src={
            props.turnRed === false
              ? '/images/img.jiyoungpark/heart.png'
              : '/images/img.jiyoungpark/redheart.png'
          }
          alt="heart"
        />
        <img
          onClick={() => {
            let copy = [...props.commentArr];
            copy.splice(i, 1);
            props.setCommentArr(copy);
          }}
          src="/images/img.jiyoungpark/delete.png"
          alt="delete"
        />
      </div>
    );
  });
};

export default Comment;
