
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/components/WHRecycleView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zY3JpcHRzL2NvbXBvbmVudHMvV0hSZWN5Y2xlVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBOEIsRUFBRSxDQUFDLFVBQVUsRUFBekMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFBLEVBQUUsSUFBSSxVQUFrQixDQUFDO0FBQ2xELGNBQWM7QUFDZCxJQUFNLHdCQUF3QixHQUFHLElBQUksQ0FBQztBQUV0QyxJQUFZLG1CQWFYO0FBYkQsV0FBWSxtQkFBbUI7SUFDM0I7O09BRUc7SUFDSCx5RUFBYyxDQUFBO0lBQ2Q7O09BRUc7SUFDSCxxRUFBWSxDQUFBO0lBQ1o7O09BRUc7SUFDSCw2REFBUSxDQUFBO0FBQ1osQ0FBQyxFQWJXLG1CQUFtQixHQUFuQiwyQkFBbUIsS0FBbkIsMkJBQW1CLFFBYTlCO0FBRUQsSUFBWSw2QkFTWDtBQVRELFdBQVksNkJBQTZCO0lBQ3JDOztPQUVHO0lBQ0gsNkZBQWMsQ0FBQTtJQUNkOztPQUVHO0lBQ0gseUZBQVksQ0FBQTtBQUNoQixDQUFDLEVBVFcsNkJBQTZCLEdBQTdCLHFDQUE2QixLQUE3QixxQ0FBNkIsUUFTeEM7QUFHRDtJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQTIvQkM7UUExK0JhLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFJdkIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFLekIsa0JBQVksR0FBZ0MsRUFBRSxDQUFDO1FBZ0cvQyxlQUFTLEdBQUcsSUFBSSxDQUFDO1FBS2pCLGlCQUFXLEdBQUcsbUJBQW1CLENBQUMsUUFBUSxDQUFDO1FBSzNDLGdCQUFVLEdBQUcsNkJBQTZCLENBQUMsUUFBUSxDQUFDO1FBSXBELGtCQUFZLEdBQUcsQ0FBQyxDQUFDO1FBSWpCLG1CQUFhLEdBQUcsQ0FBQyxDQUFDO1FBSWxCLGlCQUFXLEdBQUcsQ0FB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QUFRLENBQUM7WUFDTixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDO3lEQUMyQjtJQUk3QjtRQUhDLFFBQVEsQ0FBQztZQUNOLFlBQVksRUFBRSxJQUFJO1NBQ3JCLENBQUM7b0RBQ3NCO0lBSXhCO1FBSEMsUUFBUSxDQUFDO1lBQ04sWUFBWSxFQUFFLElBQUk7U0FDckIsQ0FBQztvREFDc0I7SUFJeEI7UUFIQyxRQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsSUFBSTtTQUNyQixDQUFDO21EQUMyRDtJQWhLNUMsYUFBYTtRQURqQyxPQUFPLENBQUMsZUFBZSxDQUFDO09BQ0osYUFBYSxDQTIvQmpDO0lBQUQsb0JBQUM7Q0EzL0JELEFBMi9CQyxDQTMvQjBDLEVBQUUsQ0FBQyxTQUFTLEdBMi9CdEQ7a0JBMy9Cb0IsYUFBYTtBQTgvQmxDO0lBQThDLG1DQUFZO0lBQTFEOztJQU9BLENBQUM7SUFBRCxzQkFBQztBQUFELENBUEEsQUFPQyxDQVA2QyxFQUFFLENBQUMsU0FBUyxHQU96RDtBQVBxQiwwQ0FBZTtBQVNyQztJQUEyRSxvQ0FBWTtJQUF2Rjs7SUEwQkEsQ0FBQztJQWJHLGtDQUFPLEdBQVAsVUFBUSxLQUFhO0lBRXJCLENBQUM7SUFBQSxDQUFDO0lBRUYsT0FBTztJQUNBLHdDQUFhLEdBQXBCLFVBQXFCLE1BQVUsRUFBRSxLQUFLO0lBRXRDLENBQUM7SUFFRCxRQUFRO0lBQ0Qsa0NBQU8sR0FBZCxVQUFlLEtBQWE7UUFDeEIsT0FBTyxDQUFDLENBQUM7SUFDYixDQUFDO0lBQUEsQ0FBQztJQUNOLHVCQUFDO0FBQUQsQ0ExQkEsQUEwQkMsQ0ExQjBFLEVBQUUsQ0FBQyxTQUFTLEdBMEJ0RjtBQTFCcUIsNENBQWdCO0FBNEJ6QixRQUFBLFVBQVUsR0FBRyxDQUFDLENBQUM7QUFDZixRQUFBLFNBQVMsR0FBRyxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5LCBtZW51IH0gPSBjYy5fZGVjb3JhdG9yO1xuLy8yMDAw5Lul5YaF5YiZ5pyJ5rua5Yqo5Yqo55S7XG5jb25zdCBBVVRPX1NDUk9MTF9NQVhfRElTVEFOQ0UgPSAyMDAwO1xuXG5leHBvcnQgZW51bSBXSF9SZWN5Y2xlVmlld19UeXBlIHtcbiAgICAvKipcbiAgICAgKiBAemgg5rC05bmz5biD5bGA44CCXG4gICAgICovXG4gICAgSE9SSVpPTlRBTCA9IDEsXG4gICAgLyoqXG4gICAgICogQHpoIOWeguebtOW4g+WxgOOAglxuICAgICAqL1xuICAgIFZFUlRJQ0FMID0gMixcbiAgICAvKipcbiAgICAgKiBAemgg572R5qC85biD5bGA44CCXG4gICAgICovXG4gICAgR1JJRCA9IDMsXG59XG5cbmV4cG9ydCBlbnVtIFdIX1JlY3ljbGVWaWV3X19BeGlzRGlyZWN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAemgg6L+b6KGM5rC05bmz5pa55ZCR5biD5bGA44CCXG4gICAgICovXG4gICAgSE9SSVpPTlRBTCA9IDAsXG4gICAgLyoqXG4gICAgICogQHpoIOi/m+ihjOWeguebtOaWueWQkeW4g+WxgOOAglxuICAgICAqL1xuICAgIFZFUlRJQ0FMID0gMSxcbn1cblxuQGNjY2xhc3MoJ1dIUmVjeWNsZVZpZXcnKVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgV0hSZWN5Y2xlVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgdG9vbHRpcDogJ+mhtemdoumAgumFjeWZqOiKgueCuScsXG4gICAgfSlcbiAgICBwdWJsaWMgZ2V0IGFkYXB0ZXJOb2RlKCk6IGNjLk5vZGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRhcHRlck5vZGU7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgYWRhcHRlck5vZGUodjogY2MuTm9kZSkge1xuICAgICAgICB0aGlzLl9hZGFwdGVyTm9kZSA9IHY7XG4gICAgICAgIHRoaXMuX2FkYXB0ZXIgPSB0aGlzLl9hZGFwdGVyTm9kZS5nZXRDb21wb25lbnQoV0hSZWN5Y2xlQWRhcHRlcik7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuTm9kZSxcbiAgICAgICAgdG9vbHRpcDogJ2Zvb3RlcuiKgueCuScsXG4gICAgfSlcbiAgICBwcm90ZWN0ZWQgZm9vdGVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn6Led56a75bqV6YOo5aSa5bCR5pWw5YC86Kem5Y+RZm9vdGVy5Yi35paw5LqL5Lu2JyxcbiAgICB9KVxuICAgIHByb3RlY3RlZCBmb290ZXJPZmZzZXQ6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcixcbiAgICAgICAgdG9vbHRpcDogJ2Zvb3RlcuWIt+aWsOS6i+S7tuinpuWPkScsXG4gICAgfSlcbiAgICBwcm90ZWN0ZWQgZm9vdGVyRXZlbnRzOiBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyW10gPSBbXTtcblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHR5cGU6IGNjLkVudW0oV0hfUmVjeWNsZVZpZXdfVHlwZSksXG4gICAgICAgIHRvb2x0aXA6ICfluIPlsYDnsbvlnosnLFxuICAgIH0pXG4gICAgcHVibGljIGdldCB0eXBlKCk6IFdIX1JlY3ljbGVWaWV3X1R5cGUge1xuICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0VHlwZTtcbiAgICB9XG4gICAgcHVibGljIHNldCB0eXBlKHY6IFdIX1JlY3ljbGVWaWV3X1R5cGUpIHtcbiAgICAgICAgdGhpcy5fbGF5b3V0VHlwZSA9IHY7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdHlwZTogY2MuRW51bShXSF9SZWN5Y2xlVmlld19fQXhpc0RpcmVjdGlvbiksXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYXlvdXRUeXBlID09PSBXSF9SZWN5Y2xlVmlld19UeXBlLkdSSUQ7XG4gICAgICAgIH0sXG4gICAgICAgIHRvb2x0aXA6ICfotbflp4vovbTmlrnlkJHnsbvlnovvvIzlj6/ov5vooYzmsLTlubPlkozlnoLnm7TluIPlsYDmjpLliJfvvIzlj6rmnInluIPlsYDnsbvlnovkuLogR1JJRCDnmoTml7blgJnmiY3mnInmlYgnLFxuICAgIH0pXG4gICAgcHVibGljIGdldCBzdGFydEF4aXMoKTogV0hfUmVjeWNsZVZpZXdfX0F4aXNEaXJlY3Rpb24ge1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RhcnRBeGlzO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHN0YXJ0QXhpcyh2OiBXSF9SZWN5Y2xlVmlld19fQXhpc0RpcmVjdGlvbikge1xuICAgICAgICB0aGlzLl9zdGFydEF4aXMgPSB2O1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICflrrnlmajlhoXlt6bovrnot50nLFxuICAgIH0pXG4gICAgcHVibGljIGdldCBwYWRkaW5nTGVmdCgpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fcGFkZGluZ0xlZnQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcGFkZGluZ0xlZnQodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BhZGRpbmdMZWZ0ID0gdjtcbiAgICB9XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICB0b29sdGlwOiAn5a655Zmo5YaF5Y+z6L656LedJyxcbiAgICB9KVxuICAgIHB1YmxpYyBnZXQgcGFkZGluZ1JpZ2h0KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWRkaW5nUmlnaHQ7XG4gICAgfVxuICAgIHB1YmxpYyBzZXQgcGFkZGluZ1JpZ2h0KHY6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9wYWRkaW5nUmlnaHQgPSB2O1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICflrrnlmajlhoXkuIrovrnot50nLFxuICAgIH0pXG4gICAgcHVibGljIGdldCBwYWRkaW5nVG9wKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWRkaW5nVG9wO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHBhZGRpbmdUb3AodjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BhZGRpbmdUb3AgPSB2O1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICflrrnlmajlhoXkuIvovrnot50nLFxuICAgIH0pXG4gICAgcHVibGljIGdldCBwYWRkaW5nQm90dG9tKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wYWRkaW5nQm90dG9tO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHBhZGRpbmdCb3R0b20odjogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX3BhZGRpbmdCb3R0b20gPSB2O1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICflrZDoioLngrnkuYvpl7TnmoTmsLTlubPpl7Tot53jgIInLFxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGF5b3V0VHlwZSAhPT0gV0hfUmVjeWNsZVZpZXdfVHlwZS5WRVJUSUNBTDtcbiAgICAgICAgfSxcbiAgICB9KVxuICAgIHB1YmxpYyBnZXQgc3BhY2luZ1goKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NwYWNpbmdYO1xuICAgIH1cbiAgICBwdWJsaWMgc2V0IHNwYWNpbmdYKHY6IG51bWJlcikge1xuICAgICAgICB0aGlzLl9zcGFjaW5nWCA9IHY7XG4gICAgfVxuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgdG9vbHRpcDogJ+WtkOiKgueCueS5i+mXtOeahOWeguebtOmXtOi3neOAgicsXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9sYXlvdXRUeXBlICE9PSBXSF9SZWN5Y2xlVmlld19UeXBlLkhPUklaT05UQUw7XG4gICAgICAgIH0sXG4gICAgfSlcbiAgICBwdWJsaWMgZ2V0IHNwYWNpbmdZKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9zcGFjaW5nWTtcbiAgICB9XG4gICAgcHVibGljIHNldCBzcGFjaW5nWSh2OiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fc3BhY2luZ1kgPSB2O1xuICAgIH1cblxuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHRvb2x0aXA6ICfmmK/lkKbmt7vliqDngrnlh7vkuovku7YnLFxuICAgIH0pXG4gICAgcHJvdGVjdGVkIGl0ZW1DbGljayA9IHRydWU7XG5cbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsXG4gICAgfSlcbiAgICBwcm90ZWN0ZWQgX2xheW91dFR5cGUgPSBXSF9SZWN5Y2xlVmlld19UeXBlLlZFUlRJQ0FMO1xuXG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxuICAgIH0pXG4gICAgcHJvdGVjdGVkIF9zdGFydEF4aXMgPSBXSF9SZWN5Y2xlVmlld19fQXhpc0RpcmVjdGlvbi5WRVJUSUNBTDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsXG4gICAgfSlcbiAgICBwcm90ZWN0ZWQgX3BhZGRpbmdMZWZ0ID0gMDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsXG4gICAgfSlcbiAgICBwcm90ZWN0ZWQgX3BhZGRpbmdSaWdodCA9IDA7XG4gICAgQHByb3BlcnR5KHtcbiAgICAgICAgc2VyaWFsaXphYmxlOiB0cnVlLFxuICAgIH0pXG4gICAgcHJvdGVjdGVkIF9wYWRkaW5nVG9wID0gMDtcbiAgICBAcHJvcGVydHkoe1xuICAgICAgICBzZXJpYWxpemFibGU6IHRydWUsXG4gICAgfSlcbiAgICBwcm90ZWN0ZWQgX3BhZGRpbmdCb3R0b20gPSAwO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSxcbiAgICB9KVxuICAgIHByb3RlY3RlZCBfc3BhY2luZ1ggPSAwO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSxcbiAgICB9KVxuICAgIHByb3RlY3RlZCBfc3BhY2luZ1kgPSAwO1xuICAgIEBwcm9wZXJ0eSh7XG4gICAgICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSxcbiAgICB9KVxuICAgIHByb3RlY3RlZCBfYWRhcHRlcjogV0hSZWN5Y2xlQWRhcHRlcjxXSFJlY3ljbGVIb2xkZXI+ID0gbnVsbDtcbiAgICBwdWJsaWMgZ2V0IGFkYXB0ZXIoKTogV0hSZWN5Y2xlQWRhcHRlcjxXSFJlY3ljbGVIb2xkZXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkYXB0ZXI7XG4gICAgfVxuXG5cbiAgICBwcm90ZWN0ZWQgX2FkYXB0ZXJOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICAgIC8qKua7muWKqOWZqOS4gOWNiueahOWAvCDlpoLmnpzmmK/mqKrlkJHluIPlsYDliJnmmK8gd2lkdGgvMiDnurXlkJHluIPlsYDliJnmmK8gaGVpZ2h0LzIgKi9cbiAgICBwcm90ZWN0ZWQgaGFsZlNjcm9sbFZpZXc6IG51bWJlciA9IDA7XG4gICAgLyoq5LiK5LiA5qyhY29udGVudOeahFnlgLzvvIznlKjkuo7lkoznjrDlnKhjb250ZW5055qEWeWAvOavlOi+g++8jOW+l+WHuuaYr+WQkeS4iui/mOaYr+WQkeS4i+a7muWKqCAqL1xuICAgIHByb3RlY3RlZCBsYXN0Q29udGVudFBvc1k6IG51bWJlciA9IDA7XG4gICAgLyoq5LiK5LiA5qyhY29udGVudOeahFjlgLzvvIznlKjkuo7lkoznjrDlnKhjb250ZW5055qEWOWAvOavlOi+g++8jOW+l+WHuuaYr+WQkeW3pui/mOaYr+WQkeWPs+a7muWKqCAqL1xuICAgIHByb3RlY3RlZCBsYXN0Q29udGVudFBvc1g6IG51bWJlciA9IDA7XG4gICAgLy/liIbluKfliJvlu7rlmahcbiAgICBwcm90ZWN0ZWQgZ2VuZXI6IEdlbmVyYXRvcjtcblxuICAgIC8qKml0ZW3oioLngrnlhoXlrZjmsaAgKi9cbiAgICBwcm90ZWN0ZWQgX3Bvb2w6IE1hcDxudW1iZXIsIEFycmF5PFdIUmVjeWNsZUhvbGRlcj4+ID0gbmV3IE1hcCgpO1xuICAgIC8qKuW9k+WJjeeOsOWunuWcqOWxj+W5lemHjOeahGl0ZW0gKi9cbiAgICBwcm90ZWN0ZWQgX2NoaWxkcmVuczogQXJyYXk8V0hSZWN5Y2xlSG9sZGVyPiA9IG5ldyBBcnJheSgpO1xuXG4gICAgLyoq5Yi35paw55qE5Ye95pWwICovXG4gICAgcHJvdGVjdGVkIHVwZGF0ZUZ1bjogRnVuY3Rpb24gPSBmdW5jdGlvbiAoKSB7IH07XG5cbiAgICBwdWJsaWMgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9jb250ZW50VmlldzogY2MuTm9kZSA9IG51bGw7XG5cbiAgICBwcml2YXRlIGZvb3RlclN0YXRlID0gMDsgLy8w5rKh5pyJ5Yqg6L29IDEg5q2j5Zyo5Yqg6L29IDLliqDovb3lrozmiJBcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TY3JvbGxWaWV3KTtcbiAgICAgICAgdGhpcy5fY29udGVudFZpZXcgPSB0aGlzLnNjcm9sbFZpZXcuY29udGVudDtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5XaWRnZXQpPy51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucGFyZW50LmdldENvbXBvbmVudChjYy5XaWRnZXQpPy51cGRhdGVBbGlnbm1lbnQoKTtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLldpZGdldCk/LnVwZGF0ZUFsaWdubWVudCgpO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcubm9kZS5vbignc2Nyb2xsaW5nJywgdGhpcy5fb25TY3JvbGxpbmcsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9pbml0TGF5b3V0KCk7XG4gICAgfVxuXG4gICAgcHVibGljIHNjcm9sbFRvSW5kZXgoaW5kZXgpIHtcbiAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKSkge1xuICAgICAgICAgICAgaW5kZXggPSB0aGlzLmFkYXB0ZXIuZ2V0SXRlbUNvdW50KCkgLSAxO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLl9jYWxjdWxhdGlvblBvc2l0aW9uKGluZGV4KTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuYWRhcHRlci5nZXRTaXplKGluZGV4KTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuX2xheW91dFR5cGU7XG4gICAgICAgIGxldCB2ZWMgPSBuZXcgY2MuVmVjMihwb2ludC54LCBwb2ludC55KTtcbiAgICAgICAgbGV0IHNldHBFbmFibGUgPSB0cnVlO1xuICAgICAgICBsZXQgdG9wSW5kZXggPSAwO1xuICAgICAgICBpZiAodGhpcy5fY2hpbGRyZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgdG9wSW5kZXggPSB0aGlzLl9jaGlsZHJlbnNbMF0uaXRlbUluZGV4O1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb2ludDIgPSB0aGlzLl9jYWxjdWxhdGlvblBvc2l0aW9uKHRvcEluZGV4KTtcbiAgICAgICAgbGV0IHZlYzIgPSBuZXcgY2MuVmVjMihwb2ludDIueCwgcG9pbnQyLnkpO1xuICAgICAgICBjb25zdCBzaXplMiA9IHRoaXMuYWRhcHRlci5nZXRTaXplKHRvcEluZGV4KTtcbiAgICAgICAgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuVkVSVElDQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHZlYy55ID0gLShwb2ludC55ICsgc2l6ZS5oZWlnaHQgLyAyKTtcbiAgICAgICAgICAgIHZlYzIueSA9IC0ocG9pbnQyLnkgKyBzaXplMi5oZWlnaHQgLyAyKTtcbiAgICAgICAgfSBlbHNlIGlmIChXSF9SZWN5Y2xlVmlld19UeXBlLkhPUklaT05UQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHZlYy54ID0gcG9pbnQueCAtIHNpemUud2lkdGggLyAyO1xuICAgICAgICAgICAgdmVjMi54ID0gcG9pbnQyLnggLSBzaXplMi53aWR0aCAvIDI7XG4gICAgICAgIH1cbiAgICAgICAgc2V0cEVuYWJsZSA9IE1hdGguYWJzKHZlYy5sZW4oKSAtIHZlYzIubGVuKCkpID4gQVVUT19TQ1JPTExfTUFYX0RJU1RBTkNFO1xuICAgICAgICBpZiAoc2V0cEVuYWJsZSkge1xuICAgICAgICAgICAgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuVkVSVElDQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodG9wSW5kZXggPCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICB2ZWMyLnkgPSB2ZWMueSAtIEFVVE9fU0NST0xMX01BWF9ESVNUQU5DRTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2ZWMyLnkgPSB2ZWMueSArIEFVVE9fU0NST0xMX01BWF9ESVNUQU5DRTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KHZlYzIsIDApO1xuICAgICAgICAgICAgICAgIHRoaXMubGFzdENvbnRlbnRQb3NZID0gdGhpcy5fY29udGVudFZpZXcucG9zaXRpb24ueTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRvcEluZGV4IDwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmVjMi54ID0gdmVjLnggLSBBVVRPX1NDUk9MTF9NQVhfRElTVEFOQ0U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmVjMi54ID0gdmVjLnggKyBBVVRPX1NDUk9MTF9NQVhfRElTVEFOQ0U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb09mZnNldCh2ZWMyLCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWCA9IHRoaXMuX2NvbnRlbnRWaWV3LnBvc2l0aW9uLng7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvT2Zmc2V0KHZlYywgMSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpc0ZyaXN0Q3JlYXRlOiBib29sZWFuID0gdHJ1ZTtcbiAgICAvL+WIt+aWsOaVsOaNrlxuICAgIHB1YmxpYyBub3RpZnlEYXRhU2V0Q2hhbmdlZCgpIHtcblxuICAgICAgICAvL2xldCBzdGFydCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmFkYXB0ZXIuZ2V0SXRlbUNvdW50KCk7XG4gICAgICAgIGNvbnN0IGNoaWxkcyA9IHRoaXMuX2NoaWxkcmVucztcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuX2xheW91dFR5cGU7XG4gICAgICAgIC8v6YeN5paw6K6h566X6auY5bqmXG4gICAgICAgIGxldCBvbGRIZWlnaHQgPSB0aGlzLl9jb250ZW50Vmlldy5oZWlnaHQ7XG4gICAgICAgIGxldCBvbGRXaWR0aCA9IHRoaXMuX2NvbnRlbnRWaWV3LndpZHRoO1xuICAgICAgICB0aGlzLl9jb3VudFBhcmFtKCk7XG4gICAgICAgIGxldCBkZWx0YTtcbiAgICAgICAgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuVkVSVElDQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIGRlbHRhID0gb2xkSGVpZ2h0IC0gdGhpcy5fY29udGVudFZpZXcuaGVpZ2h0O1xuICAgICAgICB9IGVsc2UgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuSE9SSVpPTlRBTCA9PT0gdHlwZSkge1xuICAgICAgICAgICAgZGVsdGEgPSB0aGlzLl9jb250ZW50Vmlldy53aWR0aCAtIG9sZFdpZHRoO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGlsZHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIHRoaXMuaXNGcmlzdENyZWF0ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmlzRnJpc3RDcmVhdGUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvL+WFiOWIoOmZpOaOieaJgOacieaYvuekuueahOiKgueCuVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgLy/ml6Dms5Xojrflj5bliLDljp/mlbDmja4g5omA5Lul6L+Z6YeM5LiN5YGa57yT5a2YXG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVJdGVtKGNoaWxkc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY2hpbGRyZW5zLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgaWYgKGRlbHRhID49IDAgJiYgZGVsdGEgPCAwLjAwMDEpIHtcbiAgICAgICAgICAgIC8v55Sx5LiK5ZCR5LiL5Yib5bu6XG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVOZXh0SXRlbSgpO1xuICAgICAgICB9IGVsc2UgaWYgKGRlbHRhIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5fY3JlYXRlTmV4dEl0ZW0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v6I635Y+W5b2T5YmN5L2N572uXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZ2V0U2NyZWVuTGFzdEluZGV4KCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCBjb3VudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU5leHRJdGVtKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChXSF9SZWN5Y2xlVmlld19UeXBlLlZFUlRJQ0FMID09PSB0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVmlldy5zY3JvbGxUb0JvdHRvbSgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWSA9IHRoaXMuX2NvbnRlbnRWaWV3LnBvc2l0aW9uLnk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChXSF9SZWN5Y2xlVmlld19UeXBlLkhPUklaT05UQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3LnNjcm9sbFRvUmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlTmV4dEl0ZW0oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBsZXQgc3RvcCA9IERhdGUubm93KCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHN0b3AgLSBzdGFydCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgKiDop6blj5HliqDovb3lrozmiJBcbiAgICAqIEBwYXJhbSBtb3JlIOaYr+WQpui/mOacieabtOWkmlxuICAgICovXG4gICAgcHVibGljIGxvYWRNb3JlRmluaXNoKGZpbmlzaDogYm9vbGVhbiA9IGZhbHNlKSB7XG4gICAgICAgIGlmIChmaW5pc2gpIHtcbiAgICAgICAgICAgIHRoaXMuZm9vdGVyU3RhdGUgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5mb290ZXJTdGF0ZSA9IDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9pbml0TGF5b3V0KCkge1xuICAgICAgICB0aGlzLl9jb3VudFBhcmFtKCk7XG4gICAgICAgIHRoaXMuc3RhcnRDcmVhdGVJdGVtcygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgX2NvdW50UGFyYW0oKSB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLl9sYXlvdXRUeXBlO1xuICAgICAgICBjb25zdCBwZFRvcCA9IHRoaXMuX3BhZGRpbmdUb3A7XG4gICAgICAgIGNvbnN0IHBkQm90dG9tID0gdGhpcy5fcGFkZGluZ0JvdHRvbTtcbiAgICAgICAgY29uc3QgcGRMZWZ0ID0gdGhpcy5fcGFkZGluZ0xlZnQ7XG4gICAgICAgIGNvbnN0IHBkUmlnaHQgPSB0aGlzLl9wYWRkaW5nUmlnaHQ7XG4gICAgICAgIGNvbnN0IHNwYWNlWCA9IHRoaXMuX3NwYWNpbmdYO1xuICAgICAgICBjb25zdCBzcGFjZVkgPSB0aGlzLl9zcGFjaW5nWTtcbiAgICAgICAgY29uc3QgY29udGVudFZpZXcgPSB0aGlzLl9jb250ZW50VmlldztcbiAgICAgICAgY29uc3QgZm9vdGVyID0gdGhpcy5mb290ZXI7XG5cbiAgICAgICAgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuVkVSVElDQUwgPT0gdHlwZSkge1xuICAgICAgICAgICAgdGhpcy5oYWxmU2Nyb2xsVmlldyA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmhlaWdodCAvIDI7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKSAtIDEgPCAwID8gMCA6IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKTtcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IHBkVG9wICsgcGRCb3R0b20gKyBzcGFjZVkgKiBjb3VudDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hZGFwdGVyLmdldEl0ZW1Db3VudCgpOyArK2kpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSB0aGlzLmFkYXB0ZXIuZ2V0U2l6ZShpKS5oZWlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG90YWwgPCB0aGlzLnNjcm9sbFZpZXcubm9kZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRWaWV3LmhlaWdodCA9IHRvdGFsICsgKGZvb3Rlcj8uaGVpZ2h0IHx8IDApO1xuICAgICAgICAgICAgaWYgKGZvb3Rlcikge1xuICAgICAgICAgICAgICAgIGZvb3Rlci5wb3NpdGlvbiA9IG5ldyBjYy5WZWMzKFxuICAgICAgICAgICAgICAgICAgICBmb290ZXIucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgLWNvbnRlbnRWaWV3LmhlaWdodCAqIGNvbnRlbnRWaWV3LmFuY2hvclkgKyBmb290ZXIuaGVpZ2h0IC8gMixcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyT2Zmc2V0ID0gZm9vdGVyLmhlaWdodDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRWaWV3LndpZHRoID1cbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aCAtIHBkTGVmdCAtIHBkUmlnaHQ7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZ1biA9IHRoaXMudXBkYXRlVjtcbiAgICAgICAgfSBlbHNlIGlmIChXSF9SZWN5Y2xlVmlld19UeXBlLkhPUklaT05UQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMuaGFsZlNjcm9sbFZpZXcgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aCAvIDI7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKSAtIDEgPCAwID8gMCA6IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKTtcbiAgICAgICAgICAgIGxldCB0b3RhbCA9IHBkTGVmdCArIHBkUmlnaHQgKyBzcGFjZVggKiBjb3VudDtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5hZGFwdGVyLmdldEl0ZW1Db3VudCgpOyArK2kpIHtcbiAgICAgICAgICAgICAgICB0b3RhbCArPSB0aGlzLmFkYXB0ZXIuZ2V0U2l6ZShpKS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0b3RhbCA8IHRoaXMuc2Nyb2xsVmlldy5ub2RlLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgdG90YWwgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRWaWV3LndpZHRoID0gdG90YWwgKyAoZm9vdGVyPy53aWR0aCB8fCAwKTtcbiAgICAgICAgICAgIGlmIChmb290ZXIpIHtcbiAgICAgICAgICAgICAgICBmb290ZXIucG9zaXRpb24gPSBuZXcgY2MuVmVjMyhcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFZpZXcud2lkdGggKiAoMSAtIGNvbnRlbnRWaWV3LmFuY2hvclgpIC0gZm9vdGVyLndpZHRoIC8gMixcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyLnBvc2l0aW9uLnksXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB0aGlzLmZvb3Rlck9mZnNldCA9IGZvb3Rlci53aWR0aDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRlbnRWaWV3LmhlaWdodCA9XG4gICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxWaWV3Lm5vZGUuaGVpZ2h0IC0gcGRUb3AgLSBwZEJvdHRvbTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRnVuID0gdGhpcy51cGRhdGVIO1xuICAgICAgICB9IGVsc2UgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuR1JJRCA9PT0gdHlwZSkge1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGFydENyZWF0ZUl0ZW1zKCkge1xuICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gMDtcbiAgICAgICAgLy8gY29uc3QgcGFyZW50ID0gdGhpcy5fY29udGVudFZpZXc7XG4gICAgICAgIC8vIC8v6I635Y+W5b2T5YmN5LiA5bGP5Y+v5Lul5Yib5bu65aSa5bCR5LiqaXRlbVxuICAgICAgICAvLyBjb25zdCB0b3RhbCA9IHRoaXMuX2dldEluU2NyZWVuTWF4TnVtYmVyKHN0YXJ0SW5kZXgpO1xuICAgICAgICAvLyBjb25zdCBtYXhOdW0gPSB0aGlzLmFkYXB0ZXIuZ2V0SXRlbUNvdW50KCk7XG5cbiAgICAgICAgdGhpcy5fY3JlYXRlTmV4dEl0ZW0oKTtcbiAgICAgICAgLy9sZXQgaXNCcmVhayA9IGZhbHNlO1xuICAgICAgICAvLyB0aGlzLmdlbmVyID0gdGhpcy5nZXRHZW5lcmF0b3JMZW5ndGgodG90YWwsIChpKSA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoaXNCcmVhaykge1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGxldCBpbmRleCA9IHN0YXJ0SW5kZXggKyBpO1xuICAgICAgICAvLyAgICAgaWYgKGluZGV4ID49IG1heE51bSkge1xuICAgICAgICAvLyAgICAgICAgIGlzQnJlYWsgPSB0cnVlO1xuICAgICAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmICh0aGlzLl9pblNjcmVlbihpbmRleCkpIHtcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBpdGVtOiBXSFJlY3ljbGVIb2xkZXIgPSB0aGlzLl9jcmVhdGVJdGVtKGluZGV4KTtcbiAgICAgICAgLy8gICAgICAgICBwYXJlbnQuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9jaGlsZHJlbnMucHVzaChpdGVtKTtcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICAgICAgaXNCcmVhayA9IHRydWU7XG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIC8vIH0pO1xuXG4gICAgICAgIC8vIHRoaXMuZXhlR2VuZXJhdG9yKHRoaXMuZ2VuZXIsIDQpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBfY3JlYXRlSXRlbShpbmRleCk6IFdIUmVjeWNsZUhvbGRlciB7XG4gICAgICAgIGxldCBpdGVtOiBXSFJlY3ljbGVIb2xkZXI7XG4gICAgICAgIGxldCBpdGVtVHlwZSA9IHRoaXMuYWRhcHRlci5nZXRUeXBlKGluZGV4KTtcbiAgICAgICAgaXRlbSA9IHRoaXMuZ2V0SXRlbShpdGVtVHlwZSwgaW5kZXgpO1xuICAgICAgICBpdGVtLml0ZW1JbmRleCA9IGluZGV4O1xuICAgICAgICBpdGVtLm5vZGUucG9zaXRpb24gPSB0aGlzLl9jYWxjdWxhdGlvblBvc2l0aW9uKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfVxuXG4gICAgLy/liKTmlq3mmK/lkKblrZjlnKjlsY/luZXph4xcbiAgICBwcml2YXRlIF9pblNjcmVlbihpbmRleCk6IGJvb2xlYW4ge1xuICAgICAgICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGxldCBwb2ludCA9IHRoaXMuX2NhbGN1bGF0aW9uUG9zaXRpb24oaW5kZXgpO1xuICAgICAgICBwb2ludCA9IHRoaXMuX2dldFBvc2l0aW9uQnlQb2ludChwb2ludCk7XG4gICAgICAgIGNvbnN0IHNpemUgPSB0aGlzLmFkYXB0ZXIuZ2V0U2l6ZShpbmRleCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9wb2ludEhpdFNjcmVlbihwb2ludCwgc2l6ZSk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIF9pblNjcmVlbkJ5SXRlbShpdGVtOiBXSFJlY3ljbGVIb2xkZXIpIHtcbiAgICAgICAgaWYgKCFpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZGV4ID0gaXRlbS5pdGVtSW5kZXg7XG4gICAgICAgIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0gdGhpcy5hZGFwdGVyLmdldEl0ZW1Db3VudCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLl9nZXRQb3NpdGlvbkluVmlldyhpdGVtKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuYWRhcHRlci5nZXRTaXplKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50SGl0U2NyZWVuKHBvaW50LCBzaXplKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIF9wb2ludEhpdFNjcmVlbihwb2ludCwgc2l6ZSkge1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5fbGF5b3V0VHlwZTtcbiAgICAgICAgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuVkVSVElDQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwb2ludC55IC0gc2l6ZS5oZWlnaHQgLyAyID4gdGhpcy5oYWxmU2Nyb2xsVmlldyB8fFxuICAgICAgICAgICAgICAgIHBvaW50LnkgKyBzaXplLmhlaWdodCAvIDIgPCAtdGhpcy5oYWxmU2Nyb2xsVmlld1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuSE9SSVpPTlRBTCA9PT0gdHlwZSkge1xuICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgIHBvaW50LnggKyBzaXplLndpZHRoIC8gMiA8IC10aGlzLmhhbGZTY3JvbGxWaWV3IHx8XG4gICAgICAgICAgICAgICAgcG9pbnQueCAtIHNpemUud2lkdGggLyAyID4gdGhpcy5oYWxmU2Nyb2xsVmlld1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8qKuiOt+WPlml0ZW3lnKhzY3JvbGxWaWV355qE5bGA6YOo5Z2Q5qCHICovXG4gICAgcHJvdGVjdGVkIF9nZXRQb3NpdGlvbkluVmlldyhpdGVtOiBXSFJlY3ljbGVIb2xkZXIpOiBjYy5WZWMzIHtcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5fY29udGVudFZpZXcuY29udmVydFRvV29ybGRTcGFjZUFSKGl0ZW0ubm9kZS5wb3NpdGlvbik7XG4gICAgICAgIGxldCB2aWV3UG9zID0gdGhpcy5zY3JvbGxWaWV3Lm5vZGUuY29udmVydFRvTm9kZVNwYWNlQVIod29ybGRQb3MpO1xuICAgICAgICByZXR1cm4gdmlld1BvcztcbiAgICB9XG5cbiAgICBwcml2YXRlIF9nZXRQb3NpdGlvbkJ5UG9pbnQocG9pbnQ6IGNjLlZlYzMpOiBjYy5WZWMzIHtcbiAgICAgICAgbGV0IHdvcmxkUG9zID0gdGhpcy5fY29udGVudFZpZXcuY29udmVydFRvV29ybGRTcGFjZUFSKHBvaW50KTtcbiAgICAgICAgbGV0IHZpZXdQb3MgPSB0aGlzLnNjcm9sbFZpZXcubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUih3b3JsZFBvcyk7XG4gICAgICAgIHJldHVybiB2aWV3UG9zO1xuICAgIH1cblxuICAgIC8v6K6h566X5Z2Q5qCHXG4gICAgcHJvdGVjdGVkIF9jYWxjdWxhdGlvblBvc2l0aW9uKGluZGV4KTogY2MuVmVjMyB7XG4gICAgICAgIGNvbnN0IHJldFYzID0gbmV3IGNjLlZlYzMoKTtcbiAgICAgICAgY29uc3QgdHlwZSA9IHRoaXMuX2xheW91dFR5cGU7XG4gICAgICAgIGNvbnN0IHBkVG9wID0gdGhpcy5fcGFkZGluZ1RvcDtcbiAgICAgICAgY29uc3QgcGRCb3R0b20gPSB0aGlzLl9wYWRkaW5nQm90dG9tO1xuICAgICAgICBjb25zdCBwZExlZnQgPSB0aGlzLl9wYWRkaW5nTGVmdDtcbiAgICAgICAgY29uc3QgcGRSaWdodCA9IHRoaXMuX3BhZGRpbmdSaWdodDtcbiAgICAgICAgY29uc3Qgc3BhY2VYID0gdGhpcy5fc3BhY2luZ1g7XG4gICAgICAgIGNvbnN0IHNwYWNlWSA9IHRoaXMuX3NwYWNpbmdZO1xuICAgICAgICBjb25zdCBjaGlsZHMgPSB0aGlzLl9jaGlsZHJlbnM7XG4gICAgICAgIGNvbnN0IGFkYXB0ZXIgPSB0aGlzLl9hZGFwdGVyO1xuICAgICAgICBpZiAoV0hfUmVjeWNsZVZpZXdfVHlwZS5WRVJUSUNBTCA9PT0gdHlwZSkge1xuICAgICAgICAgICAgbGV0IGl0ZW07XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBjaGlsZHNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uaXRlbUluZGV4ID09IGluZGV4ICsgMSkge1xuICAgICAgICAgICAgICAgICAgICByZXRWMy54ID0gaXRlbS5ub2RlLnBvc2l0aW9uLng7XG4gICAgICAgICAgICAgICAgICAgIHJldFYzLnkgPVxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ub2RlLnBvc2l0aW9uLnkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ub2RlLmhlaWdodCAvIDIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VZICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIuZ2V0U2l6ZShpbmRleCkuaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpdGVtLml0ZW1JbmRleCA9PSBpbmRleCAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VjMueCA9IGl0ZW0ubm9kZS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgICAgICAgICByZXRWMy55ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS5wb3NpdGlvbi55IC1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS5oZWlnaHQgLyAyIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlWSAtXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLmdldFNpemUoaW5kZXgpLmhlaWdodCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGxldCB0b2F0bFkgPSAoMSAtIHRoaXMuX2NvbnRlbnRWaWV3LmFuY2hvclkpICogdGhpcy5fY29udGVudFZpZXcuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHRvYXRsWSAtPSBwZFRvcDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGV4OyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hdGxZIC09IGFkYXB0ZXIuZ2V0U2l6ZShpKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIHRvYXRsWSAtPSBzcGFjZVk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvYXRsWSAtPSBhZGFwdGVyLmdldFNpemUoaW5kZXgpLmhlaWdodCAvIDI7XG4gICAgICAgICAgICAgICAgcmV0VjMueSA9IHRvYXRsWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChXSF9SZWN5Y2xlVmlld19UeXBlLkhPUklaT05UQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIGxldCBpdGVtO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICBpdGVtID0gY2hpbGRzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLml0ZW1JbmRleCA9PSBpbmRleCArIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0VjMueCA9XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5vZGUucG9zaXRpb24ueCAtXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5vZGUud2lkdGggLyAyIC1cbiAgICAgICAgICAgICAgICAgICAgICAgIHNwYWNlWCAtXG4gICAgICAgICAgICAgICAgICAgICAgICBhZGFwdGVyLmdldFNpemUoaW5kZXgpLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgcmV0VjMueSA9IGl0ZW0ubm9kZS5wb3NpdGlvbi55O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0uaXRlbUluZGV4ID09IGluZGV4IC0gMSkge1xuICAgICAgICAgICAgICAgICAgICByZXRWMy54ID1cbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS5wb3NpdGlvbi54ICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ubm9kZS53aWR0aCAvIDIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgc3BhY2VYICtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkYXB0ZXIuZ2V0U2l6ZShpbmRleCkud2lkdGggLyAyO1xuICAgICAgICAgICAgICAgICAgICByZXRWMy55ID0gaXRlbS5ub2RlLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpdGVtID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgICAgIGxldCB0b2F0bFggPSAtdGhpcy5fY29udGVudFZpZXcuYW5jaG9yWCAqIHRoaXMuX2NvbnRlbnRWaWV3LndpZHRoO1xuICAgICAgICAgICAgICAgIHRvYXRsWCArPSBwZExlZnQ7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRleDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRvYXRsWCArPSBhZGFwdGVyLmdldFNpemUoaSkud2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIHRvYXRsWCArPSBzcGFjZVg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRvYXRsWCArPSBhZGFwdGVyLmdldFNpemUoaW5kZXgpLndpZHRoIC8gMjtcbiAgICAgICAgICAgICAgICByZXRWMy54ID0gdG9hdGxYO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJldFYzO1xuICAgIH1cblxuICAgIC8v6I635Y+W5LiA5bGP5Y+v5Lul5a6557qz5Yib5bu65aSa5bCR5Liq6IqC54K5XG4gICAgcHJpdmF0ZSBfZ2V0SW5TY3JlZW5NYXhOdW1iZXIoc3RhcnRJbmRleCk6IG51bWJlciB7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLl9sYXlvdXRUeXBlO1xuICAgICAgICBjb25zdCBwZFRvcCA9IHRoaXMuX3BhZGRpbmdUb3A7XG4gICAgICAgIGNvbnN0IHBkQm90dG9tID0gdGhpcy5fcGFkZGluZ0JvdHRvbTtcbiAgICAgICAgY29uc3QgcGRMZWZ0ID0gdGhpcy5fcGFkZGluZ0xlZnQ7XG4gICAgICAgIGNvbnN0IHBkUmlnaHQgPSB0aGlzLl9wYWRkaW5nUmlnaHQ7XG4gICAgICAgIGNvbnN0IHNwYWNlWCA9IHRoaXMuX3NwYWNpbmdYO1xuICAgICAgICBjb25zdCBzcGFjZVkgPSB0aGlzLl9zcGFjaW5nWTtcbiAgICAgICAgY29uc3QgYWRhcHRlciA9IHRoaXMuYWRhcHRlcjtcbiAgICAgICAgbGV0IHJldE51bWJlciA9IDA7XG4gICAgICAgIGxldCB0b3RhbCA9IDA7XG4gICAgICAgIGlmIChXSF9SZWN5Y2xlVmlld19UeXBlLlZFUlRJQ0FMID09PSB0eXBlKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKTtcbiAgICAgICAgICAgIGNvbnN0IG1heEhlaWdodCA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLmhlaWdodDtcbiAgICAgICAgICAgIGlmIChzdGFydEluZGV4ID09IDApIHtcbiAgICAgICAgICAgICAgICB0b3RhbCA9IHRvdGFsICsgcGRUb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodG90YWwgPiBtYXhIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldE51bWJlciArPSAxO1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IGFkYXB0ZXIuZ2V0U2l6ZShpKS5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gc3BhY2VZO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuSE9SSVpPTlRBTCA9PT0gdHlwZSkge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmFkYXB0ZXIuZ2V0SXRlbUNvdW50KCk7XG4gICAgICAgICAgICBjb25zdCBtYXhXaWR0aCA9IHRoaXMuc2Nyb2xsVmlldy5ub2RlLndpZHRoO1xuICAgICAgICAgICAgaWYgKHN0YXJ0SW5kZXggPT0gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsID0gdG90YWwgKyBwZExlZnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gc3RhcnRJbmRleDsgaSA8IGNvdW50OyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodG90YWwgPiBtYXhXaWR0aCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0TnVtYmVyICs9IDE7XG4gICAgICAgICAgICAgICAgdG90YWwgKz0gYWRhcHRlci5nZXRTaXplKGkpLndpZHRoO1xuICAgICAgICAgICAgICAgIHRvdGFsICs9IHNwYWNlWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0TnVtYmVyO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlVigpIHtcbiAgICAgICAgY29uc3QgaXNVcCA9IHRoaXMuX2NvbnRlbnRWaWV3LnBvc2l0aW9uLnkgPiB0aGlzLmxhc3RDb250ZW50UG9zWTtcbiAgICAgICAgY29uc3QgY2hpbGRzID0gdGhpcy5fY2hpbGRyZW5zO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgLy8gaWYgKGNoaWxkcy5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgLy8gICAgIGJyZWFrO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGNoaWxkc1tpXTtcbiAgICAgICAgICAgIGNvbnN0IHZpZXdQb3MgPSB0aGlzLl9nZXRQb3NpdGlvbkluVmlldyhpdGVtKTtcbiAgICAgICAgICAgIGlmIChpc1VwKSB7XG4gICAgICAgICAgICAgICAgLy/lpoLmnpxpdGVt6LaF6L+H5LiK6L6555WMIOmCo+S5iOWwseenu+mZpFxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnkgLSBpdGVtLm5vZGUuaGVpZ2h0IC8gMiA+IHRoaXMuaGFsZlNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlSXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueSArIGl0ZW0ubm9kZS5oZWlnaHQgLyAyIDwgLXRoaXMuaGFsZlNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlSXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc1VwIHx8ICF0aGlzLl9jaGlsZHJlbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICAvL+WIm+W7uuS4i+S4gOS4qlxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlTmV4dEl0ZW0oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5Yib5bu65LiK5LiA5LiqXG4gICAgICAgICAgICB0aGlzLl9jcmVhdGVQcmV2aW91c0l0ZW0oKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxhc3RDb250ZW50UG9zWSA9IHRoaXMuX2NvbnRlbnRWaWV3LnBvc2l0aW9uLnk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB1cGRhdGVIKCkge1xuICAgICAgICBjb25zdCBpc0xlZnQgPSB0aGlzLl9jb250ZW50Vmlldy5wb3NpdGlvbi54IDwgdGhpcy5sYXN0Q29udGVudFBvc1g7XG4gICAgICAgIGNvbnN0IGNoaWxkcyA9IHRoaXMuX2NoaWxkcmVucztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIC8vIGlmIChjaGlsZHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIC8vICAgICBicmVhaztcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSBjaGlsZHNbaV07XG4gICAgICAgICAgICBjb25zdCB2aWV3UG9zID0gdGhpcy5fZ2V0UG9zaXRpb25JblZpZXcoaXRlbSk7XG4gICAgICAgICAgICBpZiAoaXNMZWZ0KSB7XG4gICAgICAgICAgICAgICAgLy/lpoLmnpxpdGVt6LaF6L+H5bem6L6555WMIOmCo+S5iOWwseenu+mZpFxuICAgICAgICAgICAgICAgIGlmICh2aWV3UG9zLnggKyBpdGVtLm5vZGUud2lkdGggLyAyIDwgLXRoaXMuaGFsZlNjcm9sbFZpZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcmVtb3ZlSXRlbShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgaS0tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZpZXdQb3MueCAtIGl0ZW0ubm9kZS53aWR0aCAvIDIgPiB0aGlzLmhhbGZTY3JvbGxWaWV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3JlbW92ZUl0ZW0oaXRlbSk7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIGktLTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzTGVmdCB8fCAhdGhpcy5fY2hpbGRyZW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgLy/liJvlu7rkuIvkuIDkuKpcbiAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU5leHRJdGVtKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+WIm+W7uuS4iuS4gOS4qlxuICAgICAgICAgICAgdGhpcy5fY3JlYXRlUHJldmlvdXNJdGVtKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5sYXN0Q29udGVudFBvc1ggPSB0aGlzLl9jb250ZW50Vmlldy5wb3NpdGlvbi54O1xuICAgIH1cblxuICAgIC8v5Yib5bu65LiK5LiA5LiqXG4gICAgcHJpdmF0ZSBfY3JlYXRlUHJldmlvdXNJdGVtKCkge1xuICAgICAgICBjb25zdCBmaXJzdEl0ZW0gPSB0aGlzLl9jaGlsZHJlbnNbMF07XG4gICAgICAgIGlmIChmaXJzdEl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gZmlyc3RJdGVtLml0ZW1JbmRleCAtIDE7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaXRlbTogV0hSZWN5Y2xlSG9sZGVyID0gdGhpcy5fY3JlYXRlSXRlbShpbmRleCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faW5TY3JlZW5CeUl0ZW0oaXRlbSkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9jb250ZW50Vmlldy5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVucy51bnNoaWZ0KGl0ZW0pO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZVByZXZpb3VzSXRlbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGV0IHBvaW50ID0gdGhpcy5fY29udGVudFZpZXcucG9zaXRpb24uY2xvbmUoKTtcbiAgICAgICAgICAgIHBvaW50LnkgPSAtKHBvaW50LnkgLSB0aGlzLmhhbGZTY3JvbGxWaWV3KTtcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRoaXMuX3BvaW50VG9JbmRleChwb2ludCk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPCAwKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKSkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gdGhpcy5hZGFwdGVyLmdldEl0ZW1Db3VudCgpIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgdGhpcy5hZGFwdGVyLmdldEl0ZW1Db3VudCgpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaXRlbTogV0hSZWN5Y2xlSG9sZGVyID0gdGhpcy5fY3JlYXRlSXRlbShpbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2luU2NyZWVuQnlJdGVtKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRWaWV3LmFkZENoaWxkKGl0ZW0ubm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NoaWxkcmVucy5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jcmVhdGVQcmV2aW91c0l0ZW0oKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WIm+W7uuS4i+S4gOS4qlxuICAgIHByaXZhdGUgX2NyZWF0ZU5leHRJdGVtKCkge1xuICAgICAgICBjb25zdCBsYXN0SXRlbSA9IHRoaXMuX2NoaWxkcmVuc1t0aGlzLl9jaGlsZHJlbnMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmIChsYXN0SXRlbSkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBsYXN0SXRlbS5pdGVtSW5kZXggKyAxO1xuICAgICAgICAgICAgaWYgKGluZGV4ID49IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGcmlzdENyZWF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGl0ZW06IFdIUmVjeWNsZUhvbGRlciA9IHRoaXMuX2NyZWF0ZUl0ZW0oaW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luU2NyZWVuQnlJdGVtKGl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY29udGVudFZpZXcuYWRkQ2hpbGQoaXRlbS5ub2RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9jaGlsZHJlbnMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0ZyaXN0Q3JlYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRhcHRlci5vbkZpcnN0Q3JlYXRlKGl0ZW0sIGl0ZW0uaXRlbUluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fY3JlYXRlTmV4dEl0ZW0oKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0ZyaXN0Q3JlYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL3RoaXMuaGFsZlNjcm9sbFZpZXcgLSBwb2ludC55XG4gICAgICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLl9nZXRCb3JhZFBvaW50KCk7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aGlzLl9wb2ludFRvSW5kZXgocG9pbnQpO1xuICAgICAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbmRleCA+PSB0aGlzLmFkYXB0ZXIuZ2V0SXRlbUNvdW50KCkpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKSAtIDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IHRoaXMuYWRhcHRlci5nZXRJdGVtQ291bnQoKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGl0ZW06IFdIUmVjeWNsZUhvbGRlciA9IHRoaXMuX2NyZWF0ZUl0ZW0oaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pblNjcmVlbkJ5SXRlbShpdGVtKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jb250ZW50Vmlldy5hZGRDaGlsZChpdGVtLm5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jaGlsZHJlbnMucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNGcmlzdENyZWF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGFwdGVyLm9uRmlyc3RDcmVhdGUoaXRlbSwgaXRlbS5pdGVtSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NyZWF0ZU5leHRJdGVtKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0ZyaXN0Q3JlYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzRnJpc3RDcmVhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dldEJvcmFkUG9pbnQoKTogY2MuVmVjMyB7XG4gICAgICAgIGNvbnN0IHZlYyA9IHRoaXMuX2NvbnRlbnRWaWV3LnBvc2l0aW9uLmNsb25lKCk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLl9sYXlvdXRUeXBlO1xuICAgICAgICBpZiAoV0hfUmVjeWNsZVZpZXdfVHlwZS5WRVJUSUNBTCA9PT0gdHlwZSkge1xuICAgICAgICAgICAgdmVjLnkgPSB0aGlzLmhhbGZTY3JvbGxWaWV3IC0gdmVjLnk7XG4gICAgICAgIH0gZWxzZSBpZiAoV0hfUmVjeWNsZVZpZXdfVHlwZS5IT1JJWk9OVEFMID09PSB0eXBlKSB7XG4gICAgICAgICAgICB2ZWMueCA9IC12ZWMueCAtIHRoaXMuaGFsZlNjcm9sbFZpZXc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlYztcbiAgICB9XG5cbiAgICBwcml2YXRlIGdldFNjcmVlbkxhc3RJbmRleCgpOiBudW1iZXIge1xuICAgICAgICBsZXQgcG9pbnQgPSB0aGlzLl9jb250ZW50Vmlldy5wb3NpdGlvbi5jbG9uZSgpO1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5fbGF5b3V0VHlwZTtcbiAgICAgICAgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuVkVSVElDQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHBvaW50LnkgPSAtKHBvaW50LnkgKyB0aGlzLmhhbGZTY3JvbGxWaWV3KTtcbiAgICAgICAgfSBlbHNlIGlmIChXSF9SZWN5Y2xlVmlld19UeXBlLkhPUklaT05UQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIHBvaW50LnggPSB0aGlzLmhhbGZTY3JvbGxWaWV3IC0gcG9pbnQueDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5fcG9pbnRUb0luZGV4KHBvaW50KTtcbiAgICB9XG5cbiAgICAvL+WdkOagh+i9rGluZGV4XG4gICAgcHJpdmF0ZSBfcG9pbnRUb0luZGV4KHBvaW50OiBjYy5WZWMzKTogbnVtYmVyIHtcbiAgICAgICAgY29uc3QgY291bnQgPSB0aGlzLmFkYXB0ZXIuZ2V0SXRlbUNvdW50KCk7XG4gICAgICAgIGNvbnN0IHR5cGUgPSB0aGlzLl9sYXlvdXRUeXBlO1xuICAgICAgICBjb25zdCBwZFRvcCA9IHRoaXMuX3BhZGRpbmdUb3A7XG4gICAgICAgIGNvbnN0IHBkQm90dG9tID0gdGhpcy5fcGFkZGluZ0JvdHRvbTtcbiAgICAgICAgY29uc3QgcGRMZWZ0ID0gdGhpcy5fcGFkZGluZ0xlZnQ7XG4gICAgICAgIGNvbnN0IHBkUmlnaHQgPSB0aGlzLl9wYWRkaW5nUmlnaHQ7XG4gICAgICAgIGNvbnN0IHNwYWNlWCA9IHRoaXMuX3NwYWNpbmdYO1xuICAgICAgICBjb25zdCBzcGFjZVkgPSB0aGlzLl9zcGFjaW5nWTtcbiAgICAgICAgbGV0IHJldEluZGV4ID0gLTE7XG4gICAgICAgIGlmIChXSF9SZWN5Y2xlVmlld19UeXBlLlZFUlRJQ0FMID09PSB0eXBlKSB7XG4gICAgICAgICAgICAvLyBsZXQgdG9hdGxZID1cbiAgICAgICAgICAgIGxldCBib2FyZFRvcCA9ICgxIC0gdGhpcy5fY29udGVudFZpZXcuYW5jaG9yWSkgKiB0aGlzLl9jb250ZW50Vmlldy5oZWlnaHQ7XG4gICAgICAgICAgICBsZXQgYm9hcmRCb3R0b20gPSBib2FyZFRvcCAtIHBkVG9wO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuYWRhcHRlci5nZXRTaXplKGkpO1xuICAgICAgICAgICAgICAgIGJvYXJkQm90dG9tIC09IHNpemUuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIGlmIChwb2ludC55IDw9IGJvYXJkVG9wICYmIHBvaW50LnkgPiBib2FyZEJvdHRvbSkge1xuICAgICAgICAgICAgICAgICAgICByZXRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBib2FyZFRvcCA9IGJvYXJkQm90dG9tO1xuICAgICAgICAgICAgICAgIGJvYXJkQm90dG9tID0gYm9hcmRCb3R0b20gLSBzcGFjZVk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoV0hfUmVjeWNsZVZpZXdfVHlwZS5IT1JJWk9OVEFMID09PSB0eXBlKSB7XG4gICAgICAgICAgICBsZXQgYm9hcmRMZWZ0ID0gLXRoaXMuX2NvbnRlbnRWaWV3LmFuY2hvclggKiB0aGlzLl9jb250ZW50Vmlldy53aWR0aDtcbiAgICAgICAgICAgIGxldCBib2FyZFJpZ2h0ID0gYm9hcmRMZWZ0ICsgcGRMZWZ0O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2l6ZSA9IHRoaXMuYWRhcHRlci5nZXRTaXplKGkpO1xuICAgICAgICAgICAgICAgIGJvYXJkUmlnaHQgKz0gc2l6ZS53aWR0aDtcbiAgICAgICAgICAgICAgICBpZiAocG9pbnQueCA+PSBib2FyZExlZnQgJiYgcG9pbnQueCA8IGJvYXJkUmlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYm9hcmRMZWZ0ID0gYm9hcmRSaWdodDtcbiAgICAgICAgICAgICAgICBib2FyZFJpZ2h0ID0gYm9hcmRSaWdodCArIHNwYWNlWDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0SW5kZXg7XG4gICAgfVxuXG4gICAgLyoq5piv5ZCm5rua5Yqo5a655ZmoICovXG4gICAgcHJpdmF0ZSBiU2Nyb2xsaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBsYXRlVXBkYXRlKGR0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYlNjcm9sbGluZyA9PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coJ+ato+WcqOa7muWKqCcpO1xuICAgICAgICAvLyBpZih0aGlzLnRpbWVzIDwgMil7XG4gICAgICAgIC8vICAgICB0aGlzLnRpbWVzICs9IDE7XG4gICAgICAgIC8vICAgICByZXR1cm5cbiAgICAgICAgLy8gfWVsc2V7XG4gICAgICAgIC8vICAgICB0aGlzLnRpbWVzID0gMDtcbiAgICAgICAgLy8gfVxuICAgICAgICB0aGlzLmJTY3JvbGxpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZm9vdGVyVXBkYXRlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlRnVuKCk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBfZm9vdGVyVXBkYXRlKCkge1xuICAgICAgICBpZiAoMCAhPT0gdGhpcy5mb290ZXJTdGF0ZSB8fCAhdGhpcy5mb290ZXJFdmVudHMgfHwgIXRoaXMuZm9vdGVyRXZlbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvb3Rlck9mZnNldCA9IHRoaXMuZm9vdGVyT2Zmc2V0O1xuICAgICAgICBjb25zdCB0eXBlID0gdGhpcy5fbGF5b3V0VHlwZTtcbiAgICAgICAgaWYgKFdIX1JlY3ljbGVWaWV3X1R5cGUuVkVSVElDQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzVXAgPSB0aGlzLl9jb250ZW50Vmlldy5wb3NpdGlvbi55ID4gdGhpcy5sYXN0Q29udGVudFBvc1k7XG4gICAgICAgICAgICBpZiAoaXNVcCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2NvbnRlbnRWaWV3LmhlaWdodCAqIHRoaXMuX2NvbnRlbnRWaWV3LmFuY2hvclkgLVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbGZTY3JvbGxWaWV3IC1cbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyT2Zmc2V0O1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb250ZW50Vmlldy5wb3NpdGlvbi55ID4gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9vdGVyU3RhdGUgPSAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChXSF9SZWN5Y2xlVmlld19UeXBlLkhPUklaT05UQUwgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGlzTGVmdCA9IHRoaXMuX2NvbnRlbnRWaWV3LnBvc2l0aW9uLnggPCB0aGlzLmxhc3RDb250ZW50UG9zWDtcbiAgICAgICAgICAgIGlmIChpc0xlZnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXJnZXQgPVxuICAgICAgICAgICAgICAgICAgICAtdGhpcy5fY29udGVudFZpZXcud2lkdGggKiAoMSAtIHRoaXMuX2NvbnRlbnRWaWV3LmFuY2hvclgpICtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYWxmU2Nyb2xsVmlldyArXG4gICAgICAgICAgICAgICAgICAgIGZvb3Rlck9mZnNldDtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fY29udGVudFZpZXcucG9zaXRpb24ueCA8IHRhcmdldCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvb3RlclN0YXRlID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKDEgPT09IHRoaXMuZm9vdGVyU3RhdGUpIHtcbiAgICAgICAgICAgIGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIuZW1pdEV2ZW50cyh0aGlzLmZvb3RlckV2ZW50cywgdGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIF9vblNjcm9sbGluZyhldjogRXZlbnQgPSBudWxsKSB7XG4gICAgICAgIHRoaXMuYlNjcm9sbGluZyA9IHRydWU7XG4gICAgfVxuXG4gICAgLy/muIXnqbrpobXpnaJcbiAgICBwcml2YXRlIF9yZXNldCgpIHtcbiAgICAgICAgdGhpcy5nZW5lcj8ucmV0dXJuKCcnKTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW5zPy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9yZW1vdmVJdGVtKHYpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW5zLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSB0YWcgPSAwO1xuICAgIC8qKuiOt+WPluS4gOS4quWIl+ihqOmhuSDkvJjlhYjku47lhoXlrZjmsaDojrflj5YqL1xuICAgIHByb3RlY3RlZCBnZXRJdGVtKHR5cGUsIGluZGV4KSB7XG4gICAgICAgIGxldCBjaGlsZDogV0hSZWN5Y2xlSG9sZGVyO1xuICAgICAgICBsZXQgZGF0YXMgPSB0aGlzLl9wb29sLmdldCh0eXBlKTtcbiAgICAgICAgaWYgKGRhdGFzICYmIGRhdGFzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2hpbGQgPSBkYXRhcy5wb3AoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNoaWxkID0gdGhpcy5hZGFwdGVyLm9uQ3JlYXRlVmlld0hvbGRlcihpbmRleCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuaXRlbUNsaWNrKSB7XG4gICAgICAgICAgICBjaGlsZC5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jbGlja0l0ZW0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkLnRhZyA9IHRoaXMudGFnKys7XG4gICAgICAgIGNoaWxkLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLmFkYXB0ZXIub25CaW5kVmlld0hvbGRlcihjaGlsZCwgaW5kZXgpO1xuICAgICAgICByZXR1cm4gY2hpbGQ7XG4gICAgfVxuXG4gICAgLy/lsIboioLngrnmlL7lhaXlhoXlrZjmsaDlubbliKDpmaRcbiAgICBwcm90ZWN0ZWQgX3JlbW92ZUl0ZW0oaXRlbTogV0hSZWN5Y2xlSG9sZGVyKSB7XG4gICAgICAgIGlmICghaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGl0ZW0/Lm5vZGU/Lm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xpY2tJdGVtLCB0aGlzKTtcbiAgICAgICAgaXRlbT8ubm9kZT8ucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICBsZXQgdHlwZSA9IGl0ZW0/LnR5cGU7XG4gICAgICAgIGxldCBkYXRhcyA9IHRoaXMuX3Bvb2wuZ2V0KHR5cGUpO1xuICAgICAgICBpZiAoIWRhdGFzKSB7XG4gICAgICAgICAgICBkYXRhcyA9IG5ldyBBcnJheSgpO1xuICAgICAgICB9XG4gICAgICAgIGRhdGFzLnB1c2goaXRlbSk7XG4gICAgICAgIHRoaXMuX3Bvb2wuc2V0KHR5cGUsIGRhdGFzKTtcbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1DbGljaykge1xuICAgICAgICAgICAgdGhpcy5fY2hpbGRyZW5zPy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgdi5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xpY2tJdGVtLCB0aGlzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgb25FbmFibGUoKSB7XG4gICAgICAgIGlmICh0aGlzLml0ZW1DbGljaykge1xuICAgICAgICAgICAgdGhpcy5fY2hpbGRyZW5zPy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgdi5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jbGlja0l0ZW0sIHRoaXMpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xpY2tJdGVtKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBpbmRleCA9IC0xO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NoaWxkcmVucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgaWYgKHRhcmdldC51dWlkID09PSB0aGlzLl9jaGlsZHJlbnNbaV0ubm9kZS51dWlkKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSB0aGlzLl9jaGlsZHJlbnNbaV0uaXRlbUluZGV4O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWRhcHRlci5vbkNsaWNrKGluZGV4KTtcbiAgICB9XG5cbiAgICAvKiog5YiG5bin5Yqg6L29ICovXG4gICAgcHJpdmF0ZSAqZ2V0R2VuZXJhdG9yTGVuZ3RoKGxlbmd0aDogbnVtYmVyLCBjYWxsYmFjazogRnVuY3Rpb24sIC4uLnBhcmFtczogYW55KTogR2VuZXJhdG9yIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHJlc3VsdCA9IGNhbGxiYWNrKGksIC4uLnBhcmFtcyk7XG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgeWllbGQ7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKiDliIbluKfmiafooYwgKi9cbiAgICBwcml2YXRlIGV4ZUdlbmVyYXRvcihnZW5lcmF0b3I6IEdlbmVyYXRvciwgZHVyYXRpb246IG51bWJlcikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgbGV0IGdlbiA9IGdlbmVyYXRvcjtcbiAgICAgICAgICAgIGxldCBleGVjdXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVyID0gZ2VuLm5leHQoKTsgOyBpdGVyID0gZ2VuLm5leHQoKSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlciA9PSBudWxsIHx8IGl0ZXIuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXcgRGF0ZSgpLmdldFRpbWUoKSAtIHN0YXJ0VGltZSA+IGR1cmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGV4ZWN1dGUoKSwgY2MuZGlyZWN0b3IuZ2V0RGVsdGFUaW1lKCkgKiAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBleGVjdXRlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIG9uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5nZW5lcj8ucmV0dXJuKCcnKTtcbiAgICAgICAgdGhpcy5nZW5lciA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5fY2hpbGRyZW5zLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX3JlbW92ZUl0ZW0odik7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9jaGlsZHJlbnMubGVuZ3RoID0gMDtcbiAgICAgICAgdGhpcy5fY2hpbGRyZW5zID0gbnVsbDtcblxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5fcG9vbCkge1xuICAgICAgICAgICAgY29uc3QgaXRlbXM6IEFycmF5PFdIUmVjeWNsZUhvbGRlcj4gPSB0aGlzLl9wb29sW2tleV07XG4gICAgICAgICAgICBpdGVtcy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgICAgICAgdiA9IG51bGw7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgaXRlbXMubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9wb29sLmNsZWFyKCk7XG4gICAgICAgIHRoaXMuX3Bvb2wgPSBudWxsO1xuXG4gICAgICAgIHRoaXMudXBkYXRlRnVuID0gbnVsbDtcbiAgICAgICAgdGhpcy5zY3JvbGxWaWV3ID0gbnVsbDtcbiAgICAgICAgdGhpcy5fY29udGVudFZpZXcgPSBudWxsO1xuICAgICAgICB0aGlzLl9hZGFwdGVyID0gbnVsbDtcbiAgICB9XG59XG5cblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFdIUmVjeWNsZUhvbGRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgLy/oioLngrnnsbvlnotcbiAgICB0eXBlOiBudW1iZXI7XG4gICAgLy/oioLngrnmoIfor4ZcbiAgICB0YWc6IG51bWJlcjtcbiAgICAvL+iKgueCueS4i+agh1xuICAgIGl0ZW1JbmRleDogbnVtYmVyO1xufVxuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgV0hSZWN5Y2xlQWRhcHRlcjxWSCBleHRlbmRzIFdIUmVjeWNsZUhvbGRlcj4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8v6I635Y+W6IqC54K55pWw6YePXG4gICAgYWJzdHJhY3QgZ2V0SXRlbUNvdW50KCk6IG51bWJlcjtcblxuICAgIC8v5Yib5bu66IqC54K5XG4gICAgYWJzdHJhY3Qgb25DcmVhdGVWaWV3SG9sZGVyKGluZGV4OiBudW1iZXIpOiBWSDtcblxuICAgIC8v57uR5a6a6IqC54K55L+h5oGvXG4gICAgYWJzdHJhY3Qgb25CaW5kVmlld0hvbGRlcihob2xkZXI6IFZILCBpbmRleCk7XG5cbiAgICAvL+iOt+WPluiKgueCueWkp+Wwj1xuICAgIGFic3RyYWN0IGdldFNpemUoaW5kZXgpOiB7IHdpZHRoLCBoZWlnaHQgfTtcblxuICAgIG9uQ2xpY2soaW5kZXg6IG51bWJlcik6IHZvaWR7XG4gICAgICAgIFxuICAgIH07XG5cbiAgICAvL+esrOS4gOasoeWIm+W7ulxuICAgIHB1YmxpYyBvbkZpcnN0Q3JlYXRlKGhvbGRlcjogVkgsIGluZGV4KSB7XG5cbiAgICB9XG5cbiAgICAvL+iOt+WPluiKgueCueexu+Wei1xuICAgIHB1YmxpYyBnZXRUeXBlKGluZGV4OiBudW1iZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9O1xufVxuXG5leHBvcnQgY29uc3QgRnVsbEhlaWdodCA9IDA7XG5leHBvcnQgY29uc3QgRnVsbFdpZHRoID0gMDsiXX0=