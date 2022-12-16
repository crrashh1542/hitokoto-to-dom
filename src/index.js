// 此 JS 负责主要数据交互
// version: 1.0.0 / upgrade: 2022-12-16
import getMsg from './getMsg'

// STEP1 -> 设定数据
let htd = {
    c: [],              // array, 句子类型
    charset: 'utf-8',   // string，字符集
//     minLength,  // integer，最小长度
//     maxLength,  // integer，最大长度
    isLogData: false    // boolean, 是否在控制台中打印返回的原 json 数据
};
export default htd;

// STEP2 -> 处理数据
let source = getMsg(htd);