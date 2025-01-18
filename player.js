class MIDIPlayer {
    constructor() {
        this.songs = [
            { title: 'Song 1', url: 'path/to/song1.mid' },
            { title: 'Song 2', url: 'path/to/song2.mid' },
            { title: 'Song 3', url: 'path/to/song3.mid' }
        ];
        
        this.currentSong = null;
        this.isPlaying = false;
        this.progress = 0;
        
        this.initializePlayer();
        this.setupEventListeners();
    }

    initializePlayer() {
        this.populateSongList();
        MIDI.loadPlugin({
            soundfontUrl: "./soundfont/",
            instrument: "acoustic_grand_piano",
            onprogress: function(state, progress) {
                console.log(state, progress);
            },
            onsuccess: function() {
                console.log("MIDI.js loaded successfully");
            }
        });
    }

    populateSongList() {
        const select = document.getElementById('song-select');
        this.songs.forEach((song, index) => {
            const option = document.createElement('option');
            option.value = index;
            option.textContent = song.title;
            select.appendChild(option);
        });
    }

    setupEventListeners() {
        document.getElementById('play-btn').addEventListener('click', () => this.play());
        document.getElementById('pause-btn').addEventListener('click', () => this.pause());
        document.getElementById('stop-btn').addEventListener('click', () => this.stop());
        document.getElementById('song-select').addEventListener('change', (e) => this.loadSong(e.target.value));
        
        document.querySelector('.progress-bar').addEventListener('click', (e) => {
            const rect = e.target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const width = rect.width;
            this.seekTo(x / width);
        });
    }

    loadSong(index) {
        if (this.currentSong) {
            this.stop();
        }
        
        this.currentSong = this.songs[index];
        MIDI.Player.loadFile(this.currentSong.url, () => {
            console.log('Song loaded');
            this.updateTotalTime();
        });
    }

    play() {
        if (!this.currentSong) return;
        
        if (!this.isPlaying) {
            MIDI.Player.resume();
            this.isPlaying = true;
            this.startProgressUpdate();
        }
    }

    pause() {
        if (this.isPlaying) {
            MIDI.Player.pause();
            this.isPlaying = false;
        }
    }

    stop() {
        MIDI.Player.stop();
        this.isPlaying = false;
        this.progress = 0;
        this.updateProgress();
    }

    seekTo(percentage) {
        if (!this.currentSong) return;
        
        const time = percentage * MIDI.Player.endTime;
        MIDI.Player.currentTime = time;
        this.updateProgress();
    }

    startProgressUpdate() {
        if (this.progressInterval) {
            clearInterval(this.progressInterval);
        }
        
        this.progressInterval = setInterval(() => {
            if (this.isPlaying) {
                this.progress = MIDI.Player.currentTime / MIDI.Player.endTime;
                this.updateProgress();
            }
        }, 100);
    }

    updateProgress() {
        document.querySelector('.progress').style.width = `${this.progress * 100}%`;
        this.updateCurrentTime();
    }

    updateCurrentTime() {
        const currentTime = document.getElementById('current-time');
        currentTime.textContent = this.formatTime(MIDI.Player.currentTime);
    }

    updateTotalTime() {
        const totalTime = document.getElementById('total-time');
        totalTime.textContent = this.formatTime(MIDI.Player.endTime);
    }

    formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = Math.floor(seconds % 60);
        return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
    }
}

class PlayerCustomizer {
    constructor(player) {
        this.player = player;
        this.setupCustomizationControls();
    }

    setupCustomizationControls() {
        // Color controls
        document.querySelectorAll('input[type="color"]').forEach(input => {
            input.addEventListener('change', () => this.updateColors());
        });

        // Gradient controls
        document.getElementById('enable-gradient').addEventListener('change', (e) => {
            const gradientControls = document.querySelector('.gradient-colors');
            gradientControls.style.display = e.target.checked ? 'block' : 'none';
            this.updateColors();
        });

        // Font controls
        document.getElementById('font-family').addEventListener('change', (e) => {
            document.body.style.fontFamily = e.target.value;
        });

        // Embed code button
        document.getElementById('get-embed-code').addEventListener('click', () => this.showEmbedCode());
        document.getElementById('copy-embed-code').addEventListener('click', () => this.copyEmbedCode());
        document.querySelector('.close-modal').addEventListener('click', () => {
            document.querySelector('.embed-code-modal').style.display = 'none';
        });
    }

    updateColors() {
        const primaryColor = document.getElementById('primary-color').value;
        const secondaryColor = document.getElementById('secondary-color').value;
        const accentColor = document.getElementById('accent-color').value;
        const textColor = document.getElementById('text-color').value;
        const enableGradient = document.getElementById('enable-gradient').checked;

        document.documentElement.style.setProperty('--primary-color', primaryColor);
        document.documentElement.style.setProperty('--secondary-color', secondaryColor);
        document.documentElement.style.setProperty('--accent-color', accentColor);
        document.documentElement.style.setProperty('--text-color', textColor);

        if (enableGradient) {
            const gradientStart = document.getElementById('gradient-start').value;
            const gradientEnd = document.getElementById('gradient-end').value;
            document.body.style.background = `linear-gradient(135deg, ${gradientStart}, ${gradientEnd})`;
        } else {
            document.body.style.background = primaryColor;
        }
    }

    generateEmbedCode() {
        const styles = {
            primaryColor: document.getElementById('primary-color').value,
            secondaryColor: document.getElementById('secondary-color').value,
            accentColor: document.getElementById('accent-color').value,
            textColor: document.getElementById('text-color').value,
            fontFamily: document.getElementById('font-family').value,
            enableGradient: document.getElementById('enable-gradient').checked,
            gradientStart: document.getElementById('gradient-start').value,
            gradientEnd: document.getElementById('gradient-end').value
        };

        return `<iframe 
    src="${window.location.href}?theme=${encodeURIComponent(JSON.stringify(styles))}"
    width="100%"
    height="400"
    frameborder="0"
    style="border-radius: 15px; box-shadow: 0 10px 20px rgba(0,0,0,0.3);"
></iframe>`;
    }

    showEmbedCode() {
        const embedCode = this.generateEmbedCode();
        document.getElementById('embed-code').textContent = embedCode;
        document.querySelector('.embed-code-modal').style.display = 'flex';
    }

    copyEmbedCode() {
        const embedCode = document.getElementById('embed-code').textContent;
        navigator.clipboard.writeText(embedCode).then(() => {
            const copyBtn = document.getElementById('copy-embed-code');
            copyBtn.textContent = 'Copied!';
            setTimeout(() => {
                copyBtn.textContent = 'Copy Code';
            }, 2000);
        });
    }
}

// Initialize both player and customizer when the page loads
window.addEventListener('load', () => {
    const player = new MIDIPlayer();
    const customizer = new PlayerCustomizer(player);

    // Apply theme from URL if present
    const urlParams = new URLSearchParams(window.location.search);
    const theme = urlParams.get('theme');
    if (theme) {
        const styles = JSON.parse(decodeURIComponent(theme));
        // Apply the styles...
        Object.entries(styles).forEach(([key, value]) => {
            const element = document.getElementById(key);
            if (element) {
                element.value = value;
            }
        });
        customizer.updateColors();
    }
}); 