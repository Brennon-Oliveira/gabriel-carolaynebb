import { ChangeEvent, useEffect, useState } from "react";
import "./Song.css";

export default function Song({ song }: { song: string }) {
    const [audio, setAudio] = useState(new Audio(song));
    const [audioCurrentDuration, setAudioCurrentDuration] = useState(0);
    const [audioPaused, setAudioPaused] = useState(true);
    const [currentAudioTime, setCurrentAudioTime] = useState(
        setInterval(changeInputTime, 1000)
    );

    useEffect(() => {
        setAudio(new Audio(song));
        setAudioPaused(audio.paused);
    }, []);

    function togglePaused() {
        if (audio.paused) {
            audio.play();
            setCurrentAudioTime(setInterval(changeInputTime, 1000));
        } else {
            audio.pause();
            clearInterval(currentAudioTime);
        }
        setAudioPaused(audio.paused);
    }

    function changeTime(e: ChangeEvent<HTMLInputElement>) {
        setAudioCurrentDuration(+e.target.value);
        clearInterval(currentAudioTime);
        audio.currentTime = +e.target.value;
        setCurrentAudioTime(setInterval(changeInputTime, 1000));
    }

    function changeInputTime() {
        console.log(audio.paused + " --- " + audio.currentTime);
        if (audio.paused) {
            clearInterval(currentAudioTime);
        } else {
            setAudioCurrentDuration(Math.floor(audio.currentTime));
        }
    }

    return (
        <div id="Song">
            <button onClick={togglePaused}>
                {!audioPaused ? (
                    <i className="fas fa-pause"></i>
                ) : (
                    <i className="fas fa-play"></i>
                )}
            </button>
            <div className="rangeContainer">
                <div className="currentTime"></div>
                <input
                    type="range"
                    name="audioTime"
                    onChange={changeTime}
                    min={0}
                    value={audioCurrentDuration}
                    max={audio.duration}
                />
            </div>
        </div>
    );
}
