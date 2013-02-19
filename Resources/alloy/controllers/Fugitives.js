function Controller() {
    function dofilter(_collection) {
        debugger;
        return fugitiveCollection.filter(function(_i) {
            return !_i.attributes.captured;
        });
    }
    function addNewFugitive() {
        var addFugitiveController = Alloy.createController("FugitiveAdd");
        $.fugitiveTab.open(addFugitiveController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    Alloy.Collections.instance("Fugitive");
    $.__views.fugitiveWindow = A$(Ti.UI.createWindow({
        backgroundColor: "white",
        backgroundImage: "images/grain.png",
        title: "Fugitives",
        barColor: "#6d0a0c",
        id: "fugitiveWindow"
    }), "Window", null);
    $.__views.table = A$(Ti.UI.createTableView({
        backgroundColor: "transparent",
        id: "table"
    }), "TableView", $.__views.fugitiveWindow);
    $.__views.fugitiveWindow.add($.__views.table);
    var __alloyId13 = function(e) {
        var models = dofilter(Alloy.Collections.Fugitive), len = models.length, rows = [];
        for (var i = 0; i < len; i++) {
            var __alloyId11 = models[i];
            __alloyId11.__transform = {};
            var __alloyId12 = Alloy.createController("FugitiveRow", {
                id: "__alloyId10",
                $model: __alloyId11
            });
            rows.push(__alloyId12.getViewEx({
                recurse: !0
            }));
        }
        $.__views.table.setData(rows);
    };
    Alloy.Collections.Fugitive.on("fetch destroy change add remove reset", __alloyId13);
    $.__views.add = A$(Ti.UI.createButton({
        id: "add",
        title: "Add",
        top: "-50dp"
    }), "Button", $.__views.fugitiveWindow);
    $.__views.fugitiveWindow.add($.__views.add);
    $.__views.fugitiveTab = A$(Ti.UI.createTab({
        icon: "/images/fugitives.png",
        window: $.__views.fugitiveWindow,
        id: "fugitiveTab",
        title: "Fugitives"
    }), "Tab", null);
    $.addTopLevelView($.__views.fugitiveTab);
    exports.destroy = function() {
        Alloy.Collections.Fugitive.off("fetch destroy change add remove reset", __alloyId13);
    };
    _.extend($, $.__views);
    var fugitiveCollection = Alloy.Collections.Fugitive;
    $.table.addEventListener("click", function(_e) {
        var detailController = Alloy.createController("FugitiveDetail", {
            parentTab: $.fugitiveTab,
            data: fugitiveCollection.get(_e.rowData.model)
        });
        $.fugitiveTab.open(detailController.getView());
    });
    if (Ti.Platform.osname === "iphone") {
        $.add.style = Titanium.UI.iPhone.SystemButtonStyle.PLAIN;
        $.add.addEventListener("click", addNewFugitive);
        $.fugitiveWindow.setRightNavButton($.add);
    }
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;