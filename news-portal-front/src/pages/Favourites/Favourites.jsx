import React, { useEffect } from "react";
import { getNewsLikedByUser } from "../../redux/action";
import { useSelector, useDispatch } from "react-redux";
import Card from "../../components/Card/Card";
import "./Favourites.css";
const Favourites = () => {
  const likedNews = useSelector((state) => state.likedNews);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getNewsLikedByUser());
  }, []);

  return (
    <div className="favourites">
      {likedNews.map((item) => (
        <Card item={item} key={item.news_id} />
      ))}
    </div>
  );
};

export default Favourites;
