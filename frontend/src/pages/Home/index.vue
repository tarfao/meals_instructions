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
        />
      </div>
    </div>
    <table
      class="slds-table slds-table_cell-buffer slds-table_bordered slds-table_striped"
    >
      <thead>
        <tr class="slds-line-height_reset">
          <th class="" scope="col">
            <div class="slds-truncate" title="Name">Name</div>
          </th>
          <th class="" scope="col">
            <div class="slds-truncate" title="Category">Category</div>
          </th>
          <th class="" scope="col">
            <div class="slds-truncate" title="Area">Area</div>
          </th>
          <th class="" scope="col">
            <div class="slds-truncate" title="Cooking Instructions">
              Cooking Instructions
            </div>
          </th>
          <th class="" scope="col">
            <div class="slds-truncate" title="Thumbnail">Thumbnail</div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="meal in arr_meals"
          :key="meal.idMeal"
          class="slds-hint-parent"
        >
          <th data-label="Name" scope="row">
            <div class="slds-truncate" :title="meal.strMeal">
              <a href="#" tabindex="-1">{{ meal.strMeal }}</a>
            </div>
          </th>
          <td data-label="Category">
            <div class="slds-truncate" :title="meal.strCategory">
              {{ meal.strCategory }}
            </div>
          </td>
          <td data-label="Area">
            <div class="slds-truncate" :title="meal.strArea">
              {{ meal.strArea }}
            </div>
          </td>
          <td class="slds-cell-wrap" data-label="Cooking Instructions">
            <div :title="meal.strInstructions">
              {{ meal.strInstructions }}
            </div>
          </td>
          <td data-label="Thumbnail">
            <a :href="meal.strMealThumb"><img :src="meal.strMealThumb" :alt="meal.strMeal" /></a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Home",
  data() {
    return {
      arr_meals: [],
      search_meal: ''
    };
  },
  async mounted() {
    const { data } = await axios.get(
      "http://localhost:8000?limit=15&offset=0"
    );
    this.arr_meals = data;
  },
};
</script>
