import { reroute } from './navigation/reroute.js';

// 是否已经开始初始化
let started = false;

// 开始初始化
export function start() {
  started = true;
  reroute();
}

// 查询是否已经初始化接口
export function isStarted() {
  return started;
}

// js加载完成后到初始化开始这段间隔的超时时间
const startWarningDelay = 5000;

// 未开始初始化超时提示
setTimeout(() => {
  if (!started) {
    console.warn(`singleSpa.start() has not been called, ${startWarningDelay}ms after single-spa was loaded. Before start() is called, apps can be declared and loaded, but not bootstrapped or mounted. See https://github.com/CanopyTax/single-spa/blob/master/docs/single-spa-api.md#start`);
  }
}, startWarningDelay)
