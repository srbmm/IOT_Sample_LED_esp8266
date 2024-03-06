import { useEffect, useState } from 'react'
import axios from "axios"
import './App.css'
const baseUrl = "http://185.130.47.157:3000/"
axios.defaults.baseURL = baseUrl;
function App() {
  const [isOn1, setIsOn1] = useState(false)
  const [isLoading1, setIsLoading1] = useState(false);
  const [isOn2, setIsOn2] = useState(false)
  const [isLoading2, setIsLoading2] = useState(false);
  const toggle1 = async () => {
    try{
      setIsLoading1(true)
    const res = await axios.post("/change-lamp1", {value: !isOn1});
    if(res.data) setIsOn1(res.data.value)
  }catch(e){
  console.log(e)
  }
    finally{
      setIsLoading1(false)
    }
  }
  const toggle2 = async () => {
    try{
      setIsLoading2(true)
    const res = await axios.post("/change-lamp2", {value: !isOn2});
    if(res.data) setIsOn2(res.data.value)
  }catch(e){
  console.log(e)
  }
    finally{
      setIsLoading2(false)
    }
  }
  const getLamp1 = async () => {

    try{
      setIsLoading1(true)
      const res = await axios.get("/lamp1");
      if(res.status === 200){
        setIsOn1(!!res.data)
      }
  }catch(e){
  console.log(e)
  }
    finally{
      setIsLoading1(false)
    }
   
  } 
  const getLamp2 = async () => {

    try{
      setIsLoading2(true)
      const res = await axios.get("/lamp2");
      if(res.status === 200){
        setIsOn2(!!res.data)
      }
  }catch(e){
  console.log(e)
  }
    finally{
      setIsLoading2(false)
    }
   
  } 
  useEffect(() => {
    getLamp1()
    getLamp2()
  }, [])
  return (
    <div className="container">
      <div className="led-container">
       <label>Led 1:</label>
     <button className="btn" disabled={isLoading1} onClick={toggle1}>{isOn1 ? "on": "off"}</button>
      </div>
      <div className="led-container">
       <label>Led 2:</label>
     <button className="btn" disabled={isLoading2} onClick={toggle2}>{isOn2 ? "on": "off"}</button>
      </div>
    </div>
  )
}

export default App
