//köd för att spela upp piano ljudet

var octave = 0

//för att kunna ändra pitch på piano ljudet
const sampler = new Tone.Sampler({
	urls: {
		"C4": "C4.mp3",
		"D#4": "Ds4.mp3",
		"F#4": "Fs4.mp3",
		"A4": "A4.mp3",
	},
	release: 1,
	baseUrl: "https://tonejs.github.io/audio/salamander/",
}).toDestination();

//Långt och dåligt sätt att ändra oktav
document.addEventListener('keydown', function (event) {
    if (event.key == 'x' && octave != 1) {
        octave += 1
    } else if (event.key == 'z' && octave != -1) {
        octave -= 1
    }
    document.getElementById("relativeOctave").innerHTML = "Relativt oktav: " + octave
    if (event.key == 'a') {
        if (octave == 1) {
            sampler.triggerAttackRelease("c5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("c3", 1);
            return;
        }
        sampler.triggerAttackRelease("c4", 1);
        return;
    } else if(event.key == 'w') {
        if (octave == 1) {
            sampler.triggerAttackRelease("c#5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("c#3", 1);
            return;
        }
        sampler.triggerAttackRelease("c#4", 1);
        return;
    } else if(event.key == 's') {
        if (octave == 1) {
            sampler.triggerAttackRelease("d5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("d3", 1);
            return;
        }
        sampler.triggerAttackRelease("d4", 1);
        return;
    } else if(event.key == 'e') {
        if (octave == 1) {
            sampler.triggerAttackRelease("d#5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("d#3", 1);
            return;
        }
        sampler.triggerAttackRelease("d#4", 1);
        return;
    } else if(event.key == 'd') {
        if (octave == 1) {
            sampler.triggerAttackRelease("e5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("e3", 1);
            return;
        }
        sampler.triggerAttackRelease("e4", 1);
        return;
    } else if(event.key == 'f') {
        if (octave == 1) {
            sampler.triggerAttackRelease("f5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("f3", 1);
            return;
        }
        sampler.triggerAttackRelease("f4", 1);
        return;
    } else if(event.key == 't') {
        if (octave == 1) {
            sampler.triggerAttackRelease("f#5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("f#3", 1);
            return;
        }
        sampler.triggerAttackRelease("f#4", 1);
        return;
    } else if(event.key == 'g') {
        if (octave == 1) {
            sampler.triggerAttackRelease("g5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("g3", 1);
            return;
        }
        sampler.triggerAttackRelease("g4", 1);
        return;
    } else if(event.key == 'y') {
        if (octave == 1) {
            sampler.triggerAttackRelease("g#5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("g#3", 1);
            return;
        }
        sampler.triggerAttackRelease("g#4", 1);
        return;
    } else if(event.key == 'h') {
        if (octave == 1) {
            sampler.triggerAttackRelease("a5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("a3", 1);
            return;
        }
        sampler.triggerAttackRelease("a4", 1);
        return;
    } else if(event.key == 'u') {
        if (octave == 1) {
            sampler.triggerAttackRelease("a#5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("a#3", 1);
            return;
        }
        sampler.triggerAttackRelease("a#4", 1);
        return;
    } else if(event.key == 'j') {
        if (octave == 1) {
            sampler.triggerAttackRelease("b5", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("b3", 1);
            return;
        }
        sampler.triggerAttackRelease("b4", 1);
        return;
    } else if(event.key == 'k') {
        if (octave == 1) {
            sampler.triggerAttackRelease("c6", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("c4", 1);
            return;
        }
        sampler.triggerAttackRelease("c5", 1);
        return;
    } else if(event.key == 'o') {
        if (octave == 1) {
            sampler.triggerAttackRelease("c#6", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("c#4", 1);
            return;
        }
        sampler.triggerAttackRelease("c#5", 1);
        return;
    } else if(event.key == 'l') {
        if (octave == 1) {
            sampler.triggerAttackRelease("d6", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("d4", 1);
            return;
        }
        sampler.triggerAttackRelease("d5", 1);
        return;
    } else if(event.key == 'p') {
        if (octave == 1) {
            sampler.triggerAttackRelease("d#6", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("d#4", 1);
            return;
        }
        sampler.triggerAttackRelease("d#5", 1);
        return;
    } else if(event.key == 'ö') {
        if (octave == 1) {
            sampler.triggerAttackRelease("e6", 1);
            return;
        } else if (octave == -1) {
            sampler.triggerAttackRelease("e4", 1);
            return;
        }
        sampler.triggerAttackRelease("e5", 1);
        return;
    }
});

