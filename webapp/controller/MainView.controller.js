sap.ui.define([
  "com/myorg/myUI5App/controller/BaseController",
  "sap/ui/model/resource/ResourceModel"
], function (Controller, ResourceModel) {
  "use strict";

  return Controller.extend("com.myorg.myUI5App.controller.MainView", {
    onInit: function () {
      // set i18n model on view
      var i18nModel = new ResourceModel({
        bundleName: "com.myorg.myUI5App.i18n.i18n"
      });
      this.getView().setModel(i18nModel, "i18n");
    }
  });
  });
