import * as readlineSync from 'readline-sync';

let formattedDuration: String = "";

function fibonacci(n: number): bigint[] {
    const startTime = performance.now();

    const fibSequence: bigint[] = [BigInt(0), BigInt(1)];

    while (fibSequence.length < n) {
        const nextFib = fibSequence[fibSequence.length - 1] + fibSequence[fibSequence.length - 2];
        fibSequence.push(nextFib);
    }

    const endTime = performance.now();

    const durationMs = endTime - startTime;
    formattedDuration = formatDuration(durationMs);

    return fibSequence;
}

try {
    const fibonacciLength = Number(readlineSync.question("How many Fibonacci numbers do you want to generate? "));
    const result = fibonacci(fibonacciLength);
    for (let item of result) {
        console.log(item.toString());
    }

    console.log(`Compilation time: ${formattedDuration}`);
} catch (error) {
    console.error("An error occurred:", error);
}

function formatDuration(durationMs: number): string {
    const minutes = Math.floor(durationMs / 60000);
    const seconds = Math.floor((durationMs % 60000) / 1000);
    const milliseconds = Math.floor((durationMs % 1000));
    const nanoseconds = Math.floor(((durationMs % 1000) * 1e6) % 1e6);

    return `${minutes.toString().padStart(2, '0')} minutes | ${seconds.toString().padStart(2, '0')} seconds | ${milliseconds.toString().padStart(3, '0')} ms | ${nanoseconds.toString().padStart(3, '0')} ns`;
}