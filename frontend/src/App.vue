<template>
    <Home />
    <div class="demo-only" v-if="this.$store.state.show">
      <div class="slds-notify_container slds-is-relative">
        <div
          class="slds-notify slds-notify_toast"
          :class="this.$store.state.theme"
          role="status"
        >
          <span class="slds-assistive-text">warning</span>
          <span
            class="slds-icon_container slds-icon-utility-success slds-m-right_small slds-no-flex slds-align-top"
            title="Description of icon when needed"
          >
          </span>
          <div class="slds-notify__content">
            <h2 class="slds-text-heading_small">
              {{ this.$store.state.msg }}
            </h2>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import Home from "./pages/Home";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style>
@import url("../node_modules/@salesforce-ux/design-system/assets/styles/salesforce-lightning-design-system.min.css");
* {
  font-family: "Roboto Mono", monospace;
  margin: 0px;
}
#app {
  display: flex;
  justify-content: center;
}

div.demo-only {
  position: fixed;
}

div.slds-notify_container {
  z-index: 2;
}
</style>
