window.onload = function () {
  const THEME_CSS_MAP = {
    /* 字体 */
    "--dandelion-font-family":
      "pingfang sc, -apple-system, helvetica neue, helvetica, arial, hiragino sans gb, source han sans, noto sans cjk sc, microsoft yahei, sans-serif",

    /* 特殊标题 */
    "--dandelion-font-size-display-1": "28px",
    "--dandelion-font-size-display-2": "20px",

    /* 标题 */
    "--dandelion-font-size-title-1": "17px",
    "--dandelion-font-size-title-2": "16px",
    "--dandelion-font-size-title-3": "15px",
    "--dandelion-font-size-title-4": "14px",

    /* 内容 */
    "--dandelion-font-size-body-1": "14px",
    "--dandelion-font-size-body-2": "13px",
    "--dandelion-font-size-body-3": "12px",
    "--dandelion-font-size-body-4": "11px",

    /* 字体粗细 */
    "--dandelion-font-weight-1": "500",
    "--dandelion-font-weight-2": "400",

    /* 主色 */
    "--dandelion-color-primary": "#FF3627",
    "--dandelion-background-color-primary": "#FF3627",

    /* 主色-渐变 */
    "--dandelion-color-primary-gradient":
      "linear-gradient(315deg,#ff3627 0%, #ff664f 100%)",

    /* 辅助色 */
    "--dandelion-color-secondary": "#E3A96D",

    /* 通知-底色 */
    "--dandelion-color-notice-background": "#E0EAF8",

    /* 通知-文本色 */
    "--dandelion-color-notice-text": "#0662DF",

    /* 提示-底色 */
    "--dandelion-color-tips-background": "#FFF5E8",

    /* 提示-文本色 */
    "--dandelion-color-tips-text": "#FF9D00",

    /* 警告-底色 */
    "--dandelion-color-warning-background": "#FDE6E4",

    /* 警告文本色 */
    "--dandelion-color-warning-text": "#F44522",

    /* 中性色 */
    "--dandelion-color-grey-1": "#333333",
    "--dandelion-color-grey-2": "#666666",
    "--dandelion-color-grey-3": "#999999",
    "--dandelion-color-grey-4": "#C1C1C1",
    "--dandelion-color-grey-5": "#F6F6F6",
    "--dandelion-color-grey-6": "#F3F3F4",
    "--dandelion-color-grey-7": "#F7F7F8",
    "--dandelion-color-grey-8": "#FFFFFF",

    /* 中性色-背景 */
    "--dandelion-background-grey-1": "#333333",
    "--dandelion-background-grey-2": "#666666",
    "--dandelion-background-grey-3": "#999999",
    "--dandelion-background-grey-4": "#C1C1C1",
    "--dandelion-background-grey-5": "#F6F6F6",
    "--dandelion-background-grey-6": "#F3F3F4",
    "--dandelion-background-grey-7": "#F7F7F8",
    "--dandelion-background-grey-8": "#FFFFFF",

    /* 圆角 */
    "--dandelion-border-radius-1": "16px",
    "--dandelion-border-radius-2": "12px",
    "--dandelion-border-radius-3": "8px",
    "--dandelion-border-radius-4": "2px",
  };

  const FILTER_FILEDS = ["font-family"];

  class ChromePluginLanhuapp {
    constructor() {
      this.instance = null;
      this.codeBoxInnerHtml = null;
      this.codeDetailDom = null;
      this.subtitleDom = null;
      this.styleStr =
        "padding: 0 19px; display: inline-block; border-radius: 16px; background: #2878ff; cursor: pointer; color: #fff; line-height: 32px; position: relative; top: 4px; font-weight: 500; float: right; margin-right: 40px;";
    }

    static getInstance = () => {
      if (!this.instance) {
        this.instance = new ChromePluginLanhuapp();
      }
      return this.instance;
    };

    createNode = (eleType, eleText) => {
      const ele = document.createElement(eleType);
      ele.innerHTML = eleText;
      return ele;
    };

    getInnerHtml = (ele) => {
      const node = document.querySelector(ele);
      if (!node) {
        return;
      }
      return node.innerHTML;
    };

    handleTransBtn = () => {
      const transCodeBtn = this.subtitleDom.querySelector("#trans_code");
      this.subtitleDom.removeChild(transCodeBtn);
      this.subtitleDom.appendChild(this.resetBtnDom());
      /**
       * 转换操作
       */
      const codeCssList = this.transCodeToCssArr();
      codeCssList.forEach((cssItem) => {
        if (cssItem) {
          for (let themeItem in THEME_CSS_MAP) {
            const trimCssKey = cssItem.key.trim();
            const trimCssVal = cssItem.value.trim();
            const trimThemeKey = themeItem.trim();
            if (FILTER_FILEDS.includes(trimCssKey)) {
              cssItem.value = `var(${themeItem})`;
              return;
            }
            /**
             * 比对key
             */
            if (trimThemeKey.includes(trimCssKey)) {
              /**
               * 比对value
               */
              if (THEME_CSS_MAP[trimThemeKey].includes(trimCssVal)) {
                cssItem.value = `var(${trimThemeKey})`;
              }
            }
          }
        }
      });
      this.renderCodeDetail(codeCssList);
    };

    renderCodeDetail = (data) => {
      let str = "";
      if (data.length) {
        data.forEach((item) => {
          if (item) {
            str += `<span class="token property">${item.key}</span><span class="token punctuation">:</span> ${item.value};\n`;
          }
        });
      }

      this.codeDetailDom
        .querySelector(".language-css")
        .querySelector(".language-css").innerHTML = str;
    };

    transCodeToCssArr = () => {
      const cssArr = this.codeBoxInnerHtml
        .replace(/<\/?.+?>/g, "")
        .replace(/\n/g, "")
        .split(";");
      if (cssArr.length) {
        return cssArr.map((code) => {
          if (code.length) {
            const codeArr = code.split(":");
            const codeItem = { key: codeArr[0], value: codeArr[1].trim() };
            return codeItem;
          }
        });
      }
    };

    handleResetBtn = () => {
      const resetCodeBtn = this.subtitleDom.querySelector("#reset_code");
      this.subtitleDom.removeChild(resetCodeBtn);
      this.subtitleDom.appendChild(this.transBtnDom());
      /**
       * 还原操作
       */
      this.codeDetailDom.querySelector(".language-css").innerHTML =
        this.codeBoxInnerHtml;
    };

    transBtnDom = () => {
      const transBtn = this.createNode("span", "转换");
      transBtn.setAttribute("style", this.styleStr);
      transBtn.setAttribute("id", "trans_code");
      transBtn.onclick = this.handleTransBtn;
      return transBtn;
    };

    resetBtnDom = () => {
      const resetBtn = this.createNode("span", "还原");
      resetBtn.setAttribute("style", this.styleStr);
      resetBtn.setAttribute("id", "reset_code");
      resetBtn.onclick = this.handleResetBtn;
      return resetBtn;
    };

    monitorParentNode = () => {
      const detailBox = document.querySelector(".detail_box");
      detailBox.addEventListener(
        "click",
        () => {
          const codeDetail = document.querySelector(".code_detail");
          /**
           * code_detail存在后开始转换逻辑
           */
          if (codeDetail) {
            /**
             * 每次点击均暂存code_detail的InnerHtml，便于还原操作
             */
            this.codeBoxInnerHtml =
              codeDetail.querySelector(".language-css").innerHTML;
            /**
             * 注入操作dom
             */
            const subtitle = codeDetail.querySelector(".subtitle");
            subtitle.appendChild(this.transBtnDom());
            this.codeDetailDom = codeDetail;
            this.subtitleDom = subtitle;
          }
        },
        true
      );
    };

    init = () => {
      this.monitorParentNode();
    };
  }
  const instance = ChromePluginLanhuapp.getInstance();
  instance.init();
};
