"use strict";
cc._RF.push(module, 'b7fa8mL8R5EDIi3WV45YnsP', 'HorizontalScene');
// scene/Horizontal/HorizontalScene.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var NewClass = /** @class */ (function (_super) {
    __extends(NewClass, _super);
    function NewClass() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.recycleView = null;
        _this.editbox = null;
        _this.addEditBox = null;
        _this.deleteEditBox = null;
        _this.datas = [];
        return _this;
    }
    NewClass.prototype.addNum = function () {
        var num = Number(this.addEditBox.string);
        var adapter = this.recycleView.adapter;
        var startIndex = this.datas.length;
        for (var i = 0; i < num; ++i) {
            this.datas.push({ index: startIndex + i });
        }
        //数据填充
        adapter.setDatas(this.datas);
        //刷新节点显示
        this.recycleView.notifyDataSetChanged();
    };
    NewClass.prototype.deleteNum = function () {
        var num = Number(this.deleteEditBox.string);
        var adapter = this.recycleView.adapter;
        for (var i = 0; i < num; ++i) {
            this.datas.pop();
        }
        //数据填充
        adapter.setDatas(this.datas);
        //刷新节点显示
        this.recycleView.notifyDataSetChanged();
    };
    NewClass.prototype.scrollToIndex = function () {
        var index = Number(this.editbox.string);
        this.recycleView.scrollToIndex(index);
    };
    __decorate([
        property(WHRecycleView_1.default)
    ], NewClass.prototype, "recycleView", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "editbox", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "addEditBox", void 0);
    __decorate([
        property(cc.EditBox)
    ], NewClass.prototype, "deleteEditBox", void 0);
    NewClass = __decorate([
        ccclass
    ], NewClass);
    return NewClass;
}(cc.Component));
exports.default = NewClass;

cc._RF.pop();