import React from 'react'

const NewsItem=(props)=>{
 
    let {title,description,imageUrl,newsUrl,author,date,source}= props;
    return (
      <div className="my-3">
        <div className="card" >
            <div style={{
                display:'flex',
                justifyContent:'flex-end',
                position:'absolute',
                right:'0'
            }}>
        <span className=" badge rounded-pill bg-danger" > {source}</span>
            </div>
                <img src={!imageUrl? "https://cdn.vox-cdn.com/thumbor/wmcXkkBC1rRwDrRnFIDhNnRkjLA=/0x142:1980x1179/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23670395/xiaomi_mi_12s_ultra.jpg":imageUrl} className="card-img-top" alt="..." height="200px"/>
                <div className="card-body">
                    <h5 className="card-title">{title} </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author? author:"Unknown"} on {new Date(date
                    ).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
               
                </div>
        </div>
    </div>
    )
  }


export default NewsItem