<template>
  <div class="register">
    <b-row>
      <b-col>
    <b-card title="注册">
    <b-form>
      <b-form-group>
        <b-form-input
          v-model="user.name"
          type="text"
          placeholder="输入您的用户名（选填）"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="user.telephone"
          type="number"
          placeholder="输入您的手机号码"
        ></b-form-input>
      </b-form-group>
      <b-form-group>
        <b-form-input
          v-model="user.password"
          type="password"
          placeholder="输入您的密码"
        ></b-form-input>
      </b-form-group>
    </b-form>
    </b-card>
      </b-col>
    </b-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: {
        name: '',
        telephone: '',
        password: '',
      },
    };
  },
};
</script>
<style lang="scss" scoped>

</style>
