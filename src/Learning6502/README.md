# 6502 processor

## Chapter 1 = Memory and Registers

### Memory

Memories are chips connected to the processor to storage data or programs that are currently in execution, every bit in the memory has an address, for instance the first bit address is 0, however it doesn't mean that the number 0 is storage on it, it's just a memory address. Usually memory addresses uses four-digits hexadecimal numbers as the standard for the address - `$0001` or `$FFFF`

### Registers

A register os a very small storage area used in runtime processes, most of the registers only can storage 1 byte, but couple of them are 2 bytes long.

The 6502 registers we gonna study are `A (Accumulator)`, `X`, `Y` `ST (Stack Pointer)`, `PC (Program Counter)` and status.

#### General Purpose Register

##### A(Accumulator)

The`A`register is called`Accumulator` because it's used for simple arithmetics, for instance if you want do a sum, first you need to send to the accumulator de initial value and then add a new value to the current value stored on the accumulator.

The A register has only one byte and it's called general-purpose register, the maximum value it holds are 1 byte, which means 255 in decimal number

##### X and Y registers

`X` and `Y` registers are also general-purpose registers that holds 1 byte, the generally are referred to index registers, use to assist the index of memory address using loop instructions.

#### Special Purpose Registers

##### SP (Stack Pointer)

`SP (Stack Pointer)`, is a register that point to the current top of the stack in memory, consider the memory as a stack of plates, where the first plate goes to the bottom and the last to come in is piled up to the previous plates on the stack, so the last to come in is the first to come out (LIFO - Last in, First out), coz the SP is always pointing to the top, the top of the stacks has the lowest address and the bottom has the highest address, in every new entry on the stack memory the SP is decreased or decremented after the data is stored and every removal from the stack the SP is increased or incremented point to the next data address, thus the SP is always pointing what data in memory is the next on the top of the stack.

```ditaa cmd=true
         +------+ 
 SP  --->| NULL |---> Address $0100
         +------+                      +--------------+
         | NEXT |---> Address $0100 ---| Top of Stack |
         +------+                      +--------------+
         | DATA |
         +------+
         | DATA |
         +------+
         | DATA |---> Address $01FF
         +------+
```

##### PC (Program Counter)

The `PC (Program Counter)` is a double (two-bytes-long) register that tell the computer what to do next.
A computer program is made up of a series of instructions stored in the memory when the program is executed, those instructions are executed one at time. As each instruction is picked up from the memory for execution, the memory address of the first byte of the next instruction is stored in the program counter register. When an instruction has finished executing, the program uses the PC to find where to pick up the next instruction using a JUMP instruction.

#### Status Registers / FLAGS

The status of the registers is treated as eight separate bits, seven of the bits are used as FLAGS or indicator, if a FLAG bit contains a 1, the FLAG is ON or 'SET'. If it contains a 0, the flag is OFF or 'CLEARED'. The FLAGS are SET or CLEARED as a result of operations such as addition, subtraction or any change to a register. They tell about the result of the operation, such things as if a result is positive or negative, or if the register is overflowed or not. There are many instructions that can access the values of the FLAGS.

```ditaa cmd=true, args=[-E]
Status Registers
+---+---+---+---+---+---+---+---+
| N | V |   | B | D | I | Z | C |
+---+---+---+---+---+---+---+---+
```

- N - `NEGATIVE` = Chapter 11, used for signed numbers. Tells you about the high-order bit of a result.
- V - OVERFLOW = As the negative flat it is useful when dealing with signed numbers.
- B - `BREAK COMMAND` = Show whether an interrupt is caused by an external event or by a program command.
- D - `DECIMAL` = tells the microprocessor whether it is doing binary or decimal arithmetic.
- I - `INTERRUPT | DISABLE` = Tells the microprocessor whether it's alright to process an interrupt immediately.
- Z - `ZERO` = Shows whether the result is zero.
- C - `CARRY` = Shows whether an arithmetic operation need to carry or borrow outside of the result byte. which means that if the result of the operation needs more than one byte to be fulfilled:

```mono
 %0010 0011 = $23 = 35 = Carry on  = C = 1
 %0000 1010 = $0A = 10 = Carry off = C = 0
```

```ditaa cmd=true, args=[-E]
    +---+      +-------+           +--------+
+---+ A +------+ Stack +-----------+ Status |
|   +-+-+      +-------+           +--------+
|     |
|     |
|     +-----------+
|                 |
|                 |
|   +---+      +--+-----+----+
|   | Y +--+---+ Memory | PC | 
|   +---+  |   +--------+----+
|          |
|          |
|          +---------+
|                    |
|                    |
|   +---+            |          +----+
+---+ X +------------+----------+ SP |
    +---+                       +----+
```

## Chapter 2 - Number Systems and Data Representation

- **Binary** - goes from `0` to `1`
  - `0` or `1` = 1 bit
  -
- **Hexadecimal** - goes from `0` to `F` = `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E , F`
  - `F` in binary is represented by `1111` = 4 bits

### Decimal Number System

A Decimal in Binary is represented by `1 byte`, which means a chain of `8 bits`

```math
00000000 = 0
```

```math
11111111 = 255
```

Decimal number system has a base of `10`, which means we count it in groups of `10` or `ten`, and any number bellow 10 is called `single`, and decimals goes from `0` to `255`.

For example, 125:

>`12 tens` and `5 singles`

 OR

>1 group of 10 tens
>2 groups of tens
>5 singles

## References

[Rockwell 6502 Programmers Reference](https://www.csh.rit.edu/~moffitt/docs/6502.html)
[6502 Reference PDF](./src/documents/6502.pdf)
[nesdev.org - 6502.txt](./src/documents/nesdev.org.6502.txt)
