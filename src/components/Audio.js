import React, { useEffect, useState } from 'react';
import '../css/AudioPlayer.css'; // Import your custom CSS for the audio player

const AudioPlayer = ({currentEpisode}) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioSrc, setAudioSrc] = useState(currentEpisode.file);

    const handlePlay = () => {
        setAudioSrc(currentEpisode.file)
        setIsPlaying(true);
    };

    const handlePause = () => {
        setIsPlaying(false);
    };

    return (
        <div className="audio-player-container">
            <div className="audio-controls">
                <div className="play-pause-button" onClick={isPlaying ? handlePause : handlePlay}>
                    <img
                        src={isPlaying ? '/path/to/pause-image.png' : '/path/to/play-image.png'}
                        alt={isPlaying ? 'Pause' : 'Play'}
                        style={{ width: '30px', height: '30px' }}
                    />
                </div>
                <div className="audio-info">
                    {currentEpisode && (
                        <div className="current-episode-info">
                            <p className="episode-title">{currentEpisode.title}</p>
                            <p className="episode-description">{currentEpisode.description}</p>
                        </div>
                    )}
                    <audio controls autoPlay={isPlaying} onPlay={()=>handlePlay} onPause={handlePause}>
                        <source src={audioSrc} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>
        </div>
    );
};

export default AudioPlayer;