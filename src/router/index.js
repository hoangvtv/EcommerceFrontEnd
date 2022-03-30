import VueRouter from "vue-router";
import Vue from "vue";
import Home from "../views/Home.vue";
import AddCategory from "../views/Category/AddCategory";
import Category from "../views/Category/Category";
import Product from "../views/Product/Product.vue";
import Admin from "../views/Admin";
import AddProduct from "../views/Product/AddProduct";
import EditCategory from "../views/Category/EditCategory";
import EditProduct from "../views/Product/EditProduct";
import ShowDetails from "../views/Product/ShowDetails.vue";
import ListProduct from "../views/Category/ListProduct.vue";
import SignUp from "../views/SignUp.vue";
import SignIn from "../views/SignIn.vue";
import WishList from "../views/Product/WishList.vue";
import Cart from "../views/Cart.vue";

Vue.use(VueRouter);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  //category detal page
  {
    path: "/category/show/:id",
    name: "ListProduct",
    component: ListProduct,
  },

  {
    path: "/admin/category/add",
    name: "AddCategory",
    component: AddCategory,
  },
  {
    path: "/admin/category",
    name: "Category",
    component: Category,
  },
  // category edit
  {
    path: "/admin/category/:id",
    name: "EditCategory",
    component: EditCategory,
  },
  // admin home page
  {
    path: "/admin",
    name: "Admin",
    component: Admin,
  },
  {
    path: "/admin/product",
    name: "AdminProduct",
    component: Product,
  },
  // add product
  {
    path: "/admin/product/new",
    name: "AddProduct",
    component: AddProduct,
  },
  // edit product
  {
    path: "/admin/product/:id",
    name: "EditProduct",
    component: EditProduct,
  },

  //show detail product
  {
    path: "/product/show/:id",
    name: "ShowDetails",
    component: ShowDetails,
  },

  //sign up and sign in
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: SignIn,
  },

  // WishList
  {
    path: "/wishlist",
    name: "WishList",
    component: WishList,
  },

  //cart product
  {
    path: "/cart",
    name: "Cart",
    component: Cart,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
