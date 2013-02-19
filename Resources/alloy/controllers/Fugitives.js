function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.fugitiveWindow = A$(Ti.UI.createWindow({
        backgroundColor: "transparent",
        backgroundImage: "images/grain.png",
        barColor: "#6d0a0c",
        id: "fugitiveWindow",
        title: "Fugitives"
    }), "Window", null);
    $.__views.fugitiveTable = A$(Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "fugitiveTable"
    }), "TableView", $.__views.fugitiveWindow);
    $.__views.fugitiveWindow.add($.__views.fugitiveTable);
    $.__views.fugitiveTab = A$(Ti.UI.createTab({
        window: $.__views.fugitiveWindow,
        id: "fugitiveTab",
        title: "Fugitives",
        icon: "fugitives.png"
    }), "Tab", null);
    $.addTopLevelView($.__views.fugitiveTab);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;