"use strict";
cc._RF.push(module, 'cb2d42f3DxMJ7wk7Pk64kiP', 'Adapter');
// scene/Horizontal/Adapter.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var WHRecycleView_1 = require("../../scripts/components/WHRecycleView");
var Holder_1 = require("./Holder");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Adapter = /** @class */ (function (_super) {
    __extends(Adapter, _super);
    function Adapter() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.datas = [];
        return _this;
    }
    Adapter.prototype.setDatas = function (datas) {
        this.datas = datas || [];
    };
    Adapter.prototype.getItemCount = function () {
        return this.datas.length;
    };
    Adapter.prototype.onCreateViewHolder = function (index) {
        var node = cc.instantiate(this.item);
        return node.getComponent(Holder_1.default);
    };
    Adapter.prototype.onBindViewHolder = function (holder, index) {
        holder.onBind(this.datas[index]);
    };
    Adapter.prototype.getSize = function (index) {
        return { width: 100, height: WHRecycleView_1.FullHeight };
    };
    __decorate([
        property(cc.Prefab)
    ], Adapter.prototype, "item", void 0);
    Adapter = __decorate([
        ccclass
    ], Adapter);
    return Adapter;
}(WHRecycleView_1.WHRecycleAdapter));
exports.default = Adapter;

cc._RF.pop();