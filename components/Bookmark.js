import { useSelector } from 'react-redux';
import styles from '../styles/Bookmark.module.css';
import style from '../styles/Home.module.css';

import {useEffect,useState} from 'react'
import { set } from 'mongoose';



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function Bookmark() {

    let styleP = {}
const [showP,setShowp]  = useState(false)

const articlesBooked = useSelector((state) => state.bookmark.value);

//no duplicate in bookmark



// const fitlered = articlesBooked.filter((article) => article !== null)




    const filteredBookMarkArticles = articlesBooked.map((data,i)=>{  


            // setShowp(true)
        
        return (
    <> 
    <div>                             
     <img src= {data.urlToImage} alt={data.title}></img>
    <div>
    <marquee direction="left">
    <h2>Title : {data.title}</h2>
    </marquee>
      <p>Author : {data.author}</p>
      <p>Description : {data.description} </p>
    </div>
    </div>
         </>
        )
    
    
})


console.log(showP)


if(!filteredBookMarkArticles){

    setShowp(true)

}


    return(
        <>
        <h1 className={styles.title} >Vos bookmarks</h1>
        <div className={style.Container}>
        {filteredBookMarkArticles}
            {/* <p className={styles.paragraph} style={styleP}>Vous n'aviez rien dans vos bookmarks ...</p> */}
        </div>

        </>
    )

}


export default Bookmark 