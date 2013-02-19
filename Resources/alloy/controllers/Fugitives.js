function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    Alloy.Collections.instance("Fugitives");
    $.__views.__alloyId10 = A$(Ti.UI.createWindow({
        backgroundColor: "transparent",
        backgroundImage: "images/grain.png",
        barColor: "#6d0a0c",
        title: "Fugitives",
        id: "__alloyId10"
    }), "Window", null);
    $.__views.fugitives = A$(Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "fugitives"
    }), "TableView", $.__views.__alloyId10);
    $.__views.__alloyId10.add($.__views.fugitives);
    var __alloyId14 = function(e) {
        var models = Alloy.Collections.Fugitives.models, len = models.length, rows = [];
        for (var i = 0; i < len; i++) {
            var __alloyId12 = models[i];
            __alloyId12.__transform = {};
            var __alloyId13 = Alloy.createController("FugitiveRow", {
                id: "__alloyId11",
                $model: __alloyId12
            });
            rows.push(__alloyId13.getViewEx({
                recurse: !0
            }));
        }
        $.__views.fugitives.setData(rows);
    };
    Alloy.Collections.Fugitives.on("fetch destroy change add remove reset", __alloyId14);
    $.__views.fugitiveTab = A$(Ti.UI.createTab({
        window: $.__views.__alloyId10,
        id: "fugitiveTab",
        title: "Fugitives",
        icon: "images/fugitives.png"
    }), "Tab", null);
    $.addTopLevelView($.__views.fugitiveTab);
    exports.destroy = function() {
        Alloy.Collections.Fugitives.off("fetch destroy change add remove reset", __alloyId14);
    };
    _.extend($, $.__views);
    var fugitiveCollection = Alloy.Collections.Fugitives;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;