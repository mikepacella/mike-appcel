function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.capturedWindow = A$(Ti.UI.createWindow({
        backgroundColor: "#fff",
        id: "capturedWindow",
        title: "Capturedo"
    }), "Window", null);
    $.__views.capturedTable = A$(Ti.UI.createTableView({
        id: "capturedTable"
    }), "TableView", $.__views.capturedWindow);
    $.__views.capturedWindow.add($.__views.capturedTable);
    $.__views.capturedTab = A$(Ti.UI.createTab({
        window: $.__views.capturedWindow,
        id: "capturedTab",
        title: "Capturedo",
        icon: "captured.png"
    }), "Tab", null);
    $.addTopLevelView($.__views.capturedTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;