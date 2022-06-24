
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/Horizontal/HorizontalScene.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9Ib3Jpem9udGFsL0hvcml6b250YWxTY2VuZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix3RUFBbUU7QUFHN0QsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFHNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUE2Q0M7UUExQ0csaUJBQVcsR0FBa0IsSUFBSSxDQUFDO1FBR2xDLGFBQU8sR0FBZSxJQUFJLENBQUM7UUFHM0IsZ0JBQVUsR0FBZSxJQUFJLENBQUM7UUFHOUIsbUJBQWEsR0FBZSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFHLEVBQUUsQ0FBQzs7SUErQnZCLENBQUM7SUE3QkcseUJBQU0sR0FBTjtRQUNJLElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzNDLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBa0IsQ0FBQztRQUNwRCxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNyQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzlDO1FBQ0QsTUFBTTtRQUNOLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLFFBQVE7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELDRCQUFTLEdBQVQ7UUFDSSxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QyxJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQWtCLENBQUM7UUFDcEQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMxQixJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO1NBQ3BCO1FBQ0QsTUFBTTtRQUNOLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLFFBQVE7UUFDUixJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixFQUFFLENBQUM7SUFDNUMsQ0FBQztJQUVELGdDQUFhLEdBQWI7UUFDSSxJQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBekNEO1FBREMsUUFBUSxDQUFDLHVCQUFhLENBQUM7aURBQ1U7SUFHbEM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzs2Q0FDTTtJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2dEQUNTO0lBRzlCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7bURBQ1k7SUFaaEIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQTZDNUI7SUFBRCxlQUFDO0NBN0NELEFBNkNDLENBN0NxQyxFQUFFLENBQUMsU0FBUyxHQTZDakQ7a0JBN0NvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmltcG9ydCBXSFJlY3ljbGVWaWV3IGZyb20gXCIuLi8uLi9zY3JpcHRzL2NvbXBvbmVudHMvV0hSZWN5Y2xlVmlld1wiO1xuaW1wb3J0IEFkYXB0ZXIgZnJvbSBcIi4vQWRhcHRlclwiO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3Q2xhc3MgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgQHByb3BlcnR5KFdIUmVjeWNsZVZpZXcpXG4gICAgcmVjeWNsZVZpZXc6IFdIUmVjeWNsZVZpZXcgPSBudWxsO1xuXG4gICAgQHByb3BlcnR5KGNjLkVkaXRCb3gpXG4gICAgZWRpdGJveDogY2MuRWRpdEJveCA9IG51bGw7XG5cbiAgICBAcHJvcGVydHkoY2MuRWRpdEJveClcbiAgICBhZGRFZGl0Qm94OiBjYy5FZGl0Qm94ID0gbnVsbDtcblxuICAgIEBwcm9wZXJ0eShjYy5FZGl0Qm94KVxuICAgIGRlbGV0ZUVkaXRCb3g6IGNjLkVkaXRCb3ggPSBudWxsO1xuXG4gICAgcHJpdmF0ZSBkYXRhcyA9IFtdO1xuXG4gICAgYWRkTnVtKCkge1xuICAgICAgICBjb25zdCBudW0gPSBOdW1iZXIodGhpcy5hZGRFZGl0Qm94LnN0cmluZyk7XG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLnJlY3ljbGVWaWV3LmFkYXB0ZXIgYXMgQWRhcHRlcjtcbiAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHRoaXMuZGF0YXMubGVuZ3RoO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bTsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLmRhdGFzLnB1c2goeyBpbmRleDogc3RhcnRJbmRleCArIGkgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy/mlbDmja7loavlhYVcbiAgICAgICAgYWRhcHRlci5zZXREYXRhcyh0aGlzLmRhdGFzKTtcbiAgICAgICAgLy/liLfmlrDoioLngrnmmL7npLpcbiAgICAgICAgdGhpcy5yZWN5Y2xlVmlldy5ub3RpZnlEYXRhU2V0Q2hhbmdlZCgpO1xuICAgIH1cblxuICAgIGRlbGV0ZU51bSgpIHtcbiAgICAgICAgY29uc3QgbnVtID0gTnVtYmVyKHRoaXMuZGVsZXRlRWRpdEJveC5zdHJpbmcpO1xuICAgICAgICBjb25zdCBhZGFwdGVyID0gdGhpcy5yZWN5Y2xlVmlldy5hZGFwdGVyIGFzIEFkYXB0ZXI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuZGF0YXMucG9wKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/mlbDmja7loavlhYVcbiAgICAgICAgYWRhcHRlci5zZXREYXRhcyh0aGlzLmRhdGFzKTtcbiAgICAgICAgLy/liLfmlrDoioLngrnmmL7npLpcbiAgICAgICAgdGhpcy5yZWN5Y2xlVmlldy5ub3RpZnlEYXRhU2V0Q2hhbmdlZCgpO1xuICAgIH1cblxuICAgIHNjcm9sbFRvSW5kZXgoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gTnVtYmVyKHRoaXMuZWRpdGJveC5zdHJpbmcpO1xuICAgICAgICB0aGlzLnJlY3ljbGVWaWV3LnNjcm9sbFRvSW5kZXgoaW5kZXgpO1xuICAgIH1cbn1cbiJdfQ==