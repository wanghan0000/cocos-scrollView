// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import WHRecycleView from "../../scripts/components/WHRecycleView";
import Adapter from "./Adapter";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(WHRecycleView)
    recycleView: WHRecycleView = null;

    @property(cc.EditBox)
    editbox: cc.EditBox = null;

    @property(cc.EditBox)
    addEditBox: cc.EditBox = null;

    @property(cc.EditBox)
    deleteEditBox: cc.EditBox = null;

    private datas = [];

    addNum() {
        const num = Number(this.addEditBox.string);
        const adapter = this.recycleView.adapter as Adapter;
        const startIndex = this.datas.length;
        for (let i = 0; i < num; ++i) {
            this.datas.push({ index: startIndex + i });
        }
        //数据填充
        adapter.setDatas(this.datas);
        //刷新节点显示
        this.recycleView.notifyDataSetChanged();
    }

    deleteNum() {
        const num = Number(this.deleteEditBox.string);
        const adapter = this.recycleView.adapter as Adapter;
        for (let i = 0; i < num; ++i) {
            this.datas.pop();
        }
        //数据填充
        adapter.setDatas(this.datas);
        //刷新节点显示
        this.recycleView.notifyDataSetChanged();
    }

    scrollToIndex() {
        const index = Number(this.editbox.string);
        this.recycleView.scrollToIndex(index);
    }
}
