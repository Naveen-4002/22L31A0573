
    import React, { useState } from "react";
import "./home.css";

const Home = () => {
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");

  const handleShorten = () => {
    if (!url) {
      alert("Please enter a URL!");
      return;
    }
    const shortId = Math.random().toString(36).substring(2, 8);
    const fakeShortUrl = `https://short.ly/${shortId}`;

    setShortUrl(fakeShortUrl);
  };

  return (
    <div className="input-type">
      <h1>URL SHORTENER</h1>

      <input
        type="url"
        placeholder="Enter a URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />

      <div className="button">
        <button onClick={handleShorten}>SHORT ME</button>
      </div>

      {shortUrl && (
        <div>
          <p>Shortened URL:</p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </div>
      )}
    </div>
  );
};

export default Home;
