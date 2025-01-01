<script>
export default {
  props: { modalTitle: String },
  data() {
    return {
      skill: null,
      skills: [],
    };
  },
  methods: {
    close() {
      this.$emit("closeModal");
    },
    addSkill() {
      let sk = this.skill;
      this.skills.push(sk);
      this.skill = null;
    },
    remove(s) {
      let i = this.skills.indexOf(s);
      this.skills.shift(i);
    },
  },
};
</script>

<template>
  <div class="container" v-on:click.self="close">
    <div class="modal">
      <button class="close" v-on:click.self="close">X</button>
      <div class="modal-header">
        <h1>{{ modalTitle }}</h1>
      </div>
      <div class="modal-body">
        <form v-on:submit.prevent="">
          <div class="form">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              class="form-control"
              placeholder="Enter First Name"
            />
          </div>
          <div class="form">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              class="form-control"
              placeholder="Enter Last Name"
            />
          </div>
          <div class="form">
            <label>Skills</label>
            <input
              type="text"
              name="skill"
              class="form-control"
              placeholder="Enter Your Skill"
              v-model="skill"
              v-on:click.ctrl="addSkill"
            />
            <div class="banner">
              <span
                v-for="s in skills"
                class="banner-content"
                @click="remove(s)"
              >
                {{ s }}
              </span>
            </div>
          </div>

          <div class="form">
            <input type="submit" class="form-control btn" value="Add" />
          </div>
        </form>
      </div>
      <div class="modal-footer"></div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  top: 0;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0);
  opacity: 0.8;
}
.modal {
  position: relative;
  width: 600px;
  height: auto;
  background-color: white;
  margin: 10px 10px;
  padding: 20px 25px;
  border-radius: 10px;
  opacity: 1;
  display: flex;
  flex-direction: column;
}
.modal-header {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px 5px;
}
.modal-body {
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid grey;
  margin: 10px 5px;
  padding: 20px 5px;
}
form {
  width: 100%;
  height: auto;
  padding: 5px 5px;
}
.form {
  height: auto;
  margin: 5px 5px;
  padding: 5px 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.form label {
  width: 100%;
  height: auto;
  padding: 5px 0px;
  margin: 5px 5px;
  font-size: 18px;
  font-family: sans-serif;
}
.form-control {
  width: 100%;
  height: 35px;
  padding: 5px 5px;
  margin: 5px 5px;
  border: 1px solid grey;
  border-radius: 8px;
  outline: none;
}
.form input:focus {
  border: 2px solid black;
  outline: none;
}
.btn {
  height: 40px;
  border: 1px solid rgb(33, 202, 33);
  border-radius: 8px;
  background: white;
  transition: 0.5s;
}
.btn:hover {
  background-color: rgb(33, 202, 33);
}
.modal h1 {
  color: black;
}
.close {
  width: 50px;
  height: 50px;
  padding: 5px 5px;
  position: absolute;
  right: 20px;
  top: 5px;
  background-color: white;
  color: red;
  border: 1px solid red;
  transition: 0.5s;
  border-radius: 5px;
}
.close:hover {
  background-color: red;
  color: white;
}
.banner {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: start;
}
.banner-content {
  position: relative;
  width: auto;
  height: 30px;
  background: white;
  color: gray;
  font-family: sans-serif;
  border: 1px solid rgb(146, 145, 145);
  border-radius: 4px;
  padding: 2px 3px;
  padding-top: 6px;
  text-align: center;
  margin: 5px 5px;
}
</style>
