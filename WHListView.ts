const { ccclass, property } = cc._decorator;
//2000以内则有滚动动画
const AUTO_SCROLL_MAX_DISTANCE = 2000;

export enum WH_List_Type {
    /**
     * @zh 水平布局。
     */
    HORIZONTAL = 1,
    /**
     * @zh 垂直布局。
     */
    VERTICAL = 2,
}

@ccclass
export default class WHListView extends cc.Component {
    @property({
        type: cc.Node,
        tooltip: '页面适配器节点',
    })
    public get adapterNode(): cc.Node {
        return this._adapterNode;
    }
    public set adapterNode(v: cc.Node) {
        this._adapterNode = v;
        this._adapter = this._adapterNode.getComponent(WHListAdapter);
    }

    @property({
        type: cc.Node,
        tooltip: 'footer节点',
    })
    protected footer: cc.Node = null;
    @property({
        tooltip: '距离底部多少数值触发footer刷新事件',
    })
    protected footerOffset: number = 0;
    @property({
        type: cc.Component.EventHandler,
        tooltip: 'footer刷新事件触发',
    })
    protected footerEvents: cc.Component.EventHandler[] = [];

    @property({
        type: cc.Enum(WH_List_Type),
        tooltip: '布局类型',
    })
    public get type(): WH_List_Type {
        return this._layoutType;
    }
    public set type(v: WH_List_Type) {
        this._layoutType = v;
    }

    @property({
        tooltip: '容器内左边距',
    })
    public get paddingLeft(): number {
        return this._paddingLeft;
    }
    public set paddingLeft(v: number) {
        this._paddingLeft = v;
    }

    @property({
        tooltip: '容器内右边距',
    })
    public get paddingRight(): number {
        return this._paddingRight;
    }
    public set paddingRight(v: number) {
        this._paddingRight = v;
    }

    @property({
        tooltip: '容器内上边距',
    })
    public get paddingTop(): number {
        return this._paddingTop;
    }
    public set paddingTop(v: number) {
        this._paddingTop = v;
    }

    @property({
        tooltip: '容器内下边距',
    })
    public get paddingBottom(): number {
        return this._paddingBottom;
    }
    public set paddingBottom(v: number) {
        this._paddingBottom = v;
    }

    @property({
        tooltip: '子节点之间的水平间距。',
        visible: function () {
            return this._layoutType !== WH_List_Type.VERTICAL;
        },
    })
    public get spacingX(): number {
        return this._spacingX;
    }
    public set spacingX(v: number) {
        this._spacingX = v;
    }

    @property({
        tooltip: '子节点之间的垂直间距。',
        visible: function () {
            return this._layoutType !== WH_List_Type.HORIZONTAL;
        },
    })
    public get spacingY(): number {
        return this._spacingY;
    }
    public set spacingY(v: number) {
        this._spacingY = v;
    }

    @property({
        tooltip: '是否添加点击事件',
    })
    protected itemClick = true;

    @property({
        serializable: true,
    })
    protected _layoutType = WH_List_Type.VERTICAL;

    @property({
        serializable: true,
    })
    protected _paddingLeft = 0;
    @property({
        serializable: true,
    })
    protected _paddingRight = 0;
    @property({
        serializable: true,
    })
    protected _paddingTop = 0;
    @property({
        serializable: true,
    })
    protected _paddingBottom = 0;
    @property({
        serializable: true,
    })
    protected _spacingX = 0;
    @property({
        serializable: true,
    })
    protected _spacingY = 0;
    @property({
        serializable: true,
    })
    protected _adapter: WHListAdapter<WHListHolder> = null;
    public get adapter(): WHListAdapter<WHListHolder> {
        return this._adapter;
    }

    @property({
        serializable: true,
    })
    protected _adapterNode: cc.Node = null;

