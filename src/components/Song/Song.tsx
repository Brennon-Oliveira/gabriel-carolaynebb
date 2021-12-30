import { ChangeEvent, useEffect, useState } from "react";
import "./Song.css";

export default function Song({ song }: { song: string }) {
    const [audio, setAudio] = useState(new Audio());
    const [audioCurrentDuration, setAudioCurrentDuration] = useState(0);
    const [audioPaused, setAudioPaused] = useState(true);
    const [duration, setDuration] = useState(0);
    const [currentAudioTime, setCurrentAudioTime] = useState(
        setInterval(changeInputTime, 1000)
    );

    useEffect(() => {
        let aud = new Audio(song);
        setAudioPaused(audio.paused);
        aud.addEventListener("loadeddata", function () {
            setAudio(aud);
        });
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
        setAudioCurrentDuration(Math.floor(audio.currentTime));
        if (audio.paused) {
            clearInterval(currentAudioTime);
            setAudioPaused(true);
        } else {
            setAudioPaused(false);
        }
    }

    function timeConvert(num: number) {
        if (isNaN(num)) {
            return "0:00";
        }
        var minutes = Math.floor(num / 60);
        var seconds = num % 60;
        return `${minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
    }

    return (
        <div id="Song" className="adjust">
            <button
                onClick={togglePaused}
                className={!audioPaused ? "paused" : ""}
            >
                {!audioPaused ? (
                    <i className="fas fa-pause"></i>
                ) : (
                    <i className="fas fa-play"></i>
                )}
            </button>
            <div className="rangeContainer">
                <input
                    type="range"
                    name="audioTime"
                    className="currentTimeAudio"
                    onChange={changeTime}
                    min={0}
                    value={audioCurrentDuration}
                    max={audio.duration}
                />
            </div>
            <p className="audioTimer">
                {timeConvert(audioCurrentDuration)} /{" "}
                {timeConvert(Math.floor(audio.duration))}
            </p>
        </div>
    );
}
