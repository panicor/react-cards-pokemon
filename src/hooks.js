import { useState, useEffect } from "react";
import axios from "axios";

function useFlip(initialFlipState = true) {
  const [isFlipped, setFlipped] = useState(initialFlipState);

  const flip = () => {
    setFlipped(isUp => !isUp);
  };

  return [isFlipped, flip];
}

function useAxios(url){
    let [resp, setResp] = useState([]);

    let addRespData = async () => {
        let response = await axios.get(`${url}`)
        setResp(data => [...data, response.data])
    }

    return [resp, addRespData]
}


export { useFlip, useAxios };