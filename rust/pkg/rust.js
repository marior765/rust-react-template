/* tslint:disable */
import * as wasm from './rust_bg';

let cachedTextDecoder = new TextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbg_appemdStringToBody_9510b4010cdedb34(arg0, arg1) {
    let varg0 = getStringFromWasm(arg0, arg1);
    appemdStringToBody(varg0);
}
/**
* @returns {void}
*/
export function run() {
    return wasm.run();
}

