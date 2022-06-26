import { FullHeight, FullWidth, WHRecycleAdapter, WHRecycleHolder } from "../../scripts/components/WHRecycleView";
import VerticalHolder from "./VerticalHolder";


const {ccclass, property} = cc._decorator;

@ccclass
export default class VerticalAdapter extends WHRecycleAdapter<VerticalHolder> {
    @property(cc.Prefab)
    private item: cc.Prefab = null;

    private datas = [];

    setDatas(datas){
        this.datas = datas || [];
    }

    getItemCount(): number {
        return this.datas.length;
    }

    onCreateViewHolder(index: number): VerticalHolder {
        const node = cc.instantiate(this.item);
        return node.getComponent(VerticalHolder);
    }
    
    onBindViewHolder(holder: VerticalHolder, index: any) {
        holder.onBind(this.datas[index]);
    }

    getSize(index: any): { width: number; height: number; } {
        return {width: FullWidth, height: 100};
    }
}
