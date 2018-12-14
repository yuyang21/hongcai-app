import Vue from 'vue'
import Router from 'vue-router'
import Promise from 'es6-promise'
import VueCookie from 'vue-cookie'
import wx from 'weixin-js-sdk'
window.Promise = Promise
const ProjectDetail = r => require.ensure([], () => r(require('../components/ProjectDetail.vue')), 'ProjectDetail')
const Invite = r => require.ensure([], () => r(require('../components/activity/invite.vue')), 'Invite')
const ActivityReward = r => require.ensure([], () => r(require('../components/activity/reward.vue')), 'Invite')
const Lottery = r => require.ensure([], () => r(require('../components/activity/lottery.vue')), 'Lottery')
const LotteryRecord = r => require.ensure([], () => r(require('../components/activity/lotteryRecord.vue')), 'Lottery')
const CoolRanking = r => require.ensure([], () => r(require('../components/activity/coolRanking.vue')), 'CoolSummerPlan')
const IntegralDetail = r => require.ensure([], () => r(require('../components/activity/integralDetail.vue')), 'CoolSummerPlan')
const CoolSummerPlan = r => require.ensure([], () => r(require('../components/activity/cool-summer-plan.vue')), 'CoolSummerPlan')
const Novice = r => require.ensure([], () => r(require('../components/activity/novice.vue')), 'Novice')
const MangoPromotion = r => require.ensure([], () => r(require('../components/activity/mangoPromotion.vue')), 'MangoTV')
const MangoTV = r => require.ensure([], () => r(require('../components/activity/MangoTV.vue')), 'MangoTV')
const GoldenFall = r => require.ensure([], () => r(require('../components/activity/goldenFall.vue')), 'GoldenFall')
const GoldenDetail = r => require.ensure([], () => r(require('../components/activity/goldenDetail.vue')), 'GoldenDetail')
const GoldenRecord = r => require.ensure([], () => r(require('../components/activity/goldenRecord.vue')), 'GoldenRecord')
const gameStart = r => require.ensure([], () => r(require('../components/games/game-counting-start.vue')), 'gameStart')
const gameCounting = r => require.ensure([], () => r(require('../components/games/game-counting.vue')), 'gameCounting')
const gameOver = r => require.ensure([], () => r(require('../components/games/game-counting-over.vue')), 'gameOver')
const gameRecord = r => require.ensure([], () => r(require('../components/games/game-counting-record.vue')), 'gameRecord')
const About = r => require.ensure([], () => r(require('../components/about/about.vue')), 'About')
const ManagementTeam = r => require.ensure([], () => r(require('../components/about/managementTeam.vue')), 'About')
const Introduction = r => require.ensure([], () => r(require('../components/about/introduction.vue')), 'About')
const ContactUs = r => require.ensure([], () => r(require('../components/about/contactUs.vue')), 'About')
const Partner = r => require.ensure([], () => r(require('../components/about/partner.vue')), 'About')
const Safe = r => require.ensure([], () => r(require('../components/safe.vue')), 'Safe')
const Home = r => require.ensure([], () => r(require('../components/Home.vue')), 'others')
const NoticeDetail = r => require.ensure([], () => r(require('../components/user-center/noticeDetail.vue')), 'others')
const bankCardLimit = r => require.ensure([], () => r(require('../components/user-center/bankCardLimit.vue')), 'others')
const AssignmentList = r => require.ensure([], () => r(require('../components/user-center/assignmentList.vue')), 'others')
const HelpCenter = r => require.ensure([], () => r(require('../components/user-center/helpCenter.vue')), 'userCenter')
const Help = r => require.ensure([], () => r(require('../components/user-center/help.vue')), 'userCenter')
const Question = r => require.ensure([], () => r(require('../components/user-center/question.vue')), 'Question')
const Feedback = r => require.ensure([], () => r(require('../components/user-center/feedback.vue')), 'Feedback')
const InviteRebate = r => require.ensure([], () => r(require('../components/user-center/inviteRebate.vue')), 'InviteRebate')
const inviteRebateList = r => require.ensure([], () => r(require('../components/user-center/inviteRebateList.vue')), 'InviteRebate')
const Membership = r => require.ensure([], () => r(require('../components/user-center/Membership.vue')), 'Membership')
const postLoanManagementInfo = r => require.ensure([], () => r(require('../components/user-center/postLoanManagementInfo.vue')), 'postLoanManagementInfo')
const AssignmentQuestion = r => require.ensure([], () => r(require('../components/assignmentQuestion.vue')), 'Question')
const RegisterAgree = r => require.ensure([], () => r(require('../components/registerAgree.vue')), 'RegisterAgree')
const AssignmentAgree = r => require.ensure([], () => r(require('../components/assignmentAgree.vue')), 'AssignmentAgree')
const InvestmentAgree = r => require.ensure([], () => r(require('../components/investmentAgree.vue')), 'InvestmentAgree')
const AutomaticTenderAuthorization = r => require.ensure([], () => r(require('../components/automaticTenderAuthorization.vue')), 'AutomaticTenderAuthorization')
const ServiceAgree = r => require.ensure([], () => r(require('../components/serviceAgree.vue')), 'ServiceAgree')
const BusinessSuccess = r => require.ensure([], () => r(require('../components/businessSuccess.vue')), 'BusinessSuccess')
const BankCustody = r => require.ensure([], () => r(require('../components/bankCustody.vue')), 'BankCustody')
const BindWechat = r => require.ensure([], () => r(require('../components/bindWechat.vue')), 'BindWechat')
const News = r => require.ensure([], () => r(require('../components/news/news.vue')), 'News')
const Report1 = r => require.ensure([], () => r(require('../components/news/report1.vue')), 'News')
const Report2 = r => require.ensure([], () => r(require('../components/news/report2.vue')), 'News')
const Report3 = r => require.ensure([], () => r(require('../components/news/report3.vue')), 'News')
const Report4 = r => require.ensure([], () => r(require('../components/news/report4.vue')), 'News')
const Report5 = r => require.ensure([], () => r(require('../components/news/report5.vue')), 'News')
const Report = r => require.ensure([], () => r(require('../components/news/report.vue')), 'News')
const Events = r => require.ensure([], () => r(require('../components/events.vue')), 'Events')
const RiskEducation = r => require.ensure([], () => r(require('../components/riskEducation.vue')), 'RiskEducation')
const Register = r => require.ensure([], () => r(require('../components/activity/oldPeople.vue')), 'Register')
const RegisterSuccess = r => require.ensure([], () => r(require('../components/activity/registerSuccess.vue')), 'Register')
const WanduRegister = r => require.ensure([], () => r(require('../components/activity/wandu-register.vue')), 'WanduRegister')
const WanduSuccess = r => require.ensure([], () => r(require('../components/activity/wandu-success.vue')), 'WanduRegister')
const QRcode = r => require.ensure([], () => r(require('../components/QRcode.vue')), 'QRcode')
const Updates = r => require.ensure([], () => r(require('../components/recommendUpdates.vue')), 'Updates')
const Disclosure = r => require.ensure([], () => r(require('../components/disclosure/disclosure.vue')), 'Disclosure')
const CommitmentLetter = r => require.ensure([], () => r(require('../components/disclosure/commitmentLetter.vue')), 'Disclosure')
const PoliciesRegulations = r => require.ensure([], () => r(require('../components/disclosure/policiesRegulations.vue')), 'Disclosure')
const RecordInformation = r => require.ensure([], () => r(require('../components/disclosure/recordInformation.vue')), 'Disclosure')
const AuditInformation = r => require.ensure([], () => r(require('../components/disclosure/auditInformation.vue')), 'Disclosure')
const Organization = r => require.ensure([], () => r(require('../components/disclosure/organization.vue')), 'Disclosure')
const BusinessInformation = r => require.ensure([], () => r(require('../components/disclosure/businessInformation.vue')), 'Disclosure')
const Policies = r => require.ensure([], () => r(require('../components/disclosure/policies.vue')), 'Disclosure')
const Rouse = r => require.ensure([], () => r(require('../components/Rouse.vue')), 'Rouse')
const BreakEgg = r => require.ensure([], () => r(require('../components/activity/breakEgg.vue')), 'BreakEgg')
const BreakEggRecord = r => require.ensure([], () => r(require('../components/activity/breakEggRecord.vue')), 'BreakEggRecord')
const Anniversary = r => require.ensure([], () => r(require('../components/activity/anniversary.vue')), 'Anniversary')
const HappyBirthday = r => require.ensure([], () => r(require('../components/activity/happyBirthday.vue')), 'HappyBirthday')
const LabaFestival = r => require.ensure([], () => r(require('../components/activity/labaFestival.vue')), 'LabaFestival')
const LabaRecord = r => require.ensure([], () => r(require('../components/activity/labaRecord.vue')), 'LabaRecord')
const BeanExplain = r => require.ensure([], () => r(require('../components/user-center/beanExplain.vue')), 'Bean')
const BeanDetail = r => require.ensure([], () => r(require('../components/user-center/beanDetail.vue')), 'BeanDetail')
const SpringFestival = r => require.ensure([], () => r(require('../components/activity/springFestival.vue')), 'SpringFestival')
const SpringRecord = r => require.ensure([], () => r(require('../components/activity/SpringRecord.vue')), 'SpringRecord')
const FenTian = r => require.ensure([], () => r(require('../components/activity/FenTian.vue')), 'FenTian')
const FenPush = r => require.ensure([], () => r(require('../components/activity/FenPush.vue')), 'FenPush')
const FenPushSuccess = r => require.ensure([], () => r(require('../components/activity/FenPushSuccess.vue')), 'FenPushSuccess')
const WomensDay = r => require.ensure([], () => r(require('../components/activity/WomensDay.vue')), 'WomensDay')
const ArborDays = r => require.ensure([], () => r(require('../components/activity/arborDay.vue')), 'ArborDays')
const ArborRecord = r => require.ensure([], () => r(require('../components/activity/arborRecord.vue')), 'ArborRecord')
const GoldDays = r => require.ensure([], () => r(require('../components/activity/goldDay.vue')), 'GoldDays')
const GoldRecord = r => require.ensure([], () => r(require('../components/activity/goldRecord.vue')), 'GoldRecord')
const FoolDays = r => require.ensure([], () => r(require('../components/activity/FoolDays.vue')), 'FoolDays')
const FoolDaysApp = r => require.ensure([], () => r(require('../components/activity/FoolDaysApp.vue')), 'FoolDaysApp')
const FoolDaysIndex = r => require.ensure([], () => r(require('../components/activity/FoolDaysIndex.vue')), 'FoolDaysIndex')
const FoolExchange = r => require.ensure([], () => r(require('../components/activity/FoolExchange.vue')), 'FoolExchange')
const FoolSuccess = r => require.ensure([], () => r(require('../components/activity/FoolSuccess.vue')), 'FoolSuccess')
const FoolRecord = r => require.ensure([], () => r(require('../components/activity/FoolRecord.vue')), 'FoolRecord')
const FoolQuestion = r => require.ensure([], () => r(require('../components/activity/FoolQuestion.vue')), 'FoolQuestion')
const FoolReportCard = r => require.ensure([], () => r(require('../components/activity/FoolReportCard.vue')), 'FoolReportCard')
const FoolAnswer = r => require.ensure([], () => r(require('../components/activity/FoolAnswer.vue')), 'FoolAnswer')
const FoolResult = r => require.ensure([], () => r(require('../components/activity/FoolResult.vue')), 'FoolResult')
const FoolAnswerPage = r => require.ensure([], () => r(require('../components/activity/FoolAnswerPage.vue')), 'FoolAnswerPage')
const FoolTacit = r => require.ensure([], () => r(require('../components/activity/FoolTacit.vue')), 'FoolTacit')
const TimeLimitRebate = r => require.ensure([], () => r(require('../components/activity/TimeLimitRebate.vue')), 'TimeLimitRebate')
const LoanManagement = r => require.ensure([], () => r(require('../components/LoanManagement.vue')), 'LoanManagement')
const operatingReport2017 = r => require.ensure([], () => r(require('../components/disclosure/operatingReport2017.vue')), 'operatingReport2017')
const operatingReport2016 = r => require.ensure([], () => r(require('../components/disclosure/operatingReport2016.vue')), 'operatingReport2016')
const AuditPDF = r => require.ensure([], () => r(require('../components/disclosure/AuditPDF.vue')), 'AuditPDF')
const ActivityInviteSharing = r => require.ensure([], () => r(require('../components/activity/inviteSharing.vue')), 'ActivityInviteSharing')
const ActivitySucceed = r => require.ensure([], () => r(require('../components/activity/activitySucceed.vue')), 'ActivitySucceed')
const Bean = r => require.ensure([], () => r(require('../components/bean/bean.vue')), 'Bean')
const BeanMall = r => require.ensure([], () => r(require('../components/bean/beanMall.vue')), 'BeanMall')
const BeanCommodity = r => require.ensure([], () => r(require('../components/bean/commodity.vue')), 'BeanCommodity')
const BeanExchange = r => require.ensure([], () => r(require('../components/bean/exchange.vue')), 'BeanExchange')
const BeanRecord = r => require.ensure([], () => r(require('../components/bean/record.vue')), 'BeanRecord')
const exchangeDetail = r => require.ensure([], () => r(require('../components/bean/exchangeDetail.vue')), 'exchangeDetail')

