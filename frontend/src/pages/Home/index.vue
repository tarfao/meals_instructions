<template>
  <div
    class="slds-col slds-size_10-of-12 slds-align-center"
    id="home-container"
  >
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
import TableMeals from "../../components/TableMeals.vue";
import { LIMIT, URI } from './utils/const'

export default {
  name: "Home",

  data() {
    return {
      arr_meals: [],
      searchMeal: "",
    };
  },

  components: {
    "table-meals": TableMeals,
  },

  async mounted() {
    const { data } = await axios.get(`${URI}?limit=${LIMIT}&offset=0`);
    this.arr_meals = data;

    window.addEventListener("scroll", this.handleScroll);
  },

  watch: {
    searchMeal: async function (strSearch) {
      const { data } = await axios.get(
        `${URI}/search?limit=${LIMIT}&offset=0&strMealSearch=${strSearch}`
      );
      this.arr_meals = data;
    },
  },

  methods: {
    handleScroll() {
      window.addEventListener("scroll", () => {
        const scrollHeight = document.documentElement.scrollHeight;
        const scrollTop = document.documentElement.scrollTop;
        const clientHeight = document.documentElement.clientHeight;
        //scrollHeight - scrollTop = clientHeight
        const rows_meals = document.getElementsByClassName('slds-hint-parent');
        const last_row_meal = rows_meals[rows_meals.length - 1];
        const scrolling = scrollHeight - scrollTop;
        const endScrollingPlusHeightRow = clientHeight + last_row_meal.offsetHeight;

        if(scrolling <= endScrollingPlusHeightRow){
          console.log('scrolllllll')
        }
      });
    },
  },

  unmounted(){
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>
