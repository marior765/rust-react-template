#![feature(custom_inner_attributes)]

extern crate wasm_bindgen;

use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    fn appemdStringToBody(s: &str);
}

#[wasm_bindgen]
pub fn run() {
    appemdStringToBody("Hello World!");
}

#[no_mangle]
pub extern fn add_one(x: u32) -> u32 {
    x + 1
}

// #[no_mangle]
// pub extern fn minus_one(x: u32) -> u32 {
//     x - 1
// }

// #[no_mangle]
// pub extern fn multiply(x: u32) -> u32 {
//     x * x
// }
