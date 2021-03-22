import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [activity, setActivity] = useState([]);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    axios.get("http://www.boredapi.com/api/activity/").then((res) => {
      console.log(res);
      setActivity(res.data.activity);
    });
    setTimeout(() => {
      setShouldRender(false);
    }, 8640000);
  }, []);

  function refresh() {
    window.location.reload(false);
  }
  if (!shouldRender) return null;
  return (
    <div className="container">
      <h1 className="title">Getting Bored , Try this !</h1>
      <h1 className="activity">{activity}</h1>
      <button className="refresh" onClick={refresh}>
        Try something else
      </button>
    </div>
  );
};

export default App;
