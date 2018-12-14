<template>
  <div id="accordion" class="assignmentList-details">
    <div class="content">
      <div class="example column">
        <div class="txt-left fl">1.如何进行债权转让？</div>
        <div class="txt-right fr">
          <i class="angle-down"></i>
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
      <div class="example column">
        <div class="txt-left fl">2.债权转让的手续费如何收取？</div>
        <div class="txt-right fr">
          <i class="angle-down fa fa-angle-down"></i>
        </div>
      </div>
      <div class="submenu">
        <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">手续费=转让本金*1%，单笔转让的手续费最低为3元。<br></span>
      </div>
    </div>
    <div class="content">
      <div class="example column">
        <div class="txt-left fl">3.使用过优惠券的项目，如何进行债权转让？</div>
        <div class="txt-right fr">
          <i class="angle-down fa fa-angle-down"></i>
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
      <div class="example column">
        <div class="txt-left fl">4.折让比例如何让理解？</div>
        <div class="txt-right fr">
          <i class="angle-down fa fa-angle-down"></i>
        </div>
      </div>
      <div class="submenu">
        <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
          您可以将持有债权打折出让，折让比例反映了折扣力度。折让比例=(债权价值-转让价格)/债权价值，其中债权价值=转让本金+当期已产生利息。
        </span>  
      </div>
    </div>
    <div class="content">
      <div class="example column">
        <div class="txt-left fl">5.转让收入如何让计算？</div>
        <div class="txt-right fr">
          <i class="angle-down fa fa-angle-down"></i>
        </div>
      </div>
      <div class="submenu">
        <span class="padding-l-1 ft-grey7 display-inb padding-b-1p2">
          转让收入=债权价值 *(1- 折让比例)-转让手续费-其他扣费。
        </span>  
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Assignment',
    created: function () {
      window.onload = function () {
        var links = document.getElementsByClassName('example')
        if (links) {
          for (var i = 0; i < links.length; i++) {
            links[i].addEventListener('click', dropDown, false)
          }
        }
      }
    }
  }
  function dropDown () {
    var $this = this
    var $next = this.nextElementSibling
    if ($next.style.display === 'block') {
      $next.style.display = 'none'
      $this.parentNode.style.backgroundColor = ''
      $this.style.backgroundColor = ''
      $this.style.borderBottom = '1px solid #eee'
      $this.lastChild.firstChild.className = 'angle-down'
    } else {
      $next.style.display = 'block'
      $this.parentNode.style.backgroundColor = '#f8f9fd'
      $this.style.border = 'none'
      $this.lastChild.firstChild.className = 'angle-up'
      var content = sibling($this.parentNode)
      for (var c = 0; c < content.length; c++) {
        content[c].style.backgroundColor = ''
        content[c].firstChild.style.borderBottom = '1px solid #eee'
        content[c].lastChild.style.display = 'none'
        content[c].firstChild.lastChild.firstChild.className = 'angle-down'
      }
    }
  }
  function sibling (elem) {
    var r = []
    var n = elem.parentNode.firstChild
    for (; n; n = n.nextSibling) {
      if (n.nodeType === 1 && n !== elem) {
        r.push(n)
      }
    }
    return r
  }
</script>

<style scoped>
  .content{
    overflow:hidden;
    padding: 0 .36rem;
    /*background-color:#fff;*/
    /*background: rgb(248, 249, 253)*/
  }
  .column{
    font-size: .28rem;
    border-bottom: 1px solid #eee;
    height: 1rem;
    line-height: 1rem;
    margin-left: 0;
    overflow: hidden;
  }
  .column div.fl {
    font-size: .22rem;
  }
  .submenu {
    text-align: left;
    display: none;
  }
  .submenu span {
    text-align: justify;
    color: #999;
    padding: 0rem 0 .2rem .2rem;
  }
  .txt-left {   
    color: #666666;
  }
  .angle-down {
    background: url('../images/user-center/angle-down.png') no-repeat center .4rem;
    background-size: contain;
    display: block;
    width: .2rem;
    height: 1rem;
  }
  .angle-up {
    background: url('../images/user-center/angle-up.png') no-repeat center .4rem;
    background-size: contain;
    display: block;
    width: .2rem;
    height: 1rem;
  }
</style>
