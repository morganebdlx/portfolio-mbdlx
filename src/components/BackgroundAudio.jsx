import React, { useRef, useState } from "react";
import "./BackgroundAudio.css";
import guembriAudio from "../assets/music/guembri-100bpm-riffs-48863.mp3";

const BackgroundAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleAudio = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="audio-controller" onClick={toggleAudio}>
      <audio ref={audioRef} src={guembriAudio} loop autoPlay />
      <button className="audio-button" onClick={toggleAudio}>
        {isPlaying ? "Pause musique" : "Jouer musique"}
      </button>
    </div>
  );
};

export default BackgroundAudio;
