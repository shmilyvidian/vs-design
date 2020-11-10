import { mount } from '@vue/test-utils'
import InfiniteDatetimePicker from '@/packages/infinite-datetime-picker/src/index.vue'

describe('InfiniteDatetimePicker.vue', () => {
  const wrapper = mount(InfiniteDatetimePicker)
  const currentDate = '2020/11/06'
  const startTime = '2020/01/06'
  const endTime = '2020/12/26'

  it('shonld render infinite-datetime-picker-template class', () => {
    expect(wrapper.attributes().class).toMatch('infinite-datetime-picker-template')
  })
  
  it('change currentDate to is startTime after confirm value', async () => {
    // const wrapper = mount(InfiniteDatetimePicker)
    await wrapper.setProps({ currentDate, startTime, endTime })
    await wrapper.find('.infinite-datetime-picker-title').trigger('click')
    const columnLen = wrapper.findAll('.van-picker-column').length
    for (let colI = 0; colI < columnLen; colI += 1) {
      wrapper.findAll('.van-picker-column').at(colI).findAll('.van-picker-column__item').at(0).trigger('click')
    }
    await wrapper.find('.van-picker__confirm').trigger('click')
    // wrapper.vm.$nextTick(() => {
    expect(wrapper.vm.$data.myCurrentDate.getTime()).toBe((new Date(startTime)).getTime())
    // })
    
    // wrapper.destroy()
  })

  it('change currentDate to is endTime after confirm value', async () => {
    // const wrapper = mount(InfiniteDatetimePicker)
    await wrapper.setProps({ currentDate, startTime, endTime })
    await wrapper.find('.infinite-datetime-picker-title').trigger('click')
    const columnLen = wrapper.findAll('.van-picker-column').length
    for (let colI = 0; colI < columnLen; colI += 1) {
      const colItem = wrapper.findAll('.van-picker-column').at(colI).findAll('.van-picker-column__item')
      const colItemLen = colItem.length - 1
      colItem.at(colItemLen).trigger('click')
    }
    await wrapper.find('.van-picker__confirm').trigger('click')
    // wrapper.vm.$nextTick(() => {
    expect(wrapper.vm.$data.myCurrentDate.getTime()).toBe((new Date(endTime)).getTime())
    expect(wrapper).toMatchSnapshot()
    // })
    
    wrapper.destroy()
  })
})
