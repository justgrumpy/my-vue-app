# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

# Project Setup

This project is really just a plain Vue project set up using Vite, https://vitejs.dev/guide/#scaffolding-your-first-vite-project. This README was created by the `init`. This section and all that follow were added to the existing README to explain the rest of the project setup and problem with Styrker.

A Jest test was added along with packages and configuration for testing following various *guides*:
- Jest - https://jestjs.io/docs/getting-started
- Babel - https://jestjs.io/docs/getting-started#using-babel
- Vue Test Utils - https://vue-test-utils.vuejs.org/ (specifically Vue Test Utils 2 for Vue 3)
- Jest Vue transform - https://github.com/vuejs/vue-jest
- Stryker - https://stryker-mutator.io/docs/stryker-js/guides/vuejs/

# Problem

As stated above, this project "uses Vue 3 `<script setup>` SFCs". The template makes use of the `defineProps` API, https://v3.vuejs.org/api/sfc-script-setup.html#defineprops-and-defineemits. The `definProps` (and `defineEmits`) API seems to cause issues with Stryker.

The Jest test runs fine. However, Styker fails to run with an error similar to the following...

    10:00:13 (26072) ERROR DryRunExecutor One or more tests resulted in an error:
        undefined[@vue/compiler-sfc] `defineProps()` in <script setup> cannot reference locally declared variables because it will be hoisted outside of the setup() function. If your component options require initialization in the module scope, use a separate normal <script> to export the options instead.

    C:\DEV\git\my-vue-app\stryker-tmp\sandbox8355717\src\components\HelloWorld.vue
    65 |
    66 |  import { ref } from 'vue';
    67 |  defineProps(stryMutAct_9fa48("0") ? {} : (stryCov_9fa48("0"), {
       |              ^^^^^^^^^^^^^^^^
    68 |    msg: String
    69 |  })); Error: [@vue/compiler-sfc] `defineProps()` in <script setup> cannot reference locally declared variables because it will be hoisted outside of the setup() function. If your component options require initialization in the module scope, use a separate normal <script> to export the options instead.