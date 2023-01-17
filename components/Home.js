import styles from '../styles/Home.module.css';
import Header from './Header';


import { useDispatch } from 'react-redux';
import { addToBookmark } from '../reducers/bookmark';

import {useEffect,useState} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Home() {

  let styleSpan = {}
  const [isBookmarked,setIsBookmarked] = useState(false)
  const [articlesData, setArticlesData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://newsapi.org/v2/everything?sources=the-verge&apiKey=${process.env}`)
      .then(response => response.json())
      .then(data => {
        setArticlesData(data.articles);
      });
  }, []);





  const articles = articlesData.map((data,i)=>{


  const addToBk = () => {
  dispatch(addToBookmark(data));





    // }else{
    //   setIsBookmarked(false)
    // }

  };



    return (

      <div>

      <span onClick={()=>{
        addToBk()
      }} className={styles.save}></span>                                   
      <img src= {data.urlToImage} alt={data.title}></img>
      <div>
      <marquee direction="left">
      <h2>Title : {data.title}</h2>
      </marquee>
        <p>Author : {data.author}</p>
        <p>Description : {data.description} </p>
      </div>
    </div>
    )

  })
  return (
    <div>
      <Header/>
      <main className={styles.main}>


        <h1>Soyez à jour de ce qui se passe</h1>

{/* 
        <div className={styles.Layer}>
          <h2>Choisissez le topic qui vous intéresse</h2>

          <ul>
            <li>...</li>
            <li>Tech</li>
            <li>Game</li>
            <li>Pop</li>
            <li>Tech</li>
            <li>Game</li>
            <li>Pop</li>
            <li>Tech</li>
            <li>Game</li>
            <li>Pop</li>
            <li>Tech</li>
            <li>Game</li>
            <li>Pop</li>
            <li>Tech</li>
            <li>Game</li>
            <li>Pop</li>
            <li>Tech</li>
            <li>Game</li>
            <li>Pop</li>
            <li>Tech</li>
            <li>Game</li>
            <li>Pop</li>

          </ul> 
        </div>*/}
        <div className={styles.Container}>


          {articles}
        </div>
      </main>
    </div>

  );
}

export default Home;
