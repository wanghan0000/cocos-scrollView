import { FullHeight, FullWidth } from "./WHListView";



const { ccclass, property, requireComponent } = cc._decorator;

@ccclass
@requireComponent(cc.ScrollView)
export default class WHGridLayout extends cc.Component {
    @property({
        type: cc.Node,
        tooltip: '页面适配器节点',
    })
    public get adapterNode(): cc.Node {
        return this._adapterNode;
    }
    public set adapterNode(v: cc.Node) {
        this._adapterNode = v;
        this._adapter = this._adapterNode.getComponent(WHGridAdapter);
    }
    @property({
        serializable: true,
    })
    protected _adapterNode: cc.Node = null;


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
        serializable: true,
    })
    protected _paddingLeft = 0;

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
        serializable: true,
    })
    protected _paddingRight = 0;

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
        serializable: true,
    })
    protected _paddingTop = 0;

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
        serializable: true,
    })
    protected _paddingBottom = 0;

    @property({
        tooltip: '子节点之间的水平间距。',
        visible: function () {
            const sc: cc.ScrollView = this.node.getComponent(cc.ScrollView);
            return sc.horizontal;
        },
    })
    public get spacingX(): number {
        return this._spacingX;
    }
    public set spacingX(v: number) {
        this._spacingX = v;
    }
    @property({
        serializable: true,
    })
    protected _spacingX = 0;

    @property({
        tooltip: '子节点之间的垂直间距。',
        visible: function () {
            const sc: cc.ScrollView = this.node.getComponent(cc.ScrollView);
            return sc.vertical;
        },
    })
    public get spacingY(): number {
        return this._spacingY;
    }
    public set spacingY(v: number) {
        this._spacingY = v;
    }
    @property({
        serializable: true,
    })
    protected _spacingY = 0;



    @property({
        tooltip: '子节点之间的最小水平间距。',
        visible: function () {
            const sc: cc.ScrollView = this.node.getComponent(cc.ScrollView);
            return sc.vertical;
        },
    })
    public get minSpacingX(): number {
        return this._minSpacingX;
    }
    public set minSpacingX(v: number) {
        this._minSpacingX = v;
    }
    @property({
        serializable: true,
    })
    protected _minSpacingX = 0;


    @property({
        tooltip: '子节点之间的最小垂直间距。',
        visible: function () {
            const sc: cc.ScrollView = this.node.getComponent(cc.ScrollView);
            return sc.horizontal;
        },
    })
    public get minSpacingY(): number {
        return this._minSpacingY;
    }
    public set minSpacingY(v: number) {
        this._minSpacingY = v;
    }
    @property({
        serializable: true,
    })
    protected _minSpacingY = 0;

    public scrollView: cc.ScrollView = null;
    private _contentView: cc.Node = null;
    /**是否滚动容器 */
    private bScrolling: boolean = false;

    //行数
    private rows: number = 0;
    //列数
    private columns: number = 0;
    //
    private realySpaceX: number = 0;
    private realySpaceY: number = 0;

    /**滚动器一半的值 如果是横向布局则是 width/2 纵向布局则是 height/2 */
    protected halfScrollView: number = 0;

    @property({
        serializable: true,
    })
    protected _adapter: WHGridAdapter<WHGridHolder> = null;
    public get adapter(): WHGridAdapter<WHGridHolder> {
        return this._adapter;
    }
    /**item节点内存池 */
    protected _pool: Map<number, Array<WHGridHolder>> = new Map();
    /**当前现实在屏幕里的item */
    protected _childrens: Array<WHGridHolder> = new Array();
    /**刷新的函数 */
    protected updateFun: Function = function () { };
    /**上一次content的Y值，用于和现在content的Y值比较，得出是向上还是向下滚动 */
    protected lastContentPosY: number = 0;
    /**上一次content的X值，用于和现在content的X值比较，得出是向左还是向右滚动 */
    protected lastContentPosX: number = 0;
    onLoad() {
        this.scrollView = this.node.getComponent(cc.ScrollView);
        this._contentView = this.scrollView.content;
        this.node.getComponent(cc.Widget)?.updateAlignment();
        this.scrollView.content.parent.getComponent(cc.Widget)?.updateAlignment();
        this.scrollView.content.getComponent(cc.Widget)?.updateAlignment();
        this.scrollView.node.on('scrolling', this._onScrolling, this);
    }
    protected start(): void {
        this._initLayout();
    }

    private _initLayout() {
        this._calculateParam();
        this._createNextItem();
    }

    private _calculateParam() {
        const pdTop = this._paddingTop;
        const pdBottom = this._paddingBottom;
        const pdLeft = this._paddingLeft;
        const pdRight = this._paddingRight;
        const spaceX = this._spacingX;
        const spaceY = this._spacingY;
        const minSpacingX = this._minSpacingX;
        const minSpacingY = this._minSpacingY;
        const contentView = this._contentView;
        const vertical = this.scrollView.vertical;
        const count = this.adapter.getItemCount();
        const headCount = this.adapter.getHeadCount();
        const footCount = this.adapter.getFootCount();
        if (vertical) {
            this.halfScrollView = this.scrollView.node.height / 2;
            let total = pdTop + pdBottom;
            for (let i = 0; i < headCount; ++i) {
                total += this.adapter.getHeadSize(i).height;
            }
            for (let i = 0; i < footCount; ++i) {
                total += this.adapter.getFootSize(i).height;
            }
            //计算行列
            let data = {
                size: this._adapter.getSize(),
                count: 1,
                maxCount: count,
                rows: 0,
                columns: 0,
                space: 0
            }
            this._calculateRowsAndColumns(data);
            let { rows, columns, space } = data;
            this.rows = rows;
            this.columns = columns;
            this.realySpaceX = space;
            this.realySpaceY = spaceY;

            total += (rows * this._adapter.getSize().height + Math.max(0, (rows - 1)) * spaceY);
            if (headCount) {
                total += spaceY;
            }
            if (footCount) {
                total += spaceY;
            }
            if (total < this.scrollView.node.height) {
                total = this.scrollView.node.height;
            }
            contentView.height = total;
            this.updateFun = this.updateV;
        } else {
            this.halfScrollView = this.scrollView.node.width / 2;
            let total = pdLeft + pdRight;
            for (let i = 0; i < headCount; ++i) {
                total += this.adapter.getHeadSize(i).width;
            }
            for (let i = 0; i < footCount; ++i) {
                total += this.adapter.getFootSize(i).width;
            }
            //计算行列
            let data = {
                size: this._adapter.getSize(),
                count: 1,
                maxCount: count,
                rows: 0,
                columns: 0,
                space: 0
            }
            this._calculateRowsAndColumns(data);
            let { rows, columns, space } = data;
            this.rows = rows;
            this.columns = columns;
            this.realySpaceX = spaceX;
            this.realySpaceY = space;
            total += (rows * this._adapter.getSize().width + Math.max(0, (rows - 1)) * spaceX);

            if (headCount) {
                total += spaceX;
            }
            if (footCount) {
                total += spaceX;
            }
            if (total < this.scrollView.node.width) {
                total = this.scrollView.node.width;
            }
            contentView.width = total;
            this.updateFun = this.updateH;
        }
    }

    private isFirstCreate = true;;
    private _createNextItem() {
        const lastItem = this._childrens[this._childrens.length - 1];
        const headCount = this.adapter.getHeadCount();
        const itemCount = this.adapter.getItemCount();
        const footCount = this.adapter.getFootCount();
        if (lastItem) {
            const realyIndex = lastItem.itemIndex + 1;
            if (realyIndex >= headCount + itemCount + footCount) {
                this.isFirstCreate = false;
                return;
            }
            const item: WHGridHolder = this._createItem(realyIndex);
            if (this._inScreenByItem(item)) {
                this._contentView.addChild(item.node);
                this._childrens.push(item);
                this.bindData(item);
                this._createNextItem();
            } else {
                this._removeItem(item);
                this.isFirstCreate = false;
            }
        } else {
            let point = this._getBoradPoint();
            let index = Math.max(0, this._pointToIndex(point));
            const count = this.rows;
            let realyIndex = null;
            if (index < headCount) {
                //创建head
                realyIndex = index;
            } else if (index < headCount + count) {
                //创建item
                realyIndex = Math.max(0, (index - headCount )) * this.columns + headCount;
            } else {
                //创建foot
            }
            if(realyIndex == null){
                return;
            }

            const item: WHGridHolder = this._createItem(realyIndex);
            if (this._inScreenByItem(item)) {
                this._contentView.addChild(item.node);
                this._childrens.push(item);
                this.bindData(item);
                this._createNextItem();
            } else {
                this._removeItem(item);
                this.isFirstCreate = false;
            }
        }
    }

    private bindData(item: WHGridHolder) {
        const headCount = this.adapter.getHeadCount();
        const count = this._adapter.getItemCount();
        const footCount = this.adapter.getFootCount();
        if (item.itemIndex < headCount) {
            this.adapter.onBindViewHeader(item, item.itemIndex);
        } else if (item.itemIndex < headCount + count) {
            this.adapter.onBindViewHolder(item, item.itemIndex - headCount);
        } else {

        }
    }

    protected _inScreenByItem(item: WHGridHolder) {
        if (!item) {
            return;
        }
        const realyIndex = item.itemIndex;
        const point = this._getPositionInView(item);
        let size = null;//this.adapter.getSize(index);
        const headCount = this._adapter.getHeadCount();
        const count = this._adapter.getItemCount();
        const footCount = this._adapter.getFootCount();
        if (realyIndex < headCount) {
            size = this._adapter.getHeadSize(item.itemIndex);
        } else if (realyIndex < headCount + count) {
            size = this._adapter.getSize();
        } else {
            size = this._adapter.getFootSize(realyIndex - count - headCount);
        }
        return this._pointHitScreen(point, size);
    }

    private _pointHitScreen(point, size) {
        const vertical = this.scrollView.vertical;
        if (vertical) {
            if (
                point.y - size.height / 2 > this.halfScrollView ||
                point.y + size.height / 2 < -this.halfScrollView
            ) {
                return false;
            }
        } else {
            if (
                point.x + size.width / 2 < -this.halfScrollView ||
                point.x - size.width / 2 > this.halfScrollView
            ) {
                return false;
            }
        }
        return true;
    }


    /**获取item在scrollView的局部坐标 */
    protected _getPositionInView(item: WHGridHolder): cc.Vec3 {
        let worldPos = this._contentView.convertToWorldSpaceAR(item.node.position);
        let viewPos = this.scrollView.node.convertToNodeSpaceAR(worldPos);
        return viewPos;
    }


    protected _createItem(realyIndex): WHGridHolder {
        let item: WHGridHolder;
        const headCount = this.adapter.getHeadCount();
        const count = this._adapter.getItemCount();
        let itemType;
        if (realyIndex < headCount) {
            itemType = this.adapter.getHeadType(realyIndex);
        } else if (realyIndex < headCount + count) {
            itemType = WHGridAdapter.ItemType;
        } else {

        }
        item = this.getItem(itemType, realyIndex);
        item.prevItem = this._getChildItem(realyIndex - 1);
        item.nextItem = this._getChildItem(realyIndex + 1);
        item.row = this._getRow(realyIndex);
        item.column = this._getColumn(realyIndex);
        item.node.position = this._calculationPosition(realyIndex);
        return item;
    }

    private _getChildItem(realyIndex): WHGridHolder {
        for (let i = 0; i < this._childrens.length; ++i) {
            if (realyIndex == this._childrens[i].itemIndex) {
                return this._childrens[i];
            }
        }
        return null;
    }

    private _getRow(realyIndex) {
        const headCount = this.adapter.getHeadCount();
        const count = this._adapter.getItemCount();
        if (realyIndex < headCount) {
            return realyIndex;
        }
        if (realyIndex < headCount + count) {
            return Math.floor((realyIndex - headCount) / this.columns) + headCount;
        }
        return headCount + this.rows + realyIndex - count - headCount;
    }

    private _getColumn(realyIndex) {
        const headCount = this.adapter.getHeadCount();
        const count = this._adapter.getItemCount();
        if (realyIndex < headCount) {
            return 1;
        } else if (realyIndex < headCount + count) {
            const row = this._getRow(realyIndex);
            const columns = this.columns;
            return (realyIndex - Math.max(0, (row - 1)) * columns) % columns + 1;
        }
        return 1;
    }

    //计算坐标
    protected _calculationPosition(realyIndex): cc.Vec3 {
        const retV3 = new cc.Vec3();
        const vertical = this.scrollView.vertical;
        const pdTop = this._paddingTop;
        const pdBottom = this._paddingBottom;
        const pdLeft = this._paddingLeft;
        const pdRight = this._paddingRight;
        const spaceX = this.realySpaceX;
        const spaceY = this.realySpaceY;
        const childs = this._childrens;
        const adapter = this._adapter;
        const headCount = this.adapter.getHeadCount();
        const count = this._adapter.getItemCount();
        const footCount = this.adapter.getFootCount();
        const row = this._getRow(realyIndex);
        const scrollWidth = this.scrollView.node.width;
        const scrollHeight = this.scrollView.node.height;
        const anchorX = this.scrollView.content.anchorX;
        const anchorY = this.scrollView.content.anchorY;
        let itemHeight;
        let itemWidth;
        if (realyIndex < headCount) {
            itemHeight = adapter.getHeadSize(realyIndex).height;
            itemWidth = adapter.getHeadSize(realyIndex).width;
        } else if (realyIndex < headCount + count) {
            itemHeight = adapter.getSize().height;
            itemWidth = adapter.getSize().width;
        } else {
            itemHeight = adapter.getFootSize(realyIndex).height;
            itemWidth = adapter.getFootSize(realyIndex).width;
        }
        if (itemWidth == FullWidth) {
            itemWidth = scrollWidth;
        }
        if (itemHeight == FullHeight) {
            itemWidth = scrollHeight;
        }
        const prevItem = this._getChildItem(realyIndex - 1);
        const nextItem = this._getChildItem(realyIndex + 1);
        if (vertical) {
            if (prevItem) {
                if (prevItem.row == row) {
                    retV3.y = prevItem.node.position.y;
                    retV3.x = prevItem.node.position.x + spaceX + itemWidth;
                } else {
                    retV3.y = prevItem.node.position.y - spaceY - itemHeight;
                    retV3.x = pdLeft + itemWidth / 2 - scrollWidth * anchorX;
                }
            } else if (nextItem) {
                if (nextItem.row == row) {
                    retV3.y = nextItem.node.position.y;
                    retV3.x = nextItem.node.position.x - spaceX - itemWidth;
                } else {
                    retV3.y = nextItem.node.position.y + spaceY + itemHeight;
                    retV3.x = this.scrollView.node.width - pdRight - itemWidth / 2 - scrollWidth * anchorX;
                }
            }

            if (!prevItem && !nextItem) {
                let toatlY = (1 - this._contentView.anchorY) * this._contentView.height;
                toatlY -= pdTop;
                if (realyIndex < headCount) {
                    for (let i = 0; i < realyIndex; ++i) {
                        toatlY -= adapter.getHeadSize(i).height;
                        toatlY -= spaceY;
                    }
                    toatlY -= adapter.getHeadSize(realyIndex).height / 2;
                    retV3.y = toatlY;
                } else if (realyIndex < headCount + count) {
                    for (let i = 0; i < headCount; ++i) {
                        toatlY -= adapter.getHeadSize(i).height;
                        toatlY -= spaceY;
                    }
                    toatlY -= (adapter.getSize().height * Math.max(0, (row)) +
                        spaceY * Math.max(0, row));

                    toatlY -= adapter.getSize().height / 2;
                    retV3.y = toatlY;

                    const column = this._getColumn(realyIndex);
                    const size = adapter.getSize();
                    retV3.x = pdLeft + (column - 1) * size.width + size.width / 2 + (column - 1) * spaceX - scrollWidth * anchorX;
                } else {
                    for (let i = 0; i < headCount; ++i) {
                        toatlY -= adapter.getHeadSize(i).height;
                        toatlY -= spaceY;
                    }
                    toatlY -= (this._adapter.getSize().height * this.rows +
                        spaceY * Math.max(0, this.rows - 1));

                    const fallyCount = realyIndex - count - headCount;
                    for (let i = 0; i < fallyCount; ++i) {
                        toatlY -= this.adapter.getFootSize(i).height;
                        toatlY -= spaceY;
                    }
                    toatlY -= adapter.getFootSize(fallyCount).height / 2;
                    retV3.y = toatlY;
                }
            }
        } else {
            if (prevItem) {
                if (prevItem.row == row) {
                    retV3.x = prevItem.node.position.x;
                    retV3.y = prevItem.node.position.y - spaceY - itemHeight;
                } else {
                    retV3.x = prevItem.node.position.x + spaceX + itemWidth;
                    retV3.y = scrollHeight * anchorY - (pdTop + itemHeight / 2);
                }
            } else if (nextItem) {
                if (nextItem.row == row) {
                    retV3.x = nextItem.node.position.x;
                    retV3.y = nextItem.node.position.y + spaceY + itemHeight;
                } else {
                    retV3.x = nextItem.node.position.x - spaceX - itemWidth;
                    retV3.y = -scrollHeight * anchorY + pdBottom + itemHeight / 2;//this.scrollView.node.height - pdBottom - itemHeight / 2 - scrollHeight * anchorY;
                }
            }

            if (!prevItem && !nextItem) {
                let toatlX = - anchorX * scrollWidth;
                toatlX += pdLeft;
                if (realyIndex < headCount) {
                    for (let i = 0; i < realyIndex; ++i) {
                        toatlX += adapter.getHeadSize(i).width;
                        toatlX += spaceX;
                    }
                    toatlX += adapter.getHeadSize(realyIndex).width / 2;
                    retV3.x = toatlX;
                } else if (realyIndex < headCount + count) {
                    for (let i = 0; i < headCount; ++i) {
                        toatlX += adapter.getHeadSize(i).width;
                        toatlX += spaceX;
                    }
                    toatlX += (adapter.getSize().width * Math.max(0, (row)) +
                        spaceX * Math.max(0, row));

                    toatlX += adapter.getSize().width / 2;
                    retV3.x = toatlX;

                    const column = this._getColumn(realyIndex);
                    const size = adapter.getSize();
                    retV3.y = scrollHeight * anchorY - (pdTop + (column - 1) * size.height + size.height / 2 + (column - 1) * spaceY);
                } else {
                    for (let i = 0; i < headCount; ++i) {
                        toatlX += adapter.getHeadSize(i).width;
                        toatlX += spaceX;
                    }
                    toatlX += (this._adapter.getSize().width * this.rows +
                        spaceX * Math.max(0, this.rows - 1));

                    const fallyCount = realyIndex - count - headCount;
                    for (let i = 0; i < fallyCount; ++i) {
                        toatlX += this.adapter.getFootSize(i).width;
                        toatlX += spaceX;
                    }
                    toatlX += adapter.getFootSize(fallyCount).width / 2;
                    retV3.x = toatlX;
                }
            }
        }

        return retV3;
    }

    private updateH() {
        const isLeft = this._contentView.position.x < this.lastContentPosX;
        const childs = this._childrens;
        for (let i = 0; i < childs.length; ++i) {
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

    private updateV() {
        const isUp = this._contentView.position.y > this.lastContentPosY;
        const childs = this._childrens;
        for (let i = 0; i < childs.length; ++i) {
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

    //创建上一个
    private _createPreviousItem() {
        const firstItem = this._childrens[0];
        const headCount = this.adapter.getHeadCount();
        const itemCount = this.adapter.getItemCount();
        const footCount = this.adapter.getFootCount();
        if (firstItem) {
            const realyIndex = firstItem.itemIndex - 1;
            if (realyIndex < 0) {
                return;
            }
            const item: WHGridHolder = this._createItem(realyIndex);
            if (this._inScreenByItem(item)) {
                this._contentView.addChild(item.node);
                this._childrens.unshift(item);
                this.bindData(item);
                this._createPreviousItem();
            } else {
                this._removeItem(item);
            }
        } else {
            let point = this._contentView.position.clone();
            point.y = -(point.y - this.halfScrollView);
            let index = Math.max(0, this._pointToIndex(point));
            const count = this.rows;
            let realyIndex;
            if (index < headCount) {
                //创建head
                realyIndex = index;
            } else if (index < headCount + count) {
                //创建item
                realyIndex = Math.max(0, (index - headCount - 1)) * this.columns + headCount;
            } else {
            }
            const item: WHGridHolder = this._createItem(realyIndex);
            if (this._inScreenByItem(item)) {
                this._contentView.addChild(item.node);
                this._childrens.push(item);
                this.bindData(item);
                this._createPreviousItem();
            } else {
                this._removeItem(item);
            }
        }
    }


    //将节点放入内存池并删除
    protected _removeItem(item: WHGridHolder) {
        if (!item) {
            return;
        }
        item.node.removeFromParent();
        let type = item.type;
        let datas = this._pool.get(type);
        if (!datas) {
            datas = new Array();
        }
        datas.push(item);
        this._pool.set(type, datas);
    }



    private tag = 0;
    /**获取一个列表项 优先从内存池获取*/
    protected getItem(type, index) {
        let child: WHGridHolder;
        const headCount = this.adapter.getHeadCount();
        const count = this._adapter.getItemCount();
        const footCount = this.adapter.getFootCount();
        let addFlag = false;
        let datas = this._pool.get(type);
        if (datas && datas.length) {
            child = datas.pop();
            addFlag = false;
        } else {
            addFlag = true;
            if (index < headCount) {
                child = this.adapter.onCreateViewHeader(index);
            } else if (index < headCount + count) {
                child = this.adapter.onCreateViewHolder(index - headCount);
            } else {
            }
        }
        child.itemIndex = index;
        child.tag = this.tag++;
        child.type = type;
        child.adapter = this._adapter;
        if (addFlag) {
            this.adapter.onAdd(child);
        } else {
            this.adapter.onChange(child);
        }
        if (this.isFirstCreate) {
            this.adapter.onFirstScreen(child);
        }
        return child;
    }


    private _getBoradPoint(): cc.Vec3 {
        const vec = this._contentView.position.clone();
        const vertical = this.scrollView.vertical;
        if (vertical) {
            vec.y = this.halfScrollView - vec.y;
        } else {
            vec.x = -vec.x - this.halfScrollView;
        }
        return vec;
    }


    //坐标转index
    private _pointToIndex(point: cc.Vec3): number {
        const count = this.adapter.getItemCount();
        const headCount = this.adapter.getHeadCount();
        const footCount = this.adapter.getFootCount();
        const vertical = this.scrollView.vertical;
        const pdTop = this._paddingTop;
        const pdBottom = this._paddingBottom;
        const pdLeft = this._paddingLeft;
        const pdRight = this._paddingRight;
        const spaceX = this._spacingX;
        const spaceY = this._spacingY;
        const rows = this.rows;
        let retIndex = -1;
        if (vertical) {
            let boardTop = (1 - this._contentView.anchorY) * this._contentView.height;
            let boardBottom = boardTop - pdTop;
            const allCount = headCount + rows + footCount;
            for (let i = 0; i < allCount; ++i) {
                let size;
                if (i < headCount) {
                    size = this.adapter.getHeadSize(i);
                } else if (i < rows + headCount) {
                    size = this.adapter.getSize();
                } else {
                    size = this.adapter.getFootSize(i);
                }
                boardBottom -= size.height;
                if (point.y <= boardTop && point.y > boardBottom) {
                    retIndex = i;
                    break;
                }
                boardTop = boardBottom;
                boardBottom = boardBottom - spaceY;
            }
        } else {
            let boardLeft = -this._contentView.anchorX * this._contentView.width;
            let boardRight = boardLeft + pdLeft;
            const allCount = headCount + rows + footCount;
            for (let i = 0; i < allCount; ++i) {
                let size;
                if (i < headCount) {
                    size = this.adapter.getHeadSize(i);
                } else if (i < rows + headCount) {
                    size = this.adapter.getSize();
                } else {
                    size = this.adapter.getFootSize(i);
                }
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


    private _onScrolling(ev: Event = null) {
        this.bScrolling = true;
    }

    lateUpdate(dt: number) {
        if (this.bScrolling == false) {
            return;
        }
        this.bScrolling = false;
        this.updateFun();
    }

    public notifyDataSetChanged() {
        const childs = this._childrens;
        const vertical = this.scrollView.vertical;
        //重新计算高度
        let oldHeight = this._contentView.height;
        let oldWidth = this._contentView.width;
        this._calculateParam();
        const headCount = this.adapter.getHeadCount();
        const count = this.rows;
        const footCount = this.adapter.getFootCount();
        let delta;
        if (vertical) {
            delta = oldHeight - this._contentView.height;
        } else {
            delta = this._contentView.width - oldWidth;
        }
        if (childs.length == 0) {
            this.isFirstCreate = true;
        } else {
            this.isFirstCreate = false;
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
            if (index < count + headCount+ footCount) {
                this._createNextItem();
            } else {
                if (vertical) {
                    this.scrollView.scrollToBottom();
                    this.lastContentPosY = this._contentView.position.y;
                } else  {
                    this.scrollView.scrollToRight();
                }
                this._createNextItem();
            }
        }
    }

    private getScreenLastIndex(): number {
        let point = this._contentView.position.clone();
        const vertical = this.scrollView.vertical;
      
        if (vertical) {
            point.y = -(point.y + this.halfScrollView);
        } else  {
            point.x = this.halfScrollView - point.x;
        }
        return this._pointToIndex(point);
    }


    private _calculateRowsAndColumns(data) {
        const { size, count, maxCount } = data;
        const vertical = this.scrollView.vertical;
        const pdTop = this._paddingTop;
        const pdBottom = this._paddingBottom;
        const pdLeft = this._paddingLeft;
        const pdRight = this._paddingRight;
        const minSpacingX = this._minSpacingX;
        const minSpacingY = this._minSpacingY;
        if (vertical) {
            const w = count * size.width + Math.max(0, (count - 1) * minSpacingX) +
                pdLeft + pdRight;
            if (w >= this.scrollView.node.width) {
                //整理 间距
                const columns = Math.max(1, count - 1);
                const rows = Math.ceil(maxCount / columns);
                const space = (this.scrollView.node.width - (columns * size.width + pdLeft + pdRight)) / Math.max(1, (count - 2));
                data.rows = rows;
                data.columns = columns;
                data.space = space;
            } else {
                data.count += 1;
                this._calculateRowsAndColumns(data);
            }
        } else {
            const h = count * size.height + Math.max(0, (count - 1) * minSpacingY) +
                pdTop + pdBottom;
            if (h >= this.scrollView.node.height) {
                //整理 间距
                const columns = Math.max(1, count - 1);
                const rows = Math.ceil(maxCount / columns);
                const space = (this.scrollView.node.height - (columns * size.height + pdTop + pdBottom)) / Math.max(1, (count - 2));
                data.rows = rows;
                data.columns = columns;
                data.space = space;
            } else {
                data.count += 1;
                this._calculateRowsAndColumns(data);
            }
        }
    }
}

export abstract class WHGridHolder extends cc.Component {
    //节点类型
    type: number;
    //节点标识
    tag: number;
    //节点下标
    itemIndex: number;
    //所属行
    row;
    //所属列
    column;
    //上一个item;
    prevItem: WHGridHolder;
    //下一个item
    nextItem: WHGridHolder;

    adapter: any;
    //_isAdd: boolean
    //获取节点数量
    abstract onBind(data);
}

export abstract class WHGridAdapter<VH extends WHGridHolder> extends cc.Component {
    //获取节点数量
    abstract getItemCount(): number;

    //创建节点
    abstract onCreateViewHolder(index: number): VH;

    //创建节点
    abstract onCreateViewHeader(index: number): VH;

    //绑定节点信息
    abstract onBindViewHolder(holder: VH, index);
    //
    abstract onBindViewHeader(holder: VH, index);

    //获取节点大小
    abstract getSize(): { width, height };

    //获取headSize 
    public getHeadSize(index): { width, height } {
        return { width: 0, height: 0 };
    }
    //获取head 数量
    public getHeadCount(): number {
        return 0;
    }
    //
    public getHeadType(index): number {
        return 0;
    }

    public getFootSize(index): { width, height } {
        return { width: 0, height: 0 };
    }
    public getFootCount(): number {
        return 0;
    }
    public getFootType(): number {
        return 0;
    }

    static ItemType = -1;

    //插入节点 并只修改该位置 todo
    //notifyItemInserted(index)

    //删除节点  删除节点位置 todo
    //notifyItemRemoved(index)

    public onAdd(item: VH) {

    }

    public onChange(item: VH) {

    }

    public onFirstScreen(item: VH) {

    }
}
