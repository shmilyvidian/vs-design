import { mount } from '@vue/test-utils'
import InfiniteTable from '@/packages/infinite-table/src/index.vue'

describe('InfiniteTable.vue', () => {
  const wrapper = mount(InfiniteTable)
  it('shonld render card-table class', () => {
    expect(wrapper.attributes().class).toMatch('card-table')
  })
})
