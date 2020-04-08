import React, {useState} from 'react';
import './App.css';
import Result from './components/Result';
import axios from 'axios';

function App() {
  const [data, setData] = useState({})
  const [show, setShow] = useState(false)

  async function handleSearch(){
    setShow(false)
    const response = await axios.get('https://www.themealdb.com/api/json/v1/1/random.php');
    setData(response.data.meals[0])
    setShow(true)
  }

  return (
    <div className="App">
      <div className="search">
        <h1>Está triste?</h1>
        <h2>Clique no botão para receber um prato delicioso!</h2>
        <button onClick={()=>{handleSearch()}}>Buscar prato</button>
      </div>
      {show?<Result data={data} />:null}
    </div>
  );
}

export default App;
