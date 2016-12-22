System.register(["@angular/core", "@angular/forms", "../../services/app.service"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, forms_1, app_service_1;
    var TweetComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                /// Constructor
                function TweetComponent(iService, iFb) {
                    this._mService = iService;
                    this._mFb = iFb;
                    this.mApiUrl = "api/tweet/";
                    this.mTweets = new Array();
                }
                TweetComponent.prototype.ngOnInit = function () {
                    /// Initialize Form Conrols
                    this._OnInitForm();
                };
                TweetComponent.prototype._OnInitForm = function () {
                    /// Set Control
                    this._mTxtUserName = new forms_1.FormControl(null, forms_1.Validators.required);
                    // this._mRecCount		= new FormControl (null, Validators.required);
                    /// Set Form Data
                    this.mFormCreate = this._mFb.group({
                        UserName: this._mTxtUserName,
                        RecCount: this._mRecCount
                    });
                };
                TweetComponent.prototype._OnClearFormCtl = function () {
                    /// Clear Form Control
                    this._mTxtUserName.reset();
                    this._mRecCount.reset();
                };
                TweetComponent.prototype.OnSubmitForm = function (_event, _value) {
                    var _this = this;
                    var _record = this._mService.GetByUser(this.mApiUrl + "GetByUser/", this._mTxtUserName.value);
                    //var _data = this._mRecCount.value;
                    // Clear Current Record 
                    this.mTweets = new Array();
                    // Set Data to forms
                    _record.subscribe(function (item) {
                        var _tweet = item; // Employee Data
                        _this.mTweets = _tweet;
                    });
                };
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: "home",
                        templateUrl: "views/tweet/tweet.html"
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, forms_1.FormBuilder])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map