import { useState } from 'react';
import './Mainjiyoung.scss';
import Comment from './Comment';
import SearchId from './SearchId';

function Mainjiyoung() {
  const [comment, setComment] = useState('');
  const [commentArr, setCommentArr] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [turnRed, setTurnRed] = useState(false);

  const newComment = e => {
    setComment(e.target.value);
  };
  const pushComment = () => {
    let copyComment = [...commentArr];
    copyComment.push(comment);
    setCommentArr(copyComment);
    setComment('');
  };
  const commentEnter = e => {
    if (e.code === 'Enter') {
      pushComment();
    }
  };
  // 댓글 구현 (컴포넌트 전)
  const showComment = commentArr.map(function (el, i) {
    return (
      <div key={i} className="comments">
        <span>jyp_0808</span>
        {el}
      </div>
    );
  });

  return (
    <>
      <nav>
        <div className="navContent">
          <div className="navInner">
            <div className="logoBox">
              <img src="/images/img.jiyoungpark/instagram.png" alt="logo" />
              <span className="mainLogo">westagram</span>
            </div>
            <div className="searchBox">
              <img
                src="/images/img.jiyoungpark/search.png"
                alt="search"
                className="searchImg"
              />
              <input
                type="text"
                placeholder="search"
                id="searchInput"
                onChange={e => {
                  setSearchInput(e.target.value);
                }}
              />
              {searchInput.length > 0 && (
                <div className="filterBox">
                  <SearchId searchInput={searchInput} />
                </div>
              )}
            </div>
            <div className="navIcon">
              <img src="/images/img.jiyoungpark/explore.png" alt="explore" />
              <img src="/images/img.jiyoungpark/heart.png" alt="heart" />
              <div className="navProfile">
                <img src="/images/img.jiyoungpark/profile.png" alt="profile" />
                <div className="hidemenu">
                  <ul>
                    <li>
                      <img
                        src="/images/img.jiyoungpark/profile.png"
                        alt="profile"
                      />
                      프로필
                    </li>
                    <li>
                      <img
                        src="/images/img.jiyoungpark/save-instagram.png"
                        alt="save"
                      />
                      저장됨
                    </li>
                    <li>
                      <img
                        src="/images/img.jiyoungpark/settings.png"
                        alt="settings"
                      />
                      설정
                    </li>
                    <li className="logout">로그아웃</li>
                  </ul>
                </div>
                {/* <!--hidemenu --> */}
              </div>
              {/* <!--navProfile --> */}
            </div>
            {/* <!--navIcon --> */}
          </div>
          {/* <!--navInner --> */}
        </div>
        {/* <!--navContent --> */}
      </nav>

      <main>
        <div className="wrap">
          <div className="feeds">
            <article className="post">
              <div className="profileInfo">
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/zhwltlr.png"
                      alt="profileImg"
                    />
                  </div>
                  <p className="username">zhwltlr</p>
                </div>
                <img src="/images/img.jiyoungpark/option.png" alt="option" />
              </div>
              <img
                src="/images/img.jiyoungpark/hous.jpg"
                alt="mainImg"
                className="mainImg"
              />
              <div className="postContent">
                <div className="postIcons">
                  <ul>
                    <li>
                      <img
                        src="/images/img.jiyoungpark/heart.png"
                        alt="heart"
                      />
                    </li>
                    <li>
                      <img src="/images/img.jiyoungpark/chat.png" alt="chat" />
                    </li>
                    <li>
                      <img
                        src="/images/img.jiyoungpark/upload.png"
                        alt="upload"
                      />
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
                      <img
                        src="/images/img.jiyoungpark/flower.jpg"
                        alt="profileImg"
                      />
                    </div>
                    <span className="username">jyp_0808</span>
                  </div>
                  <p>님 외에 10명이 좋아합니다.</p>
                </div>
                <div className="postTextBox">
                  <p className="postText text">
                    <span>zhwltlr</span>
                    오늘도 좋은 하루~~^^
                  </p>
                  {/* 컴포넌트 전 */}
                  {/* {showComment} */}
                  <Comment
                    commentArr={commentArr}
                    setCommentArr={setCommentArr}
                    turnRed={turnRed}
                    setTurnRed={setTurnRed}
                  />
                  <div className="newComments" />
                </div>
                <p className="postDate">42분 전</p>
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
                    onClick={pushComment}
                  >
                    게시
                  </button>
                </div>
              </div>
            </article>
          </div>
          {/* <!--feeds --> */}

          {/* <!-- mainRight --> */}
          <div className="mainRight">
            <div className="mainProfile">
              <div className="profileInfo">
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/zhwltlr.png"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">zhwltlr</span>
                    <span className="userMessage">zhwltlr 입니다</span>
                  </p>
                </div>
              </div>
            </div>
            {/* <!--mainProfile --> */}
            <div className="storyBox">
              <div className="innerTitle">
                <h2>스토리</h2>
                <span>모두 보기</span>
              </div>
              <div className="rightBox">
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/song.jpg"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyinfo_music</span>
                    <span className="userMessage">9시간전</span>
                  </p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/dog.jpg"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyinfo_dog</span>
                    <span className="userMessage">5시간전</span>
                  </p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/movie.jpg"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyinfo_movie</span>
                    <span className="userMessage">10시간전</span>
                  </p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/christmas.jpg"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">christmas_soon</span>
                    <span className="userMessage">8시간전</span>
                  </p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/trip.jpg"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">gonnatrip</span>
                    <span className="userMessage">2시간전</span>
                  </p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/itzy.jpg"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">itzy.all.in.us</span>
                    <span className="userMessage">8시간전</span>
                  </p>
                </div>
              </div>
              {/* <!--storyInner --> */}
            </div>
            {/* <!--storyBox --> */}

            <div className="recommend">
              <div className="innerTitle">
                <h2>회원님을 위한 추천</h2>
                <span>모두 보기</span>
              </div>
              <div className="rightBox">
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/detective.png"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyfav_conan</span>
                    <span className="userMessage">코난을 좋아해요</span>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/itzy.jpg"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyfav_itzy</span>
                    <span className="userMessage">있지 사랑해...</span>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/baseball.png"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyfav_baseball</span>
                    <span className="userMessage">
                      삼성라이온즈 팬. 우승좀..
                    </span>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
                <div className="user">
                  <div className="profilePic">
                    <img
                      src="/images/img.jiyoungpark/flower.jpg"
                      alt="profileImg"
                    />
                  </div>
                  <p className="userStatus">
                    <span className="username">jyp_0808</span>
                    <span className="userMessage">이제 쓸 아이디도 없네요</span>
                  </p>
                  <p className="follow">팔로우</p>
                </div>
              </div>
            </div>
            {/* <!--recommend --> */}
          </div>
          {/* <!--mainRight --> */}
        </div>
        {/* <!--wrap --> */}
      </main>
    </>
  );
}

export default Mainjiyoung;
