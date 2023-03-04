function someCalculations(a, b) {
  return a + b;
}

for (let i = 0; i < 1000; i++) {
  someCalculations((5, 4));
}

// interpreter translate line by line
// compiler understand all code and compile it in another language
// JIT compiler (just in time)

//PARSER=> AST => interpreter => Profiler => Compiler => Optimized Code
//                            => Bytecode
