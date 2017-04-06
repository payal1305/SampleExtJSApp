/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('TutorialApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',

        'TutorialApp.view.main.MainController',
        'TutorialApp.view.main.MainModel',
        'TutorialApp.view.main.List'
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            bind: {
                text: '{name}'
            },
            flex: 0
        },
        iconCls: 'fa-th-list'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            plugins: 'responsive',
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Home',
        iconCls: 'fa-home',
        // The following grid shares a store with the classic version's grid as well!
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Employee',
        iconCls: 'fa-user',
        xtype: 'tabpanel',
        items: [{
            title: 'Employee Directory',
            iconCls: 'x-fa fa-users',
            xtype: 'grid',
            listeners: {
               //show: alert("item is shown"),
                //itemtap: alert('item is tapped.!'),
               // itemtap: 'onTapped'
                itemtap: function() {
                    alert('item is tapped.!');
                }
            },
            store: {
                data :[{
                    "FirstName": "Jainik",
                    "LastName": "Purohit",
                    "PhoneNumber": "848203"
                }, {
                    "FirstName": "Payal",
                    "LastName": "Shah",
                    "PhoneNumber": "848219"
                  }, {
                    "FirstName": "Saumil",
                    "LastName": "Shah",
                    "PhoneNumber": "848874"
                }]
            },
            columns: [{
                text: 'First Name',
                dataIndex: 'FirstName',
                flex:1
            },{
                text: 'Last Name',
                dataIndex: 'LastName',
                flex:1
            },{
                text: 'Phone Number',
                dataIndex: 'PhoneNumber',
                flex:1
            }]
        },{
            title: 'About',
            layout: 'fit',
            iconCls: 'x-fa fa-info-circle'
        }]
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]

});


function onTapped(view, index, target, record, event) {
    alert('item is tapped.!')
}