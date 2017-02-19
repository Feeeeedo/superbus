<template>
	<div class="abstract main-content">
    <div class="title-tab-container">
      <span class="title-tab">哈哈哈</span>
      <div class="bottom-line"></div>
    </div>
    <div class="generate">
      <div class="generate-box">
        <a class="generate-item">
          <span class="tap_inner">                    
            <i class="icon_index_tap"></i>
            <em class="number">0</em>
            <strong class="generate-title">新消息</strong>
          </span>
        </a>
      </div>
      <div class="generate-box">
        <a class="generate-item">
          <span class="tap_inner">                    
            <i class="icon_index_tap"></i>
            <em class="number">0</em>
            <strong class="generate-title">新消息</strong>
          </span>
        </a>
      </div>      
      <div class="generate-box">
        <a class="generate-item">
          <span class="tap_inner">                    
            <i class="icon_index_tap"></i>
            <em class="number">0</em>
            <strong class="generate-title">新消息</strong>
          </span>
        </a>
      </div>
    </div>
    <div class="generate no-margin">
      <div class="generate-box">
        <a class="generate-item">
          <span class="tap_inner">                    
            <i class="icon_index_tap"></i>
            <em class="number">0</em>
            <strong class="generate-title">新消息</strong>
          </span>
        </a>
      </div>
      <div class="generate-box">
        <a class="generate-item">
          <span class="tap_inner">                    
            <i class="icon_index_tap"></i>
            <em class="number">0</em>
            <strong class="generate-title">新消息</strong>
          </span>
        </a>
      </div>      
      <div class="generate-box">
        <a class="generate-item">
          <span class="tap_inner">                    
            <i class="icon_index_tap"></i>
            <em class="number">0</em>
            <strong class="generate-title">新消息</strong>
          </span>
        </a>
      </div>
    </div>
    <div class="mp-news-area">
      <div class="title-bar">
        <h3>系统公告</h3>
      </div>
      <ul class="mp-news-list">
        <li class="mp-news-item">
          <a href="/cgi-bin/announce?action=getannouncement&amp;key=1483021481&amp;version=9&amp;lang=zh_CN" target="_blank">
            <strong>微信公众平台上线小程序二维码<i class="icon_common new"></i></strong>
            <span class="read_more">2016-12-30</span>
          </a>
        </li>
        <li class="mp-news-item">
          <a href="/cgi-bin/announce?action=getannouncement&amp;key=1483021481&amp;version=9&amp;lang=zh_CN" target="_blank">
            <strong>微信公众平台上线小程序二维码<i class="icon_common new"></i></strong>
            <span class="read_more">2016-12-30</span>
          </a>
        </li>
        <li class="mp-news-item">
          <a href="/cgi-bin/announce?action=getannouncement&amp;key=1483021481&amp;version=9&amp;lang=zh_CN" target="_blank">
            <strong>微信公众平台上线小程序二维码<i class="icon_common new"></i></strong>
            <span class="read_more">2016-12-30</span>
          </a>
        </li>
        <li class="mp-news-item">
          <a href="/cgi-bin/announce?action=getannouncement&amp;key=1483021481&amp;version=9&amp;lang=zh_CN" target="_blank">
            <strong>微信公众平台上线小程序二维码<i class="icon_common new"></i></strong>
            <span class="read_more">2016-12-30</span>
          </a>
        </li>
        <li class="mp-news-item">
          <a href="/cgi-bin/announce?action=getannouncement&amp;key=1483021481&amp;version=9&amp;lang=zh_CN" target="_blank">
            <strong>微信公众平台上线小程序二维码<i class="icon_common new"></i></strong>
            <span class="read_more">2016-12-30</span>
          </a>
        </li>
        <li class="mp-news-item">
          <a href="/cgi-bin/announce?action=getannouncement&amp;key=1483021481&amp;version=9&amp;lang=zh_CN" target="_blank">
            <strong>微信公众平台上线小程序二维码<i class="icon_common new"></i></strong>
            <span class="read_more">2016-12-30</span>
          </a>
        </li>
        <li class="mp-news-item">
          <a href="/cgi-bin/announce?action=getannouncement&amp;key=1483021481&amp;version=9&amp;lang=zh_CN" target="_blank">
            <strong>微信公众平台上线小程序二维码<i class="icon_common new"></i></strong>
            <span class="read_more">2016-12-30</span>
          </a>
        </li>
        <li class="mp-news-item">
          <a href="/cgi-bin/announce?action=getannouncement&amp;key=1483021481&amp;version=9&amp;lang=zh_CN" target="_blank">
            <strong>微信公众平台上线小程序二维码<i class="icon_common new"></i></strong>
            <span class="read_more">2016-12-30</span>
          </a>
        </li>
      </ul>
    </div>
	</div>
</template>
<script>
export default {
  name: 'abstract',
  components: {},
  data () {
    return {
      aa: ['xxx', 'bbbb', 'cccc']
    }
  }
}
</script>

<style lang="scss">
.abstract {
  width: 100%;
  height: 100%;
  .generate {
    margin-top: 20px;
    width: 100%;
    height: 130px;
    display: flex;
    .generate-box {
      flex: 1;
      height: 100%;
      padding: 10px;
    }
    .generate-item {
      padding-top: 26px;
      padding-bottom: 26px;
      display: block;
      color: #fff;
      text-decoration: none;
      background-color: #5baee8;
      .tap_inner {
        font-size: 0px;
        text-align: -webkit-match-parent;
        text-align: center;
        display: block;
        i {
          font-style: italic;
          width: 34px;
          height: 34px;
          vertical-align: middle;
          display: inline-block;
          background: url('../../../assets/iconfonts/application.svg') 0 0 no-repeat;
          margin-top: 3px;
        }
        .number {
          margin-left: 5px;
          font-weight: 400;
          font-style: normal;
          vertical-align: middle;
          font-size: 35px;
          color: #fff;
        }
        .generate-title {
          display: block;
          font-weight: 400;
          font-style: normal;
          font-size: 16px;
          letter-spacing: 2px;
          margin-top: -10px;
        }
      }
    }
  }
  .mp-news-area {
    margin: 20px 10px;
    line-height: 40px;
    border-radius: 0;
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    background-color: #fff;
    border: 1px solid #e7e7eb;
    .title-bar {
      padding: 0 20px;
      background-color: #e7e8eb;
      border-bottom: 1px solid #e7e7eb;
      line-height: 40px;
      h3 {
        font-size: 14px;
        font-weight: 400;
        font-style: normal;
        line-height: 40px;
        margin: 0;
      }
    }
    .title-bar:after {
      content: "\200B";
      display: block;
      height: 0;
      clear: both;
    }
    .mp-news-list {
      .mp-news-item {
        position: relative;
        border-top: 1px solid #e7e7eb;
        font-size: 14px;
        a {
          display: block;
          padding-right: 10em;
          padding-left: 20px;
          color: #222;
          text-decoration: none;
          cursor: pointer;
          strong {
            display: block;
            font-weight: 400;
            font-style: normal;
            width: 52em;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            word-wrap: normal;
            i {
              font-style: italic;
            }
          }
          span {
            position: absolute;
            right: 20px;
            top: 0;
            color: #8d8d8d;
            text-decoration: none;
          }
        }
      }
      .mp-news-item:first-child {
        border-top-width: 0px;
      }
      .mp-news-item:hover {
        background-color: #e7e8eb;
      }
    }
  }
}
</style>
