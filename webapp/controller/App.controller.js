sap.ui.define(["sap/ui/core/mvc/Controller",
		"sap/m/MessageToast",
		"mine/model/formatter",
		"sap/ui/model/Filter",
		"sap/ui/model/FilterOperator"
	],
	function(Controller, MessageToast, formatter, Filter, FilterOperator) {
		Controller.extend("mine.controller.App", {
			formatter: formatter,
			onPress: function() {

				var oBun = this.getView().getModel("i18n").getResourceBundle();
				var sName = this.getView().getModel("helloPan").getProperty("/reciepient/name");
				var sMsg = oBun.getText("MSG", [sName]);
				MessageToast.show(sMsg);
			},
			onSearch: function(oEvent) {
				var oLis = this.getView().byId("idList").getBinding("items"),
					oTxt = oEvent.getParameter("query"),
					aFilter = [];
				var oFilt = new Filter({
					path: "Category",
					operator: FilterOperator.Contains,
					value1: oTxt
				});
				aFilter.push(oFilt);
				oLis.filter(aFilter);
			},
			onLiveChange: function(oEvent) {
				var oVal = oEvent.getParameter("newValue"),
					oList = this.getView().byId("idList").getBinding("items"),
					bFilter = [];

				bFilter.push(new Filter(
					"ProductID",
					FilterOperator.Contains,
					oVal
				));
				oList.filter(bFilter);
			},
			onSelChange: function(oEvent) {
				var oSel = oEvent.getParameter("listItem").getBindingContext().getPath();
				var oPan = this.byId("idPanel");
				oPan.bindElement(oSel);
				oPan.setVisible(true);
			}
		});
	});