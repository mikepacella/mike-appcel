function Controller() {
    function dofilter(_collection) {
        return fugitiveCollection.where({
            captured: 1
        });
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    Alloy.Collections.instance("Fugitive");
    $.__views.capturedWindow = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        backgroundImage: "images/grain.png",
        title: "Captured",
        barColor: "#6d0a0c",
        id: "capturedWindow"
    }), "Window", null);
    $.__views.table = A$(Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "table"
    }), "TableView", $.__views.capturedWindow);
    $.__views.capturedWindow.add($.__views.table);
    var __alloyId5 = function(e) {
        var models = dofilter(Alloy.Collections.Fugitive), len = models.length, rows = [];
        for (var i = 0; i < len; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId4 = Alloy.createController("FugitiveRow", {
                id: "__alloyId2",
                $model: __alloyId3
            });
            rows.push(__alloyId4.getViewEx({
                recurse: !0
            }));
        }
        $.__views.table.setData(rows);
    };
    Alloy.Collections.Fugitive.on("fetch destroy change add remove reset", __alloyId5);
    $.__views.capturedTab = A$(Ti.UI.createTab({
        icon: "/images/captured.png",
        window: $.__views.capturedWindow,
        id: "capturedTab",
        title: "Captured"
    }), "Tab", null);
    $.addTopLevelView($.__views.capturedTab);
    exports.destroy = function() {
        Alloy.Collections.Fugitive.off("fetch destroy change add remove reset", __alloyId5);
    };
    _.extend($, $.__views);
    var fugitiveCollection = Alloy.Collections.Fugitive;
    $.table.addEventListener("click", function(_e) {
        debugger;
        var detailController = Alloy.createController("FugitiveDetail", {
            parentTab: $.capturedTab,
            data: fugitiveCollection.get(_e.rowData.model)
        });
        $.capturedTab.open(detailController.getView());
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;