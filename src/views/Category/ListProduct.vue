<template>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <h4 class="pt-3">{{ category.categoryName }}</h4>
        <h5 style="font-weight: 300; color: #686868">{{ msg }}</h5>
      </div>
    </div>
    <div class="row">
      <div
        v-for="item of productArr"
        :key="item.id"
        class="col-md-6 col-xl-4 col-12 pt-3 justify-content-around d-flex"
      >
        <ProductBox :product="item" />
      </div>
    </div>
  </div>
</template>

<script>
import ProductBox from "../../components/ProductBox.vue";
export default {
  components: { ProductBox },
  data() {
    return {
      id: null,
      category: {},
      productArr: [],
      msg: "",
    };
  },
  props: ["products", "categories"],

  mounted() {
    this.id = this.$route.params.id;
    this.category = this.categories.find((category) => category.id == this.id);

    for (let product of this.products) {
      if (product.categoryId == this.id) {
        this.productArr.push(product);
      }
    }

    if (this.productArr.length == 0) {
      this.msg = "No products found for this category";
    } else if (this.productArr.length == 1) {
      this.msg = "Only 1 product found for this category";
    } else {
      this.msg = this.productArr.length + " products found for this category";
    }
  },
};
</script>

<style></style>
