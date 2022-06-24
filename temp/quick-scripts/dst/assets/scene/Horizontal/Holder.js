
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scene/Horizontal/Holder.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4dd66WWQ3JEG7CiukxPZEnB', 'Holder');
// scene/Horizontal/Holder.ts

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
var Holder = /** @class */ (function (_super) {
    __extends(Holder, _super);
    function Holder() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.text = null;
        return _this;
    }
    Holder.prototype.onBind = function (data) {
        this.text.string = data.index + '';
    };
    __decorate([
        property(cc.Label)
    ], Holder.prototype, "text", void 0);
    Holder = __decorate([
        ccclass
    ], Holder);
    return Holder;
}(WHRecycleView_1.WHRecycleHolder));
exports.default = Holder;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY2VuZS9Ib3Jpem9udGFsL0hvbGRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRix3RUFBeUU7QUFNbkUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQWU7SUFBbkQ7UUFBQSxxRUFRQztRQUxXLFVBQUksR0FBWSxJQUFJLENBQUM7O0lBS2pDLENBQUM7SUFIRyx1QkFBTSxHQUFOLFVBQU8sSUFBc0I7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUpEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7d0NBQ1U7SUFIWixNQUFNO1FBRDFCLE9BQU87T0FDYSxNQUFNLENBUTFCO0lBQUQsYUFBQztDQVJELEFBUUMsQ0FSbUMsK0JBQWUsR0FRbEQ7a0JBUm9CLE1BQU0iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuaW1wb3J0IHsgV0hSZWN5Y2xlSG9sZGVyIH0gZnJvbSBcIi4uLy4uL3NjcmlwdHMvY29tcG9uZW50cy9XSFJlY3ljbGVWaWV3XCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSG9yaXpvbnRhbEVudGl0eXtcbiAgICBpbmRleDogbnVtYmVyXG59XG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSG9sZGVyIGV4dGVuZHMgV0hSZWN5Y2xlSG9sZGVyIHtcblxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgICBwcml2YXRlIHRleHQ6Y2MuTGFiZWwgPSBudWxsO1xuXG4gICAgb25CaW5kKGRhdGE6IEhvcml6b250YWxFbnRpdHkpe1xuICAgICAgICB0aGlzLnRleHQuc3RyaW5nID0gZGF0YS5pbmRleCArICcnO1xuICAgIH1cbn1cbiJdfQ==