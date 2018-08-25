export class ClientRects {

    static instanceOf(val: any): val is ClientRect {

        return val.left !== undefined &&
            val.top !== undefined &&
            val.width !== undefined &&
            val.height !== undefined;

    }

}
