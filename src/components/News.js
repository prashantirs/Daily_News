import React, {useEffect,useState} from "react"; //rce--> React class based components
import NewsItems from "./NewsItems";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";



const News =(props)=> {
  //React Hooks useState,useEffect only used in function based components
  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  

 const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  
  const  updateNews = async() => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(80);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter( props.category)} -Daily News`;
    updateNews();
     // eslint-disable-next-line
  }, [])

 const fetchMoreData = async () => {  
   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page+1)
    let data = await fetch(url);
    let parsedData = await data.json()
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    
  };

  
    return (
      <>
        <h1 className="text-center" style={props.mode==='white'?{color:'black',margin: "35px 0px",marginTop:'90px'}:{color:'white',margin: "35px 0px",marginTop:'90px'}} >
          Daily News From - {capitalizeFirstLetter(props.category)}
        </h1>
        {loading && <Spinner />}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row">
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-2" key={element.url}>
                    <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} source={element.source.name} mode={props.mode}/>
                  </div>
                );
              })}
              ;
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  
}

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
