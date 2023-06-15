let foo
function func(foo: any, bar: any) {}

let unknownVar: unknown = 'brad'

unknownVar = 123
unknownVar = false

// let str: string = unknownVar
// let num: number = unknownVar

let anyVar: any = unknownVar
let unknownVar2: unknown = unknownVar

let unknownVar3: unknown
(unknownVar3 as { foo: () => {} }).foo()
