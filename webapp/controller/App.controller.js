sap.ui.define(["sap/ui/core/mvc/Controller",
		"sap/m/MessageToast"
	],
	function(Controller, MessageToast) {
		Controller.extend("mine.controller.App", {
			onPress: function() {

				var oBun = this.getView().getModel("i18n").getResourceBundle();
				var sName = this.getView().getModel("helloPan").getProperty("/reciepient/name");
				var sMsg = oBun.getText("MSG", [sName]);
				MessageToast.show(sMsg);
			}
		});
	});