    /**滚动器一半的值 如果是横向布局则是 width/2 纵向布局则是 height/2 */
    protected halfScrollView: number = 0;
    /**上一次content的Y值，用于和现在content的Y值比较，得出是向上还是向下滚动 */
    protected lastContentPosY: number = 0;
    /**上一次content的X值，用于和现在content的X值比较，得出是向左还是向右滚动 */
    protected lastContentPosX: number = 0;
    //分帧创建器
    protected gener: Generator = null;

    /**item节点内存池 */
    protected _pool: Map<number, Array<WHListHolder>> = new Map();
    /**当前现实在屏幕里的item */
    protected _childrens: Array<WHListHolder> = new Array();

    /**刷新的函数 */
    protected updateFun: Function = function () { };

    public scrollView: cc.ScrollView = null;

    private _contentView: cc.Node = null;

    private footerState = 0; //0没有加载 1 正在加载 2加载完成

    onLoad() {
        this.scrollView = this.node.getComponent(cc.ScrollView);
        this._contentView = this.scrollView.content;
        this.node.getComponent(cc.Widget)?.updateAlignment();
        this.scrollView.content.parent.getComponent(cc.Widget)?.updateAlignment();
        this.scrollView.content.getComponent(cc.Widget)?.updateAlignment();
        this.scrollView.node.on('scrolling', this._onScrolling, this);
        this._initLayout();
    }

    public scrollToIndex(index) {
        if (index >= this.adapter.getItemCount()) {
            index = this.adapter.getItemCount() - 1;
        }
        if (index < 0) {
            index = 0;
        }
        let point = this._calculationPosition(index);
        const size = this.adapter.getSize(index);
        const type = this._layoutType;
        let vec = new cc.Vec2(point.x, point.y);
        let setpEnable = true;
        let topIndex = 0;
        if (this._childrens.length) {
            topIndex = this._childrens[0].itemIndex;
        }
        let point2 = this._calculationPosition(topIndex);
        let vec2 = new cc.Vec2(point2.x, point2.y);
        const size2 = this.adapter.getSize(topIndex);
        if (WH_List_Type.VERTICAL === type) {
            vec.y = -(point.y + size.height / 2);
            vec2.y = -(point2.y + size2.height / 2);
        } else if (WH_List_Type.HORIZONTAL === type) {
            vec.x = point.x - size.width / 2;
            vec2.x = point2.x - size2.width / 2;
        }
        setpEnable = Math.abs(vec.len() - vec2.len()) > AUTO_SCROLL_MAX_DISTANCE;
        if (setpEnable) {
            if (WH_List_Type.VERTICAL === type) {
                if (topIndex < index) {
                    vec2.y = vec.y - AUTO_SCROLL_MAX_DISTANCE;
                } else {
                    vec2.y = vec.y + AUTO_SCROLL_MAX_DISTANCE;
                }
                this.scrollView.scrollToOffset(vec2, 0);
                this.lastContentPosY = this._contentView.position.y;
            } else {
                if (topIndex < index) {
                    vec2.x = vec.x - AUTO_SCROLL_MAX_DISTANCE;
                } else {
                    vec2.x = vec.x + AUTO_SCROLL_MAX_DISTANCE;
                }
                this.scrollView.scrollToOffset(vec2, 0);
                this.lastContentPosX = this._contentView.position.x;
            }
        }
        this.scrollView.scrollToOffset(vec, 1);
    }

    private isFristCreate: boolean = true;
    //刷新数据
    public notifyDataSetChanged() {

        //let start = Date.now();

        const count = this.adapter.getItemCount();
        const childs = this._childrens;
        const type = this._layoutType;
        //重新计算高度
        let oldHeight = this._contentView.height;
        let oldWidth = this._contentView.width;
        this._countParam();
        let delta;
        if (WH_List_Type.VERTICAL === type) {
            delta = oldHeight - this._contentView.height;
        } else if (WH_List_Type.HORIZONTAL === type) {
            delta = this._contentView.width - oldWidth;
        }
        if (childs.length == 0) {
            this.isFristCreate = true;
        } else {
            this.isFristCreate = false;
        }
        //先删除掉所有显示的节点
        for (let i = 0; i < childs.length; ++i) {
            //无法获取到原数据 所以这里不做缓存
            this._removeItem(childs[i]);
        }
        this._childrens.length = 0;

        if (delta >= 0 && delta < 0.0001) {
            //由上向下创建
            this._createNextItem();
        } else if (delta < 0) {
            this._createNextItem();
        } else {
            //获取当前位置
            const index = this.getScreenLastIndex();
            if (index < count) {
                this._createNextItem();
            } else {
                if (WH_List_Type.VERTICAL === type) {
                    this.scrollView.scrollToBottom();
                    this.lastContentPosY = this._contentView.position.y;
                } else if (WH_List_Type.HORIZONTAL === type) {
                    this.scrollView.scrollToRight();
                }
                this._createNextItem();
            }
        }
        // let stop = Date.now();
        // console.log(stop - start);
    }

