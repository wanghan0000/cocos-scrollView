
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/Horizontal/Adapter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9Ib3Jpem9udGFsL0FkYXB0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsd0VBQXVHO0FBQ3ZHLG1DQUE4QjtBQUV4QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBd0I7SUFBN0Q7UUFBQSxxRUEwQkM7UUF0QlcsV0FBSyxHQUFHLEVBQUUsQ0FBQzs7SUFzQnZCLENBQUM7SUFwQkcsMEJBQVEsR0FBUixVQUFTLEtBQUs7UUFDVixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssSUFBSSxFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELDhCQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO0lBQzdCLENBQUM7SUFFRCxvQ0FBa0IsR0FBbEIsVUFBbUIsS0FBYTtRQUM1QixJQUFNLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN2QyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsZ0JBQU0sQ0FBQyxDQUFDO0lBQ3JDLENBQUM7SUFFRCxrQ0FBZ0IsR0FBaEIsVUFBaUIsTUFBYyxFQUFFLEtBQVU7UUFDdkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHlCQUFPLEdBQVAsVUFBUSxLQUFVO1FBQ2QsT0FBTyxFQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLDBCQUFVLEVBQUMsQ0FBQztJQUM1QyxDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ0k7SUFGUCxPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBMEIzQjtJQUFELGNBQUM7Q0ExQkQsQUEwQkMsQ0ExQm9DLGdDQUFnQixHQTBCcEQ7a0JBMUJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVsbEhlaWdodCwgV0hSZWN5Y2xlQWRhcHRlciwgV0hSZWN5Y2xlSG9sZGVyIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9XSFJlY3ljbGVWaWV3XCI7XG5pbXBvcnQgSG9sZGVyIGZyb20gXCIuL0hvbGRlclwiO1xuXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkYXB0ZXIgZXh0ZW5kcyBXSFJlY3ljbGVBZGFwdGVyPEhvbGRlcj4ge1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcHJpdmF0ZSBpdGVtOiBjYy5QcmVmYWI7XG5cbiAgICBwcml2YXRlIGRhdGFzID0gW107XG5cbiAgICBzZXREYXRhcyhkYXRhcyl7XG4gICAgICAgIHRoaXMuZGF0YXMgPSBkYXRhcyB8fCBbXTtcbiAgICB9XG5cbiAgICBnZXRJdGVtQ291bnQoKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGF0YXMubGVuZ3RoO1xuICAgIH1cblxuICAgIG9uQ3JlYXRlVmlld0hvbGRlcihpbmRleDogbnVtYmVyKTogSG9sZGVyIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbSk7XG4gICAgICAgIHJldHVybiBub2RlLmdldENvbXBvbmVudChIb2xkZXIpO1xuICAgIH1cbiAgICBcbiAgICBvbkJpbmRWaWV3SG9sZGVyKGhvbGRlcjogSG9sZGVyLCBpbmRleDogYW55KSB7XG4gICAgICAgIGhvbGRlci5vbkJpbmQodGhpcy5kYXRhc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGdldFNpemUoaW5kZXg6IGFueSk6IHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IH0ge1xuICAgICAgICByZXR1cm4ge3dpZHRoOiAxMDAsIGhlaWdodDogRnVsbEhlaWdodH07XG4gICAgfVxufVxuIl19