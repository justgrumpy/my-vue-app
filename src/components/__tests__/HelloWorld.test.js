import { mount } from '@vue/test-utils';
import HelloWorld from '../HelloWorld.vue';

describe('test HelloWorld', () => {
  test('renders a project-item-text', () => {
    const msgProp = 'test';
    const wrapper = mount(HelloWorld, {
      props: {
        msg: msgProp,
      },
    });
    const helloWorldTextEl = wrapper.get('h1');
    expect(helloWorldTextEl.text()).toBe(msgProp);
    expect(wrapper.props().msg).toEqual(msgProp);
  });
});
