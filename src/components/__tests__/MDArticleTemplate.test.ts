import { mount } from '@vue/test-utils'
import MD from '../MDArticleTemplate.vue'
import { test, expect } from 'vitest'

test('mount markdown component', async () => {
  expect(MD).toBeTruthy()
  const wrapper = mount(MD, { props: { content: 'test\n=' } })
  expect(wrapper.html()).toContain('h1')
})


