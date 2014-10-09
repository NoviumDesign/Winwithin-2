Ext.define("WinWithin.view.Utmaningarlist", {
    extend: "Ext.dataview.List",
    alias: "widget.utmaningarlist",
    config: {
        loadingText: "Laddar utmaningar...",
        emptyText: '</pre><div class="notes-list-empty-text">Inga utmaningar skapade ännu</div><pre>',
        onItemDisclosure: true,
        cls:'UtmaningarlistCls',
        itemTpl: new Ext.XTemplate('<div class="{clss}" style="background:{bglistColor}; padding: 12px 15px;margin-bottom: 1px;height:{itemheight}px">', '<span style="display: inline-block;">{namnge}</span>','</div>')
        // '</pre><div class="list-item-title {clss}">{namnge}</div><pre>',
    }
});
//View