System.register(["@angular/core", "@angular/http", "rxjs/Observable"], function(exports_1, context_1) {
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
    var core_1, http_1, Observable_1;
    var AppService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            }],
        execute: function() {
            AppService = (function () {
                function AppService(iHttp) {
                    this.mEmpUrl = "api/employee/";
                    this.mHttp = iHttp;
                }
                AppService.prototype.GetAll = function (_url) {
                    return this.mHttp.get(_url)
                        .map(function (response) { return response.json(); })
                        ._catch(this.handleError);
                };
                AppService.prototype.GetById = function (_url, _id) {
                    return this.mHttp.get(_url + _id)
                        .map(function (response) { return response.json(); })
                        ._catch(this.handleError);
                };
                AppService.prototype.GetByUser = function (_url, _user) {
                    return this.mHttp.get(_url + _user)
                        .map(function (response) { return response.json(); })
                        ._catch(this.handleError);
                };
                AppService.prototype.CreateRecord = function (_url, _record) {
                    var body = JSON.stringify(_record);
                    var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    var options = new http_1.RequestOptions({ headers: headers });
                    return this.mHttp.post(_url, body, options)
                        .map(function (res) { return res.json().message; })
                        ._catch(this.handleError);
                };
                AppService.prototype.UpdateRecord = function (_url, _record, _id) {
                    var updateUrl = _url + _id;
                    var body = JSON.stringify(_record);
                    var headers = new http_1.Headers();
                    headers.append('Content-Type', 'application/json');
                    return this.mHttp.put(updateUrl, body, { headers: headers })
                        .map(function (response) { return response.json(); })
                        ._catch(this.handleError);
                };
                AppService.prototype.DeleteRecord = function (_url, _id) {
                    return this.mHttp.delete(_url + _id)
                        .map(function (response) { return response.json(); })
                        ._catch(this.handleError);
                };
                AppService.prototype.extractData = function (_response) {
                    var body = _response.json();
                    return body.data || {};
                };
                AppService.prototype.handleError = function (_error) {
                    var errMsg;
                    if (_error instanceof http_1.Response) {
                        var body = _error.json() || '';
                        var err = body.error || JSON.stringify(body);
                        errMsg = _error.status + " - " + (_error.statusText || '') + " " + err;
                    }
                    else {
                        errMsg = _error.message ? _error.message : _error.toString();
                    }
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg || "Server error");
                };
                AppService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], AppService);
                return AppService;
            }());
            exports_1("AppService", AppService);
        }
    }
});
//# sourceMappingURL=app.service.js.map