Vue.use(Router)
Vue.use(VueCookie)
Vue.use(wx)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/businessSuccess',
    name: 'BusinessSuccess',
    component: BusinessSuccess
  },
  {
    path: '/about',
    component: About,
    children: [
      {
        path: 'management-team',
        name: 'ManagementTeam',
        component: ManagementTeam,
        meta: {title: '走进宏财'}
      },
      {
        path: '',
        name: 'Introduction',
        component: Introduction,
        meta: {title: '走进宏财'}
      },
      {
        path: 'contact-us',
        name: 'ContactUs',
        component: ContactUs,
        meta: {title: '走进宏财'}
      },
      {
        path: 'partner',
        name: 'Partner',
        component: Partner,
        meta: {title: '走进宏财'}
      }
    ]
  },
  {
    path: '/disclosure',
    component: Disclosure,
    children: [
      {
        path: '',
        name: 'CommitmentLetter',
        component: CommitmentLetter,
        meta: {title: '信息披露'}
      },
      {
        path: 'record-information',
        name: 'RecordInformation',
        component: RecordInformation,
        meta: {title: '信息披露'}
      },
      {
        path: 'audit-information',
        name: 'AuditInformation',
        component: AuditInformation,
        meta: {title: '信息披露'}
      },
      {
        path: 'organization',
        name: 'Organization',
        component: Organization,
        meta: {title: '信息披露'}
      },
      {
        path: 'business-information',
        name: 'BusinessInformation',
        component: BusinessInformation,
        meta: {title: '信息披露'}
      },
      {
        path: 'policies-regulations',
        name: 'PoliciesRegulations',
        component: PoliciesRegulations,
        meta: {title: '信息披露'}
      }
    ]
  },
  {
    path: '/policies/:id',
    name: 'Policies',
    component: Policies,
    meta: {title: '信息披露'}
  },
  {
    path: '/user-center/help-center',
    name: 'HelpCenter',
    component: HelpCenter,
    meta: {title: '帮助中心'}
  },
  {
    path: '/user-center/help/:type',
    name: 'Help',
    component: Help
  },
  {
    path: '/user-center/questionnaire',
    name: 'Question',
    component: Question,
    meta: {title: '风险测评'}
  },
  {
    path: '/user-center/feedback',
    name: 'Feedback',
    component: Feedback,
    meta: {title: '意见反馈'}
  },
  {
    path: '/user-center/invite-rebate',
    name: 'InviteRebate',
    component: InviteRebate,
    meta: {title: '我的邀请'}
  },
  {
    path: '/user-center/invite-rebate-list',
    name: 'inviteRebateList',
    component: inviteRebateList,
    meta: {title: '邀请列表'}
  },
  {
    path: '/user-center/membership',
    name: 'Membership',
    component: Membership,
    meta: {title: '等级说明'}
  },
  {
    path: '/project/:number',
    name: 'ProjectDetail',
    component: ProjectDetail
  },
  {
    path: '/activity/invite',
    name: 'Invite',
    component: Invite,
    meta: {title: '邀请好友'}
  },
  {
    path: '/activity/reward',
    name: 'ActivityReward',
    component: ActivityReward,
    meta: {title: '我的奖励'}
  },
  {
    path: '/activity/invite-sharing/:inviteCode',
    name: 'ActivityInviteSharing',
    component: ActivityInviteSharing,
    meta: {title: '宏财新手大礼包，抢！'}
  },
  {
    path: '/activity/invite-succeed',
    name: 'ActivitySucceed',
    component: ActivitySucceed,
    meta: {title: '邀请好友'}
  },
  {
    path: '/activity/lottery',
    name: 'Lottery',
    component: Lottery,
    meta: {title: '幸运大抽奖'}
  },
  {
    path: '/activity/user-lottery-record',
    name: 'LotteryRecord',
    component: LotteryRecord,
    meta: {title: '我的奖励'}
  },
  {
    path: '/user-center/bankcard-limit',
    name: 'bankCardLimit',
    component: bankCardLimit,
    meta: {title: '银行卡限额'}
  },
  {
    path: '/user-center/assignment-list/:number',
    name: 'AssignmentList',
    component: AssignmentList,
    meta: {title: '转让记录'}
  },
  {
    path: '/user-center/messages/:id',
    name: 'NoticeDetail',
    component: NoticeDetail,
    meta: {title: '公告详情'}
  },
  {
    path: '/user-center/postLoanManagementInfo/:projectNum',
    name: 'postLoanManagementInfo',
    component: postLoanManagementInfo,
    meta: {title: '贷后管理信息'}
  },
  {
    path: '/activity/novice-landing',
    name: 'Novice',
    component: Novice,
    meta: {title: '新手大礼包'}
  },
  {
    path: '/activity/cool-summer-plan',
    name: 'CoolSummerPlan',
    component: CoolSummerPlan,
    meta: {title: '夏日清凉计划'}
  },
  {
    path: '/activity/cool-ranking',
    name: 'CoolRanking',
    component: CoolRanking,
    meta: {title: '前十名排行榜'}
  },
  {
    path: '/activity/integral-detail',
    name: 'IntegralDetail',
    component: IntegralDetail,
    meta: {title: '清凉积分明细'}
  },
  {
    path: '/activity/mangoTV',
    name: 'MangoTV',
    component: MangoTV,
    meta: {title: '0元变身VIP'}
  },
  {
    path: '/activity/mango-push',
    name: 'MangoPromotion',
    component: MangoPromotion,
    meta: {title: '0元变身VIP'}
  },
  {
    path: '/activity/fen-tian',
    name: 'FenTian',
    component: FenTian,
    meta: {title: '超值限量礼包免费领'}
  },
  {
    path: '/activity/fen-push',
    name: 'FenPush',
    component: FenPush,
    meta: {title: '超值限量礼包免费领'}
  },
  {
    path: '/activity/fen-push-success',
    name: 'FenPushSuccess',
    component: FenPushSuccess,
    meta: {title: '超值限量礼包免费领'}
  },
  {
    path: '/activity/Womens-Day',
    name: 'WomensDay',
    component: WomensDay,
    meta: {title: '女王驾到'}
  },
  {
    path: '/activity/golden-fall',
    name: 'GoldenFall',
    component: GoldenFall,
    meta: {title: '蟹逅金秋'}
  },
  {
    path: '/activity/golden-detail',
    name: 'GoldenDetail',
    component: GoldenDetail,
    meta: {title: '积分明细'}
  },
  {
    path: '/activity/golden-record',
    name: 'GoldenRecord',
    component: GoldenRecord,
    meta: {title: '兑换记录'}
  },
  {
    path: '/games/game-counting-start',
    name: 'gameStart',
    component: gameStart,
    meta: {title: '拼手速抢红包'}
  },
  {
    path: '/games/game-counting/:gameType',
    name: 'gameCounting',
    component: gameCounting,
    meta: {title: '拼手速抢红包'}
  },
  {
    path: '/games/game-counting-record',
    name: 'gameRecord',
    component: gameRecord,
    meta: {title: '拼手速抢红包'}
  },
  {
    path: '/games/game-counting-over',
    name: 'gameOver',
    component: gameOver,
    meta: {title: '拼手速抢红包'}
  },
  {
    path: '/activity/break-egg',
    name: 'BreakEgg',
    component: BreakEgg,
    meta: {title: '诞旦有惊喜'}
  },
  {
    path: '/activity/break-egg-record',
    name: 'BreakEggRecord',
    component: BreakEggRecord,
    meta: {title: '诞旦有惊喜'}
  },
  {
    path: '/activity/laba-festival',
    name: 'LabaFestival',
    component: LabaFestival,
    meta: {title: '腊月迎新礼'}
  },
  {
    path: '/activity/laba-record',
    name: 'LabaRecord',
    component: LabaRecord,
    meta: {title: '查看详情'}
  },
  {
    path: '/activity/anniversary',
    name: 'Anniversary',
    component: Anniversary,
    meta: {title: '三周年狂欢'}
  },
  {
    path: '/activity/happy-birthday',
    name: 'HappyBirthday',
    component: HappyBirthday,
    meta: {title: 'happy birthday'}
  },
  {
    path: '/activity/spring-festival',
    name: 'SpringFestival',
    component: SpringFestival,
    meta: {title: '新春红包'}
  },
  {
    path: '/activity/Spring-record',
    name: 'SpringRecord',
    component: SpringRecord,
    meta: {title: '查看详情'}
  },
  {
    path: '/activity/arbor-days',
    name: 'ArborDays',
    component: ArborDays,
    meta: {title: '植树节'}
  },
  {
    path: '/activity/arbor-record',
    name: 'ArborRecord',
    component: ArborRecord,
    meta: {title: '查看详情'}
  },
  {
    path: '/activity/gold-days',
    name: 'GoldDays',
    component: GoldDays,
    meta: {title: '淘金节'}
  },
  {
    path: '/activity/gold-record',
    name: 'GoldRecord',
    component: GoldRecord,
    meta: {title: '查看详情'}
  },
  {
    path: '/activity/fools-day-app',
    name: 'FoolDaysApp',
    component: FoolDaysApp,
    meta: {title: '愚你同乐'}
  },
  {
    path: '/activity/fools-day',
    component: FoolDays,
    children: [
      {
        path: '',
        name: 'FoolDaysIndex',
        component: FoolDaysIndex,
        meta: {title: '愚你同乐'}
      },
      {
        path: 'question',
        name: 'FoolQuestion',
        component: FoolQuestion,
        meta: {title: '愚你同乐'}
      },
      {
        path: 'result',
        name: 'FoolResult',
        component: FoolResult,
        meta: {title: '愚你同乐'}
      },
      {
        path: 'reportCard/:number',
        name: 'FoolReportCard',
        component: FoolReportCard,
        meta: {title: '愚你同乐'}
      },

      {
        path: 'record',
        name: 'FoolRecord',
        component: FoolRecord,
        meta: {title: '愚你同乐'}
      },
      {
        path: 'exchange',
        name: 'FoolExchange',
        component: FoolExchange,
        meta: {title: '愚你同乐'}
      },
      {
        path: 'success',
        name: 'FoolSuccess',
        component: FoolSuccess,
        meta: {title: '愚你同乐'}
      },
      {
        path: 'answer/:number',
        name: 'FoolAnswer',
        component: FoolAnswer,
        meta: {title: '愚你同乐'}
      },
      {
        path: 'answer-page/:number',
        name: 'FoolAnswerPage',
        component: FoolAnswerPage,
        meta: {title: '愚你同乐'}
      },
      {
        path: 'tacit/:number',
        name: 'FoolTacit',
        component: FoolTacit,
        meta: {title: '愚你同乐'}
      }]
  },
  {
    path: '/activity/time-limit-rebate',
    name: 'TimeLimitRebate',
    component: TimeLimitRebate,
    meta: {title: '限时返利200%'}
  },
  {
    path: '/register-agree',
    name: 'RegisterAgree',
    component: RegisterAgree,
    meta: {title: '注册服务协议'}
  },
  {
    path: '/assignment-agree',
    name: 'AssignmentAgree',
    component: AssignmentAgree,
    meta: {title: '债权转让协议'}
  },
  {
    path: '/investment-agree',
    name: 'InvestmentAgree',
    component: InvestmentAgree,
    meta: {title: '出借风险提示和禁止性行为告知书'}
  },
  {
    path: '/automatic-tender-authorization',
    name: 'AutomaticTenderAuthorization',
    component: AutomaticTenderAuthorization,
    meta: { title: '自动投标授权委托书' }
  },
  {
    path: '/service-agree/:number/:status',
    name: 'ServiceAgree',
    component: ServiceAgree
  },
  {
    path: '/assignment-question',
    name: 'AssignmentQuestion',
    component: AssignmentQuestion,
    meta: {title: '常见问题'}
  },
  {
    path: '/bank-custody',
    name: 'BankCustody',
    component: BankCustody,
    meta: {title: '银行存管介绍'}
  },
  {
    path: '/safe',
    name: 'Safe',
    component: Safe,
    meta: {title: '安全体系'}
  },
  {
    path: '/bind-wechat',
    name: 'BindWechat',
    component: BindWechat,
    meta: {title: '绑定微信有钱领'}
  },
  {
    path: '/news',
    name: 'News',
    component: News,
    children: [
      {
        path: 'report1',
        name: 'Report1',
        component: Report1,
        meta: {title: '宏财网合规经营练内功'}
      },
      {
        path: 'report2',
        name: 'Report2',
        component: Report2,
        meta: {title: '宏财网CEO王斌首谈经验'}
      },
      {
        path: 'report3',
        name: 'Report3',
        component: Report3,
        meta: {title: '媒体报道'}
      },
      {
        path: 'report4',
        name: 'Report4',
        component: Report4,
        meta: {title: '媒体报道'}
      },
      {
        path: 'report5',
        name: 'Report5',
        component: Report5,
        meta: {title: '媒体报道'}
      },
      {
        path: 'report/:id',
        name: 'Report',
        component: Report,
        meta: {title: '媒体报道'}
      }
    ]
  },
  {
    path: '/events',
    name: 'Events',
    component: Events,
    meta: {title: '宏财大事件'}
  },
  {
    path: '/risk-education',
    name: 'RiskEducation',
    component: RiskEducation,
    meta: {title: '风险安全教育'}
  },
  {
    path: '/activity/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/activity/register-success',
    name: 'RegisterSuccess',
    component: RegisterSuccess
  },
  {
    path: '/wandu-register',
    name: 'WanduRegister',
    component: WanduRegister
  },
  {
    path: '/wandu-success',
    name: 'WanduSuccess',
    component: WanduSuccess
  },
  {
    path: '/loan-management-info',
    name: 'LoanManagement',
    component: LoanManagement,
    meta: {title: '贷后管理信息'}
  },
  {
    path: '/operating-report-2017',
    name: 'operatingReport2017',
    component: operatingReport2017,
    meta: {title: '2017年运营年报'}
  },
  {
    path: '/operating-report-2016',
    name: 'operatingReport2016',
    component: operatingReport2016,
    meta: {title: '2016年运营年报'}
  },
  {
    path: '/auditPDF',
    name: 'AuditPDF',
    component: AuditPDF,
    meta: {title: '2017年度财务审计报告'}
  },
  {
    path: '/qrcode',
    name: 'QRcode',
    component: QRcode
  },
  {
    path: '/updates',
    name: 'Updates',
    component: Updates,
    meta: {title: '发现新版本'}
  },
  {
    path: '/user-center/bean-explain',
    name: 'BeanExplain',
    component: BeanExplain,
    meta: {title: '宏豆小百科'}
  },
  {
    path: '/user-center/bean-detail',
    name: 'BeanDetail',
    component: BeanDetail,
    meta: {title: '宏豆明细'}
  },
  {
    path: '/bean',
    name: 'Bean',
    component: Bean,
    children: [
      {
        path: '',
        name: 'BeanMall',
        component: BeanMall,
        meta: {title: '宏豆商城'}
      },
      {
        path: 'commodity/:goodsNumber',
        name: 'BeanCommodity',
        component: BeanCommodity
      },
      {
        path: 'exchange/:status',
        name: 'BeanExchange',
        component: BeanExchange
      },
      {
        path: 'exchange-record',
        name: 'BeanRecord',
        component: BeanRecord,
        meta: {title: '兑换记录'}
      },
      {
        path: 'exchange-detail/:number',
        name: 'exchangeDetail',
        component: exchangeDetail,
        meta: {title: '兑换详情'}
      }
    ]
  },
  {
    path: '/:page',
    name: 'Rouse1',
    component: Rouse,
    meta: {title: '宏财网'}
  },
  {
    path: '/:page/:type',
    name: 'Rouse',
    component: Rouse,
    meta: {title: '宏财网'}
  },
  {
    path: '*',
    redirect: {name: 'Home'}
  }
]
const router = new Router({
  hashbang: true, // 将路径格式化为#!开头
  history: true, // use history=false when testing
  mode: 'history',
  base: __dirname,
  linkActiveClass: 'v-link-active',
  routes // （缩写）相当于 routes: routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title === undefined) {
    document.title = '宏财网'
  } else {
    document.title = to.meta.title
  }
  next()
})
export default router
