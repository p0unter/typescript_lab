"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
var formattedDuration = "";
function fibonacci(n) {
    var startTime = performance.now();
    var fibSequence = [BigInt(0), BigInt(1)];
    while (fibSequence.length < n) {
        var nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextFib);
    }
    var endTime = performance.now();
    var durationMs = endTime - startTime;
    formattedDuration = formatDuration(durationMs);
    return fibSequence;
}
try {
    var fibonacciLength = Number(readlineSync.question("How many Fibonacci numbers do you want to generate? "));
    var result = fibonacci(fibonacciLength);
    for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
        var item = result_1[_i];
        console.log(item.toString());
    }
    console.log("Compilation time: ".concat(formattedDuration));
}
catch (error) {
    console.error("An error occurred:", error);
}
function formatDuration(durationMs) {
    var minutes = Math.floor(durationMs / 60000);
    var seconds = Math.floor((durationMs % 60000) / 1000);
    var milliseconds = Math.floor((durationMs % 1000));
    var nanoseconds = Math.floor(((durationMs % 1000) * 1e6) % 1e6);
    return "".concat(minutes.toString().padStart(2, '0'), " minutes | ").concat(seconds.toString().padStart(2, '0'), " seconds | ").concat(milliseconds.toString().padStart(3, '0'), " ms | ").concat(nanoseconds.toString().padStart(3, '0'), " ns");
}
