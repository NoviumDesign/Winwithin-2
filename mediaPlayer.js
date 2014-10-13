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
                      }
                      else
                      {
                       if(typeof audioView != "undefined")
                         { 
                        document.getElementById(audioView).play();
                        custom_AudioMediaPlayer.isPlaying = true;
                        }
                      }
                      },
          pauseAudio:function(audioView){
                     custom_AudioMediaPlayer.isPlayFromView = audioView;
                      if (Ext.os.is('Android') || Ext.os.is('iOS')) {
                         if(custom_AudioMediaPlayer.addPlayer!= null)
                        {
                             // Pause audio
                          custom_AudioMediaPlayer.addPlayer.pause();
                          custom_AudioMediaPlayer.addPlayer = null;
                          custom_AudioMediaPlayer.isPlaying = false;
                        }
                        }
                        else
                        {
                         if(typeof audioView != "undefined" && document.getElementById(audioView))
                         { 
                         document.getElementById(audioView).pause();
                         document.getElementById(audioView).currentTime = 0;
                         }
                         custom_AudioMediaPlayer.isPlaying = false;
                        } 
                     }
    
}

//if (Ext.os.is('Android') || Ext.os.is('iOS')) {