// 此 JS 用于获取 Hitokoto 服务器发回的数据
// version: 1.0.0 | upgrade: 2022-12-16
import axios from "axios";

export default function getmsg(params) {
    console.log(params);

    // STEP1 -> 获取 Promise 对象
    let url = "http://127.0.0.1:5500/i.json";
    let response = () => axios.get(url).then(rsp => {
        return rsp.data
    }).catch(() => {
        console.log("[htd] Failed to get data!")
    });

    // STEP2 -> 通过 async 转化
    let transform = async() => {
        let rst = await response()
        return rst
    };
}
