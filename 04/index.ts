interface Res {
  code: 10000 | 10001 | 50000;
  status: 'success' | 'failure';
  data: any;
}

declare var res: Res
// res.status === 'success'

type mixUnion = (1 | 2) | (3 | 4)
const m: mixUnion = 2

const returnNum = () => 100 + 499
enum Items {
  Foo = returnNum(),
  Bar = 599,
  Baz,
}
Items.Foo
console.log(Items[599])