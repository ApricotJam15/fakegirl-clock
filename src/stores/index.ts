import { ref, InjectionKey } from 'vue'
import { StoreReturnBase } from '@/types/store'
import moment from 'moment'
const frame = ref<number>(0)
const face = ref<string>('')
const tick = async () => {
  frame.value = moment().hour() * 60 + moment().minute()
  face.value = moment().format('H:mm')
}
const store = (): StoreReturnBase => {
  return {
    frame,
    face,
    tick,
  }
}
export default store
export const key: InjectionKey<StoreReturnBase> = Symbol('store')