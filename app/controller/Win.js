Ext.define("WinWithin.controller.Win", {
    extend: "Ext.app.Controller",
    requires: [
        'Ext.Menu'
    ],
    config: {
        refs: {
            // lookup views by xtype
            main         : "main",
            introduktion : 'introduktion',
            kapitel1     : 'kapitel1',
            kapitel2     : 'kapitel2',
            kapitel3     : 'kapitel3',
            avslutning   : 'avslutning',
            utmaningar   : 'utmaningar',
            kapitel1form : 'kapitel1form',
            kapitel2form1 : 'kapitel2form1',
            kapitel2form2 : 'kapitel2form2',
            kapitel3form : 'kapitel3form',
            nyutmaning: 'nyutmaning'
        },
        control: {
            // Events in main
            main: {
                avtal: 'avtal'
            },
            introduktion: {
                menuToggle: 'menuToggle',
                play: 'playIntroduktion'
            },
            kapitel1: {
                menuToggle: 'menuToggle',
                gotoNegTank: 'gotoNegTank',
                play: 'playKapitel1'
            },
            kapitel2: {
                menuToggle   : 'menuToggle',
                gotoBevis    : 'gotoBevis',
                gotoRelevant : 'gotoRelevant',
                play: 'playKapitel2'
            },
            kapitel3: {
                menuToggle: 'menuToggle',
                gotoProblem: 'gotoProblem',
                play: 'playKapitel3'
            },
            avslutning: {
                menuToggle: 'menuToggle',
                play: 'playAvslutning'
            },
            utmaningar: {
                /*menuToggle: 'menuToggle',*/
                gotoEdit: 'gotoEdit',
                newChallange: 'newChallange',
                backToUtmaningar: 'backToUtmaningar'
            },
            kapitel1form: {
                back: 'backToKapitel1',
                saveNegtankCommand: 'saveNegtankCommand',
                deleteNegtankCommand: 'deleteNegtankCommand'
            },
            kapitel2form1: {
                saveRelElGrund : 'saveRelElGrund',
                deleteRelevantCommand: 'deleteRelevantCommand'

            },
            kapitel2form2: {
                saveBevis: 'saveBevis',
                deleteBevis: 'deleteBevis',
                play: 'playChallenge22'
            },
            kapitel3form: {
                saveProblem: 'saveProblem',
                deleteProblemCommand: 'deleteProblemCommand',
                play: 'playChallenge3'
            },
            nyutmaning: {
                menuToggle: 'menuToggle',
                gotoNewChallange: 'gotoNewChallange',
                /*backToUtmaningar: 'backToUtmaningar'*/
            }


        }
    },
    getRandomInt: function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    },

    menuToggle: function () {
      
        Ext.Viewport.toggleMenu('left');
    },
      stopAllPlay: function() {
        if (typeof custom_AudioMediaPlayer != '') {
             custom_AudioMediaPlayer.pauseAudio(custom_AudioMediaPlayer.isPlayFromView);
         } else {
          if(custom_AudioMediaPlayer.isPlaying)
          {
            custom_AudioMediaPlayer.pauseAudio(custom_AudioMediaPlayer.isPlayFromView);
          }
             // Introduktion
            if(custom_AudioMediaPlayer.isPlayFromView =="multiaudio1") {
                var imgs = document.getElementsByName('introPlay');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
                
                //document.getElementById('multiaudio1').currentTime = 0;
            }
           // Kapitel 1
            if(custom_AudioMediaPlayer.isPlayFromView =="multiaudio2") {
                var imgs = document.getElementsByName('kap1Play');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
                  
            }
            // Kapitel 2
            if(custom_AudioMediaPlayer.isPlayFromView =="multiaudio3") {
                var imgs = document.getElementsByName('kap2Play');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
              
            }
            // Kapitel 3
            if(custom_AudioMediaPlayer.isPlayFromView =="multiaudio4" ){
                var imgs = document.getElementsByName('kap3Play');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
            
            }
            // Avslutning
            if(custom_AudioMediaPlayer.isPlayFromView =="multiaudio5"){
                var imgs = document.getElementsByName('avslPlay');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
                
            }
            // Kapitel 2 utmaning
            if(custom_AudioMediaPlayer.isPlayFromView =="multiaudio6"){
                var imgs = document.getElementsByName('kap2form1Play');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
           
            }
            // Kapitel 3 utmaning
           if(custom_AudioMediaPlayer.isPlayFromView =="multiaudio7"){
                var imgs = document.getElementsByName('kap3formPlay');
                for (var iKey in imgs) {
                    imgs[iKey].src = 'resources/images/play.png';
                }
            }
            // Jingel
           if(custom_AudioMediaPlayer.isPlayFromView =="multiaudio8") {
                custom_AudioMediaPlayer.pauseAudio('multiaudio8');
            }
        }
    },
    playIntroduktion: function () {
        if(custom_AudioMediaPlayer.isPlaying) {
            // Playing
            var imgs = document.getElementsByName('introPlay');
            for (var iKey in imgs) {
                  if (Ext.os.is.Android) {
                     imgs[iKey].src = 'resources/images/ic_action_play.png';
                       }else{          
                           imgs[iKey].src = 'resources/images/play.png';
            }
	}
             custom_AudioMediaPlayer.pauseAudio("multiaudio1");
        } else {
            // Not playing
            var imgs = document.getElementsByName('introPlay');
            for (var iKey in imgs) {
 		if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_pause.png';
                }else{
                     imgs[iKey].src = 'resources/images/paus.png';
                } 
            }
            custom_AudioMediaPlayer.playAudio("resources/audio/introduktion.mp3","multiaudio1");
         
        }
    },
    playKapitel1: function() {
        // kap1Play
        if(custom_AudioMediaPlayer.isPlaying) {
            // Playing
            var imgs = document.getElementsByName('kap1Play');
            for (var iKey in imgs) {
		if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_play.png';
                }else{
                     imgs[iKey].src = 'resources/images/play.png';
                }
            }               
             custom_AudioMediaPlayer.pauseAudio("multiaudio2");
        } else {
            // Not playing
            var imgs = document.getElementsByName('kap1Play');
            for (var iKey in imgs) {
            if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_pause.png';
                }else{
                     imgs[iKey].src = 'resources/images/paus.png';
                } 
            }            custom_AudioMediaPlayer.playAudio("resources/audio/kapitel1.mp3","multiaudio2");
        }
    },
    playKapitel2: function (){
        // kap2Play
        if(custom_AudioMediaPlayer.isPlaying) {
            // Playing
            var imgs = document.getElementsByName('kap2Play');
            for (var iKey in imgs) {
               if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_play.png';
                }else{
                     imgs[iKey].src = 'resources/images/play.png';
                } 
            }
            
            custom_AudioMediaPlayer.pauseAudio("multiaudio3");
        } else {
            // Not playing
            var imgs = document.getElementsByName('kap2Play');
            for (var iKey in imgs) {
               if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_pause.png';
                }else{
                     imgs[iKey].src = 'resources/images/paus.png';
                } 
            }
            custom_AudioMediaPlayer.playAudio("resources/audio/kapitel2.mp3","multiaudio3");
        }
    },
    playChallenge22: function() {
        // kap2form1Play
        if(custom_AudioMediaPlayer.isPlaying) {
            // Playing
            var imgs = document.getElementsByName('kap2form1Play');
            for (var iKey in imgs) {
if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_play.png';
                }else{
                     imgs[iKey].src = 'resources/images/play.png';
                }
            }
             custom_AudioMediaPlayer.pauseAudio("multiaudio6");
        } else {
            // Not playing
            var imgs = document.getElementsByName('kap2form1Play');
            for (var iKey in imgs) {
 if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_pause.png';
                }else{
                     imgs[iKey].src = 'resources/images/paus.png';
                } 
            }
            custom_AudioMediaPlayer.playAudio("resources/audio/utmaning1.mp3","multiaudio6");
        }
    },
    playKapitel3: function() {
        // kap3Play
        if(custom_AudioMediaPlayer.isPlaying) {
            // Playing
            var imgs = document.getElementsByName('kap3Play');
            for (var iKey in imgs) {
               if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_play.png';
                }else{
                     imgs[iKey].src = 'resources/images/play.png';
                }
            }              custom_AudioMediaPlayer.pauseAudio("multiaudio4");
        } else {
            // Not playing
            var imgs = document.getElementsByName('kap3Play');
            for (var iKey in imgs) {
             if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_pause.png';
                }else{
                     imgs[iKey].src = 'resources/images/paus.png';
                } 
            }
           custom_AudioMediaPlayer.playAudio("resources/audio/kapitel3.mp3","multiaudio4");
           
        }
    },
    playChallenge3: function() {
        // kap3formPlay
        if(custom_AudioMediaPlayer.isPlaying) {
            // Playing
            var imgs = document.getElementsByName('kap3formPlay');
            for (var iKey in imgs) {
             if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_play.png';
                }else{
                     imgs[iKey].src = 'resources/images/play.png';
                }
            }            custom_AudioMediaPlayer.pauseAudio("multiaudio7");
        } else {
            // Not playing
            var imgs = document.getElementsByName('kap3formPlay');
            for (var iKey in imgs) {
if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_pause.png';
                }else{
                     imgs[iKey].src = 'resources/images/paus.png';
                } 
            }
           custom_AudioMediaPlayer.playAudio("resources/audio/utmaning2.mp3","multiaudio7");
        }
    },
    playAvslutning: function() {
        // avslPlay
        if(custom_AudioMediaPlayer.isPlaying) {
            // Playing
            var imgs = document.getElementsByName('avslPlay');
            for (var iKey in imgs) {
 if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_play.png';
                }else{
                     imgs[iKey].src = 'resources/images/play.png';
                }
            }            custom_AudioMediaPlayer.pauseAudio("multiaudio5");
        } else {
            // Not playing
            var imgs = document.getElementsByName('avslPlay');
            for (var iKey in imgs) {
             if (Ext.os.is.Android) {
                  imgs[iKey].src = 'resources/images/ic_action_pause.png';
                }else{
                     imgs[iKey].src = 'resources/images/paus.png';
                } 
            }
           custom_AudioMediaPlayer.playAudio("resources/audio/slutord.mp3","multiaudio5");
        }
    },
    avtal: function(){
        var now = new Date();
        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
        var record = Ext.create("WinWithin.model.Avtal", {
            id: noteId,
            dateCreated: now
        });
        record.set('godkann', 'true');
        var notesStore = Ext.getStore("Avtal");
        if (null == notesStore.findRecord('id', record.data.id)) {
            notesStore.add(record);
        }
        notesStore.sync();
        Ext.Viewport.setActiveItem(this.getIntroduktion());
    },
    gotoEdit: function() {
       
        if (arguments[1] && arguments[1].hasOwnProperty('data')) {
            var record = arguments[1].data.record;
            switch(arguments[1].data.action) {
                case 'gotoNegTank': 
                    var kapitel1form = this.getKapitel1form();
                    kapitel1form.backEvent = 'backToUtmaningar';
                    this.gotoNegTank(record); 
                    break;
                case 'gotoBevis':
                    var kapitel2form2 = this.getKapitel2form2();
                    kapitel2form2.backEvent = 'backToUtmaningar';
                    this.gotoBevis(record); 
                    break;
                case 'gotoRelevant':
                    var kapitel2form1 = this.getKapitel2form1();
                    kapitel2form1.backEvent = 'backToUtmaningar';
                    this.gotoRelevant(record); 
                    break;
                case 'gotoProblem':
                    var kapitel3form = this.getKapitel3form();
                    kapitel3form.backEvent = 'backToUtmaningar';
                    this.gotoProblem(record);
                    break;
            }
        } 
    },
    newChallange: function(record) {
        
        /*var nyutmaning = this.getNyutmaning();
        Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'left' });*/
      
        this.stopAllPlay.call(this);
        var getcategory=Ext.getCmp('selectCategory').getValue();

        switch(getcategory) {
            case 'Negativa tankar och känslor': 
                    var kapitel1form = this.getKapitel1form();
                    if (!record.hasOwnProperty('internalId')) {
                        var now = new Date();
                        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

                        var record = Ext.create("WinWithin.model.Negtank", {
                            id: noteId,
                            dateCreated: now,
                            namnge: '',
                            negativtanke: '',
                            obehaglig: ''
                        });
                    }
                    kapitel1form.setRecord(record);
                    kapitel1form.updateWithForm();
                    Ext.Viewport.animateActiveItem(kapitel1form, {type:'slide', direction:'left'});
                break;
            case 'Bevis för och emot':
                    var kapitel2form2 = this.getKapitel2form2();
                    if (!record.hasOwnProperty('internalId')) {
                        var now = new Date();
                        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();
                        var record = Ext.create("WinWithin.model.Bevis", {
                            id: noteId,
                            dateCreated: now,
                            namnge: '',
                            negTanke: '',
                            relBevis: [],
                            grundBevis: [],
                            relElGrund: undefined
                        });
                    }
                    kapitel2form2.setRecord(record);
                    kapitel2form2.updateWithForm();
                    Ext.Viewport.animateActiveItem(kapitel2form2, {type:'slide', direction:'left'});
                break;
            case 'Relevant eller grundlös tanke':
                    var kapitel2form1 = this.getKapitel2form1();

                    if (!record.hasOwnProperty('internalId')) {
                        var now = new Date();
                        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

                        var record = Ext.create("WinWithin.model.Relevant", {
                            id: noteId,
                            dateCreated: now,
                            fields: [{
                                namnge: '',
                                negTanke: '',
                                relElGrund: undefined
                            }]
                        });
                    }
                    
                    kapitel2form1.setRecord(record);
                    kapitel2form1.updateWithForm();
                    Ext.Viewport.animateActiveItem(kapitel2form1, {type:'slide', direction:'left'});
                break;
            case 'Problemlösning':
                    var kapitel3form = this.getKapitel3form();

                    if (!record.hasOwnProperty('internalId')) {
                        var now = new Date();
                        var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

                        var record = Ext.create("WinWithin.model.Problem", {
                            id: noteId,
                            dateCreated: now,
                            beskriv: '',
                            forslag: [],
                            vald: undefined
                        });
                    }
                    
                    kapitel3form.setRecord(record);
                    kapitel3form.updateWithForm();
                    Ext.Viewport.animateActiveItem(kapitel3form, {type:'slide', direction:'left'});
                break;
        }


        
    },
    gotoNewChallange: function() {
      
        if (arguments[1] && arguments[1].hasOwnProperty('data')) {
            var chall = arguments[1].data.namnge; 
            Ext.getCmp('selectCategory').setValue(chall);          
            switch(chall) {
                case 'Negativa tankar och känslor':
                    var kapitel1form = this.getKapitel1form();
                    kapitel1form.backEvent = 'backToNyUtm';
                    this.gotoNegTank({});
                    break;
                case 'Bevis för och emot':
                    var kapitel2form2 = this.getKapitel2form2();
                    kapitel2form2.backEvent = 'backToNyUtm';
                    this.gotoBevis({});
                    break;
                case 'Relevant eller grundlös tanke':
                    var kapitel2form1 = this.getKapitel2form1();
                    kapitel2form1.backEvent = 'backToNyUtm';
                    this.gotoRelevant({}); 
                    break;
                case 'Problemlösning':
                    var kapitel3form = this.getKapitel3form();
                    kapitel3form.backEvent = 'backToNyUtm';
                    this.gotoProblem({});
                    break;
            }
        }
    },
    gotoIntroduktion: function() {
        this.stopAllPlay.call(this);

        var introduktion = this.getIntroduktion();
        // load data?
        Ext.Viewport.animateActiveItem(introduktion, { type: 'slide', direction: 'left' });
    },
    /**
     * Kapitel 1
     * 
     * @return {[type]} [description]
     */
    gotoKapitel1: function() {
        this.stopAllPlay.call(this);

        var kapitel1 = this.getKapitel1();
        var kapitel1form = this.getKapitel1form();
        kapitel1form.backEvent = 'backToKapitel1';
        // load data?
        Ext.Viewport.animateActiveItem(kapitel1, { type: 'slide', direction: 'left' });
    },
    gotoNegTank: function(record) {
      
        
        /*this.stopAllPlay.call(this);

        var kapitel1form = this.getKapitel1form();
            
        if (!record.hasOwnProperty('internalId')) {
            // There is no record
            var now = new Date();
            var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

            var record = Ext.create("WinWithin.model.Negtank", {
                id: noteId,
                dateCreated: now,
                namnge: '',
                negativtanke: '',
                obehaglig: ''
            });
        }
        kapitel1form.setRecord(record);
        kapitel1form.updateWithForm();
        Ext.Viewport.animateActiveItem(kapitel1form, {type:'slide', direction:'left'});*/
        if(record.data){
            this.stopAllPlay.call(this);

            var kapitel1form = this.getKapitel1form();
            
            if (!record.hasOwnProperty('internalId')) {
                // There is no record
                var now = new Date();
                var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

                var record = Ext.create("WinWithin.model.Negtank", {
                    id: noteId,
                    dateCreated: now,
                    namnge: '',
                    negativtanke: '',
                    obehaglig: ''
                });
            }
            kapitel1form.setRecord(record);
            kapitel1form.updateWithForm();
            Ext.Viewport.animateActiveItem(kapitel1form, {type:'slide', direction:'left'});
        }else{
            var utmaningar = this.getUtmaningar();
            utmaningar.refresh('Negtank');
            Ext.getCmp('selectCategory').setValue("Negativa tankar och känslor"); 
            utmaningar.getItems().items[0].setStyle('background-color:#7baf9a;');
            utmaningar.getItems().items[0].setTitle('Negativa tankar och känslor');
            Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'left' });
        }
    },
    saveNegtankCommand: function() {
       
        var kapitel1form = this.getKapitel1form();
        var currentNote = kapitel1form.getRecord();
        var newValues = kapitel1form.getValues();
        if (newValues.namnge.length > 0) {
            currentNote.set("namnge", newValues.namnge);
            currentNote.set("negativtanke", newValues.negativtanke);
            currentNote.set("obehaglig", newValues.obehaglig);
            var notesStore = Ext.getStore("Negtank");
            if (null == notesStore.findRecord('id', currentNote.data.id)) {
                notesStore.add(currentNote);
            }
            notesStore.sync();
        }
        var utmaningar = this.getUtmaningar();
                utmaningar.refresh('Negtank');
        switch(kapitel1form.backEvent) {
            case 'backToKapitel1': 
                this.backToKapitel1();
                break;
            case 'backToNyUtm':
               
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
               
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
        
    },
    deleteNegtankCommand: function() {
       
        var kapitel1form = this.getKapitel1form();
        var currentNote = kapitel1form.getRecord();
        var notesStore = Ext.getStore("Negtank");
        notesStore.remove(currentNote);
        notesStore.sync();
        var utmaningar = this.getUtmaningar();
                utmaningar.refresh('Negtank');
        switch(kapitel1form.backEvent) {
            case 'backToKapitel1': 
                this.backToKapitel1(); 
                break;
            case 'backToNyUtm':
               
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    backToKapitel1: function() {
        this.stopAllPlay.call(this);
        var kapitel1 = this.getKapitel1();
        Ext.Viewport.animateActiveItem(kapitel1, { type: 'slide', direction: 'right' });
    },
    /**
     * Kapitel 2
     * 
     * @return {[type]} [description]
     */
    gotoKapitel2: function() {
        this.stopAllPlay.call(this);

        var kapitel2 = this.getKapitel2();
        var kapitel2form1 = this.getKapitel2form1();
        var kapitel2form2 = this.getKapitel2form2();
        kapitel2form1.backEvent = 'backToKapitel2';
        kapitel2form2.backEvent = 'backToKapitel2';
        Ext.Viewport.animateActiveItem(kapitel2, { type: 'slide', direction: 'left' });
    },
    gotoBevis: function(record) {
        /*this.stopAllPlay.call(this);

        var kapitel2form2 = this.getKapitel2form2();
        
        if (!record.hasOwnProperty('internalId')) {
            var now = new Date();
            var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

            var record = Ext.create("WinWithin.model.Bevis", {
                id: noteId,
                dateCreated: now,
                namnge: '',
                negTanke: '',
                relBevis: [],
                grundBevis: [],
                relElGrund: undefined
            });
        }
        kapitel2form2.setRecord(record);
        kapitel2form2.updateWithForm();
        Ext.Viewport.animateActiveItem(kapitel2form2, {type:'slide', direction:'left'});*/

        if(record.data){
            this.stopAllPlay.call(this);

            var kapitel2form2 = this.getKapitel2form2();
            
            if (!record.hasOwnProperty('internalId')) {
                var now = new Date();
                var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

                var record = Ext.create("WinWithin.model.Bevis", {
                    id: noteId,
                    dateCreated: now,
                    namnge: '',
                    negTanke: '',
                    relBevis: [],
                    grundBevis: [],
                    relElGrund: undefined
                });
            }
            kapitel2form2.setRecord(record);
            kapitel2form2.updateWithForm();
            Ext.Viewport.animateActiveItem(kapitel2form2, {type:'slide', direction:'left'});
        }else{
            var utmaningar = this.getUtmaningar();
            utmaningar.refresh('Bevis');
            Ext.getCmp('selectCategory').setValue("Bevis för och emot");
            utmaningar.getItems().items[0].setStyle('background-color:#495b6a;');
            utmaningar.getItems().items[0].setTitle('Bevis för och emot');
            Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'left' });
        }
    },
    saveBevis: function() {
        this.stopAllPlay.call(this);
        var kapitel2form2 = this.getKapitel2form2();
        var currentNote = kapitel2form2.getRecord();
        var newValues = kapitel2form2.getValues();
        
        if (newValues.namnge.length > 0) {
            currentNote.set('namnge', newValues.namnge);
            currentNote.set('negTanke', newValues.negTanke);
            var relBevis = [];
            for (var key in newValues) {
                if (key.substr(0, 8) == 'relBevis') {
                    if (newValues[key].length > 0) {
                        relBevis.push(newValues[key]);
                    }
                }
            }
            currentNote.set('relBevis', relBevis);
            var grundBevis = [];
            for (var key in newValues) {
                if (key.substr(0, 10) == 'grundBevis') {
                    if (newValues[key].length > 0) {
                        grundBevis.push(newValues[key]);
                    }
                }
            }
            currentNote.set('grundBevis', grundBevis);
            var notesStore = Ext.getStore('Bevis');
            if (null == notesStore.findRecord('id', currentNote.data.id)) {
                notesStore.add(currentNote);
            }
            notesStore.sync();
        }
         var utmaningar = this.getUtmaningar();
                utmaningar.refresh('Bevis');
        switch(kapitel2form2.backEvent) {
            case 'backToKapitel2': 
                this.backToKapitel2(); 
                break;
            case 'backToNyUtm':
                
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    deleteBevis: function() {
        this.stopAllPlay.call(this);
        var kapitel2form2 = this.getKapitel2form2();
        var currentNote = kapitel2form2.getRecord();
        var notesStore = Ext.getStore("Bevis");
        notesStore.remove(currentNote);
        notesStore.sync();
        var utmaningar = this.getUtmaningar();
                utmaningar.refresh('Bevis');
        switch(kapitel2form2.backEvent) {
            case 'backToKapitel2': 
                this.backToKapitel2(); 
                break;
            case 'backToNyUtm':
                 
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    gotoRelevant: function(record) {
      
        /*this.stopAllPlay.call(this);
        var kapitel2form1 = this.getKapitel2form1();

        if (!record.hasOwnProperty('internalId')) {
            var now = new Date();
            var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

            var record = Ext.create("WinWithin.model.Relevant", {
                id: noteId,
                dateCreated: now,
                fields: [{
                    namnge: '',
                    negTanke: '',
                    relElGrund: undefined
                }]
            });
        }
        
        kapitel2form1.setRecord(record);
        kapitel2form1.updateWithForm();
        Ext.Viewport.animateActiveItem(kapitel2form1, {type:'slide', direction:'left'});*/

        if(record.data){
            this.stopAllPlay.call(this);
            var kapitel2form1 = this.getKapitel2form1();

            if (!record.hasOwnProperty('internalId')) {
                var now = new Date();
                var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

                var record = Ext.create("WinWithin.model.Relevant", {
                    id: noteId,
                    dateCreated: now,
                    fields: [{
                        namnge: '',
                        negTanke: '',
                        relElGrund: undefined
                    }]
                });
            }
            
            kapitel2form1.setRecord(record);
            kapitel2form1.updateWithForm();
            Ext.Viewport.animateActiveItem(kapitel2form1, {type:'slide', direction:'left'});
        }else{
            var utmaningar = this.getUtmaningar();
            utmaningar.refresh('Relevant');
            Ext.getCmp('selectCategory').setValue("Relevant eller grundlös tanke");
            utmaningar.getItems().items[0].setStyle('background-color:#495b6a;');
            utmaningar.getItems().items[0].setTitle('Relevant eller grundlös tanke');
            Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'left' });
        }
    },
    saveRelElGrund: function() {
        var kapitel2form1 = this.getKapitel2form1();
        var currentNote = kapitel2form1.getRecord();
        var newValues = kapitel2form1.getValues();
        var fields = [{
            namnge: newValues.namnge,
            negTanke: newValues.negTanke,
            relElGrund: currentNote.get('fields')[0].relElGrund
        }]
        if (newValues.namnge.length > 0) {

            currentNote.set('fields', fields);
            var notesStore = Ext.getStore("Relevant");
            if (null == notesStore.findRecord('id', currentNote.data.id)) {
                notesStore.add(currentNote);
            }
            notesStore.sync();
        }
        var utmaningar = this.getUtmaningar();
                utmaningar.refresh('Relevant');
        switch(kapitel2form1.backEvent) {
            case 'backToKapitel2': 
                this.backToKapitel2(); 
                break;
            case 'backToNyUtm':
                
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    deleteRelevantCommand: function() {
       
        var kapitel2form1 = this.getKapitel2form1();
        var currentNote = kapitel2form1.getRecord();
        var notesStore = Ext.getStore("Relevant");
        notesStore.remove(currentNote);
        notesStore.sync();
        var utmaningar = this.getUtmaningar();
        utmaningar.refresh('Relevant');
        switch(kapitel2form1.backEvent) {
            case 'backToKapitel2': 
                this.backToKapitel2(); 
                break;
            case 'backToNyUtm':
                
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    backToKapitel2: function() {
        this.stopAllPlay.call(this);
        var kapitel2 = this.getKapitel2();
        Ext.Viewport.animateActiveItem(kapitel2, { type: 'slide', direction: 'right' });
    },
    /**
     * Kapitel 3
     * 
     * @return {[type]} [description]
     */
    gotoKapitel3: function() {
        this.stopAllPlay.call(this);
        var kapitel3 = this.getKapitel3();
        var kapitel3form = this.getKapitel3form();
        kapitel3form.backEvent = 'backToKapitel3';
        Ext.Viewport.animateActiveItem(kapitel3, { type: 'slide', direction: 'left' });
    },
    gotoProblem: function(record) {
        /*this.stopAllPlay.call(this);
        var kapitel3form = this.getKapitel3form();

        if (!record.hasOwnProperty('internalId')) {
            var now = new Date();
            var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

            var record = Ext.create("WinWithin.model.Problem", {
                id: noteId,
                dateCreated: now,
                beskriv: '',
                forslag: [],
                vald: undefined
            });
        }
        
        kapitel3form.setRecord(record);
        kapitel3form.updateWithForm();
        Ext.Viewport.animateActiveItem(kapitel3form, {type:'slide', direction:'left'});*/

        if(record.data){
            this.stopAllPlay.call(this);
            var kapitel3form = this.getKapitel3form();

            if (!record.hasOwnProperty('internalId')) {
                var now = new Date();
                var noteId = (now.getTime()).toString() + (this.getRandomInt(0, 100)).toString();

                var record = Ext.create("WinWithin.model.Problem", {
                    id: noteId,
                    dateCreated: now,
                    beskriv: '',
                    forslag: [],
                    vald: undefined
                });
            }
            
            kapitel3form.setRecord(record);
            kapitel3form.updateWithForm();
            Ext.Viewport.animateActiveItem(kapitel3form, {type:'slide', direction:'left'});
        }else{
            var utmaningar = this.getUtmaningar();
            utmaningar.refresh('Problem');
            Ext.getCmp('selectCategory').setValue("Problemlösning");
            utmaningar.getItems().items[0].setStyle('background-color:#905f79;');
            utmaningar.getItems().items[0].setTitle('Problemlösning');
            Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'left' });
        }
    },
    saveProblem: function() {
        this.stopAllPlay.call(this);
        var kapitel3form = this.getKapitel3form();
        var currentNote = kapitel3form.getRecord();
        var newValues = kapitel3form.getValues();
        
        if (newValues.beskriv.length > 0) {

            currentNote.set('beskriv', newValues.beskriv);
            var relBevis = [];
            for (var key in newValues) {
                if (key.substr(0, 7) == 'forslag') {
                    if (newValues[key].length > 0) {
                        relBevis.push(newValues[key]);
                    }
                }
            }
            currentNote.set('forslag', relBevis);
            
            var notesStore = Ext.getStore('Problem');
            if (null == notesStore.findRecord('id', currentNote.data.id)) {
                notesStore.add(currentNote);
            }
            notesStore.sync();
        }
        var utmaningar = this.getUtmaningar();
                utmaningar.refresh('Problem');
        switch(kapitel3form.backEvent) {
            case 'backToKapitel3': 
                this.backToKapitel3();
                break;
            case 'backToNyUtm':
               
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
        
    },
    deleteProblemCommand: function() {
        this.stopAllPlay.call(this);
        var kapitel3form = this.getKapitel3form();
        var currentNote = kapitel3form.getRecord();
        var notesStore = Ext.getStore('Problem');
        notesStore.remove(currentNote);
        notesStore.sync();
        var utmaningar = this.getUtmaningar();
        utmaningar.refresh('Problem');
        switch(kapitel3form.backEvent) {
            case 'backToKapitel3': 
                this.backToKapitel3(); 
                break;
            case 'backToNyUtm':
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
            case 'backToUtmaningar': 
                Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });
                break;
        }
    },
    backToKapitel3: function() {
        this.stopAllPlay.call(this);
        var kapitel3 = this.getKapitel3();
        Ext.Viewport.animateActiveItem(kapitel3, { type: 'slide', direction: 'right' });
    },
    gotoAvslutning: function() {
        this.stopAllPlay.call(this);
        var avslutning = this.getAvslutning();
        // load data?
        Ext.Viewport.animateActiveItem(avslutning, { type: 'slide', direction: 'left' });
    },
    gotoUtmaningar: function() {
       

        /*this.stopAllPlay.call(this);
        
        var listData = [];
        Ext.getStore('Negtank').load();
        Ext.getStore('Negtank').each(function(rec) {
            listData.push(rec);
        });
        Ext.getStore('Relevant').load();
        Ext.getStore('Relevant').each(function(rec) {
            listData.push(rec);
        });
        Ext.getStore('Bevis').load();
        Ext.getStore('Bevis').each(function(rec) {
            listData.push(rec);
        });
        Ext.getStore('Problem').load();
        Ext.getStore('Problem').each(function(rec) {
            listData.push(rec);
        });
        if (listData.length > 0) {
            var utmaningar = this.getUtmaningar();
            utmaningar.refresh();
            Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'left' });
        } else {
            var nyutmaning = this.getNyutmaning();
            Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'left' });
        }*/

        this.stopAllPlay.call(this);
        var nyutmaning = this.getNyutmaning();
        Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'left' });
        
        
    },
    backToUtmaningar: function() {
        
        /*this.stopAllPlay.call(this);
        var utmaningar = this.getUtmaningar();
        utmaningar.refresh();
        Ext.Viewport.animateActiveItem(utmaningar, { type: 'slide', direction: 'right' });*/

        this.stopAllPlay.call(this);
        var nyutmaning = this.getNyutmaning();
        nyutmaning.refresh();
        Ext.Viewport.animateActiveItem(nyutmaning, { type: 'slide', direction: 'right' });
    },
    doSetHidden: function(hidden) {

        this.callParent(arguments);
        if (hidden) {
            Ext.Viewport.removeMenu('left');
        } else {
            Ext.Viewport.setMenu(this.menuForSide('left'), { side: 'left', reveal: true });
        }
    },
    /**
     * Create menu on the fly
     * @param  {string} side Which side the menu should be on
     * @return {Ext.Menu}      Menu instance
     */
    menuForSide: function(side) {
       
        var items = [
        {
            text:'Introduktion',
            style: {
                'height': '16.6666667%',
                'background': '#d9d04c',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoIntroduktion();
            }
        },
        {
            text:'Steg 1',
            style: {
                'height': '16.6666667%',
                'background': '#7baf9a',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoKapitel1();
            }
        },
        {
            text:'Steg 2',
            style: {
                'height': '16.6666667%',
                'background': '#495b6a',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoKapitel2();
            }
        },
        {
            text:'Steg 3',
            style: {
                'height': '16.6666667%',
                'background': '#905f79',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoKapitel3();
            }
        },
        {
            text:'Slutord',
            style: {
                'height': '16.6666667%',
                'background': '#657798',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoAvslutning();
            }
        },
        {
            text:'Utmaningar',
            style: {
                'height': '16.6666667%',
                'background': '#794849',
                'margin': '0'
            },
            scope: this,
            handler: function() {
                Ext.Viewport.hideMenu(side);
                this.gotoUtmaningar();
            }
        }

        ];
        var className = 'Ext.Menu';
        return Ext.create(className, {items: items});
    },
    launch: function () {
       
        this.callParent();
        //Ext.getStore("Negtank").load();

        // console.log("launch");
    },

    init: function () {
       
        this.callParent();
        Ext.Viewport.setMenu(this.menuForSide('left'), { side: 'left', reveal: true });
        this.playToggle = false;
    }

});
