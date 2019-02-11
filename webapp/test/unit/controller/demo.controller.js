/*global QUnit*/

sap.ui.define([
	"demo/sapui5ml-imageclassifier/controller/demo.controller"
], function (oController) {
	"use strict";

	QUnit.module("demo Controller");

	QUnit.test("I should test the demo controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});