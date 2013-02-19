var args = arguments[0] || {};
//
// this is setting the view elements of the row view
// which is found in views/row.xml based on the arguments
// passed into the controller
//
//$.thumbnail.image = args.image;
$.parentController = args.parentTab;

// add the datatransformation, Tony's busy!!
// dataTransform is not wired up yet, but i
// hacked it into my code
$.fugitiveDetail = _.extend({}, $.fugitiveDetail, {
    transform : function() {
        return dataTransformation(this);
    }
});

// instance variable used in data-binding
// we do this set here to trigger the events
// that will cause the data to be rendered
$.fugitiveDetail.set(args.data.attributes);

/**
 * being used for rendering the model in the view
 * via data-binding
 *
 * @param {Object} _model
 */
function dataTransformation(_model) {

    // toggle the capture button
    $.capture_button.visible = !_model.attributes.captured;

    return {
        name : _model.attributes.name,
        captured : _model.attributes.captured ? "Captured" : "Not Captured",
        image : _model.attributes.url || '/images/burglar.png',
    }
}

//
// EVENT HANDLER
//
// save a photo to associate with the captured person
// 		Add an event listener to your button, within, define
//		an object that specifies the success, cancel, and error callbacks.
//		Don't save to the gallery or permit editing, accept only photos (not videos)
//		Then open either the camera (if it's supported) or gallery picker
$.photoButton.addEventListener("click", function() {
	var options = {
		success: function(e) {
		  // fired when user selects from gallery
		  // e.media == the image data
		  $.fugitiveImage.image = e.media;
		},
		cancel: function() {
		  // fired when user cancels
		},
		error: function(error) {
		  // fired when there's an error
		  // error.code is a constant, like Titanium.Media.NO_CAMERA
	    },
	    allowEditing: true,
	    mediaTypes: [Ti.Media.MEDIA_TYPE_PHOTO]
	};
  	if (Ti.Media.getIsCameraSupported()) {
		Ti.Media.showCamera(options);	
	} else {
		Ti.Media.openPhotoGallery(options);
	}
});


// mark where the user was captured
$.capture_button.addEventListener('click', function(_e) {
    // update the model and save
    var fugitiveModel = args.data;
    fugitiveModel.set("captured", 1);
    fugitiveModel.save();

    // force tables to update
    Alloy.Collections.Fugitive.fetch();

    //on android, give a bit of a delay before closing the window...
    if (Ti.Platform.osname == 'android') {
        setTimeout(function() {
            $.detailWindow.close();
        }, 2000);
    } else {
        $.detailWindow.close();
    }

});
