Ext.define("WinWithin.view.Utmaningarlist", {
    extend: "Ext.dataview.List",
    alias: "widget.utmaningarlist",
    config: {
        loadingText: "Laddar utmaningar...",
        emptyText: '</pre><div class="notes-list-empty-text">Inga utmaningar skapade ännu</div><pre>',
        onItemDisclosure: true,
        flex:1,
        cls:'UtmaningarlistCls',
        itemTpl: new Ext.XTemplate('<tpl for="."><tpl if="bglistColor !=&quot;0&quot;"><div class="{clss}" style="background:{bglistColor}; padding: 12px 15px;margin-bottom: 1px;height:{itemheight}px;display: -webkit-box;-webkit-box-orient: vertical;-webkit-box-pack: center;text-align: center;"><span style="display: inline-block;">{namnge}</span></div><tpl else><div class="{clss}" style=" padding: 12px 15px;margin-bottom: 1px;"><span style="display: inline-block;">{namnge}</span></div></tpl></tpl>')
        // '</pre><div class="list-item-title {clss}">{namnge}</div><pre>',
    }
});