/**
 *  1 匀速左旋  一个时间           0.5
 *  2 恒速右旋  一个时间           3
 *  3 减速右旋  到目的位置多一点   0.5
 *  4 匀速左旋  到目的位置         0.2
 */
const { ccclass, property, disallowMultiple, menu } = cc._decorator;
@ccclass
@disallowMultiple()
@menu('Saas组件/SaasWheel')
export default class SaasWheel extends cc.Component {

    @property({
        type: cc.Node,
        tooltip: CC_DEV && '旋转的节点'
    })
    wheelNode: cc.Node = null;

    @property({
        type: cc.Float,
        max: 15,
        min: 2,
        tooltip: CC_DEV && '最大速度'
    })
    maxSpeed: number = 5;

    @property({
        type: cc.Float,
        max: 5,
        min: 1,
        tooltip: CC_DEV && '减速前旋转时间'
    })
    duration: number = 3;

    @property({
        type: cc.Float,
        min: 0.01,
        tooltip: CC_DEV && '加速度'
    })
    acc: number = 0.1;

    @property({
        type: cc.Integer,
        max: 60,
        min: 0,
        tooltip: CC_DEV && '指定结束时的下标'
    })
    targetIndex: number = 0;

    @property({
        tooltip: CC_DEV && '旋转结束是否回弹'
    })
    springback = false;

    //齿轮数量
    @property({
        type: cc.Integer,
        min: 1,
        max: 60,
        tooltip: CC_DEV && '齿轮数量'
    })
    gearNum: number = 15;

    @property({ type: [cc.Component.EventHandler], tooltip: CC_DEV && '转动结束' })
    endEvents: cc.Component.EventHandler[] = [];

    @property({ type: [cc.Component.EventHandler], tooltip: CC_DEV && '节点刷新函数' })
    refreshItemEvents: cc.Component.EventHandler[] = [];

    //本地旋转节点
    @property({ type: [cc.Node] })
    private childrens: cc.Node[] = [];

    //轮盘状态
    private wheelState: number = 0;
    //当前速度
    private curSpeed: number = 0;
    //减速前旋转时间
    private spinTime = 0;
    //最终结果指定的角度
    private finalAngle = 0;
    //用于音效播放
    private effectFlag = 0;
    //默认角度
    private defaultAngle;
    //每个齿轮的角度
    private gearAngle;
    //
    private decAngle;


    onLoad() {
        this.defaultAngle = 0;
        this.gearAngle = 360 / this.gearNum;
        this.wheelNode.angle = -this.defaultAngle;
    }

    playStart() {
        if (this.wheelState !== 0) {
            return;
        }
        this.decAngle = 2 * 360;  // 减速旋转两圈
        this.wheelState = 1;
        this.curSpeed = 0;
        this.spinTime = 0;

        this.timeID = setTimeout(() => {
            if (this.timeID) {
                this.targetIndex = this.stopIndex;
                this.finalAngle = 360 - this.targetIndex * this.gearAngle + this.defaultAngle;
                this.maxSpeed = this.curSpeed;
                if (this.springback) {
                    this.finalAngle += this.gearAngle / 2;
                }
                this.wheelNode.angle = -this.finalAngle;
                this.wheelState = 3;
                this.timeID = null;
            }
        }, 4000);


    }


    onDestroy(){
        if(this.timeID){
            clearTimeout(this.timeID);
            this.timeID = null;
        }
    }

    notifyItemChanged() {
        this.childrens.forEach((item, index) => {
            cc.Component.EventHandler.emitEvents(this.refreshItemEvents, item, index, this)
        })
    }

    update(dt) {
        if (this.wheelState === 0) {
            return;
        }
        // cc.log('......update');
        // cc.log('......state=%d',this.wheelState);

        // 播放音效有可能卡
        this.effectFlag += this.curSpeed;
        if (this.effectFlag >= this.gearAngle) {
            //播放声音
            this.effectFlag = 0;
        }

        if (this.wheelState == 1) {
            // cc.log('....加速,speed:' + this.curSpeed);
            this.spinTime += dt;
            this.wheelNode.angle = this.wheelNode.angle - this.curSpeed;
            if (this.curSpeed <= this.maxSpeed) {
                this.curSpeed += this.acc;
            }
            else {
                if (this.spinTime < this.duration) {
                    return;
                }
                // cc.log('....开始匀速');
                //设置目标角度

                this.wheelState = 2;
            }
        } else if (this.wheelState == 2) {
            // this.finalAngle = 360-this.targetIndex*this.gearAngle + this.defaultAngle;
            // this.maxSpeed = this.curSpeed;
            // if(this.springback)
            // {
            //     this.finalAngle += this.gearAngle/2;
            // }
            this.wheelNode.angle -= this.curSpeed;
        } else if (this.wheelState == 3) {
            // cc.log('......减速');
            var curRo = -this.wheelNode.angle; //应该等于finalAngle
            var hadRo = curRo - this.finalAngle;
            this.curSpeed = this.maxSpeed * ((this.decAngle - hadRo) / this.decAngle) + 0.2;
            this.wheelNode.angle = -curRo - this.curSpeed;

            if ((this.decAngle - hadRo) <= 0) {
                // cc.log('....停止');
                this.wheelState = 0;
                this.wheelNode.angle = -this.finalAngle;
                if (this.springback) {
                    //倒转一个齿轮
                    // var act = new cc.rotateBy(0.6, -this.gearAngle);
                    var act = cc.rotateBy(0.3, -this.gearAngle / 2);
                    var seq = cc.sequence(act, cc.callFunc(this.showRes, this));
                    this.wheelNode.runAction(seq);
                }
                else {
                    this.showRes();
                }
            }
        }
    }

    private stopIndex = 0;
    private timeID;
    stop(index) {

        if (!this.timeID) {
            //超时
            return false;
        } else {
            this.stopIndex = index;
        }
        return true;


    }


    showRes() {
        console.log(`获得了第${this.targetIndex}奖励`)
        cc.Component.EventHandler.emitEvents(this.endEvents, this)
    }
}

