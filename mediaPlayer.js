//Custom Audio Media Player
//
var custom_AudioMediaPlayer = {
    addPlayer:null,
    isPlaying:false,
    isPlayFromView:"",
    playAudio:function(url,audioView){
      custom_AudioMediaPlayer.isPlayFromView = audioView;
      if (Ext.os.is('Android') || Ext.os.is('iOS')) {
        if(Ext.os.is('Android'))
          url = "/android_asset/www/"+url;
          custom_AudioMediaPlayer.addPlayer = new Media(url,
                                     // success callback
            function () { /*alert("playAudio():Audio Success");*/ },
                                     // error callback
            function (err) { /*alert("playAudio():Audio Error: " + err);*/ });
            // Play audio
            custom_AudioMediaPlayer.addPlayer.play();
            custom_AudioMediaPlayer.isPlaying = true;
      }else{
          if(typeof audioView != "undefined"){ 
            document.getElementById(audioView).play();
            custom_AudioMediaPlayer.isPlaying = true;
          }
      }
    },
    pauseAudio:function(audioView){
      custom_AudioMediaPlayer.isPlayFromView = audioView;
      if (Ext.os.is('Android') || Ext.os.is('iOS')) {
          if(custom_AudioMediaPlayer.addPlayer!= null){
             // Pause audio
            custom_AudioMediaPlayer.addPlayer.pause();
            custom_AudioMediaPlayer.addPlayer = null;
            custom_AudioMediaPlayer.isPlaying = false;
          }
      }else{
         if(typeof audioView != "undefined" && document.getElementById(audioView)){ 
            document.getElementById(audioView).pause();
            //document.getElementById(audioView).currentTime = 0;
          }
          custom_AudioMediaPlayer.isPlaying = false;
      } 
      changePauseIcon(audioView);
     }
}

function changePauseIcon(audioView){
  if(audioView=='multiaudio1'){
    var imgs = document.getElementsByName('introPlay');
    for (var iKey in imgs) {
        if (Ext.os.is.Android) {
          imgs[iKey].src = 'resources/images/ic_action_play.png';
        }else{
             imgs[iKey].src = 'resources/images/play.png';
        } 
    } 
  }

  if(audioView=='multiaudio2'){
    var imgs = document.getElementsByName('kap1Play');
    for (var iKey in imgs) {
        if (Ext.os.is.Android) {
          imgs[iKey].src = 'resources/images/ic_action_play.png';
        }else{
             imgs[iKey].src = 'resources/images/play.png';
        }
    }
  }

  if(audioView=='multiaudio3'){
    var imgs = document.getElementsByName('kap2Play');
    for (var iKey in imgs) {
        if (Ext.os.is.Android) {
          imgs[iKey].src = 'resources/images/ic_action_play.png';
        }else{
             imgs[iKey].src = 'resources/images/play.png';
        }
    }
  }

  if(audioView=='multiaudio4'){
    var imgs = document.getElementsByName('kap3Play');
    for (var iKey in imgs) {
        if (Ext.os.is.Android) {
          imgs[iKey].src = 'resources/images/ic_action_play.png';
        }else{
             imgs[iKey].src = 'resources/images/play.png';
        } 
    }
  }

  if(audioView=='multiaudio5'){
    var imgs = document.getElementsByName('avslPlay');
    for (var iKey in imgs) {
        if (Ext.os.is.Android) {
          imgs[iKey].src = 'resources/images/ic_action_play.png';
        }else{
             imgs[iKey].src = 'resources/images/play.png';
        } 
    }
  }

  if(audioView=='multiaudio6'){
    var imgs = document.getElementsByName('kap2form1Play');
    for (var iKey in imgs) {
        if (Ext.os.is.Android) {
          imgs[iKey].src = 'resources/images/ic_action_play.png';
        }else{
             imgs[iKey].src = 'resources/images/play.png';
        }
    }
  }

  if(audioView=='multiaudio7'){
    var imgs = document.getElementsByName('kap3formPlay');
    for (var iKey in imgs) {
        if (Ext.os.is.Android) {
          imgs[iKey].src = 'resources/images/ic_action_play.png';
        }else{
             imgs[iKey].src = 'resources/images/play.png';
        } 
    }
  }
}
//if (Ext.os.is('Android') || Ext.os.is('iOS')) {