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
    <h1 v-if="!this.arr_meals.length" class="slds-text-heading_large slds-text-align_center slds-m-top_xx-large">
      There's not meal with this name!
    </h1>
  </div>
</template>

<script>
import axios from "axios";
import TableMeals from "../../components/TableMeals.vue";

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
    try {
      const { data } = await axios.get(
        `${process.env.VUE_APP_URI}?limit=${process.env.VUE_APP_LIMIT}&offset=0`
      );
      this.arr_meals = [...this.arr_meals, ...data];
      window.addEventListener("scroll", this.handleScroll);
      //this.$store.commit("enableToast", { show: true});
    } catch (error) {
      this.$store.commit("enableToast", {
        theme: "error",
        show: true,
        msg: error.response.data.errors[0],
      });
    }
  },

  watch: {
    searchMeal: async function (strSearch) {
      try {
        const { data } = await axios.get(
          `${process.env.VUE_APP_URI}/search?limit=${process.env.VUE_APP_LIMIT}&offset=0&strMealSearch=${strSearch}`
        );
        this.arr_meals = data;
      } catch (error) {
        this.$store.commit("enableToast", {
          theme: "slds-theme_success",
          show: true,
          msg: error.response.data.errors[0],
        });
      }
    },
  },

  methods: {
    async getMealsSearch() {
      try {
        if (this.arr_meals.length < 25 && this.arr_meals.length !== 0) {
          let response;
          if (this.searchMeal) {
            response = await axios.get(
              `${process.env.VUE_APP_URI}/search?limit=${process.env.VUE_APP_LIMIT}&offset=${this.arr_meals.length}&strMealSearch=${this.searchMeal}`
            );
          } else {
            response = await axios.get(
              `${process.env.VUE_APP_URI}?limit=${process.env.VUE_APP_LIMIT}&offset=${this.arr_meals.length}`
            );
          }
          this.arr_meals = [...this.arr_meals, ...response.data];
        }
      } catch (error) {
        this.$store.commit("enableToast", {
          theme: "error",
          show: true,
          msg: error.response.data.errors[0],
        });
      }
    },
    handleScroll() {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;
      const scrolling = scrollHeight - scrollTop;

      if (scrolling === clientHeight) {
        this.getMealsSearch();
      }
    },
  },

  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>
