import React from "react";
import "./advance/advance.css";
import brand from "../images/icon-brand-recognition.svg";
import detailed from "../images/icon-detailed-records.svg";
import fully from "../images/icon-fully-customizable.svg";
import UrlShortner from "../components/urlShortner/urlShortner";

const Advance = () => {
  return (
    <div>
      <section className="page2">
        <UrlShortner />
        <div className="stats-info">
          <div className="box">
            <h2>Advanced Statistics</h2>
            <h4>
              Track how your links are performing in the web with our advanced
              statistics dashboard
            </h4>
          </div>
        </div>
        <div className="about-us">
          <article className="brand">
            <img src={brand} />
            <div className="dets">
              <h3>Brand Recognition</h3>
              <p>
                Boost your brand recognition with each click.Generic link don\'t
                mean a thing.Branded links helps instil confidence in your
                content
              </p>
            </div>
          </article>
          <article className="brand list2">
            <img src={detailed} />
            <div className="dets">
              <h3>Detailed Records</h3>
              <p>
                Gain insights into who is clicking your links.knowing when and
                where people engage with your content helps inform better
                decisions.
              </p>
            </div>
          </article>
          <article className="brand list3">
            <img src={fully} />
            <div className="dets">
              <h3>Fully Customizable</h3>
              <p>
                Improve brand awreness and content diversibility through
                customizable links,supercharging audience engagement.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default Advance;
