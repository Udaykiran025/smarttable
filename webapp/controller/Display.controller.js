sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.mit.smarttable.smarttable.controller.smarttable", {
        onInit: function () {
            var oModel = new sap.ui.model.json.JSONModel(); 
            this.getView().setModel(oModel,"ObjectData");
           


            var oRouter = this.getOwnerComponent().getRouter();
			oRouter.getRoute("Display").attachMatched(this._onRouteMatched, this);

        },
        _onRouteMatched : function (oEvent) {
        
			var oArgs, oView;
			oArgs = oEvent.getParameter("arguments");
			oView = this.getView();
          
           var oModel = this.getView().getModel();

           oModel.read("/Products("+parseInt(oArgs.ProductId)+")", {
            urlParameters:{
                "$expand" : "Order_Details"
                
           },  
            success: function(odata) {
            debugger
                this.getView().getModel("ObjectData").setData(odata)
              
            }.bind(this),
            error: function(error) {
            },
            
           })

          /* oModel.read("/Products("+parseInt(oArgs.ProductId)+")", {
            urlParameters:{
                "$expand" : "Supplier"
               
           },  
            success: function(odata) {
            debugger
                this.getView().getModel("ObjectData").setData(odata)
              
            }.bind(this),
            error: function(error) {
            },
           })*/

           
           

           

		},
      
    });
});


