<template>
  <div class="investment-agree">
    <h2>自动投标授权委托书</h2>
    <div class="content">
      <p class="text-justify">委托人：{{userAuth.realName}}</p>
      <p class="text-justify">身份证号：{{userAuth.idNo}}</p> <br>
      <p class="text-justify">受托人：北京竞财投资服务有限公司（以下简称“竞财”）:</p>
      <p class="text-justify">住所：北京市石景山区实兴大街30号院3号楼2层D-0495房间</p><br>
      <p class="text-justify">鉴于委托人为在竞财运营的平台宏财网上实名注册的用户，现拟参与宏财网平台开发的“自动投标”功能，为优化委托人的用户体验，委托人就“自动投标”的相关投标、资金划转、退出等相关事项向受托人做出如下授权：</p><br>
      <p class="text-justify">一、授权范围</p>
      <p class="text-justify">（一）代委托人在宏财网平台上签署借款合同、债权转让与受让协议等业务流程中的全部协议。</p>
      <p class="text-justify">（二）代委托人进行划转出借资金、收回借款本息、收取债权转让款项等业务流程中涉及的全部资金管理。</p><br>
      <p class="text-justify">二、授权出借信息</p>
      <p class="text-justify">（一）授权出借的账户</p>
      <p class="text-justify">宏财网平台账户ID：<u>{{userAuth.id}}</u></p>
      <p class="text-justify">（二）授权出借的金额：以委托人自行设置自动投标金额限制为准。</p>
      <p class="text-justify">（三）授权期限：以委托人自行设置的授权期限（包括关闭自动投标功能）为准。</p><br>
      <p class="text-justify">三、声明</p>
      <p class="text-justify">（一）授权人对此等自动投资工具下自动签署相关协议和资金划转的安排已充分知悉并理解，并无条件接受自动签署的相关协议的约束。该授权将视为委托人的真实意思表示，相关风险和责任由委托人自行承担。</p>
      <p class="text-justify">（二）本委托书经委托人在宏财网平台以线上点击的方式确认授权。委托人在宏财网平台点击“开启”按钮，开启自动投标功能时本授权书即产生法律效力。</p>
      <p class="text-justify fr">委托人： <u>{{userAuth.realName}}</u></p>
      <p class="text-justify fr clear"><u>{{ currentDate | dateCharacter}}</u></p>
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        userAuth: {
          realName: '',
          idNo: '',
          id: ''
        },
        currentDate: new Date().getTime()
      }
    },
    props: ['token'],
    watch: {
      token: function (val) {
        if (val && val !== '') {
          this.getInfo()
        }
      }
    },
    mounted () {
      var that = this
      that.$http({ // 获取服务器时间
        method: 'get',
        url: '/hongcai/rest/systems/serverTime'
      }).then((response) => {
        that.currentDate = response.data.time
      })
    },
    created () {
      this.token ? this.getInfo() : null
    },
    methods: {
      getInfo () {
        var that = this
        that.$http({
          method: 'get',
          url: '/hongcai/rest/users/0/userAuth?token=' + that.token
        }).then(function (res) {
          that.userAuth = res.data
        })
      }
    }
  }
</script>
<style scoped>
  h2 {
    margin-top: .5rem;
  }

  .header,
  p,
  .title {
    font-size: .3rem;
    padding: .2rem 0 0;
  }

  p.title {
    text-align: left;
    font-size: .28rem;
  }

  p.header {
    background-color: #6da9f3;
    color: #fff;
    padding-bottom: .2rem;
    position: fixed;
    width: 100%;
    top: 0;
  }

  .content {
    padding: .2rem .4rem .4rem;
  }

  .text-justify {
    text-align: justify;
    font-size: .22rem;
    line-height: .42rem
  }

  p.inscribed {
    text-align: right;
    font-size: .28rem;
  }
</style>
