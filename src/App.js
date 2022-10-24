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
import DynamicSheetBrand from "./views/DynamicSheet/DynamicSheetBrand";
import DynamicSheetModel from "./views/DynamicSheet/DynamicSheetModel";
import DynamicSheetEngine from "./views/DynamicSheet/DynamicSheetEngine";


function App() {

  const [route, setRoute] = useState([])
  const [articleList, setArticleList] = useState([])
  const [sheetBrand, setSheetBrand] = useState([])
  const [sheetModel, setSheetModel] = useState([])
  const [sheetEnergie, setSheetEnergie] = useState([])


  useEffect(() => {
    TagManager.initialize(process.env.REACT_APP_PROPERTY_UA,{
      debug: false,
      titleCase: false,
      gaOptions: {
        userId: 123,
        siteSpeedSampleRate: 100
      },
    });

    getRoute();
    getArticle();
    getSheetBrand();
    getSheetModel();
    getSheetEngine();
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

  const getSheetModel = ()=>{
    _get('get', 'api/fieldModel', '', '', '')
    .then((res)=>{
      setSheetModel(res.data)
    })
  }

  const getSheetEngine = ()=>{
    _get('get', 'api/fieldEnergy', '', '', '')
    .then((res)=>{
      setSheetEnergie(res.data)
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
            return <Route key={e._id} path={`/sheet/brand/${e._id}`} element={<DynamicSheetBrand _id={e._id} datas={e}/>} />  
        })}
        {sheetModel.map((e)=>{
            return <Route key={e._id} path={`/sheet/model/${e._id}`} element={<DynamicSheetModel _id={e._id} datas={e}/>} />  
        })}
        {sheetEnergie.map((e)=>{
            return <Route key={e._id} path={`/sheet/engine/${e._id}`} element={<DynamicSheetEngine _id={e._id} datas={e}/>} />  
        })}
      </Routes>
      <Footer route={route}></Footer>
    </div>
  );
}

export default App;
