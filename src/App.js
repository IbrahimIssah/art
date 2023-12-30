import React from 'react';
import axios from "axios";
import logo from './logo.svg';
import './App.css';
import { useEffect }  from 'react';

function App() {

  useEffect(() => { 

    // execute side effect
    console.log('title')
},[])

const URL="https://product.gelatoapis.com/v3/catalogs/"
const baseURL ='625739e8-3758-48b1-8407-d5c2a79d70d4-3480122b-c250-4d97-b200-944c80b2d5c1:ea21c4b3-43cd-4e64-85ea-6cd5c25d7d0e'
const baseURLs='625739e8-3758-48b1-8407-d5c2a79d70d4-219f51b5-5c4c-4ab8-ad47-c5d067c44c99:a8d4fcd7-339d-4476-b150-a24b0c16ce13'

const AuthStr = 'Bearer '.concat(baseURLs); 
axios.get(URL, { headers: { Authorization: AuthStr ,
  'Access-Control-Allow-Origin': '*',
  'Content-Type': 'application/json',
  //'Authorization': key,
  withCredentials: true,
  mode: 'no-cors', } })
 .then(response => {
     // If request is good...
     console.log(response.data);
  })
 .catch((error) => {
     console.log('error ' + error);
  });



useEffect(() => {
  axios.get("/jobs" ,
   {
headers:{
 
'x-api-key': baseURLs,

    }}
    ).then((res) => console.log(res.data))
    .catch((err) => console.log(err));
}, []);
/*useEffect(() => {
    axios.get(baseURL).then((response) => {
      //setPost(response.data);
     // console.log(response.data)
    });
  }, []) 
useEffect(() => { 
  // execute side effect
  console.log('title')
},[])

 /* fetch("https://jsonplaceholder.typicode.com/posts/5")
  .then((response) => response.json())
  .then((json) => console.log(json));
*/
  fetch('/search')
  .then((response) => response.json())
  .then((json) => console.log(json)); 





  


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
