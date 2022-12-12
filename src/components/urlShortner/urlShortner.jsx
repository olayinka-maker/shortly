import React, { useState } from 'react'
import '../urlShortner/urlshortener.css'

const UrlShortner = () => {
  const[userUrl,setUserurl] = useState('');
  const[urlData,setUrlData] = useState({})



    const handleSubmit = (e) =>{
        e.preventDefault();
        
        fetch(`https://api.shrtco.de/v2/shorten?url=${userUrl}`)
        .then(response =>{
         if(response.ok){
             return response.json()
         }
         throw response
        })
        .then(data =>{
          setUrlData(data)
         console.log(urlData);
        }).catch(error =>{
         console.error("Error Fetchin :", error)
        })
        console.log('url recived')
        }
        
  return (
    <div>
    <div className='formControl'>
        <form onSubmit={handleSubmit} className=''>
            <input placeholder='shorten your link here...' onChange={(e) => setUserurl(e.target.value)}/>
            <button handleSubmit>Shorten It</button>
        </form>
      
    </div>
    <div>
      {urlData.result ? (
        <p>{urlData.result.share_link}</p>
      ) : (
        <p></p>
      )}
        
      </div>
    </div>
  )
}

export default UrlShortner