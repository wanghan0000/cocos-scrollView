// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

import { WHRecycleHolder } from "../../scripts/components/WHRecycleView";

export interface HorizontalEntity{
    index: number
}

const {ccclass, property} = cc._decorator;

@ccclass
export default class VerticalHolder extends WHRecycleHolder {

    @property(cc.Label)
    private text:cc.Label = null;

    onBind(data: HorizontalEntity){
        this.text.string = data.index + '';
    }
}
