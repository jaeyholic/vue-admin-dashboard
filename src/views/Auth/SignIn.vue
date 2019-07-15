<template>
  <div
    class="container"
    :class="{'light-background' : !isDarkMode, 'dark-background' : isDarkMode}"
  >
    <div class="request" :class="{'light-request': isDarkMode, 'dark-request': !isDarkMode}">
      Don't have a Design Code HQ account?
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <img src="@/assets/DCHQ.svg" alt="Logo" v-show="isDarkMode" />
      <img v-show="!isDarkMode" src="@/assets/DCHQ-dark.svg" alt="Logo" />
      <h4 :class="{'light-text' : isDarkMode, 'dark-text ' : !isDarkMode}">Sign into Design Code HQ</h4>
      <input
        :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
        type="email"
        placeholder="Email"
      />
      <input
        :class="{'light-field': isDarkMode, 'dark-field': !isDarkMode}"
        type="password"
        placeholder="Password"
      />
      <button>Sign In</button>
      <router-link
        :class="{'light-link' : isDarkMode, 'dark-link': !isDarkMode}"
        to="/rocover"
      >Forgot your password?</router-link>
      <button @click="toggleDarkMode">Toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignIn",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    }
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    }
  }
};
</script>

<style lang="scss" scoped>
.light-background {
  background: $light-gray;
}

.dark-background {
  background: $dark-blue;
}

.light-text {
  color: $white;
}

.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 288, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);

  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login {
  width: 400px;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba(255, 255, 255, 0.3);
}

.light-request {
  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);
  a {
    color: $black;
  }
}

img {
  width: 100px;
}

h4 {
  margin: 0;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #ffffff;
}

input {
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  padding-left: 20px;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-sizing: border-box;
  border-radius: 4px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }

  &:focus {
    border-color: rgba(255, 255, 255, 0.6);
  }
}

button {
  height: 60px;
  width: 100%;
  font-size: 20px;
  color: white;
  border: none;
  margin-top: 20px;
  background: #56ccf2;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  margin-bottom: 40px;
}

a {
  font-size: 16px;
  line-height: 25px;
  text-align: center;
  text-decoration: none;
}

.light-link {
  color: rgba(255, 255, 255, 0.3);
}

.dark-link {
  color: rgba(0, 0, 0, 0.3);
}
</style>