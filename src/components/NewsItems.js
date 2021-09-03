import React from 'react'

const NewsItems =(props)=>{
        let {title,description,imageUrl,newsUrl,date,source,mode}= props //Sending props
        return (
            <div>
                <div className="card">
                    <div style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'2px',top:'2px'}}>
                         <span className=" badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={imageUrl?imageUrl:"https://images.livemint.com/img/2021/08/29/600x338/gold-kNPC--621x414@LiveMint_1630202379761.jpg"} className="card-img-top" alt="..."/>
                    {/* <div className="card-body" style={props.mode==='white'?{backgroundColor:'black'}:{backgroundColor:'white'}}> */}
                    <div className="card-body" style={mode==='white'?{backgroundColor:'white',color:'black'}:{backgroundColor:'black',color:'white'}}>
                   
                      
                        <h5 className="card-title" >{title}</h5>
                        <p className="card-text">{description}</p>
                        <p>On {new Date(date).toGMTString()}</p>
                        <a href={newsUrl} target="_blank" rel="noreferrer" className={`btn btn-${mode==='white'?'dark':'primary'}`}>Read More</a>
                    </div>
                </div>
            </div>
        )
    
}

export default NewsItems
// props.mode==='light'?'dark':'light'

