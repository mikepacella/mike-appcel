function Controller() {
    function dataTransformation(_model) {
        $.capture_button.visible = !_model.attributes.captured;
        return {
            name: _model.attributes.name,
            captured: _model.attributes.captured ? "Captured" : "Not Captured",
            image: _model.attributes.url || "/images/burglar.png"
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    $model = arguments[0] ? arguments[0].$model : null;
    var $ = this, exports = {}, __defers = {};
    $.fugitiveDetail = Alloy.createModel("Fugitive");
    $.__views.detailWindow = A$(Ti.UI.createWindow({
        layout: "vertical",
        barColor: "#6d0a0c",
        backgroundColor: "transparent",
        backgroundImage: "images/grain.png",
        id: "detailWindow",
        model: "$.fugitiveDetail",
        dataTransform: "dataTransformation"
    }), "Window", null);
    $.addTopLevelView($.__views.detailWindow);
    $.__views.captured_lbl = A$(Ti.UI.createLabel({
        top: 10,
        textAlign: "center",
        font: {
            fontWeight: "bold",
            fontSize: 18
        },
        color: "#fff",
        height: Ti.UI.SIZE,
        id: "captured_lbl"
    }), "Label", $.__views.detailWindow);
    $.__views.detailWindow.add($.__views.captured_lbl);
    $.__views.fugitiveImage = A$(Ti.UI.createImageView({
        top: 10,
        height: 80,
        width: 80,
        id: "fugitiveImage"
    }), "ImageView", $.__views.detailWindow);
    $.__views.detailWindow.add($.__views.fugitiveImage);
    $.__views.photoButton = A$(Ti.UI.createButton({
        top: 10,
        width: 200,
        title: "Add Photo",
        id: "photoButton"
    }), "Button", $.__views.detailWindow);
    $.__views.detailWindow.add($.__views.photoButton);
    $.__views.capture_button = A$(Ti.UI.createButton({
        title: "Captured",
        top: 10,
        height: Ti.UI.SIZE,
        width: 200,
        id: "capture_button"
    }), "Button", $.__views.detailWindow);
    $.__views.detailWindow.add($.__views.capture_button);
    $.__views.delete_button = A$(Ti.UI.createButton({
        title: "Delete",
        top: 10,
        height: Ti.UI.SIZE,
        width: 200,
        id: "delete_button"
    }), "Button", $.__views.detailWindow);
    $.__views.detailWindow.add($.__views.delete_button);
    var __alloyId6 = function() {
        $.detailWindow.title = _.isFunction($.fugitiveDetail.transform) ? $.fugitiveDetail.transform().name : $.fugitiveDetail.get("name");
        $.captured_lbl.text = _.isFunction($.fugitiveDetail.transform) ? $.fugitiveDetail.transform().captured : $.fugitiveDetail.get("captured");
        $.fugitiveImage.image = _.isFunction($.fugitiveDetail.transform) ? $.fugitiveDetail.transform().image : $.fugitiveDetail.get("image");
    };
    $.fugitiveDetail.on("fetch change destroy", __alloyId6);
    exports.destroy = function() {
        $.fugitiveDetail.off("fetch change destroy", __alloyId6);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    $.parentController = args.parentTab;
    $.fugitiveDetail = _.extend({}, $.fugitiveDetail, {
        transform: function() {
            return dataTransformation(this);
        }
    });
    $.fugitiveDetail.set(args.data.attributes);
    $.photoButton.addEventListener("click", function() {
        var options = {
            success: function(e) {
                $.fugitiveImage.image = e.media;
            },
            cancel: function() {},
            error: function(error) {},
            allowEditing: !0,
            mediaTypes: [ Ti.Media.MEDIA_TYPE_PHOTO ]
        };
        Ti.Media.getIsCameraSupported() ? Ti.Media.showCamera(options) : Ti.Media.openPhotoGallery(options);
    });
    $.capture_button.addEventListener("click", function(_e) {
        var fugitiveModel = args.data;
        fugitiveModel.set("captured", 1);
        fugitiveModel.save();
        Alloy.Collections.Fugitive.fetch();
        Ti.Platform.osname == "android" ? setTimeout(function() {
            $.detailWindow.close();
        }, 2000) : $.detailWindow.close();
    });
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._, A$ = Alloy.A, $model;

module.exports = Controller;