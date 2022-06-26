import { FullHeight, WHRecycleAdapter, WHRecycleHolder } from "../../scripts/components/WHRecycleView";
import Holder from "./Holder";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Adapter extends WHRecycleAdapter<Holder> {
    @property(cc.Prefab)
    private item: cc.Prefab = null;

    private datas = [];

    setDatas(datas){
        this.datas = datas || [];
    }

    getItemCount(): number {
        return this.datas.length;
    }

    onCreateViewHolder(index: number): Holder {
        const node = cc.instantiate(this.item);
        return node.getComponent(Holder);
    }
    
    onBindViewHolder(holder: Holder, index: any) {
        holder.onBind(this.datas[index]);
    }

    getSize(index: any): { width: number; height: number; } {
        return {width: 100, height: FullHeight};
    }
}
