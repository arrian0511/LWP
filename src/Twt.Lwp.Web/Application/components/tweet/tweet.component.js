System.register(["@angular/router", "@angular/core", "../../services/app.service"], function(exports_1, context_1) {
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
    var router_1, core_1, app_service_1;
    var TweetComponent;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_service_1_1) {
                app_service_1 = app_service_1_1;
            }],
        execute: function() {
            TweetComponent = (function () {
                /// Constructor
                function TweetComponent(iService, iRouter, iActiveRoute) {
                    this._mService = iService;
                    this._mRouter = iRouter;
                    this._mActiveRoute = iActiveRoute;
                    this.mApiUrl = "api/tweet/";
                    this.mTweets = new Array();
                }
                TweetComponent.prototype._OnGetAllRecord = function () {
                    var _this = this;
                    /// Get All Record
                    var data = this._mService.GetAll(this.mApiUrl + "GetAll");
                    data.subscribe(function (_data) {
                        _this.mTweets = _data;
                    }, function (_error) {
                        //this.errCord = _error;
                    });
                };
                /// On Click Get Record
                TweetComponent.prototype.OnClickGetRecord = function (_user) {
                    var _this = this;
                    var _record = this._mService.GetByUser(this.mApiUrl + "GetByUser/", _user);
                    // Clear Current Record 
                    this.mTweets = new Array();
                    // Set Data to forms
                    _record.subscribe(function (item) {
                        var _tweet = item; // Employee Data
                        _this.mTweets.push(_tweet);
                    });
                };
                TweetComponent = __decorate([
                    core_1.Component({
                        selector: "home",
                        templateUrl: "views/tweet/tweet.html"
                    }), 
                    __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router, router_1.ActivatedRoute])
                ], TweetComponent);
                return TweetComponent;
            }());
            exports_1("TweetComponent", TweetComponent);
        }
    }
});
//# sourceMappingURL=tweet.component.js.map