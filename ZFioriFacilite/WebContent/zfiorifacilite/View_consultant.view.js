sap.ui.jsview("zfiorifacilite.View_consultant", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf zfiorifacilite.View_consultant
	*/ 
	getControllerName : function() {
		return "zfiorifacilite.View_consultant";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf zfiorifacilite.View_consultant
	*/ 
	createContent : function(oController) {

		jQuery.sap.require("sap.ui.table.Table");

		var oTable = new sap.ui.table.Table({
			 width : "100%",
			 rowHeight : 50,
			 title : "List of Consultants",
			 selectionMode : sap.ui.table.SelectionMode.None
			});

		// Add a column for the ID
		oTable.addColumn(new sap.ui.table.Column({
				
				label : new sap.ui.commons.Label({
					text : "ID"
			    }),	
		
			    template : new sap.ui.commons.TextView({
			    	text : "{Zid}"
			    }),
			    	 
			    sortProperty : "ID"
		}));
			    	
		// Add a column for the Name
		oTable.addColumn(new sap.ui.table.Column({
			
			label : new sap.ui.commons.Label({
				text : "Name"
		    }),	
	
		    template : new sap.ui.commons.TextView({
		    	text : "{Zname}"
		    }),
		    	 
		    sortProperty : "Name"
		}));
	
		// Add a column for the FirstName
		oTable.addColumn(new sap.ui.table.Column({
			
			label : new sap.ui.commons.Label({
				text : "FirstName"
		    }),	
	
		    template : new sap.ui.commons.TextView({
		    	text : "{ZfirstName}"
		    }),
		    	 
		    sortProperty : "FirstName"
		}));
		
		// Add a column for the age
		oTable.addColumn(new sap.ui.table.Column({
			
			label : new sap.ui.commons.Label({
				text : "Age"
		    }),	
	
		    template : new sap.ui.commons.TextView({
		    	text : "{ZAge}"
		    }),
		    	 
		    sortProperty : "Age"
		}));
		
		oTable.bindRows("/ZFacilite_list");
		return oTable;

}});
