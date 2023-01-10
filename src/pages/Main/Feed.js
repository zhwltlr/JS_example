import React from 'react';
import { useState } from 'react';
import Comment from './Comment';

const Feed = ({ feedinfo }) => {
  const [comment, setComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  const [turnRed, setTurnRed] = useState(false);

  const newComment = e => {
    setComment(e.target.value);
  };
  const pushComment = () => {
    setCommentArr([...commentArr, comment]);
    setComment('');
  };
  const commentEnter = e => {
    if (comment && e.code === 'Enter' && e.nativeEvent.isComposing === false) {
      //한글 두번입력 방지
      pushComment();
    }
  };
  const handleDelete = i => {
    return () => {
      let copy = [...commentArr];
      copy.splice(i, 1);
      setCommentArr(copy);
    };
  };

  return (
    <article className="post">
      <div className="profileInfo">
        <div className="user">
          <div className="profilePic">
            <img src={feedinfo.profileimg} alt="profileImg" />
          </div>
          <p className="username">{feedinfo.username}</p>
        </div>
        <img src="/images/img.jiyoungpark/option.png" alt="option" />
      </div>
      <img src={feedinfo.mainimg} alt="mainImg" className="mainImg" />
      <div className="postContent">
        <div className="postIcons">
          <ul>
            <li>
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
            </li>
            <li>
              <img src="/images/img.jiyoungpark/chat.png" alt="chat" />
            </li>
            <li>
              <img src="/images/img.jiyoungpark/upload.png" alt="upload" />
            </li>
            <li className="postSave">
              <img
                src="/images/img.jiyoungpark/save-instagram.png"
                alt="save"
              />
            </li>
          </ul>
        </div>
        <div className="likes">
          <div className="user">
            <div className="profilePic">
              <img src={feedinfo.likeuserimg} alt="profileImg" />
            </div>
            <span className="username">{feedinfo.likeuser}</span>
          </div>
          <p>님 외에 {feedinfo.likenum}명이 좋아합니다.</p>
        </div>
        <div className="postTextBox">
          <p className="postText text">
            <span>{feedinfo.username}</span>
            {feedinfo.text}
          </p>
          {commentArr.map((comment, i) => (
            <Comment key={i} comment={comment} onDelete={handleDelete(i)} />
          ))}
          <div className="newComments" />
        </div>
        <p className="postDate">{feedinfo.postdate}</p>
      </div>
      <div className="commentBox">
        <img src="/images/img.jiyoungpark/smile.png" alt="smile" />
        <div className="newComments">
          <input
            type="text"
            id="commentAdd"
            placeholder="댓글 달기..."
            onChange={newComment}
            onKeyDown={commentEnter}
            value={comment}
          />
          <button
            type="submit"
            className="postBtn"
            onClick={comment ? pushComment : null}
          >
            게시
          </button>
        </div>
      </div>
    </article>
  );
};

export default Feed;
