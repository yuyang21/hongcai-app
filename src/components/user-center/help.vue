<template>
  <div class="help">
    <!-- 预计回款 -->
    <div v-if="type === '9'">
      <div class="content">
        <div class="column">
          <div class="fl">债权本金</div>
          <div class="fa-down-no txt-right fr">
          </div>
          <p class="fr">
             {{transferAmount || 0}}元
          </p>
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">本期待收利息</div>
          <div class="fa-down txt-right fr">
          </div>
          <p class="fr">
            {{profit | number}}元
          </p>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            本期待收利息是指该笔债权自本期计息日至今天所产生的待收利息：<br><br>
            债权本金*原项目年化利率*本期计息天数/365天<br>
            {{transferAmount || 0}} * {{project.annualEarnings || 0}}% * {{profitDate || 0}} / 365 = {{profit | number}}元<br><br> 
            如果该数值为负数，表示本期利息已经提前还款给您，此时债权转让需要扣除今日至本期还款日所产生的利息
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">折价转让支出</div>
          <div class="fa-down txt-right fr">
          </div>
          <p class="fr">
            {{transferReward | number}}元
          </p>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            折价转让支出，是指您为了尽快转出债权，而自愿给于受让人的折价：<br><br>
            （债权本金 + 当期已产生待收利息）* 折让比例<br>
            （{{transferAmount || 0}} + {{profit || 0 | number}}）* {{transferAnnul}}% = {{transferReward | number}}元
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">现金券奖励扣款</div>
          <div class="fa-down txt-right fr">
          </div>
          <p class="fr">
            {{deduction | number}}元
          </p>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            现金券奖励扣款是指宏财网按照您成功转出的债权金额等比例扣除您该笔出借所获得的现金券奖励：<br><br>
            现金券奖励 * 债权本金 / 初始出借总额<br>
            {{couponVal || 0}} * {{transferAmount || 0}} / {{creditAmount || 0}} = {{deduction | number}}元
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">债权转让手续费</div>
          <div class="fa-down txt-right fr">
          </div>
          <p class="fr">
            {{counterFee | number}}元
          </p>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            债权转让手续费是宏财网为您和受让人提供信息匹配和交易撮合所收取的费用，<br><br>
            手续费 = 转让本金 * 1%，手续费最低收取3元。<br>
            <span>{{transferAmount || 0}} * 1% = {{transferAmount / 100 | number}}元</span>
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">预计回款</div>
          <div class="fa-down txt-right fr">
          </div>
          <p class="fr">
            {{transferAmount + profit - counterFee - transferReward - deduction ? transferAmount + profit - counterFee - transferReward - deduction : 0 | number}}元
          </p>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            预计回款金额：债权本金 + 本期待收利息 - 折价转让支出 - 现金券奖励扣款 - 债权转让手续费<br><br>
            {{transferAmount || 0}} + {{profit | number}} - {{transferReward | number}} - {{ deduction | number}} - {{counterFee || 0}} = {{transferAmount + profit - counterFee - transferReward - deduction | number}}元
          </span>  
        </div>
      </div>
    </div>
    <!-- 理解宏财 -->
    <div v-if="type === '1'">
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">1.我们是谁？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">宏财网是国内领先的专注于中小微企业贷款需求的互联网金融信息服务平台，2016年获得A轮战略投资。自2014年成立以来，宏财网始终秉承“安全第一，信息透明，回报稳健，操作便捷”的理念，不断为融资双方提供优质的互联网金融服务。</span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">2.是否对接银行资金存管？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">根据银监会正式对外公布的《网络借贷资金存管业务指引》中要求，宏财网已于2017年6月正式上线海口联合农商银行资金存管系统。由银行对平台出借人与借款人资金存管账户进行管理和监督，对两者资金进行存管、划付、核算及监督，平台作为纯粹的信息中介参与到交易之中，全程不触碰资金，所有资金流动均在银行体系内进行，从而真正做到了平台与用户资金完全隔离，有效杜绝了平台支配和挪用用户资金的风险。</span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">3.银行资金存管之后有什么优势？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            1）资金安全隔离<br/>凡在宏财网出借的用户，均在存管银行设有独立存管账户，有效实现平台资金和用户资金隔离，由存管银行对资金进行管理与监督，平台无法触碰用户资金。<br><br>
            2）交易真实透明<br/>凡在宏财网出借的用户，需要单独设立交易密码保证账户安全，账户信息由存管银行管理。用户在宏财网进行出借时，银行划拨用户资金必须通过用户的授权操作，并对交易流程进行管理并记录资金流水，交易真实可查。<br><br>
            3）监管合规标准<br/>与海口联合农商银行开展资金存管，符合《网络借贷资金存管业务指引》规定，做到了合法合规，对于客户资金安全也更有保障，除此之外，客户的资金操作也更加透明、高效、便捷。<br>
          </span>  
        </div>
      </div>
    </div>
    <!-- 产品介绍 -->
    <div v-if="type === '2'">
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">1.出借项目的来源有哪些？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            宏财网凭借广泛的金融资源及项目方十多年积累的优质资产，打造了一个相对封闭的金融生态圈，主要由国信卓越信息咨询有限公司、北京青铜资产管理有限公司提供。精选小微产业金融、汽车金融及个人信用贷款等项目，提供方信息透明，知根知底。<br><br>
            未来我们也将接入更多类型的项目，以满足广大用户多样的出借需求。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">2.出借项目的类型有哪些？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            1）宏财精选：主要为180天以内(含180天)的中短期项目，灵活稳健，具有一定流动性。<br><br>
            2）宏财尊贵：主要为180天以上的中长期项目，回报更丰厚。<br><br>
            3）债权转让：为出借人提高资金流动性，回报稳健，期限更短。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">3.出借项目的安全等级是什么含义？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">宏财网对所有借款人进行风险等级评定，对借款项目安全等级分为4类，由高到低分别为A、B、C、D四个等级。不同风险等级具体含义请见下表：</span>  
          <ul class="table">
            <li v-for="item in risk">
              <p class="ft-bold">{{item.name}}</p>
              <p class="level" v-for="level in item.level">{{level}}</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!-- 投资相关 -->
    <div v-if="type === '3'">
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">1.项目最低出借金额是多少？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            所有项目均100元起出借，以100元为单位递增。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">2.利息如何计算？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
              还款方式为按月返息到期还本时：项目总利息=（借款本金×年化利率）×项目期限÷365；<br> 
              还款方式为按期返还等额本息时：项目总利息=每期还款额×借款期数-借款本金（其中每期还款额的计算公式详见具体项目）
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">3.出借后何时开始计息？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            用户在宏财网成功出借项目后，一般会在该项目募集满额放款后当天开始计息，并按月付息给出借用户。如项目于周五募集结束，则周日开始计息。
            同时宏财网出借用户还可根据项目的年化利率，享受募集期奖励福利，就算在项目募集期间也不失分毫！
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">4.何时确定项目回款时间？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            在项目募集期间，会根据预估项目募集时间，显示利息及本金预计回款日期；<br><br>
            当项目募集满额后，再根据满标日重新计算，显示利息及本金的回款日期；<br><br>
            出借用户会在预计回款日当天24:00前，收到回款，具体时间由借款人还款时间决定。如借款人于还款日之前提前还款，出借用户将会提前收到项目利息及本金回款，且按预计还款日正常计息，金额不受影响。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">5.如何进行债权转让？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            可进行债权转让的项目应同时满足以下条件：<br><br>
            1）该项目满标后，持有天数大于30天；<br>
            2）转让当天距离该笔项目到期回款日大于3天；<br>
            3）新手专享项目不可进行债权转让操作；<br>
            4）参与特定渠道奖励活动进行出借的项目不可进行债权转让。<br>
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">6.债权转让的手续费如何收取？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            手续费=转让本金*1%，单笔转让的手续费最低为3元。<br>
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">7.使用过优惠券的项目，如何进行债权转让？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            1）使用现金券的项目，会按照转让部分本金与项目本金等比例扣除已获返现；<br><br>
            2）使用加息券的项目，已经获得的额外加息奖励不进行扣除，受让人购买该笔债权转让项目时，将不再继续享受加息奖励。            
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">8.折让比例如何让理解？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            您可以将持有债权打折出让，折让比例反映了折扣力度。折让比例=(债权价值-转让价格)/债权价值，其中债权价值=转让本金+当期已产生利息。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">9.转让收入如何让计算？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            转让收入=债权价值 *(1- 折让比例)-转让手续费-其他扣费。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">10.购买债权转让的实际支付金额为什么会大于认购金额？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            原债权人当期已产生的利息需要由您先行垫付，这部分资金会在下个还款日归还给您。<br>
            实际支付金额=（转让本金+当期已产生待收利息）*（1-折让比例）<br>
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">11.购买债权转让项目后，已收利息为什么显示负值？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            您购买债权转让项目时，需要先行垫付转让人当期已产生的利息，所以显示已收利息为负数，该笔利息会在下个回款日支付给您。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">12.什么是自动投标功能？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            出借人根据自己的风险偏好和习惯设置年化利率、项目期限、出借金额等出借条件，并授权平台在有符合条件的借款项目出现时，由系统自动帮助其进行投标操作。
          </span>  
        </div>
      </div>
    </div>
    <!-- 注册认证 -->
    <div v-if="type === '4'">
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">1.如何开通银行存管账户？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            当您注册成功之后，在我的页面点击提示前往开通存管账户，自动跳转至海口联合农商银行页面，按照页面提示输入正确的信息后，即可开通银行存管账户，进行后续充值、提现等操作。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">2.银行存管开通失败的原因有哪些？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            以下原因可能导致开通银行存管失败：<br><br>
            1）曾经改过名字；<br>
            2）名字中带有繁体字；<br>
            3）有过户籍变动；<br>
            4）军人转业、复员更换的身份证；<br>
            5）港澳台用户请联系客服协助开通；<br>
            6）18周岁以下用户；<br>
            7）银行卡非您账户同名同证件的卡片；<br>
            由于银行存管系统与公安系统联网，将需要您提供实名身份信息，如实名身份信息不一致会导致无法通过，非以上原因开通未通过，请您联系客服为您查询确认。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">3.如何修改支付/登录密码？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            打开【我的】页面，点击左上角【设置】，进入设置页面后选择【密码管理】<br><br>
            修改登录密码：选择【登录密码】>>【去修改】>>进行登录密码修改<br><br>
            修改支付密码：点击【支付密码】>>【修改交易密码】页面>>选择是否记得原交易密码>>按提示进行支付密码修改
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">4.如何处理登录密码输入错误次数超限？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            如您忘记登录密码或者已经连续输错5次，账号将被锁定，需要点击忘记密码重新设置新密码。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">5.出借或提现时，忘记支付密码怎么办？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            点击出借或提现，进入海口联合农商银行存管页面，在输入安全支付密码框下，点击【忘记密码】，输入绑定的银行卡号及手机验证码即可重置密码。              
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">6.注册或登录时收不到验证码怎么办？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            如果您在注册或登录过程中，点击“获取验证码”按钮后手机一直收不到验证码，建议等待60秒，并查看是否被手机内安全软件拦截，或重启下您的手机，排除手机自身原因后，再次获取验证码。如果依旧收不到验证码，您可以拨打宏财网客服电话400-990-7626进行咨询。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">7.一个手机号是否可以注册多个账户？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            在宏财网平台，手机号，身份证号都具有唯一性，已注册的手机号及已实名认证的身份信息只能对应一个宏财网账户。
          </span>  
        </div>
      </div>
    </div>
    <!-- 账户管理 -->
    <div v-if="type === '5'">
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">1.如何绑定银行卡？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            银行卡的设置是在您完成开通银行存管系统时一并设置的。在【我的】页面，点击左上角【设置】，进入后选择【银行卡】，可进行解绑、更换银行卡操作。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">2.如何更换/解绑银行卡？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            如您绑定的银行卡出现问题或需要更换，请先解绑后重新进行绑定。
            解绑银行卡的具体操作如下：<br><br>
            1）当前绑定银行卡用于平台充值及提现，为保证出借人资金安全，目前一个账号只可同时绑定一张银行卡;<br><br>
            2）解绑银行卡：当账户总资产≤2元时，可直接解绑当前银行卡，如遇卡片丢失等不可抗拒因素时，需要联系客服，提供手持身份证等文件进行处理。<br>
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">3.一共可以绑定几张银行卡？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            为了保障您的账户安全，目前宏财网一个账户只能绑定一张银行卡，请您根据个人需要选择银行卡进行绑定，建议您提前了解各银行限额要求。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">4.绑定银行卡支持哪些银行？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            宏财网目前支持的银行有：<br>
            农业银行、中国银行、中信银行、招商银行、交通银行、光大银行、、兴业银行、广发银行、华夏银行、北京银行、工商银行、民生银行、建设银行、邮政银行、浦发银行、平安银行。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">5.绑定银行卡时遇到问题怎么办？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            1）您好，如果您在支付过程中看到提示信息“卡信息或手机号不一致”，您需要确认您在绑定银行卡的流程中输入的手机号信息。预留手机号是您在银行开卡时已校验通过的手机号:<br>
            a.如果您不确定手机号码，需要您联系该银行卡开户行进行确认。<br>
            b.如果您已确认预留手机号码，需要您重新绑定银行卡。<br><br>
            2）名字中含有生僻字、繁体字，改过名字、做过户籍变更、复原换的身份证，这些因素也可能会失败 ，如果您是现役军人、或者仅有护照号，则暂时无法完成开户。<br><br>
            3）收不到短信验证码<br>
            请先检查以下情况排除自身原因，如果依旧收不到验证码，您可以拨打宏财网客服电话： 400-990-7626进行咨询<br>
            a.是否安装短信拦截或者过滤软件<br>
            b.是否能够正常接收短信（信号问题，欠费停机，关机等）；<br>
            c.短信收发过程中可能会存在延迟，请耐心等待，短信在30分钟内均有效
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">6.如何修改平台注册手机号</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            在【我的】页面，点击左上角【设置】，进入设置页面后点击【手机号】，输入正确的图形验证码、短信验证码，按照流程提示完成操作即可更换新的注册手机号。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">7.如何更换银行预留手机号</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            在【我的】页面，点击左上角【设置】，进入设置页面后点击【银行卡】进入银行卡管理页面，点击修改银行卡预留手机号，按照流程提示完成操作即可更换银行卡预留手机号。
          </span>  
        </div>
      </div>
    </div>
    <!-- 充值提现 -->
    <div v-if="type === '6'">
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">1.什么原因会导致充值失败？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            1）绑定的银行卡尚未开通网上支付功能，请按照各银行开通方式及时开通即可；<br><br>
            2）绑定的银行卡已过期、作废、挂失，请前往银行柜台重新办理；<br><br>
            3）绑定的银行卡内余额不足，请及时充值；<br><br>
            4）您输入的金额超过了银行限额，您可拨打银行客服电话咨询如何提高支付限额，也可降低输入金额。<br><br>
            如非上述情况造成，请联系客服为您查询处理。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">2.银行卡已扣款，但为什么充值金额没有到账？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            因不同银行操作划账时间不同，可能导致实际到账时间有延迟。如果没有到账，建议用户过半个小时再查看余额；如果仍未到账，请您联系我们，提供订单号或手机号，为您查询对应的支付请求流水号，并为您核实原因。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">3.申请提现后多久能到账？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            一般提现T+1即可到账，如遇双休日、国家法定节假日，则到账日期顺延，根据不同银行的处理速度，最晚T+2到账。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">4.提现有手续费吗？提现次数和金额有什么限制？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            1）每笔提现由第三方支付公司收取2元手续费(提现金额不限)；<br>
            2）单日提现次数不限，提现金额无上限。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">5.什么原因会导致提现失败？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            以下原因导致提现失败：<br><br>
            1）银行卡所属银行的服务出现问题，若您提现的银行卡挂失，注销等状态异常，会造成提现失败。<br><br>
            2）第三方支付服务出现问题；<br>
            如遇到以上情况，我们会在收到银行转账失败的通知后解除提现资金冻结状态，并在两个工作日内将资金回到您的账户余额，请不必担心资金安全，同时也可以拨打宏财网客服电话：400-990-7626进行解决。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">6.充值有没有限额？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            App端、微信端：根据不同银行限额不同，具体情况可前往银行卡管理页面，点击右上角【限额】进行查询；<br><br>
            电脑端：可选择网银支付，平台不设限额，但需留意银行卡的网银支付限额。
          </span>  
        </div>
      </div>
    </div>
    <!-- 用户福利 -->
    <div v-if="type === '7'">
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">1.什么是特权本金？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            特权本金是平台向用户提供的一种虚拟资金，用于回馈奖励等活动。其本身不可提现或作为出借资金，但享受8%年化利率。根据不同的活动规则，特权本金具有不同的计息时长，每日计息产生的奖励直接发放至用户可用余额，可用于提现或作为出借资金。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">2.什么是加息券？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            加息券是平台发布的一种奖励优惠券，使用加息券进行出借时，根据使用条件，单笔出借金额达到规定额度即可享受相应的额外加息奖励。出借成功且项目募集完成后，加息券开始生效，产生的额外奖励将根据项目回款时间按月发放，可用于提现或作为出借资金。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">3.什么是现金券？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            现金券是平台发布的一种奖励优惠券，使用现金券进行出借时，根据使用条件，单笔出借金额达到规定额度即可获得相应面值的现金奖励。出借成功后，奖励将直接发放至账户余额，可用于提现或作为出借资金。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">4.如何获得现金券/加息券？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            1）每日抽奖：每人每天享有1次免费抽奖的机会，有机会抽取当日加息、随机返现、特权本金、优惠券等奖励，分享好友一起参与，还可再获一次抽奖机会；<br>
            2）平台活动：优惠券可通过参与平台各项活动获得。
          </span>  
        </div>
      </div>
      <div class="content">
        <div class="column" @click="showOrHide($event)">
          <div class="fl">5.如何才能进入宏财网VIP群？进群后享受哪些特权？</div>
          <div class="fa-down txt-right fr">
          </div>
        </div>
        <div class="submenu">
          <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
            只要您账户的待收本金满五万元，即可被邀请入群<br>
            进入宏财网VIP群的用户享有以下特权：<br><br>
            1）平台最新活动预告<br>
            2）全天候为您答疑解惑，一对一优质贴心服务！<br>
            3）公司发展动态即时播报，第一时间获悉重磅消息！<br>
            4）针对VIP客户量身定制专属现金券、加息券、赚足每一分钱<br>
            5）参与产品调研、设计让我们一起把宏财做得更好<br>
            6）尾单包圆特权本金奖励
          </span>  
        </div>
      </div>
    </div>
    <!-- 客户服务 -->
    <div v-if="type === '8'">
      <div class="content">
        <div class="column">
          <div class="fl">1.客服电话：400-990-7626</div>
        </div>
      </div>
      <div class="content">
        <div class="column">
          <div class="fl">2.客服邮箱：hckf@hongcai.com</div>
        </div>
      </div>
      <div class="content">
        <div class="column">
          <div class="fl">3.客服微信：hchellohello</div>
        </div>
      </div>
      <div class="content">
        <div class="column">
          <div class="fl">4.服务时间：工作日9:00-18:00</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  var submenu = document.getElementsByClassName('submenu')
  import {dateUtil} from '../../service/Utils'
  export default {
    name: 'help',
    data () {
      return {
        type: '1',
        titles: ['了解宏财', '项目介绍', '出借相关', '注册登录', '账户管理', '充值提现', '用户福利', '客户服务', '预计回款'],
        bankLimit: [],
        number: '',
        projectNum: '',
        project: {},
        rule: {},
        orderAmount: 0,
        transferAmount: 0,
        profit: 0,
        currentDate: 0,
        profitDate: 0,
        transferReward: 0,
        remainDay: 0,
        transferAnnul: 0,
        deduction: 0,
        creditAmount: 0,
        counterFee: 0,
        couponVal: 0,
        creditCreateTime: 0,
        risk: [
          {
            name: '产品安全等级',
            level: ['A级', 'B级', 'C级', 'D级']
          },
          {
            name: '安全等级含义',
            level: ['优质项目，征信良好，收入稳定，资产实力强，还款能力强。', '征信良好，收入稳定，资产实力尚可，还款能力较强。 ', '征信良好，收入相对稳定，资产能覆盖债务，营收有小幅度的波动，有一定的还款能力。', '征信有过逾期，但尚未达不良程度，或负债相对较高但资产能够覆盖债务，还款能力可能有一定幅度的波动 。']
          }
        ]
      }
    },
    props: ['token'],
    watch: {
      token: function (val) {
        if (val && val !== '') {
          this.getAssignmentRule()
        }
      }
    },
    created: function () {
      this.getServeTime()
      this.type = this.$route.params.type.toString()
      this.number = this.$route.query.number
      this.transferAmount = Number(this.$route.query.amount)
      this.transferAnnul = Number(this.$route.query.annualEarnings)
      // this.currentDate = new Date().getTime()
      document.title = this.titles[Number(this.type - 1)]
      if (this.type === '6') {
        this.getBankLimit()
      }
      if (this.type === '9') {
        if (this.token && this.token !== '') {
          this.getAssignmentRule()
        }
      }
    },
    methods: {
      showContent: function (e, content, submenu) {
        for (var i = 0; i < submenu.length; i++) {
          submenu[i].style.display = 'none'
          submenu[i].parentElement.classList.remove('open')
          if (this.type === '9') {
            submenu[i].previousElementSibling.lastChild.previousElementSibling.classList.remove('rotate')
          } else {
            submenu[i].previousElementSibling.lastChild.classList.remove('rotate')
          }
        }
        content.parentElement.lastChild.style.display = 'block'
        content.parentElement.className += ' open'
        if (this.type === '9') {
          content.lastChild.previousElementSibling.className += ' rotate'
        } else {
          content.lastChild.className += ' rotate'
        }
      },
      hideContent: function (e, content, submenu) {
        content.parentElement.lastChild.style.display = 'none'
        content.parentElement.classList.remove('open')
        if (this.type === '9') {
          content.lastChild.previousElementSibling.classList.remove('rotate')
        } else {
          content.lastChild.classList.remove('rotate')
        }
      },
      showOrHide: function (e) {
        var content = e.target
        if (content.className === 'content') {
          content = e.target.firstChild
        }
        if (content.className !== 'content' && content.className !== 'column') {
          content = e.target.parentElement
        }
        if (content.parentElement.lastChild.style.display !== 'block') {
          return this.showContent(e, content, submenu)
        } else {
          return this.hideContent(e, content, submenu)
        }
      },
      getBankLimit: function () {
        var that = this
        that.$http({
          url: '/hongcai/rest/bankcard/rechargeBankLimits'
        })
        .then(function (res) {
          that.bankLimit = res.data
        })
      },
      getAssignmentRule: function () {
        this.$http({
          url: '/hongcai/rest/assignments/assignmentRule' + '?token=' + this.token
        }).then((res) => {
          this.rule = res.data
          this.getCreditDetail()
        })
      },
      getServeTime () {
        var that = this
        that.$http('/hongcai/rest/systems/serverTime').then(function (res) {
          if (res.data && res.data.ret !== -1) {
            that.currentDate = res.data.time
          }
        })
      },
      getCreditDetail: function () {
        this.$http({
          method: 'get',
          url: '/hongcai/rest/creditRights/' + this.number + '/creditDetail' + '?token=' + this.token
        }).then((response) => {
          this.project = response.data.project
          this.creditAmount = response.data.creditRight.amount
          this.creditCreateTime = response.data.creditRight.createTime
          // 待收利息天数
          this.profitDate = dateUtil.intervalDays(this.currentDate, response.data.projectBill.lastRepaymentTime) * (this.currentDate > response.data.projectBill.lastRepaymentTime ? 1 : -1)
          // 剩余期限
          this.remainDay = dateUtil.intervalDays(this.project.repaymentDate, this.currentDate)
          // 待收未收利息
          this.profit = this.transferAmount * this.project.annualEarnings * this.profitDate / 36500
          // 转让奖金
          this.transferReward = (this.transferAmount + this.profit) * this.transferAnnul / 100
          // 现金券金额
          this.couponVal = response.data.increaseRateCoupon && response.data.increaseRateCoupon.type === 2 ? response.data.increaseRateCoupon.value : 0
          // 现金券奖励扣款
          this.deduction = this.couponVal * (this.transferAmount / this.creditAmount)
          // 现规则：手续费 = 转让本金 * 1%，单笔转让的手续费最低为3元。
          this.counterFee = this.transferAmount * this.rule.lessThanOrEqualBorderDayFee / 100 * this.rule.discountFeeRate > this.rule.minFee ? this.transferAmount * this.rule.lessThanOrEqualBorderDayFee / 100 * this.rule.discountFeeRate : this.rule.minFee
          // 手续费 原规则：该笔债权持有时间 < 30天，手续费 = 转让本金 * 1%，持有时间 ≥ 30天，手续费 = 转让本金 * 0.5%，单笔转让的手续费最低为3元。
          // if (dateUtil.intervalDays(this.currentDate, this.creditCreateTime) < this.rule.borderDay) {
          //   this.counterFee = this.transferAmount * this.rule.lessThanOrEqualBorderDayFee / 100 * this.rule.discountFeeRate > this.rule.minFee ? this.transferAmount * this.rule.lessThanOrEqualBorderDayFee / 100 * this.rule.discountFeeRate : this.rule.minFee
          // } else {
          //   this.counterFee = this.transferAmount * this.rule.greaterThanBorderDayFee / 100 * this.rule.discountFeeRate > this.rule.minFee ? this.transferAmount * this.rule.greaterThanBorderDayFee / 100 * this.rule.discountFeeRate : this.rule.minFee
          // }
        })
      }
    }
  }
