import { expectType } from 'tsd'

type DeepPartial<T extends object> = {
  [K in keyof T]?: T[K] extends object ? DeepPartial<T[K]> : T[K]
}

type DeepPartialStruct = DeepPartial<{
  foo: string
  nested: {
    nestedFoo: string
    nestedBar: {
      nestedBarFoo: string
    }
  }
}>

expectType<DeepPartialStruct>({
  foo: 'bar',
  nested: {},
})

expectType<DeepPartialStruct>({
  nested: {
    nestedBar: {},
  },
})

expectType<DeepPartialStruct>({
  nested: {
    nestedBar: {
      nestedBarFoo: undefined,
    },
  },
})
