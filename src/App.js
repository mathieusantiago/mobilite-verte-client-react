import Home from "./views/Home/Home";
import { Routes, Route } from "react-router-dom";
import DynamicView from "./views/DynamicView/DynamicView";
import "./App.css";
import _get from "./utils/dataUtils";
import { useEffect, useState } from "react";
import _strNoAccent from "./utils/strNoAccent";
import NavBar from './components/BarNav/BarNav'
import Footer from "./components/Footer/Footer";
import TagManager from 'react-ga'
import DynamicArticleView from "./views/DynamicArticle/DynamicArticleView";


function App() {

  const [route, setRoute] = useState([])
  const [articleList, setArticleList] = useState([])


  useEffect(() => {
    TagManager.initialize('UA-245616455-1',{
      debug: false,
      titleCase: false,
      gaOptions: {
        userId: 123,
        siteSpeedSampleRate: 100
      },
    });


    TagManager.pageview(window.location.pathname + window.location.search);

    TagManager.event({
      category: 'Promotion',
      action: 'Displayed Promotional Widget',
      label: 'Homepage Thing',
    });
    getRoute();
    getArticle();
  }, []);

  const getRoute = () => {
    _get("get", "api/categorie", "", "", "").then((res) => {
      setRoute(res.data)
    });
  };

  const getArticle = ()=>{
    _get('get', 'api/article', '', '', '')
    .then((res)=>{
      setArticleList(res.data)
    })
  }

  const clearStr = (str) => {
    str = _strNoAccent(str)
    str = str.split(' ').join('_').toLowerCase();
    return str
  };

  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home articleList={articleList}/>} />
        {route.map((e)=>{
          if (e.categorie_type.length !== 0) {
            return e.categorie_type.map((e)=>{
              return(
                <Route key={e._id} path={`/${clearStr(e.name_type)}`} element={<DynamicView route={clearStr(e.name_type)} Title={e.name_type} Components={clearStr(e.name_type)} articleList={articleList}/>} />  
              )
            })
          }else{
            return <Route key={e._id} path={`/${clearStr(e.categorie_name)}`} element={<DynamicView route={clearStr(e.categorie_name)} Title={e.categorie_name} Components={clearStr(e.categorie_name)} articleList={articleList}/>} />  
          }
        })}
        {articleList.map((e)=>{
              return <Route key={e._id} path={`/article/${e._id}`} element={<DynamicArticleView _id={e._id} article={e}/>} />  
        })}

      </Routes>
      <Footer route={route}></Footer>
    </div>
  );
}

export default App;
