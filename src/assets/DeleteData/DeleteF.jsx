import axios from "axios";
import React, { useEffect, useState } from "react";

function DeleteF() {
  const [dispay, setDispay] = useState([]);
  const [input, setInput] = useState("");
  const [presponce, setPresponce] = useState([]);
  useEffect(()=> {
    axios.get("http://localhost:3000/").then((res) => setDispay(res.data.datas));
  },[])

  console.log(dispay);
  

  const TextStore = () => {
    const store = {
      value: input,
    };

    axios
      .post("http://localhost:3000/Submit", store)
      .then((res) => setPresponce(prev => [...prev, res.data.text]));
  };
const stores = [];
  function Delete() {
        console.log(stores);
        
    axios.delete("http://localhost:3000/delete", {
      data: { id: stores },
    }).then((res)=> {
        console.log(res.data);
        
    })
  }

  function id(params) {
       
    console.log(params);
    stores.push(params)
    return params
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', maxWidth: '600px', margin: '0 auto', padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
      <div style={{ marginBottom: '20px' }}>
        <input
          onChange={(e) => {
            setInput(e.target.value);
          }}
          type="text"
          placeholder="Enter text"
          style={{ width: '70%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px', marginRight: '10px' }}
        />
        <button onClick={TextStore} style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Submit</button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <button onClick={Delete} style={{ padding: '10px 20px', backgroundColor: '#f44336', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Delete Selected</button>
      </div>
      <div style={{ marginBottom: '20px' }}>
        <h2 style={{ color: '#333' }}>Submitted Texts:</h2>
        {presponce.map((mapping, index) => {
          return (
            <div key={index} style={{ backgroundColor: '#e7f3ff', padding: '10px', margin: '5px 0', borderRadius: '5px' }}>
              <h1 style={{ margin: '0', color: '#007bff' }}>{mapping}</h1>
            </div>
          );
        })}
      </div>
      <div>
        <h2 style={{ color: '#333' }}>Data List:</h2>
        {dispay.map((list) => {
          return (
            <div key={list._id} onClick={() => { id(list._id) }} style={{ backgroundColor: '#fff3cd', padding: '10px', margin: '5px 0', borderRadius: '5px', cursor: 'pointer', border: '1px solid #ffc107' }}>
              <h1 style={{ margin: '0', color: '#856404' }}>{list.value}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default DeleteF;
