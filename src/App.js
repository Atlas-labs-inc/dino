import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";
import ChromeDinoGame from 'react-chrome-dino';
import dino1 from './dino1.png';
import dinopink from './dinopink.png';
import dinoblue from './dinoblue.png';
import dinogold from './dinogold.png';



const ChangeNFT = ({ idMessage }) => {
  idMessage = "Change Player Skin"
  // create state `open` with default as false
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* click of button toggles `open` value therefore visibility */}
      <button
        onClick={() => setOpen(!open)}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${idMessage}`}
      >
        {idMessage}
      </button>
      {/* If open is true show your <div /> */}
      {open && (
        <div
          style={{paddingTop: '15px', }}

          className="modal fade"
          id={idMessage}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          Owned NFTs
          <div style={{paddingTop: '15px', }}>
            <img width="200px" src={dino1} />
            <img width="200px" src={dinopink} />
            <img width="200px" src={dinoblue} />
            <img width="200px" src={dinogold} />
          </div>
        </div>
      )}
    </>
  );
};

const MintNFT = ({ idMessage }) => {
  idMessage = "Mint NFT to User"
  // create state `open` with default as false
  const [open, setOpen] = useState(false);
  return (
    <>
      {/* click of button toggles `open` value therefore visibility */}
      <button
        paddingRight="20px"
        onClick={() => setOpen(!open)}
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target={`#${idMessage}`}
      >
        {idMessage}
      </button>
      {/* If open is true show your <div /> */}
      {open && (
        <div
          className="modal fade"
          id={idMessage}
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          
        </div>
      )}
    </>
  );
};



function App() {
  return (
    <div className="App">
      <h2>Play-To-Earn Dinosour Game</h2>
      <br></br>
      <h1
        style={{
          position: "absolute",
          backgroundColor: "white",
          maxWidth: "620px",
          maxHeight: "160px",
          top: 300,
          left: 590,
          right: 50,
          bottom: 0,
          justifyContent: "center",
          alignItems: "center",
        }}
        ></h1>
      <div style={{paddingBottom: "10px"}}>
        <span style={{fontWeight: 'bold'}}>Player Address:</span>
        <span style={{paddingRight: "20px"}}> 0xf0dce122d8c011987bd41b9642fc561546566c00</span>
        <MintNFT/>
      </div>
      <></>
      <ChromeDinoGame />
      <ChangeNFT/>
    </div>
  );
}

export default App;