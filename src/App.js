import { useEffect } from "react";
import "./styles.css";

function App() {
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  const handleKeyPress = (keys) => {
    drumPads.forEach((key) => {
      if (keys.keyCode === key.keyCode) {
        playSounds(key.text);
      }
    });
  };

  const drumPads = [
    {
      keyCode: 81,
      text: "Q",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3",
      name: "Heater 1",
    },
    {
      keyCode: 87,
      text: "W",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3",
      name: "Heater 2",
    },
    {
      keyCode: 69,
      text: "E",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3",
      name: "Heater 3",
    },
    {
      keyCode: 65,
      text: "A",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3",
      name: "Heater 4",
    },
    {
      keyCode: 83,
      text: "S",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3",
      name: "Clap",
    },
    {
      keyCode: 68,
      text: "D",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3",
      name: "Open HH",
    },
    {
      keyCode: 90,
      text: "Z",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3",
      name: "Kick n' Hat",
    },
    {
      keyCode: 88,
      text: "X",
      src: "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3",
      name: "Kick",
    },
    {
      keyCode: 67,
      text: "C",
      src: "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3",
      name: "Closed HH",
    },
  ];

  function playSounds(selector) {
    const audio = document.getElementById(selector);

    if (selector === "q".toUpperCase()) {
      document.getElementById("display").innerHTML = drumPads[0].name;
    }
    if (selector === "w".toUpperCase()) {
      document.getElementById("display").innerHTML = drumPads[1].name;
    }
    if (selector === "e".toUpperCase()) {
      document.getElementById("display").innerHTML = drumPads[2].name;
    }
    if (selector === "a".toUpperCase()) {
      document.getElementById("display").innerHTML = drumPads[3].name;
    }
    if (selector === "s".toUpperCase()) {
      document.getElementById("display").innerHTML = drumPads[4].name;
    }
    if (selector === "d".toUpperCase()) {
      document.getElementById("display").innerHTML = drumPads[5].name;
    }
    if (selector === "z".toUpperCase()) {
      document.getElementById("display").innerHTML = drumPads[6].name;
    }
    if (selector === "x".toUpperCase()) {
      document.getElementById("display").innerHTML = drumPads[7].name;
    }
    if (selector === "c".toUpperCase()) {
      document.getElementById("display").innerHTML = drumPads[8].name;
    }

    var playPromise = audio.play();
    if (playPromise !== undefined) {
      playPromise
        .then((_) => {
          // Automatic playback started!
          // Show playing UI.
        })
        .catch((error) => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  }

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="display">Press Keys</div>
        <div className="drum-pads">
          {drumPads.map((drumPad) => (
            <button
              onClick={() => playSounds(drumPad.text)}
              className="drum-pad"
              id={drumPad.src}
              key={drumPad.src}
            >
              {drumPad.text}
              <audio
                className="clip"
                id={drumPad.text}
                src={drumPad.src}
              ></audio>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
