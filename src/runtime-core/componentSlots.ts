import { isArray, ShapeFlags } from '../shared'
// 如果children里面有slot，那么把slot挂载到instance上
export function initSlots(instance: any, children: any) {
  const { vnode } = instance
  if (vnode.shapeFlag & ShapeFlags.SLOTS_CHILDREN) {
    normalizeObjectSlots(instance.slots, children)
  }
}
function normalizeObjectSlots(slots: any, children: any) {
  for (let key in children) {
    const value = children[key]
    slots[key] = (props: any) => normalizeSlotValue(value(props))
  }
}
function normalizeSlotValue(value: any) {
  return isArray(value) ? value : [value]
}
