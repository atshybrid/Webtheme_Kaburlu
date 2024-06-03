import React from "react";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import moment from "moment";

const EntertainmentNews = ({ entertainments }) => {
  console.log("Entertainments ==>", entertainments);
  return (
    <>
      {entertainments?.slice(0, 4).map((item, i) => (
        <div key={i} className="col-lg-6">
          <div className="single_post post_type3 mb30">
            <div className="post_img">
              <div className="img_wrap" style={{ maxHeight: 200 }}>
                <Link to="/">
                  <img src={item.img_url} alt="thumb" />
                </Link>
              </div>
            </div>
            <div className="single_post_text">
              <div className="meta3">
                <Link to="/">POLITOCAL</Link>
                <Link to="/">{moment(item.create_time).format('LL')}</Link>
              </div>
              <h4>
                <Link to={`/post1/${item.article_id}`}>{item.title}</Link>
              </h4>
              <div className="space-10" />
              <p className="post-p">{item.body}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default EntertainmentNews;

EntertainmentNews.propTypes = {
  entertainments: ProtoTypes.array,
};
