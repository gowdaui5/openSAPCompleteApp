sap.ui.define(["sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],
	function(Controller, MessageToast) {
		Controller.extend("mine.controller.App", {
			onPress: function() {
				MessageToast.show("really you pressed me!");
			}
		});
	});