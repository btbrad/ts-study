import { Widget } from "./Widgets";

const myWidget: Widget = {
  name: "myWidget",
}

function Foo(input: string) {
  return input
}
Foo('test')

window.addEventListener('contentLoaded', e => {
  console.log('loaded')
})
