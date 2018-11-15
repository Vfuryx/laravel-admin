<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="ruleForm.username" placeholder="username">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')">
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <span class="svg-container">
                      <i class="iconfont bf-yzm"></i>
                    </span>
                    <el-input name="yzCode" type="text" v-model="ruleForm.code" placeholder="请输入验证码" id="yzCode"></el-input>
                    <span class="show-pwd yzc" @click="getCode()">
                        <img :src="src" alt="">
                    </span>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" :loading="loading" @click="submitForm('ruleForm')">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import router from "../../router/index.js";
export default {
  data: function() {
    return {
      ruleForm: {
        username: "admin",
        password: "123123",
        code: "",
        key: ""
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        code: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      },
      src: "",
      loading: false,
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          let data = {
            username: this.ruleForm.username,
            password: this.ruleForm.password,
            captcha_key: this.ruleForm.key,
            captcha_code: this.ruleForm.code
          };
          this.$store
            .dispatch("Login", data)
            .then(() => {
              this.$message({
                message: "登录成功!",
                type: "success"
              });
              this.$store.dispatch("Profile");
              router.push({
                path: "/",
                query: { redirect: router.currentRoute.fullPath }
              });
            })
            .catch(error => {
              if (error.response) {
                let msg = error.response.data.message;
                this.$message.error({
                  message: msg
                });
                this.getCode();
                this.loginForm.code = "";
              }
            });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    getCode: function() {
      this.$post("/captchas").then(res => {
        this.src = res.captcha_image_content;
        this.ruleForm.key = res.captcha_key;
        this.ruleForm.code = "";
      });
    }
  },
  mounted() {
    this.getCode();
  }
};
</script>

<style scoped>
.login-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url(/img/login-bg.jpg);
  background-size: 100%;
}
.ms-title {
  width: 100%;
  line-height: 50px;
  text-align: center;
  font-size: 20px;
  color: #fff;
  border-bottom: 1px solid #ddd;
}
.ms-login {
  position: absolute;
  left: 50%;
  top: 50%;
  width: 350px;
  margin: -190px 0 0 -175px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.3);
  overflow: hidden;
}
.ms-content {
  padding: 30px 30px;
}
.login-btn {
  text-align: center;
}
.login-btn button {
  width: 100%;
  height: 36px;
  margin-bottom: 10px;
}
.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #fff;
}

.yzc {
  right: 0;
  top: 5px;
}
</style>