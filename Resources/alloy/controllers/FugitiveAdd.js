function Controller() {
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.__views.fugitiveAddWindow = A$(Ti.UI.createWindow({
        title: "New Fugitive",
        layout: "vertical",
        barColor: "#6d0a0c",
        backgroundColor: "transparent",
        backgroundImage: "images/grain.png",
        id: "fugitiveAddWindow"
    }), "Window", null);
    $.addTopLevelView($.__views.fugitiveAddWindow);
    $.__views.name_tf = A$(Ti.UI.createTextField({
        height: 40,
        top: 50,
        width: 250,
        keyboardType: Titanium.UI.KEYBOARD_DEFAULT,
        returnKeyType: Titanium.UI.RETURNKEY_DONE,
        borderStyle: Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
        hintText: "Fugitive Name",
        id: "name_tf"
    }), "TextField", $.__views.fugitiveAddWindow);
    $.__views.fugitiveAddWindow.add($.__views.name_tf);
    $.__views.save_button = A$(Ti.UI.createButton({
        title: "Save",
        height: Ti.UI.SIZE,
        width: 80,
        top: 10,
        id: "save_button"
    }), "Button", $.__views.fugitiveAddWindow);
    $.__views.fugitiveAddWindow.add($.__views.save_button);
    exports.destroy = function() {};
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.save_button.addEventListener("click", function(_e) {
        var fugitiveModel = Alloy.createModel("Fugitive", {
            name: $.name_tf.value,
            captured: !1
        });
        fugitiveModel.save();
        Alloy.Collections.Fugitive.fetch();
        $.fugitiveAddWindow.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;