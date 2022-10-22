
Webcam.set({
Width:350,
height:300,
image_format:'png',
png_quality:90
});

camera=document.getElementById("camera");

Webcam.attach("#camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri){
document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log('ml5 version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/2sXbxdb9J/model.json',modelLoaded  )
function modelLoaded(){
console.log('Model Loaded');
}

function speak(){
var synth = windo.speechSynthesis;
speak_data_ = toSpeak;
var utterThis = new SpeechSynthesisUtterance(speak_data);
synth.speak(utterThis);
}

function check(){
    img=document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}
function gotResult(error, results) {
    if (error) {
      console.error(error);
    } else {
      console.log(results);
      document.getElementById("result_object_name").innerHTML = results[0].label;
      gesture= results[0].label;
      toSpeak = "";
      if(getsure=='amazing')
      {
          toSpeak="This is looking amazing" ;
          document.getElementById("result_object_gesture_icon").innerHTML="&#128076;";
      }
      if(getsure=='amazing')
      {
          toSpeak="All the best" ;
          document.getElementById("result_object_gesture_icon").innerHTML="&#128077;";
      }
      if(getsure=='amazing')
      {
          toSpeak="That was a marvelous victory" ;
          document.getElementById("result_object_gesture_icon").innerHTML="&#9996;";
      }
      speak();
    }
  }

