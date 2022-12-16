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
  const [active, setActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userUrl === "") {
      alert("Input is empty");
    } else {
      const shortenLink = () => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${userUrl}`)
          .then((response) => {
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
            // setUrlData(data.result);
            setUserurl("");
            // setUserurl("");
            setActive(true);
            console.log(urlData);
          })
          .catch((error) => {
            console.error("Error Fetching :", error);
          });
      };
      shortenLink();
    }
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(urlData.full_short_link);
    setButtonCopy("Copied");
  };
  // useEffect(() => {
  //   localStorage.setItem(urlData, JSON.stringify("urlData"));
  // }, [urlData]);

  // getData = () => {
  //   const list = localStorage.getItem("urlDat");
  // };

  return (
    <div>
      <div className="formControl">
        <form onSubmit={handleSubmit} className="">
          <input
            placeholder="shorten your link here..."
            onChange={(e) => setUserurl(e.target.value)}
            value={userUrl}
          />
          <button>Shorten It</button>
        </form>
      </div>
      {active &&
        urlData.map((e) => (
          <div className="result">
            <h4 style={{ color: "black" }}>{e.url}</h4>
            <div className="list">
              <h4 className="short-text">{e.link}</h4>
              <button onClick={handleCopy}> {buttonCopy}</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default UrlShortner;
