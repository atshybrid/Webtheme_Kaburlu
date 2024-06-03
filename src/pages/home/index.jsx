import React, { useEffect } from "react";
import PostCarousel from "../../component/PostCarousel";
import PostGallery from "../../component/PostGallery";
import FeatureNews from "../../component/FeatureNews";
import TrendingNews from "../../component/TrendingNews";
import FollowUs from "../../component/FollowUs";
import MostView from "../../component/MostView";
import MixCarousel from "../../component/MixCarousel";
import VideoPost from "../../component/VideoPost";
import EntertainmentNews from "../../component/EntertainmentNews";
import SportsNews from "../../component/SportsNews";
import BusinessNews from "../../component/BusinessNews";
import MostShareWidget from "../../component/MostShareWidget";
import UpcomingMatches from "../../component/UpcomingMatches";
import NewsLetter from "../../component/NewsLetter";
import CategoriesWidget from "../../component/CategoriesWidget";

// images
import banner1 from "../../assets/img/ad/ad-1.png";
import banner2 from "../../assets/img/ad/ad-2.jpg";
import { Link } from "react-router-dom";
import { businessNews, entertainments } from "../../data/entertainments";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllNewsFeed } from "../../redux/util/newsUtils";

function Home() {
  const dispatch = useDispatch();
  const articleFeeds = useSelector(state => state.news.articleFeeds)
  console.log("Article Feed ==>", articleFeeds);

  useEffect(() => {
    dispatch(fetchAllNewsFeed())
  }, [dispatch])

  return (
    <>
      <PostCarousel className="fifth_bg" />
      <PostGallery className="fifth_bg" />
      <FeatureNews />
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <TrendingNews />
          </div>
          <div className="col-md-12 col-lg-4">
            <FollowUs title="Follow Us" />
            <MostView />
          </div>
        </div>
      </div>
      <MixCarousel className="half_bg1" />
      <VideoPost className="pt30 half_bg60" />
      <div className="entertrainments">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="row">
                <div className="col-12">
                  <div className="heading">
                    <h2 className="widget-title">Political News</h2>
                  </div>
                </div>
              </div>
              {/*CAROUSEL START*/}
              <div className="entertrainment_carousel mb30">
                <div className="entertrainment_item">
                  <div className="row justify-content-center">
                    <EntertainmentNews entertainments={articleFeeds?.feeds[0].articles} />
                  </div>
                </div>
              </div>
              {/*CAROUSEL END*/}
              <div className="banner_area mt50 mb60 xs-mt60">
                <Link to="/">
                  <img src={banner1} alt="banner1" />
                </Link>
              </div>
              <SportsNews sports={articleFeeds?.feeds[1].articles} />
              {/* <BusinessNews businessNews={businessNews} /> */}
            </div>
            <div className="col-lg-4">
              <div className="row">
                <div className="col-lg-12">
                  <MostShareWidget title="Most share" />
                </div>
                <div className="col-lg-12">
                  <UpcomingMatches />
                </div>
                <div className="col-lg-12">
                  <NewsLetter />
                </div>
                <div className="col-lg-12">
                  <CategoriesWidget />
                </div>
                <div className="col-lg-12">
                  <div className="banner2 mb30">
                    <Link to="/">
                      <img src={banner2} alt="thumb" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-70" />
    </>
  );
}

export default Home;
