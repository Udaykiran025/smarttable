sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("com.mit.smarttable.smarttable.controller.smarttable", {
        onInit: function () {

        },

        onSearch: function(evt){
          
            var oFilter = [];
            
            //var oSelectQuery = evt.getSource().getFilterGroupItems()[2].getControl().getSelectedItems()[0].getText()
            
            for (var i = 0; i < evt.getSource().getFilterGroupItems().length; i++){
            debugger
            if (evt.getSource().getFilterGroupItems()[i].getGroupName() === "Group1"){
              if(evt.getSource().getFilterGroupItems()[i].getControl().getValue() !== '' && evt.getSource().getFilterGroupItems()[i].getName() === "Input"){
                  oFilter.push( new sap.ui.model.Filter("ProductName",sap.ui.model.FilterOperator.Contains ,evt.getSource().getFilterGroupItems()[i].getControl().getValue()))
            }
              if(evt.getSource().getFilterGroupItems()[i].getControl().getValue() !== '' && evt.getSource().getFilterGroupItems()[i].getName() === "Input2"){
                  oFilter.push( new sap.ui.model.Filter("UnitsInStock",sap.ui.model.FilterOperator.EQ, parseInt(evt.getSource().getFilterGroupItems()[i].getControl().getValue())))
            }
          }
            if (evt.getSource().getFilterGroupItems()[i].getGroupName() === "Group2") {
              if(evt.getSource().getFilterGroupItems()[2].getControl().getSelectedKey() !== '' ){
                  oFilter.push(new sap.ui.model.Filter("Discontinued", sap.ui.model.FilterOperator.EQ, JSON.parse(evt.getSource().getFilterGroupItems()[i].getControl().getSelectedKey())
                  ));
  
            }
          }
        }
      
          //if(oFilter.length>0){
           this.byId("_IDGenTable1").getBinding("items").filter(oFilter);
          //}
      },
          onNavObject: function(evt){
           debugger
           var oRouter = this.getOwnerComponent().getRouter(); 
            oRouter.navTo("Display",{
                
                ProductId:evt.getSource().getCells()[0].getText()
            });
  
          }
      });
  });
  
  
  /// var oQuery = evt.getSource().getFilterGroupItems()[0].getControl().getValue();
  
             // if(oSelectQuery){
               //oFilter.push( new sap.ui.model. Filter("ReorderLevel", sap.ui.model. FilterOperator. All, JSON.parse(oSelectQuery)));       
              ///}
                   //oFilter.push(new sap.ui.model.Filter("ProductName", sap.ui.model. FilterOperator.Contains, oQuery));
  
    
