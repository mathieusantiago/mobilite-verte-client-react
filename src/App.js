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
import ViewCardsSheetBrand from "./views/ViewCardsSheet/ViewCardsSheetBrand";
import ViewCardsSheetEngine from "./views/ViewCardsSheet/ViewCardsSheetEngine";
import ViewCardsSheetModel from "./views/ViewCardsSheet/ViewCardsSheetModel";
import DynamicSheet from "./views/DynamicSheet/DynamicSheet";


function App() {

  const [route, setRoute] = useState([])
  const [articleList, setArticleList] = useState([])
  const [sheetBrand, setSheetBrand] = useState([])


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
    getSheetBrand();
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

  const getSheetBrand = ()=>{
    _get('get', 'api/fieldBrand', '', '', '')
    .then((res)=>{
      setSheetBrand(res.data)
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
        <Route path="/cards/sheet/brand" element={<ViewCardsSheetBrand/>} />
        <Route path="/cards/sheet/model" element={<ViewCardsSheetModel/>} />
        <Route path="/cards/sheet/engine" element={<ViewCardsSheetEngine/>} />
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
        {sheetBrand.map((e)=>{
            return <Route key={e._id} path={`/sheet/brand/${e._id}`} element={<DynamicSheet _id={e._id} datas={e}/>} />  
        })}
      </Routes>
      {/* <Footer route={route}></Footer> */}
    </div>
  );
}

export default App;
