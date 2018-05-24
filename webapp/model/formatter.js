sap.ui.define([], function() {
	"use strict";
	return {
		onStateChar: function(iWeight, sMeasure) {
			var sText = "";
			if (sMeasure === "G") {
				iWeight = iWeight / 1000;
			}

			if (iWeight < 0.5) {
				sText = "Dont deliver";
			} else if (iWeight < 5) {
				sText = "Deliver by local service";
			} else {
				sText = "Career deliver";
			}

			return sText;
		},
		getMapBack: function(img) {

		}
	};
});