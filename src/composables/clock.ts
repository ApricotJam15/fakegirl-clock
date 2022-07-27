// 時刻を返すモジュール
import { reactive, InjectionKey } from 'vue'
import moment from 'moment'
export const useClock = () => {
  const state = reactive({
    hour: 0,  // 時
    minute: 0, // 分
  })
  const tick = () => {
    state.hour = moment().hour()
    state.minute = moment().minute()
  }
  return {
    get hour() {
      return state.hour
    },
    get minute() {
      return state.minute
    },
    tick,
  }
}
export type UseClock = ReturnType<typeof useClock>
export const ClockKey: InjectionKey<UseClock> = Symbol('UseClock')