//kod för en metronom

var BPM = 100;
var beat = 1;
var timeSig = 4;
var isOn = false;
var myVar;
var myVar2;
var metronomeSound = new Audio('https://raw.githubusercontent.com/Ociione/Piano-website-misc/master/mixkit-on-or-off-light-switch-tap-2585.wav');

setTime(2);

  window.AudioContext = window.AudioContext || window.webkitAudioContext;

  var context = new AudioContext();
  var oscillator = context.createOscillator();
  oscillator.start(0);
  var connected = false;
  oscillator.type = "sawtooth";

  var playpause = function() {
    if (!connected) {
      oscillator.connect(context.destination);
    } else {
      oscillator.disconnect();
    }
    connected = !connected;
  };

// ändrar utseende på metronomen beroende på vad man trycker igång
power.addEventListener("click", function() {
  if (isOn === false) {
    isOn = true;
    power.innerHTML = "STOP";
    power.style.color = "#fff";
    power.style.background = "#f44";
    power.style.border = "solid 1px #f44";
    power.style.boxShadow = "0px 0px 10px #f44";
    start();
  } else if (isOn === true) {
    isOn = false;
    power.innerHTML = "START";
    power.style.color = "#fff";
    power.style.background = "#1e9";
    power.style.border = "solid 1px #1e9";
    power.style.boxShadow = "0px 0px 10px #1e9";
    stop();
  }
})
power.addEventListener("mousemove", function() {
  if (isOn === false) {
    power.style.color = "#fff";
    power.style.background = "#1e9";
    power.style.border = "solid 1px #1e9";
    power.style.boxShadow = "0px 0px 10px #1e9";
  } else if (isOn === true) {
    power.style.color = "#fff";
    power.style.background = "#f44";
    power.style.border = "solid 1px #f44";
    power.style.boxShadow = "0px 0px 10px #f44";
  }
})
power.addEventListener("mouseout", function() {
  power.style.color = "#555";
  power.style.background = "none";
  power.style.border = "solid 1px #555";
  power.style.boxShadow = "0px 0px 0px #1e9";
})

//kollar vilket beat som spelas och ändrar styling på det beatet
//spelar också metronomens ljud
function update() {
  if (isOn == true) {
    metronomeSound.pause();
    metronomeSound.currentTime = 0;
    metronomeSound.play();
    if (beat == 1) {
      beats.style.color = "#1e9";
      document.getElementById("bt1").style.background = "#1e9";
      document.getElementById("bt2").style.background = "#ddd";
      document.getElementById("bt3").style.background = "#ddd";
      document.getElementById("bt4").style.background = "#ddd";
      document.getElementById("bt5").style.background = "#ddd";
      document.getElementById("bt6").style.background = "#ddd";
    } else if (beat == 2) {
      beats.style.color = "#555";
      document.getElementById("bt1").style.background = "#ddd";
      document.getElementById("bt2").style.background = "#555";
      document.getElementById("bt3").style.background = "#ddd";
      document.getElementById("bt4").style.background = "#ddd";
      document.getElementById("bt5").style.background = "#ddd";
      document.getElementById("bt6").style.background = "#ddd";
    } else if (beat == 3) {
      beats.style.color = "#555";
      document.getElementById("bt1").style.background = "#ddd";
      document.getElementById("bt2").style.background = "#ddd";
      document.getElementById("bt3").style.background = "#555";
      document.getElementById("bt4").style.background = "#ddd";
      document.getElementById("bt5").style.background = "#ddd";
      document.getElementById("bt6").style.background = "#ddd";
    } else if (beat == 4) {
      beats.style.color = "#555";
      document.getElementById("bt1").style.background = "#ddd";
      document.getElementById("bt2").style.background = "#ddd";
      document.getElementById("bt3").style.background = "#ddd";
    if (timeSig == 6) {   document.getElementById("bt4").style.background = "#1e9";
    } else {  document.getElementById("bt4").style.background = "#555";
    }
      document.getElementById("bt5").style.background = "#ddd";
      document.getElementById("bt6").style.background = "#ddd";
    } else if (beat == 5) {
      beats.style.color = "#555";
      document.getElementById("bt1").style.background = "#ddd";
      document.getElementById("bt2").style.background = "#ddd";
      document.getElementById("bt3").style.background = "#ddd";
      document.getElementById("bt4").style.background = "#ddd";
        document.getElementById("bt5").style.background = "#555";
      document.getElementById("bt6").style.background = "#ddd";
    } else if (beat == 6) {
      beats.style.color = "#555";
      document.getElementById("bt1").style.background = "#ddd";
      document.getElementById("bt2").style.background = "#ddd";
      document.getElementById("bt3").style.background = "#ddd";
      document.getElementById("bt4").style.background = "#ddd";
      document.getElementById("bt5").style.background = "#ddd";
      document.getElementById("bt6").style.background = "#555";
    }
    beats.innerHTML = beat;
  } else if (isOn == false) {
    beats.innerHTML = "--";
    beats.style.color = "#555";
    document.getElementById("bt1").style.background = "#ddd";
    document.getElementById("bt2").style.background = "#ddd";
    document.getElementById("bt3").style.background = "#ddd";
    document.getElementById("bt4").style.background = "#ddd";
    document.getElementById("bt5").style.background = "#ddd";
    document.getElementById("bt6").style.background = "#ddd";
    clearInterval(myVar);
  }
}

//ändrar metronomens tempo
function setTempo() {
  bpmOut.innerHTML = bpmInput.value + " BPM";
  clearInterval(myVar);
  start();
}

//startar metronomen
function start() {
  myVar = setInterval(count, 60000/bpmInput.value);
}

//stoppar metronomen
function stop() {
  clearInterval(myVar);
  beats.innerHTML = "--";
  beat = 1;
  update();
}


function count() {
  beat = beat + 1;
  if (beat > timeSig) {
    beat = 1;
  }
  update();
}

//olika taktarter
function halfTempo() {
  bpmInput.value = BPM / 2;
  setTempo();
}

function doubleTempo() {
  bpmInput.value = BPM * 2;
  setTempo();
}

//för att kunna ändra tempo
function minusTempo() {
  bpmInput.value = bpmInput.value - 1;
  setTempo();
}

function addTempo() {
  bpmInput.value++;
  setTempo();
}

//olika styling för tonarter
function setTime(x) {
  if (x == 1) {
    time3.style.background = "#f44";
    time3.style.color = "#fff";
    time4.style.background = "#fff";
    time4.style.color = "#ccc";
    time6.style.background = "#fff";
    time6.style.color = "#ccc";
    bt4.style.display = "none";
    bt5.style.display = "none";
    bt6.style.display = "none";
    timeSig = 3;
  } else if (x == 2) {
    time3.style.background = "#fff";
    time3.style.color = "#ccc";
    time4.style.background = "#f44";
    time4.style.color = "#fff";
    time6.style.background = "#fff";
    time6.style.color = "#ccc";
    bt4.style.display = "block";
    bt5.style.display = "none";
    bt6.style.display = "none";
    timeSig = 4;
  } else if (x == 3) {
    time3.style.background = "#fff";
    time3.style.color = "#ccc";
    time4.style.background = "#fff";
    time4.style.color = "#ccc";
    time6.style.background = "#f44";
    time6.style.color = "#fff";
    bt4.style.display = "block";
    bt5.style.display = "table-cell";
    bt6.style.display = "table-cell";
    timeSig = 6;
  }
}

//för eget tempo
function tapTempo() {
  var now = Date.now();
  var delta = now - then;
  bpmInput.value = Math.floor(60000 / delta);

  then = now;
  setTempo();
}

var then = Date.now();