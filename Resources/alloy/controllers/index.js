function Controller() {
    function doClick(e) {
        alert($.label.text);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.tabGroup = A$(Ti.UI.createTabGroup({
        id: "tabGroup"
    }), "TabGroup", null);
    $.__views.__alloyId15 = Alloy.createController("Fugitives", {
        id: "__alloyId15"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId15.getViewEx({
        recurse: !0
    }));
    $.__views.__alloyId17 = Alloy.createController("Captured", {
        id: "__alloyId17"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId17.getViewEx({
        recurse: !0
    }));
    $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("seeded: " + Ti.App.Properties.hasProperty("seeded"));
    if (!Ti.App.Properties.hasProperty("seeded")) {
        Alloy.Collections.Fugitive.reset([ {
            name: "Jeff Haynie"
        }, {
            name: "Nolan Wright"
        }, {
            name: "Don Thorp"
        }, {
            name: "Marshall Culpepper"
        }, {
            name: "Blain Hamon"
        } ]);
        Alloy.Collections.Fugitive.each(function(_m) {
            _m.save();
        });
        Ti.App.Properties.setString("seeded", "yuppers");
        $.tabGroup.open();
    } else $.tabGroup.open();
    Alloy.Collections.Fugitive.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;