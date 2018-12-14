<template>
  <div class="questionnaire">
    <!-- 问卷 -->
    <h3>《出借人风险承受能力评估调查问卷》</h3> <br>
    <p class="text-justify ft-bold text-indent">风险提示：网络出借可能获得比较高的出借收益，但也存在比较大的出借风险，请您根据自身的风险承受能力，审慎作出出借决定。</p><br>
    <p class="ft-444 text-left">尊敬的出借人：</p>
    <p class="tip text-justify text-indent">为了便于您了解自身的风险承受能力，选择合适的出借标的和服务，请您填写以下风险承受能力评估问卷。下列问题可协助评估您对出借标的和服务的风险承受能力，请您根据自身情况认真选择。评估结果仅供参考，不构成出借建议。为了及时了解您的风险承受能力，我们建议您持续做好动态评估。我们承诺对您的所有个人资料保密。</p><br>
    <form name="questionnaireForm" >
    <!-- 问题及答案 -->
      <div class="question" v-for="(question,index) in questions">
        <div class="title overflow-hid clearfix ft-444">
          <span class="no fl">{{index + 1}}</span>
          <span class="content fl">{{question.title || '您的年龄是：'}}</span>
        </div>
        <div class="answers">
          <div class="answer overflow-hid clearfix" v-for="answer in question.answers" @click="select($event, question.id, answer.id)">
            <span class="fl"></span><label class="fl" >{{ answer.answer || '30岁以下' }}</label>
          </div>
        </div>
      </div>
      <p class="tip text-justify ft-bold">在您考虑投资之前，应该先准备一笔可以随时动用且足以应对不时之需的备用金。（建议至少是您3个月家庭开支或3至6个月内的个人总支出。）</p>
      <!-- 提交按钮 -->
      <div class="position-re margin-t-5"> 
        <div class="errMsg position-ab" v-show="warningMsg && showWarning">
          <!--{{errMsg}}-->{{warningMsg}}
        </div>
        <button type="button" class="button button-primary submit-btn" v-bind:class="[!canSubmit ? 'button-disabled' : '', '']" @click="submitQuestionnaire(questionAndAnswer)">提交</button>
      </div>
    </form>
    <div class="mask-common" v-show="showResult">
      <div class="wrap">
        <div class="wrap-conyent">
          <p class="title">测评结果</p>
          <div class="rule">
            <p class="margin-t-0 margin-b-0 text-justify">尊敬的宏财用户，您的得分总计为 <u>{{score}}分</u>，您的风险测评结果为 <u>{{type}}</u>，下表是宏财网为您规划的出借上限，选择符合您风险承受能力的项目，理性出借（上限值仅供参考，不作为出借建议）：</p>
            <ul class="table">
              <li v-for="item in risk">
                <p class="first ft-bold">{{item.name}}</p>
                <p v-for="level in item.level">{{level}}</p>
              </li>
              <li>
                <p class="first ft-bold">累计出借上限</p>
                <p>{{riskInvestLimits.alimits < 0 ? '不限' : riskInvestLimits.alimits / 10000 + '万元'}}</p>
                <p>{{riskInvestLimits.blimits < 0 ? '不限' : riskInvestLimits.blimits / 10000 + '万元'}}</p>
                <p>{{riskInvestLimits.climits < 0 ? '不限' : riskInvestLimits.climits / 10000 + '万元'}}</p>
                <p>{{riskInvestLimits.dlimits < 0 ? '不限' : riskInvestLimits.dlimits / 10000 + '万元'}}</p>
              </li>
              <li>
                <p class="first ft-bold">可出借</p>
                <p>{{riskInvestLimits.remainALimits < 0 ? '不限' : riskInvestLimits.remainALimits / 10000 + '万元'}}</p>
                <p>{{riskInvestLimits.remainBLimits < 0 ? '不限' : riskInvestLimits.remainBLimits / 10000 + '万元'}}</p>
                <p>{{riskInvestLimits.remainCLimits < 0 ? '不限' : riskInvestLimits.remainCLimits / 10000 + '万元'}}</p>
                <p>{{riskInvestLimits.remainDLimits < 0 ? '不限' : riskInvestLimits.remainDLimits / 10000 + '万元'}}</p>
              </li>
            </ul>
            <button class="question-btn padding-0" @click="closeResult">我知道了</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {bridgeUtil, ModalHelper} from '../../service/Utils.js'
  export default {
    name: 'Questionnaire',
    data () {
      return {
        questions: [
          {
            id: 1,
            title: '您的年龄是：',
            surveryType: 1,
            status: 1,
            answers: [
                {id: 1, questionId: 1, answer: '30岁以下', score: 10, status: 1, createTime: 0, updateTime: null},
                {id: 2, questionId: 1, answer: '30-45岁', score: 8, status: 1, createTime: 0, updateTime: null},
                {id: 3, questionId: 1, answer: '45岁-60岁', score: 6, status: 1, createTime: 0, updateTime: null},
                {id: 4, questionId: 1, answer: '60岁以上', score: 4, status: 1, createTime: 0, updateTime: null}
            ]
          },
          {
            id: 2,
            title: '您的家庭就业情况：',
            surveryType: 1,
            status: 1,
            answers: [
                {id: 5, questionId: 1, answer: '您与配偶均有稳定收入的工作', score: 10, status: 1, createTime: 0, updateTime: null},
                {id: 6, questionId: 1, answer: '您与配偶其中一人有稳定收入的工作', score: 8, status: 1, createTime: 0, updateTime: null},
                {id: 7, questionId: 1, answer: '未婚，有稳定收入的工作', score: 6, status: 1, createTime: 0, updateTime: null},
                {id: 8, questionId: 1, answer: '未婚，目前暂无稳定收入的工作', score: 4, status: 1, createTime: 0, updateTime: null}
            ]
          },
          {
            id: 3,
            title: '您的家庭年收入：',
            surveryType: 1,
            status: 1,
            answers: [
                {id: 9, questionId: 1, answer: '30岁以下', score: 10, status: 1, createTime: 0, updateTime: null},
                {id: 10, questionId: 1, answer: '30-45岁', score: 8, status: 1, createTime: 0, updateTime: null},
                {id: 11, questionId: 1, answer: '45岁-60岁', score: 6, status: 1, createTime: 0, updateTime: null},
                {id: 12, questionId: 1, answer: '60岁以上', score: 4, status: 1, createTime: 0, updateTime: null}
            ]
          },
          {
            id: 4,
            title: '您有多少年股票、基金、P2P、金融衍生品等兼容投资的经验：',
            surveryType: 1,
            status: 1,
            answers: [
                {id: 13, questionId: 1, answer: '30岁以下', score: 10, status: 1, createTime: 0, updateTime: null},
                {id: 14, questionId: 1, answer: '30-45岁', score: 8, status: 1, createTime: 0, updateTime: null},
                {id: 15, questionId: 1, answer: '45岁-60岁', score: 6, status: 1, createTime: 0, updateTime: null},
                {id: 16, questionId: 1, answer: '60岁以上', score: 4, status: 1, createTime: 0, updateTime: null}
            ]
          },
          {
            id: 5,
            title: '您计划的投资期限是多久',
            surveryType: 1,
            status: 1,
            answers: [
                {id: 1, questionId: 17, answer: '30岁以下', score: 10, status: 1, createTime: 0, updateTime: null},
                {id: 2, questionId: 18, answer: '30-45岁', score: 8, status: 1, createTime: 0, updateTime: null},
                {id: 3, questionId: 19, answer: '45岁-60岁', score: 6, status: 1, createTime: 0, updateTime: null},
                {id: 4, questionId: 20, answer: '60岁以上', score: 4, status: 1, createTime: 0, updateTime: null}
            ]
          },
          {
            id: 6,
            title: '在您的投资计划中，您认为自己能承受的最大投资损失是多少：',
            surveryType: 1,
            status: 1,
            answers: [
                {id: 1, questionId: 21, answer: '30岁以下', score: 10, status: 1, createTime: 0, updateTime: null},
                {id: 2, questionId: 22, answer: '30-45岁', score: 8, status: 1, createTime: 0, updateTime: null},
                {id: 3, questionId: 23, answer: '45岁-60岁', score: 6, status: 1, createTime: 0, updateTime: null},
                {id: 4, questionId: 24, answer: '60岁以上', score: 4, status: 1, createTime: 0, updateTime: null}
            ]
          },
          {
            id: 7,
            title: '您的家庭就业情况：',
            surveryType: 1,
            status: 1,
            answers: [
                {id: 1, questionId: 25, answer: '30岁以下', score: 10, status: 1, createTime: 0, updateTime: null},
                {id: 2, questionId: 26, answer: '30-45岁', score: 8, status: 1, createTime: 0, updateTime: null},
                {id: 3, questionId: 27, answer: '45岁-60岁', score: 6, status: 1, createTime: 0, updateTime: null},
                {id: 4, questionId: 28, answer: '60岁以上', score: 4, status: 1, createTime: 0, updateTime: null}
            ]
          },
          {
            id: 8,
            title: '如果您打算用部分资金做风险投资，投资A预期获得10%的收益，可能损失非常小；投资B预期获得30%的收益，但可能承担较大亏损。您会如何投资？',
            surveryType: 1,
            status: 1,
            answers: [
                {id: 1, questionId: 29, answer: '30岁以下', score: 10, status: 1, createTime: 0, updateTime: null},
                {id: 2, questionId: 30, answer: '30-45岁', score: 8, status: 1, createTime: 0, updateTime: null},
                {id: 3, questionId: 31, answer: '45岁-60岁', score: 6, status: 1, createTime: 0, updateTime: null},
                {id: 4, questionId: 32, answer: '60岁以上', score: 4, status: 1, createTime: 0, updateTime: null},
                {id: 4, questionId: 33, answer: '60岁以上', score: 4, status: 1, createTime: 0, updateTime: null}
            ]
          }
        ],
        questionAndAnswer: {},
        canSubmit: false,
        showWarning: false,
        showResult: false,
        warningMsg: '',
        score: '',
        type: '',
        riskInvestLimits: {},
        risk: [
          {
            name: '项目风险等级',
            level: ['A', 'B', 'C', 'D']
          }
        ]
      }
    },
    created: function () {
      this.token ? this.getQustions() : null
    },
    props: ['token'],
    watch: {
      token: function (val) {
        val && val !== '' ? this.getQustions() : null
      },
      'showResult': function (newVal, oldVal) {
        newVal ? ModalHelper.afterOpen() : ModalHelper.beforeClose()
      }
    },
    methods: {
      getQustions: function () {
        var that = this
        that.$http({
          method: 'get',
          url: '/hongcai/rest/users/31590/getQuestionnaire?token=' + that.token
        })
        .then(function (response) {
          that.questions = response.data
        })
        .catch(function (error) {
          console.log(error)
        })
      },
      select: function (e, question, answer) {
        var target = e.target.localName === 'span' || e.target.localName === 'label' ? e.target.parentElement : e.target
        for (var i = 0; i < target.parentElement.children.length; i++) {
          target.parentElement.children[i].classList.remove('selected')
          target.parentElement.children[i].children[0].classList.remove('selected')
        }
        target.className += ' selected'
        target.children[0].className += ' selected'
        this.canSubmit = true
        this.questionAndAnswer[question] = answer
      },
      submitQuestionnaire: function (questionAndAnswer) {
        let that = this
        if (!that.canSubmit) { return }
        that.canSubmit = false
        that.$http.post('/hongcai/rest/users/0/questionnaire', {
          surveyType: 1,
          answerJson: questionAndAnswer,
          token: that.token
        })
        .then(function (response) {
          if (!response.data || response.data.ret === -1) {
            that.warningMsg = response.data.msg
            that.showWarning = true
            setTimeout(function () {
              that.showWarning = false
            }, 2000)
            return
          }
          that.showResult = true
          var questionnaireRecords = response.data.questionnaireRecords
          that.score = questionnaireRecords.score
          that.riskInvestLimits = response.data.riskInvestLimits
          that.type = response.data.riskInvestLimits.riskToleranceDesc
        })
        .catch(function (error) {
          that.warningMsg = '网络出错'
          setTimeout(function () {
            that.showWarning = false
          }, 2000)
          console.log(error)
        })
      },
      closeResult: function () {
        bridgeUtil.webConnectNative('HCNative_BackToPrePage', null, {}, function (response) {}, null)
        this.showResult = false
        this.questionAndAnswer = {}
        var answer = document.getElementsByClassName('answer')
        var aswSpan = []
        for (var i = 0; i < answer.length; i++) {
          answer[i].classList.remove('selected')
          aswSpan.push(answer[i].firstChild)
          aswSpan[i].classList.remove('selected')
          this.canSubmit = true
        }
        for (var j = 0; i < answer.length; i++) {
          aswSpan[j].classList.remove('selected')
        }
      }
    }
  }
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped >
  .questionnaire {
    font-family: MicrosoftYaiHei;
    background: rgb(248, 248, 248);
    padding: .4rem .4rem 1.5rem;
    font-size: .23rem;
  }
  .question .title {
    font-size: .26rem;
  }
  .question .title .no {
    font-family: Arial;
    display: inline-block;
    background: #fff;
    border-radius: 50%;
    width: .34rem;
    height: .34rem;
    text-align: center;
    margin-right: 5px;
    font-size: .25rem;
    line-height: .34rem;
  }
  .question .title .content {
    text-align: justify;
    width: 86%;
    padding-left: 6px;
  }
  .question .answers {
    padding: .2rem .4rem .2rem;
  }
  .questionnaire .question .answers .answer {
    color: #666;
    border: 1px solid #eee;
    background: #fff;
    padding: .1rem .1rem .08rem;
    margin-bottom: .2rem;
  }
  .questionnaire .question .answer label {
    width: 93%;
    text-align: left;
  }
  .questionnaire .question .answers .answer.selected {
    background-color: #ff611d;
    color: #fff
  }
  .questionnaire .question .answers .answer span {
    width: .19rem;
    height: .19rem;
    display: inline-block;
    margin-right: 5px;
    margin-top: 5px;
    background: url('../../images/user-center/unselected.png') no-repeat;
    background-size: contain;
  }
  .questionnaire .question .answers .answer span.selected {
    background: url('../../images/user-center/selected.png') no-repeat;
    background-size: contain;
  }
  .questionnaire .submit-btn {
    padding: 0rem 0rem 0.05rem;
    width: 100%;
    height: 1rem;
    background: url('../../images/user-center/invite-btn.png') no-repeat 0 0;
    background-size: cover;
    font-weight: 400;
    font-size: .28rem;
    margin-top: 1rem;
  }
  .questionnaire .button-disabled {
    width: 100%;
    height: 1rem;
    padding: 0rem 0rem 0.05rem;
    background: url('../../images/user-center/disabled-btn.png') no-repeat 0 0;
    background-size: cover;
    font-weight: 400;
    font-size: .28rem;
    margin-top: 1rem;
  }
  .questionnaire .errMsg {
    background: url('../../images/user-center/transfer-msg.png') no-repeat;
    width: 47%;
    height: .6rem;
    line-height: .48rem;
    text-align: center;
    color: #fff;
    font-size: .2rem;
    background-size: 100% 100%;
    left: 27%;
    bottom: 54px;
  }
  .mask-common .wrap {
    margin-top: 45%;
  }
  .mask-common .wrap-conyent {
    background-color: #fff;
    font-size: .23rem;
    color: #222;
    padding: .3rem .2rem;
    width: 86%;
    margin: 0 auto;
    border-radius: .2rem;
    line-height: 1.4;
  }
  .wrap-conyent p.title {
    font-size: .28rem;
    color: #ff611d;
    margin-bottom: .24rem;
  }
  .wrap-conyent p.text-justify {
    font-size: .24rem;
    color: #666;
  }
  .question-btn {
    width: 45%;
    height: .6rem;
    display: block;
    background-color: #ff611d;
    border: 1px solid #ff611d;
    border-radius: .8rem;
    line-height: .6rem;
    text-align: center;
    margin: .36rem 27% .1rem;
    color: #fff;
    font-size: .28rem;
    font-weight: initial;
  }
  .table {
    border-left: 1px solid #999;
    margin-top: .25rem;
    color: #333;
  }
  .table li {
    overflow: hidden;
    width: 100%;
  }
  .table li p {
    float: left;
    width: 18%;
    border-right: 1px solid #999;
    border-top: 1px solid #999; 
    height: .5rem;
    line-height: .55rem;
  }
  .table li:last-child p {
    border-bottom: 1px solid #999;
  }
  .table li p.first {
    width: 28%;
    font-size: .23rem;
  }
</style>
