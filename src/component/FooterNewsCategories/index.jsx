import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const FooterNewsCategories = () => {
  const settings = useSelector(state => state.news.settings)
  return (
    <>
      <h3 className="widget-title2">News categories</h3>
      {settings?.category_list.map((item, i) => (
        <ul>
          <li>
            <Link to="/">{item.category_name}</Link>
          </li>
        </ul>
      ))}
      {/* <div className="row">
        <div className="col-lg-6">
          <ul>
            <li>
              <Link to="/">Politics</Link>
            </li>
            <li>
              <Link to="/">Business</Link>
            </li>
            <li>
              <Link to="/">TECHNOLOGY</Link>
            </li>
            <li>
              <Link to="/">Science</Link>
            </li>
            <li>
              <Link to="/">Health</Link>
            </li>
            <li>
              <Link to="/">Sports</Link>
            </li>
            <li>
              <Link to="/">Entertainment</Link>
            </li>
          </ul>
        </div>
        <div className="col-lg-6">
          <ul>
            <li>
              <Link to="/">Education</Link>
            </li>
            <li>
              <Link to="/">Obituaries</Link>
            </li>
            <li>
              <Link to="/">Corrections</Link>
            </li>
            <li>
              <Link to="/">Education</Link>
            </li>
            <li>
              <Link to="/">Today’s Paper</Link>
            </li>
            <li>
              <Link to="/">Corrections</Link>
            </li>
            <li>
              <Link to="/">Foods</Link>
            </li>
          </ul>
        </div>
      </div> */}
    </>
  );
};

export default FooterNewsCategories;
