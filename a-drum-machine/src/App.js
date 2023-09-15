import "./styles.css";

function App() {
  function playSounds() {
    console.log(playSounds);
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display"></div>
        <button id="heater-1" className="drum-pad">
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
            className="clip"
            id="Q"
          ></audio>
          Q
        </button>
        <button id="heater-2" className="drum-pad">
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
            className="clip"
            id="W"
          ></audio>
          W
        </button>
        <button id="heater-3" className="drum-pad">
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
            className="clip"
            id="E"
          ></audio>
          E
        </button>
        <button id="heater-4" className="drum-pad">
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
            className="clip"
            id="A"
          ></audio>
          A
        </button>
        <button id="clap" className="drum-pad">
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
            className="clip"
            id="S"
          ></audio>
          S
        </button>
        <button id="open-hh" className="drum-pad">
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
            className="clip"
            id="D"
          ></audio>
          D
        </button>
        <button id="kick-n-hat" className="drum-pad">
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
            className="clip"
            id="Z"
          ></audio>
          Z
        </button>
        <button id="kick" className="drum-pad">
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
            className="clip"
            id="X"
          ></audio>
          X
        </button>
        <button id="closed-hh" className="drum-pad">
          <audio
            src="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
            className="clip"
            id="C"
          ></audio>
          C
        </button>
      </div>
    </div>
  );
}

export default App;
