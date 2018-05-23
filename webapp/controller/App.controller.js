sap.ui.define(["sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"mine/model/formatter"
	],
	function(Controller, MessageToast, formatter) {
		Controller.extend("mine.controller.App", {
			formatter: formatter,
			onPress: function() {

				var oBun = this.getView().getModel("i18n").getResourceBundle();
				var sName = this.getView().getModel("helloPan").getProperty("/reciepient/name");
				var sMsg = oBun.getText("MSG", [sName]);
				MessageToast.show(sMsg);
			}
		});
	});