    /**
    * 触发加载完成
    * @param more 是否还有更多
    */
    public loadMoreFinish(finish: boolean = false) {
        if (finish) {
            this.footerState = 0;
        } else {
            this.footerState = 2;
        }
    }

    private _initLayout() {
        this._countParam();
        this.startCreateItems();
    }

    private _countParam() {
        const type = this._layoutType;
        const pdTop = this._paddingTop;
        const pdBottom = this._paddingBottom;
        const pdLeft = this._paddingLeft;
        const pdRight = this._paddingRight;
        const spaceX = this._spacingX;
        const spaceY = this._spacingY;
        const contentView = this._contentView;
        const footer = this.footer;

        if (WH_List_Type.VERTICAL == type) {
            this.halfScrollView = this.scrollView.node.height / 2;
            const count = this.adapter.getItemCount() - 1 < 0 ? 0 : this.adapter.getItemCount();
            let total = pdTop + pdBottom + spaceY * count;
            for (let i = 0; i < this.adapter.getItemCount(); ++i) {
                total += this.adapter.getSize(i).height;
            }
            if (total < this.scrollView.node.height) {
                total = this.scrollView.node.height;
            }
            contentView.height = total + (footer?.height || 0);
            if (footer) {
                footer.position = new cc.Vec3(
                    footer.position.x,
                    -contentView.height * contentView.anchorY + footer.height / 2,
                );
                this.footerOffset = footer.height;
            }
            contentView.width =
                this.scrollView.node.width - pdLeft - pdRight;
            this.updateFun = this.updateV;
        } else if (WH_List_Type.HORIZONTAL === type) {
            this.halfScrollView = this.scrollView.node.width / 2;
            const count = this.adapter.getItemCount() - 1 < 0 ? 0 : this.adapter.getItemCount();
            let total = pdLeft + pdRight + spaceX * count;
            for (let i = 0; i < this.adapter.getItemCount(); ++i) {
                total += this.adapter.getSize(i).width;
            }
            if (total < this.scrollView.node.width) {
                total = this.scrollView.node.width;
            }
            contentView.width = total + (footer?.width || 0);
            if (footer) {
                footer.position = new cc.Vec3(
                    contentView.width * (1 - contentView.anchorX) - footer.width / 2,
                    footer.position.y,
                );
                this.footerOffset = footer.width;
            }
            contentView.height =
                this.scrollView.node.height - pdTop - pdBottom;
            this.updateFun = this.updateH;
        } 
    }

    private startCreateItems() {
        const startIndex = 0;
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
        //         const item: WHListHolder = this._createItem(index);
        //         parent.addChild(item.node);
        //         this._childrens.push(item);
        //     } else {
        //         isBreak = true;
        //         return false;
        //     }
        //     return true;
        // });

        // this.exeGenerator(this.gener, 4);
    }

    protected _createItem(index): WHListHolder {
        let item: WHListHolder;
        let itemType = this.adapter.getType(index);
        item = this.getItem(itemType, index);
        item.itemIndex = index;
        item.node.position = this._calculationPosition(index);
        return item;
    }

