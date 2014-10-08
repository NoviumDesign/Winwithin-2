Ext.define("WinWithin.store.Bevis", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "WinWithin.model.Bevis",
        sorters:[{
            property : 'id',
            direction: 'DESC'
        }],
        proxy: {
            type: 'localstorage',
            id: 'WinWithin-app-store-bevis'
        }
    }
});