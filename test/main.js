function successCallback(stream) {
    document.querySelector('video').srcObject = stream;
    document.querySelector('video').muted = true;
    
    var recorder = RecordRTC(stream, {
     type: 'video'
    });
    recorder.startRecording();
    
    setTimeout(function() {
     recorder.stopRecording(function() {
      var blob = recorder.blob;
      var url = URL.createObjectURL(blob);
      document.querySelector('video').src = url;
      document.querySelector('video').muted = false;
     });
    }, 5 * 1000);
   }
   
   function errorCallback(error) {
    //maybe being used
    alert(error);
   }
   
   var mediaConstraints = { video: true, audio: true };
   
   navigator.mediaDevices.getUserMedia(mediaConstraints).then(successCallback).catch(errorCallback);