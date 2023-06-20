type Func = (...args: any[]) => any

type FunctionConditionType<T extends Func> = T extends (
  ...args: any[]
) => string
  ? 'A string return func!'
  : 'A non-string return func!'

type StringRes = FunctionConditionType<() => string>
type NonStringRes1 = FunctionConditionType<() => boolean>
type NonStringRes2 = FunctionConditionType<() => number>

type Swap<T extends any[]> = T extends [infer A, infer B] ? [B, A] : T
type SwapRes1 = Swap<[number, string]>
type SwapRes2 = Swap<[number, boolean, string]>
