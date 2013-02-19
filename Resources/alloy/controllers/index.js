function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.tabGroup = A$(Ti.UI.createTabGroup({
        id: "tabGroup"
    }), "TabGroup", null);
    $.__views.__alloyId16 = Alloy.createController("Fugitives", {
        id: "__alloyId16"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId16.getViewEx({
        recurse: !0
    }));
    $.__views.__alloyId18 = Alloy.createController("Captured", {
        id: "__alloyId18"
    });
    $.__views.tabGroup.addTab($.__views.__alloyId18.getViewEx({
        recurse: !0
    }));
    $.addTopLevelView($.__views.tabGroup);
    exports.destroy = function() {};
    _.extend($, $.__views);
    Ti.API.info("seeded: " + Ti.App.Properties.hasProperty("seeded"));
    if (!Ti.App.Properties.hasProperty("seeded")) {
        var names = [ "Jeff Haynie", "Nolan Wright", "Blain Hamon", "Aaron Saunders", "Anthony Decena" ];
        for (var i = 0; i < names.length; i++) {
            var badguy = Alloy.createModel("fugitives", {
                name: names[i]
            });
            badguy.save();
        }
        Ti.App.Properties.setString("seeded", "yessir");
    }
    $.tabGroup.open();
    Alloy.Collections.Fugitives.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;