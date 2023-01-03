import React, { useEffect, useState } from "react";
import "../urlShortner/urlshortener.css";
import useLocalStorage from "../hooks/useLocalStorage";

const UrlShortner = () => {
  // const getData = () => {
  //   const list = localStorage.getItem("urlData");
  // };

  const [userUrl, setUserurl] = useState("");
  const [urlData, setUrlData] = useLocalStorage("urlData", []);
  const [buttonCopy, setButtonCopy] = useState("Copy");
  const [shorten, setShorten] = useState("Shorten");

  console.log(urlData);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userUrl === "") {
      alert("Input is empty");
    } else {
      fetch(`https://api.shrtco.de/v2/shorten?url=${userUrl}`)
        .then((response) => {
          setShorten("Shortening...");
          if (response.ok) {
            return response.json();
          }
          throw response;
        })

        .then((data) => {
          console.log(data.result);
          setUrlData([
            ...urlData,
            {
              id: data.result.code,
              url: data.result.original_link,
              link: data.result.short_link,
            },
          ]);
          setShorten("Shorten");
          setUserurl("");
          console.log(urlData);
        })
        .catch((error) => {
          console.error("Error Fetching :", error);
        });
    }
  };
  const handleCopy = (e) => {
    navigator.clipboard.writeText(e.link);
    setButtonCopy("Copied");
  };

  return (
    <div>
      <div className="formControl">
        <form onSubmit={handleSubmit} className="">
          <input
            placeholder="shorten your link here..."
            onChange={(e) => setUserurl(e.target.value)}
            value={userUrl}
          />
          <button className="shortenBtn">{shorten}</button>
        </form>
      </div>
      {urlData.map((e) => (
        <div className="result" key={e.id}>
          <div className="text-box">
            <h4 style={{ color: "black" }}>{e.url}</h4>
            <div className="list">
              <h4 className="short-text">{e.link}</h4>
            </div>
            <button onClick={() => handleCopy(e)}> {buttonCopy}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UrlShortner;
