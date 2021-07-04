/*
 * @Author: Mr.Mao
 * @Date: 2021-06-17 10:59:40
 * @LastEditTime: 2021-07-01 01:55:30
 * @Description:
 * @LastEditors: Mr.Mao
 * @autograph: 任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */

import { renderInstance } from '@tuimao/utils'
import { ExtractPropTypes, ref } from 'vue'
import Index from './index.vue'
import { componentProps } from './props'

/** 组件 Props 类型, ExtractPropTypes 可将 Constructor 转换为对应值类型 */
type Props = Partial<ExtractPropTypes<typeof componentProps>>

/** 组件调用 resolve 返回结果 */
type Result = { path: string }[]

/**
 * 模态框调用方法
 * @param props
 * @returns {Promise}
 */
export const Modal = (props: Props) => {
  return new Promise<Result>((resolve, reject) => {
    renderInstance(Index, {
      // 这里 modelValue, 为了使组件可改, 需要传入 ref
      ...props,
      show: ref(true),
      resolve,
      reject
    })
  })
}
