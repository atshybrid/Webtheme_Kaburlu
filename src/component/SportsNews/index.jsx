import React from "react";
import moment from "moment";
import ProtoTypes from "prop-types";
import { Link } from "react-router-dom";
import sportsbig1 from "../../assets/img/sports-news.jpg";
import SportsCarousel from "../SportsCarousel";
import FontAwesome from "../uiStyle/FontAwesome";

const SportsNews = ({ dark, sports }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="sports">
          <div className="row">
            <div className="col-12">
              <div className="heading">
                <h2 className="widget-title">Movie News</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <div className="single_post post_type3 mb30">
                <div className="post_img">
                  <Link to="/">
                    <img src={sports && sports[0].img_url} alt="sportsbig1" />
                  </Link>{" "}
                  <span className="tranding">
                    <FontAwesome name="bolt" />
                  </span>
                </div>
                <div className="single_post_text">
                  <div className="meta3">
                    <Link to="/">MOVIE</Link>
                    <Link to="/">{sports && moment(sports[0].create_time).format('LL')}</Link>
                  </div>
                  <h4>
                    <Link to={`/post1/${sports && sports[0].article_id}`}>
                      {sports && sports[0].title}
                    </Link>
                  </h4>
                  <div className="space-10" />
                  <p className="post-p">
                    The property, complete with 30-seat screening from room, a
                    100-seat amphitheater and a swimming pond with sandy shower…
                  </p>
                  <div className="space-20" />
                  <Link to="/" className="readmore">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="sports_carousel nav_style1">
                <SportsCarousel data={sports} dark={dark ? dark : false} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsNews;

SportsNews.propTypes = {
  dark: ProtoTypes.bool,
  sports: ProtoTypes.array,
};
