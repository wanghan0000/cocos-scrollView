"use strict";
cc._RF.push(module, '32d7aDGDdBBTJ8SuuioTAYr', 'WHRecycleView');
// scripts/components/WHRecycleView.ts

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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FullWidth = exports.FullHeight = exports.WHRecycleAdapter = exports.WHRecycleHolder = exports.WH_RecycleView__AxisDirection = exports.WH_RecycleView_Type = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property, menu = _a.menu;
//2000以内则有滚动动画
var AUTO_SCROLL_MAX_DISTANCE = 2000;
var WH_RecycleView_Type;
(function (WH_RecycleView_Type) {
    /**
     * @zh 水平布局。
     */
    WH_RecycleView_Type[WH_RecycleView_Type["HORIZONTAL"] = 1] = "HORIZONTAL";
    /**
     * @zh 垂直布局。
     */
    WH_RecycleView_Type[WH_RecycleView_Type["VERTICAL"] = 2] = "VERTICAL";
    /**
     * @zh 网格布局。
     */
    WH_RecycleView_Type[WH_RecycleView_Type["GRID"] = 3] = "GRID";
})(WH_RecycleView_Type = exports.WH_RecycleView_Type || (exports.WH_RecycleView_Type = {}));
var WH_RecycleView__AxisDirection;
(function (WH_RecycleView__AxisDirection) {
    /**
     * @zh 进行水平方向布局。
     */
    WH_RecycleView__AxisDirection[WH_RecycleView__AxisDirection["HORIZONTAL"] = 0] = "HORIZONTAL";
    /**
     * @zh 进行垂直方向布局。
     */
    WH_RecycleView__AxisDirection[WH_RecycleView__AxisDirection["VERTICAL"] = 1] = "VERTICAL";
})(WH_RecycleView__AxisDirection = exports.WH_RecycleView__AxisDirection || (exports.WH_RecycleView__AxisDirection = {}));
var WHRecycleView = /** @class */ (function (_super) {
    __extends(WHRecycleView, _super);
    function WHRecycleView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.footer = null;
        _this.footerOffset = 0;
        _this.footerEvents = [];
        _this.itemClick = true;
        _this._layoutType = WH_RecycleView_Type.VERTICAL;
        _this._startAxis = WH_RecycleView__AxisDirection.VERTICAL;
        _this._paddingLeft = 0;
        _this._paddingRight = 0;
        _this._paddingTop = 0;
        _this._paddingBottom = 0;
        _this._spacingX = 0;
        _this._spacingY = 0;
        _this._adapter = null;
        _this._adapterNode = null;
        /**滚动器一半的值 如果是横向布局则是 width/2 纵向布局则是 height/2 */
        _this.halfScrollView = 0;
        /**上一次content的Y值，用于和现在content的Y值比较，得出是向上还是向下滚动 */
        _this.lastContentPosY = 0;
        /**上一次content的X值，用于和现在content的X值比较，得出是向左还是向右滚动 */
        _this.lastContentPosX = 0;
        /**item节点内存池 */
        _this._pool = new Map();
        /**当前现实在屏幕里的item */
        _this._childrens = new Array();
        /**刷新的函数 */
        _this.updateFun = function () { };
        _this.scrollView = null;
        _this._contentView = null;
        _this.footerState = 0; //0没有加载 1 正在加载 2加载完成
        _this.isFristCreate = true;
        /**是否滚动容器 */
        _this.bScrolling = false;
        _this.tag = 0;
        return _this;
    }
    Object.defineProperty(WHRecycleView.prototype, "adapterNode", {
        get: function () {
            return this._adapterNode;
        },
        set: function (v) {
            this._adapterNode = v;
            this._adapter = this._adapterNode.getComponent(WHRecycleAdapter);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WHRecycleView.prototype, "type", {
        get: function () {
            return this._layoutType;
        },
        set: function (v) {
            this._layoutType = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WHRecycleView.prototype, "startAxis", {
        get: function () {
            return this._startAxis;
        },
        set: function (v) {
            this._startAxis = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WHRecycleView.prototype, "paddingLeft", {
        get: function () {
            return this._paddingLeft;
        },
        set: function (v) {
            this._paddingLeft = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WHRecycleView.prototype, "paddingRight", {
        get: function () {
            return this._paddingRight;
        },
        set: function (v) {
            this._paddingRight = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WHRecycleView.prototype, "paddingTop", {
        get: function () {
            return this._paddingTop;
        },
        set: function (v) {
            this._paddingTop = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WHRecycleView.prototype, "paddingBottom", {
        get: function () {
            return this._paddingBottom;
        },
        set: function (v) {
            this._paddingBottom = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WHRecycleView.prototype, "spacingX", {
        get: function () {
            return this._spacingX;
        },
        set: function (v) {
            this._spacingX = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WHRecycleView.prototype, "spacingY", {
        get: function () {
            return this._spacingY;
        },
        set: function (v) {
            this._spacingY = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(WHRecycleView.prototype, "adapter", {
        get: function () {
            return this._adapter;
        },
        enumerable: false,
        configurable: true
    });
    WHRecycleView.prototype.onLoad = function () {
        var _a, _b, _c;
        this.scrollView = this.node.getComponent(cc.ScrollView);
        this._contentView = this.scrollView.content;
        (_a = this.node.getComponent(cc.Widget)) === null || _a === void 0 ? void 0 : _a.updateAlignment();
        (_b = this.scrollView.content.parent.getComponent(cc.Widget)) === null || _b === void 0 ? void 0 : _b.updateAlignment();
        (_c = this.scrollView.content.getComponent(cc.Widget)) === null || _c === void 0 ? void 0 : _c.updateAlignment();
        this.scrollView.node.on('scrolling', this._onScrolling, this);
    };
    WHRecycleView.prototype.start = function () {
        this._initLayout();
    };
    WHRecycleView.prototype.scrollToIndex = function (index) {
        if (index >= this.adapter.getItemCount()) {
            index = this.adapter.getItemCount() - 1;
        }
        if (index < 0) {
            index = 0;
        }
        var point = this._calculationPosition(index);
        var size = this.adapter.getSize(index);
        var type = this._layoutType;
        var vec = new cc.Vec2(point.x, point.y);
        var setpEnable = true;
        var topIndex = 0;
        if (this._childrens.length) {
            topIndex = this._childrens[0].itemIndex;
        }
        var point2 = this._calculationPosition(topIndex);
        var vec2 = new cc.Vec2(point2.x, point2.y);
        var size2 = this.adapter.getSize(topIndex);
        if (WH_RecycleView_Type.VERTICAL === type) {
            vec.y = -(point.y + size.height / 2);
            vec2.y = -(point2.y + size2.height / 2);
        }
        else if (WH_RecycleView_Type.HORIZONTAL === type) {
            vec.x = point.x - size.width / 2;
            vec2.x = point2.x - size2.width / 2;
        }
        setpEnable = Math.abs(vec.len() - vec2.len()) > AUTO_SCROLL_MAX_DISTANCE;
        if (setpEnable) {
            if (WH_RecycleView_Type.VERTICAL === type) {
                if (topIndex < index) {
                    vec2.y = vec.y - AUTO_SCROLL_MAX_DISTANCE;
                }
                else {
                    vec2.y = vec.y + AUTO_SCROLL_MAX_DISTANCE;
                }
                this.scrollView.scrollToOffset(vec2, 0);
                this.lastContentPosY = this._contentView.position.y;
            }
            else {
                if (topIndex < index) {
                    vec2.x = vec.x - AUTO_SCROLL_MAX_DISTANCE;
                }
                else {
                    vec2.x = vec.x + AUTO_SCROLL_MAX_DISTANCE;
                }
                this.scrollView.scrollToOffset(vec2, 0);
                this.lastContentPosX = this._contentView.position.x;
            }
        }
        this.scrollView.scrollToOffset(vec, 1);
    };
    //刷新数据
    WHRecycleView.prototype.notifyDataSetChanged = function () {
        //let start = Date.now();
        var count = this.adapter.getItemCount();
        var childs = this._childrens;
        var type = this._layoutType;
        //重新计算高度
        var oldHeight = this._contentView.height;
        var oldWidth = this._contentView.width;
        this._countParam();
        var delta;
        if (WH_RecycleView_Type.VERTICAL === type) {
            delta = oldHeight - this._contentView.height;
        }
        else if (WH_RecycleView_Type.HORIZONTAL === type) {
            delta = this._contentView.width - oldWidth;
        }
        if (childs.length == 0) {
            this.isFristCreate = true;
        }
        else {
            this.isFristCreate = false;
        }
        //先删除掉所有显示的节点
        for (var i = 0; i < childs.length; ++i) {
            //无法获取到原数据 所以这里不做缓存
            this._removeItem(childs[i]);
        }
        this._childrens.length = 0;
        if (delta >= 0 && delta < 0.0001) {
            //由上向下创建
            this._createNextItem();
        }
        else if (delta < 0) {
            this._createNextItem();
        }
        else {
            //获取当前位置
            var index = this.getScreenLastIndex();
            if (index < count) {
                this._createNextItem();
            }
            else {
                if (WH_RecycleView_Type.VERTICAL === type) {
                    this.scrollView.scrollToBottom();
                    this.lastContentPosY = this._contentView.position.y;
                }
                else if (WH_RecycleView_Type.HORIZONTAL === type) {
                    this.scrollView.scrollToRight();
                }
                this._createNextItem();
            }
        }
        // let stop = Date.now();
        // console.log(stop - start);
    };
    /**
    * 触发加载完成
    * @param more 是否还有更多
    */
    WHRecycleView.prototype.loadMoreFinish = function (finish) {
        if (finish === void 0) { finish = false; }
        if (finish) {
            this.footerState = 0;
        }
        else {
            this.footerState = 2;
        }
    };
    WHRecycleView.prototype._initLayout = function () {
        this._countParam();
        this.startCreateItems();
    };
    WHRecycleView.prototype._countParam = function () {
        var type = this._layoutType;
        var pdTop = this._paddingTop;
        var pdBottom = this._paddingBottom;
        var pdLeft = this._paddingLeft;
        var pdRight = this._paddingRight;
        var spaceX = this._spacingX;
        var spaceY = this._spacingY;
        var contentView = this._contentView;
        var footer = this.footer;
        if (WH_RecycleView_Type.VERTICAL == type) {
            this.halfScrollView = this.scrollView.node.height / 2;
            var count = this.adapter.getItemCount() - 1 < 0 ? 0 : this.adapter.getItemCount();
            var total = pdTop + pdBottom + spaceY * count;
            for (var i = 0; i < this.adapter.getItemCount(); ++i) {
                total += this.adapter.getSize(i).height;
            }
            if (total < this.scrollView.node.height) {
                total = this.scrollView.node.height;
            }
            contentView.height = total + ((footer === null || footer === void 0 ? void 0 : footer.height) || 0);
            if (footer) {
                footer.position = new cc.Vec3(footer.position.x, -contentView.height * contentView.anchorY + footer.height / 2);
                this.footerOffset = footer.height;
            }
            contentView.width =
                this.scrollView.node.width - pdLeft - pdRight;
            this.updateFun = this.updateV;
        }
        else if (WH_RecycleView_Type.HORIZONTAL === type) {
            this.halfScrollView = this.scrollView.node.width / 2;
            var count = this.adapter.getItemCount() - 1 < 0 ? 0 : this.adapter.getItemCount();
            var total = pdLeft + pdRight + spaceX * count;
            for (var i = 0; i < this.adapter.getItemCount(); ++i) {
                total += this.adapter.getSize(i).width;
            }
            if (total < this.scrollView.node.width) {
                total = this.scrollView.node.width;
            }
            contentView.width = total + ((footer === null || footer === void 0 ? void 0 : footer.width) || 0);
            if (footer) {
                footer.position = new cc.Vec3(contentView.width * (1 - contentView.anchorX) - footer.width / 2, footer.position.y);
                this.footerOffset = footer.width;
            }
            contentView.height =
                this.scrollView.node.height - pdTop - pdBottom;
            this.updateFun = this.updateH;
        }
        else if (WH_RecycleView_Type.GRID === type) {
        }
    };
    WHRecycleView.prototype.startCreateItems = function () {
        var startIndex = 0;
        // const parent = this._contentView;
        // //获取当前一屏可以创建多少个item
        // const total = this._getInScreenMaxNumber(startIndex);
        // const maxNum = this.adapter.getItemCount();
        this._createNextItem();
        //let isBreak = false;
        // this.gener = this.getGeneratorLength(total, (i) => {
        //     if (isBreak) {
        //         return false;
        //     }
        //     let index = startIndex + i;
        //     if (index >= maxNum) {
        //         isBreak = true;
        //         return false;
        //     }
        //     if (this._inScreen(index)) {
        //         const item: WHRecycleHolder = this._createItem(index);
        //         parent.addChild(item.node);
        //         this._childrens.push(item);
        //     } else {
        //         isBreak = true;
        //         return false;
        //     }
        //     return true;
        // });
        // this.exeGenerator(this.gener, 4);
    };
    WHRecycleView.prototype._createItem = function (index) {
        var item;
        var itemType = this.adapter.getType(index);
        item = this.getItem(itemType, index);
        item.itemIndex = index;
        item.node.position = this._calculationPosition(index);
        return item;
    };
    //判断是否存在屏幕里
    WHRecycleView.prototype._inScreen = function (index) {
        if (index < 0 || index >= this.adapter.getItemCount()) {
            return false;
        }
        var point = this._calculationPosition(index);
        point = this._getPositionByPoint(point);
        var size = this.adapter.getSize(index);
        return this._pointHitScreen(point, size);
    };
    WHRecycleView.prototype._inScreenByItem = function (item) {
        if (!item) {
            return;
        }
        var index = item.itemIndex;
        if (index < 0 || index >= this.adapter.getItemCount()) {
            return false;
        }
        var point = this._getPositionInView(item);
        var size = this.adapter.getSize(index);
        return this._pointHitScreen(point, size);
    };
    WHRecycleView.prototype._pointHitScreen = function (point, size) {
        var type = this._layoutType;
        if (WH_RecycleView_Type.VERTICAL === type) {
            if (point.y - size.height / 2 > this.halfScrollView ||
                point.y + size.height / 2 < -this.halfScrollView) {
                return false;
            }
        }
        else if (WH_RecycleView_Type.HORIZONTAL === type) {
            if (point.x + size.width / 2 < -this.halfScrollView ||
                point.x - size.width / 2 > this.halfScrollView) {
                return false;
            }
        }
        else {
            return false;
        }
        return true;
    };
    /**获取item在scrollView的局部坐标 */
    WHRecycleView.prototype._getPositionInView = function (item) {
        var worldPos = this._contentView.convertToWorldSpaceAR(item.node.position);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    };
    WHRecycleView.prototype._getPositionByPoint = function (point) {
        var worldPos = this._contentView.convertToWorldSpaceAR(point);
        var viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    };
    //计算坐标
    WHRecycleView.prototype._calculationPosition = function (index) {
        var retV3 = new cc.Vec3();
        var type = this._layoutType;
        var pdTop = this._paddingTop;
        var pdBottom = this._paddingBottom;
        var pdLeft = this._paddingLeft;
        var pdRight = this._paddingRight;
        var spaceX = this._spacingX;
        var spaceY = this._spacingY;
        var childs = this._childrens;
        var adapter = this._adapter;
        if (WH_RecycleView_Type.VERTICAL === type) {
            var item = void 0;
            for (var i = 0; i < childs.length; ++i) {
                item = childs[i];
                if (item.itemIndex == index + 1) {
                    retV3.x = item.node.position.x;
                    retV3.y =
                        item.node.position.y +
                            item.node.height / 2 +
                            spaceY +
                            adapter.getSize(index).height / 2;
                    break;
                }
                else if (item.itemIndex == index - 1) {
                    retV3.x = item.node.position.x;
                    retV3.y =
                        item.node.position.y -
                            item.node.height / 2 -
                            spaceY -
                            adapter.getSize(index).height / 2;
                    break;
                }
                item = null;
            }
            if (!item) {
                var toatlY = (1 - this._contentView.anchorY) * this._contentView.height;
                toatlY -= pdTop;
                for (var i = 0; i < index; ++i) {
                    toatlY -= adapter.getSize(i).height;
                    toatlY -= spaceY;
                }
                toatlY -= adapter.getSize(index).height / 2;
                retV3.y = toatlY;
            }
        }
        else if (WH_RecycleView_Type.HORIZONTAL === type) {
            var item = void 0;
            for (var i = 0; i < childs.length; ++i) {
                item = childs[i];
                if (item.itemIndex == index + 1) {
                    retV3.x =
                        item.node.position.x -
                            item.node.width / 2 -
                            spaceX -
                            adapter.getSize(index).width / 2;
                    retV3.y = item.node.position.y;
                    break;
                }
                else if (item.itemIndex == index - 1) {
                    retV3.x =
                        item.node.position.x +
                            item.node.width / 2 +
                            spaceX +
                            adapter.getSize(index).width / 2;
                    retV3.y = item.node.position.y;
                    break;
                }
                item = null;
            }
            if (!item) {
                var toatlX = -this._contentView.anchorX * this._contentView.width;
                toatlX += pdLeft;
                for (var i = 0; i < index; ++i) {
                    toatlX += adapter.getSize(i).width;
                    toatlX += spaceX;
                }
                toatlX += adapter.getSize(index).width / 2;
                retV3.x = toatlX;
            }
        }
        return retV3;
    };
    //获取一屏可以容纳创建多少个节点
    WHRecycleView.prototype._getInScreenMaxNumber = function (startIndex) {
        var type = this._layoutType;
        var pdTop = this._paddingTop;
        var pdBottom = this._paddingBottom;
        var pdLeft = this._paddingLeft;
        var pdRight = this._paddingRight;
        var spaceX = this._spacingX;
        var spaceY = this._spacingY;
        var adapter = this.adapter;
        var retNumber = 0;
        var total = 0;
        if (WH_RecycleView_Type.VERTICAL === type) {
            var count = this.adapter.getItemCount();
            var maxHeight = this.scrollView.node.height;
            if (startIndex == 0) {
                total = total + pdTop;
            }
            for (var i = startIndex; i < count; ++i) {
                if (total > maxHeight) {
                    break;
                }
                retNumber += 1;
                total += adapter.getSize(i).height;
                total += spaceY;
            }
        }
        else if (WH_RecycleView_Type.HORIZONTAL === type) {
            var count = this.adapter.getItemCount();
            var maxWidth = this.scrollView.node.width;
            if (startIndex == 0) {
                total = total + pdLeft;
            }
            for (var i = startIndex; i < count; ++i) {
                if (total > maxWidth) {
                    break;
                }
                retNumber += 1;
                total += adapter.getSize(i).width;
                total += spaceX;
            }
        }
        return retNumber;
    };
    WHRecycleView.prototype.updateV = function () {
        var isUp = this._contentView.position.y > this.lastContentPosY;
        var childs = this._childrens;
        for (var i = 0; i < childs.length; ++i) {
            // if (childs.length <= 1) {
            //     break;
            // }
            var item = childs[i];
            var viewPos = this._getPositionInView(item);
            if (isUp) {
                //如果item超过上边界 那么就移除
                if (viewPos.y - item.node.height / 2 > this.halfScrollView) {
                    this._removeItem(item);
                    childs.splice(i, 1);
                    i--;
                }
            }
            else {
                if (viewPos.y + item.node.height / 2 < -this.halfScrollView) {
                    this._removeItem(item);
                    childs.splice(i, 1);
                    i--;
                }
            }
        }
        if (isUp || !this._childrens.length) {
            //创建下一个
            this._createNextItem();
        }
        else {
            //创建上一个
            this._createPreviousItem();
        }
        this.lastContentPosY = this._contentView.position.y;
    };
    WHRecycleView.prototype.updateH = function () {
        var isLeft = this._contentView.position.x < this.lastContentPosX;
        var childs = this._childrens;
        for (var i = 0; i < childs.length; ++i) {
            // if (childs.length <= 1) {
            //     break;
            // }
            var item = childs[i];
            var viewPos = this._getPositionInView(item);
            if (isLeft) {
                //如果item超过左边界 那么就移除
                if (viewPos.x + item.node.width / 2 < -this.halfScrollView) {
                    this._removeItem(item);
                    childs.splice(i, 1);
                    i--;
                }
            }
            else {
                if (viewPos.x - item.node.width / 2 > this.halfScrollView) {
                    this._removeItem(item);
                    childs.splice(i, 1);
                    i--;
                }
            }
        }
        if (isLeft || !this._childrens.length) {
            //创建下一个
            this._createNextItem();
        }
        else {
            //创建上一个
            this._createPreviousItem();
        }
        this.lastContentPosX = this._contentView.position.x;
    };
    //创建上一个
    WHRecycleView.prototype._createPreviousItem = function () {
        var firstItem = this._childrens[0];
        if (firstItem) {
            var index = firstItem.itemIndex - 1;
            if (index < 0) {
                return;
            }
            var item = this._createItem(index);
            if (this._inScreenByItem(item)) {
                this._contentView.addChild(item.node);
                this._childrens.unshift(item);
                this._createPreviousItem();
            }
        }
        else {
            var point = this._contentView.position.clone();
            point.y = -(point.y - this.halfScrollView);
            var index = this._pointToIndex(point);
            if (index < 0) {
                index = 0;
            }
            if (index >= this.adapter.getItemCount()) {
                index = this.adapter.getItemCount() - 1;
            }
            if (index >= 0 && index < this.adapter.getItemCount()) {
                var item = this._createItem(index);
                if (this._inScreenByItem(item)) {
                    this._contentView.addChild(item.node);
                    this._childrens.push(item);
                    this._createPreviousItem();
                }
            }
        }
    };
    //创建下一个
    WHRecycleView.prototype._createNextItem = function () {
        var lastItem = this._childrens[this._childrens.length - 1];
        if (lastItem) {
            var index = lastItem.itemIndex + 1;
            if (index >= this.adapter.getItemCount()) {
                this.isFristCreate = false;
                return;
            }
            var item = this._createItem(index);
            if (this._inScreenByItem(item)) {
                this._contentView.addChild(item.node);
                this._childrens.push(item);
                if (this.isFristCreate) {
                    this.adapter.onFirstCreate(item, item.itemIndex);
                }
                this._createNextItem();
            }
            else {
                this.isFristCreate = false;
            }
        }
        else {
            //this.halfScrollView - point.y
            var point = this._getBoradPoint();
            var index = this._pointToIndex(point);
            if (index < 0) {
                index = 0;
            }
            if (index >= this.adapter.getItemCount()) {
                index = this.adapter.getItemCount() - 1;
            }
            if (index >= 0 && index < this.adapter.getItemCount()) {
                var item = this._createItem(index);
                if (this._inScreenByItem(item)) {
                    this._contentView.addChild(item.node);
                    this._childrens.push(item);
                    if (this.isFristCreate) {
                        this.adapter.onFirstCreate(item, item.itemIndex);
                    }
                    this._createNextItem();
                }
                else {
                    this.isFristCreate = false;
                }
            }
            else {
                this.isFristCreate = false;
            }
        }
    };
    WHRecycleView.prototype._getBoradPoint = function () {
        var vec = this._contentView.position.clone();
        var type = this._layoutType;
        if (WH_RecycleView_Type.VERTICAL === type) {
            vec.y = this.halfScrollView - vec.y;
        }
        else if (WH_RecycleView_Type.HORIZONTAL === type) {
            vec.x = -vec.x - this.halfScrollView;
        }
        return vec;
    };
    WHRecycleView.prototype.getScreenLastIndex = function () {
        var point = this._contentView.position.clone();
        var type = this._layoutType;
        if (WH_RecycleView_Type.VERTICAL === type) {
            point.y = -(point.y + this.halfScrollView);
        }
        else if (WH_RecycleView_Type.HORIZONTAL === type) {
            point.x = this.halfScrollView - point.x;
        }
        return this._pointToIndex(point);
    };
    //坐标转index
    WHRecycleView.prototype._pointToIndex = function (point) {
        var count = this.adapter.getItemCount();
        var type = this._layoutType;
        var pdTop = this._paddingTop;
        var pdBottom = this._paddingBottom;
        var pdLeft = this._paddingLeft;
        var pdRight = this._paddingRight;
        var spaceX = this._spacingX;
        var spaceY = this._spacingY;
        var retIndex = -1;
        if (WH_RecycleView_Type.VERTICAL === type) {
            // let toatlY =
            var boardTop = (1 - this._contentView.anchorY) * this._contentView.height;
            var boardBottom = boardTop - pdTop;
            for (var i = 0; i < count; ++i) {
                var size = this.adapter.getSize(i);
                boardBottom -= size.height;
                if (point.y <= boardTop && point.y > boardBottom) {
                    retIndex = i;
                    break;
                }
                boardTop = boardBottom;
                boardBottom = boardBottom - spaceY;
            }
        }
        else if (WH_RecycleView_Type.HORIZONTAL === type) {
            var boardLeft = -this._contentView.anchorX * this._contentView.width;
            var boardRight = boardLeft + pdLeft;
            for (var i = 0; i < count; ++i) {
                var size = this.adapter.getSize(i);
                boardRight += size.width;
                if (point.x >= boardLeft && point.x < boardRight) {
                    retIndex = i;
                    break;
                }
                boardLeft = boardRight;
                boardRight = boardRight + spaceX;
            }
        }
        return retIndex;
    };
    WHRecycleView.prototype.lateUpdate = function (dt) {
        if (this.bScrolling == false) {
            return;
        }
        //console.log('正在滚动');
        // if(this.times < 2){
        //     this.times += 1;
        //     return
        // }else{
        //     this.times = 0;
        // }
        this.bScrolling = false;
        this._footerUpdate();
        this.updateFun();
    };
    WHRecycleView.prototype._footerUpdate = function () {
        if (0 !== this.footerState || !this.footerEvents || !this.footerEvents.length) {
            return;
        }
        var footerOffset = this.footerOffset;
        var type = this._layoutType;
        if (WH_RecycleView_Type.VERTICAL === type) {
            var isUp = this._contentView.position.y > this.lastContentPosY;
            if (isUp) {
                var target = this._contentView.height * this._contentView.anchorY -
                    this.halfScrollView -
                    footerOffset;
                if (this._contentView.position.y > target) {
                    this.footerState = 1;
                }
            }
        }
        else if (WH_RecycleView_Type.HORIZONTAL === type) {
            var isLeft = this._contentView.position.x < this.lastContentPosX;
            if (isLeft) {
                var target = -this._contentView.width * (1 - this._contentView.anchorX) +
                    this.halfScrollView +
                    footerOffset;
                if (this._contentView.position.x < target) {
                    this.footerState = 1;
                }
            }
        }
        if (1 === this.footerState) {
            cc.Component.EventHandler.emitEvents(this.footerEvents, this);
        }
    };
    WHRecycleView.prototype._onScrolling = function (ev) {
        if (ev === void 0) { ev = null; }
        this.bScrolling = true;
    };
    //清空页面
    WHRecycleView.prototype._reset = function () {
        var _this = this;
        var _a, _b;
        (_a = this.gener) === null || _a === void 0 ? void 0 : _a.return('');
        (_b = this._childrens) === null || _b === void 0 ? void 0 : _b.forEach(function (v) {
            _this._removeItem(v);
        });
        this._childrens.length = 0;
    };
    /**获取一个列表项 优先从内存池获取*/
    WHRecycleView.prototype.getItem = function (type, index) {
        var child;
        var datas = this._pool.get(type);
        if (datas && datas.length) {
            child = datas.pop();
        }
        else {
            child = this.adapter.onCreateViewHolder(index);
        }
        if (this.itemClick) {
            child.node.on(cc.Node.EventType.TOUCH_END, this.clickItem, this);
        }
        child.tag = this.tag++;
        child.type = type;
        this.adapter.onBindViewHolder(child, index);
        return child;
    };
    //将节点放入内存池并删除
    WHRecycleView.prototype._removeItem = function (item) {
        var _a, _b;
        if (!item) {
            return;
        }
        (_a = item === null || item === void 0 ? void 0 : item.node) === null || _a === void 0 ? void 0 : _a.off(cc.Node.EventType.TOUCH_END, this.clickItem, this);
        (_b = item === null || item === void 0 ? void 0 : item.node) === null || _b === void 0 ? void 0 : _b.removeFromParent();
        var type = item === null || item === void 0 ? void 0 : item.type;
        var datas = this._pool.get(type);
        if (!datas) {
            datas = new Array();
        }
        datas.push(item);
        this._pool.set(type, datas);
    };
    WHRecycleView.prototype.onDisable = function () {
        var _this = this;
        var _a;
        if (this.itemClick) {
            (_a = this._childrens) === null || _a === void 0 ? void 0 : _a.forEach(function (v) {
                v.node.off(cc.Node.EventType.TOUCH_END, _this.clickItem, _this);
            });
        }
    };
    WHRecycleView.prototype.onEnable = function () {
        var _this = this;
        var _a;
        if (this.itemClick) {
            (_a = this._childrens) === null || _a === void 0 ? void 0 : _a.forEach(function (v) {
                v.node.on(cc.Node.EventType.TOUCH_END, _this.clickItem, _this);
            });
        }
    };
    WHRecycleView.prototype.clickItem = function (event) {
        var target = event.target;
        if (!target) {
            return;
        }
        var index = -1;
        for (var i = 0; i < this._childrens.length; ++i) {
            if (target.uuid === this._childrens[i].node.uuid) {
                index = this._childrens[i].itemIndex;
                break;
            }
        }
        if (index == -1) {
            return;
        }
        this.adapter.onClick(index);
    };
    /** 分帧加载 */
    WHRecycleView.prototype.getGeneratorLength = function (length, callback) {
        var _i, i, result;
        var params = [];
        for (_i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    i = 0;
                    _a.label = 1;
                case 1:
                    if (!(i < length)) return [3 /*break*/, 5];
                    result = callback.apply(void 0, __spreadArrays([i], params));
                    if (!result) return [3 /*break*/, 3];
                    return [4 /*yield*/];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 3: return [2 /*return*/];
                case 4:
                    i++;
                    return [3 /*break*/, 1];
                case 5: return [2 /*return*/];
            }
        });
    };
    /** 分帧执行 */
    WHRecycleView.prototype.exeGenerator = function (generator, duration) {
        return new Promise(function (resolve, reject) {
            var gen = generator;
            var execute = function () {
                var startTime = new Date().getTime();
                for (var iter = gen.next();; iter = gen.next()) {
                    if (iter == null || iter.done) {
                        resolve();
                        return;
                    }
                    if (new Date().getTime() - startTime > duration) {
                        setTimeout(function () { return execute(); }, cc.director.getDeltaTime() * 1000);
                        return;
                    }
                }
            };
            execute();
        });
    };
    WHRecycleView.prototype.onDestroy = function () {
        var _this = this;
        var _a;
        (_a = this.gener) === null || _a === void 0 ? void 0 : _a.return('');
        this.gener = null;
        this._childrens.forEach(function (v) {
            _this._removeItem(v);
        });
        this._childrens.length = 0;
        this._childrens = null;
        for (var key in this._pool) {
            var items = this._pool[key];
            items.forEach(function (v) {
                v = null;
            });
            items.length = 0;
        }
        this._pool.clear();
        this._pool = null;
        this.updateFun = null;
        this.scrollView = null;
        this._contentView = null;
        this._adapter = null;
    };
    __decorate([
        property({
            type: cc.Node,
            tooltip: '页面适配器节点',
        })
    ], WHRecycleView.prototype, "adapterNode", null);
    __decorate([
        property({
            type: cc.Node,
            tooltip: 'footer节点',
        })
    ], WHRecycleView.prototype, "footer", void 0);
    __decorate([
        property({
            tooltip: '距离底部多少数值触发footer刷新事件',
        })
    ], WHRecycleView.prototype, "footerOffset", void 0);
    __decorate([
        property({
            type: cc.Component.EventHandler,
            tooltip: 'footer刷新事件触发',
        })
    ], WHRecycleView.prototype, "footerEvents", void 0);
    __decorate([
        property({
            type: cc.Enum(WH_RecycleView_Type),
            tooltip: '布局类型',
        })
    ], WHRecycleView.prototype, "type", null);
    __decorate([
        property({
            type: cc.Enum(WH_RecycleView__AxisDirection),
            visible: function () {
                return this._layoutType === WH_RecycleView_Type.GRID;
            },
            tooltip: '起始轴方向类型，可进行水平和垂直布局排列，只有布局类型为 GRID 的时候才有效',
        })
    ], WHRecycleView.prototype, "startAxis", null);
    __decorate([
        property({
            tooltip: '容器内左边距',
        })
    ], WHRecycleView.prototype, "paddingLeft", null);
    __decorate([
        property({
            tooltip: '容器内右边距',
        })
    ], WHRecycleView.prototype, "paddingRight", null);
    __decorate([
        property({
            tooltip: '容器内上边距',
        })
    ], WHRecycleView.prototype, "paddingTop", null);
    __decorate([
        property({
            tooltip: '容器内下边距',
        })
    ], WHRecycleView.prototype, "paddingBottom", null);
    __decorate([
        property({
            tooltip: '子节点之间的水平间距。',
            visible: function () {
                return this._layoutType !== WH_RecycleView_Type.VERTICAL;
            },
        })
    ], WHRecycleView.prototype, "spacingX", null);
    __decorate([
        property({
            tooltip: '子节点之间的垂直间距。',
            visible: function () {
                return this._layoutType !== WH_RecycleView_Type.HORIZONTAL;
            },
        })
    ], WHRecycleView.prototype, "spacingY", null);
    __decorate([
        property({
            tooltip: '是否添加点击事件',
        })
    ], WHRecycleView.prototype, "itemClick", void 0);
    __decorate([
        property({
            serializable: true,
        })
    ], WHRecycleView.prototype, "_layoutType", void 0);
    __decorate([
        property({
            serializable: true,
        })
    ], WHRecycleView.prototype, "_startAxis", void 0);
    __decorate([
        property({
            serializable: true,
        })
    ], WHRecycleView.prototype, "_paddingLeft", void 0);
    __decorate([
        property({
            serializable: true,
        })
    ], WHRecycleView.prototype, "_paddingRight", void 0);
    __decorate([
        property({
            serializable: true,
        })
    ], WHRecycleView.prototype, "_paddingTop", void 0);
    __decorate([
        property({
            serializable: true,
        })
    ], WHRecycleView.prototype, "_paddingBottom", void 0);
    __decorate([
        property({
            serializable: true,
        })
    ], WHRecycleView.prototype, "_spacingX", void 0);
    __decorate([
        property({
            serializable: true,
        })
    ], WHRecycleView.prototype, "_spacingY", void 0);
    __decorate([
        property({
            serializable: true,
        })
    ], WHRecycleView.prototype, "_adapter", void 0);
    WHRecycleView = __decorate([
        ccclass('WHRecycleView')
    ], WHRecycleView);
    return WHRecycleView;
}(cc.Component));
exports.default = WHRecycleView;
var WHRecycleHolder = /** @class */ (function (_super) {
    __extends(WHRecycleHolder, _super);
    function WHRecycleHolder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return WHRecycleHolder;
}(cc.Component));
exports.WHRecycleHolder = WHRecycleHolder;
var WHRecycleAdapter = /** @class */ (function (_super) {
    __extends(WHRecycleAdapter, _super);
    function WHRecycleAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WHRecycleAdapter.prototype.onClick = function (index) {
    };
    ;
    //第一次创建
    WHRecycleAdapter.prototype.onFirstCreate = function (holder, index) {
    };
    //获取节点类型
    WHRecycleAdapter.prototype.getType = function (index) {
        return 0;
    };
    ;
    return WHRecycleAdapter;
}(cc.Component));
exports.WHRecycleAdapter = WHRecycleAdapter;
exports.FullHeight = 0;
exports.FullWidth = 0;

cc._RF.pop();