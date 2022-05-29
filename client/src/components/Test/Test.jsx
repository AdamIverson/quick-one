import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Test() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    callAPI();
  }, []);

  function callAPI() {
    console.log('in callAPI()');
    axios({
      method: "GET",
      url: "/api/test",
    })
      .then((response) => {
        console.log('response.data:', response.data);
        console.log('response.status:', response.status);
        console.log('response.header:', response.header);
        setImages(response.data);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);
        console.log(err.request);
        // console.log(err.headers);
      });
  }

  return <ul>
    <li>GOLF</li>
  </ul>;
}
