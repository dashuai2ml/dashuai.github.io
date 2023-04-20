import { mount } from '@vue/test-utils'
import MD from '../MDArticleTemplate.vue'
import { test, expect } from 'vitest'

test('mount markdown component', async () => {
  expect(MD).toBeTruthy()
  const wrapper = mount(MD, { props: { filePath: '/src/assets/article/test.md' } })
  console.log(wrapper.html());
  expect(wrapper.html()).toContain('h1')
})


