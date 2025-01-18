class MIDIPlayer {
    constructor() {
        this.songs = [
            { title: 'BANG BANG - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180715/bang-bang-raphiphopgangstawestcoastbeatz-149653_optyka.mp3' },
            { title: 'Chill Friend - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180718/chill-friend-raphiphopurbanpodcastintro-149760_gzarij.mp3' },
            { title: 'Pixel Party - AberrantRealities', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180719/pixel-party-218705_xm3m9o.mp3' },
            { title: '8-Bit Fusion - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180720/8-bit-fusion-metalrockskahiphopedm-155165_lk1rff.mp3' },
            { title: 'Space Drama Theme - Chris_Ballard_99', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180724/space-drama-theme-163019_pctsed.mp3' },
            { title: 'Punjab - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180726/punjab-raphiphopfusioneasternethnic-type-beatz-150187_qtulwa.mp3' },
            { title: 'Mabels Quest - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180729/mabels-quest-themevideo-gameoverturecinematicatmosphericpodcast-151821_oiacrt.mp3' },
            { title: 'Unknown Realm - Psychronic', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180732/unknown-realm-147409_jwiva4.mp3' },
            { title: 'Psycho - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180736/psycho-raphiphopwest-coast-vibesbeatzpodcastintro-151295_ljt5ts.mp3' },
            { title: 'Green Grass and High Mountains - der_jonas_da', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180738/green-grass-and-high-mountains-167411_jfobs2.mp3' },
            { title: 'Clockwork Reverie - GamerGang', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180740/gamergang-clockwork-reverie-258506_d7neq8.mp3' },
            { title: 'Echoes of Tomorrow - GamerGang', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180741/gamergang-echoes-of-tomorrow-258508_dzwmjh.mp3' },
            { title: '8-Bit Hip Hop - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180741/8-bit-hip-hop-rapbeatzchiptunevideogamepodcast-153463_wmfxmq.mp3' },
            { title: '2nd Techno in "C" - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180742/2nd-techno-in-c-edmtechnodancetrance-155166_cz1arq.mp3' },
            { title: 'Silent Moments - GamerGang', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180744/gamergang-silent-moments-258504_o971rh.mp3' },
            { title: 'The Robot Orchestra - Roblosfan', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180745/the-robot-ochestra-262773_dbhe9p.mp3' },
            { title: "There's Something About Us - mustafayildirim3496", url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180747/therex27s-something-about-us-174665_gic2aw.mp3' },
            { title: 'Fisherman Groove - plutonians', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180745/fisherman-groove-152034_hzyy3u.mp3' },
            { title: 'Hip Hop 01 - abigailpc94', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180748/hip-hop-01-158869_ofauzk.mp3' },
            { title: 'First Journey - DJ Maverick', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180749/maverik-first-journey-277790_hi44ol.mp3' },
            { title: 'Alien Commandos - Psychronic', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180750/alien-commandos-147564_dmywbm.mp3' },
            { title: 'In the Inn - Lesiakower', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180751/in-the-inn-185048_en3o3q.mp3' },
            { title: 'The Pianist Ant - BusinessStar', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180752/the-pianist-ant-270040_bnfcs5.mp3' },
            { title: 'Hours Pass - GamerGang', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737180753/gamergang-hours-pass-258507_tz0a8u.mp3' },
            { title: 'Fading Years - GamerGang', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181487/gamergang-fading-years-258503_lfzcbv.mp3' },
            { title: 'Midi Menu - AUDIOREZOUT', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181490/midi-menu-cool-electronic-design-beats-8bit-16bit-cinematic-music-192543_aql1yb.mp3' },
            { title: 'Phoenix - BLACK BOX', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181492/black-box-phoenix-123468_fzfqff.mp3' },
            { title: 'Lucid Dream - BLACK BOX', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181492/black-box-lucid-dream-124778_bwg0za.mp3' },
            { title: 'LSDisplaying - BLACK BOX', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181493/black-box-lsdisplaying-135505_uaaske.mp3' },
            { title: 'Ani - BLACK BOX', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181493/black-box-ani-140193_qcp7pg.mp3' },
            { title: 'Frolicking Friends - AberrantRealities', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181499/frolicking-friends-218703_p1ahwv.mp3' },
            { title: 'Sneakerz - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181499/sneakerz-electronictechnoraveedmpodcastintro-151822_dktpvg.mp3' },
            { title: 'Fresh Beatz - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181500/fresh-beatz-hip-hoprappodcastintro-148708_dgobkd.mp3' },
            { title: 'Pixel Mischief - AberrantRealities', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181501/pixel-mischief-208557_hgymxr.mp3' },
            { title: 'Through Time - GamerGang', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181502/gamergang-through-time-258505_htviro.mp3' },
            { title: 'Relax Guy - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181504/relax-guy-podcastintropopelectronichouseedm-148715_xtw73i.mp3' },
            { title: 'My First Techno - thebirdbrand', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181506/my-first-techno-danceedmtranceclubrave-155167_ovebwi.mp3' },
            { title: 'Just a Jolly Jingle - AberrantRealities', url: 'https://res.cloudinary.com/di7ctlowx/video/upload/v1737181506/just-a-jolly-jingle-246163_zlfors.mp3' }
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
        document.getElementById('current-song-title').textContent = this.currentSong.title;
        
        // Create an Audio element instead of using MIDI.js since these are MP3 files
        if (this.audio) {
            this.audio.pause();
            this.audio = null;
        }
        
        this.audio = new Audio(this.currentSong.url);
        this.audio.addEventListener('loadedmetadata', () => {
            console.log('Song loaded');
            this.updateTotalTime();
        });
        
        this.audio.addEventListener('timeupdate', () => {
            if (this.isPlaying) {
                this.progress = this.audio.currentTime / this.audio.duration;
                this.updateProgress();
            }
        });
        
        this.audio.addEventListener('ended', () => {
            this.stop();
        });
    }

    play() {
        if (!this.currentSong) return;
        
        if (!this.isPlaying) {
            this.audio.play();
            this.isPlaying = true;
        }
    }

    pause() {
        if (this.isPlaying) {
            this.audio.pause();
            this.isPlaying = false;
        }
    }

    stop() {
        if (this.audio) {
            this.audio.pause();
            this.audio.currentTime = 0;
        }
        this.isPlaying = false;
        this.progress = 0;
        this.updateProgress();
    }

    seekTo(percentage) {
        if (!this.currentSong || !this.audio) return;
        
        this.audio.currentTime = percentage * this.audio.duration;
        this.updateProgress();
    }

    updateProgress() {
        document.querySelector('.progress').style.width = `${this.progress * 100}%`;
        this.updateCurrentTime();
    }

    updateCurrentTime() {
        const currentTime = document.getElementById('current-time');
        currentTime.textContent = this.formatTime(this.audio.currentTime);
    }

    updateTotalTime() {
        const totalTime = document.getElementById('total-time');
        totalTime.textContent = this.formatTime(this.audio.duration);
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