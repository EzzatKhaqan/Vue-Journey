<template>
  <button class="btn btn-primary btn-block menu" ref="btn" @click="showNav" id="toggle">
    |||
  </button>

  <!-- NavBar -->
  <div ref="navigation" class="navigation hide">
    <ul>
      <li class="left active">
        <a><router-link :to="{ name: 'Home' }">Home</router-link></a>
      </li>

      <li class="left">
        <a><router-link to="/service">Service</router-link></a>
      </li>
      <!-- Drop Down -->
      <li class="dropdown">
        <a href="#">Options</a>
        <div class="dropdown-content">
          <ul>
            <li>Login</li>
            <li>Register</li>
            <li>Logout</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    showNav() {
      let nav = this.$refs.navigation;
      if (nav.classList.contains("hide")) {
        nav.classList.remove("hide");
        nav.classList.add("show");
      } else {
        nav.classList.remove("show");
        nav.classList.add("hide");
      }
    },
  },
};
</script>

<style scoped>
/* Botton */
.btn {
  width: 80px;
  height: 30px;
  border: 1px solid red;
  border-radius: 5px;
  color: red;
  margin-bottom: 2px;
  padding: 5px 5px;
}

.btn:hover {
  background-color: red;
  color: white;
  transition: 0.3s;
}

.btn-primary {
  background-color: rgb(251, 251, 251);
}

.btn-block {
  width: 100%;
}

.show {
  display: block;
}

.menu {
  display: none;
}

a:link {
  text-decoration: none;
  color: red;
}

a:visited {
  color: red;
}

li.active {
  background-color: red;
}

li.active a {
  color: white;
}

div.navigation {
  width: 100%;
  height: 40px;
  border: 1px solid red;
  border-radius: 4px;
}

div.navigation ul {
  width: auto;
  margin: 0;
  padding: 0;
  list-style-type: none;
}

div.navigation ul li:hover {
  background-color: red;
  transition: 0.3s;
}

div.navigation ul li:hover a {
  color: white;
}

div.navigation ul li:first-child {
  border-left: none;
}

div.navigation ul li {
  display: block;
  width: 80px;
  height: 25px;
  border-left: 1px solid rgb(252, 0, 0);
  text-align: center;
  padding: 5px 5px;
  padding-top: 10px;
  color: red;
  transition: 0.3s;
}

li.left {
  float: left;
}

/*Responsive Menu*/
@media screen and (max-width: 732px) {
  div.navigation {
    width: 100%;
    height: auto;
  }

  div.navigation ul li {
    float: none;
    display: block;
    width: auto;
    border: 0;
    border-radius: 3px;
  }

  div.navigation ul li.dropdown {
    float: none;
    display: block;
    width: auto;
  }

  li.dropdown div.dropdown-content {
    width: 100%;
    border: 0;
  }

  div.navigation ul li.dropdown div.dropdown-content ul li {
    width: auto;
    border-radius: 5px;
  }

  div.navigation ul li.dropdown div.dropdown-content ul li:hover {
    width: auto;
  }

  .menu {
    display: block;
  }

  .hide {
    display: none;
  }
}

div.navigation li.dropdown {
  float: right;
  position: relative;
}

.dropdown-content {
  border: 1px solid red;
  background-color: red;
  margin-top: 11px;
  position: absolute;
  width: 200px;
  right: 0;
  height: auto;
  border-top: 0;
  display: none;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}

.dropdown-content ul {
  padding: 0;
  margin: 0;
}

div.navigation li.dropdown .dropdown-content ul li {
  display: block;
  border: 0;
  width: 200px;
  text-align: left;
  padding: 12px 15px;
  transition: 0.3s;
  background-color: red;
  color: white;
}

div.navigation li.dropdown .dropdown-content ul li:hover {
  background-color: white;
  color: red;
  width: 170px;
  transition: 0.3s;
}

li.dropdown:hover div.dropdown-content {
  display: block;
}

li.dropdown:hover div.dropdown-content ul li {
  width: auto;
}
</style>
