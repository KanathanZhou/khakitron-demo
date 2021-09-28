<template>
  <div>
    <div class="jtTabSection">
      <div style="padding: 16px 24px 8px; border-bottom: 1px solid #dadce0;">
        <div class="jtTitle">INSTALLATION</div>
      </div>
    </div>

    <div class="mainActivity" style="display: flex;">
      <div style="flex: 1; margin: 16px;">
        <div style="font-weight: 500; font-size: 24px;">
          Installation
        </div>

        <div style="font-weight: 400; margin: 16px 0 48px 0;">
          Currently you have 2 ways to install Khakitron,
          Vue CLI and Npm. Vue CLI is the preferred way of installing Khakitron.
        </div>

        <div style="font-size: 20px; margin: 24px 0;">
          Prerequisites
        </div>
        <div style="font-weight: 400;">
          We assume you have already your Vue project initialized. If you haven't created your Vue app yet, we suggest you to use <a href="https://cli.vuejs.org/">Vue CLI</a> to create it.
        </div>
        <div style="background: darkslategray; margin: 16px 0;
      color: floralwhite; border-radius: 4px; padding: 16px;">
          <div style="margin-bottom: 16px;">vue create hello-world</div>
          <div>cd hello-world</div>
        </div>

        <div style="font-size: 20px; margin: 40px 0 24px 0;">
          Vue CLI
        </div>
        <div style="font-weight: 400;">
          Vue CLI will do all the heavy lifting for you, once the installation is finished,
          you are ready to use our beautiful components.
        </div>
        <div style="background: darkslategray; margin: 16px 0;
      color: floralwhite; border-radius: 4px; padding: 16px;">
          <div>vue add khakitron</div>
        </div>

        <div style="font-size: 20px; margin: 40px 0 24px 0;">
          Npm
        </div>
        <div style="font-weight: 400;">
          You will have to do an additional step if you choose to use npm
        </div>
        <div style="font-weight: 400; margin: 16px 0;">
          Step 1:
        </div>
        <div style="background: darkslategray; margin: 16px 0;
      color: floralwhite; border-radius: 4px; padding: 16px;">
          <div>npm install khakitron</div>
        </div>
        <div style="font-weight: 400; margin: 16px 0;">
          Step 2: Create a plugin file for Khakitron,
          <span style="background: lavenderblush; padding: 0 8px; color: #D93025;">
          /src/khakitron/index.(ts/js)
        </span>
          with the below content:
        </div>
        <div style="background: darkslategray; margin: 16px 0;
        color: floralwhite; border-radius: 4px; padding: 16px;">
          <div>
            import Vue from 'vue'; <br/>
            import Khakitron from 'khakitron'; <br/><br/>

            Vue.use(Khakitron); <br/><br/>

            export default new Khakitron();
          </div>
        </div>
        <div style="font-weight: 400; margin: 16px 0;">
          Step 3: Navigate to your main entry point where you
          instantiate your Vue instance and pass the Khakitron object in as an option.
        </div>
        <div style="background: darkslategray; margin: 16px 0;
        color: floralwhite; border-radius: 4px; padding: 16px;">
          <div>
            import Vue from 'vue';<br/>
            import App from './App.vue';<br/>
            import khakitron from './khakitron';<br/><br/>

            new Vue({<br/>
            <span style="padding-left: 8px;">khakitron,</span><br/>
            <span style="padding-left: 8px;">render: (h) => h(App),</span><br/>
            }).$mount('#app');<br/>

          </div>
        </div>

      </div>

    </div>

  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  name: 'Installation',
})
export default class Installation extends Vue {
}
</script>

<style scoped lang="scss">
@import "../styles/main";
</style>