</script>

<style scoped>
  p.fr {
    margin-right: .05rem;
    font-size: .28rem;
    color: #f66000;
  }
  .help .content {
    overflow: hidden;
    padding: 0 .36rem;
    background-color: #fff;
  }
  .help .content.open {
    background-color: #f8f9fd !important;
    box-sizing: border-box;
  }
  .help .content.open .column {
    background-color: #f8f9fd !important;
    border: none!important;
  }
  .help .content .column {
    border-bottom: 1px solid #eee;
    /* padding: .2rem 0rem; */
    height: 1rem;
    line-height: 1rem;
    background-color: #fff;
    margin-left: 0;
    width: 100%;
    float: left;
    color: #666;
  }
  .help .content .column div.fl {
    font-size: .22rem;
  }
  .column .rotate {
    transform: rotateZ(0deg);
  }
  .submenu {
    display: none;
    text-align: justify;
    padding-left: .2rem;
    padding-bottom: .25rem;
    color: #999;
  }
  .banklimit-list ul {
    margin-top: .2rem;
    border: 1px solid #eee;
    padding: .2rem .3rem;
  }
  .banklimit-list li {
    height: 0.6rem;
    line-height: 0.6rem;
    border-bottom: 1px dashed #ddd;
  }
  .banklimit-list li .bank-name {
    width: 30%;
    text-align: center;
  }
  .banklimit-list li .limit {
    width: 70%;
    text-align: center;
  }
  .border-none {
    border-bottom: none !important;
  }
  .fa-down, .fa-down-no {
    background: url('../../images/user-center/angle-down.png') no-repeat center .4rem;
    background-size: contain;
    display: block;
    width: .2rem;
    height: 1rem;
    padding-top: .25rem;
    transform: rotateZ(-90deg);
    -webkit-transition: all .2s ease-in;
    -moz-transition: all .2s ease-in;
    transition: all .2s ease-in;
  }
  .fa-down-no {
    background: rgba(0,0,0,0);
  }

  .table {
    border-top: .005rem solid #999;
    border-left: .005rem solid #999;
    margin-top: .25rem;
    color: #999;
    overflow: hidden;
    width: 100%;
  }
  .table li {
    float: left;
  }
  .table li:first-child {
    width: 30%;
  }
  .table li:last-child {
    width: 70%;
  }
  .table li:first-child p.level {
    text-align: center;
  }
  .table li p {
    width: 100%;
    border-right: .005rem solid #999;
    border-bottom: .005rem solid #999;
    padding: .1rem .12rem;
    font-size: .22rem;
  }
  .table li p.level {
    height: 1.15rem;
    line-height: 1.4;
    font-size: .21rem;
    display: flex;
    align-items:center;
    justify-content:center;
  }
</style> 