    //判断是否存在屏幕里
    private _inScreen(index): boolean {
        if (index < 0 || index >= this.adapter.getItemCount()) {
            return false;
        }
        let point = this._calculationPosition(index);
        point = this._getPositionByPoint(point);
        const size = this.adapter.getSize(index);
        return this._pointHitScreen(point, size);
    }

    protected _inScreenByItem(item: WHListHolder) {
        if (!item) {
            return;
        }
        let index = item.itemIndex;
        if (index < 0 || index >= this.adapter.getItemCount()) {
            return false;
        }
        const point = this._getPositionInView(item);
        const size = this.adapter.getSize(index);
        return this._pointHitScreen(point, size);
    }

    private _pointHitScreen(point, size) {
        const type = this._layoutType;
        if (WH_List_Type.VERTICAL === type) {
            if (
                point.y - size.height / 2 > this.halfScrollView ||
                point.y + size.height / 2 < -this.halfScrollView
            ) {
                return false;
            }
        } else if (WH_List_Type.HORIZONTAL === type) {
            if (
                point.x + size.width / 2 < -this.halfScrollView ||
                point.x - size.width / 2 > this.halfScrollView
            ) {
                return false;
            }
        } else {
            return false;
        }
        return true;
    }

    /**获取item在scrollView的局部坐标 */
    protected _getPositionInView(item: WHListHolder): cc.Vec3 {
        let worldPos = this._contentView.convertToWorldSpaceAR(item.node.position);
        let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    }

    private _getPositionByPoint(point: cc.Vec3): cc.Vec3 {
        let worldPos = this._contentView.convertToWorldSpaceAR(point);
        let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    }

