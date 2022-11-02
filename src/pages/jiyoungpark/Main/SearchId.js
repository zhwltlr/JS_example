const SearchId = ({ searchInput }) => {
  const idData = [
    { id: 'zhwltlr', profile: '/images/img.jiyoungpark/zhwltlr.png' },
    { id: 'jyp_0808', profile: '/images/img.jiyoungpark/flower.jpg' },
    { id: 'jyinfo_music', profile: '/images/img.jiyoungpark/song.jpg' },
    { id: 'jyinfo_dog', profile: '/images/img.jiyoungpark/dog.jpg' },
    { id: 'jyinfo_movie', profile: '/images/img.jiyoungpark/movie.jpg' },
    { id: 'christmas_soon', profile: '/images/img.jiyoungpark/christmas.jpg' },
    { id: 'gonnatrip', profile: '/images/img.jiyoungpark/trip.jpg' },
    { id: 'jyfav_conan', profile: '/images/img.jiyoungpark/detective.png' },
    { id: 'jyfav_itzy', profile: '/images/img.jiyoungpark/itzy.jpg' },
    { id: 'jyfav_baseball', profile: '/images/img.jiyoungpark/baseball.png' },
  ];
  return (
    <>
      {idData.map((el, i) => {
        if (searchInput && el.id.includes(searchInput)) {
          return (
            <div key={i} className="filterId">
              <img src={el.profile} alt="img" className="filterImg" />
              {el.id}
            </div>
          );
        }
        return null;
      })}
    </>
  );
};

export default SearchId;
