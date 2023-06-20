declare let source: string

declare let anyType: any
declare let neverType: never

anyType = source
// neverType = source

type Res1 = [] | (() => {}) | {} extends object ? 1 : 2
