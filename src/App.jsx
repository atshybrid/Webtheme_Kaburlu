import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewsSettings } from './redux/util/newsUtils';
import Router from "./router";

function App() {
  const dispatch = useDispatch();
  const settings = useSelector(state => state.news.settings)

  useEffect(() => {
    dispatch(fetchNewsSettings())
  }, [dispatch])

  useEffect(() => {
    if (settings && settings.sitetitle) {
      document.title = settings.sitetitle;
    }

    const updateFavicon = (url) => {
      let link = document.querySelector("link[rel*='icon']") || document.createElement('link');
      link.type = 'image/x-icon';
      link.rel = 'shortcut icon';
      link.href = url;
      document.getElementsByTagName('head')[0].appendChild(link);
    };
    updateFavicon(settings?.favicon_logo);
  }, [settings]);

  return <Router />;
}

export default App;
