<template>
  <div class="slds-col slds-size_10-of-12 slds-align-center">
    <div class="slds-form-element slds-m-bottom_xx-large slds-m-top_xx-large">
      <div
        class="slds-form-element__control slds-input-has-icon slds-input-has-icon_left-right slds-input-has-icon_group-right"
      >
        <svg
          class="slds-icon slds-input__icon slds-input__icon_left slds-icon-text-default"
          aria-hidden="true"
        >
          <use
            xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#search"
          ></use>
        </svg>
        <input
          type="text"
          id="text-input-id-1"
          placeholder="Search..."
          class="slds-input slds-p-around_x-small"
          v-model="searchMeal"
        />
      </div>
    </div>
    <table-meals v-bind:arr_meals="arr_meals" />
  </div>
</template>

<script>
import axios from "axios";
import TableMeals from '../../components/TableMeals.vue';

export default {
  name: "Home",
  data() {
    return {
      arr_meals: [],
      searchMeal: "",
    };
  },
  components: {
    "table-meals": TableMeals
  },
  async mounted() {
    const { data } = await axios.get("http://localhost:8000?limit=15&offset=0");
    this.arr_meals = data;
  },
  watch: {
    searchMeal: async function (strSearch) {
      const { data } = await axios.get(
        `http://localhost:8000/search?limit=15&offset=0&strMealSearch=${strSearch}`
      );
      this.arr_meals = data;
    },
  },
};
</script>
