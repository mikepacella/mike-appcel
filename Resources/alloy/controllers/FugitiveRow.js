function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.row = A$(Ti.UI.createTableViewRow({
        className: "loc_row",
        dataId: "",
        id: "row",
        model: typeof $model.__transform.id != "undefined" ? $model.__transform.id : $model.get("id")
    }), "TableViewRow", null);
    $.addTopLevelView($.__views.row);
    $.__views.__alloyId7 = A$(Ti.UI.createView({
        layout: "vertical",
        height: Ti.UI.SIZE,
        id: "__alloyId7"
    }), "View", $.__views.row);
    $.__views.row.add($.__views.__alloyId7);
    $.__views.name = A$(Ti.UI.createLabel({
        color: "#fff",
        font: {
            fontSize: "24dp"
        },
        top: "2dp",
        height: Ti.UI.SIZE,
        left: "5dp",
        right: "5dp",
        id: "name",
        text: typeof $model.__transform.name != "undefined" ? $model.__transform.name : $model.get("name")
    }), "Label", $.__views.__alloyId7);
    $.__views.__alloyId7.add($.__views.name);
    $.__views.address = A$(Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: "20dp"
        },
        id: "address",
        text: typeof $model.__transform.address != "undefined" ? $model.__transform.address : $model.get("address")
    }), "Label", $.__views.__alloyId7);
    $.__views.__alloyId7.add($.__views.address);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;