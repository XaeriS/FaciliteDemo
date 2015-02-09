sap.ui.controller("zfiorifacilite.View_consultant", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf zfiorifacilite.View_consultant
*/
	onInit: function() {

		// URL of the OData service - IMPORTANT: relative to the server
		var sServiceUrl = "proxy/http/localhost:8023/sap/opu/odata/sap/z_facilite_consultant_srv/";
		
		// create OData model instance with service URL and JSON format
		/*var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl, true,
		 "BCUSER","Tenno34co");*/
		
		console.log(oModel);
		var oModel = new sap.ui.model.odata.ODataModel(sServiceUrl);
		
		sap.ui.getCore().setModel(oModel);
		
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf zfiorifacilite.View_consultant
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf zfiorifacilite.View_consultant
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf zfiorifacilite.View_consultant
*/
//	onExit: function() {
//
//	}

});