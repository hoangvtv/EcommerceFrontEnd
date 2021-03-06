<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-md-1"></div>
      <div class="col-md-4 col-12">
        <img :src="product.imageURL" class="w-100" />
      </div>

      <!-- display product detail  -->
      <div class="col-md-6 col-12 pt-3 pt-md-0 text-center">
        <h4>{{ product.name }}</h4>
        <h6 class="category font-italic">{{ category.categoryName }}</h6>
        <h5 class="font-weight-bold">
          {{ product.price.toLocaleString() }} VNĐ
        </h5>
        <p>{{ product.description }}</p>
        <div class="d-flex flex-row justify-content-between">
          <div class="input-group col-md-3 col-4 p-0">
            <div class="input-group-prepend">
              <span class="input-group-text">Quantity</span>
            </div>
            <input
              type="number"
              class="form-control"
              v-model="quantity"
              min="1"
            />
          </div>

          <div class="input-group col-md-3 col-4 p-0">
            <button class="btn" id="add-to-cart-button" @click="addToCart">
              Add to Cart
            </button>
          </div>
        </div>

        <div class="features pt-3">
          <h5><strong>Features</strong></h5>
          <ul>
            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            <li>Officia quas, officiis eius magni error magnam voluptatem</li>
            <li>nesciunt quod! Earum voluptatibus quaerat dolorem doloribus</li>
            <li>molestias ipsum ab, ipsa consectetur laboriosam soluta et</li>
            <li>ut doloremque dolore corrupti, architecto iusto beatae.</li>
          </ul>
        </div>
        <button
          id="wishList-button"
          class="btn mr-3 p-1 py-0"
          @click="addToWishList(product.id)"
        >
          {{ wishListString }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  props: ["baseURL", "products", "categories"],
  data() {
    return {
      product: {},
      category: {},
      wishListString: "Add to WishList",
      quantity: 1,
    };
  },
  methods: {
    // add product to Cart
    addToCart() {
      if (!this.token) {
        // user is not logged in
        // show some error
        swal({
          text: "please login to add item in cart",
          icon: "error",
        });
        return;
      }

      axios
        .post(`${this.baseURL}cart/add?token=${this.token}`, {
          productId: this.id,
          quantity: this.quantity,
        })
        .then((res) => {
          if (res.status == 201) {
            swal({
              text: "Product added in cart",
              icon: "success",
            });
            this.$emit("fetchData");
          }
        })
        .catch(
          (err) => console.log("err", err),
          swal({
            text: "Product added in cart falied",
            icon: "error",
          })
        );
    },

    // add to wish list
    addToWishList() {
      if (!this.token) {
        swal({
          text: "Please login to add to wishlist",
          icon: "warning",
        });
        return;
      }
      axios
        .post(`${this.baseURL}wishlist/add?token=${this.token}`, {
          id: this.product.id,
        })
        .then((res) => {
          if (res.status === 201) {
            this.wishListString = "Added to WishList";
          }
          swal({
            text: "Added to Wishlist",
            icon: "success",
          });
        })
        .catch((err) => {
          console.log(err);
          swal({
            text: "Add to wishlist fail",
            icon: "error",
          });
        });
    },
  },
  mounted() {
    this.id = this.$route.params.id;
    this.product = this.products.find((product) => product.id == this.id);
    this.category = this.categories.find(
      (category) => category.id == this.product.categoryId
    );
    this.token = localStorage.getItem("token");
  },
};
</script>

<style scoped>
.category {
  font-weight: 700;
}

#wishList-button {
  background-color: #b9b9b9;
}

#add-to-cart-button {
  background-color: #febd69;
}

#add-to-cart-button {
  background-color: #febd69;
}
</style>
