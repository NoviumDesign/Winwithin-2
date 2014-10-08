Ext.define("WinWithin.store.Problem", {
    extend: "Ext.data.Store",
    requires:"Ext.data.proxy.LocalStorage",
    config: {
        model: "WinWithin.model.Problem",
        sorters:[{
            property : 'id',
            direction: 'DESC'
        }],
        proxy: {
            type: 'localstorage',
            id: 'WinWithin-app-store-problem'
        }
    }
});