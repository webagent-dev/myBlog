import React, { useEffect } from 'react'
import style from '../style/new.module.css'
import data from '../features/data'
import axios from 'axios'
import { selectInput, setData, setLoading, selectLoading,selectData  } from '../features/dataSlice'
import { useSelector, useDispatch } from 'react-redux'
// const URL  = "https://gnews.io/api/v4/search?q=example&token=API-Token"

function News() {
    const dispatch = useDispatch()
    const searchInput = useSelector(selectInput)
    const loading = useSelector(selectLoading)
    const data = useSelector(selectData)
    const getData = () => {
        axios.get(`https://gnews.io/api/v4/search?q=${searchInput}&token=c653c077e7633b4b2d5a8769b2dcbfec`)
        .then((res) => {
           if(res.data){
                dispatch(setData(res.data))  
                dispatch(setLoading(false))
            }
            
        }).catch((err) => alert(err.message))
    }
    useEffect(() => {
        getData()
    },[searchInput])
    return(
        
 <>
{ 
    loading
    ?
  <h1>Loading...</h1>
    :
    <>
    <div className={style.container}>
     {
         data.article.map((item) => {
             const { title, news, id, image } = item
             return(
                 <div className={style.news} key={id}>
                      <img src={} alt='new_pic' className={style.news__image}/>
                        <h2>{}</h2>
                         <p>{}</p>
                 </div>
             )
         })
     }
    </div>
    <section className={style.overlay__1}></section>
    <section className={style.overlay__2}></section>
    </>
        }
</>
    )
}

export default News
