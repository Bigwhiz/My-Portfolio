import{r as l,j as f}from"./jsx-runtime-BgQc5Su6.js";import{p as t,c as u,g as r}from"./heading-DFWC3-0l.js";const y="/assets/gotham-bold-italic-C_msAlmW.woff2",k="/assets/gotham-bold-D1kvQ7KV.woff2",z="/assets/gotham-book-italic-Bm2IEtSK.woff2",g="/assets/gotham-book-Bnaws0Ef.woff2",b="/assets/gotham-medium-italic-Dok430ou.woff2",H="/assets/gotham-medium-0VT3RO8I.woff2",w="/assets/ipa-gothic-DimHCOud.woff2",B={black:"oklch(0% 0 0)",white:"oklch(100% 0 0)",bezierFastoutSlowin:"cubic-bezier(0.4, 0.0, 0.2, 1)",durationXS:"200ms",durationS:"300ms",durationM:"400ms",durationL:"600ms",durationXL:"800ms",systemFontStack:"system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",fontStack:"Gotham, var(--systemFontStack)",monoFontStack:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",japaneseFontStack:"IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",fontWeightRegular:400,fontWeightMedium:500,fontWeightBold:700,fontSizeH0:t(140),fontSizeH1:t(100),fontSizeH2:t(58),fontSizeH3:t(38),fontSizeH4:t(28),fontSizeH5:t(24),fontSizeBodyXL:t(22),fontSizeBodyL:t(20),fontSizeBodyM:t(18),fontSizeBodyS:t(16),fontSizeBodyXS:t(14),lineHeightTitle:"1.1",lineHeightBody:"1.6",maxWidthS:"540px",maxWidthM:"720px",maxWidthL:"1096px",maxWidthXL:"1680px",spaceOuter:"64px",spaceXS:"4px",spaceS:"8px",spaceM:"16px",spaceL:"24px",spaceXL:"32px",space2XL:"48px",space3XL:"64px",space4XL:"96px",space5XL:"128px",zIndex0:0,zIndex1:4,zIndex2:8,zIndex3:16,zIndex4:32,zIndex5:64},L={fontSizeH0:t(120),fontSizeH1:t(80)},G={maxWidthS:"480px",maxWidthM:"640px",maxWidthL:"1000px",maxWidthXL:"1100px",spaceOuter:"48px",fontSizeH0:t(100),fontSizeH1:t(70),fontSizeH2:t(50),fontSizeH3:t(36),fontSizeH4:t(26),fontSizeH5:t(22)},M={fontSizeH0:t(80),fontSizeH1:t(60),fontSizeH2:t(48),fontSizeH3:t(32),fontSizeH4:t(24),fontSizeH5:t(20)},T={spaceOuter:"24px",fontSizeH0:t(56),fontSizeH1:t(40),fontSizeH2:t(34),fontSizeH3:t(28),fontSizeH4:t(22),fontSizeH5:t(18),fontSizeBodyL:t(17),fontSizeBodyM:t(16),fontSizeBodyS:t(14)},$={spaceOuter:"16px",fontSizeH0:t(42),fontSizeH1:t(38),fontSizeH2:t(28),fontSizeH3:t(24),fontSizeH4:t(20)},F={background:"oklch(17.76% 0 0)",backgroundLight:"oklch(21.78% 0 0)",primary:"#799cbf",accent:"#EB5B00",error:"oklch(65.91% 0.249 13.76)",text:"var(--white)",textTitle:"var(--text)",textBody:"color-mix(in lab, var(--text) 80%, transparent)",textLight:"color-mix(in lab, var(--text) 60%, transparent)"},v={background:"#F9F7F1",backgroundLight:"#FFFFFF",primary:"#014421",accent:"#EB5B00",error:"oklch(63.17% 0.259 25.41)",text:"var(--black)",textTitle:"color-mix(in lab, var(--text) 90%, transparent)",textBody:"color-mix(in lab, var(--text) 75%, transparent)",textLight:"color-mix(in lab, var(--text) 55%, transparent)"},m={base:B,desktop:L,laptop:G,tablet:M,mobile:T,mobileS:$},c={dark:F,light:v},h=l.createContext({}),R=({theme:o="dark",children:a,className:p,as:d="div",toggleTheme:S,...x})=>{const i=I(),s=!i.theme;return f.jsxs(h.Provider,{value:{theme:o,toggleTheme:S||i.toggleTheme},children:[s&&a,!s&&f.jsx(d,{className:u(p),"data-theme":o,...x,children:a})]})};function I(){return l.useContext(h)}function e(o){return o.replace(/\s\s+/g," ")}function n(o){return e(Object.keys(o).map(a=>`--${a}: ${o[a]};`).join(`

`))}function W(){return e(Object.keys(r).map(o=>`
        @media (max-width: ${r[o]}px) {
          :root {
            ${n(m[o])}
          }
        }
      `).join(`
`))}const X=e(`
  @layer theme, base, components, layout;
`),P=e(`
  :root {
    ${n(m.base)}
  }

  ${W()}

  [data-theme='dark'] {
    ${n(c.dark)}
  }

  [data-theme='light'] {
    ${n(c.light)}
  }
`),j=e(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${g}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${z}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${H}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${b}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${k}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${y}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${w}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),E=e(`
  ${X}

  @layer theme {
    ${P}
    ${j}
  }
`);export{H as G,R as T,E as a,g as b,m as t,I as u};
