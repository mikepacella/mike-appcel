function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.capturedWindow = A$(Ti.UI.createWindow({
        backgroundColor: "transparent",
        backgroundImage: "images/grain.png",
        barColor: "#6d0a0c",
        id: "capturedWindow",
        title: "Captured"
    }), "Window", null);
    $.__views.capturedTable = A$(Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "capturedTable"
    }), "TableView", $.__views.capturedWindow);
    $.__views.capturedWindow.add($.__views.capturedTable);
    $.__views.capturedTab = A$(Ti.UI.createTab({
        window: $.__views.capturedWindow,
        id: "capturedTab",
        title: "Captured",
        icon: "captured.png"
    }), "Tab", null);
    $.addTopLevelView($.__views.capturedTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;