    //计算坐标
    protected _calculationPosition(index): cc.Vec3 {
        const retV3 = new cc.Vec3();
        const type = this._layoutType;
        const pdTop = this._paddingTop;
        const pdBottom = this._paddingBottom;
        const pdLeft = this._paddingLeft;
        const pdRight = this._paddingRight;
        const spaceX = this._spacingX;
        const spaceY = this._spacingY;
        const childs = this._childrens;
        const adapter = this._adapter;
        if (WH_List_Type.VERTICAL === type) {
            let item;
            for (let i = 0; i < childs.length; ++i) {
                item = childs[i];
                if (item.itemIndex == index + 1) {
                    retV3.x = item.node.position.x;
                    retV3.y =
                        item.node.position.y +
                        item.node.height / 2 +
                        spaceY +
                        adapter.getSize(index).height / 2;
                    break;
                } else if (item.itemIndex == index - 1) {
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
                let toatlY = (1 - this._contentView.anchorY) * this._contentView.height;
                toatlY -= pdTop;
                for (let i = 0; i < index; ++i) {
                    toatlY -= adapter.getSize(i).height;
                    toatlY -= spaceY;
                }
                toatlY -= adapter.getSize(index).height / 2;
                retV3.y = toatlY;
            }
        } else if (WH_List_Type.HORIZONTAL === type) {
            let item;
            for (let i = 0; i < childs.length; ++i) {
                item = childs[i];
                if (item.itemIndex == index + 1) {
                    retV3.x =
                        item.node.position.x -
                        item.node.width / 2 -
                        spaceX -
                        adapter.getSize(index).width / 2;
                    retV3.y = item.node.position.y;
                    break;
                } else if (item.itemIndex == index - 1) {
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
                let toatlX = -this._contentView.anchorX * this._contentView.width;
                toatlX += pdLeft;
                for (let i = 0; i < index; ++i) {
                    toatlX += adapter.getSize(i).width;
                    toatlX += spaceX;
                }
                toatlX += adapter.getSize(index).width / 2;
                retV3.x = toatlX;
            }
        }

        return retV3;
    }

    //获取一屏可以容纳创建多少个节点
    private _getInScreenMaxNumber(startIndex): number {
        const type = this._layoutType;
        const pdTop = this._paddingTop;
        const pdBottom = this._paddingBottom;
        const pdLeft = this._paddingLeft;
        const pdRight = this._paddingRight;
        const spaceX = this._spacingX;
        const spaceY = this._spacingY;
        const adapter = this.adapter;
        let retNumber = 0;
        let total = 0;
        if (WH_List_Type.VERTICAL === type) {
            const count = this.adapter.getItemCount();
            const maxHeight = this.scrollView.node.height;
            if (startIndex == 0) {
                total = total + pdTop;
            }
            for (let i = startIndex; i < count; ++i) {
                if (total > maxHeight) {
                    break;
                }
                retNumber += 1;
                total += adapter.getSize(i).height;
                total += spaceY;
            }
        } else if (WH_List_Type.HORIZONTAL === type) {
            const count = this.adapter.getItemCount();
            const maxWidth = this.scrollView.node.width;
            if (startIndex == 0) {
                total = total + pdLeft;
            }
            for (let i = startIndex; i < count; ++i) {
                if (total > maxWidth) {
                    break;
                }
                retNumber += 1;
                total += adapter.getSize(i).width;
                total += spaceX;
            }
        }
        return retNumber;
    }

    private updateV() {
        const isUp = this._contentView.position.y > this.lastContentPosY;
        const childs = this._childrens;
        for (let i = 0; i < childs.length; ++i) {
            // if (childs.length <= 1) {
            //     break;
            // }
            const item = childs[i];
            const viewPos = this._getPositionInView(item);
            if (isUp) {
                //如果item超过上边界 那么就移除
                if (viewPos.y - item.node.height / 2 > this.halfScrollView) {
                    this._removeItem(item);
                    childs.splice(i, 1);
                    i--;
                }
            } else {
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
        } else {
            //创建上一个
            this._createPreviousItem();
        }
        this.lastContentPosY = this._contentView.position.y;
    }

    private updateH() {
        const isLeft = this._contentView.position.x < this.lastContentPosX;
        const childs = this._childrens;
        for (let i = 0; i < childs.length; ++i) {
            // if (childs.length <= 1) {
            //     break;
            // }
            const item = childs[i];
            const viewPos = this._getPositionInView(item);
            if (isLeft) {
                //如果item超过左边界 那么就移除
                if (viewPos.x + item.node.width / 2 < -this.halfScrollView) {
                    this._removeItem(item);
                    childs.splice(i, 1);
                    i--;
                }
            } else {
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
        } else {
            //创建上一个
            this._createPreviousItem();
        }
        this.lastContentPosX = this._contentView.position.x;
    }

    //创建上一个
    private _createPreviousItem() {
        const firstItem = this._childrens[0];
        if (firstItem) {
            const index = firstItem.itemIndex - 1;
            if (index < 0) {
                return;
            }
            const item: WHListHolder = this._createItem(index);
            if (this._inScreenByItem(item)) {
                this._contentView.addChild(item.node);
                this._childrens.unshift(item);
                this._createPreviousItem();
            }
        } else {
            let point = this._contentView.position.clone();
            point.y = -(point.y - this.halfScrollView);
            let index = this._pointToIndex(point);
            if (index < 0) {
                index = 0;
            }
            if (index >= this.adapter.getItemCount()) {
                index = this.adapter.getItemCount() - 1;
            }
            if (index >= 0 && index < this.adapter.getItemCount()) {
                const item: WHListHolder = this._createItem(index);
                if (this._inScreenByItem(item)) {
                    this._contentView.addChild(item.node);
                    this._childrens.push(item);
                    this._createPreviousItem();
                }
            }
        }
    }

    //创建下一个
    private _createNextItem() {
        const lastItem = this._childrens[this._childrens.length - 1];
        if (lastItem) {
            const index = lastItem.itemIndex + 1;
            if (index >= this.adapter.getItemCount()) {
                this.isFristCreate = false;
                return;
            }
            const item: WHListHolder = this._createItem(index);
            if (this._inScreenByItem(item)) {
                this._contentView.addChild(item.node);
                this._childrens.push(item);
                if (this.isFristCreate) {
                    this.adapter.onFirstCreate(item, item.itemIndex);
                }
                this._createNextItem();
            } else {
                this.isFristCreate = false;
            }
        } else {
            //this.halfScrollView - point.y
            let point = this._getBoradPoint();
            let index = this._pointToIndex(point);
            if (index < 0) {
                index = 0;
            }
            if (index >= this.adapter.getItemCount()) {
                index = this.adapter.getItemCount() - 1;
            }
            if (index >= 0 && index < this.adapter.getItemCount()) {
                const item: WHListHolder = this._createItem(index);
                if (this._inScreenByItem(item)) {
                    this._contentView.addChild(item.node);
                    this._childrens.push(item);
                    if (this.isFristCreate) {
                        this.adapter.onFirstCreate(item, item.itemIndex);
                    }
                    this._createNextItem();
                } else {
                    this.isFristCreate = false;
                }
            } else {
                this.isFristCreate = false;
            }
        }
    }

    private _getBoradPoint(): cc.Vec3 {
        const vec = this._contentView.position.clone();
        const type = this._layoutType;
        if (WH_List_Type.VERTICAL === type) {
            vec.y = this.halfScrollView - vec.y;
        } else if (WH_List_Type.HORIZONTAL === type) {
            vec.x = -vec.x - this.halfScrollView;
        }
        return vec;
    }

    private getScreenLastIndex(): number {
        let point = this._contentView.position.clone();
        const type = this._layoutType;
        if (WH_List_Type.VERTICAL === type) {
            point.y = -(point.y + this.halfScrollView);
        } else if (WH_List_Type.HORIZONTAL === type) {
            point.x = this.halfScrollView - point.x;
        }
        return this._pointToIndex(point);
    }

    //坐标转index
    private _pointToIndex(point: cc.Vec3): number {
        const count = this.adapter.getItemCount();
        const type = this._layoutType;
        const pdTop = this._paddingTop;
        const pdBottom = this._paddingBottom;
        const pdLeft = this._paddingLeft;
        const pdRight = this._paddingRight;
        const spaceX = this._spacingX;
        const spaceY = this._spacingY;
        let retIndex = -1;
        if (WH_List_Type.VERTICAL === type) {
            // let toatlY =
            let boardTop = (1 - this._contentView.anchorY) * this._contentView.height;
            let boardBottom = boardTop - pdTop;
            for (let i = 0; i < count; ++i) {
                const size = this.adapter.getSize(i);
                boardBottom -= size.height;
                if (point.y <= boardTop && point.y > boardBottom) {
                    retIndex = i;
                    break;
                }
                boardTop = boardBottom;
                boardBottom = boardBottom - spaceY;
            }
        } else if (WH_List_Type.HORIZONTAL === type) {
            let boardLeft = -this._contentView.anchorX * this._contentView.width;
            let boardRight = boardLeft + pdLeft;
            for (let i = 0; i < count; ++i) {
                const size = this.adapter.getSize(i);
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
    }

    /**是否滚动容器 */
    private bScrolling: boolean = false;

    lateUpdate(dt: number) {
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
    }

    private _footerUpdate() {
        if (0 !== this.footerState || !this.footerEvents || !this.footerEvents.length) {
            return;
        }
        const footerOffset = this.footerOffset;
        const type = this._layoutType;
        if (WH_List_Type.VERTICAL === type) {
            const isUp = this._contentView.position.y > this.lastContentPosY;
            if (isUp) {
                const target =
                    this._contentView.height * this._contentView.anchorY -
                    this.halfScrollView -
                    footerOffset;
                if (this._contentView.position.y > target) {
                    this.footerState = 1;
                }
            }
        } else if (WH_List_Type.HORIZONTAL === type) {
            const isLeft = this._contentView.position.x < this.lastContentPosX;
            if (isLeft) {
                const target =
                    -this._contentView.width * (1 - this._contentView.anchorX) +
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
    }

    private _onScrolling(ev: Event = null) {
        this.bScrolling = true;
    }

    //清空页面
    private _reset() {
        this.gener?.return('');
        this._childrens?.forEach((v) => {
            this._removeItem(v);
        });
        this._childrens.length = 0;
    }

    private tag = 0;
    /**获取一个列表项 优先从内存池获取*/
    protected getItem(type, index) {
        let child: WHListHolder;
        let datas = this._pool.get(type);
        if (datas && datas.length) {
            child = datas.pop();
        } else {
            child = this.adapter.onCreateViewHolder(index);
        }
        if (this.itemClick) {
            child.node.on(cc.Node.EventType.TOUCH_END, this.clickItem, this);
        }
        child.tag = this.tag++;
        child.type = type;
        this.adapter.onBindViewHolder(child, index);
        return child;
    }

    //将节点放入内存池并删除
    protected _removeItem(item: WHListHolder) {
        if (!item) {
            return;
        }
        item?.node?.off(cc.Node.EventType.TOUCH_END, this.clickItem, this);
        item?.node?.removeFromParent();
        let type = item?.type;
        let datas = this._pool.get(type);
        if (!datas) {
            datas = new Array();
        }
        datas.push(item);
        this._pool.set(type, datas);
    }

    onDisable() {
        if (this.itemClick) {
            this._childrens?.forEach((v) => {
                v.node.off(cc.Node.EventType.TOUCH_END, this.clickItem, this);
            });
        }
    }

    onEnable() {
        if (this.itemClick) {
            this._childrens?.forEach((v) => {
                v.node.on(cc.Node.EventType.TOUCH_END, this.clickItem, this);
            });
        }
    }

    protected clickItem(event) {
        const target = event.target;
        if (!target) {
            return;
        }

        let index = -1;
        for (let i = 0; i < this._childrens.length; ++i) {
            if (target.uuid === this._childrens[i].node.uuid) {
                index = this._childrens[i].itemIndex;
                break;
            }
        }
        if (index == -1) {
            return;
        }
        this.adapter.onClick(index);
    }

    /** 分帧加载 */
    private *getGeneratorLength(length: number, callback: Function, ...params: any): Generator {
        for (let i = 0; i < length; i++) {
            let result = callback(i, ...params);
            if (result) {
                yield;
            } else {
                return;
            }
        }
    }

    /** 分帧执行 */
    private exeGenerator(generator: Generator, duration: number) {
        return new Promise<void>((resolve, reject) => {
            let gen = generator;
            let execute = () => {
                let startTime = new Date().getTime();
                for (let iter = gen.next(); ; iter = gen.next()) {
                    if (iter == null || iter.done) {
                        resolve();
                        return;
                    }
                    if (new Date().getTime() - startTime > duration) {
                        setTimeout(() => execute(), cc.director.getDeltaTime() * 1000);
                        return;
                    }
                }
            };
            execute();
        });
    }

    onDestroy() {
        this.gener?.return('');
        this.gener = null;

        this._childrens.forEach((v) => {
            this._removeItem(v);
        });
        this._childrens.length = 0;
        this._childrens = null;

        for (let key in this._pool) {
            const items: Array<WHListHolder> = this._pool[key];
            items.forEach((v) => {
                v = null;
            })
            items.length = 0;
        }
        this._pool.clear();
        this._pool = null;

        this.updateFun = null;
        this.scrollView = null;
        this._contentView = null;
        this._adapter = null;
    }
}


export abstract class WHListHolder extends cc.Component {
    //节点类型
    type: number;
    //节点标识
    tag: number;
    //节点下标
    itemIndex: number;
}

export abstract class WHListAdapter<VH extends WHListHolder> extends cc.Component {
    //获取节点数量
    abstract getItemCount(): number;

    //创建节点
    abstract onCreateViewHolder(index: number): VH;

    //绑定节点信息
    abstract onBindViewHolder(holder: VH, index);

    //获取节点大小
    abstract getSize(index): { width, height };

    onClick(index: number): void{
        
    };

    //第一次创建
    public onFirstCreate(holder: VH, index) {

    }

    //获取节点类型
    public getType(index: number): number {
        return 0;
    };
}

export const FullHeight = -1;
export const FullWidth = -1;