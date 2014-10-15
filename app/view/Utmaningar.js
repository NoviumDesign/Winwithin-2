Ext.define('WinWithin.view.Utmaningar', {
    extend: 'Ext.Container',
    alias: 'widget.utmaningar',
    initialize: function() {
        this.callParent(arguments);
        
        var topToolbar = {
            xtype: "toolbar",
            docked: 'top',
            title: 'Utmaningar',
            style: {
                'background': '#794849'
            },
            items: [
            /*{
                xtype: 'button',
                ui: 'back',
                style: {
                    'background': 'none'
                },
                handler: this.onMenu,
                scope: this,
                text: 'Meny',
                iconMask: true
            }*/{
                xtype: 'button',
                ui: 'back',
                style: {
                    'background': 'none'
                },
                handler: this.onMenu,
                scope: this,
                text: 'Utmaningar',
                iconMask: true
            },{
                xtype: 'button',
                docked:'right',
                cls: 'new-challange-button',
                style: {
                    'background': 'none'
                },
                handler: this.onNew,
                scope: this,
                html: '<img src="resources/images/ic_action_new.png" style="width:22px; margin-top: 10px;" />',
                iconMask: true
            }
            ]
        };

        this.add([topToolbar]);

        this.refresh();
        
    },
    refresh: function(storeName) {
       
        this.removeAll();
        
        var listData = [];
        if(storeName=='Negtank'){
            Ext.getStore('Negtank').load();
            Ext.getStore('Negtank').each(function(rec) {
                listData.push({namnge: rec.get('namnge'), model: 'Negtank', clss:'negtankList', record: rec, action: 'gotoNegTank',bglistColor:''});
            });
        }
        
        if(storeName=='Relevant'){
            Ext.getStore('Relevant').load();
            Ext.getStore('Relevant').each(function(rec) {
                var fields = rec.get('fields');
                var title = fields[0].namnge;
                if (fields[0].relElGrund == 'relevant') {
                    title += ' (Relevant)';
                }
                if (fields[0].relElGrund == 'grundlos') {
                    title += ' (Grundlös)';
                }
                listData.push({namnge: title, model: 'Relevant', clss:'bevisList', record: rec, action: 'gotoRelevant',bglistColor:''});
            });
        }
        if(storeName=='Bevis'){
            Ext.getStore('Bevis').load();
            Ext.getStore('Bevis').each(function(rec) {
                var title = rec.get('namnge');
                if (rec.get('relElGrund') == 'relevant') {
                    title += ' (Relevant)';
                }
                if (rec.get('relElGrund') == 'grundlos') {
                    title += ' (Grundlös)';
                }
                listData.push({namnge: title, model: 'Bevis', clss:'bevisList', record: rec, action: 'gotoBevis',bglistColor:''});
            });
        }
        if(storeName=='Problem'){
            Ext.getStore('Problem').load();
            Ext.getStore('Problem').each(function(rec) {
                listData.push({namnge: rec.get('beskriv'), model: 'Problem', clss:'problemList', record: rec, action: 'gotoProblem',bglistColor:''});
            });    
        }
        
        
        
        if (listData.length > 0) {

            var utmaningarlist = {
                xtype: "utmaningarlist",
                style: {
                    'background': '#FFF'
                },
                data: listData,
                listeners: {
                    scope: this,
                    //disclose: this.onDisclose,
                    itemtap: this.onTap
                }
            };
            
            var panel = {
                xtype: 'panel',
                layout: 'fit',
                cls: 'form-container',
                // style: { 
                //     'padding': '12px'
                // },
                items: [utmaningarlist]
            }

            this.add([panel]);
        }else{
            var panel = {
                xtype: 'panel',
                layout: 'fit',
                cls: 'form-container',
                html:'<div style="padding:20px"><img src="resources/images/blankChallenges.png"  width="auto" height="auto" style="float: right"></div>'
                /*items:[{
                    xtype: 'image',
                    src: 'resources/images/blankChallenges.png',
                    width:'100%',
                    style:'background-repeat: no-repeat;',
                    height:100
                }]*/
            }
            this.add([panel]);
        } 
    },
    // onDisclose: function (list, record, target, index, evt, options) {
    //     this.fireEvent('gotoEdit', this, record);
    // },
    onTap: function (list, index, target, record, evt, options) {
        console.log(evt);
        setTimeout(function() {
            this.fireEvent('gotoEdit', this, record);
        }.bind(this), 20);

        // evt.stopPropagation();
    },
    onMenu: function () {
        /*this.fireEvent("menuToggle", this);*/
        this.fireEvent("backToUtmaningar", this);
    },
    onNew: function(){
        this.fireEvent('newChallange', this);
    },
    config: {
        fullscreen: true,
        scrollable: false,
        layout: 'fit'
    }
});
