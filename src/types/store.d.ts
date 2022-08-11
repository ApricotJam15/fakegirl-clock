import { Ref } from 'vue'
export interface StoreReturnBase {
  frame: Ref<number>
  face: Ref<string>
  tick: () => Promise<void>
}