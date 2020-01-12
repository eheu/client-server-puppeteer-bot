import React, { useState } from "react";
import ReactDOM from "react-dom";
import { bot } from "../core/bot";

const App = () => {
  const [title, setTitle] = useState("");
  const [browserWSEndpoint, setBrowserWSEndpoint] = useState(
    "ws://127.0.0.1:4000"
  );
  const [url, setUrl] = useState("https://www.google.com/");

  const fetchTitle = async () => {
    const title = await bot.getMarkdown(browserWSEndpoint, url);
    setTitle(title);
  };

  const changeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <div>
      <div className="container">
        <input disabled value={browserWSEndpoint} name="browserWSEndpoint" />
        {/* <input onChange={changeUrl} name="url" /> */}
        <button onClick={fetchTitle}>Hent nye uddannelser 2020</button>
        <button
          onClick={async () =>
            setTitle((await bot.hentOverskriftPaaDR(browserWSEndpoint))!)
          }
        >
          Hent nyhedsoverskrift fra DR
        </button>
        <h1>{title}</h1>

      </div>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
