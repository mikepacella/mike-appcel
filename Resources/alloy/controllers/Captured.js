function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    Alloy.Collections.instance("Fugitives");
    $.__views.__alloyId2 = A$(Ti.UI.createWindow({
        backgroundColor: "transparent",
        backgroundImage: "images/grain.png",
        barColor: "#6d0a0c",
        title: "Captured",
        id: "__alloyId2"
    }), "Window", null);
    $.__views.captured = A$(Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "captured"
    }), "TableView", $.__views.__alloyId2);
    $.__views.__alloyId2.add($.__views.captured);
    var __alloyId6 = function(e) {
        var models = Alloy.Collections.Fugitives.models, len = models.length, rows = [];
        for (var i = 0; i < len; i++) {
            var __alloyId4 = models[i];
            __alloyId4.__transform = {};
            var __alloyId5 = Alloy.createController("FugitiveRow", {
                id: "__alloyId3",
                $model: __alloyId4
            });
            rows.push(__alloyId5.getViewEx({
                recurse: !0
            }));
        }
        $.__views.captured.setData(rows);
    };
    Alloy.Collections.Fugitives.on("fetch destroy change add remove reset", __alloyId6);
    $.__views.capturedTab = A$(Ti.UI.createTab({
        window: $.__views.__alloyId2,
        id: "capturedTab",
        title: "Captured",
        icon: "images/captured.png"
    }), "Tab", null);
    $.addTopLevelView($.__views.capturedTab);
    exports.destroy = function() {
        Alloy.Collections.Fugitives.off("fetch destroy change add remove reset", __alloyId6);
    };
    _.extend($, $.__views);
    var fugitiveCollection = Alloy.Collections.Fugitives;
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;