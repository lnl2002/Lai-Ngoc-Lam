//bruce force
function sum_to_n_a(n: number): number {
    if(n <= 0) return 0;
    let result = 0;
	for (let i = 1; i <= n; i++) {
        result += i;
    }
    return result;
}

// Recursion
function sum_to_n_b(n: number): number {
    if(n <= 0) return 0;
	return n + sum_to_n_b(n -1);
}

// formula
function sum_to_n_c(n: number): number {
    if(n <= 0) return 0;
	return n * (n + 1) / 2;
}

function main() {
    console.log(sum_to_n_a(5));
    console.log(sum_to_n_b(5));
    console.log(sum_to_n_c(5));
}

main();

export {};