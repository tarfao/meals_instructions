<template>
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
            <a :href="meal.strMealThumb"
              ><img :src="meal.strMealThumb" :alt="meal.strMeal"
            /></a>
          </td>
        </tr>
      </tbody>
    </table>
</template>

<script>
export default {
    name: 'table-meals',
    props: {
        arr_meals: Array
    }
}
</script>