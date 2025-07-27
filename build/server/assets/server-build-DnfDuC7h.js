import { jsx, jsxs, Fragment as Fragment$1 } from "react/jsx-runtime";
import { RemixServer, Link as Link$1, useLocation, useNavigate, useNavigation, useLoaderData, useFetcher, Meta, Links, Outlet, ScrollRestoration, Scripts, useRouteError } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";
import { createContext, useContext, forwardRef, useRef, useEffect, useState, memo, Fragment, useId, useCallback, lazy, Suspense, useMemo, useSyncExternalStore } from "react";
import { useReducedMotion, AnimatePresence, usePresence, useSpring } from "framer-motion";
import { useMDXComponents } from "@mdx-js/react";
import Lottie from "lottie-react";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  const body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      signal: request.signal,
      onError(error) {
        console.error(error);
        responseStatusCode = 500;
      }
    }
  );
  if (isBotRequest(request.headers.get("user-agent"))) {
    await body.allReady;
  }
  responseHeaders.set("Content-Type", "text/html");
  return new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  if (!userAgent) {
    return false;
  }
  if ("isbot" in isbotModule && typeof isbotModule.isbot === "function") {
    return isbotModule.isbot(userAgent);
  }
  if ("default" in isbotModule && typeof isbotModule.default === "function") {
    return isbotModule.default(userAgent);
  }
  return false;
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest
}, Symbol.toStringTag, { value: "Module" }));
const GothamBoldItalic = "/assets/gotham-bold-italic-C_msAlmW.woff2";
const GothamBold = "/assets/gotham-bold-D1kvQ7KV.woff2";
const GothamBookItalic = "/assets/gotham-book-italic-Bm2IEtSK.woff2";
const GothamBook = "/assets/gotham-book-Bnaws0Ef.woff2";
const GothamMediumItalic = "/assets/gotham-medium-italic-Dok430ou.woff2";
const GothamMedium = "/assets/gotham-medium-0VT3RO8I.woff2";
const IPAGothic = "/assets/ipa-gothic-DimHCOud.woff2";
const media = {
  desktop: 2080,
  laptop: 1680,
  tablet: 1040,
  mobile: 696,
  mobileS: 400
};
const numToPx = (num) => `${num}px`;
const pxToRem = (px) => `${px / 16}rem`;
const msToNum = (msString) => Number(msString.replace("ms", ""));
const numToMs = (num) => `${num}ms`;
function cssProps(props, style = {}) {
  let result = {};
  const keys = Object.keys(props);
  for (const key of keys) {
    let value2 = props[key];
    if (typeof value2 === "number" && key === "delay") {
      value2 = numToMs(value2);
    }
    if (typeof value2 === "number" && key !== "opacity") {
      value2 = numToPx(value2);
    }
    if (typeof value2 === "number" && key === "opacity") {
      value2 = `${value2 * 100}%`;
    }
    result[`--${key}`] = value2;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
const baseTokens = {
  black: "oklch(0% 0 0)",
  white: "oklch(100% 0 0)",
  bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
  durationXS: "200ms",
  durationS: "300ms",
  durationM: "400ms",
  durationL: "600ms",
  durationXL: "800ms",
  systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
  fontStack: `Gotham, var(--systemFontStack)`,
  monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
  japaneseFontStack: "IPA Gothic, ヒラギノ角ゴ Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, メイリオ, Meiryo, Segoe UI, sans-serif",
  fontWeightRegular: 400,
  fontWeightMedium: 500,
  fontWeightBold: 700,
  fontSizeH0: pxToRem(140),
  fontSizeH1: pxToRem(100),
  fontSizeH2: pxToRem(58),
  fontSizeH3: pxToRem(38),
  fontSizeH4: pxToRem(28),
  fontSizeH5: pxToRem(24),
  fontSizeBodyXL: pxToRem(22),
  fontSizeBodyL: pxToRem(20),
  fontSizeBodyM: pxToRem(18),
  fontSizeBodyS: pxToRem(16),
  fontSizeBodyXS: pxToRem(14),
  lineHeightTitle: "1.1",
  lineHeightBody: "1.6",
  maxWidthS: "540px",
  maxWidthM: "720px",
  maxWidthL: "1096px",
  maxWidthXL: "1680px",
  spaceOuter: "64px",
  spaceXS: "4px",
  spaceS: "8px",
  spaceM: "16px",
  spaceL: "24px",
  spaceXL: "32px",
  space2XL: "48px",
  space3XL: "64px",
  space4XL: "96px",
  space5XL: "128px",
  zIndex0: 0,
  zIndex1: 4,
  zIndex2: 8,
  zIndex3: 16,
  zIndex4: 32,
  zIndex5: 64
};
const tokensDesktop = {
  fontSizeH0: pxToRem(120),
  fontSizeH1: pxToRem(80)
};
const tokensLaptop = {
  maxWidthS: "480px",
  maxWidthM: "640px",
  maxWidthL: "1000px",
  maxWidthXL: "1100px",
  spaceOuter: "48px",
  fontSizeH0: pxToRem(100),
  fontSizeH1: pxToRem(70),
  fontSizeH2: pxToRem(50),
  fontSizeH3: pxToRem(36),
  fontSizeH4: pxToRem(26),
  fontSizeH5: pxToRem(22)
};
const tokensTablet = {
  fontSizeH0: pxToRem(80),
  fontSizeH1: pxToRem(60),
  fontSizeH2: pxToRem(48),
  fontSizeH3: pxToRem(32),
  fontSizeH4: pxToRem(24),
  fontSizeH5: pxToRem(20)
};
const tokensMobile = {
  spaceOuter: "24px",
  fontSizeH0: pxToRem(56),
  fontSizeH1: pxToRem(40),
  fontSizeH2: pxToRem(34),
  fontSizeH3: pxToRem(28),
  fontSizeH4: pxToRem(22),
  fontSizeH5: pxToRem(18),
  fontSizeBodyL: pxToRem(17),
  fontSizeBodyM: pxToRem(16),
  fontSizeBodyS: pxToRem(14)
};
const tokensMobileSmall = {
  spaceOuter: "16px",
  fontSizeH0: pxToRem(42),
  fontSizeH1: pxToRem(38),
  fontSizeH2: pxToRem(28),
  fontSizeH3: pxToRem(24),
  fontSizeH4: pxToRem(20)
};
const dark = {
  background: "oklch(17.76% 0 0)",
  backgroundLight: "oklch(21.78% 0 0)",
  primary: "#799cbf",
  // Chelsea 25/26 blue
  accent: "#EB5B00",
  // Matching accent (optional)
  error: "oklch(65.91% 0.249 13.76)",
  text: "var(--white)",
  textTitle: "var(--text)",
  textBody: "color-mix(in lab, var(--text) 80%, transparent)",
  textLight: "color-mix(in lab, var(--text) 60%, transparent)"
};
const light = {
  background: "#F9F7F1",
  // Cream tone
  backgroundLight: "#FFFFFF",
  primary: "#014421",
  // Chelsea 25/26 blue
  accent: "#EB5B00",
  // Matching accent (optional)
  error: "oklch(63.17% 0.259 25.41)",
  text: "var(--black)",
  textTitle: "color-mix(in lab, var(--text) 90%, transparent)",
  textBody: "color-mix(in lab, var(--text) 75%, transparent)",
  textLight: "color-mix(in lab, var(--text) 55%, transparent)"
};
const tokens = {
  base: baseTokens,
  desktop: tokensDesktop,
  laptop: tokensLaptop,
  tablet: tokensTablet,
  mobile: tokensMobile,
  mobileS: tokensMobileSmall
};
const themes = { dark, light };
const ThemeContext = createContext({});
const ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  const parentTheme = useTheme();
  const isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  const currentTheme = useContext(ThemeContext);
  return currentTheme;
}
function squish(styles2) {
  return styles2.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join("\n\n")
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => {
      return `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `;
    }).join("\n")
  );
}
const layerStyles = squish(`
  @layer theme, base, components, layout;
`);
const tokenStyles = squish(`
  :root {
    ${createThemeProperties(tokens.base)}
  }

  ${createMediaTokenProperties()}

  [data-theme='dark'] {
    ${createThemeProperties(themes.dark)}
  }

  [data-theme='light'] {
    ${createThemeProperties(themes.light)}
  }
`);
const fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBook}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${GothamBookItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMedium}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${GothamMediumItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBold}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${GothamBoldItalic}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${IPAGothic}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`);
const themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);
const icon$2 = "_icon_nm21j_3";
const styles$v = {
  icon: icon$2
};
const sprites = "/assets/icons-D2FhY9Jx.svg";
const Icon = forwardRef(({ icon: icon2, className, size, ...rest }, ref) => {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": true,
      ref,
      className: classes(styles$v.icon, className),
      width: size || 24,
      height: size || 24,
      ...rest,
      children: /* @__PURE__ */ jsx("use", { href: `${sprites}#${icon2}` })
    }
  );
});
const text$5 = "_text_w1gy9_3";
const styles$u = {
  text: text$5
};
const Text = ({
  children,
  size = "m",
  as: Component = "span",
  align = "auto",
  weight = "auto",
  secondary,
  className,
  ...rest
}) => {
  return /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$u.text, className),
      "data-align": align,
      "data-size": size,
      "data-weight": weight,
      "data-secondary": secondary,
      ...rest,
      children
    }
  );
};
const loader$4 = "_loader_11zpc_3";
const text$4 = "_text_11zpc_33";
const span = "_span_11zpc_85";
const loaderSpan = "_loaderSpan_11zpc_1";
const styles$t = {
  loader: loader$4,
  text: text$4,
  span,
  loaderSpan
};
const Loader = forwardRef(
  ({ className, style, width = 32, height = 4, text: text2 = "Loading...", center, ...rest }, ref) => {
    const reduceMotion = useReducedMotion();
    if (reduceMotion) {
      return /* @__PURE__ */ jsx(Text, { className: classes(styles$t.text, className), weight: "medium", ...rest, children: text2 });
    }
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: classes(styles$t.loader, className),
        "data-center": center,
        style: cssProps({ width, height }, style),
        ...rest,
        children: /* @__PURE__ */ jsx("div", { className: styles$t.span })
      }
    );
  }
);
const Transition = ({ children, in: show, unmount, initial = true, ...props }) => {
  const enterTimeout = useRef();
  const exitTimeout = useRef();
  useEffect(() => {
    if (show) {
      clearTimeout(exitTimeout.current);
    } else {
      clearTimeout(enterTimeout.current);
    }
  }, [show]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx(
    TransitionContent,
    {
      enterTimeout,
      exitTimeout,
      in: show,
      initial,
      ...props,
      children
    }
  ) });
};
const TransitionContent = ({
  children,
  timeout = 0,
  enterTimeout,
  exitTimeout,
  onEnter,
  onEntered,
  onExit,
  onExited,
  initial,
  nodeRef: defaultNodeRef,
  in: show
}) => {
  const [status, setStatus] = useState(initial ? "exited" : "entered");
  const [isPresent, safeToRemove] = usePresence();
  const [hasEntered, setHasEntered] = useState(initial ? false : true);
  const splitTimeout = typeof timeout === "object";
  const internalNodeRef = useRef(null);
  const nodeRef = defaultNodeRef || internalNodeRef;
  const visible = hasEntered && show ? isPresent : false;
  useEffect(() => {
    var _a;
    if (hasEntered || !show)
      return;
    const actualTimeout = splitTimeout ? timeout.enter : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setHasEntered(true);
    setStatus("entering");
    onEnter == null ? void 0 : onEnter();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    enterTimeout.current = setTimeout(() => {
      setStatus("entered");
      onEntered == null ? void 0 : onEntered();
    }, actualTimeout);
  }, [onEnter, onEntered, timeout, status, show]);
  useEffect(() => {
    var _a;
    if (isPresent && show)
      return;
    const actualTimeout = splitTimeout ? timeout.exit : timeout;
    clearTimeout(enterTimeout.current);
    clearTimeout(exitTimeout.current);
    setStatus("exiting");
    onExit == null ? void 0 : onExit();
    (_a = nodeRef.current) == null ? void 0 : _a.offsetHeight;
    exitTimeout.current = setTimeout(() => {
      setStatus("exited");
      safeToRemove == null ? void 0 : safeToRemove();
      onExited == null ? void 0 : onExited();
    }, actualTimeout);
  }, [isPresent, onExit, safeToRemove, timeout, onExited, show]);
  return children({ visible, status, nodeRef });
};
const button$6 = "_button_4jwwg_3";
const text$3 = "_text_4jwwg_263";
const loader$3 = "_loader_4jwwg_289";
const icon$1 = "_icon_4jwwg_315";
const styles$s = {
  button: button$6,
  text: text$3,
  loader: loader$3,
  icon: icon$1
};
function isExternalLink(href) {
  return href == null ? void 0 : href.includes("://");
}
const Button = forwardRef(({ href, ...rest }, ref) => {
  if (isExternalLink(href) || !href) {
    return /* @__PURE__ */ jsx(ButtonContent, { href, ref, ...rest });
  }
  return /* @__PURE__ */ jsx(
    ButtonContent,
    {
      unstable_viewTransition: true,
      as: Link$1,
      prefetch: "intent",
      to: href,
      ref,
      ...rest
    }
  );
});
const ButtonContent = forwardRef(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon: icon2,
    iconEnd,
    iconHoverShift,
    iconOnly,
    children,
    rel,
    target,
    href,
    disabled,
    ...rest
  }, ref) => {
    const isExternal = isExternalLink(href);
    const defaultComponent = href ? "a" : "button";
    const Component = as || defaultComponent;
    return /* @__PURE__ */ jsxs(
      Component,
      {
        className: classes(styles$s.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon2,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon2 && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$s.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon: icon2
            }
          ),
          !!children && /* @__PURE__ */ jsx("span", { className: styles$s.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx(
            Icon,
            {
              className: styles$s.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx(Transition, { unmount: true, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx(
            Loader,
            {
              ref: nodeRef,
              className: styles$s.loader,
              size: 32,
              text: loadingText,
              "data-visible": visible
            }
          ) })
        ]
      }
    );
  }
);
const hidden = "_hidden_u59mf_3";
const styles$r = {
  hidden
};
const VisuallyHidden = forwardRef(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        className: classes(styles$r.hidden, className),
        "data-hidden": !visible && !showOnFocus,
        "data-show-on-focus": showOnFocus,
        ref,
        ...rest,
        children
      }
    );
  }
);
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
const text$2 = "_text_81hf5_3";
const glyph = "_glyph_81hf5_17";
const value = "_value_81hf5_31";
const styles$q = {
  text: text$2,
  glyph,
  value
};
const glyphs = [
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
  "タ",
  "チ",
  "ツ",
  "テ",
  "ト",
  "ナ",
  "ニ",
  "ヌ",
  "ネ",
  "ノ",
  "ハ",
  "ヒ",
  "フ",
  "ヘ",
  "ホ",
  "マ",
  "ミ",
  "ム",
  "メ",
  "モ",
  "ヤ",
  "ユ",
  "ヨ",
  "ー",
  "ラ",
  "リ",
  "ル",
  "レ",
  "ロ",
  "ワ",
  "ヰ",
  "ヱ",
  "ヲ",
  "ン",
  "ガ",
  "ギ",
  "グ",
  "ゲ",
  "ゴ",
  "ザ",
  "ジ",
  "ズ",
  "ゼ",
  "ゾ",
  "ダ",
  "ヂ",
  "ヅ",
  "デ",
  "ド",
  "バ",
  "ビ",
  "ブ",
  "ベ",
  "ボ",
  "パ",
  "ピ",
  "プ",
  "ペ",
  "ポ"
];
const CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content2, output, position) {
  return content2.map((value2, index2) => {
    if (index2 < position) {
      return { type: CharType.Value, value: value2 };
    }
    if (position % 1 < 0.5) {
      const rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index2].value };
  });
}
const DecoderText = memo(
  ({ text: text2, start = true, delay: startDelay = 0, className, ...rest }) => {
    const output = useRef([{ type: CharType.Glyph, value: "" }]);
    const container2 = useRef();
    const reduceMotion = useReducedMotion();
    const decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    useEffect(() => {
      const containerInstance = container2.current;
      const content2 = text2.split("");
      let animation;
      const renderOutput = () => {
        const characterMap = output.current.map((item2) => {
          return `<span class="${styles$q[item2.type]}">${item2.value}</span>`;
        });
        containerInstance.innerHTML = characterMap.join("");
      };
      const unsubscribeSpring = decoderSpring.on("change", (value2) => {
        output.current = shuffle(content2, output.current, value2);
        renderOutput();
      });
      const startSpring = async () => {
        await delay(startDelay);
        decoderSpring.set(content2.length);
      };
      if (start && !animation && !reduceMotion) {
        startSpring();
      }
      if (reduceMotion) {
        output.current = content2.map((value2, index2) => ({
          type: CharType.Value,
          value: content2[index2]
        }));
        renderOutput();
      }
      return () => {
        unsubscribeSpring == null ? void 0 : unsubscribeSpring();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text2]);
    return /* @__PURE__ */ jsxs("span", { className: classes(styles$q.text, className), ...rest, children: [
      /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$q.label, children: text2 }),
      /* @__PURE__ */ jsx("span", { "aria-hidden": true, className: styles$q.content, ref: container2 })
    ] });
  }
);
const heading = "_heading_8oupr_3";
const styles$p = {
  heading
};
const Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  const clampedLevel = Math.min(Math.max(level, 0), 5);
  const Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(
    Component,
    {
      className: classes(styles$p.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};
const page = "_page_3rfjn_3";
const videoContainer = "_videoContainer_3rfjn_43";
const video$1 = "_video_3rfjn_43";
const credit = "_credit_3rfjn_155";
const details$2 = "_details_3rfjn_203";
const text$1 = "_text_3rfjn_229";
const title$8 = "_title_3rfjn_243";
const titleFlatline = "_titleFlatline_3rfjn_245";
const subheading = "_subheading_3rfjn_309";
const description$6 = "_description_3rfjn_369";
const button$5 = "_button_3rfjn_407";
const styles$o = {
  page,
  videoContainer,
  video: video$1,
  credit,
  details: details$2,
  text: text$1,
  title: title$8,
  titleFlatline,
  subheading,
  description: description$6,
  button: button$5
};
function Error$1({ error }) {
  const getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: "Error 404: Offside!",
          message: "This page missed the mark — maybe it was transferred, benched, or simply doesn’t exist. Let’s get you back in play."
        };
      case 405:
        return {
          summary: "Error: method denied",
          message: error.data
        };
      default:
        return {
          summary: "Error: anomaly",
          message: error.statusText || error.data || error.toString()
        };
    }
  };
  const { summary: summary2, message } = getMessage();
  return /* @__PURE__ */ jsx("section", { className: styles$o.page, children: /* @__PURE__ */ jsx(Transition, { in: true, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: styles$o.details, children: /* @__PURE__ */ jsxs("div", { className: styles$o.text, children: [
      /* @__PURE__ */ jsx(
        Heading,
        {
          className: styles$o.title,
          "data-visible": visible,
          level: 0,
          weight: "bold",
          children: error.status
        }
      ),
      /* @__PURE__ */ jsx(
        Heading,
        {
          "aria-hidden": true,
          className: styles$o.subheading,
          "data-visible": visible,
          as: "h2",
          level: 4,
          children: /* @__PURE__ */ jsx(DecoderText, { text: summary2, start: visible, delay: 300 })
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles$o.description, "data-visible": visible, as: "p", children: message }),
      /* @__PURE__ */ jsx(
        Button,
        {
          secondary: true,
          iconHoverShift: true,
          className: styles$o.button,
          "data-visible": visible,
          href: "/",
          icon: "chevron-right",
          children: "Back to homepage"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: styles$o.videoContainer, "data-visible": visible })
  ] }) }) });
}
const monogram = "_monogram_1jhi1_3";
const highlight = "_highlight_1jhi1_13";
const styles$n = {
  monogram,
  highlight
};
const Monogram = forwardRef(({ highlight: highlight2, className, ...props }, ref) => {
  const id = useId();
  const clipId = `${id}monogram-clip`;
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": true,
      className: classes(styles$n.monogram, className),
      width: "48",
      height: "29",
      viewBox: "0 0 48 29",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("clipPath", { id: clipId, children: /* @__PURE__ */ jsx("path", { d: "M0 0h6.5a6 6 0 0 1 5.2 3.1L19.4 17l4-9L19 0h6.5a6 6 0 0 1 5.2 3.1L39.5 19 35 29 24.5 10 16 29 0 0Zm46.7 2.8A2 2 0 0 0 45 0h-7l5.5 10 3.2-7.2Z" }) }) }),
        /* @__PURE__ */ jsx("rect", { clipPath: `url(#${clipId})`, width: "100%", height: "100%" }),
        highlight2 && /* @__PURE__ */ jsx("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx("rect", { className: styles$n.highlight, width: "100%", height: "100%" }) })
      ]
    }
  );
});
function useHasMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return mounted;
}
function useInterval(callback, delay2, reset) {
  const savedCallback = useRef();
  useEffect(() => {
    savedCallback.current = callback;
  });
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay2 !== null) {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
function useInViewport(elementRef, unobserveOnIntersect, options2 = {}, shouldObserve = true) {
  const [intersect, setIntersect] = useState(false);
  const [isUnobserved, setIsUnobserved] = useState(false);
  useEffect(() => {
    if (!(elementRef == null ? void 0 : elementRef.current))
      return;
    const observer = new IntersectionObserver(([entry2]) => {
      const { isIntersecting, target } = entry2;
      setIntersect(isIntersecting);
      if (isIntersecting && unobserveOnIntersect) {
        observer.unobserve(target);
        setIsUnobserved(true);
      }
    }, options2);
    if (!isUnobserved && shouldObserve) {
      observer.observe(elementRef.current);
    }
    return () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options2, isUnobserved, shouldObserve]);
  return intersect;
}
function useParallax(multiplier, onChange) {
  const reduceMotion = useReducedMotion();
  useEffect(() => {
    let ticking = false;
    let animationFrame = null;
    const animate = () => {
      const { innerHeight } = window;
      const offsetValue = Math.max(0, window.scrollY) * multiplier;
      const clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue);
      ticking = false;
    };
    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        animationFrame = requestAnimationFrame(animate);
      }
    };
    if (!reduceMotion) {
      window.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
function usePrevious(value2) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value2;
  }, [value2]);
  return ref.current;
}
function useScrollToHash() {
  const scrollTimeout = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const scrollToHash = useCallback(
    (hash, onDone) => {
      const id = hash.split("#")[1];
      const targetElement = document.getElementById(id);
      targetElement.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      const handleScroll = () => {
        clearTimeout(scrollTimeout.current);
        scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll);
          if (window.location.pathname === location.pathname) {
            onDone == null ? void 0 : onDone();
            navigate(`${location.pathname}#${id}`, { scroll: false });
          }
        }, 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
        clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
  return scrollToHash;
}
function useWindowSize() {
  const dimensions = useRef(() => ({ w: 1280, h: 800 }));
  const createRuler = useCallback(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed";
    ruler.style.height = "100vh";
    ruler.style.width = 0;
    ruler.style.top = 0;
    document.documentElement.appendChild(ruler);
    dimensions.current.w = window.innerWidth;
    dimensions.current.h = ruler.offsetHeight;
    document.documentElement.removeChild(ruler);
    ruler = null;
  }, []);
  const getHeight = useCallback(() => {
    const isIOS = navigator == null ? void 0 : navigator.userAgent.match(/iphone|ipod|ipad/i);
    if (isIOS) {
      createRuler();
      return dimensions.current.h;
    }
    return window.innerHeight;
  }, [createRuler]);
  const getSize = useCallback(() => {
    return {
      width: window.innerWidth,
      height: getHeight()
    };
  }, [getHeight]);
  const [windowSize, setWindowSize] = useState(dimensions.current);
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getSize());
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]);
  return windowSize;
}
const toggle$1 = "_toggle_h91zx_3";
const inner = "_inner_h91zx_33";
const icon = "_icon_h91zx_49";
const styles$m = {
  toggle: toggle$1,
  inner,
  icon
};
const NavToggle = ({ menuOpen, ...rest }) => {
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$m.toggle,
      "aria-label": "Menu",
      "aria-expanded": menuOpen,
      ...rest,
      children: /* @__PURE__ */ jsxs("div", { className: styles$m.inner, children: [
        /* @__PURE__ */ jsx(Icon, { className: styles$m.icon, "data-menu": true, "data-open": menuOpen, icon: "menu" }),
        /* @__PURE__ */ jsx(
          Icon,
          {
            className: styles$m.icon,
            "data-close": true,
            "data-open": menuOpen,
            icon: "close"
          }
        )
      ] })
    }
  );
};
const toggle = "_toggle_y3n84_3";
const circle = "_circle_y3n84_57";
const mask = "_mask_y3n84_107";
const path = "_path_y3n84_143";
const styles$l = {
  toggle,
  circle,
  mask,
  path
};
const ThemeToggle = ({ isMobile, ...rest }) => {
  const id = useId();
  const { toggleTheme } = useTheme();
  const maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx(
    Button,
    {
      iconOnly: true,
      className: styles$l.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": true, className: styles$l.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx("circle", { className: styles$l.circle, "data-mask": true, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx("circle", { className: styles$l.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx(
          "path",
          {
            className: styles$l.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx(
          "circle",
          {
            className: styles$l.circle,
            mask: `url(#${maskId})`,
            cx: "19",
            cy: "19",
            r: "12"
          }
        )
      ] })
    }
  );
};
const name$2 = "Wisdom Osas";
const role = "FullStack";
const disciplines = [
  "Frontend",
  "Backend",
  "UI/UX",
  "JavaScript",
  "Python"
];
const url$1 = "";
const x = "https://x.com/BigWhiz_001";
const github = "https://github.com/Bigwhiz";
const gmail = "mailwisdomosas@gmail.com";
const repo = "";
const ascii = "__  __  __\n\\ \\ \\ \\ \\∕\n \\ \\∕\\ \\\n  \\∕  \\∕\n";
const config = {
  name: name$2,
  role,
  disciplines,
  url: url$1,
  x,
  github,
  gmail,
  repo,
  ascii
};
const navLinks = [
  {
    label: "Projects",
    pathname: "/#project-1"
  },
  {
    label: "Details",
    pathname: "/#details"
  },
  {
    label: "Contact",
    pathname: "/contact"
  }
];
const socialLinks$1 = [
  {
    label: "X",
    url: "https://x.com/BigWhiz_001",
    // ← Change to your actual X handle
    icon: "x"
  },
  {
    label: "GitHub",
    url: "https://github.com/Bigwhiz",
    icon: "github"
  },
  {
    label: "Email",
    url: "mailto:mailwisdomosas@gmail.com",
    // ← update this to your actual Gmail
    icon: "mail"
  }
];
const navbar = "_navbar_1qbli_3";
const logo = "_logo_1qbli_53";
const nav = "_nav_1qbli_3";
const navList = "_navList_1qbli_101";
const navLink = "_navLink_1qbli_117";
const navIcons = "_navIcons_1qbli_203";
const navIconLink = "_navIconLink_1qbli_251";
const navIcon = "_navIcon_1qbli_203";
const mobileNav = "_mobileNav_1qbli_293";
const mobileNavLink = "_mobileNavLink_1qbli_353";
const styles$k = {
  navbar,
  logo,
  nav,
  navList,
  navLink,
  navIcons,
  navIconLink,
  navIcon,
  mobileNav,
  mobileNavLink
};
const Navbar = () => {
  const [current, setCurrent] = useState();
  const [menuOpen, setMenuOpen] = useState(false);
  const [target, setTarget] = useState();
  const { theme } = useTheme();
  const location = useLocation();
  const windowSize = useWindowSize();
  const headerRef = useRef();
  const isMobile = windowSize.width <= media.mobile || windowSize.height <= 696;
  const scrollToHash = useScrollToHash();
  useEffect(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]);
  useEffect(() => {
    if (!target || location.pathname !== "/")
      return;
    setCurrent(`${location.pathname}${target}`);
    scrollToHash(target, () => setTarget(null));
  }, [location.pathname, scrollToHash, target]);
  useEffect(() => {
    const navItems = document.querySelectorAll("[data-navbar-item]");
    const inverseTheme = theme === "dark" ? "light" : "dark";
    const { innerHeight } = window;
    let inverseMeasurements = [];
    let navItemMeasurements = [];
    const isOverlap = (rect1, rect2, scrollY) => {
      return !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom);
    };
    const resetNavTheme = () => {
      for (const measurement of navItemMeasurements) {
        measurement.element.dataset.theme = "";
      }
    };
    const handleInversion = () => {
      const invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );
      if (!invertedElements)
        return;
      inverseMeasurements = Array.from(invertedElements).map((item2) => ({
        element: item2,
        top: item2.offsetTop,
        bottom: item2.offsetTop + item2.offsetHeight
      }));
      const { scrollY } = window;
      resetNavTheme();
      for (const inverseMeasurement of inverseMeasurements) {
        if (inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0) {
          continue;
        }
        for (const measurement of navItemMeasurements) {
          if (isOverlap(inverseMeasurement, measurement, scrollY)) {
            measurement.element.dataset.theme = inverseTheme;
          } else {
            measurement.element.dataset.theme = "";
          }
        }
      }
    };
    if (theme === "light") {
      navItemMeasurements = Array.from(navItems).map((item2) => {
        const rect = item2.getBoundingClientRect();
        return {
          element: item2,
          top: rect.top,
          bottom: rect.bottom
        };
      });
      document.addEventListener("scroll", handleInversion);
      handleInversion();
    }
    return () => {
      document.removeEventListener("scroll", handleInversion);
      resetNavTheme();
    };
  }, [theme, windowSize, location.key]);
  const getCurrent = (url2 = "") => {
    const nonTrailing = (current == null ? void 0 : current.endsWith("/")) ? current == null ? void 0 : current.slice(0, -1) : current;
    if (url2 === nonTrailing) {
      return "page";
    }
    return "";
  };
  const handleNavItemClick = (event) => {
    const hash = event.currentTarget.href.split("#")[1];
    setTarget(null);
    if (hash && location.pathname === "/") {
      setTarget(`#${hash}`);
      event.preventDefault();
    }
  };
  const handleMobileNavClick = (event) => {
    handleNavItemClick(event);
    if (menuOpen)
      setMenuOpen(false);
  };
  return /* @__PURE__ */ jsxs("header", { className: styles$k.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx(
      Link$1,
      {
        unstable_viewTransition: true,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": true,
        className: styles$k.logo,
        "aria-label": `${config.name}, ${config.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx(Monogram, { highlight: true })
      }
    ),
    /* @__PURE__ */ jsx(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs("nav", { className: styles$k.nav, children: [
      /* @__PURE__ */ jsx("div", { className: styles$k.navList, children: navLinks.map(({ label, pathname }) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          "data-navbar-item": true,
          className: styles$k.navLink,
          "aria-current": getCurrent(pathname),
          onClick: handleNavItemClick,
          children: label
        },
        label
      )) }),
      /* @__PURE__ */ jsx(NavbarIcons, { desktop: true })
    ] }),
    /* @__PURE__ */ jsx(Transition, { unmount: true, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs("nav", { className: styles$k.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(({ label, pathname }, index2) => /* @__PURE__ */ jsx(
        Link$1,
        {
          unstable_viewTransition: true,
          prefetch: "intent",
          to: pathname,
          className: styles$k.mobileNavLink,
          "data-visible": visible,
          "aria-current": getCurrent(pathname),
          onClick: handleMobileNavClick,
          style: cssProps({
            transitionDelay: numToMs(
              Number(msToNum(tokens.base.durationS)) + index2 * 50
            )
          }),
          children: label
        },
        label
      )),
      /* @__PURE__ */ jsx(NavbarIcons, {}),
      /* @__PURE__ */ jsx(ThemeToggle, { isMobile: true })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx(ThemeToggle, { "data-navbar-item": true })
  ] });
};
const NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx("div", { className: styles$k.navIcons, children: socialLinks$1.map(({ label, url: url2, icon: icon2 }) => /* @__PURE__ */ jsx(
  "a",
  {
    "data-navbar-item": desktop || void 0,
    className: styles$k.navIconLink,
    "aria-label": label,
    href: url2,
    target: "_blank",
    rel: "noopener noreferrer",
    children: /* @__PURE__ */ jsx(Icon, { className: styles$k.navIcon, icon: icon2 })
  },
  label
)) });
const progress = "_progress_brpaj_3";
const styles$j = {
  progress
};
function Progress() {
  const [animationComplete, setAnimationComplete] = useState(false);
  const [visible, setVisible] = useState(false);
  const { state } = useNavigation();
  const progressRef = useRef();
  const timeout = useRef(0);
  useEffect(() => {
    clearTimeout(timeout.current);
    if (state !== "idle") {
      timeout.current = setTimeout(() => {
        setVisible(true);
      }, 500);
    } else if (animationComplete) {
      timeout.current = setTimeout(() => {
        setVisible(false);
      }, 300);
    }
  }, [state, animationComplete]);
  useEffect(() => {
    if (!progressRef.current)
      return;
    const controller = new AbortController();
    if (state !== "idle") {
      return setAnimationComplete(false);
    }
    Promise.all(
      progressRef.current.getAnimations({ subtree: true }).map((animation) => animation.finished)
    ).then(() => {
      if (controller.signal.aborted)
        return;
      setAnimationComplete(true);
    });
    return () => {
      controller.abort();
    };
  }, [state]);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: styles$j.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}
const container$2 = "_container_1g4r3_3";
const skip = "_skip_1g4r3_23";
const styles$i = {
  container: container$2,
  skip
};
const reset_module = {};
const global_module = {};
const links$1 = () => [
  {
    rel: "preload",
    href: GothamMedium,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: GothamBook,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  { rel: "manifest", href: "/manifest.json" },
  { rel: "icon", href: "/favicon.ico" },
  { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
  { rel: "shortcut_icon", href: "/shortcut.png", type: "image/png", sizes: "64x64" },
  { rel: "apple-touch-icon", href: "/icon-256.png", sizes: "256x256" },
  { rel: "author", href: "/humans.txt", type: "text/plain" }
];
const loader$2 = async ({ request, context }) => {
  const { url: url2 } = request;
  const { pathname } = new URL(url2);
  const pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2;
  const canonicalUrl = `${config.url}${pathnameSliced}`;
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  const theme = session.get("theme") || "dark";
  return json(
    { canonicalUrl, theme },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
};
function App() {
  var _a;
  let { canonicalUrl, theme } = useLoaderData();
  const fetcher = useFetcher();
  const { state } = useNavigation();
  if ((_a = fetcher.formData) == null ? void 0 : _a.has("theme")) {
    theme = fetcher.formData.get("theme");
  }
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme ? newTheme : theme === "dark" ? "light" : "dark" },
      { action: "/api/set-theme", method: "post" }
    );
  }
  useEffect(() => {
    console.info(
      `${config.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config.repo}

`
    );
  }, []);
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {}),
      /* @__PURE__ */ jsx("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx(Progress, {}),
        /* @__PURE__ */ jsx(VisuallyHidden, { showOnFocus: true, as: "a", className: styles$i.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx(Navbar, {}),
        /* @__PURE__ */ jsx(
          "main",
          {
            id: "main-content",
            className: styles$i.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary$1() {
  const error = useRouteError();
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx(Meta, {}),
      /* @__PURE__ */ jsx(Links, {})
    ] }),
    /* @__PURE__ */ jsxs("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx(Error$1, { error }),
      /* @__PURE__ */ jsx(ScrollRestoration, {}),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary: ErrorBoundary$1,
  default: App,
  links: links$1,
  loader: loader$2
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter$1 = {
  "title": "You (probably) don't need CSS-in-JS",
  "abstract": "Vanilla CSS is good now actually. Here's a couple nifty techniques for dynamically styling React components with CSS custom properties.",
  "date": "2022-05-01",
  "banner": "/static/modern-styling-in-react-banner.jpg",
  "featured": true
};
function _createMdxContent$1(props) {
  const _components = {
    a: "a",
    code: "code",
    em: "em",
    h2: "h2",
    h3: "h3",
    hr: "hr",
    li: "li",
    ol: "ol",
    p: "p",
    pre: "pre",
    span: "span",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  }, { Embed } = _components;
  if (!Embed)
    _missingMdxReference("Embed", true);
  return jsxs(Fragment$1, {
    children: [jsxs(_components.p, {
      children: ["When I first tried CSS-in-JS libraries like ", jsx(_components.a, {
        href: "https://styled-components.com/",
        children: "Styled Components"
      }), " and ", jsx(_components.a, {
        href: "https://emotion.sh",
        children: "Emotion"
      }), ", the thing that felt right about it was passing values or state directly into the styles for a component. It really closed the loop with the concept of React where the UI is a function of state. While this was a definite advancement over the traditional way of styling React with classes and pre-processed CSS, it still had its problems."]
    }), "\n", jsx(_components.p, {
      children: "To highlight some examples, I'll break down some typical examples using two main types of dynamic styles you'll run into with React components:"
    }), "\n", jsxs(_components.ol, {
      children: ["\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "Values:"
        }), " like a color, delay, or position. Anything that represents a single value for a CSS property."]
      }), "\n", jsxs(_components.li, {
        children: [jsx(_components.strong, {
          children: "States:"
        }), " like a primary button variant, or a loading state each having their own set of associated styles."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "where-we-are-today",
      children: "Where we are today"
    }), "\n", jsxs(_components.p, {
      children: ["Before we get started, for comparison I'll be using SCSS (with ", jsx(_components.a, {
        href: "https://css-tricks.com/bem-101/",
        children: "BEM syntax"
      }), ") and Styled Components in my examples for how styling is typically approached in React. I won't cover CSS-in-JS libraries that deal with writing CSS as JavaScript objects. I think there are already good solutions out there (I'd recommend ", jsx(_components.a, {
        href: "https://vanilla-extract.style/",
        children: "Vanilla Extract"
      }), ") if you prefer having type checking and living more fully on the JavaScript side of things. My solution is more for those of us that like writing CSS as CSS, but want to respond to the reactivity and state of components in a better way."]
    }), "\n", jsxs(_components.p, {
      children: ["If you're already familiar with the problem, ", jsx(_components.a, {
        href: "#theres-a-better-way-vanilla-css",
        children: "skip to the solution"
      }), "."]
    }), "\n", jsx(_components.h3, {
      id: "values",
      children: "Values"
    }), "\n", jsxs(_components.p, {
      children: ["Using vanilla CSS, or pre-processed CSS by means of LESS or SCSS, the traditional way of passing a ", jsx(_components.em, {
        children: "value"
      }), " to your styles on was to just use inline styles. So if we have a button component that allows a color, it would look something like this:"]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token literal-property property",
              children: "backgroundColor"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "The problem with this approach is that it brings with it all the problems of inline styles. It now has higher specificity making it harder to override, and the styles aren't co-located with the rest of our button styles."
    }), "\n", jsx(_components.p, {
      children: "CSS-in-JS (in the case of Styled Components or Emotion) solved this problem by allowing dynamic values like this to be directly as props"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token comment",
          children: "// We can pass the `color` value into the styled component as a prop"
        }), "\r\n", jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "color"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "color", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n", jsx(_components.span, {
          className: "token comment",
          children: "// The syntax is a little funky, but now in the styled component's styles"
        }), "\r\n", jsx(_components.span, {
          className: "token comment",
          children: "// we can use its props as a function"
        }), "\r\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "background-color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "color"
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.h3, {
      id: "states",
      children: "States"
    }), "\n", jsx(_components.p, {
      children: "Traditionally, we'd use css classes and concatenate strings. This always felt messy and clunky, but it works nicely on the css side, particularly if you're using a naming convention like BEM along with a pre-processors. Say we have small, medium, and large button sizes, and a primary variant, it might look something like this:"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), "\r\n      ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token string",
              children: "'button'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ","
            }), " ", jsxs(_components.span, {
              className: "token template-string",
              children: [jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              }), jsx(_components.span, {
                className: "token string",
                children: "button--"
              }), jsxs(_components.span, {
                className: "token interpolation",
                children: [jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "${"
                }), "size", jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "}"
                })]
              }), jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              })]
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ","
            }), " primary ", jsx(_components.span, {
              className: "token operator",
              children: "?"
            }), " ", jsx(_components.span, {
              className: "token string",
              children: "'button--primary'"
            }), " ", jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token keyword null nil",
              children: "null"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            }), "\r\n        ", jsx(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx(_components.span, {
              className: "token method function property-access",
              children: "filter"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "("
            }), jsx(_components.span, {
              className: "token known-class-name class-name",
              children: "Boolean"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ")"
            }), "\r\n        ", jsx(_components.span, {
              className: "token punctuation",
              children: "."
            }), jsx(_components.span, {
              className: "token method function property-access",
              children: "join"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "("
            }), jsx(_components.span, {
              className: "token string",
              children: "' '"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ")"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), "\r\n      ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token literal-property property",
              children: "backgroundColor"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), "\r\n    ", jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-scss",
      children: jsxs(_components.code, {
        className: "language-scss",
        children: [jsx(_components.span, {
          className: "token selector",
          children: ".button "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--primary "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token variable",
          children: "$primary-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--small "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "30"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--medium "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "40"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: [jsx(_components.span, {
            className: "token parent important",
            children: "&"
          }), "--large "]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "60"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "The SCSS is looking nice and clean. I've always liked the pattern of using nesting to concatenate elements and modifiers in SCSS using the BEM syntax."
    }), "\n", jsxs(_components.p, {
      children: ["Our JSX, however, isn't faring so well. That string concatenation on the ", jsx(_components.code, {
        children: "className"
      }), " in the is a mess. The size property isn't too bad, because we're appending the value directly onto the class. The primary variant though... yuck. Not to mention the wacky ", jsx(_components.code, {
        children: "filter(Boolean)"
      }), " in there to prevent a double space in the class list for non-primary buttons. There are better ways of handling this, for example the ", jsx(_components.code, {
        children: "classnames"
      }), " package on NPM. But they only make the problem marginally more bearable."]
    }), "\n", jsx(_components.p, {
      children: "Unlike dynamic values, Styled Components is still a bit cumbersome in dealing with states"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "color"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "color", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), jsx(_components.span, {
              className: "token class-name",
              children: "StyledButton"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n\r\n", jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "background-color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "whitesmoke"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n\r\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "primary"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " $primary-color", jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\r\n\r\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'small'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "30"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\r\n\r\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'medium'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "40"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\r\n\r\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), " props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "size"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "==="
              }), " ", jsx(_components.span, {
                className: "token string",
                children: "'large'"
              }), " ", jsx(_components.span, {
                className: "token operator",
                children: "&&"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n    ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "60"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n  "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\r\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["It's not ", jsx(_components.em, {
        children: "terrible"
      }), ", but the repeated functions to grab props gets repetitive and makes reading styles quite noisy. It can also get way worse depending on the type of state. If you have separate but mutually exclusive states sometimes it calls for a ternary expression that can end up looking even more convoluted and difficult to parse."]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "const"
        }), " ", jsx(_components.span, {
          className: "token maybe-class-name",
          children: "StyledButton"
        }), " ", jsx(_components.span, {
          className: "token operator",
          children: "="
        }), " styled", jsx(_components.span, {
          className: "token punctuation",
          children: "."
        }), jsx(_components.span, {
          className: "token property-access",
          children: "button"
        }), jsxs(_components.span, {
          className: "token template-string",
          children: [jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          }), jsxs(_components.span, {
            className: "token css language-css",
            children: ["\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "0"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "border-radius"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "4"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "padding"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "8"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "12"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "font-size"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token number",
              children: "14"
            }), jsx(_components.span, {
              className: "token unit",
              children: "px"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n  ", jsx(_components.span, {
              className: "token property",
              children: "color"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ":"
            }), " ", jsx(_components.span, {
              className: "token color",
              children: "dimgrey"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: ";"
            }), "\r\n\r\n  ", jsxs(_components.span, {
              className: "token interpolation",
              children: [jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "${"
              }), jsx(_components.span, {
                className: "token parameter",
                children: "props"
              }), " ", jsx(_components.span, {
                className: "token arrow operator",
                children: "=>"
              }), "\r\n    props", jsx(_components.span, {
                className: "token punctuation",
                children: "."
              }), jsx(_components.span, {
                className: "token property-access",
                children: "primary"
              }), "\r\n      ", jsx(_components.span, {
                className: "token operator",
                children: "?"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "60"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token color",
                    children: "darkslateblue"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n        "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), "\r\n      ", jsx(_components.span, {
                className: "token operator",
                children: ":"
              }), " css", jsxs(_components.span, {
                className: "token template-string",
                children: [jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                }), jsxs(_components.span, {
                  className: "token css language-css",
                  children: ["\r\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "height"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token number",
                    children: "40"
                  }), jsx(_components.span, {
                    className: "token unit",
                    children: "px"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n          ", jsx(_components.span, {
                    className: "token property",
                    children: "background-color"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ":"
                  }), " ", jsx(_components.span, {
                    className: "token color",
                    children: "whitesmoke"
                  }), jsx(_components.span, {
                    className: "token punctuation",
                    children: ";"
                  }), "\r\n        "]
                }), jsx(_components.span, {
                  className: "token template-punctuation string",
                  children: "`"
                })]
              }), jsx(_components.span, {
                className: "token interpolation-punctuation punctuation",
                children: "}"
              })]
            }), "\r\n"]
          }), jsx(_components.span, {
            className: "token template-punctuation string",
            children: "`"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "If you're using Prettier for code formatting like I do, you'll end up with a monstrosity like you see above. Monstrosity is a strong way of putting it, but I find the indentation and formatting really difficult to read."
    }), "\n", jsx(_components.hr, {}), "\n", jsx(_components.h2, {
      id: "theres-a-better-way-vanilla-css",
      children: "There's a better way: vanilla CSS"
    }), "\n", jsx(_components.p, {
      children: "The solution was with us all along: CSS custom properties (AKA CSS variables). Well, not really. When the methods I've covered above were established, CSS custom properties weren't that well supported by browsers. Support these days is pretty much green across the board (unless you still need to support ie11)."
    }), "\n", jsxs(_components.p, {
      children: ["After making the journey through using SCSS to Styled Components, I've come full circle back to vanilla CSS. I feel like there's an emerging trend of sticking more to platform standards with frameworks like Remix and Deno adhering closer to web standards instead of doing their own thing. I think this will happen with CSS as well, we won't need to reach for pre-processors and CSS-in-JS libraries as much because the native features are becoming ", jsx(_components.em, {
        children: "better"
      }), " than what they have to offer."]
    }), "\n", jsx(_components.p, {
      children: "That being said, here's how I've approached styling React components with vanilla CSS. Well, mostly vanilla CSS. I'm using postcss to get support some up and coming features like native nesting and custom media queries. The beauty of postcss is that as browsers support new features, the tooling slowly melts away."
    }), "\n", jsx(_components.h3, {
      id: "values-1",
      children: "Values"
    }), "\n", jsx(_components.p, {
      children: "A really neat trick I've found for passing values into css is using custom properties. It's pretty simple, we can just drop variables into the style property and it works."
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token string-property property",
              children: "'--color'"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " color ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: [`Now you might be thinking "isn't this just inline styles with extra steps?", and while we are using inline styles to apply the variable, it doesn't come with the same downsides. For one, there's no specificity issue because we're declaring the property under the `, jsx(_components.code, {
        children: ".button"
      }), " selector in the css file. Secondly, all our styles are co-located, it's just the value of the custom property that's being passed down."]
    }), "\n", jsx(_components.p, {
      children: "This also makes it really convenient when working with properties like transforms or clip-paths where you only need to dynamically control one piece of the value"
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token comment",
          children: "// All we need to pass is the value needed by the transform, rather than"
        }), "\r\n", jsx(_components.span, {
          className: "token comment",
          children: "// polluting our jsx with the full transform in the inline style"
        }), "\r\n", jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " offset", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "style"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), " ", jsx(_components.span, {
              className: "token string-property property",
              children: "'--offset'"
            }), jsx(_components.span, {
              className: "token operator",
              children: ":"
            }), " ", jsxs(_components.span, {
              className: "token template-string",
              children: [jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              }), jsxs(_components.span, {
                className: "token interpolation",
                children: [jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "${"
                }), "offset", jsx(_components.span, {
                  className: "token interpolation-punctuation punctuation",
                  children: "}"
                })]
              }), jsx(_components.span, {
                className: "token string",
                children: "px"
              }), jsx(_components.span, {
                className: "token template-punctuation string",
                children: "`"
              })]
            }), " ", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "transform"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "translate3d"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--offset"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ","
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: [`There's way more you can do with CSS custom properties, like setting defaults and allowing overrides from the cascade for any components that compose one another to hook into, like a "CSS API". `, jsx(_components.a, {
        href: "https://lea.verou.me/2021/10/custom-properties-with-defaults/",
        children: "This article from Lea Verou"
      }), " does a great job at explaining this technique."]
    }), "\n", jsx(_components.h3, {
      id: "states-1",
      children: "States"
    }), "\n", jsxs(_components.p, {
      children: ["The best way I've found to deal with component states and variants with vanilla CSS is using data attributes. What I like about this is that it pairs nicely with the upcoming native CSS nesting syntax. The old technique of targeting BEM modifiers with ", jsx(_components.code, {
        children: "&--modifier"
      }), " doesn't work like it does in pre-processors. But with data attributes, we get similar ergonomics"]
    }), "\n", jsx(_components.pre, {
      className: "language-jsx",
      children: jsxs(_components.code, {
        className: "language-jsx",
        children: [jsx(_components.span, {
          className: "token keyword",
          children: "function"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: jsx(_components.span, {
            className: "token maybe-class-name",
            children: "Button"
          })
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsxs(_components.span, {
          className: "token parameter",
          children: [jsx(_components.span, {
            className: "token punctuation",
            children: "{"
          }), " color", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " size", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " primary", jsx(_components.span, {
            className: "token punctuation",
            children: ","
          }), " children ", jsx(_components.span, {
            className: "token punctuation",
            children: "}"
          })]
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token keyword control-flow",
          children: "return"
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), "\r\n    ", jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "<"
            }), "button"]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "className"
          }), jsxs(_components.span, {
            className: "token attr-value",
            children: [jsx(_components.span, {
              className: "token punctuation attr-equals",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            }), "button", jsx(_components.span, {
              className: "token punctuation",
              children: '"'
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "data-size"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "size", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), " ", jsx(_components.span, {
            className: "token attr-name",
            children: "data-primary"
          }), jsxs(_components.span, {
            className: "token script language-javascript",
            children: [jsx(_components.span, {
              className: "token script-punctuation punctuation",
              children: "="
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "{"
            }), "primary", jsx(_components.span, {
              className: "token punctuation",
              children: "}"
            })]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n      "
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "children", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), jsx(_components.span, {
          className: "token plain-text",
          children: "\r\n    "
        }), jsxs(_components.span, {
          className: "token tag",
          children: [jsxs(_components.span, {
            className: "token tag",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "</"
            }), "button"]
          }), jsx(_components.span, {
            className: "token punctuation",
            children: ">"
          })]
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "border-radius"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "4"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "padding"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "8"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "12"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "font-size"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "14"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "dimgrey"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "whitesmoke"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-primary"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'true'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token function",
          children: "var"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: "("
        }), jsx(_components.span, {
          className: "token variable",
          children: "--colorPrimary"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ")"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'small'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "30"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'medium'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "40"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "data-size"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'large'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "height"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "60"
        }), jsx(_components.span, {
          className: "token unit",
          children: "px"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsx(_components.p, {
      children: "Have a play with the example button component here:"
    }), "\n", jsx(Embed, {
      src: "https://stackblitz.com/edit/vitejs-vite-mjs1oh?embed=1&file=src/Button/Button.jsx"
    }), "\n", jsxs(_components.p, {
      children: ["This looks similar to how modifiers are written using BEM syntax. It's also much more straightforward and easy to read than the Styled Components function syntax. The one downside is that we do gain a level of specificity that we don't with BEM modifiers using the ", jsx(_components.code, {
        children: "&--modifier"
      }), " pattern, but I think that's an acceptable tradeoff."]
    }), "\n", jsxs(_components.p, {
      children: ["It may seem kinda ", jsx(_components.em, {
        children: "weird"
      }), " at first to use data attributes for styling, but it gets around the problem of messy string concatenation using classes. It also mirrors how we can target accessibility attributes for interaction-based styling, for example:"]
    }), "\n", jsx(_components.pre, {
      className: "language-css",
      children: jsxs(_components.code, {
        className: "language-css",
        children: [jsx(_components.span, {
          className: "token selector",
          children: jsx(_components.span, {
            className: "token class",
            children: ".button"
          })
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "aria-pressed"
            }), jsx(_components.span, {
              className: "token operator",
              children: "="
            }), jsx(_components.span, {
              className: "token attr-value",
              children: "'true'"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "background-color"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token color",
          children: "gainsboro"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n\r\n  ", jsxs(_components.span, {
          className: "token selector",
          children: ["&", jsxs(_components.span, {
            className: "token attribute",
            children: [jsx(_components.span, {
              className: "token punctuation",
              children: "["
            }), jsx(_components.span, {
              className: "token attr-name",
              children: "disabled"
            }), jsx(_components.span, {
              className: "token punctuation",
              children: "]"
            })]
          })]
        }), " ", jsx(_components.span, {
          className: "token punctuation",
          children: "{"
        }), "\r\n    ", jsx(_components.span, {
          className: "token property",
          children: "opacity"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ":"
        }), " ", jsx(_components.span, {
          className: "token number",
          children: "0.4"
        }), jsx(_components.span, {
          className: "token punctuation",
          children: ";"
        }), "\r\n  ", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\r\n", jsx(_components.span, {
          className: "token punctuation",
          children: "}"
        }), "\n"]
      })
    }), "\n", jsxs(_components.p, {
      children: ["I like this approach because it helps structure styling, we can see that any class is styling the base element, andy any attribute is styling a state. As for avoiding style clashes, there are better options now that automate the process like ", jsx(_components.a, {
        href: "https://github.com/css-modules/css-modules",
        children: "CSS Modules"
      }), " which is included out of the box in most React frameworks like Next.js and Create React App."]
    }), "\n", jsxs(_components.p, {
      children: ["Of course, these techniques don't require you to ", jsx(_components.em, {
        children: "only"
      }), " use vanilla CSS, you can just as easily combine them with CSS-in-JS or a pre-processor. However with new features like ", jsx(_components.a, {
        href: "https://www.w3.org/TR/css-nesting-1/",
        children: "nesting"
      }), " and ", jsx(_components.a, {
        href: "https://www.w3.org/TR/css-color-5/#relative-colors",
        children: "relative colors"
      }), " I think it's becoming less necessary to reach for these tools."]
    }), "\n", jsxs(_components.p, {
      children: ["The entirety of this website is styled using these techniques, so if you want to see an example of how this applies to some real components, take a gander at the ", jsx(_components.a, {
        href: "https://github.com/HamishMW/portfolio",
        children: "source code"
      }), "."]
    })]
  });
}
function MDXContent$1(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent$1, {
      ...props
    })
  }) : _createMdxContent$1(props);
}
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent$1,
  frontmatter: frontmatter$1
}, Symbol.toStringTag, { value: "Module" }));
const volkiharBackgroundLarge = "/assets/volkihar-background-large-BNfdj2Th.jpg";
const volkiharBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwQDAwQEBAQFBQQFBwsHBwYGBw4KCggLEA4RERAOEA8SFBoWEhMYEw8QFh8XGBsbHR0dERYgIh8cIhocHRz/2wBDAQUFBQcGBw0HBw0cEhASHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBwcHBz/wgARCAASACADAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAABQYHBAj/xAAXAQADAQAAAAAAAAAAAAAAAAABAwQC/9oADAMBAAIQAxAAAADgoimUKoj8SefaKhpIho2XuieIyPIHOkiuVz//xAAhEAABAwMEAwAAAAAAAAAAAAACAAEDBAUGERIhIhMVNf/aAAgBAQABPwCmqSgPVlh2YyUbbN6K9BdreTETOshtoHObi2ijh1VIRU/LKw3ySOdgM+i9RS3eDyAXZRKBQcSrD/nEv//EABsRAAIDAQEBAAAAAAAAAAAAAAABAgMREBIx/9oACAECAQE/AE8K7DdROPEQk0Z66in4f//EABkRAAMBAQEAAAAAAAAAAAAAAAABEQISIP/aAAgBAwEBPwCGkQTKI3y0WeNn/9k=";
const volkiharBackground = "/assets/volkihar-background-BwfMx1oT.jpg";
const volkiharBannerLarge = "/assets/volkihar-banner-large-B7psY5Jh.jpg";
const volkiharBannerPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQEBAQIBAQECAgICAgQDAgICAgUEBAMEBgUGBgYFBgYGBwkIBgcJBwYGCAsICQoKCgoKBggLDAsKDAkKCgr/2wBDAQICAgICAgUDAwUKBwYHCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgr/wgARCAAGAAsDAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgn/xAAVAQEBAAAAAAAAAAAAAAAAAAADAv/aAAwDAQACEAMQAAAAjGoF0n//xAAbEAABBQEBAAAAAAAAAAAAAAAEAAIDBRIhQv/aAAgBAQABPwACaqKAmjJrtOzxyIoAnTvdn0v/xAAXEQEBAQEAAAAAAAAAAAAAAAABAAIT/9oACAECAQE/ANq6uBf/xAAYEQADAQEAAAAAAAAAAAAAAAAAARICA//aAAgBAwEBPwDipyy2f//Z";
const volkiharBanner = "/assets/volkihar-banner-C736rbFi.jpg";
const volkiharBookLarge = "/assets/volkihar-book-large-BpE5vkX8.png";
const volkiharBookPlaceholder = "/assets/volkihar-book-placeholder-tOpZR4Vi.png";
const volkiharBook = "/assets/volkihar-book-B73D4Zfh.png";
const volkiharEnderalLarge = "/assets/volkihar-enderal-large-T2LUjM5-.jpg";
const volkiharEnderalLogoLarge = "/assets/volkihar-enderal-logo-large-BbiR1dg4.png";
const volkiharEnderalLogoPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAADd0lEQVR4AV2R5WLlSA6Fj4psXwony3+33/+FFocnyY2pUNL4Nnd/ZqjvVEn091Pvwl1wHR/9P9/dDa4Mvfe6w8aa6mCsCeu8DBU0zNMMESwqeHlZ1+fe9/N0fo7YsA9/2YWTvx7e/eOvV51xpyp8b5y9987cb5I7R9t1u1fhaxY5AAQI1+B9fXmba3drmSOLu0iebm+vKpcbG8Jtt0l2XXcNozvD6lOpwXkXAjcdgo8RFSImC5sMY5Ou2rYVwQ37/SlruquRHo3F4+mwf7LBnYJ3OzLU9yw+xaRERmPmqWllBtUqtfQeOTPVIx/FrdN6x1Yeb2+Ofw0h/EmJrrrgjvv9fvDB9wp1cU30ch7TEiOZSFlEy7LEVkSzUS3jNDe3mW+cdfepykOX67Hvw1Xw/nDY7067w3DCxhKC1tqWaVnJuRwLp0gwqyW5gmJSY6KD0p2I3ip0xyw9LhjTe++OwYcjyIRamX0I3hrHIJ0JCLAYTIMXUGcde1db3QGuq6WabG2NqfRbep9y6Y21exD1MUYuKTG31uErROHIwDHDuVybqczJW3LWurqu2Z+3tqpICH0IBOrXmNs4zmFOiXKuKopZRGcQogoaNpywjs66lgqvZol7Y8mycppjLNt7IgLV0iimLMuWsgWPzPIior8Q8CqgCWqjY+jPqeQg3nlr7dU4rkipPHmfEogqVDM2am3xIqmNz5v0dwh+E8jrRQLh6IzqL4B1rXBYeE01+J0r9c0QzU1k8c4aVU0CvInwS078CxFedZMQ2dFbTQt8c2C8kINTMZ5ZkHM9F0OjIRpBWLBRWlug+F22UFX9TUTPF8lxGNZspxqeY7MPf+40Ntdsa7AeIKKOFTsiHFW1Z1ZWlVGBH1n034bwPzL6qyOauEulPJf2vzE1exCCbYVrP6AzxnLjzho6ADgaY3pjIAS6iP6jgv+q6I8K++r2vHySYMN8ujnsCpfUisCurBgBjKJ6huLtciVDb86bSaHr/c2hYOPT2Avu04u/AwjD0BicCGZWomdSPSmZCpVZBHNlWbxFy4lbOZeGr3D4igW27Y1JtfLZmEsTzEFELulJWEerVLiZ+owsAd9i8BWX5V0d90mh6/sWs/zGor8RzBmECGgOgfjyH77DfroZc5P3hXe9VQhaE8tQIZACOjfVV4KeucrselSOLJcx+Mgf1w6YAeGPsC8AAAAASUVORK5CYII=";
const volkiharEnderalLogo = "/assets/volkihar-enderal-logo-Bg2oXoo9.png";
const volkiharEnderalPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAC0AUAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAAEBgMFBwIA/9oACAEBAAAAAMJZbuyjQM+A4heWNiZG9ZyFMrhm+Xhm3yXJ88Wa5hMhPeBVqrCqDCiST6sQT1fJzIQXEMNLD//EABgBAAMBAQAAAAAAAAAAAAAAAAIEBQMB/9oACAECEAAAAFp69VgsYlR3QV2Of//EABcBAAMBAAAAAAAAAAAAAAAAAAMEBQL/2gAIAQMQAAAAtNklKNsUZ07BzKZ//8QAIBAAAgICAwEBAQEAAAAAAAAAAAECAwQRBRIhIjETBv/aAAgBAQABPwDGyW2jFirEijCUyHFbX4X8NuD+TmuNlX2+TJqlGT8HEZJlL6tGHmqvW2Y3MVw19GFy9VrS2UVRya9pHNcL/SMvk5fh3VKXyX4zg34WR0SRVaO6URZdif6cJmSd0NyOCyqf4R7SX4cplY3WXqOanTY560ZlMG5aMmnTY4FR1UkOowrJUzTMTn7aK0lIzP8ASW2JruX8pOxvcizK7su1JFukyN+iGWRyIsrtjs/qun6XWev0nPwdnpKzws9JG2RskiF0xZE9E7ZMnNnZ7E/CZ//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEIRESEDFB/9oACAECAQE/AHJ+S17h6iZTduGlVgYeFXtLq9HUsxXezUx6SgAgWCWbEWvcC8RjxP/EABwRAAMBAQADAQAAAAAAAAAAAAABAgMRBBIhIv/aAAgBAwEBPwCEjOc2XhLn8muTljXDrMu9JuYn6zfSaZp8YtWZ+Q0X5PUVr1jfsf/Z";
const volkiharEnderal = "/assets/volkihar-enderal-BTf8JKtt.jpg";
const volkiharSlide1Large = "/assets/volkihar-slide-1-large-CkekFT3C.jpg";
const volkiharSlide1 = "/assets/volkihar-slide-1-BJOjWYAS.jpg";
const volkiharSlide2Large = "/assets/volkihar-slide-2-large-BzyjkLqK.jpg";
const volkiharSlide2 = "/assets/volkihar-slide-2-1Kh0pCzp.jpg";
const volkiharSlide3Large = "/assets/volkihar-slide-3-large-C_8CrUhH.jpg";
const volkiharSlide3 = "/assets/volkihar-slide-3-Dkb5mX5r.jpg";
const volkiharSlidePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCAAJABADAREAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAABgj/xAAWAQEBAQAAAAAAAAAAAAAAAAADBAL/2gAMAwEAAhADEAAAAJ5jtNMbsaRuB//EACAQAAEDAgcAAAAAAAAAAAAAAAEAAwUCEgQGESI0NYH/2gAIAQEAAT8AkYIR+CtNeoTrIafFdu1Zl4PqkuvpX//EABcRAQEBAQAAAAAAAAAAAAAAAAIAATL/2gAIAQIBAT8AOxeRh3t//8QAGBEBAQADAAAAAAAAAAAAAAAAAAIDERL/2gAIAQMBAT8A40qWRT//2Q==";
const link$1 = "_link_4ieiq_3";
const styles$h = {
  link: link$1
};
const VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  const isValidExtension = VALID_EXT.includes(href == null ? void 0 : href.split(".").pop());
  return (href == null ? void 0 : href.includes("://")) || (href == null ? void 0 : href[0]) === "#" || isValidExtension;
}
const Link = forwardRef(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    const isExternal = href == null ? void 0 : href.includes("://");
    const relValue = rel || (isExternal ? "noreferrer noopener" : void 0);
    const targetValue = target || (isExternal ? "_blank" : void 0);
    const linkProps = {
      className: classes(styles$h.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    if (isAnchor(href)) {
      return /* @__PURE__ */ jsx("a", { ...linkProps, href, children });
    }
    return /* @__PURE__ */ jsx(Link$1, { unstable_viewTransition: true, prefetch: "intent", ...linkProps, to: href, children });
  }
);
const footer$1 = "_footer_if18v_3";
const link = "_link_if18v_31";
const date = "_date_if18v_39";
const styles$g = {
  footer: footer$1,
  link,
  date
};
const Footer = ({ className }) => /* @__PURE__ */ jsx("footer", { className: classes(styles$g.footer, className), children: /* @__PURE__ */ jsx(Text, { size: "s", align: "center", children: /* @__PURE__ */ jsx("span", { className: styles$g.date, children: `© ${(/* @__PURE__ */ new Date()).getFullYear()} ${config.name}.` }) }) });
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet) {
        throw new Error("No image src or srcSet provided");
      }
      let tempImage = new Image();
      if (src) {
        tempImage.src = src;
      }
      if (srcSet) {
        tempImage.srcset = srcSet;
      }
      if (sizes) {
        tempImage.sizes = sizes;
      }
      const onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        const source = tempImage.currentSrc;
        tempImage = null;
        resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error) {
      reject(`Error loading ${srcSet}: ${error}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;
    ctx.fillStyle = "rgba(0, 0, 0, 0)";
    ctx.fillRect(0, 0, width, height);
    canvas.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      const image2 = URL.createObjectURL(blob);
      canvas.remove();
      resolve(image2);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  const sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      const [src, width] = srcString.split(" ");
      const size = Number(width.replace("w", ""));
      const image2 = await generateImage(size);
      return { src, image: image2, width };
    })
  );
  const fakeSrcSet = sources.map(({ image: image2, width }) => `${image2} ${width}`).join(", ");
  const fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  const output = sources.find((src) => src.image === fakeSrc);
  return output.src;
}
const image$2 = "_image_1yz75_3";
const container$1 = "_container_1yz75_83";
const elementWrapper = "_elementWrapper_1yz75_97";
const placeholder = "_placeholder_1yz75_141";
const element = "_element_1yz75_97";
const button$4 = "_button_1yz75_207";
const styles$f = {
  image: image$2,
  container: container$1,
  elementWrapper,
  placeholder,
  element,
  button: button$4
};
const Image$1 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder: placeholder2,
  ...rest
}) => {
  const [loaded, setLoaded] = useState(false);
  const { theme } = useTheme();
  const containerRef = useRef();
  const src = baseSrc || srcSet.split(" ")[0];
  const inViewport = useInViewport(containerRef, !getIsVideo(src));
  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: classes(styles$f.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder: placeholder2,
          ...rest
        }
      )
    }
  );
};
const ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder: placeholder2,
  delay: delay2,
  src,
  alt,
  play = true,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  const reduceMotion = useReducedMotion();
  const [showPlaceholder, setShowPlaceholder] = useState(true);
  const [playing, setPlaying] = useState(!reduceMotion);
  const [videoSrc, setVideoSrc] = useState();
  const [videoInteracted, setVideoInteracted] = useState(false);
  const placeholderRef = useRef();
  const videoRef = useRef();
  const isVideo = getIsVideo(src);
  const showFullRes = inViewport;
  const hasMounted = useHasMounted();
  useEffect(() => {
    const resolveVideoSrc = async () => {
      const resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    };
    if (isVideo && srcSet) {
      resolveVideoSrc();
    } else if (isVideo) {
      setVideoSrc(src);
    }
  }, [isVideo, sizes, src, srcSet]);
  useEffect(() => {
    if (!videoRef.current || !videoSrc)
      return;
    const playVideo = () => {
      setPlaying(true);
      videoRef.current.play();
    };
    const pauseVideo = () => {
      setPlaying(false);
      videoRef.current.pause();
    };
    if (!play) {
      pauseVideo();
      if (restartOnPause) {
        videoRef.current.currentTime = 0;
      }
    }
    if (videoInteracted)
      return;
    if (!inViewport) {
      pauseVideo();
    } else if (inViewport && !reduceMotion && play) {
      playVideo();
    }
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  const togglePlaying = (event) => {
    event.preventDefault();
    setVideoInteracted(true);
    if (videoRef.current.paused) {
      setPlaying(true);
      videoRef.current.play();
    } else {
      setPlaying(false);
      videoRef.current.pause();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$f.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            "video",
            {
              muted: true,
              loop: true,
              playsInline: true,
              className: styles$f.element,
              "data-loaded": loaded,
              "data-cover": cover,
              autoPlay: !reduceMotion,
              onLoadStart: onLoad,
              src: videoSrc,
              "aria-label": alt,
              ref: videoRef,
              ...rest
            }
          ),
          !noPauseButton && /* @__PURE__ */ jsxs(Button, { className: styles$f.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx(
          "img",
          {
            className: styles$f.element,
            "data-loaded": loaded,
            "data-cover": cover,
            onLoad,
            decoding: "async",
            src: showFullRes ? src : void 0,
            srcSet: showFullRes ? srcSet : void 0,
            width,
            height,
            alt,
            sizes,
            ...rest
          }
        ),
        showPlaceholder && /* @__PURE__ */ jsx(
          "img",
          {
            "aria-hidden": true,
            className: styles$f.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder2,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(false),
            decoding: "async",
            loading: "lazy",
            alt: "",
            role: "presentation"
          }
        )
      ]
    }
  );
};
function getIsVideo(src) {
  return typeof src === "string" && src.includes(".mp4");
}
const section$2 = "_section_1278e_3";
const styles$e = {
  section: section$2
};
const Section = forwardRef(
  ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx(Component, { className: classes(styles$e.section, className), ref, ...rest, children })
);
const project = "_project_1n18f_39";
const section$1 = "_section_1n18f_57";
const sectionInner = "_sectionInner_1n18f_87";
const sectionBackground = "_sectionBackground_1n18f_177";
const backgroundImage = "_backgroundImage_1n18f_275";
const backgroundImageElement = "_backgroundImageElement_1n18f_313";
const backgroundScrim = "_backgroundScrim_1n18f_351";
const header = "_header_1n18f_383";
const headerContent = "_headerContent_1n18f_423";
const details$1 = "_details_1n18f_499";
const title$7 = "_title_1n18f_523";
const projectFadeSlide = "_projectFadeSlide_1n18f_1";
const description$5 = "_description_1n18f_543";
const linkButton = "_linkButton_1n18f_563";
const meta$7 = "_meta_1n18f_583";
const metaItem = "_metaItem_1n18f_613";
const image$1 = "_image_1n18f_653";
const sectionContent = "_sectionContent_1n18f_669";
const sectionHeading = "_sectionHeading_1n18f_715";
const sectionText = "_sectionText_1n18f_723";
const textRow = "_textRow_1n18f_737";
const sectionColumns = "_sectionColumns_1n18f_849";
const styles$d = {
  project,
  section: section$1,
  sectionInner,
  sectionBackground,
  backgroundImage,
  backgroundImageElement,
  backgroundScrim,
  header,
  headerContent,
  details: details$1,
  title: title$7,
  projectFadeSlide,
  description: description$5,
  linkButton,
  meta: meta$7,
  metaItem,
  image: image$1,
  sectionContent,
  sectionHeading,
  sectionText,
  textRow,
  sectionColumns
};
const initDelay = 300;
function ProjectHeader({
  title: title2,
  description: description2,
  linkLabel = "Visit website",
  url: url2,
  roles: roles2,
  className
}) {
  return /* @__PURE__ */ jsx(Section, { className: classes(styles$d.header, className), as: "section", children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: styles$d.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs("div", { className: styles$d.details, children: [
          /* @__PURE__ */ jsx(Heading, { className: styles$d.title, level: 2, as: "h1", children: title2 }),
          /* @__PURE__ */ jsx(Text, { className: styles$d.description, size: "xl", as: "p", children: description2 }),
          !!url2 && /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              iconHoverShift: true,
              className: styles$d.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!(roles2 == null ? void 0 : roles2.length) && /* @__PURE__ */ jsx("ul", { className: styles$d.meta, children: roles2 == null ? void 0 : roles2.map((role2, index2) => /* @__PURE__ */ jsx(
          "li",
          {
            className: styles$d.metaItem,
            style: cssProps({ delay: numToMs(initDelay + 300 + index2 * 140) }),
            children: /* @__PURE__ */ jsx(Text, { secondary: true, children: role2 })
          },
          role2
        )) })
      ]
    }
  ) });
}
const ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx("article", { className: classes(styles$d.project, className), ...rest });
const ProjectSection = forwardRef(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs(
    "section",
    {
      className: classes(styles$d.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx(
          "div",
          {
            className: styles$d.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx(Section, { className: styles$d.sectionInner, "data-padding": padding, children })
      ]
    }
  )
);
const ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  const imageRef = useRef();
  useParallax(0.6, (value2) => {
    if (!imageRef.current)
      return;
    imageRef.current.style.setProperty("--offset", `${value2}px`);
  });
  return /* @__PURE__ */ jsx(Transition, { in: true, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs(
    "div",
    {
      className: classes(styles$d.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx("div", { className: styles$d.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx(Image$1, { cover: true, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx("div", { className: styles$d.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
};
const ProjectImage = ({ className, alt, ...rest }) => /* @__PURE__ */ jsx("div", { className: classes(styles$d.image, className), children: /* @__PURE__ */ jsx(Image$1, { reveal: true, alt, delay: 300, ...rest }) });
const ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$d.sectionContent, className),
    "data-width": width,
    ...rest
  }
);
const ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx(
  Heading,
  {
    className: classes(styles$d.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
);
const ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx(Text, { className: classes(styles$d.sectionText, className), size: "l", as: "p", ...rest });
const ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: classes(styles$d.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
);
const ProjectSectionColumns = ({ className, centered, ...rest }) => /* @__PURE__ */ jsx(
  ProjectSectionContent,
  {
    className: classes(styles$d.sectionColumns, className),
    "data-centered": centered,
    ...rest
  }
);
const { name: name$1, url, twitter } = config;
const defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title2,
  description: description2,
  prefix = name$1,
  ogImage = defaultOgImage
}) {
  const titleText = [prefix, title2].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description2 },
    { name: "author", content: name$1 },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name$1 },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description2 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description2 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}
function VolkiharLogo() {
  return /* @__PURE__ */ jsxs("svg", { width: "532", height: "344", viewBox: "0 0 532 344", children: [
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M294.971 81.133c22.724 29.428 35.373 45.546 37.95 48.354 5.486 5.982 8.123 9.267 19.709 16.895 6.486 4.394 14.942 7.61 25.37 9.651V159h-54.38L261 77.977V159C191.123 68.072 153.683 20.04 148.683 14.903c-5-5.136-12.56-8.026-22.683-8.668V0l69.584.14V6c-4.38 0-7.994.587-10.845 1.762-4.275 1.761-4.42 5.768-3.412 7.141 1.4 2.138 23.229 30.34 65.487 84.609v-70.08c0-11.449-6.327-16.432-11.333-20.102-3.337-2.447-9.281-3.557-17.832-3.33V.14H289V6c-5.556-.235-13.818.235-19.896 3.33-4.052 2.063-6.753 6.857-8.103 14.382v13.29a24524.908 24524.908 0 0 0 25.533 33.194c23.526-29.352 36.705-45.71 39.538-49.074 4.481-5.32 2.935-11.023-1.577-13.119-3.007-1.397-7.648-2.178-13.922-2.342V0H373v5.661c-7.55 0-13.964 1.666-18.393 3.891-2.954 1.483-6.835 4.828-11.644 10.035l-47.992 61.546z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M18.3 254.75L6.05 224.1c-1.1-2.8-1.85-3.35-3.6-3.85-.75-.2-1.6-.2-1.9-.2-.3 0-.4-.15-.4-.35 0-.3.5-.35 1.3-.35 2.4 0 5.1.15 5.7.15.5 0 2.65-.15 4.55-.15.9 0 1.35.1 1.35.35 0 .25-.15.35-.5.35-.55 0-1.45.05-1.9.25-.55.25-.65.65-.65 1 0 .45.45 1.8 1 3.2l10.2 26.55c2.9-6.7 9.6-24.15 10.7-27.75.25-.75.45-1.45.45-1.9 0-.4-.15-.9-.65-1.15-.6-.2-1.35-.2-1.9-.2-.3 0-.55-.05-.55-.3 0-.3.3-.4 1.1-.4 2 0 4.3.15 4.9.15.3 0 2.45-.15 3.9-.15.55 0 .85.1.85.35 0 .25-.2.35-.6.35-.35 0-1.45 0-2.4.6-.65.45-1.4 1.3-2.75 4.7-.55 1.4-3.05 7.4-5.6 13.55-3.05 7.3-5.3 12.7-6.45 15.15-1.4 3-1.6 3.8-2.1 3.8-.6 0-.85-.7-1.8-3.1zM61 257.7c-12.25 0-17.25-9.1-17.25-16.7 0-6.65 5.15-16.6 17.5-16.6 9.9 0 17.45 5.9 17.45 15.95 0 9.55-7.05 17.35-17.7 17.35zm1.25-1.7C65.6 256 74 254.3 74 241.6c0-10.05-6.2-15.65-13.05-15.65-6.95 0-12.55 4.3-12.55 13.75 0 9.8 5.45 16.3 13.85 16.3zm33.6-18.7v7.6c0 5.75.2 8.65 1.05 9.45.8.7 1.8 1 5.25 1 2.2 0 4.2 0 5.3-1.4.5-.75.85-1.75.95-2.5.05-.4.15-.6.4-.6.2 0 .3.15.3.65s-.3 3.35-.6 4.5c-.3 1-.25 1.25-2.65 1.25-3.4 0-7.15-.25-12.15-.25-1.65 0-2.65.15-4.4.15-.5 0-.8-.1-.8-.4 0-.15.15-.3.55-.3s.8 0 1.2-.1c.85-.15 1.15-1.15 1.3-2.35.3-1.9.2-5.35.2-9.2v-7.5c0-6.6 0-7.7-.1-9.05-.1-1.4-.3-2.3-2-2.5-.3-.05-.85-.05-1.25-.05-.35 0-.55-.15-.55-.35 0-.25.25-.35.75-.35 2.1 0 5.1.15 5.2.15.7 0 3.75-.15 5.15-.15.5 0 .65.15.65.35 0 .2-.25.35-.55.35-.35 0-.85.05-1.35.1-1.4.2-1.7 1-1.8 2.45-.1 1.35-.05 2.45-.05 9.05zm29.2 0v2.35c2.3-2.05 7.75-7.25 10-9.7 2.4-2.65 2.6-2.9 2.6-3.45 0-.35-.2-.6-.8-.8-.35-.1-.55-.2-.55-.4 0-.15.1-.3.5-.3.3 0 1.8.15 3.4.15 1.5 0 4.25-.15 4.9-.15.7 0 .8.1.8.3 0 .2-.15.35-.55.4-.8.05-1.85.25-2.45.5-1.2.4-1.85.95-4.45 3.3-3.65 3.3-8 7.55-10.2 9.55 2.7 2.8 10.8 10.8 12.9 12.7 3.5 3.2 5.2 4.1 7.2 4.55.55.1.3.05 1.15.15.45.05.7.15.7.4 0 .2-.25.3-.8.3h-3.25c-3.9 0-4.9-.45-6.9-1.85-2.25-1.6-10.25-9.8-14.2-14.45v3.95c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1zm33.3 7.5v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm27-6.4h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3H185.3c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm52.2 6.55h-9.1c-.25 0-.4.15-.5.4l-2.2 6.25c-.5 1.4-.85 2.75-.85 3.55 0 .9.55 1.3 1.65 1.3h.35c.45 0 .6.15.6.35 0 .25-.4.35-.75.35-1.1 0-3.4-.15-3.95-.15-.5 0-2.7.15-4.8.15-.55 0-.8-.1-.8-.35 0-.2.2-.35.6-.35.25 0 .7 0 1-.05 2.15-.2 3-1.85 3.85-3.95l10-26.35c.55-1.45.7-1.7 1.05-1.7.25 0 .45.2 1 1.6.7 1.65 7.5 19.1 10.15 25.35 1.65 3.95 3.1 4.6 3.8 4.85.65.25 1.35.25 1.7.25.35 0 .6.1.6.35 0 .25-.2.35-.75.35-.5 0-4.25 0-7.6-.1-.95-.05-1.25-.1-1.25-.35 0-.15.15-.3.35-.35.2-.1.5-.35.2-1.1l-3.95-10.05c-.1-.15-.2-.25-.4-.25zm-8.6-1.75h8c.2 0 .2-.15.15-.3l-3.95-11.05c-.25-.7-.3-.7-.55 0l-3.75 11.05c-.1.2 0 .3.1.3zm31.15 1.6v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.45-2.1-2-2.4-.3-.05-.8-.1-1.2-.1-.35 0-.55-.1-.55-.3 0-.2.15-.35.6-.35 2.15 0 5.2.15 5.3.15.45 0 3.85-.15 5.25-.15 2.8 0 5.85.25 8.2 1.9.95.7 3 2.7 3 6.1 0 2.75-1.35 6.25-5.3 9.45 3.65 4.5 6.65 8.2 9.2 10.85 2.4 2.45 3.9 2.85 5.3 3.05.35.05 1.4.1 1.55.1.4 0 .55.15.55.35 0 .25-.2.35-.9.35h-3.5c-2.35 0-3.45-.15-4.55-.6-2.1-.9-3.6-3.15-6.2-6.5-1.95-2.4-3.95-5.1-4.8-6.15-.2-.2-.3-.3-.6-.3l-5.15-.05c-.2 0-.25.05-.25.25v.7c0 4 0 7.65.25 9.45.15 1.2.3 2.2 1.95 2.4.5.05 1.05.1 1.45.1.45 0 .65.15.65.3 0 .25-.2.4-.7.4-2.6 0-5.4-.15-5.6-.15-.8 0-3 .15-4.35.15-.5 0-.7-.1-.7-.4 0-.15.3-.3.6-.3.35 0 .7 0 1.1-.1.85-.15 1.15-.7 1.3-1.9.25-1.8.2-5.9.2-9.65zm3.85-17.55v13.6c0 .25.05.5.25.6.65.35 2.65.65 4.45.65 1.05 0 2.3-.05 3.35-.75 1.5-.95 2.5-3.15 2.5-6.35 0-5.45-2.9-8.45-7.35-8.45-1.25 0-2.3.1-2.9.25-.15.05-.3.2-.3.45zm56.85 6.6v3.2c1.55-1.5 8.35-8.65 11.4-11.8 3-3.1 3.2-3.6 3.2-4.2 0-.4-.25-.8-.65-.95-.35-.15-.45-.25-.45-.45s.3-.3.75-.3c1.45 0 1.3.15 3 .15 1.55 0 4.5-.15 5.3-.15.7 0 .85.15.85.35 0 .2-.1.3-.55.35-.95.1-1.85.3-2.55.6-1.25.5-2.2 1.1-5.2 4-4.4 4.25-10.1 9.9-11.4 11.35 3.15 3.45 12.25 12.7 14.6 14.9 4.1 3.85 5.85 4.95 8.25 5.4.45.1.95.15 1.45.15.4 0 .7.1.7.35 0 .25-.2.35-.75.35h-3.7c-4.35 0-5.5-.55-7.85-2.4-3-2.35-12-12-16.4-17.25v5.15c0 4.8 0 8.75.25 10.85.15 1.45.45 2.55 1.95 2.75.7.1 1.7.2 2 .2.45 0 .6.2.6.35 0 .25-.2.35-.75.35-2.75 0-5.9-.15-6.15-.15s-3.2.15-4.7.15c-.55 0-.8-.05-.8-.35 0-.15.1-.35.55-.35.3 0 .85-.05 1.3-.15 1-.2 1.3-1.35 1.5-2.8.25-2.1.25-6.05.25-10.85v-8.8c0-7.8 0-9.2-.1-10.8-.1-1.7-.6-2.55-1.7-2.8-.55-.15-1.45-.2-1.8-.2-.4 0-.55-.1-.55-.3 0-.3.25-.4.8-.4 1.65 0 5 .15 5.25.15s3.4-.15 4.9-.15c.55 0 .8.1.8.35 0 .2-.1.3-.55.35-.55.05-.6.05-1.1.1-1.35.15-1.75 1.15-1.85 2.9-.1 1.6-.1 3-.1 10.8zm34.15 17.05c0-23.85.05-16.15 0-24.45 0-1.55.15-2.05.55-2.05.35 0 1.2 1 1.55 1.35.45.5 7.4 7.6 14.4 14.75 3.9 3.8 8.9 8.95 10.2 10.15l-.55-20.8c-.05-2.7-.35-3.6-1.7-3.95-.85-.15-1.6-.2-1.95-.2-.5 0-.6-.2-.6-.4 0-.25.4-.3.9-.3 2.15 0 4.25.15 4.7.15.5 0 2.05-.15 4-.15.55 0 .7.05.7.3 0 .2-.15.35-.45.4-.3.05-.7.05-1.25.15-1.15.25-1.5.75-1.5 3.75l-.1 25.1c0 2.5-.1 2.75-.45 2.75s-.85-.35-3.3-2.65c-.2-.1-7.15-7-11.5-11.25-5.2-5.4-10.2-10.6-11.45-11.9l.65 19.55c.1 3.45.4 4.75 1.65 5.05.8.2 1.65.2 2.05.2.4 0 .6.15.6.35 0 .25-.25.35-.8.35-2.7 0-4.5-.15-4.85-.15-.35 0-2.2.15-4.35.15-.45 0-.75-.05-.75-.35 0-.2.2-.35.7-.35.35 0 .9 0 1.55-.2 1.1-.35 1.35-1.7 1.35-5.35zm46.3-6.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm46.95 4.15v4.5c0 2-.05 2.05-.6 2.35-2.75 1.4-6.75 1.9-9.2 1.9-3.25 0-9.55-.25-14.65-4.5-2.7-2.25-5.4-6.45-5.4-12.15 0-6.8 3.45-11.65 7.55-14.1 3.85-2.25 8.1-2.55 11.15-2.55 3.2 0 5.35.4 7.15.7.8.15 2.75.4 3.8.45.4 0 .4.2.4.4 0 .6-.35 2.1-.35 6.5 0 .7-.05.9-.4.9-.25 0-.3-.3-.35-.6 0-.45-.2-2-.95-3.1-1.15-1.65-4.75-3.5-10.35-3.5-2.7 0-5.85.1-9.2 2.65-2.55 1.95-4.2 5.75-4.2 10.7 0 5.95 3.25 10.35 4.55 11.6 3.3 3.2 7 4.65 11.35 4.65 1.4 0 3.6-.25 4.75-.85.5-.3.85-.8.85-1.5v-7.2c0-3.3-.25-3.95-2-4.2-.3-.05-.8-.1-1.2-.1-.4 0-.6-.2-.6-.35 0-.25.2-.35.75-.35 2 0 4.9.1 5.1.1.2 0 3.15-.1 4.5-.1.5 0 .7.1.7.35 0 .15-.15.35-.6.35-.35 0-.45 0-.85.05-1.2.15-1.5 1.05-1.6 2.5-.1 1.45-.1 2.7-.1 4.5zm20.6-10.55h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3h-18.15c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm50.65-11.45v17.85c0 3.85.05 7.4.25 9.25.15 1.2.25 1.9 1.5 2.2.6.15 1.55.2 1.95.2.4 0 .6.15.6.3 0 .25-.15.4-.65.4-2.55 0-5.5-.15-5.7-.15-.2 0-3.15.15-4.45.15-.55 0-.75-.1-.75-.35 0-.15.15-.35.55-.35s.7 0 1.1-.05c.95-.15 1.1-.75 1.3-2.45.2-1.8.2-5.4.2-9.15v-17.85c-1.65 0-4.3 0-6.3.05-3.2.05-3.9.55-4.6 1.6-.45.7-.65 1.3-.75 1.55-.15.35-.25.4-.45.4s-.25-.2-.25-.45c-.05-.3.7-3.6 1-4.95.15-.6.3-.8.45-.8.35 0 1.3.45 2.2.55 1.75.2 3.15.25 3.2.25h16.4c1.4 0 2.9-.1 3.6-.25.65-.15.8-.2.95-.2.2 0 .3.25.3.45 0 1.4-.1 4.7-.1 5.1 0 .45-.2.6-.35.6-.25 0-.35-.2-.35-.6 0-.15 0-.2-.05-.7-.2-2-.85-2.5-5.9-2.55-1.9 0-3.45-.05-4.9-.05z",
        fill: "var(--primary)",
        fillRule: "nonzero"
      }
    ),
    /* @__PURE__ */ jsx(
      "path",
      {
        d: "M228.5 342.162h75.55",
        stroke: "var(--primary)",
        strokeWidth: "2",
        strokeLinecap: "square"
      }
    )
  ] });
}
const textSection = "_textSection_11lm6_1";
const logoContainer = "_logoContainer_11lm6_13";
const armor = "_armor_11lm6_41";
const styles$c = {
  textSection,
  logoContainer,
  armor
};
const Carousel = lazy(
  () => import("./index-DALLFNzR.js").then((module) => ({ default: module.Carousel }))
);
const Armor = lazy(() => import("./armor-r-Uarpz3.js").then((module) => ({ default: module.Armor })));
const title$6 = "Volkihar Knight";
const description$4 = "A lore-friendly armor mod for The Elder Scrolls V: Skyrim. Released on PC and Xbox One with over one million downloads across both platforms.";
const roles$2 = ["3D Modelling", "Texturing", "Graphic Design"];
const meta$6 = () => {
  return baseMeta({ title: title$6, description: description$4, prefix: "Projects" });
};
function VolkiharKnight() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `
            [data-theme='dark'] {
              --primary: oklch(87.71% 0.084 85.29);
              --accent: oklch(87.71% 0.084 85.29);
            }
            [data-theme='light'] {
              --primary: oklch(52.25% 0.121 81.53);
              --accent: oklch(52.25% 0.121 81.53);
            }
          `
        }
      }
    ),
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          srcSet: `${volkiharBackground} 1280w, ${volkiharBackgroundLarge} 1920w`,
          width: 1280,
          height: 720,
          placeholder: volkiharBackgroundPlaceholder,
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$6,
          description: description$4,
          linkLabel: "Get the mod",
          url: "https://www.nexusmods.com/skyrimspecialedition/mods/4806/",
          roles: roles$2
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${volkiharBanner} 800w, ${volkiharBannerLarge} 1100w`,
          width: 800,
          height: 436,
          placeholder: volkiharBannerPlaceholder,
          alt: "A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image.",
          sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        Image$1,
        {
          srcSet: `${volkiharBook} 490w, ${volkiharBookLarge} 960w`,
          width: 480,
          height: 300,
          placeholder: volkiharBookPlaceholder,
          alt: "A book containing a sketch depicting the logo and armor",
          sizes: `(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { children: [
        /* @__PURE__ */ jsx("div", { className: styles$c.armor, children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(Armor, { alt: "3D model of the Volkihar Knight armor" }) }) }),
        /* @__PURE__ */ jsxs("div", { className: styles$c.textSection, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Armor design" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "As a player I noticed there weren’t any heavy armor options for the Volkihar faction. This kinda sucks when you’ve specialised in heavy armor and decide to join the faction and discover they all wear light armor." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "My solution was to create a mod that combines meshes from the Volkihar faction armor with heavy plate armor. The mod builds upon textures and meshes from the base game, so it unifies with Skyrim’s overall aesthetic. I combined and modified the meshes in 3DS Max. To establish a cohesive design across the set, I edited existing textures, and designed custom textures in Photoshop." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx("div", { className: styles$c.logoContainer, children: /* @__PURE__ */ jsx(
          VolkiharLogo,
          {
            role: "img",
            "aria-label": "The Volkihar Knight logo, a monogram using the letters 'V' and 'K"
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, noMargin: true, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Identity design" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The monogram uses custom designed typography to get the right balance of weight and angularity. I combined this with Trajan for the text, which is also used for Skyrim’s game title wordmark." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
        Carousel,
        {
          placeholder: volkiharSlidePlaceholder,
          images: [
            {
              srcSet: `${volkiharSlide1} 960w, ${volkiharSlide1Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A female character wearing the black coloured armor set."
            },
            {
              srcSet: `${volkiharSlide2} 960w, ${volkiharSlide2Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A close up of the custom gauntlets design."
            },
            {
              srcSet: `${volkiharSlide3} 960w, ${volkiharSlide3Large} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A female character wielding a sword and wearing the red coloured armor."
            }
          ],
          width: 1920,
          height: 1080
        }
      ) }) }) }),
      /* @__PURE__ */ jsx(
        ProjectSection,
        {
          backgroundElement: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${volkiharEnderal} 1280w, ${volkiharEnderalLarge} 1920w`,
              width: 1280,
              height: 720,
              placeholder: volkiharEnderalPlaceholder,
              alt: "A promotional image from Enderal showing several characters in the game overlooking a distant city.",
              sizes: `100vw`
            }
          ),
          children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, centerMobile: true, noMargin: true, children: [
            /* @__PURE__ */ jsx(
              Image$1,
              {
                srcSet: `${volkiharEnderalLogo} 180w, ${volkiharEnderalLogoLarge} 360w`,
                width: 180,
                height: 200,
                placeholder: volkiharEnderalLogoPlaceholder,
                alt: "The Enderal game logo",
                sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`,
                style: { maxWidth: 220, width: "100%", marginBottom: 30 }
              }
            ),
            /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Featured in Enderal" }),
            /* @__PURE__ */ jsx(ProjectSectionText, { children: "I was super stoked to have my work featured in the major standalone mod Enderal, which won best fan creation at the game awards in 2016. Within the game my armor design can be found being used for the Wandering Mage armor set." }),
            /* @__PURE__ */ jsx(
              Button,
              {
                secondary: true,
                iconHoverShift: true,
                icon: "chevron-right",
                href: "https://store.steampowered.com/app/933480/Enderal_Forgotten_Stories/",
                children: "View on Steam"
              }
            )
          ] }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: VolkiharKnight,
  meta: meta$6
}, Symbol.toStringTag, { value: "Module" }));
const backgroundSprLarge = "/assets/spr-background-large-nYeU3Kau.jpg";
const backgroundSprPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAUDBAQEAwUEBAQFBQUGBwwIBwcHBw8LCwkMEQ8SEhEPERETFhwXExQaFRERGCEYGh0dHx8fExciJCIeJBweHx7/2wBDAQUFBQcGBw4ICA4eFBEUHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh4eHh7/wgARCAAQABgDAREAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAwQFCP/EABgBAQADAQAAAAAAAAAAAAAAAAMBAgQF/9oADAMBAAIQAxAAAADJ1+YyYzk2GgjwSltH/8QAHxAAAAUFAQEAAAAAAAAAAAAAAAECAwQFERITMSFh/9oACAEBAAE/AI8S7dyCqdm19D8TT0NzNasS4DqSkiVJN70x/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAIBEgMRE//aAAgBAgEBPwCxOQVtlTmKtT//xAAaEQACAgMAAAAAAAAAAAAAAAAAAQMSAgQR/9oACAEDAQE/AM5uMWzxmE1hw2QtVMjiof/Z";
const imageSprBackgroundVolcanismLarge = "/assets/spr-background-volcanism-large-t0jgu3IX.jpg";
const imageSprBackgroundVolcanismPlaceholder = "/assets/spr-background-volcanism-placeholder-BMmyN9Lv.jpg";
const imageSprBackgroundVolcanism = "/assets/spr-background-volcanism-bmTr0iXr.jpg";
const backgroundSpr = "/assets/spr-background-BYcr6wKu.jpg";
const imageSprComponentsDarkLarge = "/assets/spr-components-dark-large-DDLZMiq_.png";
const imageSprComponentsDarkPlaceholder = "/assets/spr-components-dark-placeholder-CS7TACCT.png";
const imageSprComponentsDark = "/assets/spr-components-dark-C4JG7Pbq.png";
const imageSprComponentsLightLarge = "/assets/spr-components-light-large-DsBvVT1Z.png";
const imageSprComponentsLightPlaceholder = "/assets/spr-components-light-placeholder-CszPt9Ak.png";
const imageSprComponentsLight = "/assets/spr-components-light-B7eB4kK-.png";
const imageSprDesignSystemDarkLarge = "/assets/spr-design-system-dark-large-Dqc1QDG6.png";
const imageSprDesignSystemDarkPlaceholder = "/assets/spr-design-system-dark-placeholder-BnG6UVwD.png";
const imageSprDesignSystemDark = "/assets/spr-design-system-dark-m_r7zp6p.png";
const imageSprDesignSystemLightLarge = "/assets/spr-design-system-light-large-DpW3ORXR.png";
const imageSprDesignSystemLightPlaceholder = "/assets/spr-design-system-light-placeholder-rqb9V2TD.png";
const imageSprDesignSystemLight = "/assets/spr-design-system-light-BDN1DcyF.png";
const sprTextureLarge = "/assets/spr-lesson-builder-dark-large-DZ47e5rw.jpg";
const sprTexturePlaceholder = "/assets/spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg";
const sprTexture = "/assets/spr-lesson-builder-dark-CleNpN1U.jpg";
const imageSprLessonBuilderLightLarge = "/assets/spr-lesson-builder-light-large-BcyuLqHy.jpg";
const imageSprLessonBuilderLightPlaceholder = "/assets/spr-lesson-builder-light-placeholder-Dq8oUDzc.jpg";
const imageSprLessonBuilderLight = "/assets/spr-lesson-builder-light-UMmbA8fJ.jpg";
const videoSprMotionLarge = "/assets/spr-motion-large-3xc88jM5.mp4";
const videoSprMotionPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAIBAQIBAQICAgICAgICAwUDAwMDAwYEBAMFBwYHBwcGBwcICQsJCAgKCAcHCg0KCgsMDAwMBwkODw0MDgsMDAz/2wBDAQICAgMDAwYDAwYMCAcIDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAz/wgARCAAUACADAREAAhEBAxEB/8QAGQAAAwADAAAAAAAAAAAAAAAABAUGAQcJ/8QAGgEAAgMBAQAAAAAAAAAAAAAAAwUBBAYCAP/aAAwDAQACEAMQAAAA5g6JXYZPaa7bIz7iw8vkipxO215vYnFgU8PrMw2YrP/EACIQAAICAgICAgMAAAAAAAAAAAECAwUABAYRIVESExQxQf/aAAgBAQABPwCPY2b2D7piSW/fecY4hVGgeTZmQS5zCy16a0KazBwD/MquaI+l8HTKeaJ6gkessrCRvmizMB67w1bPtF3YtkahfAyKdoKvpT14yTckadvOfkP7zgmlHZXiRygspOf/xAAfEQACAwEAAQUAAAAAAAAAAAAAAgEDEQQSBSEiQVH/2gAIAQIBAT8AvvltaTo7bZsxDmtfx+RW/wBjxsYTxx5aRX7YImEn6KenUq9mMf/EAB4RAAEEAgMBAAAAAAAAAAAAAAIAAQMEERIFECIx/9oACAEDAQE/AK1dh8iqtCEYdj+q1EG2BUseFEWr5TX301dFN6ypZNkyz1yUpBG7iv/Z";
const videoSprMotion = "/assets/spr-motion-DNnC5DgY.mp4";
const imageSprSchema1DarkLarge = "/assets/spr-schema-1-dark-large-CeSqw0xT.png";
const imageSprSchema1DarkPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABeUlEQVR4AWJU1rZkAhRHHjgS2DAQ48jO//+bW4u5WHB6Qw23uBEDCapaqypJStBu7XNakWEHsmrv9cPe17Pbz/l88HsRSdAiCZCYECA8vPdcdRO4Qn8DSp/zOadbhmtULlCzgO2t8Hrvkrp+7goZwtTweN4ramJ/7n2655LnCcqD8Oc4NqJGMSKgb9UJIGyGBOxupwnne3RaqU1IItCez+n+wGinz1FTqyovD899sXuCzzndPU/geKj9jQI4XmtD4vQ7iPdLKrWSSgKQeWTn5TmlrLUq5EchBx2VPb5506iVStWqlLVGDNmKOGO4KvbtIFXFQGoTEypFrgVfpwGqilultq/fqtza6bYqWoVJQk53ztmQcOtaKwF6uUKAyVd7+uBeV0LI5ZWGymUz3FCQ4d09KP4eRXl52n0H1R3tbu//lKeKwBa6/fr6nNNE+6q8mcEct3r6o53Mvba/87x576n5E74VUvw3/i9voyQof8O8bggC4W+Y158Azxk6hkhW1QQAAAAASUVORK5CYII=";
const imageSprSchema1Dark = "/assets/spr-schema-1-dark-DrL_5NQ4.png";
const imageSprSchema1LightLarge = "/assets/spr-schema-1-light-large-CkTsXpYP.png";
const imageSprSchema1LightPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABMUlEQVR4AXyRga7dIAxD7dDvvtL97j3wqCMjtEnvCKWUOk5JuNaS1LGqSO6I/yiZHzPnBKDgfXQA2gxGAU2kD0lcbMs2qpdB9nfW+Tkbv3v/wI8TlpdcN3SqT0XWXgD/uYczjNUuOYq8dO10RBXa/vC0rokr8nrrTN/mfPOm94IZn89nK3w7tYCmdee12kPGz9NbeaVuFEhaa2X6io6tSPcRdGE/t2rs2DkyqZh4+ncmvrIkhMxjzrln+o506c/iXnNqXUiq7tzcrNkzn8ISFJpCEECIQKV9foDmYWgFrK43xsKHD0JLB0WpnYTm0vG2pZDHmXX8UuGWM2dg/O7pjTHgb9ARRnfUdgqe9fV/EXWsqpzkMq1LrQwwkJaa8f1+aYahwU3ny3iIvwH9HQwMTnUAjevehnsmuFYAAAAASUVORK5CYII=";
const imageSprSchema1Light = "/assets/spr-schema-1-light-B5dEN2xi.png";
const imageSprSchema2DarkLarge = "/assets/spr-schema-2-dark-large-WIGUIqzX.png";
const imageSprSchema2DarkPlaceholder = "/assets/spr-schema-2-dark-placeholder-BVZ4WW8t.png";
const imageSprSchema2Dark = "/assets/spr-schema-2-dark-DYmNi06o.png";
const imageSprSchema2LightLarge = "/assets/spr-schema-2-light-large-h4BJSsho.png";
const imageSprSchema2LightPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAhCAIAAACN57ZmAAABAElEQVR4AYyTgYrEMAhEVfPf/e7e0cxlHTqIALePrEgyGjVb33sDeJ7nOFa4exReWBHndxS/xX3fP8XxT6QJ6gAoE5Mpn06XIrgbRWYea40FYBeMO7aXpatCEdIRE9IJ5mbvIyBGfQRgevkWACRqlUH77seOfgtOtAaU2l869oIi6mh5FMqh2QozvMsCxfsM6YX8OZd271lBt7O6CB7bDbHhvj8GKjpap4oIzWbmY5vmdWt4RkkboRd76sn8LIO/4GVpZpqOb99mEvEPtvo/gI6syMyQjlI5RAGBwv4jvPhW1z+LjrLkdV2cbjaG9GNHp6MMfVaj04n2Dd/xt+GiDgBUWvviH6BKngAAAABJRU5ErkJggg==";
const imageSprSchema2Light = "/assets/spr-schema-2-light-B53tZDTp.png";
const imageSprStoryboarderDarkLarge = "/assets/spr-storyboarder-dark-large-CILuJaRq.png";
const imageSprStoryboarderDarkPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAMAAADbT899AAABp1BMVEUYIS0eJzMcJTAaIy8hKjYfKTUxOUMmLjkiKzczPEgnMDsdJjI8Q0wkLDhiaHFOVV0vN0ItNkIjLDh5foZESkozO0YqNkU3PkInMT4fLDp9golzeYBxd31GTVdASFE2P0suOUcrMz4lLTklLDUhKjSIjJGPkpB/hIx9gYV8gYJ3e4GGiHtmbHJfZnBOV2FKUVxFTFZES1VQVlJNUlE3PkcxOUUtNT4wNzwqMjsnLzcjKzMfJzGipZ2GiomSlIh2fIVtdoBwdXtpb3dnbXVVY3JhZm1YXmZna2NUWmFBT19dYVw6SFcxOkcqNkQvNj8lMD0qMTianZePlJaLkJaCiI+TlY15g42YmoqLjomCh4lueYZyeoSDhoB7f39ncHt2eXhrcXiChXdia3Vzd3R9gXNscXJaY2xtcWtpbWlvc2ZVXGVSV1snQVpWXFlIUFlKUFcwPEo/RUY7QUYiM0U1PD8zOz4qMT0iLjyhpJiWmJGIi356fXd5fHBzd2teY2srTGtNW2pjZ15bX15gZF1HTVM1RFMqPE86Qk4lOk5KUE1CSE0gMEAyOT5Z62yvAAACBUlEQVQoz1WOZXfiUBRFHwkhBoEECKS4uxdvgeIOU/dO3d3G3Wd+9Ly0i7Xa8+mst/e794KPJz94Pc4R0mchOOouJUta+R44+XU9sEsxTPI0GIYR+J0q2bXy4PqvIED+XKBpGiMoVkuSViAIBIfjuF3BKcRwdtgJqGPEgCUtli6As2wyktTKVLKHaGFX6e8F4V7PdkktCwhKJTcplZGYORY1maLRiNh/Xlh5nu+xrI0CkDeDU8aXtQ+1GsOEQmXYQ+FWq9P5ftHT26XANn4eXHJPu/xTRoPfbzB4XK7Z4la1Wv3U6lgHUhqo5Mcb7omJF5M+r3dsTK2enZme8ZRKy8vrexGLHkNAX368PfdKFERuMKo9nrFiaWV+fmUrDAUU9K/i+28WFgqraz6v2lhmgpVKkAmtF9UGJmyhJChI6TTt9zubm2/XJl1L/vJe/agZVirrTIU5iiZxGgUZaMTbXxsHG4tut2+3rjyLmeVys+nMZCYpeALA8cw/3aUm8WV78fXc6m7z3Cwfl7GqpFaWopwICgBHOB3ZYfoqcRAoFAL7p98gt+EKBXyXiBxgEhpB8o60pv0uENhpxP9ATkklCIKgEMPQoobms7rE58PDxqlG18/ghPh3lMeKOoc6TSL++/I2kx3NHgnIg4Dkhumbm9t0NgdXjvhoxaORzzkcjlwern6KwX+M/FwerB/Y+wAAAABJRU5ErkJggg==";
const imageSprStoryboarderDark = "/assets/spr-storyboarder-dark-BuwX6fEO.png";
const imageSprStoryboarderLightLarge = "/assets/spr-storyboarder-light-large-Cs7Lwjrs.png";
const imageSprStoryboarderLightPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAUCAMAAADbT899AAABEVBMVEXz9PT19fby8vLy8vTx8vT29/jw8fPv8PHz9Pbx8/Xt7/H19e309PHt7u/q7O3s7e7l5uj19fTo6+708+vi4uP189/6+vr4+Pnr7/P19fLx8fH29vD19OXh4eDu8fXq6uzo6evm6Orr6ujn5+jx8Obt7Obk5OXg4uXn5uLn7fPq7fDm6/Dm6ezv7uXy8OHy8N3e3d3V2Nv5+fb09PP29evl5+rd4+n29efi5Of08uP39/bq8PXi7PPh6fDu7u7c5u7v7+zx8Ovg5uvu7erz8ujY4ejm5uXd4eTW3ePq6eHf3t3Z6fXC3fT4+PPo7PDx8e3f5+3q6OXd3uDt7N/Y3N/Q1tva2tjIzdCl0fTT5fPa3uJN/EehAAAB4ElEQVQoz12Q53LiQAyAZXuzaxtcsM0FTHEvdAi9EwgtvV7u7v0f5NYwmcnk+7Mr6dNII/hzfzflmYsfMKBEnc/Pj70G939nOYzYnxBZfe103kca3M2mZcRxLMcixCL6cAkIi1Y/ika2AtNyGSd5FmGCMTqXEcZiVXP6jiUBL9CI9ppEUiSRIA6AZsq5XKWqabIiAQMsISYdqtieLUuY43lBKOcqlVqtpsmyQgVzsSCmuXDDkqHKhAo8rc/my+d5rSqJkGFXbrBZrdzd7e+24SmE43CuMl8ut9t1vSqKMEk/NRq+7wcxFUqqLBFMco/Pg+3hMKhXMYZJXvebzbEfvJRu6QzbUhT5sbYeHD46e0fCCK4KerPVajUbwUsYhqoXqqrq1NeDf533yBYRFR56xWw2O7653rjuzgsNw4jUer0/2kd9mQgC/Loq9IrF4lDXrzdBHBvtdvt15Gia5diyiE7CQyGlpyi63zge41KpZHiyJIrJ1QSgwuUkk88X0gX9Ztx8ezvG8c6zJHpRxAnA80CFCyaTKDpdpdVqBK6liPSezImzcMEwmW7ha9cn0+QAmDPAfQmZfKo3HBaHqXQaAGj/dyH5QDedSsjTeoZhqHJagENwSQWgUCOhC98QBET+A7EgPbhEF+2BAAAAAElFTkSuQmCC";
const imageSprStoryboarderLight = "/assets/spr-storyboarder-light-DqGEXS8o.png";
const container = "_container_1lkfa_3";
const options = "_options_1lkfa_11";
const button$3 = "_button_1lkfa_51";
const indicator = "_indicator_1lkfa_133";
const styles$b = {
  container,
  options,
  button: button$3,
  indicator
};
const SegmentedControlContext = createContext({});
const SegmentedControl = ({
  children,
  currentIndex,
  onChange,
  label,
  ...props
}) => {
  const id = useId();
  const labelId = `${id}segmented-control-label`;
  const optionRefs = useRef([]);
  const [indicator2, setIndicator] = useState();
  const handleKeyDown = (event) => {
    const { length } = optionRefs.current;
    const prevIndex = (currentIndex - 1 + length) % length;
    const nextIndex = (currentIndex + 1) % length;
    if (["ArrowLeft", "ArrowUp"].includes(event.key)) {
      onChange(prevIndex);
      optionRefs.current[prevIndex].current.focus();
    } else if (["ArrowRight", "ArrowDown"].includes(event.key)) {
      onChange(nextIndex);
      optionRefs.current[nextIndex].current.focus();
    }
  };
  const registerOption = useCallback((optionRef) => {
    optionRefs.current = [...optionRefs.current, optionRef];
  }, []);
  const unRegisterOption = useCallback((optionRef) => {
    optionRefs.current = optionRefs.current.filter((ref) => ref !== optionRef);
  }, []);
  useEffect(() => {
    var _a;
    const currentOption = (_a = optionRefs.current[currentIndex]) == null ? void 0 : _a.current;
    const resizeObserver = new ResizeObserver(() => {
      const rect = currentOption == null ? void 0 : currentOption.getBoundingClientRect();
      const left = currentOption == null ? void 0 : currentOption.offsetLeft;
      setIndicator({ width: rect == null ? void 0 : rect.width, left });
    });
    resizeObserver.observe(currentOption);
    return () => {
      resizeObserver.disconnect();
    };
  }, [currentIndex]);
  return /* @__PURE__ */ jsx(
    SegmentedControlContext.Provider,
    {
      value: { optionRefs, currentIndex, onChange, registerOption, unRegisterOption },
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: styles$b.container,
          role: "radiogroup",
          tabIndex: "0",
          "aria-labelledby": labelId,
          onKeyDown: handleKeyDown,
          ...props,
          children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { as: "label", id: labelId, children: label }),
            /* @__PURE__ */ jsxs("div", { className: styles$b.options, children: [
              !!indicator2 && /* @__PURE__ */ jsx(
                "div",
                {
                  className: styles$b.indicator,
                  "data-last": currentIndex === optionRefs.current.length - 1,
                  style: cssProps(indicator2)
                }
              ),
              children
            ] })
          ]
        }
      )
    }
  );
};
const SegmentedControlOption = ({ children, ...props }) => {
  const { optionRefs, currentIndex, onChange, registerOption, unRegisterOption } = useContext(SegmentedControlContext);
  const optionRef = useRef();
  const index2 = optionRefs.current.indexOf(optionRef);
  const isSelected = currentIndex === index2;
  useEffect(() => {
    registerOption(optionRef);
    return () => {
      unRegisterOption(optionRef);
    };
  }, [registerOption, unRegisterOption]);
  return /* @__PURE__ */ jsx(
    "button",
    {
      className: styles$b.button,
      tabIndex: isSelected ? 0 : -1,
      role: "radio",
      "aria-checked": isSelected,
      onClick: () => onChange(index2),
      ref: optionRef,
      ...props,
      children
    }
  );
};
const video = "_video_169iy_1";
const sidebarImages$1 = "_sidebarImages_169iy_25";
const sidebarImage$1 = "_sidebarImage_169iy_25";
const styles$a = {
  video,
  sidebarImages: sidebarImages$1,
  sidebarImage: sidebarImage$1
};
const Earth = lazy(() => import("./earth-CMFviiDo.js").then((module) => ({ default: module.Earth })));
const EarthSection = lazy(
  () => import("./earth-CMFviiDo.js").then((module) => ({ default: module.EarthSection }))
);
const title$5 = "Designing the future of education";
const description$3 = "I worked as the design lead on a major iteration of Smart Sparrow’s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.";
const roles$1 = [
  "Art Direction",
  "UX and UI Design",
  "Front End Development",
  "Motion Design"
];
const meta$5 = () => {
  return baseMeta({ title: title$5, description: description$3, prefix: "Projects" });
};
const SmartSparrow = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const themes2 = ["dark", "light"];
  const handleThemeChange = (index2) => {
    toggleTheme(themes2[index2]);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          opacity: isDark ? 0.5 : 0.8,
          src: backgroundSpr,
          srcSet: `${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`,
          placeholder: backgroundSprPlaceholder
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$5,
          description: description$3,
          url: "https://www.smartsparrow.com/",
          roles: roles$1
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          raised: true,
          srcSet: isDark ? `${sprTexture} 1280w, ${sprTextureLarge} 2560w` : `${imageSprLessonBuilderLight} 1280w, ${imageSprLessonBuilderLightLarge} 2560w`,
          width: 1280,
          height: 800,
          placeholder: isDark ? sprTexturePlaceholder : imageSprLessonBuilderLightPlaceholder,
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`,
          alt: "The aero lesson builder app dragging an audio component into a screen about plant cells."
        },
        theme
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The problem" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { children: "In 2017, Smart Sparrow began a project to build an entirely new platform to from the ground up to serve as the most powerful tool for educators to create online learning experiences. The old platform was built in Flash, and there were a number of user experience problems to solve in the process of moving the platform to Javascript. The primary goals for the project were reducing barriers to collaboration, and making the platform both easier for new users, but with plenty of room to scale for advanced users." })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: isDark, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: isDark ? `${imageSprComponentsDark} 1024w, ${imageSprComponentsDarkLarge} 2048w` : `${imageSprComponentsLight} 1024w, ${imageSprComponentsLightLarge} 2048w`,
            width: 1024,
            hright: 800,
            placeholder: isDark ? imageSprComponentsDarkPlaceholder : imageSprComponentsLightPlaceholder,
            alt: `A set of ${theme} themed components for the aero design system`,
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsx(ProjectTextRow, { children: /* @__PURE__ */ jsxs(
          SegmentedControl,
          {
            currentIndex: themes2.indexOf(theme),
            onChange: handleThemeChange,
            children: [
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Dark theme" }),
              /* @__PURE__ */ jsx(SegmentedControlOption, { children: "Light theme" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "The aero design system" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "To streamline the design process across designers and engineers for such a large project, it was important to lay the foundations with a strong, flexible design system that could evolve during the product’s development cycle. This would inform both the aesthetics and user experience across the product itself as well as the website and marketing material." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx(
          Image$1,
          {
            raised: true,
            srcSet: isDark ? `${imageSprDesignSystemDark} 1280w, ${imageSprDesignSystemDarkLarge} 2560w` : `${imageSprDesignSystemLight} 1280w, ${imageSprDesignSystemLightLarge} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? imageSprDesignSystemDarkPlaceholder : imageSprDesignSystemLightPlaceholder,
            alt: "The homepage of the aero design system docs website linking to principles and components.",
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Design system docs" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A design system is useless if no one knows how to use it, so we put together a comprehensive documentation website to cover principles, ux, accessibility, and component guidelines for designers and engineers working with the system." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ThemeProvider, { theme: "dark", "data-invert": true, children: /* @__PURE__ */ jsx(
        ProjectSection,
        {
          backgroundOverlayOpacity: 0.5,
          backgroundElement: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`,
              width: 1280,
              height: 900,
              placeholder: imageSprBackgroundVolcanismPlaceholder,
              alt: "A dramatic ocean scene with lava forming a new land mass.",
              sizes: "100vw"
            }
          ),
          children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { width: "full", children: [
            /* @__PURE__ */ jsx(ProjectSectionContent, { width: "full", children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "s", children: [
              /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Motion design" }),
              /* @__PURE__ */ jsx(ProjectSectionText, { children: "Animation was a core principle in making the authoring experience a more understandable process. Elements animate in ways that indicate the cause and effect of each interaction to improve the fluidity of the overall experience." })
            ] }) }),
            /* @__PURE__ */ jsx(
              Image$1,
              {
                raised: true,
                className: styles$a.video,
                srcSet: `${videoSprMotion} 1280w, ${videoSprMotionLarge} 2560w`,
                width: 1280,
                height: 800,
                placeholder: videoSprMotionPlaceholder,
                alt: "A learning designer building and deploying an interactive lesson on volcanism using the app.",
                sizes: `(max-width: ${media.mobile}px) 100vw, 50vw`
              }
            )
          ] })
        }
      ) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Encouraging adaptivity" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A major part of solving for collaboration was being able to visualize the learner experience in the editor. This was especially beneficial for subject matter experts and instructors need to review and give feedback on the higher level structure without having to dig through all of the adaptivity scenarios screen by screen." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            raised: true,
            srcSet: isDark ? `${imageSprStoryboarderDark} 1280w, ${imageSprStoryboarderDarkLarge} 2560w` : `${imageSprStoryboarderLight} 1280w, ${imageSprStoryboarderLightLarge} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? imageSprStoryboarderDarkPlaceholder : imageSprStoryboarderLightPlaceholder,
            alt: "A drag and drop storyboard style editor for creating an adaptive lesson.",
            sizes: `(max-width: ${media.mobile}px) 100vw, 80vw`
          },
          theme
        )
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { children: [
        /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "An extensible plugin ecosystem usable by everyone" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "The most powerful aspect of the platform is the ability to create custom plugins for any content, whether it be a degree, course, lesson, screen, or interactive component. Out of the box these can be made configurable with minimal effort from developers. Learning designers can then edit everything using a common configuration interface." })
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: styles$a.sidebarImages, children: [
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$a.sidebarImage,
              srcSet: isDark ? `${imageSprSchema2Dark} 260w, ${imageSprSchema2DarkLarge} 520w` : `${imageSprSchema2Light} 260w, ${imageSprSchema2LightLarge} 520w`,
              width: 260,
              height: 660,
              placeholder: isDark ? imageSprSchema2DarkPlaceholder : imageSprSchema2LightPlaceholder,
              alt: "Configuration options for a component.",
              sizes: `(max-width: ${media.mobile}px) 50vw, 25vw`
            }
          ),
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$a.sidebarImage,
              srcSet: isDark ? `${imageSprSchema1Dark} 260w, ${imageSprSchema1DarkLarge} 520w` : `${imageSprSchema1Light} 260w, ${imageSprSchema1LightLarge} 520w`,
              width: 260,
              height: 660,
              placeholder: isDark ? imageSprSchema1DarkPlaceholder : imageSprSchema1LightPlaceholder,
              alt: "Configuration options for text.",
              sizes: `(max-width: ${media.mobile}px) 50vw, 25vw`
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ThemeProvider, { theme: "dark", "data-invert": true, children: /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsxs(
        Earth,
        {
          className: styles$a.earth,
          hideMeshes: useMemo(
            () => ["Atmosphere", "EarthPartial", "Chunk", "EarthFull"],
            []
          ),
          position: useMemo(() => [0, 0, 0], []),
          labels: useMemo(
            () => [
              {
                position: [0.54, 0.19, 0.18],
                text: "Pacific ring of fire",
                hidden: true
              },
              {
                position: [0.47, -0.38, 0.04],
                text: "Ruapehu",
                hidden: true
              },
              {
                position: [0.22, 0.44, -0.35],
                text: "St. Helens",
                hidden: true
              },
              {
                position: [0.16, -0.06, 0.58],
                text: "Krakatoa",
                hidden: true
              },
              {
                position: [0.11, 0.2, -0.56],
                text: "Parícutin",
                hidden: true
              },
              {
                position: [0.52, 0.2, -0.23],
                text: "Kīlauea",
                hidden: true
              },
              {
                position: [-0.24, 0.75, 0.24],
                text: "Mantle",
                delay: 800,
                hidden: true
              },
              {
                position: [-0.24, 0.55, 0.24],
                text: "Outer core",
                delay: 800,
                hidden: true
              },
              {
                position: [-0.24, 0.35, 0.24],
                text: "Inner core",
                delay: 800,
                hidden: true
              }
            ],
            []
          ),
          scale: 0.6,
          children: [
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                scrim: true,
                animations: ["0:loop"],
                camera: [0, 0, 1.5],
                meshes: ["Atmosphere", "EarthFull"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Next-generation learning experiences" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "The flexibility of the product allowed for developers to create engaging interactive experiences as highly configurable plugins that could then be used and manipulated by learning designers." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [0, 0, 2.4],
                meshes: ["Atmosphere", "EarthFull"]
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.14, -1.39, 0.94],
                meshes: ["Atmosphere", "EarthFull"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "end", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Bringing 3D into learning" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "One really cool example is the 3D screen plugin. Learning designers can load any model into it and then configure camera positions to animate to for each section." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.17, 0.69, -1.47],
                meshes: ["Atmosphere", "EarthFull"],
                labels: [
                  "Pacific ring of fire",
                  "Ruapehu",
                  "St. Helens",
                  "Krakatoa",
                  "Parícutin",
                  "Kīlauea"
                ],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "start", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Interactivity" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "Learners can then be directed to specific parts of the model and shown labels. They’re also able to click and drag to orbit around and freely explore at any time." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [1.81, 0.51, 0.43],
                meshes: ["Atmosphere", "EarthFull"],
                labels: [
                  "Pacific ring of fire",
                  "Ruapehu",
                  "St. Helens",
                  "Krakatoa",
                  "Parícutin",
                  "Kīlauea"
                ]
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                animations: ["0:loop"],
                camera: [0.37, 1.02, 1.84],
                meshes: ["EarthPartial", "Chunk"],
                labels: ["Mantle", "Outer core", "Inner core"],
                children: /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs(ProjectTextRow, { justify: "end", width: "s", children: [
                  /* @__PURE__ */ jsx(ProjectSectionHeading, { level: 4, as: "h3", children: "Animation" }),
                  /* @__PURE__ */ jsx(ProjectSectionText, { children: "Learning designers can pick an animation included in the model to play or loop for any section without having to use any complex animation tools." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx(
              EarthSection,
              {
                scrimReverse: true,
                animations: ["0:loop"],
                camera: [0.37, 1.02, 1.84],
                meshes: ["Atmosphere", "EarthFull"]
              }
            )
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { center: true, centerMobile: true, noMargin: true, children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            width: "141",
            height: "43",
            viewBox: "0 0 141 43",
            fill: "currentColor",
            style: { marginBottom: "2em" },
            children: [
              /* @__PURE__ */ jsx("path", { d: "M87.92 30.05a.3.3 0 0 0-.34-.18l-.04.02c-.42.08-.74.06-.97-.1-.32-.2-.47-.69-.47-1.47V21.3c0-2.75-1.66-4.14-4.94-4.14-2.93 0-5.23 1.37-5.23 3.12 0 .9.55 1.55 1.37 1.64a1.7 1.7 0 0 0 1.42-.56c.72-.75.63-1.64-.25-2.6a3.52 3.52 0 0 1 2.48-.85c1.7 0 2.43 1 2.43 3.33v1.78c-.4.12-.77.24-1.45.4a18.9 18.9 0 0 0-4.7 1.52 3.19 3.19 0 0 0-1.78 2.99c0 1.46.98 3.17 3.73 3.17 1.54 0 2.92-.72 4.33-2.26.12 1.6.74 2.2 2.24 2.2.72 0 1.3-.16 1.98-.49a.4.4 0 0 0 .2-.49Zm-4.54-2.15c-.33.46-1.42 1.83-2.78 1.83-1.84 0-2.23-1.27-2.23-2.34 0-1.75 1.37-2.57 5.01-3.46v3.97Zm35.23 3.25c-3.9 0-6.83-3-6.83-7 0-3.9 3.06-7.09 6.83-7.09 3.81 0 6.8 3.06 6.8 6.98 0 4.4-3.53 7.11-6.8 7.11Zm-.15-13.34c-1.68 0-3.61.72-3.61 6.28 0 4.25 1.27 6.31 3.88 6.31 2.5 0 3.61-1.94 3.61-6.3 0-4.23-1.27-6.29-3.88-6.29Zm-60.06-.5c0 3.24-.8 5.02-4.94 5.02h-2.2v-9.78h2.29c4.28 0 4.85 2.4 4.85 4.76Zm-7.14 11.01v-5.09h1.99c2.96 0 5.22-.61 6.7-1.83a5.06 5.06 0 0 0 1.88-4.03c0-4.65-4.55-5.63-8.37-5.63h.01-7.74a.32.32 0 0 0-.32.31v.03-.01c0 .16.1.3.25.36.69.25 2.56-.1 2.56 1.88v14.01c0 1.02-.46 1.74-2.55 1.94a.31.31 0 0 0-.3.3v.06c0 .17.15.3.33.3h8.27c.18 0 .32-.13.32-.3v-.05a.3.3 0 0 0-.3-.3c-2.27-.19-2.73-.88-2.73-1.95v-5.08 5.08ZM68.1 17.06c-3.6 0-6.53 3.21-6.53 7.17 0 4 2.75 6.9 6.53 6.9 3.18 0 4.73-1.87 5.62-3.28a.31.31 0 0 0-.09-.42l-.04-.03a.32.32 0 0 0-.44.07c-1.17 1.44-2.19 2.28-3.96 2.28-2.23 0-4.62-1.52-4.62-5.79v-.71h9.15c.03 0 .05-.02.05-.05v-.07a5.72 5.72 0 0 0-1.4-4.42 5.67 5.67 0 0 0-4.27-1.65Zm-3.47 5.29c.3-2.92 1.45-4.52 3.26-4.52.91 0 1.58.25 2.06.76.65.7.93 1.96.82 3.76h-6.14Zm41.39.15c-2.5-.69-3.48-1.39-3.48-2.5 0-1.26 1.01-2.17 2.4-2.17 1.65 0 2.36.77 4.1 3.64l.01.03.03.03h.25c.18 0 .32-.14.32-.32v-4.1c0-.03-.02-.05-.02-.05h-.34c-.1 0-.19.04-.25.11l-.55.66a6.64 6.64 0 0 0-2.98-.77c-2.87 0-4.88 1.75-4.88 4.25 0 2.36 1.58 3.24 4.31 3.97 2.66.71 3.6 1.46 3.6 2.85 0 1.54-1.51 2.23-2.59 2.23-2 0-2.84-.73-4.76-4.13l-.02-.04-.02-.02h-.26a.32.32 0 0 0-.32.31v4.6c0 .03.02.06.05.06h.32c.09 0 .17-.04.23-.1l.87-.86c1.03.63 2.56.96 3.56.96 1.5 0 2.72-.47 3.55-1.36a4.54 4.54 0 0 0 1.15-3.14c0-2.14-1.16-3.26-4.28-4.14Zm-15.14 6.78c0 .7-.18.94-1.33 1.01a.32.32 0 0 0-.3.31c0 .18.15.31.32.31h5.66a.3.3 0 0 0 .31-.3c0-.17-.13-.3-.3-.31-1.3-.07-1.65-.28-1.65-1.02v-8.2c.94-1.52 1.6-2.32 2.74-2.56-.06.2-.1.42-.1.6 0 1 .7 1.7 1.72 1.7.99 0 1.68-.7 1.68-1.7 0-.93-.6-2.03-2.28-2.03-1.37 0-2.69.78-3.82 2.64v-2.1a.39.39 0 0 0-.4-.39l-3.56.1a.3.3 0 0 0-.3.3v.05c0 .16.1.3.26.31 1.19.17 1.35.73 1.35 1.3v9.98Zm39.15-12.05c.08 0 .16.04.22.1.06.05.1.13.1.22v2.33s1.17-2.74 4.94-2.74h.04c2.35 0 3.7 1.48 3.7 4.06v8.06c0 .71.18.95 1.32 1.02.17 0 .3.14.3.31 0 .17-.14.31-.32.31h-5.08a.32.32 0 0 1-.03-.63c.92-.08 1.07-.3 1.07-1v-7.29c0-2.4-.7-3.33-2.47-3.33-1.2 0-2.19 1.03-2.8 1.9 0 0-.31.38-.65 1.12l.03 7.6c0 .7.15.92 1.05 1a.32.32 0 0 1-.03.63h-5.06a.32.32 0 0 1-.31-.31c0-.17.13-.3.3-.31 1.14-.08 1.32-.3 1.32-1.02v-9.95c0-.58-.16-1.14-1.36-1.31a.31.31 0 0 1-.26-.31v-.05c0-.17.13-.3.3-.31l3.68-.1Z" }),
              /* @__PURE__ */ jsx(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M35.47 30.82c6.24-11.43 4.15-22.73-4.81-27.77C20.76-2.5 7.84.52 2.28 12.46c-3.84 8.2-2.1 22.48 6.82 27.6 8.92 5.1 20.9.81 26.37-9.23Zm-3.02-12.15c.3-2.3-.24-5.1-2-6.95l-.02-.02c-3.38-3.76-8.06-4-11.02-3.92a16.61 16.61 0 0 0-7.55 2.14c-1.68.86-3.2 2.35-3.81 3.08-.4.47-1.06 1.44-.7 2.31.29.73 1.4.68 1.81.37.22-.16.45-.37.7-.6l.72-.64c2.53-2.07 4.78-3.37 10-3.37 5.23 0 8.06 3.22 8.06 6.09 0 2.87-1.38 4.82-3.97 6.09a10.54 10.54 0 0 1-4.4 1.18c.13-2.78.2-5.41.2-5.41 0-.33.02-.65.03-.96.07-1.55.12-2.72-1.01-2.94-1.36-.27-3.86 0-3.9 1.52-.06-.23.25 12.51.31 12.77l.02.29c.03.32.15.6.35.83a1.38 1.38 0 0 0 .98.41c.28 0 .68-.05 1.09-.16.5-.15 1.02-.39 1.31-.77.15-.2.27-.38.34-.72.04-.24.13-1.72.15-2.15 2.75-.02 5.54-.53 7.67-1.8 2.68-1.62 4.29-4.04 4.64-6.67ZM18.23 32.41a2.12 2.12 0 0 1 1.69 1.99c0 .52-.22.99-.63 1.32-.35.28-.8.43-1.3.43h-.01c-.23 0-.46-.03-.69-.1-.39-.1-.7-.29-.9-.52-.19-.22-.31-.5-.37-.83-.08-.5.05-1.04.36-1.48a1.9 1.9 0 0 1 1.53-.84c.1 0 .22 0 .32.03Z"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project outcomes" }),
        /* @__PURE__ */ jsxs(ProjectSectionText, { children: [
          "Ultimately the project was successful after Smart Sparrow and the aero platform were",
          " ",
          /* @__PURE__ */ jsx(Link, { href: "https://www.prnewswire.com/news-releases/pearson-acquires-interactive-learning-technology-from-smart-sparrow-300987673.html", children: "acquired by Pearson in 2020" }),
          " ",
          "to become a foundation for their next generation learning platform."
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: SmartSparrow,
  meta: meta$5
}, Symbol.toStringTag, { value: "Module" }));
const frontmatter = {
  "title": "Hello world: how I built this site",
  "abstract": "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
  "date": "2022-04-21",
  "banner": "/static/hello-world-banner.jpg"
};
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h2: "h2",
    h3: "h3",
    img: "img",
    li: "li",
    p: "p",
    ul: "ul",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxs(Fragment$1, {
    children: [jsx(_components.h2, {
      id: "how-it-all-started",
      children: "How it all started"
    }), "\n", jsxs(_components.p, {
      children: [`Back in 2018 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold katakana lettering on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my `, jsx(_components.a, {
        href: "/404",
        children: "404 page"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/static/inspiration.png",
        alt: "A scene from Ghost in the Shell (1995) with the Major cloaking with thermoptic camouflage; the poster for Akira; The Matrix's digital rain effect",
        width: "1495",
        height: "1418"
      })
    }), "\n", jsx(_components.h2, {
      id: "the-first-iteration",
      children: "The first iteration"
    }), "\n", jsx(_components.p, {
      children: "I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship."
    }), "\n", jsx(_components.p, {
      children: "The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage."
    }), "\n", jsxs(_components.p, {
      children: ["Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything. A big change along the way was replacing images of my work in static mockups with real-time rendered interactive 3D devices using models I created for the ", jsx(_components.a, {
        href: "https://www.figma.com/community/plugin/819335598581469537/Clay-Mockups-3D",
        children: "Clay Mockups 3D Figma plugin"
      }), "."]
    }), "\n", jsx(_components.p, {
      children: jsx(_components.img, {
        src: "/static/clay-mockups.png",
        alt: "Thumbnail for my Clay Mockups 3D plugin",
        width: "1920",
        height: "960"
      })
    }), "\n", jsx(_components.h2, {
      id: "migrating-to-nextjs",
      children: "Migrating to Next.js"
    }), "\n", jsx(_components.p, {
      children: "With Create React App I was using a somewhat janky and unmaintained package to prerender the site as static HTML in Puppeteer. This worked okay for the most part, but I wanted a more robust solution for posting articles (like this one you're reading) using MDX. I had a half baked version of this lying dormant in the repo, but it never felt good enough to publish. I looked at a few options like Gatsby, Vite, and Parcel, and Remix, but Next.js stood out as the most suited to my needs."
    }), "\n", jsxs(_components.ul, {
      children: ["\n", jsx(_components.li, {
        children: "The site is now based on Next.js. Is a much better fit than Create React App. For now I'm just using it to create a static export, but maybe I'll add some server rendered stuff in the future."
      }), "\n", jsx(_components.li, {
        children: "Styling is now vanilla CSS with postcss to add support for the future native CSS nesting and custom media queries features. I'm using CSS modules instead of BEM syntax to avoid style conflicts."
      }), "\n", jsxs(_components.li, {
        children: ["For generating pages from ", jsx(_components.code, {
          children: ".mdx"
        }), " files, I'm using Kent C Dodds' ", jsx(_components.a, {
          href: "https://github.com/kentcdodds/mdx-bundler",
          children: "mdx-bundler"
        }), ". In combination with Next.js it makes generating pages from ", jsx(_components.code, {
          children: ".mdx"
        }), " files really quick and simple."]
      }), "\n", jsx(_components.li, {
        children: "For animation I've moved from Tween.js and React Transition Group to just Framer Motion."
      }), "\n", jsxs(_components.li, {
        children: ["3D effects are still all using Three.js, but I've added ", jsx(_components.code, {
          children: "three-stdlib"
        }), " as a better maintained replacement for modules from Three's examples."]
      }), "\n"]
    }), "\n", jsx(_components.h2, {
      id: "not-all-smooth-sailing",
      children: "Not all smooth sailing"
    }), "\n", jsx(_components.p, {
      children: "For the most part, the migration was pretty straight-forward. The way I has structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using postcss for styling. I did, however, encounter a couple of problems:"
    }), "\n", jsx(_components.h3, {
      id: "1-route-transitions",
      children: "1. Route transitions"
    }), "\n", jsxs(_components.p, {
      children: ["There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages because it cleans up any unused styles form hanging around. When you are animating the page transition though, all of a sudden the previous page becomes jarringly completely unstyled as it transitions out. This problem one of ", jsx(_components.a, {
        href: "https://github.com/vercel/next.js/issues/17464",
        children: "the most commented and reacted to issues"
      }), " on the Next.js repo, so hopefully there's a fix soon, but for now I've dropped in a ", jsx(_components.a, {
        href: "https://github.com/vercel/next.js/issues/17464#issuecomment-796430107",
        children: "hack to fix things"
      }), " from the issue's comments."]
    }), "\n", jsx(_components.h3, {
      id: "2-scroll-restoration",
      children: "2. Scroll restoration"
    }), "\n", jsx(_components.p, {
      children: "Somewhat related to the route transitions, I had to opt out of both Next.js's and the native browser's scroll restoration in order to prevent the browser immediately scrolling to the top when the page started transitioning out. Next.js also doesn't appear to handle shifting focus when linking to the id of an element within the page, so I added that in for accessibility."
    }), "\n", jsx(_components.h2, {
      id: "looking-back-and-forward",
      children: "Looking back, and forward"
    }), "\n", jsx(_components.p, {
      children: "It's been pretty neat to see how popular the site's been on Github, with 500 stars (as of writing this post). It's also neat seeing how people adapt it to their own style and modify it, which is part of the reason I made it open source. I want others to be able to take it apart and see how it's made, learn from and improve upon it. That's what inspect element used to be like on the web, but with modern sites compiling and minifying and injecting garbled strings into css classes that's not as simple these days. The next best thing I could do was to open source it."
    }), "\n", jsx(_components.p, {
      children: "I look forward to continuing to use this site as a playground, and it'll be interesting to compare the next iteration to where it is today."
    }), "\n", jsx(_components.h2, {
      id: "update-feb-2024",
      children: "Update: Feb 2024"
    }), "\n", jsxs(_components.p, {
      children: [`I recently migrated the site to Remix now that they've got good support for CSS modules meaning I didn't need to convert all of my styling. It was mostly a process of deleting all of the hacks mentioned above in this post, and things just work and feel more "web standard". I'm now using the `, jsx(_components.a, {
        href: "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API",
        children: "CSS view transitions API"
      }), " to handle smoothly crossfading on route transitions, which is a feature baked into React Router (and as a result Remix). I don't need to do weird javascript hacks to try and set the correct theme (which still inevitably led to a flash of unthemed content) - I'm now storing the preferred theme in a session cookie which Remix makes really easy to do."]
    }), "\n", jsx(_components.p, {
      children: "Overall I'm really happy with Remix, would totally recommend it. I would like to eventually replace a lot of animations triggered by Javascript with the upcoming scroll driven animations CSS API, but browser support isn't there yet, so maybe some time later this year."
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsx(MDXLayout, {
    ...props,
    children: jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: MDXContent,
  frontmatter
}, Symbol.toStringTag, { value: "Module" }));
const sliceAnnotationLarge = "/assets/slice-annotation-large-BMgELH_L.png";
const sliceAnnotationPlaceholder = "/assets/slice-annotation-placeholder-CCGEuhhx.png";
const sliceAnnotation = "/assets/slice-annotation-BYMGWVwS.png";
const sliceTextureLarge = "/assets/slice-app-large-CHKPTcWm.jpg";
const sliceTexturePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIACgAQAMBIgACEQEDEQH/xAAcAAADAQACAwAAAAAAAAAAAAAFBgcEAAMBAgj/2gAIAQEAAAAAjRqhuHBeLxDmu2U7Mhq+j56ZK9RMKSA1Qw3Q3DEA6NEaOPh4aJ7Pf//EABkBAAIDAQAAAAAAAAAAAAAAAAMEAAECBf/aAAgBAhAAAADUKVZpm+W+0H//xAAXAQEAAwAAAAAAAAAAAAAAAAAEAQMF/9oACAEDEAAAAIm28qUMwtNbf//EACIQAAICAQQDAAMAAAAAAAAAAAECAAMEBRESIQYiMRUyQv/aAAgBAQABPwBDvMGgWMJpeii4L6ynxhWUeks8ZVR+ku0ZK9/WHAQH5PxqN/MqbuaQQXWePKhCTGrq4D5M0VKpmpWopaPkjlKbwdpWZplvF1mg5wUJ3KNUAQe0zdU3B9pn5nMnuNaS0ot2iGYLEMJpWQyhe5VmsE+zKzid+5dklie4LN4lm0T7MBd2E09SAs5ELMmw9xnO8Ro1nET/xAAaEQEAAwEBAQAAAAAAAAAAAAAAAQIDERMx/9oACAECAQE/AHFKdeKFM4lXPiYV+skNH//EABwRAAIDAAMBAAAAAAAAAAAAAAABAgMREhMxMv/aAAgBAwEBPwAwhDkdJFaxVaiqrBVaQ+kVeEEimK0//9k=";
const sliceTexture = "/assets/slice-app-PoRtkkeP.jpg";
const sliceBackgroundBarLarge = "/assets/slice-background-bar-large-CYHGpgXa.jpg";
const sliceBackgroundBarPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAQDAwMDAgQDAwMEBAQFBgoGBgUFBgwICQcKDgwPDg4MDQ0PERYTDxAVEQ0NExoTFRcYGRkZDxIbHRsYHRYYGRj/2wBDAQQEBAYFBgsGBgsYEA0QGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBgYGBj/wgARCABPACwDAREAAhEBAxEB/8QAGwAAAwEAAwEAAAAAAAAAAAAAAwQFBgECBwD/xAAaAQADAQEBAQAAAAAAAAAAAAABAgMEAAUG/9oADAMBAAIQAxAAAACL730G0hIYHn2inTiJuWej6JekpwuKs/PCbTUcCmk/VsmXNU7HXvJrcyi1OPoOeOfoZLtArotzTXRjDo0RuvTlkL+lXXNdmkdqD4GBTo9CS/T0Ku5zIB5kaXJd0HLVjyYgaJp/SAGNhvMtLmorOawzjfTLNjKfPrTg6FXa3//EACQQAAICAgICAgIDAAAAAAAAAAECAAMEBRESEyEGFCIjMUFR/9oACAEBAAE/AKdw5vDFppvkYFIRnm7NWdUWHuZyHFuJEr27BCnaPkeRy0ov5lGe9R9NMDam/wDWzTYak5WOXUTLwLMe8ggxFPSY1h6w2mam5vsiaahMnA/P/J8l1lVbsygRk6sRMfHISfWZj6E0+vs8oYiYWeMDD4J49TcbUZbkAxMMOvaUETW4yXOOZjYVNGP29TbZbclUMr7vby0xlAxxK6yJrrWrePsm8HXmXP5nJMC9PcXOKL1iY/MxcXgTIBUROe0ChljUDsZV1ESxAssQWQ47f0IK3URi3aWJ0E8rAyq6YFCX/wAyzVVePmPrK+5gzPIse8Ayi3s0xdj9aH5AWTj3DtiTP//EABsRAAMAAwEBAAAAAAAAAAAAAAABAhAREiAh/9oACAECAQE/AOSoI+COcuRyKtCfikUQxZqhzsmdG8NjZK8M0LGjZVCoTz0MSF45NDOhUMWGjg5P/8QAHBEAAwADAQEBAAAAAAAAAAAAAAECAxESEBME/9oACAEDAQE/AOSpEiUcmvNDR1oVeNGikWSJHQ2VXiWjo0V4kPyijQpOT5jbFLZOE+Y1oTQ/zCxaKtI+pdnY2jLRkodaPodEvaMxRSFAsR//2Q==";
const sliceBackgroundBar = "/assets/slice-background-bar-DUyfyeHo.jpg";
const sliceBackgroundLarge = "/assets/slice-background-large-Dnpu52lB.jpg";
const sliceBackgroundPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIABQAIAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAADBQABBAL/2gAIAQEAAAAAS2TWvNO0h95v/8QAFgEBAQEAAAAAAAAAAAAAAAAAAwIF/9oACAECEAAAANmVL//EABcBAAMBAAAAAAAAAAAAAAAAAAADBAX/2gAIAQMQAAAA22Fn/8QAHRAAAgIDAAMAAAAAAAAAAAAAAAECAwQRIRMiMf/aAAgBAQABPwDHxpTWydTgylbZPSSHmeJ6Qr42x2yPOoi3N6Ll7lXwrIcfD//EABgRAAIDAAAAAAAAAAAAAAAAAAABECFB/9oACAECAQE/ALjBn//EABoRAQADAAMAAAAAAAAAAAAAAAEAAhEDMTP/2gAIAQMBAT8AB3ZbjXLEOiU82f/Z";
const sliceBackground = "/assets/slice-background-5195om16.jpg";
const sliceIrlPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAZAC8DAREAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAwUGBAf/xAAZAQACAwEAAAAAAAAAAAAAAAACAwABBAX/2gAMAwEAAhADEAAAAImPTmugcIlNVBYmLYBaoxqLJulrSRXpRD1QZLJLrcbz7c2RoclzMNV9Qy6HLRlergJJ/8QAIRAAAQQCAQUBAAAAAAAAAAAAAQACAwQFERIGFCEzNBD/2gAIAQEAAT8Au3JXxb2u9c5/ErGQRzxK9juTzxCsUJIhvSrVnyu0QrJAr6UMQdKsW9sTAFXqG3KNNUvTTJIfITunmwP8BT2TIodmQALBYl8zQ5ypUYakPJWsu1hLQu8E35U97V098jVP85Vz2lVV/8QAGxEAAwADAQEAAAAAAAAAAAAAAAECAxAREjH/2gAIAQIBAT8AWpRQmI4JDfBvpKFO7oheiMJ45plmAn4M/8QAHBEAAwACAwEAAAAAAAAAAAAAAAECEBEDEiAh/9oACAEDAQE/AGzeJWxz4RI6N5hFfCrO2YOUYj//2Q==";
const sliceIrl = "/assets/slice-irl-Bok-9coc.jpg";
const sliceSidebarAnnotationsLarge = "/assets/slice-sidebar-annotations-large-CrYJmPog.png";
const sliceSidebarAnnotationsPlaceholder = "/assets/slice-sidebar-annotations-placeholder-Bewc5d-7.png";
const sliceSidebarAnnotations = "/assets/slice-sidebar-annotations-CisIo7UR.png";
const sliceSidebarLayersLarge = "/assets/slice-sidebar-layers-large-CqnA6hBc.png";
const sliceSidebarLayersPlaceholder = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAA8CAMAAABCfyqQAAAAxlBMVEUwMDMxMTQ2NjkzMzY4ODs0NDc8PD5CQkU6Oj01NTg/P0I+PkA9PUBEREdFRUdBQUNAQENJSUwyLzBHSEtMTE9HR0k3NDU0MjRIRUU2MC5FRklFQkM8ODhPT1E5Nzc9Vl9RUVRCPDw/ZnM+TVRASk9BRko9QUVFQEBCP0A8OTtFmbJCgpVEdoVAWmM6Rkw2QUZFpsJFjaNFh5s9anhEYms9X2tFVFo4TFRHTVE0O0AzNztJn7hJlKpBfI4/eYtCbnw+Ulo6UVogc3mqAAACmElEQVQ4y+WUW3PaMBCFJVuWZEuWpRiDAwFSKARyvzRNm97//5/qWdmTDAzJQ197XhB8Wu3u2R2YKkmqVKp04yaEL58/Xd59u709v/91xSpFqkiqbEJN8P77+fndj8WcGVOQDFRUypWr5dXi8uLi4ufD1ZIJLaO01tIW3q+vl/PHxcPicf50wxJQY22E8ZH1avl7Pv/zdH3zleVCeuQsEGwov1+vPkJAzxlLtHd13ZTeeFUHHMpxXdertX5OOUvMeHB6Oh04NQ6nOIQwgGqvE4K2xNfQqErV0+k0OOVc6ZQVOedMWFeHMFa+UM10MGhU15kUOSJzYXxVeSul9XCqkALSWogk4yyjXqgTaklK/AYlCcGUcaJkQn895VCa5Qk9y3meSCSxxHMgBhHGkaAwKA+FdEVE2AmHTFhVVt5YjRoIQj0jaAALK0WEO+Jpoo1BwgMsVoRCkxwJCe6Hoq+864Hti/oCOYQAX3SIpaSDOFoFZVm8wHZMQDVaw/d4AbhnXXmj2XazqWiAfaORZRCsHG43bRucg31WJGkHY6YM8OSsbVv43kNOFeYCylPAD5NJO1Hee0POQ4DJCzwjCHkZh91H4tzBxrlx3ShDFqcpQa3xDKoFbSfYZaeMJJqhOyEllpONELqhVXVYPWsl1gFtIGeMzGZbW6mKVkFqSbHwCq1QQTzFG0VVFEBCgEZInmYEc0CFtUYMQU0VEyVIoVZV2HWC1iDpC2R8NJxJpUplYT6wiJEZIGdHR8cjQNc48gCF9Cnpk+DxzLgwCGWBoDhWNAqhWrDj4YmpSlgAa1+9xc0YORpuZb/wcSr9yBAJjUa4Ct8I7Qw70rhjrwu2t417q9ez/1H8HUR6k71D+380/hbMif5D5IGcfwHADy8o/7eiGAAAAABJRU5ErkJggg==";
const sliceSidebarLayers = "/assets/slice-sidebar-layers-jDBpAmZU.png";
const sliceSlidesLarge = "/assets/slice-slides-large--yrOgN_x.jpg";
const sliceSlidesPlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwgHBgoICAgLCgoLDhgQDg0NDh0VFhEYIx8lJCIfIiEmKzcvJik0KSEiMEExNDk7Pj4+JS5ESUM8SDc9Pjv/2wBDAQoLCw4NDhwQEBw7KCIoOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozv/wgARCAAoAEADAREAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAgQBAwUG/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAEDAgQF/9oADAMBAAIQAxAAAACwM4raZJhGZEsVgO5z2cq+7o358vKdkuGjLcN1R62nHXpwk85e7UptZbSwpDtSdLuzznc4LFgNZ9qtGNSPLXijGpyLGXSYDZvKP//EACMQAAEEAgEEAwEAAAAAAAAAAAIAAQMEBREGEiExQQcTFiL/2gAIAQEAAT8Al+P5kfEWCX69r8Q6bgqHgRGvwJqfihwvpQcQOyWlyHkX1kUMSr2p5LjGW0EdmZmcUVe7Ht++kOVmhMg9qPMWzsOqEz25iaQVXnOLLNEw9tq7Rglum5l7VPGUndi23ZNbp1R02n0mydawDg2tujwTHIUu/KhxAQG5Eq0taqbvpVmqT22kZm6lkMLKM5yMgp2I/G2UeKszuocDJE/Up2mh/l3QxyTA6Ku/WTEsfG0dkVaz9UZnidSWoJwYgdmUOTrxhpHm4RV7kFQi0qWcrE3Q3tTuDy+fKoUOsxNnX//EAB0RAQEBAQABBQAAAAAAAAAAAAEAEgIQAxEhMEH/2gAIAQIBAT8A+ss2SS/LUMcLYS3PVlvZsxHYE+p5JPiOGeGw2PJ1Pd//xAAeEQADAQEAAgMBAAAAAAAAAAAAAQIRAwQSEyExEP/aAAgBAwEBPwAXKs09GejM/k82yubRw8fftlQlJWI+j40z40UvVFLY0h0pLu0P2ZjFZrY4poapI5+QmsLuWiqWnuRjNSFRdaiebI1fpUNsXNkcaL41+ky8LrD/2Q==";
const sliceSlides = "/assets/slice-slides-me7j0Hig.jpg";
const columns = "_columns_1lqwj_1";
const grid = "_grid_1lqwj_9";
const gridImage = "_gridImage_1lqwj_31";
const gridBackground = "_gridBackground_1lqwj_55";
const gridForeground = "_gridForeground_1lqwj_81";
const gridText = "_gridText_1lqwj_113";
const sidebarImages = "_sidebarImages_1lqwj_137";
const sidebarImagesText = "_sidebarImagesText_1lqwj_169";
const sidebarImage = "_sidebarImage_1lqwj_137";
const styles$9 = {
  columns,
  grid,
  gridImage,
  gridBackground,
  gridForeground,
  gridText,
  sidebarImages,
  sidebarImagesText,
  sidebarImage
};
const title$4 = "Biomedical image collaboration";
const description$2 = "This project involved designing a better way for biomedical educators and learners to annotate digital slides together.";
const roles = ["User Research", "UX Design", "Interface Design"];
const meta$4 = () => {
  return baseMeta({ title: title$4, description: description$2, prefix: "Projects" });
};
const Slice = () => {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles$9.slice, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: sliceBackground,
          srcSet: `${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`,
          width: 1280,
          height: 800,
          placeholder: sliceBackgroundPlaceholder,
          opacity: 0.8
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: title$4,
          description: description$2,
          url: "https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1",
          roles
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsx(
        ProjectImage,
        {
          srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
          width: 800,
          height: 500,
          placeholder: sliceTexturePlaceholder,
          alt: "The Slice web application showing a selected user annotation.",
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`
        }
      ) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionColumns, { centered: true, className: styles$9.columns, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$9.imagesText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Bringing it together" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Teachers needed a better way to create collaborative group activities by annotating slides on Slice. Before starting this project, a layer could only be annotated by a single user, making it difficult for learners to work together." }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Our solution was to allow users to be invited to a layer, where they can see others’ annotations and make their own." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$9.sidebarImages, children: [
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$9.sidebarImage,
              srcSet: `${sliceSidebarLayers} 350w, ${sliceSidebarLayersLarge} 700w`,
              width: 350,
              height: 750,
              placeholder: sliceSidebarLayersPlaceholder,
              alt: "The layers sidebar design, now with user profiles.",
              sizes: `(max-width: ${media.mobile}px) 200px, 343px`
            }
          ),
          /* @__PURE__ */ jsx(
            Image$1,
            {
              className: styles$9.sidebarImage,
              srcSet: `${sliceSidebarAnnotations} 350w, ${sliceSidebarAnnotationsLarge} 700w`,
              width: 350,
              height: 750,
              placeholder: sliceSidebarAnnotationsPlaceholder,
              alt: "Multiple user annotations on a shared layer.",
              sizes: `(max-width: ${media.mobile}px) 200px, 343px`
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { light: true, children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Improving the experience" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "A problem we heard about often form users was that it was difficult to find images they had previously seen or worked on. To solve this we added a new tab that lists all previously annotated slides. In addition, we added the ability to favorite slides, so if users find an interesting slide they want to annotate later, they can easily save it to their account." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            srcSet: `${sliceSlides} 800w, ${sliceSlidesLarge} 1920w`,
            width: 800,
            height: 500,
            placeholder: sliceSlidesPlaceholder,
            alt: "The new My Slides tab in slice, showing annotated and favorited slides.",
            sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsxs(ProjectSectionContent, { className: styles$9.grid, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$9.gridImage, children: [
          /* @__PURE__ */ jsx("div", { className: styles$9.gridBackground, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${sliceBackgroundBar} 440w, ${sliceBackgroundBarLarge} 880w`,
              width: 440,
              height: 790,
              placeholder: sliceBackgroundBarPlaceholder,
              alt: "",
              role: "presentation",
              sizes: `(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: styles$9.gridForeground, children: /* @__PURE__ */ jsx(
            Image$1,
            {
              srcSet: `${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`,
              width: 440,
              height: 340,
              placeholder: sliceAnnotationPlaceholder,
              alt: "An annotation preview popover with statistics for shape perimeter and area.",
              sizes: `(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`
            }
          ) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$9.gridText, children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Meaningful details" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Marking and annotating areas on high resolution biomedical images is the core experience of the app, and it was easy to get lost or lose sense of scale when zooming in on details. Adding measurements for the perimeter and area of an annotation both helped to communicate the overall scale of the image and how large the annotated feature is in comparison." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(ProjectSection, { children: /* @__PURE__ */ jsxs(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Project outcomes" }),
          /* @__PURE__ */ jsx(ProjectSectionText, { children: "Real-time collaborative annotation facilitated better collaboration between learners, and was much easier to run group exercises with the new shared layers feature. Learners gave feedback that is was enjoyable to work together and see what others were doing, and liked how interactive and easy to use the application was." })
        ] }),
        /* @__PURE__ */ jsx(
          Image$1,
          {
            src: sliceIrl,
            width: 940,
            height: 500,
            placeholder: sliceIrlPlaceholder,
            alt: "Students at the University of New South Wales using the new collaborative annotation features"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Slice,
  meta: meta$4
}, Symbol.toStringTag, { value: "Module" }));
async function action({ request, context }) {
  const formData = await request.formData();
  const theme = formData.get("theme");
  const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: true,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: true
    }
  });
  const session = await getSession(request.headers.get("Cookie"));
  session.set("theme", theme);
  return json(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  action
}, Symbol.toStringTag, { value: "Module" }));
const contact = "_contact_19obf_1";
const form = "_form_19obf_35";
const title$3 = "_title_19obf_59";
const divider$1 = "_divider_19obf_119";
const input = "_input_19obf_195";
const botkiller = "_botkiller_19obf_279";
const button$2 = "_button_19obf_287";
const complete = "_complete_19obf_407";
const completeTitle = "_completeTitle_19obf_429";
const completeText = "_completeText_19obf_467";
const completeButton = "_completeButton_19obf_505";
const formError = "_formError_19obf_557";
const formErrorContent = "_formErrorContent_19obf_581";
const formErrorMessage = "_formErrorMessage_19obf_589";
const formErrorIcon = "_formErrorIcon_19obf_605";
const footer = "_footer_19obf_615";
const socialLinks = "_socialLinks_19obf_631";
const socialItem = "_socialItem_19obf_645";
const returnButton = "_returnButton_19obf_673";
const homeLink = "_homeLink_19obf_681";
const styles$8 = {
  contact,
  form,
  title: title$3,
  divider: divider$1,
  input,
  botkiller,
  button: button$2,
  complete,
  completeTitle,
  completeText,
  completeButton,
  formError,
  formErrorContent,
  formErrorMessage,
  formErrorIcon,
  footer,
  socialLinks,
  socialItem,
  returnButton,
  homeLink
};
const meta$3 = () => {
  return baseMeta({
    title: "Contact",
    description: "Find me on the platforms below."
  });
};
const Contact = () => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx(Section, { className: styles$8.contact, children: /* @__PURE__ */ jsxs("div", { className: styles$8.form, children: [
      /* @__PURE__ */ jsx(Heading, { className: styles$8.title, level: 2, children: "Let’s Connect" }),
      /* @__PURE__ */ jsxs("div", { className: styles$8.socialLinks, children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://x.com/BigWhiz_001",
            target: "_blank",
            rel: "noopener noreferrer",
            className: styles$8.socialItem,
            children: [
              /* @__PURE__ */ jsx(Icon, { icon: "x" }),
              " @BigWhiz_001"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://github.com/Bigwhiz",
            target: "_blank",
            rel: "noopener noreferrer",
            className: styles$8.socialItem,
            children: [
              /* @__PURE__ */ jsx(Icon, { icon: "github" }),
              " @Bigwhiz"
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailwisdomosas@gmail.com",
            className: styles$8.socialItem,
            children: [
              /* @__PURE__ */ jsx(Icon, { icon: "mail" }),
              " mailwisdomosas@gmail.com"
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsx(Link$1, { to: "/", className: styles$8.homeLink, children: /* @__PURE__ */ jsx(Button, { className: styles$8.returnButton, icon: "arrow-left", children: "Return Home" }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route7 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Contact,
  meta: meta$3
}, Symbol.toStringTag, { value: "Module" }));
const gamestackTexture2Large = "/assets/gamestack-list-large-DYaUO4yA.jpg";
const gamestackTexture2Placeholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAcAAACAgIDAAAAAAAAAAAAAAAEBgMFAQcAAgj/2gAIAQEAAAAA84zyZiNzyYqtEYpKEBu7rwLOSvAbDPSKbaxiDRt0tOB//8QAFwEBAQEBAAAAAAAAAAAAAAAAAwABAv/aAAgBAhAAAABLlWLZc//EABgBAQEAAwAAAAAAAAAAAAAAAAMEAAEC/9oACAEDEAAAANZVJ0YLM3//xAAfEAACAgMBAAMBAAAAAAAAAAAAAQIDBBESIQUTMSL/2gAIAQEAAT8Arjs+sVSZKkpg2Ks1ocloxqU0vCdajEtemx2GJD+S9aiX/rGYeuTJ1yXr1kjD60XxlyZC02SPjcHpLwy8BRg/DOq5kySPjLIRgjOvhKBnrqUidZjZE4rwuybJRLm5fpOKP//EABoRAQEAAwEBAAAAAAAAAAAAAAEAAhAhETH/2gAIAQIBAT8AWJxRg5Jimu3kfNf/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIhEBESEzH/2gAIAQMBAT8AUcRlDgSdlJDO2xPY1YvD/9k=";
const gamestackTexture2 = "/assets/gamestack-list-BdO7kQnP.jpg";
const gamestackTextureLarge = "/assets/gamestack-login-large-ryOo_e4Z.jpg";
const gamestackTexturePlaceholder = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEH/9oACAEBAAAAAPAGGkwlsuTolmWA57UCI9Kd1NCIKPRNIsF//8QAGAEBAAMBAAAAAAAAAAAAAAAAAQACBQT/2gAIAQIQAAAA7RrDVmQ//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIEAf/aAAgBAxAAAACVlc2IuP/EABwQAAIDAQEBAQAAAAAAAAAAAAABAgMRBFExMv/aAAgBAQABPwD6VpITWHThFCeCsLp6hNYfSexJy0iRxItzCYp4O4lafoxscJeDrl4KDRz1xklpHmrZLmrL64R+FVziR6X6S6H6W3aRbQpsc2Ntn//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEEhBRESFB/9oACAECAQE/AITFK/YxHn1NG6mjdSvMoRADWJZmUMhAr5//xAAcEQACAQUBAAAAAAAAAAAAAAAAAQIDBBESURD/2gAIAQMBAT8AEsGGJPBsumy6Tt6kpNqZC3qKSbn7/9k=";
const gamestackTexture = "/assets/gamestack-login-hTRhV9nJ.jpg";
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => true,
    () => false
  );
}
const intro = "_intro_1jbsi_1";
const text = "_text_1jbsi_23";
const name = "_name_1jbsi_77";
const title$2 = "_title_1jbsi_153";
const row$1 = "_row_1jbsi_161";
const word = "_word_1jbsi_219";
const introTextReveal = "_introTextReveal_1jbsi_1";
const line$1 = "_line_1jbsi_371";
const introLine = "_introLine_1jbsi_1";
const scrollIndicator = "_scrollIndicator_1jbsi_469";
const introScrollIndicator = "_introScrollIndicator_1jbsi_1";
const mobileScrollIndicator = "_mobileScrollIndicator_1jbsi_603";
const introMobileScrollIndicator = "_introMobileScrollIndicator_1jbsi_1";
const lottieWrapper = "_lottieWrapper_1jbsi_681";
const lottie = "_lottie_1jbsi_681";
const styles$7 = {
  intro,
  text,
  name,
  title: title$2,
  row: row$1,
  word,
  introTextReveal,
  line: line$1,
  introLine,
  scrollIndicator,
  introScrollIndicator,
  mobileScrollIndicator,
  introMobileScrollIndicator,
  lottieWrapper,
  lottie
};
const v = "5.6.1";
const fr = 24;
const ip = 0;
const op = 141;
const w = 1e3;
const h = 563;
const nm = "Comp 1";
const ddd = 0;
const assets = [];
const layers = [
  {
    ddd: 0,
    ind: 1,
    ty: 4,
    nm: "Layer 22/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 0,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 5,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 11,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 16,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 23,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 28,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 33,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 39,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 44,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 51,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 56,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 61,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 66,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 72,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 77,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 84,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 89,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 94,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 100,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 105,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 112,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 117,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 121,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 126,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 131,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 136,
            s: [
              2
            ]
          },
          {
            t: 141,
            s: [
              0
            ]
          }
        ],
        ix: 10
      },
      p: {
        a: 0,
        k: [
          495.764,
          253.457,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          34.004,
          23.976,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [
                        9.423,
                        -3.181
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        3.489,
                        -6.977
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        -4.608,
                        3.763
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        1.611,
                        0.939
                      ],
                      [
                        0.125,
                        0
                      ]
                    ],
                    o: [
                      [
                        -10.332,
                        3.489
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        -3.488,
                        6.978
                      ],
                      [
                        0.94,
                        -1.341
                      ],
                      [
                        3.429,
                        9.865
                      ],
                      [
                        2.953,
                        -4.226
                      ],
                      [
                        6.18,
                        2.548
                      ],
                      [
                        6.911,
                        4.764
                      ],
                      [
                        4.495,
                        6.776
                      ],
                      [
                        1.074,
                        8.723
                      ],
                      [
                        1.811,
                        -5.233
                      ],
                      [
                        2.13,
                        0.201
                      ],
                      [
                        7.65,
                        -21.604
                      ],
                      [
                        -4.831,
                        -19.189
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        -0.141,
                        -0.083
                      ],
                      [
                        -1.294,
                        0
                      ]
                    ],
                    v: [
                      [
                        -14.766,
                        -21.681
                      ],
                      [
                        -23.353,
                        -8.665
                      ],
                      [
                        -31.539,
                        -4.37
                      ],
                      [
                        -27.617,
                        17.103
                      ],
                      [
                        -25.205,
                        15.708
                      ],
                      [
                        -20.704,
                        29.049
                      ],
                      [
                        -18.79,
                        16.027
                      ],
                      [
                        -2.554,
                        14.415
                      ],
                      [
                        5.43,
                        12.471
                      ],
                      [
                        17.09,
                        17.842
                      ],
                      [
                        21.478,
                        27.232
                      ],
                      [
                        24.744,
                        13.732
                      ],
                      [
                        27.377,
                        14.827
                      ],
                      [
                        22.137,
                        -7.188
                      ],
                      [
                        -0.541,
                        -24.499
                      ],
                      [
                        -2.823,
                        -28.926
                      ],
                      [
                        -3.219,
                        -29.049
                      ]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "tr",
                p: {
                  a: 0,
                  k: [
                    0,
                    0
                  ],
                  ix: 2
                },
                a: {
                  a: 0,
                  k: [
                    0,
                    0
                  ],
                  ix: 1
                },
                s: {
                  a: 0,
                  k: [
                    100,
                    100
                  ],
                  ix: 3
                },
                r: {
                  a: 0,
                  k: 0,
                  ix: 6
                },
                o: {
                  a: 0,
                  k: 100,
                  ix: 7
                },
                sk: {
                  a: 0,
                  k: 0,
                  ix: 4
                },
                sa: {
                  a: 0,
                  k: 0,
                  ix: 5
                },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 1,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.274509803922,
                0.126331508861,
                0.106574391384,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                35.277,
                29.299
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 4,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0.055,
                    -4.782
                  ],
                  [
                    3.868,
                    2.517
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.054,
                    4.782
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -0.458,
                    -8.009
                  ],
                  [
                    3.671,
                    -3.041
                  ],
                  [
                    -3.726,
                    5.492
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.995999983245,
                0.694000004787,
                0.620000023935,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                60.48,
                51.039
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.704,
                    -4.729
                  ],
                  [
                    -3.489,
                    3.018
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0.705,
                    4.731
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -0.476,
                    -7.975
                  ],
                  [
                    -3.892,
                    -2.492
                  ],
                  [
                    4.596,
                    4.957
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.995999983245,
                0.694000004787,
                0.620000023935,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                10.548,
                52.982
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    -13.989,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    13.99,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -20.554,
                    0.156
                  ],
                  [
                    1.822,
                    23.801
                  ],
                  [
                    21.627,
                    -1.66
                  ],
                  [
                    21.627,
                    -23.801
                  ],
                  [
                    -21.627,
                    -23.801
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.995999983245,
                0.694000004787,
                0.620000023935,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                35.128,
                58.191
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 0,
    op: 142,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 2,
    ty: 4,
    nm: "Layer 14/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          504.5,
          394.5,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          41.5,
          24,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          106.557,
          106.557,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -8.872,
                    24.573
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    25.989,
                    -2.689
                  ]
                ],
                v: [
                  [
                    41.158,
                    -23.631
                  ],
                  [
                    33.526,
                    23.631
                  ],
                  [
                    -41.158,
                    23.631
                  ],
                  [
                    -15.845,
                    20.99
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.049950019986,
                0.490288139792,
                0.796078431373,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                41.408,
                23.881
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 0,
    op: 142,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 3,
    ty: 4,
    nm: "Layer 17/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          501,
          394.5,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          46,
          30.5,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          106.557,
          106.557,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [
                        0,
                        0
                      ],
                      [
                        -0.37,
                        -2.4
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        2.448,
                        0
                      ]
                    ],
                    o: [
                      [
                        -2.416,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0.386,
                        -2.416
                      ],
                      [
                        0,
                        0
                      ]
                    ],
                    v: [
                      [
                        -41.367,
                        -26.779
                      ],
                      [
                        -45.281,
                        -22.205
                      ],
                      [
                        -37.729,
                        26.779
                      ],
                      [
                        37.358,
                        26.779
                      ],
                      [
                        44.99,
                        -20.483
                      ],
                      [
                        44.99,
                        -20.498
                      ],
                      [
                        45.265,
                        -22.173
                      ],
                      [
                        41.351,
                        -26.779
                      ]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "tr",
                p: {
                  a: 0,
                  k: [
                    0,
                    0
                  ],
                  ix: 2
                },
                a: {
                  a: 0,
                  k: [
                    0,
                    0
                  ],
                  ix: 1
                },
                s: {
                  a: 0,
                  k: [
                    100,
                    100
                  ],
                  ix: 3
                },
                r: {
                  a: 0,
                  k: 0,
                  ix: 6
                },
                o: {
                  a: 0,
                  k: 100,
                  ix: 7
                },
                sk: {
                  a: 0,
                  k: 0,
                  ix: 4
                },
                sa: {
                  a: 0,
                  k: 0,
                  ix: 5
                },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 1,
            cix: 2,
            bm: 0,
            ix: 1,
            mn: "ADBE Vector Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.133487117992,
                0.555541932349,
                0.850980392157,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                45.901,
                27.029
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.778,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.779
                  ],
                  [
                    -1.778,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.779
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.778,
                    0
                  ],
                  [
                    0,
                    -1.779
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.778,
                    0
                  ],
                  [
                    0,
                    1.779
                  ]
                ],
                v: [
                  [
                    36.835,
                    3.22
                  ],
                  [
                    -36.835,
                    3.22
                  ],
                  [
                    -40.055,
                    0
                  ],
                  [
                    -36.835,
                    -3.22
                  ],
                  [
                    36.835,
                    -3.22
                  ],
                  [
                    40.055,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                45.41,
                57.021
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 0,
    op: 142,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 4,
    ty: 4,
    nm: "Layer 16/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 0,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 5,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 11,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 17,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 22,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 28,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 33,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 38,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 44,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 50,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 55,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 61,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 67,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 72,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 78,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 84,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 89,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 95,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 100,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 105,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 111,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 117,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 122,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 128,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 132,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 137,
            s: [
              2
            ]
          },
          {
            t: 141,
            s: [
              0
            ]
          }
        ],
        ix: 10
      },
      p: {
        a: 0,
        k: [
          584,
          388,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          67,
          1,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -33.551,
                    17.835
                  ],
                  [
                    -33.551,
                    -17.835
                  ],
                  [
                    33.55,
                    -17.835
                  ],
                  [
                    33.55,
                    17.835
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "gr",
            it: [
              {
                ind: 0,
                ty: "sh",
                ix: 1,
                ks: {
                  a: 0,
                  k: {
                    i: [
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        -7.777,
                        14.217
                      ],
                      [
                        -0.467,
                        1.899
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        7.085,
                        2.85
                      ],
                      [
                        2.739,
                        0
                      ]
                    ],
                    o: [
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0,
                        0
                      ],
                      [
                        0.853,
                        -1.563
                      ],
                      [
                        0.016,
                        -0.018
                      ],
                      [
                        0.838,
                        -6.327
                      ],
                      [
                        -1.957,
                        -0.789
                      ],
                      [
                        -17.551,
                        1e-3
                      ]
                    ],
                    v: [
                      [
                        -30.651,
                        -3.822
                      ],
                      [
                        -33.55,
                        15.501
                      ],
                      [
                        -10.732,
                        15.501
                      ],
                      [
                        30.732,
                        3.618
                      ],
                      [
                        32.713,
                        -1.583
                      ],
                      [
                        32.713,
                        -1.601
                      ],
                      [
                        24.291,
                        -16.704
                      ],
                      [
                        17.166,
                        -17.835
                      ]
                    ],
                    c: true
                  },
                  ix: 2
                },
                nm: "Path 2",
                mn: "ADBE Vector Shape - Group",
                hd: false
              },
              {
                ty: "tr",
                p: {
                  a: 0,
                  k: [
                    0,
                    0
                  ],
                  ix: 2
                },
                a: {
                  a: 0,
                  k: [
                    0,
                    0
                  ],
                  ix: 1
                },
                s: {
                  a: 0,
                  k: [
                    100,
                    100
                  ],
                  ix: 3
                },
                r: {
                  a: 0,
                  k: 0,
                  ix: 6
                },
                o: {
                  a: 0,
                  k: 100,
                  ix: 7
                },
                sk: {
                  a: 0,
                  k: 0,
                  ix: 4
                },
                sa: {
                  a: 0,
                  k: 0,
                  ix: 5
                },
                nm: "Transform"
              }
            ],
            nm: "Group 1",
            np: 1,
            cix: 2,
            bm: 0,
            ix: 2,
            mn: "ADBE Vector Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.254901960784,
                0.388235294118,
                0.58431372549,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                33.8,
                18.085
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 4,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 0,
    op: 142,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 5,
    ty: 4,
    nm: "Layer 3/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 20,
            s: [
              497.5,
              375.5,
              0
            ],
            to: [
              -166.5,
              13,
              0
            ],
            ti: [
              7.5,
              29,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 29,
            s: [
              287.5,
              147.5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 41,
            s: [
              287.5,
              147.5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 82,
            s: [
              287.5,
              116.5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 140,
            s: [
              287.5,
              146.5,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          34,
          47.5,
          0
        ],
        ix: 1
      },
      s: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.833,
                0.833,
                0.833
              ],
              y: [
                0.833,
                0.833,
                0.833
              ]
            },
            o: {
              x: [
                0.167,
                0.167,
                0.167
              ],
              y: [
                0.167,
                0.167,
                0.167
              ]
            },
            t: 20,
            s: [
              0,
              0,
              100
            ]
          },
          {
            t: 29,
            s: [
              100,
              100,
              100
            ]
          }
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -1.695
                  ],
                  [
                    1.695,
                    0
                  ],
                  [
                    0,
                    1.695
                  ],
                  [
                    -1.696,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    1.695
                  ],
                  [
                    -1.696,
                    0
                  ],
                  [
                    0,
                    -1.695
                  ],
                  [
                    1.695,
                    0
                  ]
                ],
                v: [
                  [
                    3.07,
                    -1e-3
                  ],
                  [
                    1e-3,
                    3.069
                  ],
                  [
                    -3.07,
                    -1e-3
                  ],
                  [
                    1e-3,
                    -3.069
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                53.423,
                82.742
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -1.695
                  ],
                  [
                    1.695,
                    0
                  ],
                  [
                    0,
                    1.695
                  ],
                  [
                    -1.696,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    1.695
                  ],
                  [
                    -1.696,
                    0
                  ],
                  [
                    0,
                    -1.695
                  ],
                  [
                    1.695,
                    0
                  ]
                ],
                v: [
                  [
                    3.07,
                    0
                  ],
                  [
                    1e-3,
                    3.069
                  ],
                  [
                    -3.07,
                    0
                  ],
                  [
                    1e-3,
                    -3.069
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                53.423,
                70.765
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -1.695
                  ],
                  [
                    1.695,
                    0
                  ],
                  [
                    0,
                    1.695
                  ],
                  [
                    -1.696,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    1.695
                  ],
                  [
                    -1.696,
                    0
                  ],
                  [
                    0,
                    -1.695
                  ],
                  [
                    1.695,
                    0
                  ]
                ],
                v: [
                  [
                    3.07,
                    -1e-3
                  ],
                  [
                    1e-3,
                    3.069
                  ],
                  [
                    -3.07,
                    -1e-3
                  ],
                  [
                    1e-3,
                    -3.069
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                53.423,
                58.79
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.056,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.057
                  ],
                  [
                    -1.056,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.055
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.056,
                    0
                  ],
                  [
                    0,
                    -1.055
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.056,
                    0
                  ],
                  [
                    0,
                    1.057
                  ]
                ],
                v: [
                  [
                    11.272,
                    1.912
                  ],
                  [
                    -11.272,
                    1.912
                  ],
                  [
                    -13.184,
                    -1e-3
                  ],
                  [
                    -11.272,
                    -1.912
                  ],
                  [
                    11.272,
                    -1.912
                  ],
                  [
                    13.184,
                    -1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                27.558,
                82.742
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.056,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.056
                  ],
                  [
                    -1.056,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.056
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.056,
                    0
                  ],
                  [
                    0,
                    -1.056
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.056,
                    0
                  ],
                  [
                    0,
                    1.056
                  ]
                ],
                v: [
                  [
                    11.272,
                    1.912
                  ],
                  [
                    -11.272,
                    1.912
                  ],
                  [
                    -13.184,
                    0
                  ],
                  [
                    -11.272,
                    -1.912
                  ],
                  [
                    11.272,
                    -1.912
                  ],
                  [
                    13.184,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                27.558,
                70.766
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 5",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.056,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.056
                  ],
                  [
                    -1.056,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.056
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.056,
                    0
                  ],
                  [
                    0,
                    -1.056
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.056,
                    0
                  ],
                  [
                    0,
                    1.056
                  ]
                ],
                v: [
                  [
                    11.272,
                    1.912
                  ],
                  [
                    -11.272,
                    1.912
                  ],
                  [
                    -13.184,
                    0
                  ],
                  [
                    -11.272,
                    -1.912
                  ],
                  [
                    11.272,
                    -1.912
                  ],
                  [
                    13.184,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                27.558,
                58.789
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 6",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 6,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.926,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.926
                  ],
                  [
                    -0.927,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.927
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.927,
                    0
                  ],
                  [
                    0,
                    -0.927
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.926,
                    0
                  ],
                  [
                    0,
                    0.926
                  ]
                ],
                v: [
                  [
                    7.314,
                    1.677
                  ],
                  [
                    -7.313,
                    1.677
                  ],
                  [
                    -8.99,
                    1e-3
                  ],
                  [
                    -7.313,
                    -1.677
                  ],
                  [
                    7.314,
                    -1.677
                  ],
                  [
                    8.99,
                    1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                49.732,
                36.615
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 7",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 7,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.926,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.926
                  ],
                  [
                    -0.927,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.927
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.927,
                    0
                  ],
                  [
                    0,
                    -0.927
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.926,
                    0
                  ],
                  [
                    0,
                    0.926
                  ]
                ],
                v: [
                  [
                    7.314,
                    1.677
                  ],
                  [
                    -7.313,
                    1.677
                  ],
                  [
                    -8.99,
                    1e-3
                  ],
                  [
                    -7.313,
                    -1.677
                  ],
                  [
                    7.314,
                    -1.677
                  ],
                  [
                    8.99,
                    1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                49.732,
                28.563
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 8",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 8,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.926,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.927
                  ],
                  [
                    -0.927,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.926
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.927,
                    0
                  ],
                  [
                    0,
                    -0.926
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.926,
                    0
                  ],
                  [
                    0,
                    0.927
                  ]
                ],
                v: [
                  [
                    7.314,
                    1.677
                  ],
                  [
                    -7.313,
                    1.677
                  ],
                  [
                    -8.99,
                    0
                  ],
                  [
                    -7.313,
                    -1.677
                  ],
                  [
                    7.314,
                    -1.677
                  ],
                  [
                    8.99,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                49.732,
                19.841
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 9",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 9,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    3.491,
                    0
                  ],
                  [
                    0,
                    3.491
                  ],
                  [
                    -3.476,
                    0
                  ],
                  [
                    0,
                    -3.491
                  ]
                ],
                o: [
                  [
                    -3.476,
                    0
                  ],
                  [
                    0,
                    -3.491
                  ],
                  [
                    3.491,
                    0
                  ],
                  [
                    0,
                    3.491
                  ]
                ],
                v: [
                  [
                    0,
                    6.31
                  ],
                  [
                    -6.31,
                    0
                  ],
                  [
                    0,
                    -6.31
                  ],
                  [
                    6.311,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    5.121,
                    0
                  ],
                  [
                    0,
                    -5.121
                  ],
                  [
                    -5.104,
                    0
                  ],
                  [
                    0,
                    5.121
                  ]
                ],
                o: [
                  [
                    -5.104,
                    0
                  ],
                  [
                    0,
                    5.121
                  ],
                  [
                    5.121,
                    0
                  ],
                  [
                    0,
                    -5.121
                  ]
                ],
                v: [
                  [
                    0,
                    -9.259
                  ],
                  [
                    -9.259,
                    0
                  ],
                  [
                    0,
                    9.259
                  ],
                  [
                    9.259,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 2",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.486000001197,
                0.651000019148,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                19.535,
                25.678
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 10",
        np: 5,
        cix: 2,
        bm: 0,
        ix: 10,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.499,
                    -0.443
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.443,
                    0.499
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.498,
                    0.443
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.442,
                    0.499
                  ]
                ],
                v: [
                  [
                    5.005,
                    4.82
                  ],
                  [
                    4.219,
                    5.519
                  ],
                  [
                    2.514,
                    5.417
                  ],
                  [
                    -5.548,
                    -3.66
                  ],
                  [
                    -2.956,
                    -5.962
                  ],
                  [
                    5.106,
                    3.115
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.486000001197,
                0.651000019148,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                27.89,
                36.756
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 11",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 11,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.665
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.665,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.664
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.665,
                    0
                  ]
                ],
                o: [
                  [
                    -1.665,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.664
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.665,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.665
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -27.475,
                    -44.182
                  ],
                  [
                    -30.495,
                    -41.162
                  ],
                  [
                    -30.495,
                    41.162
                  ],
                  [
                    -27.475,
                    44.181
                  ],
                  [
                    27.475,
                    44.181
                  ],
                  [
                    30.495,
                    41.162
                  ],
                  [
                    30.495,
                    -41.162
                  ],
                  [
                    27.475,
                    -44.182
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    2.553,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.553
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.553,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.554
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.553,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.554
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.553,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.553
                  ]
                ],
                v: [
                  [
                    27.475,
                    45.792
                  ],
                  [
                    -27.475,
                    45.792
                  ],
                  [
                    -32.105,
                    41.162
                  ],
                  [
                    -32.105,
                    -41.162
                  ],
                  [
                    -27.475,
                    -45.792
                  ],
                  [
                    27.475,
                    -45.792
                  ],
                  [
                    32.105,
                    -41.162
                  ],
                  [
                    32.105,
                    41.162
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 2",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.310000011968,
                0.493999974868,
                0.717999985639,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                32.354,
                46.042
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 12",
        np: 5,
        cix: 2,
        bm: 0,
        ix: 12,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    2.112,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.113
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.113,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.112
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.113,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.112
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.112,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.113
                  ]
                ],
                v: [
                  [
                    27.475,
                    44.987
                  ],
                  [
                    -27.475,
                    44.987
                  ],
                  [
                    -31.299,
                    41.162
                  ],
                  [
                    -31.299,
                    -41.162
                  ],
                  [
                    -27.475,
                    -44.987
                  ],
                  [
                    27.475,
                    -44.987
                  ],
                  [
                    31.299,
                    -41.162
                  ],
                  [
                    31.299,
                    41.162
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.760784313725,
                0.847058823529,
                0.96862745098,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                35.843,
                49.53
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 13",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 13,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 20,
    op: 142,
    st: 20,
    bm: 0
  },
  {
    ddd: 0,
    ind: 6,
    ty: 4,
    nm: "Layer 10/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 24,
            s: [
              500,
              395.5,
              0
            ],
            to: [
              -95.667,
              6,
              0
            ],
            ti: [
              0.333,
              -0.333,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 36,
            s: [
              376.25,
              353.25,
              0
            ],
            to: [
              -0.333,
              0.333,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 46,
            s: [
              376.25,
              353.25,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 94,
            s: [
              353.25,
              353.25,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 140,
            s: [
              376.25,
              353.25,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          38,
          30,
          0
        ],
        ix: 1
      },
      s: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.833,
                0.833,
                0.833
              ],
              y: [
                0.833,
                0.833,
                0.833
              ]
            },
            o: {
              x: [
                0.167,
                0.167,
                0.167
              ],
              y: [
                0.167,
                0.167,
                0.167
              ]
            },
            t: 24,
            s: [
              0,
              0,
              100
            ]
          },
          {
            t: 36,
            s: [
              100,
              100,
              100
            ]
          }
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.585,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.585
                  ],
                  [
                    -0.585,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.585
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.585,
                    0
                  ],
                  [
                    0,
                    -0.585
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.585,
                    0
                  ],
                  [
                    0,
                    0.585
                  ]
                ],
                v: [
                  [
                    26.923,
                    1.06
                  ],
                  [
                    -26.923,
                    1.06
                  ],
                  [
                    -27.982,
                    0
                  ],
                  [
                    -26.923,
                    -1.059
                  ],
                  [
                    26.923,
                    -1.059
                  ],
                  [
                    27.982,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                36.28,
                38.487
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.585,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.585
                  ],
                  [
                    -0.585,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.585
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.585,
                    0
                  ],
                  [
                    0,
                    -0.585
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.585,
                    0
                  ],
                  [
                    0,
                    0.585
                  ]
                ],
                v: [
                  [
                    26.923,
                    1.059
                  ],
                  [
                    -26.923,
                    1.059
                  ],
                  [
                    -27.982,
                    -1e-3
                  ],
                  [
                    -26.923,
                    -1.059
                  ],
                  [
                    26.923,
                    -1.059
                  ],
                  [
                    27.982,
                    -1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                36.28,
                31.955
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.585,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.585
                  ],
                  [
                    -0.585,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.585
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.585,
                    0
                  ],
                  [
                    0,
                    -0.585
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.585,
                    0
                  ],
                  [
                    0,
                    0.585
                  ]
                ],
                v: [
                  [
                    26.923,
                    1.059
                  ],
                  [
                    -26.923,
                    1.059
                  ],
                  [
                    -27.982,
                    -1e-3
                  ],
                  [
                    -26.923,
                    -1.059
                  ],
                  [
                    26.923,
                    -1.059
                  ],
                  [
                    27.982,
                    -1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                36.28,
                25.423
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.585,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.585
                  ],
                  [
                    -0.585,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.585
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.585,
                    0
                  ],
                  [
                    0,
                    -0.585
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.585,
                    0
                  ],
                  [
                    0,
                    0.585
                  ]
                ],
                v: [
                  [
                    22.51,
                    1.059
                  ],
                  [
                    -22.509,
                    1.059
                  ],
                  [
                    -23.568,
                    -1e-3
                  ],
                  [
                    -22.509,
                    -1.059
                  ],
                  [
                    22.51,
                    -1.059
                  ],
                  [
                    23.569,
                    -1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                40.694,
                18.891
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.585,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.586
                  ],
                  [
                    -0.585,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.585
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.585,
                    0
                  ],
                  [
                    0,
                    -0.585
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.585,
                    0
                  ],
                  [
                    0,
                    0.586
                  ]
                ],
                v: [
                  [
                    7.768,
                    1.059
                  ],
                  [
                    -7.768,
                    1.059
                  ],
                  [
                    -8.827,
                    -1e-3
                  ],
                  [
                    -7.768,
                    -1.059
                  ],
                  [
                    7.768,
                    -1.059
                  ],
                  [
                    8.827,
                    -1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                17.125,
                9.71
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 5",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    2.194,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.194
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.194,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.401,
                    1.158
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.194
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.194,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.194
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.917,
                    0.813
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.194,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.194
                  ]
                ],
                v: [
                  [
                    33.72,
                    -29.628
                  ],
                  [
                    -33.72,
                    -29.628
                  ],
                  [
                    -37.692,
                    -25.656
                  ],
                  [
                    -37.692,
                    14.596
                  ],
                  [
                    -33.72,
                    18.568
                  ],
                  [
                    12.8,
                    18.568
                  ],
                  [
                    24.932,
                    29.322
                  ],
                  [
                    26.848,
                    28.041
                  ],
                  [
                    23.569,
                    18.568
                  ],
                  [
                    33.72,
                    18.568
                  ],
                  [
                    37.693,
                    14.596
                  ],
                  [
                    37.693,
                    -25.656
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.760784313725,
                0.847058823529,
                0.96862745098,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                37.693,
                29.629
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 6",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 6,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 24,
    op: 142,
    st: 24,
    bm: 0
  },
  {
    ddd: 0,
    ind: 7,
    ty: 4,
    nm: "Layer 6/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 13,
            s: [
              496,
              384,
              0
            ],
            to: [
              -153.667,
              -27.167,
              0
            ],
            ti: [
              119.541,
              91.384,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 23,
            s: [
              195,
              273,
              0
            ],
            to: [
              -1.441,
              -1.102,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 32,
            s: [
              195,
              273,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.833,
              y: 0.833
            },
            o: {
              x: 0.167,
              y: 0.167
            },
            t: 86,
            s: [
              195,
              296,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 140,
            s: [
              195,
              272,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          55.5,
          37,
          0
        ],
        ix: 1
      },
      s: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.833,
                0.833,
                0.833
              ],
              y: [
                0.833,
                0.833,
                0.833
              ]
            },
            o: {
              x: [
                0.167,
                0.167,
                0.167
              ],
              y: [
                0.167,
                0.167,
                0.167
              ]
            },
            t: 13,
            s: [
              0,
              0,
              100
            ]
          },
          {
            t: 23,
            s: [
              100,
              100,
              100
            ]
          }
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.778,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.778
                  ],
                  [
                    -0.779,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.779
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.779,
                    0
                  ],
                  [
                    0,
                    -0.779
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.778,
                    0
                  ],
                  [
                    0,
                    0.778
                  ]
                ],
                v: [
                  [
                    9.461,
                    1.409
                  ],
                  [
                    -9.46,
                    1.409
                  ],
                  [
                    -10.87,
                    0
                  ],
                  [
                    -9.46,
                    -1.408
                  ],
                  [
                    9.461,
                    -1.408
                  ],
                  [
                    10.87,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                69.509,
                62.38
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.778,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.778
                  ],
                  [
                    -0.779,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.779
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.779,
                    0
                  ],
                  [
                    0,
                    -0.779
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.778,
                    0
                  ],
                  [
                    0,
                    0.778
                  ]
                ],
                v: [
                  [
                    9.461,
                    1.409
                  ],
                  [
                    -9.46,
                    1.409
                  ],
                  [
                    -10.87,
                    0
                  ],
                  [
                    -9.46,
                    -1.408
                  ],
                  [
                    9.461,
                    -1.408
                  ],
                  [
                    10.87,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                42.403,
                62.38
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.778,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.777
                  ],
                  [
                    -0.779,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.779
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.779,
                    0
                  ],
                  [
                    0,
                    -0.779
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.778,
                    0
                  ],
                  [
                    0,
                    0.777
                  ]
                ],
                v: [
                  [
                    9.461,
                    1.408
                  ],
                  [
                    -9.46,
                    1.408
                  ],
                  [
                    -10.87,
                    1e-3
                  ],
                  [
                    -9.46,
                    -1.408
                  ],
                  [
                    9.461,
                    -1.408
                  ],
                  [
                    10.87,
                    1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                85.944,
                52.316
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.778,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.777
                  ],
                  [
                    -0.779,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.779
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.779,
                    0
                  ],
                  [
                    0,
                    -0.779
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.778,
                    0
                  ],
                  [
                    0,
                    0.777
                  ]
                ],
                v: [
                  [
                    9.461,
                    1.408
                  ],
                  [
                    -9.46,
                    1.408
                  ],
                  [
                    -10.87,
                    1e-3
                  ],
                  [
                    -9.46,
                    -1.408
                  ],
                  [
                    9.461,
                    -1.408
                  ],
                  [
                    10.87,
                    1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                58.838,
                52.316
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.778,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.777
                  ],
                  [
                    -0.778,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.779
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.778,
                    0
                  ],
                  [
                    0,
                    -0.779
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.778,
                    0
                  ],
                  [
                    0,
                    0.777
                  ]
                ],
                v: [
                  [
                    9.46,
                    1.408
                  ],
                  [
                    -9.461,
                    1.408
                  ],
                  [
                    -10.87,
                    1e-3
                  ],
                  [
                    -9.461,
                    -1.408
                  ],
                  [
                    9.46,
                    -1.408
                  ],
                  [
                    10.869,
                    1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                29.991,
                52.316
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 5",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                88.763,
                35.272
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 6",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 6,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -241.337,
                    18.188
                  ],
                  [
                    -237.311,
                    18.188
                  ],
                  [
                    -237.311,
                    0.029
                  ],
                  [
                    -241.337,
                    0.029
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 4",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.910000011968,
                0.246999987434,
                0.328999986836,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                319.901,
                21.625
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 7",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 7,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                72.258,
                33.789
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 8",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 8,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.445,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.445,
                    0
                  ],
                  [
                    0,
                    -0.445
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.445
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.445
                  ],
                  [
                    0.445,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.445,
                    0
                  ],
                  [
                    0,
                    0.446
                  ]
                ],
                v: [
                  [
                    15.297,
                    13.657
                  ],
                  [
                    -16.103,
                    13.657
                  ],
                  [
                    -16.103,
                    -12.852
                  ],
                  [
                    -15.298,
                    -13.657
                  ],
                  [
                    -14.493,
                    -12.852
                  ],
                  [
                    -14.493,
                    12.047
                  ],
                  [
                    15.297,
                    12.047
                  ],
                  [
                    16.103,
                    12.852
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                79.772,
                27.766
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 9",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 9,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -5.114
                  ],
                  [
                    2.106,
                    -2.091
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    3.2
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    4.581,
                    1.545
                  ]
                ],
                v: [
                  [
                    5.805,
                    1.401
                  ],
                  [
                    2.4,
                    9.592
                  ],
                  [
                    -5.805,
                    1.401
                  ],
                  [
                    -2.085,
                    -9.592
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.910000011968,
                0.246999987434,
                0.328999986836,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                43.112,
                24.506
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 10",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 10,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    3.785,
                    0
                  ],
                  [
                    0,
                    7.536
                  ],
                  [
                    -7.536,
                    0
                  ],
                  [
                    -1.368,
                    -0.468
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    -2.464,
                    2.48
                  ],
                  [
                    -7.536,
                    0
                  ],
                  [
                    0,
                    -7.552
                  ],
                  [
                    1.53,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    11.659,
                    9.653
                  ],
                  [
                    1.997,
                    13.663
                  ],
                  [
                    -11.659,
                    8e-3
                  ],
                  [
                    1.997,
                    -13.663
                  ],
                  [
                    6.376,
                    -12.938
                  ],
                  [
                    1.997,
                    8e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.486000001197,
                0.651000019148,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                31.453,
                26.954
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 11",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 11,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.515
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.516,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.515
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.516,
                    0
                  ]
                ],
                o: [
                  [
                    -2.516,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.515
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.516,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.515
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -47.637,
                    -33.413
                  ],
                  [
                    -52.199,
                    -28.851
                  ],
                  [
                    -52.199,
                    28.851
                  ],
                  [
                    -47.637,
                    33.412
                  ],
                  [
                    47.637,
                    33.412
                  ],
                  [
                    52.199,
                    28.851
                  ],
                  [
                    52.199,
                    -28.851
                  ],
                  [
                    47.637,
                    -33.413
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    3.404,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    3.402
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -3.404,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -3.404
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -3.404,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -3.404
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    3.404,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    3.402
                  ]
                ],
                v: [
                  [
                    47.637,
                    35.023
                  ],
                  [
                    -47.637,
                    35.023
                  ],
                  [
                    -53.81,
                    28.851
                  ],
                  [
                    -53.81,
                    -28.851
                  ],
                  [
                    -47.637,
                    -35.023
                  ],
                  [
                    47.637,
                    -35.023
                  ],
                  [
                    53.81,
                    -28.851
                  ],
                  [
                    53.81,
                    28.851
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 2",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.310000011968,
                0.493999974868,
                0.717999985639,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                54.06,
                35.273
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 12",
        np: 5,
        cix: 2,
        bm: 0,
        ix: 12,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    2.964,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.965
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.964,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.965
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.964,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.965
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.964,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.965
                  ]
                ],
                v: [
                  [
                    47.637,
                    34.218
                  ],
                  [
                    -47.637,
                    34.218
                  ],
                  [
                    -53.004,
                    28.85
                  ],
                  [
                    -53.004,
                    -28.851
                  ],
                  [
                    -47.637,
                    -34.219
                  ],
                  [
                    47.637,
                    -34.219
                  ],
                  [
                    53.005,
                    -28.851
                  ],
                  [
                    53.005,
                    28.85
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.760784313725,
                0.847058823529,
                0.96862745098,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                57.968,
                39.233
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 13",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 13,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 13,
    op: 142,
    st: 13,
    bm: 0
  },
  {
    ddd: 0,
    ind: 8,
    ty: 4,
    nm: "Layer 24/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 28,
            s: [
              500.5,
              375,
              0
            ],
            to: [
              94.833,
              0.333,
              0
            ],
            ti: [
              -16.833,
              12.667,
              0
            ]
          },
          {
            i: {
              x: 0.667,
              y: 0.667
            },
            o: {
              x: 0.333,
              y: 0.333
            },
            t: 37,
            s: [
              601.5,
              299,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 50,
            s: [
              601.5,
              299,
              0
            ],
            to: [
              0,
              3.667,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 93,
            s: [
              601.5,
              321,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              3.667,
              0
            ]
          },
          {
            t: 140,
            s: [
              601.5,
              299,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          34,
          41,
          0
        ],
        ix: 1
      },
      s: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.667,
                0.667,
                0.667
              ],
              y: [
                1,
                1,
                1
              ]
            },
            o: {
              x: [
                0.333,
                0.333,
                0.333
              ],
              y: [
                0,
                0,
                0
              ]
            },
            t: 28,
            s: [
              0,
              0,
              100
            ]
          },
          {
            t: 37,
            s: [
              100,
              100,
              100
            ]
          }
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.66
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.66
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    -0.66
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0.66
                  ]
                ],
                v: [
                  [
                    9.472,
                    1.196
                  ],
                  [
                    -9.472,
                    1.196
                  ],
                  [
                    -10.668,
                    0
                  ],
                  [
                    -9.472,
                    -1.196
                  ],
                  [
                    9.472,
                    -1.196
                  ],
                  [
                    10.668,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                43.276,
                69.358
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.66
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.661
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    -0.661
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0.66
                  ]
                ],
                v: [
                  [
                    9.472,
                    1.196
                  ],
                  [
                    -9.472,
                    1.196
                  ],
                  [
                    -10.668,
                    1e-3
                  ],
                  [
                    -9.472,
                    -1.196
                  ],
                  [
                    9.472,
                    -1.196
                  ],
                  [
                    10.668,
                    1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                43.276,
                63.551
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -5.183,
                    2.134
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.022,
                    -0.041
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.118,
                    -1.474
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -6.468,
                    2.664
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -2.892,
                    4.611
                  ],
                  [
                    -6.526,
                    0.563
                  ],
                  [
                    -5.328,
                    -0.514
                  ],
                  [
                    -3.125,
                    1.945
                  ],
                  [
                    5.913,
                    -4.611
                  ],
                  [
                    6.526,
                    -3.123
                  ],
                  [
                    -2.339,
                    3.642
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.917999985639,
                0.607999973671,
                0.630999995213,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                21.425,
                64.747
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -4.496,
                    5.703
                  ],
                  [
                    4.496,
                    5.703
                  ],
                  [
                    4.496,
                    -5.702
                  ],
                  [
                    -4.496,
                    -5.702
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    6.106,
                    7.313
                  ],
                  [
                    -6.107,
                    7.313
                  ],
                  [
                    -6.107,
                    -7.313
                  ],
                  [
                    6.106,
                    -7.313
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 2",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.486000001197,
                0.651000019148,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                15.499,
                66.582
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 5,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.66
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.66
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    -0.66
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0.66
                  ]
                ],
                v: [
                  [
                    9.472,
                    1.196
                  ],
                  [
                    -9.472,
                    1.196
                  ],
                  [
                    -10.668,
                    1e-3
                  ],
                  [
                    -9.472,
                    -1.196
                  ],
                  [
                    9.472,
                    -1.196
                  ],
                  [
                    10.668,
                    1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                43.276,
                46.948
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 5",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.661
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.66
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    -0.66
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0.661
                  ]
                ],
                v: [
                  [
                    9.472,
                    1.196
                  ],
                  [
                    -9.472,
                    1.196
                  ],
                  [
                    -10.668,
                    0
                  ],
                  [
                    -9.472,
                    -1.196
                  ],
                  [
                    9.472,
                    -1.196
                  ],
                  [
                    10.668,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                43.276,
                41.142
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 6",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 6,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -5.183,
                    2.134
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.022,
                    -0.041
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.118,
                    -1.474
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -6.468,
                    2.664
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -2.892,
                    4.611
                  ],
                  [
                    -6.526,
                    0.562
                  ],
                  [
                    -5.328,
                    -0.514
                  ],
                  [
                    -3.125,
                    1.945
                  ],
                  [
                    5.913,
                    -4.611
                  ],
                  [
                    6.526,
                    -3.123
                  ],
                  [
                    -2.339,
                    3.641
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.917999985639,
                0.607999973671,
                0.630999995213,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                21.425,
                42.337
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 7",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 7,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -4.496,
                    5.703
                  ],
                  [
                    4.496,
                    5.703
                  ],
                  [
                    4.496,
                    -5.703
                  ],
                  [
                    -4.496,
                    -5.703
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    6.106,
                    7.313
                  ],
                  [
                    -6.107,
                    7.313
                  ],
                  [
                    -6.107,
                    -7.313
                  ],
                  [
                    6.106,
                    -7.313
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 2",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.486000001197,
                0.651000019148,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                15.499,
                44.172
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 8",
        np: 5,
        cix: 2,
        bm: 0,
        ix: 8,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.66
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.661
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    -0.661
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0.66
                  ]
                ],
                v: [
                  [
                    9.472,
                    1.196
                  ],
                  [
                    -9.472,
                    1.196
                  ],
                  [
                    -10.668,
                    1e-3
                  ],
                  [
                    -9.472,
                    -1.196
                  ],
                  [
                    9.472,
                    -1.196
                  ],
                  [
                    10.668,
                    1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                43.276,
                24.539
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 9",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 9,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.66
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.66
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.66,
                    0
                  ],
                  [
                    0,
                    -0.66
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.66,
                    0
                  ],
                  [
                    0,
                    0.66
                  ]
                ],
                v: [
                  [
                    9.472,
                    1.196
                  ],
                  [
                    -9.472,
                    1.196
                  ],
                  [
                    -10.668,
                    0
                  ],
                  [
                    -9.472,
                    -1.196
                  ],
                  [
                    9.472,
                    -1.196
                  ],
                  [
                    10.668,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                43.276,
                18.732
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 10",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 10,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -5.183,
                    2.135
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.022,
                    -0.041
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.118,
                    -1.474
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -6.468,
                    2.663
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -2.892,
                    4.612
                  ],
                  [
                    -6.526,
                    0.562
                  ],
                  [
                    -5.328,
                    -0.513
                  ],
                  [
                    -3.125,
                    1.945
                  ],
                  [
                    5.913,
                    -4.612
                  ],
                  [
                    6.526,
                    -3.123
                  ],
                  [
                    -2.339,
                    3.641
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.917999985639,
                0.607999973671,
                0.630999995213,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                21.425,
                19.928
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 11",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 11,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -4.496,
                    5.702
                  ],
                  [
                    4.496,
                    5.702
                  ],
                  [
                    4.496,
                    -5.703
                  ],
                  [
                    -4.496,
                    -5.703
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    6.106,
                    7.313
                  ],
                  [
                    -6.107,
                    7.313
                  ],
                  [
                    -6.107,
                    -7.313
                  ],
                  [
                    6.106,
                    -7.313
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 2",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.486000001197,
                0.651000019148,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                15.499,
                21.763
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 12",
        np: 5,
        cix: 2,
        bm: 0,
        ix: 12,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.666
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.665,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.665
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.666,
                    0
                  ]
                ],
                o: [
                  [
                    -1.665,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.665
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.666,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.666
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -27.475,
                    -37.741
                  ],
                  [
                    -30.494,
                    -34.721
                  ],
                  [
                    -30.494,
                    34.721
                  ],
                  [
                    -27.475,
                    37.74
                  ],
                  [
                    27.475,
                    37.74
                  ],
                  [
                    30.495,
                    34.721
                  ],
                  [
                    30.495,
                    -34.721
                  ],
                  [
                    27.475,
                    -37.741
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    2.553,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.553
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.552,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.552
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.552,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.552
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.553,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.553
                  ]
                ],
                v: [
                  [
                    27.475,
                    39.351
                  ],
                  [
                    -27.475,
                    39.351
                  ],
                  [
                    -32.105,
                    34.721
                  ],
                  [
                    -32.105,
                    -34.721
                  ],
                  [
                    -27.475,
                    -39.351
                  ],
                  [
                    27.475,
                    -39.351
                  ],
                  [
                    32.105,
                    -34.721
                  ],
                  [
                    32.105,
                    34.721
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 2",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.310000011968,
                0.493999974868,
                0.717999985639,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                34.789,
                39.601
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 13",
        np: 5,
        cix: 2,
        bm: 0,
        ix: 13,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    2.112,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.112
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.112,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.112
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.112,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.112
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.112,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.112
                  ]
                ],
                v: [
                  [
                    27.475,
                    38.546
                  ],
                  [
                    -27.475,
                    38.546
                  ],
                  [
                    -31.299,
                    34.722
                  ],
                  [
                    -31.299,
                    -34.721
                  ],
                  [
                    -27.475,
                    -38.545
                  ],
                  [
                    27.475,
                    -38.545
                  ],
                  [
                    31.3,
                    -34.721
                  ],
                  [
                    31.3,
                    34.722
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.760784313725,
                0.847058823529,
                0.96862745098,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                31.3,
                42.955
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 14",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 14,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 28,
    op: 142,
    st: 28,
    bm: 0
  },
  {
    ddd: 0,
    ind: 9,
    ty: 4,
    nm: "Layer 5/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 19,
            s: [
              500,
              372,
              0
            ],
            to: [
              40.917,
              1.75,
              0
            ],
            ti: [
              -49.292,
              36.125,
              0
            ]
          },
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 24,
            s: [
              690.5,
              343.5,
              0
            ],
            to: [
              49.292,
              -36.125,
              0
            ],
            ti: [
              0.083,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 29,
            s: [
              775,
              213,
              0
            ],
            to: [
              -0.083,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 38,
            s: [
              775,
              213,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 89,
            s: [
              775,
              229,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 140,
            s: [
              775,
              213,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          34.5,
          41.5,
          0
        ],
        ix: 1
      },
      s: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.667,
                0.667,
                0.667
              ],
              y: [
                1,
                1,
                1
              ]
            },
            o: {
              x: [
                0.333,
                0.333,
                0.333
              ],
              y: [
                0,
                0,
                0
              ]
            },
            t: 19,
            s: [
              0,
              0,
              100
            ]
          },
          {
            t: 29,
            s: [
              100,
              100,
              100
            ]
          }
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.557,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.556
                  ],
                  [
                    -1.556,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.557
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.556,
                    0
                  ],
                  [
                    0,
                    -1.557
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.557,
                    0
                  ],
                  [
                    0,
                    1.556
                  ]
                ],
                v: [
                  [
                    11.272,
                    2.818
                  ],
                  [
                    -11.272,
                    2.818
                  ],
                  [
                    -14.09,
                    0
                  ],
                  [
                    -11.272,
                    -2.818
                  ],
                  [
                    11.272,
                    -2.818
                  ],
                  [
                    14.09,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.760784313725,
                0.847058823529,
                0.96862745098,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                39.151,
                71.333
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -1.557
                  ],
                  [
                    1.556,
                    0
                  ],
                  [
                    0,
                    1.556
                  ],
                  [
                    -1.556,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    1.556
                  ],
                  [
                    -1.556,
                    0
                  ],
                  [
                    0,
                    -1.557
                  ],
                  [
                    1.556,
                    0
                  ]
                ],
                v: [
                  [
                    2.818,
                    0
                  ],
                  [
                    0,
                    2.818
                  ],
                  [
                    -2.818,
                    0
                  ],
                  [
                    0,
                    -2.818
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                10.837,
                71.333
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.557,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.557
                  ],
                  [
                    -1.556,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.556
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.556,
                    0
                  ],
                  [
                    0,
                    -1.556
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.557,
                    0
                  ],
                  [
                    0,
                    1.557
                  ]
                ],
                v: [
                  [
                    11.272,
                    2.818
                  ],
                  [
                    -11.272,
                    2.818
                  ],
                  [
                    -14.09,
                    0
                  ],
                  [
                    -11.272,
                    -2.818
                  ],
                  [
                    11.272,
                    -2.818
                  ],
                  [
                    14.09,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                39.151,
                58.652
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.557,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.557
                  ],
                  [
                    -1.556,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.556
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.556,
                    0
                  ],
                  [
                    0,
                    -1.556
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.557,
                    0
                  ],
                  [
                    0,
                    1.557
                  ]
                ],
                v: [
                  [
                    11.272,
                    2.818
                  ],
                  [
                    -11.272,
                    2.818
                  ],
                  [
                    -14.09,
                    0
                  ],
                  [
                    -11.272,
                    -2.818
                  ],
                  [
                    11.272,
                    -2.818
                  ],
                  [
                    14.09,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                39.151,
                46.173
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -1.556
                  ],
                  [
                    1.556,
                    0
                  ],
                  [
                    0,
                    1.557
                  ],
                  [
                    -1.556,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    1.557
                  ],
                  [
                    -1.556,
                    0
                  ],
                  [
                    0,
                    -1.556
                  ],
                  [
                    1.556,
                    0
                  ]
                ],
                v: [
                  [
                    2.818,
                    0
                  ],
                  [
                    0,
                    2.818
                  ],
                  [
                    -2.818,
                    0
                  ],
                  [
                    0,
                    -2.818
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                10.837,
                58.653
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 5",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -1.556
                  ],
                  [
                    1.556,
                    0
                  ],
                  [
                    0,
                    1.557
                  ],
                  [
                    -1.556,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    1.557
                  ],
                  [
                    -1.556,
                    0
                  ],
                  [
                    0,
                    -1.556
                  ],
                  [
                    1.556,
                    0
                  ]
                ],
                v: [
                  [
                    2.818,
                    0
                  ],
                  [
                    0,
                    2.818
                  ],
                  [
                    -2.818,
                    0
                  ],
                  [
                    0,
                    -2.818
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                10.837,
                46.173
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 6",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 6,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.818,
                    -5.702
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    5.905,
                    1.476
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -6.724,
                    5.099
                  ],
                  [
                    -0.283,
                    -6.374
                  ],
                  [
                    5.622,
                    6.374
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.910000011968,
                0.246999987434,
                0.328999986836,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                26.417,
                19.671
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 7",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 7,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    -5.336
                  ],
                  [
                    5.336,
                    0
                  ],
                  [
                    0,
                    5.336
                  ],
                  [
                    -5.336,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    5.336
                  ],
                  [
                    -5.336,
                    0
                  ],
                  [
                    0,
                    -5.336
                  ],
                  [
                    5.336,
                    0
                  ]
                ],
                v: [
                  [
                    9.661,
                    0
                  ],
                  [
                    0,
                    9.661
                  ],
                  [
                    -9.662,
                    0
                  ],
                  [
                    0,
                    -9.661
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.486000001197,
                0.651000019148,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                17.144,
                26.045
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 8",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 8,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.665
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.665,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.664
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.665,
                    0
                  ]
                ],
                o: [
                  [
                    -1.665,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.664
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.665,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.665
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -27.474,
                    -37.741
                  ],
                  [
                    -30.495,
                    -34.72
                  ],
                  [
                    -30.495,
                    34.721
                  ],
                  [
                    -27.474,
                    37.741
                  ],
                  [
                    27.475,
                    37.741
                  ],
                  [
                    30.495,
                    34.721
                  ],
                  [
                    30.495,
                    -34.72
                  ],
                  [
                    27.475,
                    -37.741
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    2.552,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.553
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.553,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.554
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.553,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.554
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.552,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.553
                  ]
                ],
                v: [
                  [
                    27.475,
                    39.35
                  ],
                  [
                    -27.474,
                    39.35
                  ],
                  [
                    -32.104,
                    34.721
                  ],
                  [
                    -32.104,
                    -34.72
                  ],
                  [
                    -27.474,
                    -39.35
                  ],
                  [
                    27.475,
                    -39.35
                  ],
                  [
                    32.104,
                    -34.72
                  ],
                  [
                    32.104,
                    34.721
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 2",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.310000011968,
                0.493999974868,
                0.717999985639,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                36.131,
                39.601
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 9",
        np: 5,
        cix: 2,
        bm: 0,
        ix: 9,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    2.112,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.112
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.112,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.112
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.112,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -2.112
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.112,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    2.112
                  ]
                ],
                v: [
                  [
                    27.475,
                    38.546
                  ],
                  [
                    -27.475,
                    38.546
                  ],
                  [
                    -31.299,
                    34.722
                  ],
                  [
                    -31.299,
                    -34.721
                  ],
                  [
                    -27.475,
                    -38.545
                  ],
                  [
                    27.475,
                    -38.545
                  ],
                  [
                    31.3,
                    -34.721
                  ],
                  [
                    31.3,
                    34.722
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.760784313725,
                0.847058823529,
                0.96862745098,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                31.3,
                43.993
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 10",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 10,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 19,
    op: 142,
    st: 19,
    bm: 0
  },
  {
    ddd: 0,
    ind: 10,
    ty: 4,
    nm: "Layer 4/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 1,
        k: [
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 13,
            s: [
              500,
              386.5,
              0
            ],
            to: [
              143.5,
              -133.5,
              0
            ],
            ti: [
              0.25,
              0.25,
              0
            ]
          },
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 24,
            s: [
              557,
              83.5,
              0
            ],
            to: [
              -0.25,
              -0.25,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 38,
            s: [
              557,
              83.5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            i: {
              x: 0.667,
              y: 1
            },
            o: {
              x: 0.333,
              y: 0
            },
            t: 92,
            s: [
              579,
              83.5,
              0
            ],
            to: [
              0,
              0,
              0
            ],
            ti: [
              0,
              0,
              0
            ]
          },
          {
            t: 140,
            s: [
              557,
              83.5,
              0
            ]
          }
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          59.5,
          42.5,
          0
        ],
        ix: 1
      },
      s: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.667,
                0.667,
                0.667
              ],
              y: [
                1,
                1,
                1
              ]
            },
            o: {
              x: [
                0.333,
                0.333,
                0.333
              ],
              y: [
                0,
                0,
                0
              ]
            },
            t: 13,
            s: [
              0,
              0,
              100
            ]
          },
          {
            t: 24,
            s: [
              100,
              100,
              100
            ]
          }
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.334,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.334
                  ],
                  [
                    -1.334,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.334
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.334,
                    0
                  ],
                  [
                    0,
                    -1.334
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.334,
                    0
                  ],
                  [
                    0,
                    1.334
                  ]
                ],
                v: [
                  [
                    32.104,
                    2.415
                  ],
                  [
                    -32.105,
                    2.415
                  ],
                  [
                    -34.52,
                    -1e-3
                  ],
                  [
                    -32.105,
                    -2.416
                  ],
                  [
                    32.104,
                    -2.416
                  ],
                  [
                    34.52,
                    -1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603921568627,
                0.737254901961,
                0.929411764706,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                56.862,
                74.254
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.001
                  ],
                  [
                    -1.001,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.001,
                    0
                  ],
                  [
                    0,
                    -1
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1,
                    0
                  ],
                  [
                    0,
                    1.001
                  ]
                ],
                v: [
                  [
                    8.672,
                    1.811
                  ],
                  [
                    -8.672,
                    1.811
                  ],
                  [
                    -10.483,
                    0
                  ],
                  [
                    -8.672,
                    -1.811
                  ],
                  [
                    8.672,
                    -1.811
                  ],
                  [
                    10.484,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                92.071,
                59.292
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.001
                  ],
                  [
                    -1.001,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.001,
                    0
                  ],
                  [
                    0,
                    -1
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1,
                    0
                  ],
                  [
                    0,
                    1.001
                  ]
                ],
                v: [
                  [
                    8.672,
                    1.811
                  ],
                  [
                    -8.672,
                    1.811
                  ],
                  [
                    -10.483,
                    -1e-3
                  ],
                  [
                    -8.672,
                    -1.812
                  ],
                  [
                    8.672,
                    -1.812
                  ],
                  [
                    10.484,
                    -1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                92.071,
                51.107
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1
                  ],
                  [
                    -1.001,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.001
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.001,
                    0
                  ],
                  [
                    0,
                    -1.001
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1,
                    0
                  ],
                  [
                    0,
                    1
                  ]
                ],
                v: [
                  [
                    8.672,
                    1.812
                  ],
                  [
                    -8.672,
                    1.812
                  ],
                  [
                    -10.483,
                    0
                  ],
                  [
                    -8.672,
                    -1.812
                  ],
                  [
                    8.672,
                    -1.812
                  ],
                  [
                    10.484,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                92.071,
                42.921
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1
                  ],
                  [
                    -1.001,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.001
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.001,
                    0
                  ],
                  [
                    0,
                    -1.001
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1,
                    0
                  ],
                  [
                    0,
                    1
                  ]
                ],
                v: [
                  [
                    8.672,
                    1.812
                  ],
                  [
                    -8.672,
                    1.812
                  ],
                  [
                    -10.483,
                    0
                  ],
                  [
                    -8.672,
                    -1.811
                  ],
                  [
                    8.672,
                    -1.811
                  ],
                  [
                    10.484,
                    0
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                92.071,
                34.736
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 5",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.612,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.611
                  ],
                  [
                    -1.612,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.612
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.612,
                    0
                  ],
                  [
                    0,
                    -1.612
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.612,
                    0
                  ],
                  [
                    0,
                    1.611
                  ]
                ],
                v: [
                  [
                    8.252,
                    2.919
                  ],
                  [
                    -8.253,
                    2.919
                  ],
                  [
                    -11.172,
                    1e-3
                  ],
                  [
                    -8.253,
                    -2.918
                  ],
                  [
                    8.252,
                    -2.918
                  ],
                  [
                    11.171,
                    1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                91.382,
                18.13
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 6",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 6,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.139,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.14
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.139,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.14
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.139,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.14
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.139,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.14
                  ]
                ],
                v: [
                  [
                    28.733,
                    16.304
                  ],
                  [
                    -28.734,
                    16.304
                  ],
                  [
                    -30.797,
                    14.241
                  ],
                  [
                    -30.797,
                    -14.24
                  ],
                  [
                    -28.734,
                    -16.303
                  ],
                  [
                    28.733,
                    -16.303
                  ],
                  [
                    30.796,
                    -14.24
                  ],
                  [
                    30.796,
                    14.241
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.486000001197,
                0.651000019148,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                42.169,
                47.618
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 7",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 7,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.611,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    1.611
                  ],
                  [
                    -1.611,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -1.612
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.611,
                    0
                  ],
                  [
                    0,
                    -1.612
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.611,
                    0
                  ],
                  [
                    0,
                    1.611
                  ]
                ],
                v: [
                  [
                    27.878,
                    2.919
                  ],
                  [
                    -27.878,
                    2.919
                  ],
                  [
                    -30.797,
                    1e-3
                  ],
                  [
                    -27.878,
                    -2.918
                  ],
                  [
                    27.878,
                    -2.918
                  ],
                  [
                    30.796,
                    1e-3
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.603999956916,
                0.736999990426,
                0.929000016755,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                42.169,
                18.13
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 8",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 8,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -3.219
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -3.219,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    3.219
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    3.218,
                    0
                  ]
                ],
                o: [
                  [
                    -3.219,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    3.219
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    3.218,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -3.219
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -50.321,
                    -39.25
                  ],
                  [
                    -56.159,
                    -33.413
                  ],
                  [
                    -56.159,
                    33.413
                  ],
                  [
                    -50.321,
                    39.25
                  ],
                  [
                    50.321,
                    39.25
                  ],
                  [
                    56.158,
                    33.413
                  ],
                  [
                    56.158,
                    -33.413
                  ],
                  [
                    50.321,
                    -39.25
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    4.105,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    4.107
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -4.106,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -4.107
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -4.106,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -4.107
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    4.105,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    4.107
                  ]
                ],
                v: [
                  [
                    50.321,
                    40.86
                  ],
                  [
                    -50.321,
                    40.86
                  ],
                  [
                    -57.768,
                    33.413
                  ],
                  [
                    -57.768,
                    -33.413
                  ],
                  [
                    -50.321,
                    -40.86
                  ],
                  [
                    50.321,
                    -40.86
                  ],
                  [
                    57.768,
                    -33.413
                  ],
                  [
                    57.768,
                    33.413
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 2",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.310000011968,
                0.493999974868,
                0.717999985639,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                60.453,
                41.11
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 9",
        np: 5,
        cix: 2,
        bm: 0,
        ix: 9,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    3.668,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    3.668
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -3.669,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -3.669
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -3.669,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -3.669
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    3.668,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    3.668
                  ]
                ],
                v: [
                  [
                    50.321,
                    40.055
                  ],
                  [
                    -50.321,
                    40.055
                  ],
                  [
                    -56.963,
                    33.413
                  ],
                  [
                    -56.963,
                    -33.413
                  ],
                  [
                    -50.321,
                    -40.055
                  ],
                  [
                    50.321,
                    -40.055
                  ],
                  [
                    56.963,
                    -33.413
                  ],
                  [
                    56.963,
                    33.413
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.759707821117,
                0.845204192517,
                0.96862745098,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                56.963,
                44.8
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 10",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 10,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 13,
    op: 142,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 11,
    ty: 4,
    nm: "Layer 15/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 0,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 5,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 11,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 17,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 23,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 28,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 33,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 39,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 45,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 51,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 56,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 61,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 67,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 73,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 78,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 83,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 88,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 94,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 100,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 104,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 109,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 115,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 121,
            s: [
              2
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 127,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 131,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.667
              ],
              y: [
                1
              ]
            },
            o: {
              x: [
                0.333
              ],
              y: [
                0
              ]
            },
            t: 136,
            s: [
              0
            ]
          },
          {
            t: 141,
            s: [
              0
            ]
          }
        ],
        ix: 10
      },
      p: {
        a: 0,
        k: [
          419.5,
          394.5,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          6.5,
          4.5,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.679,
                    -0.431
                  ],
                  [
                    -1.659,
                    -7.809
                  ],
                  [
                    -31.818,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    15.023,
                    -1e-3
                  ]
                ],
                o: [
                  [
                    -9.516,
                    2.447
                  ],
                  [
                    3.044,
                    9.935
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.906,
                    0
                  ]
                ],
                v: [
                  [
                    -76.88,
                    123.666
                  ],
                  [
                    -86.848,
                    142.136
                  ],
                  [
                    -39.233,
                    152.86
                  ],
                  [
                    -35.062,
                    152.86
                  ],
                  [
                    -36.011,
                    134.938
                  ],
                  [
                    -71.476,
                    123.043
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.254901960784,
                0.388235294118,
                0.58431372549,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                88.757,
                -122.792
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 0,
    op: 142,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 12,
    ty: 4,
    nm: "Layer 7/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          500,
          360.5,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          87.5,
          62,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -0.531,
                    -2.77
                  ],
                  [
                    5.024,
                    4.622
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    -11.272,
                    13.236
                  ],
                  [
                    0.017,
                    -4.299
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.097,
                    3.897
                  ]
                ],
                v: [
                  [
                    14.066,
                    -1.554
                  ],
                  [
                    -13.809,
                    -0.668
                  ],
                  [
                    -14.066,
                    -8.542
                  ],
                  [
                    -14.066,
                    -10.475
                  ],
                  [
                    12.986,
                    -11.682
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                1,
                0.522000002394,
                0.416000007181,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                83.219,
                11.932
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    8.277,
                    -0.209
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.948,
                    0.869
                  ],
                  [
                    -0.113,
                    5.185
                  ],
                  [
                    0,
                    0.515
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.532,
                    -2.77
                  ],
                  [
                    -0.017,
                    -0.048
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.898,
                    0
                  ],
                  [
                    -4.734,
                    -2.126
                  ],
                  [
                    0.016,
                    -0.532
                  ],
                  [
                    0.016,
                    -4.299
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.096,
                    3.897
                  ],
                  [
                    0.015,
                    0.049
                  ],
                  [
                    1.546,
                    8.132
                  ]
                ],
                v: [
                  [
                    0.62,
                    13.148
                  ],
                  [
                    0.121,
                    13.148
                  ],
                  [
                    -7.125,
                    11.683
                  ],
                  [
                    -14.613,
                    -0.572
                  ],
                  [
                    -14.597,
                    -2.133
                  ],
                  [
                    -14.855,
                    -10.008
                  ],
                  [
                    -14.855,
                    -11.941
                  ],
                  [
                    12.198,
                    -13.148
                  ],
                  [
                    13.277,
                    -3.02
                  ],
                  [
                    13.309,
                    -2.891
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.995999983245,
                0.694000004787,
                0.620000023935,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                84.008,
                13.397
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -6.683,
                    -1.562
                  ],
                  [
                    18.195,
                    0
                  ],
                  [
                    0.837,
                    7.649
                  ],
                  [
                    -5.54,
                    0
                  ]
                ],
                o: [
                  [
                    -0.677,
                    9.033
                  ],
                  [
                    -19.179,
                    0
                  ],
                  [
                    8.937,
                    -3.462
                  ],
                  [
                    9.757,
                    0
                  ]
                ],
                v: [
                  [
                    23.341,
                    -11.602
                  ],
                  [
                    0.733,
                    13.888
                  ],
                  [
                    -23.341,
                    -9.976
                  ],
                  [
                    -0.974,
                    -13.888
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.122000002394,
                0.224000010771,
                0.368999974868,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                84.201,
                19.501
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    64.275,
                    47.925
                  ],
                  [
                    -2.319,
                    18.476
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -8.33,
                    -16.477
                  ]
                ],
                o: [
                  [
                    8.344,
                    -13.122
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.272,
                    17.561
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -52.669,
                    14.059
                  ],
                  [
                    -39.383,
                    -35.744
                  ],
                  [
                    -32.137,
                    1.83
                  ],
                  [
                    30.663,
                    1.83
                  ],
                  [
                    42.203,
                    -35.744
                  ],
                  [
                    52.67,
                    15.516
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.122000002394,
                0.224000010771,
                0.368999974868,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                88.216,
                80.27
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 1,
            ty: "sh",
            ix: 2,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    8.937,
                    -3.462
                  ],
                  [
                    10.161,
                    -13.173
                  ],
                  [
                    -2.158,
                    -11.544
                  ],
                  [
                    -0.177,
                    -0.531
                  ],
                  [
                    -31.818,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -7.777,
                    14.217
                  ],
                  [
                    -0.467,
                    1.899
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    17.213,
                    21.981
                  ],
                  [
                    17.938,
                    4.203
                  ],
                  [
                    9.757,
                    0
                  ]
                ],
                o: [
                  [
                    -9.356,
                    3.623
                  ],
                  [
                    -19.855,
                    25.764
                  ],
                  [
                    0.112,
                    0.597
                  ],
                  [
                    3.044,
                    9.935
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.853,
                    -1.563
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    3.848,
                    -15.425
                  ],
                  [
                    -14.075,
                    -17.987
                  ],
                  [
                    -6.683,
                    -1.561
                  ],
                  [
                    -5.54,
                    0
                  ]
                ],
                v: [
                  [
                    -28.814,
                    41.832
                  ],
                  [
                    -58.829,
                    65.568
                  ],
                  [
                    -87.266,
                    140.444
                  ],
                  [
                    -86.848,
                    142.136
                  ],
                  [
                    -39.233,
                    152.86
                  ],
                  [
                    37.658,
                    152.86
                  ],
                  [
                    79.122,
                    140.977
                  ],
                  [
                    81.103,
                    135.776
                  ],
                  [
                    81.103,
                    135.758
                  ],
                  [
                    59.268,
                    72.54
                  ],
                  [
                    17.868,
                    40.206
                  ],
                  [
                    -6.447,
                    37.92
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 2",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 1,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.152941176471,
                0.278431372549,
                0.462745098039,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                89.674,
                -32.307
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 5",
        np: 4,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 0,
    op: 142,
    st: 0,
    bm: 0
  },
  {
    ddd: 0,
    ind: 13,
    ty: 4,
    nm: "Layer 9/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            t: 5,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            t: 8,
            s: [
              0
            ]
          },
          {
            t: 11,
            s: [
              100
            ]
          }
        ],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          529,
          430,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          1,
          244.5,
          0
        ],
        ix: 1
      },
      s: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.667,
                0.667,
                0.667
              ],
              y: [
                1,
                1,
                1
              ]
            },
            o: {
              x: [
                0.333,
                0.333,
                0.333
              ],
              y: [
                0,
                0,
                0
              ]
            },
            t: 5,
            s: [
              0,
              0,
              100
            ]
          },
          {
            t: 11,
            s: [
              100,
              100,
              100
            ]
          }
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -4.827,
                    3.527
                  ],
                  [
                    11.057,
                    -9.185
                  ],
                  [
                    1.434,
                    8.917
                  ],
                  [
                    0.327,
                    5.938
                  ],
                  [
                    -2.519,
                    -9.188
                  ],
                  [
                    1.311,
                    11.835
                  ],
                  [
                    -2.94,
                    3.825
                  ],
                  [
                    -7.592,
                    9.315
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -9.608,
                    7.983
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.328,
                    -5.938
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    3.62,
                    1.989
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    19.802,
                    -23.821
                  ],
                  [
                    11.243,
                    16.29
                  ],
                  [
                    -16.278,
                    -0.07
                  ],
                  [
                    -21.972,
                    -8.687
                  ],
                  [
                    -13.292,
                    -4.689
                  ],
                  [
                    -9.695,
                    -17.832
                  ],
                  [
                    0.082,
                    -21.111
                  ],
                  [
                    10.675,
                    -24.273
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.596000043084,
                0.698000021542,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                109.642,
                58.55
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -5.632,
                    0.127
                  ],
                  [
                    -2.313,
                    2.82
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.35,
                    -3.458
                  ]
                ],
                o: [
                  [
                    -0.846,
                    -4.675
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.811,
                    1.418
                  ],
                  [
                    1.818,
                    18.227
                  ]
                ],
                v: [
                  [
                    9.035,
                    13.752
                  ],
                  [
                    7.635,
                    1.133
                  ],
                  [
                    -7.896,
                    -13.879
                  ],
                  [
                    -8.685,
                    -6.694
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.475,
                0.611999990426,
                0.74900004069,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                104.44,
                70.159
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    7.012,
                    -11.589
                  ],
                  [
                    -14.894,
                    3.824
                  ],
                  [
                    0.637,
                    3.583
                  ],
                  [
                    -2.313,
                    2.82
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    5.066,
                    -1.301
                  ],
                  [
                    -0.846,
                    -4.675
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -14.733,
                    -0.808
                  ],
                  [
                    9.637,
                    18.723
                  ],
                  [
                    14.097,
                    8.396
                  ],
                  [
                    12.698,
                    -4.222
                  ],
                  [
                    -2.833,
                    -19.234
                  ],
                  [
                    -6.255,
                    -22.548
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.596000043084,
                0.698000021542,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                99.378,
                75.515
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    2.506,
                    7.542
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    16.485,
                    -8.14
                  ],
                  [
                    3.772,
                    -0.876
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.281,
                    -2.021
                  ],
                  [
                    4.761,
                    -4.246
                  ],
                  [
                    -6.719,
                    -12.239
                  ],
                  [
                    -2.79,
                    -6.41
                  ],
                  [
                    -4.016,
                    0.399
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.505,
                    -7.542
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -3.773,
                    0.877
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.282,
                    2.022
                  ],
                  [
                    -4.759,
                    4.247
                  ],
                  [
                    6.719,
                    12.238
                  ],
                  [
                    2.649,
                    6.088
                  ],
                  [
                    4.018,
                    -0.398
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    25.36,
                    6.802
                  ],
                  [
                    28.98,
                    -13.828
                  ],
                  [
                    19.66,
                    -18.181
                  ],
                  [
                    -0.092,
                    -28.909
                  ],
                  [
                    -4.581,
                    -33.847
                  ],
                  [
                    -12.64,
                    -23.087
                  ],
                  [
                    -17.64,
                    -27.26
                  ],
                  [
                    -24.197,
                    -14.155
                  ],
                  [
                    -24.767,
                    7.132
                  ],
                  [
                    -18.247,
                    27.31
                  ],
                  [
                    -9.697,
                    36.65
                  ],
                  [
                    6.382,
                    17.411
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.365000017952,
                0.486000001197,
                0.626999978458,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                104.648,
                37.299
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    2.416,
                    -14.299
                  ],
                  [
                    18.518,
                    13.686
                  ],
                  [
                    2.302,
                    2.255
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -26.698,
                    20.209
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.476,
                    -8.198
                  ],
                  [
                    2.067,
                    -8.863
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -2.818,
                    -2.094
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    8.85,
                    -3.976
                  ],
                  [
                    1.132,
                    19.53
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    38.477,
                    17.414
                  ],
                  [
                    -22.906,
                    32.101
                  ],
                  [
                    -30.587,
                    25.546
                  ],
                  [
                    -40.893,
                    9.508
                  ],
                  [
                    -4.726,
                    -41.795
                  ],
                  [
                    -4.711,
                    -41.811
                  ],
                  [
                    13.862,
                    -36.141
                  ],
                  [
                    -3.776,
                    4.259
                  ],
                  [
                    34.645,
                    -3.519
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.757000014361,
                0.811999990426,
                0.898000021542,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                41.143,
                131.841
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 5",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -6.508,
                    -9.125
                  ],
                  [
                    0.134,
                    1.476
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.038,
                    -12.702
                  ],
                  [
                    7.648,
                    -0.135
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.134,
                    -1.476
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.038,
                    12.703
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -15.256,
                    1.141
                  ],
                  [
                    -9.754,
                    -1.005
                  ],
                  [
                    1.987,
                    -6.373
                  ],
                  [
                    6.348,
                    -10.533
                  ],
                  [
                    6.147,
                    -14.156
                  ],
                  [
                    13.218,
                    0.515
                  ],
                  [
                    -4.252,
                    11.743
                  ],
                  [
                    -13.779,
                    15.499
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.596000043084,
                0.698000021542,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                91.328,
                130.401
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 6",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 6,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.063,
                    -0.154
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.154,
                    1.064
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.064,
                    0.155
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.154,
                    -1.063
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.064,
                    0.154
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.154,
                    -1.063
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.063,
                    -0.155
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.155,
                    1.063
                  ]
                ],
                v: [
                  [
                    22.223,
                    26.673
                  ],
                  [
                    -13.723,
                    31.891
                  ],
                  [
                    -15.928,
                    30.244
                  ],
                  [
                    -23.87,
                    -24.468
                  ],
                  [
                    -22.223,
                    -26.673
                  ],
                  [
                    13.724,
                    -31.89
                  ],
                  [
                    15.929,
                    -30.244
                  ],
                  [
                    23.869,
                    24.468
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.948999980852,
                0.957000014361,
                0.976000019148,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                80.007,
                139.697
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 7",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 7,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -10.063,
                    6.844
                  ],
                  [
                    0.82,
                    -10.741
                  ],
                  [
                    0.338,
                    0.096
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -9.372,
                    -0.483
                  ],
                  [
                    -0.016,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    9.122,
                    -11.425
                  ],
                  [
                    5.21,
                    11.425
                  ],
                  [
                    -9.106,
                    9.429
                  ],
                  [
                    -9.122,
                    9.412
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.592000026329,
                0.702000038297,
                0.819999964097,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                129.079,
                125.254
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 8",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 8,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    19.919,
                    5.04
                  ],
                  [
                    3.961,
                    11.755
                  ],
                  [
                    -9.437,
                    -1.127
                  ],
                  [
                    -11.787,
                    -4.315
                  ]
                ],
                o: [
                  [
                    -14.412,
                    -3.655
                  ],
                  [
                    7.89,
                    -1.191
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.385,
                    10.29
                  ]
                ],
                v: [
                  [
                    2.77,
                    12.35
                  ],
                  [
                    -23.187,
                    -16.022
                  ],
                  [
                    2.77,
                    -16.263
                  ],
                  [
                    21.802,
                    -9.904
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.808000033509,
                0.851000019148,
                0.917999985639,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                97.591,
                90.078
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 9",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 9,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    1.176,
                    -9.402
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    8.301,
                    -1.61
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    3.494,
                    -14.154
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    -0.121,
                    12.494
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -6.506,
                    1.262
                  ],
                  [
                    -7.006,
                    9.535
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -8.115,
                    -58.169
                  ],
                  [
                    -12.082,
                    -24.167
                  ],
                  [
                    8.604,
                    -28.355
                  ],
                  [
                    40.79,
                    3.468
                  ],
                  [
                    36.568,
                    14.402
                  ],
                  [
                    -0.339,
                    19.893
                  ],
                  [
                    -14.004,
                    58.169
                  ],
                  [
                    -44.868,
                    4.54
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.592000026329,
                0.702000038297,
                0.819999964097,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                62.635,
                157.598
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 10",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 10,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -3.221,
                    -11.127
                  ],
                  [
                    33.267,
                    -4.943
                  ],
                  [
                    7.858,
                    0.419
                  ],
                  [
                    0.338,
                    0.097
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -5.91,
                    -24.428
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    36.473,
                    30.031
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -26.698,
                    20.209
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -15.378,
                    2.254
                  ],
                  [
                    -9.437,
                    -1.127
                  ],
                  [
                    -11.787,
                    -4.315
                  ],
                  [
                    -8.549,
                    -3.671
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -6.715,
                    15.571
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -14.879,
                    2.206
                  ],
                  [
                    -9.372,
                    -0.482
                  ],
                  [
                    -0.017,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    5.893,
                    24.411
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    10.064,
                    -7.632
                  ],
                  [
                    7.889,
                    -1.192
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    6.344,
                    2.319
                  ],
                  [
                    24.428,
                    10.468
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    111.109,
                    -76.069
                  ],
                  [
                    56.907,
                    -15.379
                  ],
                  [
                    22.93,
                    -13.366
                  ],
                  [
                    8.615,
                    -15.362
                  ],
                  [
                    8.598,
                    -15.379
                  ],
                  [
                    5.378,
                    26.054
                  ],
                  [
                    13.429,
                    55.57
                  ],
                  [
                    -67.889,
                    58.517
                  ],
                  [
                    -100.803,
                    7.342
                  ],
                  [
                    -111.109,
                    -8.696
                  ],
                  [
                    -74.942,
                    -59.999
                  ],
                  [
                    -74.925,
                    -60.015
                  ],
                  [
                    -36.955,
                    -75.988
                  ],
                  [
                    -10.998,
                    -76.23
                  ],
                  [
                    8.036,
                    -69.87
                  ],
                  [
                    30.594,
                    -60.901
                  ],
                  [
                    61.737,
                    -47.31
                  ],
                  [
                    94.474,
                    -88.548
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.717999985639,
                0.791999966491,
                0.898000021542,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                111.358,
                150.045
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 11",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 11,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    1.261,
                    0.36
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.068,
                    -1.997
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.783,
                    2.831
                  ]
                ],
                o: [
                  [
                    -2.114,
                    -0.604
                  ],
                  [
                    -1.689,
                    2.173
                  ],
                  [
                    -0.217,
                    5.576
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    4.851,
                    -6.249
                  ],
                  [
                    2.364,
                    -3.533
                  ]
                ],
                v: [
                  [
                    4.788,
                    -12.089
                  ],
                  [
                    -1.62,
                    -8.298
                  ],
                  [
                    -3.722,
                    0.201
                  ],
                  [
                    -6.049,
                    8.744
                  ],
                  [
                    0.216,
                    12.693
                  ],
                  [
                    2.698,
                    -4.392
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.596000043084,
                0.698000021542,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                213.626,
                55.973
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 12",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 12,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    3.905,
                    -2.887
                  ],
                  [
                    -1.018,
                    -2.022
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.426,
                    -1.227
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.8,
                    -0.794
                  ],
                  [
                    1.721,
                    1.588
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.014,
                    1.083
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.331,
                    1.011
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    1.016,
                    2.021
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.426,
                    1.227
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.799,
                    0.794
                  ],
                  [
                    -1.721,
                    -1.589
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.193,
                    -1.179
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.33,
                    -1.01
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -3.763,
                    -7.038
                  ],
                  [
                    -9.702,
                    2.057
                  ],
                  [
                    -4.85,
                    0.901
                  ],
                  [
                    -5.556,
                    6.893
                  ],
                  [
                    0.626,
                    4.005
                  ],
                  [
                    -0.703,
                    9.131
                  ],
                  [
                    8.999,
                    1.552
                  ],
                  [
                    6.339,
                    1.263
                  ],
                  [
                    6.339,
                    -3.213
                  ],
                  [
                    3.051,
                    -2.274
                  ],
                  [
                    3.365,
                    -5.884
                  ],
                  [
                    -0.783,
                    -5.595
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.596000043084,
                0.698000021542,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                228.633,
                51.093
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 13",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 13,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    -4.562,
                    5.099
                  ],
                  [
                    -1.476,
                    -2.684
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -4.831,
                    -8.319
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    4.563,
                    -5.099
                  ],
                  [
                    1.477,
                    2.683
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    4.83,
                    8.32
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -14.17,
                    10.863
                  ],
                  [
                    -7.313,
                    -8.607
                  ],
                  [
                    11.205,
                    -18.566
                  ],
                  [
                    0.201,
                    -7.467
                  ],
                  [
                    10.669,
                    -0.49
                  ],
                  [
                    -0.067,
                    14.273
                  ],
                  [
                    -3.154,
                    21.249
                  ],
                  [
                    -15.498,
                    13.467
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.475,
                0.611999990426,
                0.74900004069,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                223.076,
                51.25
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 14",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 14,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    7.092,
                    -6.736
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    -3.135,
                    10.388
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    41.197,
                    -10.064
                  ],
                  [
                    26.189,
                    15.93
                  ],
                  [
                    28.126,
                    24.154
                  ],
                  [
                    -41.197,
                    23.298
                  ],
                  [
                    -33.48,
                    -24.154
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.475,
                0.611999990426,
                0.74900004069,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                58.963,
                220.107
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 15",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 15,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    -5.627,
                    -13.151
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    5.74,
                    15.225
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    11.272,
                    -20.128
                  ],
                  [
                    33.145,
                    20.129
                  ],
                  [
                    -24.141,
                    20.129
                  ],
                  [
                    -33.145,
                    -10.941
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.365000017952,
                0.486000001197,
                0.626999978458,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                111.23,
                224.132
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 16",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 16,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 5,
    op: 142,
    st: 5,
    bm: 0
  },
  {
    ddd: 0,
    ind: 14,
    ty: 4,
    nm: "Layer 11/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            t: 5,
            s: [
              0
            ]
          },
          {
            i: {
              x: [
                0.833
              ],
              y: [
                0.833
              ]
            },
            o: {
              x: [
                0.167
              ],
              y: [
                0.167
              ]
            },
            t: 8,
            s: [
              0
            ]
          },
          {
            t: 11,
            s: [
              100
            ]
          }
        ],
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          469.5,
          435,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          213.5,
          201,
          0
        ],
        ix: 1
      },
      s: {
        a: 1,
        k: [
          {
            i: {
              x: [
                0.833,
                0.833,
                0.833
              ],
              y: [
                0.833,
                0.833,
                0.833
              ]
            },
            o: {
              x: [
                0.167,
                0.167,
                0.167
              ],
              y: [
                0.167,
                0.167,
                0.167
              ]
            },
            t: 5,
            s: [
              0,
              0,
              100
            ]
          },
          {
            t: 11,
            s: [
              100,
              100,
              100
            ]
          }
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    5.404,
                    2.557
                  ],
                  [
                    -12.587,
                    -6.943
                  ],
                  [
                    0.266,
                    9.028
                  ],
                  [
                    0.795,
                    5.894
                  ],
                  [
                    0.746,
                    -9.498
                  ],
                  [
                    0.937,
                    11.872
                  ],
                  [
                    3.607,
                    3.204
                  ],
                  [
                    9.209,
                    7.722
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    10.938,
                    6.034
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.795,
                    -5.893
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -3.181,
                    2.634
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -22.335,
                    -20.83
                  ],
                  [
                    -6.388,
                    16.957
                  ],
                  [
                    17.568,
                    -4.287
                  ],
                  [
                    21.54,
                    -13.821
                  ],
                  [
                    13.766,
                    -8.262
                  ],
                  [
                    7.762,
                    -20.495
                  ],
                  [
                    -2.459,
                    -21.876
                  ],
                  [
                    -13.457,
                    -22.991
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.596000043084,
                0.698000021542,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                115.635,
                57.475
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    5.555,
                    -0.935
                  ],
                  [
                    2.802,
                    2.335
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.306,
                    -3.462
                  ]
                ],
                o: [
                  [
                    -0.048,
                    -4.751
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.063,
                    1.239
                  ],
                  [
                    1.643,
                    18.244
                  ]
                ],
                v: [
                  [
                    -7.101,
                    15.161
                  ],
                  [
                    -8.1,
                    2.504
                  ],
                  [
                    4.332,
                    -15.161
                  ],
                  [
                    6.457,
                    -8.253
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.475,
                0.611999990426,
                0.74900004069,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                125.332,
                66.787
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -9.066,
                    -10.063
                  ],
                  [
                    10.37,
                    1.803
                  ],
                  [
                    0.048,
                    3.639
                  ],
                  [
                    2.802,
                    2.335
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -5.153,
                    -0.903
                  ],
                  [
                    -0.049,
                    -4.751
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    13.792,
                    -2.094
                  ],
                  [
                    -6.449,
                    20.049
                  ],
                  [
                    -12.793,
                    12.368
                  ],
                  [
                    -13.792,
                    -0.29
                  ],
                  [
                    -1.361,
                    -17.953
                  ],
                  [
                    1.377,
                    -21.852
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.596000043084,
                0.698000021542,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                131.025,
                69.58
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.043,
                    7.879
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -17.722,
                    -4.895
                  ],
                  [
                    -3.87,
                    -0.152
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -2.621,
                    -1.556
                  ],
                  [
                    -5.474,
                    -3.276
                  ],
                  [
                    4.298,
                    -13.283
                  ],
                  [
                    1.535,
                    -6.82
                  ],
                  [
                    4.02,
                    -0.365
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    1.042,
                    -7.878
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    3.869,
                    0.151
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.621,
                    1.557
                  ],
                  [
                    5.474,
                    3.275
                  ],
                  [
                    -4.297,
                    13.284
                  ],
                  [
                    -1.457,
                    6.478
                  ],
                  [
                    -4.02,
                    0.364
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -22.557,
                    11.308
                  ],
                  [
                    -29.992,
                    -8.273
                  ],
                  [
                    -21.656,
                    -14.301
                  ],
                  [
                    -4.273,
                    -28.551
                  ],
                  [
                    -0.793,
                    -34.245
                  ],
                  [
                    9.145,
                    -25.192
                  ],
                  [
                    13.272,
                    -30.231
                  ],
                  [
                    22.175,
                    -18.592
                  ],
                  [
                    26.737,
                    2.207
                  ],
                  [
                    24.129,
                    23.251
                  ],
                  [
                    17.486,
                    34.033
                  ],
                  [
                    -1.924,
                    18.161
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.365000017952,
                0.486000001197,
                0.626999978458,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                117.065,
                34.647
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    29.491,
                    -7.648
                  ],
                  [
                    -7.18,
                    -8.252
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    20.195,
                    -18.267
                  ],
                  [
                    -28.025,
                    0.152
                  ],
                  [
                    -24.939,
                    18.267
                  ],
                  [
                    32.118,
                    18.267
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.713999968884,
                0.773000021542,
                0.866999966491,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                144.05,
                177.13
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 5",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -6.14,
                    1.811
                  ],
                  [
                    -18.417,
                    -1.007
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    6.138,
                    -1.812
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    19.877,
                    8.353
                  ],
                  [
                    -19.877,
                    8.353
                  ],
                  [
                    -13.637,
                    1.107
                  ],
                  [
                    14.844,
                    -7.346
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.596000043084,
                0.698000021542,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                103.697,
                187.044
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 6",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 6,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    -1.543,
                    38.848
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -23.756,
                    37.896
                  ],
                  [
                    13.289,
                    -37.896
                  ],
                  [
                    23.756,
                    -5.154
                  ],
                  [
                    19.73,
                    28.934
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.592000026329,
                0.702000038297,
                0.819999964097,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                148.36,
                141.71
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 7",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 7,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -3.978,
                    -0.515
                  ],
                  [
                    11.176,
                    0.193
                  ],
                  [
                    0.097,
                    6.296
                  ],
                  [
                    -6.264,
                    0.193
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    -2.432,
                    15.459
                  ],
                  [
                    -8.984,
                    -0.161
                  ],
                  [
                    5.153,
                    -2.11
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    19.742,
                    -14.606
                  ],
                  [
                    -9.34,
                    14.944
                  ],
                  [
                    -19.742,
                    -4.396
                  ],
                  [
                    -2.56,
                    -7.778
                  ],
                  [
                    13.204,
                    -15.137
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.808000033509,
                0.851000019148,
                0.917999985639,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                131.612,
                82.623
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 8",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 8,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -0.257,
                    -1.626
                  ],
                  [
                    0.145,
                    0.692
                  ],
                  [
                    6.667,
                    -4.186
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    -0.128,
                    -0.692
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    4.734,
                    18.229
                  ]
                ],
                v: [
                  [
                    5.958,
                    13.575
                  ],
                  [
                    5.54,
                    11.498
                  ],
                  [
                    -5.958,
                    19.903
                  ],
                  [
                    -1.304,
                    -19.903
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.592000026329,
                0.702000038297,
                0.819999964097,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                100.019,
                133.378
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 9",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 9,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    4.38,
                    23.977
                  ],
                  [
                    0.016,
                    0.112
                  ],
                  [
                    0.016,
                    0.08
                  ],
                  [
                    0.129,
                    0.628
                  ],
                  [
                    6.667,
                    -4.187
                  ],
                  [
                    8.196,
                    2.351
                  ],
                  [
                    10.209,
                    23.091
                  ],
                  [
                    -10.193,
                    2.351
                  ],
                  [
                    -17.987,
                    -6.441
                  ],
                  [
                    -7.504,
                    16.909
                  ],
                  [
                    -9.081,
                    3.671
                  ],
                  [
                    -6.264,
                    0.194
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -3.977,
                    -0.514
                  ],
                  [
                    -9.936,
                    -7.569
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.048
                  ],
                  [
                    -0.129,
                    -0.628
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -8.003,
                    5.04
                  ],
                  [
                    -15.04,
                    -4.3
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    4.798,
                    -10.789
                  ],
                  [
                    5.153,
                    -2.11
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    7.391,
                    0.967
                  ],
                  [
                    15.297,
                    11.658
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    -17.044,
                    63.96
                  ],
                  [
                    -13.099,
                    15.668
                  ],
                  [
                    -13.131,
                    15.507
                  ],
                  [
                    -13.164,
                    15.314
                  ],
                  [
                    -13.55,
                    13.43
                  ],
                  [
                    -25.047,
                    21.835
                  ],
                  [
                    -51.922,
                    29.532
                  ],
                  [
                    -99.168,
                    -27.101
                  ],
                  [
                    -83.87,
                    -37.101
                  ],
                  [
                    -45.481,
                    -3.478
                  ],
                  [
                    -28.316,
                    -31.932
                  ],
                  [
                    -7.238,
                    -53.219
                  ],
                  [
                    9.944,
                    -56.601
                  ],
                  [
                    25.708,
                    -63.96
                  ],
                  [
                    32.246,
                    -63.429
                  ],
                  [
                    61.859,
                    -52.188
                  ],
                  [
                    99.168,
                    63.96
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.717999985639,
                0.791999966491,
                0.898000021542,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                119.108,
                131.446
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 10",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 10,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -5.397,
                    -1.514
                  ],
                  [
                    0.798,
                    -3.321
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.107,
                    -1.309
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    4.932,
                    0.907
                  ],
                  [
                    -4.757,
                    0.935
                  ],
                  [
                    -4.328,
                    -2.316
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.797,
                    3.322
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.107,
                    1.307
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -4.931,
                    -0.905
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    2.287,
                    -9.561
                  ],
                  [
                    8.884,
                    2.218
                  ],
                  [
                    4.362,
                    1.685
                  ],
                  [
                    6.678,
                    6.949
                  ],
                  [
                    1.444,
                    4.935
                  ],
                  [
                    1.444,
                    10.168
                  ],
                  [
                    -4.925,
                    -0.973
                  ],
                  [
                    -1.173,
                    -5.43
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.694000004787,
                0.764999988032,
                0.910000011968,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                9.931,
                82.474
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 11",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 11,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    2.624,
                    4.621
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.193,
                    1.417
                  ],
                  [
                    -6.231,
                    -2.914
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.901,
                    0.918
                  ],
                  [
                    -3.72,
                    -7.841
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -4.428,
                    1.112
                  ],
                  [
                    -2.609,
                    -4.638
                  ],
                  [
                    -1.707,
                    -5.121
                  ],
                  [
                    -0.193,
                    -1.401
                  ],
                  [
                    6.248,
                    2.93
                  ],
                  [
                    1.111,
                    -3.012
                  ],
                  [
                    0.902,
                    -0.902
                  ],
                  [
                    3.735,
                    7.859
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ]
                ],
                v: [
                  [
                    15.845,
                    12.132
                  ],
                  [
                    5.894,
                    22.391
                  ],
                  [
                    1.739,
                    16.286
                  ],
                  [
                    0.354,
                    14.242
                  ],
                  [
                    -13.236,
                    2.07
                  ],
                  [
                    -5.378,
                    -9.719
                  ],
                  [
                    -14.138,
                    -19.477
                  ],
                  [
                    -6.393,
                    -19.477
                  ],
                  [
                    5.282,
                    -6.191
                  ],
                  [
                    2.367,
                    -18.268
                  ],
                  [
                    11.82,
                    -10.219
                  ],
                  [
                    13.333,
                    6.9
                  ],
                  [
                    13.382,
                    6.98
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.596000043084,
                0.698000021542,
                0.847000002394,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                17.965,
                83.533
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 12",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 12,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 5,
    op: 142,
    st: 21,
    bm: 0
  },
  {
    ddd: 0,
    ind: 15,
    ty: 4,
    nm: "Layer 8/3327591 Outlines",
    sr: 1,
    ks: {
      o: {
        a: 0,
        k: 100,
        ix: 11
      },
      r: {
        a: 0,
        k: 0,
        ix: 10
      },
      p: {
        a: 0,
        k: [
          499,
          276.5,
          0
        ],
        ix: 2
      },
      a: {
        a: 0,
        k: [
          247,
          155,
          0
        ],
        ix: 1
      },
      s: {
        a: 0,
        k: [
          100,
          100,
          100
        ],
        ix: 6
      }
    },
    ao: 0,
    shapes: [
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    0.965,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.965
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.965,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.965
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -0.965,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    -0.965
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0.965,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0.965
                  ]
                ],
                v: [
                  [
                    244.76,
                    5.233
                  ],
                  [
                    -244.759,
                    5.233
                  ],
                  [
                    -246.507,
                    3.487
                  ],
                  [
                    -246.507,
                    -3.487
                  ],
                  [
                    -244.759,
                    -5.233
                  ],
                  [
                    244.76,
                    -5.233
                  ],
                  [
                    246.507,
                    -3.487
                  ],
                  [
                    246.507,
                    3.487
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.757000014361,
                0.783999992819,
                0.827000038297,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                246.757,
                304.383
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 1",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 1,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -14.814,
                    -34.621
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    26.698,
                    10.451
                  ],
                  [
                    9.516,
                    0.756
                  ],
                  [
                    0.128,
                    1.094
                  ],
                  [
                    -10.257,
                    -4.009
                  ]
                ],
                o: [
                  [
                    0,
                    0
                  ],
                  [
                    -14.445,
                    -33.075
                  ],
                  [
                    -9.694,
                    -3.8
                  ],
                  [
                    -0.178,
                    -1.08
                  ],
                  [
                    10.031,
                    0.724
                  ],
                  [
                    27.874,
                    10.918
                  ]
                ],
                v: [
                  [
                    47.495,
                    37.68
                  ],
                  [
                    43.984,
                    37.68
                  ],
                  [
                    -17.979,
                    -27.89
                  ],
                  [
                    -47.028,
                    -34.427
                  ],
                  [
                    -47.495,
                    -37.68
                  ],
                  [
                    -16.804,
                    -30.885
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                63.466,
                261.419
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 2",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 2,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -1.127,
                    0.29
                  ],
                  [
                    3.719,
                    -4.847
                  ],
                  [
                    8.744,
                    -1.079
                  ],
                  [
                    1.015,
                    0
                  ],
                  [
                    4.412,
                    3.704
                  ],
                  [
                    3.092,
                    8.229
                  ],
                  [
                    -1.176,
                    -0.048
                  ],
                  [
                    -5.04,
                    -4.235
                  ],
                  [
                    -5.717,
                    0.708
                  ],
                  [
                    -4.413,
                    5.749
                  ],
                  [
                    -1.176,
                    4.782
                  ],
                  [
                    0,
                    0
                  ]
                ],
                o: [
                  [
                    -1.24,
                    5.652
                  ],
                  [
                    -4.944,
                    6.473
                  ],
                  [
                    -1.047,
                    0.129
                  ],
                  [
                    -5.426,
                    0
                  ],
                  [
                    -5.829,
                    -4.895
                  ],
                  [
                    1.192,
                    0.064
                  ],
                  [
                    2.866,
                    7.278
                  ],
                  [
                    4.509,
                    3.784
                  ],
                  [
                    7.858,
                    -0.966
                  ],
                  [
                    3.059,
                    -3.993
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.223,
                    -0.226
                  ]
                ],
                v: [
                  [
                    29.42,
                    -13.921
                  ],
                  [
                    22.286,
                    2.344
                  ],
                  [
                    1.658,
                    13.728
                  ],
                  [
                    -1.434,
                    13.921
                  ],
                  [
                    -16.248,
                    8.366
                  ],
                  [
                    -29.42,
                    -12.358
                  ],
                  [
                    -25.877,
                    -12.197
                  ],
                  [
                    -14.171,
                    5.902
                  ],
                  [
                    1.256,
                    10.54
                  ],
                  [
                    19.726,
                    0.411
                  ],
                  [
                    25.894,
                    -13.147
                  ],
                  [
                    25.91,
                    -13.147
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                206.578,
                130.818
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 3",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 3,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    36.843,
                    -6.039
                  ],
                  [
                    3.494,
                    0
                  ],
                  [
                    14.347,
                    44.04
                  ],
                  [
                    -1.127,
                    0
                  ],
                  [
                    -26.199,
                    4.3
                  ],
                  [
                    6.586,
                    56.117
                  ],
                  [
                    -1.513,
                    17.375
                  ],
                  [
                    -1.208,
                    0.661
                  ],
                  [
                    -2.931,
                    -24.911
                  ]
                ],
                o: [
                  [
                    -3.317,
                    0.547
                  ],
                  [
                    -25.748,
                    0
                  ],
                  [
                    1.127,
                    -0.016
                  ],
                  [
                    15.813,
                    47.276
                  ],
                  [
                    35.394,
                    -5.797
                  ],
                  [
                    -2.834,
                    -24.074
                  ],
                  [
                    1.143,
                    -0.725
                  ],
                  [
                    -1.755,
                    17.697
                  ],
                  [
                    6.811,
                    58.099
                  ]
                ],
                v: [
                  [
                    3.744,
                    82.236
                  ],
                  [
                    -6.498,
                    83.074
                  ],
                  [
                    -76.076,
                    23.43
                  ],
                  [
                    -72.696,
                    23.398
                  ],
                  [
                    3.213,
                    79.064
                  ],
                  [
                    66.061,
                    -19.291
                  ],
                  [
                    64.611,
                    -81.286
                  ],
                  [
                    68.155,
                    -83.364
                  ],
                  [
                    69.266,
                    -19.662
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                210.805,
                94.112
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 4",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 4,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -0.854,
                    -29.033
                  ],
                  [
                    14.96,
                    -23.575
                  ],
                  [
                    42.946,
                    -8.775
                  ],
                  [
                    7.762,
                    0
                  ],
                  [
                    19.951,
                    15.394
                  ],
                  [
                    10.193,
                    31.593
                  ],
                  [
                    -1.014,
                    0.387
                  ],
                  [
                    -22.753,
                    -17.567
                  ],
                  [
                    -31.947,
                    6.522
                  ],
                  [
                    2.995,
                    101.06
                  ],
                  [
                    -10.74,
                    16.248
                  ],
                  [
                    -1.305,
                    -0.033
                  ]
                ],
                o: [
                  [
                    1.562,
                    52.462
                  ],
                  [
                    -15.668,
                    24.701
                  ],
                  [
                    -8.003,
                    1.642
                  ],
                  [
                    -24.17,
                    0
                  ],
                  [
                    -23.204,
                    -17.923
                  ],
                  [
                    0.998,
                    -0.419
                  ],
                  [
                    9.984,
                    31.063
                  ],
                  [
                    25.571,
                    19.758
                  ],
                  [
                    79.868,
                    -16.343
                  ],
                  [
                    -0.853,
                    -28.695
                  ],
                  [
                    1.272,
                    0
                  ],
                  [
                    -11.176,
                    15.78
                  ]
                ],
                v: [
                  [
                    115.15,
                    -47.117
                  ],
                  [
                    95.778,
                    62.816
                  ],
                  [
                    11.03,
                    111.221
                  ],
                  [
                    -12.641,
                    113.684
                  ],
                  [
                    -79.531,
                    90.417
                  ],
                  [
                    -130.689,
                    13.913
                  ],
                  [
                    -127.694,
                    12.705
                  ],
                  [
                    -77.55,
                    87.872
                  ],
                  [
                    10.386,
                    108.081
                  ],
                  [
                    111.929,
                    -47.019
                  ],
                  [
                    126.824,
                    -114.602
                  ],
                  [
                    130.689,
                    -114.537
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                199.059,
                114.901
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 5",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 5,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -17.793,
                    -8.615
                  ],
                  [
                    0.193,
                    -1.078
                  ],
                  [
                    10.951,
                    41.287
                  ],
                  [
                    -19.323,
                    32.044
                  ],
                  [
                    -0.724,
                    -0.902
                  ],
                  [
                    -10.241,
                    -38.646
                  ]
                ],
                o: [
                  [
                    -0.161,
                    1.111
                  ],
                  [
                    -18.615,
                    -8.743
                  ],
                  [
                    -10.579,
                    -39.982
                  ],
                  [
                    0.757,
                    0.869
                  ],
                  [
                    -18.373,
                    31.046
                  ],
                  [
                    10.467,
                    39.5
                  ]
                ],
                v: [
                  [
                    32.069,
                    84.981
                  ],
                  [
                    31.538,
                    88.283
                  ],
                  [
                    -21.49,
                    19.234
                  ],
                  [
                    -8.527,
                    -88.283
                  ],
                  [
                    -6.321,
                    -85.625
                  ],
                  [
                    -18.366,
                    18.414
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                457.835,
                145.085
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 6",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 6,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -5.797,
                    -2.061
                  ],
                  [
                    0.29,
                    -1.032
                  ],
                  [
                    6.392,
                    3.463
                  ],
                  [
                    11.369,
                    79.031
                  ],
                  [
                    -17.246,
                    29.967
                  ],
                  [
                    -0.966,
                    -0.579
                  ],
                  [
                    -5.266,
                    -36.634
                  ],
                  [
                    -28.759,
                    -15.652
                  ]
                ],
                o: [
                  [
                    -0.29,
                    1.063
                  ],
                  [
                    -5.942,
                    -2.126
                  ],
                  [
                    -29.468,
                    -16.006
                  ],
                  [
                    -4.895,
                    -34.074
                  ],
                  [
                    0.998,
                    0.547
                  ],
                  [
                    -15.137,
                    26.28
                  ],
                  [
                    11.175,
                    77.631
                  ],
                  [
                    6.183,
                    3.365
                  ]
                ],
                v: [
                  [
                    51.352,
                    114.601
                  ],
                  [
                    50.481,
                    117.742
                  ],
                  [
                    31.899,
                    109.432
                  ],
                  [
                    -46.457,
                    -21.255
                  ],
                  [
                    -27.858,
                    -117.742
                  ],
                  [
                    -24.895,
                    -116.053
                  ],
                  [
                    -43.268,
                    -21.723
                  ],
                  [
                    33.284,
                    106.518
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                1,
                1,
                1,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                433.738,
                138.878
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 7",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 7,
        mn: "ADBE Vector Group",
        hd: false
      },
      {
        ty: "gr",
        it: [
          {
            ind: 0,
            ty: "sh",
            ix: 1,
            ks: {
              a: 0,
              k: {
                i: [
                  [
                    -0.29,
                    -39.355
                  ],
                  [
                    2.27,
                    -14.783
                  ],
                  [
                    0.193,
                    -1.078
                  ],
                  [
                    1.643,
                    -6.2
                  ],
                  [
                    0.29,
                    -1.031
                  ],
                  [
                    9.565,
                    -5.507
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    6.876,
                    42.414
                  ],
                  [
                    0.128,
                    1.095
                  ],
                  [
                    -18.502,
                    25.008
                  ],
                  [
                    -12.738,
                    5.458
                  ],
                  [
                    -1.015,
                    0.386
                  ],
                  [
                    -22.286,
                    0.354
                  ],
                  [
                    -1.127,
                    0
                  ],
                  [
                    -12.544,
                    -0.5
                  ],
                  [
                    -1.175,
                    -0.048
                  ],
                  [
                    -13.252,
                    2.431
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -1.127,
                    0.289
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    5.202,
                    17.907
                  ],
                  [
                    -22.462,
                    14.058
                  ],
                  [
                    -1.208,
                    0.66
                  ],
                  [
                    -18.163,
                    -0.049
                  ],
                  [
                    -1.305,
                    -0.032
                  ],
                  [
                    -17.503,
                    -5.813
                  ],
                  [
                    -8.132,
                    -4.46
                  ],
                  [
                    -0.966,
                    -0.58
                  ],
                  [
                    -11.11,
                    -13.139
                  ],
                  [
                    -0.725,
                    -0.902
                  ]
                ],
                o: [
                  [
                    0.129,
                    18.229
                  ],
                  [
                    -0.161,
                    1.111
                  ],
                  [
                    -1.192,
                    7.199
                  ],
                  [
                    -0.29,
                    1.063
                  ],
                  [
                    -6.311,
                    22.061
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    -0.177,
                    -1.079
                  ],
                  [
                    -2.674,
                    -21.11
                  ],
                  [
                    8.438,
                    -11.384
                  ],
                  [
                    0.998,
                    -0.419
                  ],
                  [
                    18.888,
                    -7.391
                  ],
                  [
                    1.127,
                    -0.016
                  ],
                  [
                    13.268,
                    -0.096
                  ],
                  [
                    1.191,
                    0.064
                  ],
                  [
                    20.257,
                    0.854
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    1.224,
                    -0.226
                  ],
                  [
                    0,
                    0
                  ],
                  [
                    14.669,
                    -3.591
                  ],
                  [
                    -10.08,
                    -34.733
                  ],
                  [
                    1.144,
                    -0.724
                  ],
                  [
                    12.706,
                    -6.892
                  ],
                  [
                    1.273,
                    0
                  ],
                  [
                    15.442,
                    0.467
                  ],
                  [
                    9.42,
                    3.124
                  ],
                  [
                    0.998,
                    0.548
                  ],
                  [
                    15.942,
                    9.211
                  ],
                  [
                    0.757,
                    0.87
                  ],
                  [
                    28.872,
                    35.586
                  ]
                ],
                v: [
                  [
                    239.921,
                    30.667
                  ],
                  [
                    236.556,
                    80.393
                  ],
                  [
                    236.025,
                    83.693
                  ],
                  [
                    231.741,
                    103.805
                  ],
                  [
                    230.871,
                    106.945
                  ],
                  [
                    206.025,
                    149.424
                  ],
                  [
                    -195.784,
                    149.424
                  ],
                  [
                    -236.91,
                    77.316
                  ],
                  [
                    -237.376,
                    74.064
                  ],
                  [
                    -217.248,
                    3.904
                  ],
                  [
                    -184.978,
                    -20.861
                  ],
                  [
                    -181.983,
                    -22.068
                  ],
                  [
                    -118.62,
                    -32.132
                  ],
                  [
                    -115.238,
                    -32.165
                  ],
                  [
                    -76.189,
                    -31.214
                  ],
                  [
                    -72.647,
                    -31.055
                  ],
                  [
                    -20.877,
                    -32.003
                  ],
                  [
                    -20.861,
                    -32.003
                  ],
                  [
                    -17.35,
                    -32.776
                  ],
                  [
                    -17.334,
                    -32.776
                  ],
                  [
                    -0.636,
                    -62.6
                  ],
                  [
                    22.068,
                    -136.849
                  ],
                  [
                    25.611,
                    -138.926
                  ],
                  [
                    72.534,
                    -149.375
                  ],
                  [
                    76.4,
                    -149.311
                  ],
                  [
                    126.204,
                    -139.988
                  ],
                  [
                    152.532,
                    -128.539
                  ],
                  [
                    155.495,
                    -126.849
                  ],
                  [
                    195.961,
                    -92.872
                  ],
                  [
                    198.167,
                    -90.215
                  ]
                ],
                c: true
              },
              ix: 2
            },
            nm: "Path 1",
            mn: "ADBE Vector Shape - Group",
            hd: false
          },
          {
            ty: "mm",
            mm: 4,
            nm: "Merge Paths 1",
            mn: "ADBE Vector Filter - Merge",
            hd: false
          },
          {
            ty: "fl",
            c: {
              a: 0,
              k: [
                0.894000004787,
                0.922000002394,
                0.969000004787,
                1
              ],
              ix: 4
            },
            o: {
              a: 0,
              k: 100,
              ix: 5
            },
            r: 1,
            bm: 0,
            nm: "Fill 1",
            mn: "ADBE Vector Graphic - Fill",
            hd: false
          },
          {
            ty: "tr",
            p: {
              a: 0,
              k: [
                253.348,
                149.674
              ],
              ix: 2
            },
            a: {
              a: 0,
              k: [
                0,
                0
              ],
              ix: 1
            },
            s: {
              a: 0,
              k: [
                100,
                100
              ],
              ix: 3
            },
            r: {
              a: 0,
              k: 0,
              ix: 6
            },
            o: {
              a: 0,
              k: 100,
              ix: 7
            },
            sk: {
              a: 0,
              k: 0,
              ix: 4
            },
            sa: {
              a: 0,
              k: 0,
              ix: 5
            },
            nm: "Transform"
          }
        ],
        nm: "Group 8",
        np: 3,
        cix: 2,
        bm: 0,
        ix: 8,
        mn: "ADBE Vector Group",
        hd: false
      }
    ],
    ip: 0,
    op: 142,
    st: 0,
    bm: 0
  }
];
const markers = [];
const animationData = {
  v,
  fr,
  ip,
  op,
  w,
  h,
  nm,
  ddd,
  assets,
  layers,
  markers
};
lazy(
  () => import("./displacement-sphere-BJTin_Ju.js").then((module) => ({ default: module.DisplacementSphere }))
);
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  const { theme } = useTheme();
  const { disciplines: disciplines2 } = config;
  const [disciplineIndex, setDisciplineIndex] = useState(0);
  const prevTheme = usePrevious(theme);
  const introLabel = [disciplines2.slice(0, -1).join(", "), disciplines2.slice(-1)[0]].join(
    ", and "
  );
  const currentDiscipline = disciplines2.find((item2, index2) => index2 === disciplineIndex);
  const titleId = `${id}-title`;
  const scrollToHash = useScrollToHash();
  const isHydrated = useHydrated();
  useInterval(
    () => {
      const index2 = (disciplineIndex + 1) % disciplines2.length;
      setDisciplineIndex(index2);
    },
    5e3,
    theme
  );
  useEffect(() => {
    if (prevTheme && prevTheme !== theme) {
      setDisciplineIndex(0);
    }
  }, [theme, prevTheme]);
  const handleScrollClick = (event) => {
    event.preventDefault();
    scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$7.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx(Transition, { in: true, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        isHydrated && /* @__PURE__ */ jsx("div", { className: styles$7.lottieWrapper, children: /* @__PURE__ */ jsx(
          Lottie,
          {
            animationData,
            loop: true,
            autoplay: true,
            className: styles$7.lottie
          }
        ) }),
        /* @__PURE__ */ jsxs("header", { className: styles$7.text, children: [
          /* @__PURE__ */ jsx("h1", { className: styles$7.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: config.name, delay: 500 }) }),
          /* @__PURE__ */ jsxs(Heading, { level: 0, as: "h2", className: styles$7.title, children: [
            /* @__PURE__ */ jsx(VisuallyHidden, { className: styles$7.label, children: `${config.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs("span", { "aria-hidden": true, className: styles$7.row, children: [
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: styles$7.word,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: config.role
                }
              ),
              /* @__PURE__ */ jsx("span", { className: styles$7.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx("div", { className: styles$7.row, children: disciplines2.map((item2) => /* @__PURE__ */ jsx(
              Transition,
              {
                unmount: true,
                in: item2 === currentDiscipline,
                timeout: { enter: 3e3, exit: 2e3 },
                children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx(
                  "span",
                  {
                    "aria-hidden": true,
                    ref: nodeRef,
                    className: styles$7.word,
                    "data-plus": true,
                    "data-status": status2,
                    style: cssProps({ delay: tokens.base.durationL }),
                    children: item2
                  }
                )
              },
              item2
            )) })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Link$1,
          {
            to: "/#project-1",
            className: styles$7.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs(
          Link$1,
          {
            to: "/#project-1",
            className: styles$7.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx(
                "svg",
                {
                  "aria-hidden": true,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}
const profileImgLarge = "/assets/profile-B7xzGn_z.jpg";
const profileImgPlaceholder = "/assets/profile-placeholder-DOgU6wR2.jpg";
const profileImg = "/assets/profile-B7xzGn_z.jpg";
const divider = "_divider_uwer4_3";
const line = "_line_uwer4_15";
const notch = "_notch_uwer4_59";
const styles$6 = {
  divider,
  line,
  notch
};
const Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: classes(styles$6.divider, className),
    style: cssProps(
      {
        lineWidth,
        lineHeight,
        notchWidth,
        notchHeight,
        collapseDelay: numToMs(collapseDelay)
      },
      style
    ),
    ...rest,
    children: [
      /* @__PURE__ */ jsx("div", { className: styles$6.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: styles$6.notch,
          "data-collapsed": collapsed,
          style: cssProps({ collapseDelay: numToMs(collapseDelay + 160) })
        }
      )
    ]
  }
);
Divider.defaultProps = {
  lineWidth: "100%",
  lineHeight: "2px",
  notchWidth: "90px",
  notchHeight: "10px",
  collapsed: false,
  collapseDelay: 0
};
const katakana = "/assets/katakana-CPFTGsJ1.svg";
const profile = "_profile_1pmvm_1";
const content$1 = "_content_1pmvm_73";
const column = "_column_1pmvm_99";
const title$1 = "_title_1pmvm_117";
const description$1 = "_description_1pmvm_139";
const tag = "_tag_1pmvm_159";
const tagText = "_tagText_1pmvm_185";
const image = "_image_1pmvm_227";
const svg$1 = "_svg_1pmvm_237";
const button$1 = "_button_1pmvm_269";
const styles$5 = {
  profile,
  content: content$1,
  column,
  title: title$1,
  description: description$1,
  tag,
  tagText,
  image,
  svg: svg$1,
  button: button$1
};
const ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx(Heading, { className: styles$5.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsx(Text, { className: styles$5.description, "data-visible": visible, size: "l", as: "p", children: "I'm Wisdom, a Fullstack developer with a passion for building thoughtful, scalable digital experiences. My curiosity spans beyond the stack. I'm constantly diving into new fields like AI, automation, and design systems to push what I create even further." }),
  /* @__PURE__ */ jsx(Text, { className: styles$5.description, "data-visible": visible, size: "l", as: "p", children: "When I’m not coding, I’m probably exploring emerging tech, fine-tuning a side project, or learning something entirely new. Always open to exciting ideas, feel free to reach out." })
] });
const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$5.profile,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs("div", { className: styles$5.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs("div", { className: styles$5.column, children: [
          /* @__PURE__ */ jsx(ProfileText, { visible: visible2, titleId }),
          /* @__PURE__ */ jsx(
            Button,
            {
              secondary: true,
              className: styles$5.button,
              "data-visible": visible2,
              href: "/contact",
              icon: "send",
              children: "Send me a message"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: styles$5.column, children: [
          /* @__PURE__ */ jsxs("div", { className: styles$5.tag, "aria-hidden": true, children: [
            /* @__PURE__ */ jsx(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx("div", { className: styles$5.tagText, "data-visible": visible2, children: "About me" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: styles$5.image, children: [
            /* @__PURE__ */ jsx(
              Image$1,
              {
                reveal: true,
                delay: 100,
                placeholder: profileImgPlaceholder,
                srcSet: `${profileImg} 480w, ${profileImgLarge} 960w`,
                sizes: "(max-width: 600px) 480px, 560px",
                alt: "Your alt text here"
              }
            ),
            /* @__PURE__ */ jsx("svg", { className: styles$5.svg, "data-visible": visible2, viewBox: "0 0 136 766", children: /* @__PURE__ */ jsx("use", { href: `${katakana}#katakana-profile` }) })
          ] })
        ] })
      ] }) })
    }
  );
};
const iphone11 = "/assets/iphone-11-DGIHa_Ph.glb";
const macbookPro = "/assets/macbook-pro-DZn-FKKF.glb";
const ModelAnimationType = {
  SpringUp: "spring-up",
  LaptopOpen: "laptop-open"
};
const deviceModels = {
  phone: {
    url: iphone11,
    width: 374,
    height: 512,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.SpringUp
  },
  laptop: {
    url: macbookPro,
    width: 1280,
    height: 800,
    position: { x: 0, y: 0, z: 0 },
    animation: ModelAnimationType.LaptopOpen
  }
};
const summary = "_summary_4rpvx_1";
const content = "_content_4rpvx_69";
const details = "_details_4rpvx_129";
const preview = "_preview_4rpvx_155";
const model = "_model_4rpvx_175";
const loader$1 = "_loader_4rpvx_283";
const svg = "_svg_4rpvx_301";
const index = "_index_4rpvx_383";
const indexNumber = "_indexNumber_4rpvx_401";
const title = "_title_4rpvx_443";
const description = "_description_4rpvx_481";
const button = "_button_4rpvx_519";
const styles$4 = {
  summary,
  content,
  details,
  preview,
  model,
  loader: loader$1,
  svg,
  index,
  indexNumber,
  title,
  description,
  button
};
const Model = lazy(
  () => import("./index-Bypr_kGm.js").then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index: index2,
  title: title2,
  description: description2,
  model: model2,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  const [focused, setFocused] = useState(false);
  const [modelLoaded, setModelLoaded] = useState(false);
  const { theme } = useTheme();
  const { width } = useWindowSize();
  const isHydrated = useHydrated();
  const titleId = `${id}-title`;
  const isMobile = width <= media.tablet;
  const svgOpacity = theme === "light" ? 0.7 : 1;
  const indexText = index2 < 10 ? `0${index2}` : index2;
  const phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`;
  const laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(true);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ jsx(
      "svg",
      {
        type: "project",
        "data-visible": visible && modelLoaded,
        "data-light": theme === "light",
        style: cssProps({ opacity: svgOpacity }),
        className: styles$4.svg,
        "data-device": device,
        viewBox: "0 0 751 136",
        children: /* @__PURE__ */ jsx("use", { href: `${katakana}#katakana-project` })
      }
    );
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$4.details, children: [
      /* @__PURE__ */ jsxs("div", { "aria-hidden": true, className: styles$4.index, children: [
        /* @__PURE__ */ jsx(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx("span", { className: styles$4.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx(
        Heading,
        {
          level: 3,
          as: "h2",
          className: styles$4.title,
          "data-visible": visible,
          id: titleId,
          children: title2
        }
      ),
      /* @__PURE__ */ jsx(Text, { className: styles$4.description, "data-visible": visible, as: "p", children: description2 }),
      /* @__PURE__ */ jsx("div", { className: styles$4.button, "data-visible": visible, children: /* @__PURE__ */ jsx(Button, { iconHoverShift: true, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs("div", { className: styles$4.preview, children: [
      model2.type === "laptop" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("laptop", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$4.model, "data-device": "laptop", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$4.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 8 },
              showDelay: 700,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model2.textures[0],
                    sizes: laptopSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] }),
      model2.type === "phone" && /* @__PURE__ */ jsxs(Fragment$1, { children: [
        renderKatakana("phone", visible),
        /* @__PURE__ */ jsxs("div", { className: styles$4.model, "data-device": "phone", children: [
          !modelLoaded && /* @__PURE__ */ jsx(Loader, { center: true, className: styles$4.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx(Suspense, { children: /* @__PURE__ */ jsx(
            Model,
            {
              alt: model2.alt,
              cameraPosition: { x: 0, y: 0, z: 11.5 },
              showDelay: 300,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model2.textures[0],
                    sizes: phoneSizes
                  }
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model2.textures[1],
                    sizes: phoneSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] })
    ] });
  }
  return /* @__PURE__ */ jsx(
    Section,
    {
      className: styles$4.summary,
      "data-alternate": alternate,
      "data-first": index2 === 1,
      onFocus: () => setFocused(true),
      onBlur: () => setFocused(false),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx("div", { className: styles$4.content, children: /* @__PURE__ */ jsx(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs(Fragment$1, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}
const home = "_home_pb8qs_1";
const styles$3 = {
  home
};
const links = () => {
  return [
    {
      rel: "prefetch",
      href: "/draco/draco_wasm_wrapper.js",
      as: "script",
      type: "text/javascript",
      importance: "low"
    },
    {
      rel: "prefetch",
      href: "/draco/draco_decoder.wasm",
      as: "fetch",
      type: "application/wasm",
      importance: "low"
    }
  ];
};
const meta$2 = () => {
  return baseMeta({
    title: "Designer + Developer",
    description: `Design portfolio of ${config.name} — a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`
  });
};
const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro2 = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const details2 = useRef();
  useEffect(() => {
    const sections = [intro2, projectOne, projectTwo, projectThree, details2];
    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            const section2 = entry2.target;
            observer.unobserve(section2);
            if (visibleSections.includes(section2))
              return;
            setVisibleSections((prevSections) => [...prevSections, section2]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    sections.forEach((section2) => {
      sectionObserver.observe(section2.current);
    });
    indicatorObserver.observe(intro2.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  return /* @__PURE__ */ jsxs("div", { className: styles$3.home, children: [
    /* @__PURE__ */ jsx(
      Intro,
      {
        id: "intro",
        sectionRef: intro2,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-1",
        sectionRef: projectOne,
        visible: visibleSections.includes(projectOne.current),
        index: 1,
        title: "Redefining how people shop for tech",
        description: "Building a seamless e-commerce platform for discovering and buying the latest phones, laptops, and accessories",
        buttonText: "View project",
        buttonLink: "/projects/adware",
        model: {
          type: "laptop",
          alt: "Adware e-commerce homepage shown on a laptop screen",
          textures: [
            {
              srcSet: `${sprTexture} 1280w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-2",
        alternate: true,
        sectionRef: projectTwo,
        visible: visibleSections.includes(projectTwo.current),
        index: 2,
        title: "Writing and sharing made effortless",
        description: "Building a clean and powerful blogging platform that makes publishing and reading content seamless",
        buttonText: "View project",
        buttonLink: "/projects/beeve",
        model: {
          type: "phone",
          alt: "App login screen",
          textures: [
            {
              srcSet: `${gamestackTexture} 375w, ${gamestackTextureLarge} 750w`,
              placeholder: gamestackTexturePlaceholder
            },
            {
              srcSet: `${gamestackTexture2} 375w, ${gamestackTexture2Large} 750w`,
              placeholder: gamestackTexture2Placeholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      ProjectSummary,
      {
        id: "project-3",
        sectionRef: projectThree,
        visible: visibleSections.includes(projectThree.current),
        index: 3,
        title: "Buzzed Book",
        description: "A personalized book vault that tracks your reading progress, allows ratings and reviews, and organizes your digital shelf just the way you like it.",
        buttonText: "View project",
        buttonLink: "/projects/buzzed-book",
        model: {
          type: "laptop",
          alt: "Browsing, organizing, and tracking books in the Buzzed Book app",
          textures: [
            {
              srcSet: `${sliceTexture} 800w, ${sliceTextureLarge} 1920w`,
              placeholder: sliceTexturePlaceholder
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx(
      Profile,
      {
        sectionRef: details2,
        visible: visibleSections.includes(details2.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route11 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home,
  links,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
const usesBackgroundPlaceholder = "/assets/uses-background-placeholder-ppC4yTdE.jpg";
const usesBackground = "/assets/uses-background-DVBwh5G1.mp4";
const list = "_list_eti0y_3";
const item = "_item_eti0y_29";
const styles$2 = {
  list,
  item
};
const List = ({ ordered, children, className, ...rest }) => {
  const Element = ordered ? "ol" : "ul";
  return /* @__PURE__ */ jsx(Element, { className: classes(styles$2.list, className), ...rest, children });
};
const ListItem = ({ children, ...rest }) => {
  return /* @__PURE__ */ jsx("li", { className: styles$2.item, ...rest, children });
};
const table = "_table_1pu3l_3";
const row = "_row_1pu3l_13";
const head = "_head_1pu3l_31";
const headCell = "_headCell_1pu3l_41";
const cell = "_cell_1pu3l_51";
const styles$1 = {
  table,
  row,
  head,
  headCell,
  cell
};
const Table = ({ children }) => /* @__PURE__ */ jsx("table", { className: styles$1.table, children });
const TableRow = ({ children }) => /* @__PURE__ */ jsx("tr", { className: styles$1.row, children });
const TableBody = ({ children }) => /* @__PURE__ */ jsx("tbody", { className: styles$1.body, children });
const TableHeadCell = ({ children }) => /* @__PURE__ */ jsx("th", { className: styles$1.headCell, children });
const TableCell = ({ children }) => /* @__PURE__ */ jsx("td", { className: styles$1.cell, children });
const uses = "_uses_1mnj9_1";
const section = "_section_1mnj9_9";
const styles = {
  uses,
  section
};
const meta$1 = () => {
  return baseMeta({
    title: "Uses",
    description: "A list of hardware and software I use to do my thing"
  });
};
const Uses = () => {
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs(ProjectContainer, { className: styles.uses, children: [
      /* @__PURE__ */ jsx(
        ProjectBackground,
        {
          src: usesBackground,
          placeholder: usesBackgroundPlaceholder,
          opacity: 0.7
        }
      ),
      /* @__PURE__ */ jsx(
        ProjectHeader,
        {
          title: "Uses",
          description: "A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
        }
      ),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Design" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://www.figma.com", children: "Figma" }),
            " is my primary tool for UI design these days. Made the switch from Sketch in 2020 and haven’t looked back. I’ve also created",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.figma.com/@hamish", children: "a few plugins" }),
            " that you can install."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "Any motion graphics I create are created in Adobe After Effects. So far I haven’t found a non-Adobe product that’s as good. If anyone has suggestions please ",
            /* @__PURE__ */ jsx(Link, { href: "/contact", children: "message me" }),
            "."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For any 3D models and video editing I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.blender.org/", children: "Blender" }),
            ". Since 2.8 it’s become way simpler to use and in a lot of ways better than expensive paid tools like 3DS Max or Maya."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "Development" }),
        /* @__PURE__ */ jsx(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs(List, { children: [
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "I use ",
            /* @__PURE__ */ jsx(Link, { href: "https://vscodium.com/", children: "VSCodium" }),
            " as my text editor, with the Tokyo Night theme and Operator Mono as my typeface of choice."
          ] }),
          /* @__PURE__ */ jsx(ListItem, { children: "Firefox is my main browser for both development and general use." }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            /* @__PURE__ */ jsx(Link, { href: "https://reactjs.org/", children: "React" }),
            " is my front end Javascript library of choice. The component-centric mental model is the first thing that truly made sense to me as a designer."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For 3D effects and image shaders I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://threejs.org/", children: "three.js" }),
            ". It has a bit of a learning curve but you can do some really powerful stuff with it."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For CSS I’ve used a myriad pre-processors and css-in-js solutions like styled-components, but these days I’m using vanilla CSS with",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://postcss.org/", children: "PostCSS" }),
            " to get upcoming CSS features today."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For Javascript animations I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://www.framer.com/motion/", children: "Framer Motion" }),
            ", it’s a great way to add spring animations to React and three.js."
          ] }),
          /* @__PURE__ */ jsxs(ListItem, { children: [
            "For building and testing UI components in isolation I use",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://storybook.js.org/", children: "Storybook" }),
            ". Check out the",
            " ",
            /* @__PURE__ */ jsx(Link, { href: "https://storybook.hamishw.com", children: "storybook for this website" }),
            "."
          ] })
        ] }) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ProjectSection, { padding: "none", className: styles.section, children: /* @__PURE__ */ jsx(ProjectSectionContent, { children: /* @__PURE__ */ jsxs(ProjectTextRow, { stretch: true, width: "m", children: [
        /* @__PURE__ */ jsx(ProjectSectionHeading, { children: "System" }),
        /* @__PURE__ */ jsx(Table, { children: /* @__PURE__ */ jsxs(TableBody, { children: [
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Desktop" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Custom built" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Operating system" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Arch Linux (by the way)" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Browser" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Zen Browser" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Monitor" }),
            /* @__PURE__ */ jsx(TableCell, { children: "1440p IPS 144hz LG 27GL850" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Keyboard" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Tofu65" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Mouse" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Logitech G403" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Laptop" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Macbook Pro 14″" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Headphones" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Audio Technica ATH-M50x/Apple Airpods" })
          ] }),
          /* @__PURE__ */ jsxs(TableRow, { children: [
            /* @__PURE__ */ jsx(TableHeadCell, { children: "Microphone" }),
            /* @__PURE__ */ jsx(TableCell, { children: "Blue Yeti" })
          ] })
        ] }) })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
};
const route9 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Uses,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
async function loader() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
const meta = () => {
  return [{ title: "404 | Redacted" }];
};
function ErrorBoundary() {
  const error = useRouteError();
  return /* @__PURE__ */ jsx(Error$1, { error });
}
const route10 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  loader,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-ng9aKkiV.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/components-zDhStzPH.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/root-BLvJN1YP.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/components-zDhStzPH.js", "/assets/heading-DFWC3-0l.js", "/assets/index-BegcTpmo.js", "/assets/visually-hidden-D4-l-pco.js", "/assets/use-spring-Diupg0CB.js", "/assets/decoder-text-BjiAfcNF.js", "/assets/theme-provider-iTxONrHh.js", "/assets/error-CIvZsKp5.js", "/assets/useScrollToHash-D8T-7EyW.js", "/assets/useWindowSize-D2B5biJg.js", "/assets/config-DPRwYq_l.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/error-Cq_yTnRj.css", "/assets/root-Ci9I8dx3.css"] }, "routes/articles.modern-styling-in-react": { "id": "routes/articles.modern-styling-in-react", "parentId": "root", "path": "articles/modern-styling-in-react", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.modern-styling-in-react-B9RhlTxO.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/index-yykg3mvM.js"], "css": [] }, "routes/projects.volkihar-knight": { "id": "routes/projects.volkihar-knight", "parentId": "root", "path": "projects/volkihar-knight", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DJnj9XYZ.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/components-zDhStzPH.js", "/assets/heading-DFWC3-0l.js", "/assets/theme-provider-iTxONrHh.js", "/assets/config-DPRwYq_l.js", "/assets/image-DeBoGKLP.js", "/assets/meta-REu5jWRl.js", "/assets/project-B0ZC9Vg8.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/image-cNt8ozvO.css", "/assets/meta-_6KA8l-u.css", "/assets/project-CMTDR1YT.css", "/assets/route-Dgt82hGY.css"] }, "routes/projects.smart-sparrow": { "id": "routes/projects.smart-sparrow", "parentId": "root", "path": "projects/smart-sparrow", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BvKBPxUx.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/components-zDhStzPH.js", "/assets/heading-DFWC3-0l.js", "/assets/theme-provider-iTxONrHh.js", "/assets/config-DPRwYq_l.js", "/assets/image-DeBoGKLP.js", "/assets/meta-REu5jWRl.js", "/assets/spr-lesson-builder-dark-2npVmSdB.js", "/assets/link-D6ZS9WYB.js", "/assets/visually-hidden-D4-l-pco.js", "/assets/project-B0ZC9Vg8.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/image-cNt8ozvO.css", "/assets/link-0uB5mRf5.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/meta-_6KA8l-u.css", "/assets/project-CMTDR1YT.css", "/assets/route-INjNiGZW.css"] }, "routes/articles.hello-world": { "id": "routes/articles.hello-world", "parentId": "root", "path": "articles/hello-world", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/articles.hello-world-CU07N6yh.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/index-yykg3mvM.js"], "css": [] }, "routes/projects.slice": { "id": "routes/projects.slice", "parentId": "root", "path": "projects/slice", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-D667ival.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/components-zDhStzPH.js", "/assets/heading-DFWC3-0l.js", "/assets/theme-provider-iTxONrHh.js", "/assets/config-DPRwYq_l.js", "/assets/image-DeBoGKLP.js", "/assets/meta-REu5jWRl.js", "/assets/slice-app-CvtkH059.js", "/assets/project-B0ZC9Vg8.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/image-cNt8ozvO.css", "/assets/meta-_6KA8l-u.css", "/assets/project-CMTDR1YT.css", "/assets/route-Cvnrim9f.css"] }, "routes/api.set-theme": { "id": "routes/api.set-theme", "parentId": "root", "path": "api/set-theme", "index": void 0, "caseSensitive": void 0, "hasAction": true, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/api.set-theme-l0sNRNKZ.js?client-route=1", "imports": [], "css": [] }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-3qO07xOd.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/components-zDhStzPH.js", "/assets/heading-DFWC3-0l.js", "/assets/config-DPRwYq_l.js", "/assets/meta-REu5jWRl.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/meta-_6KA8l-u.css", "/assets/route-Dcw2ZTgE.css"] }, "routes/home": { "id": "routes/home", "parentId": "root", "path": "home", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DPl7Tggv.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/components-zDhStzPH.js", "/assets/heading-DFWC3-0l.js", "/assets/config-DPRwYq_l.js", "/assets/index-BegcTpmo.js", "/assets/visually-hidden-D4-l-pco.js", "/assets/use-spring-Diupg0CB.js", "/assets/theme-provider-iTxONrHh.js", "/assets/slice-app-CvtkH059.js", "/assets/spr-lesson-builder-dark-2npVmSdB.js", "/assets/meta-REu5jWRl.js", "/assets/decoder-text-BjiAfcNF.js", "/assets/useScrollToHash-D8T-7EyW.js", "/assets/image-DeBoGKLP.js", "/assets/useWindowSize-D2B5biJg.js", "/assets/route-VHQNz51t.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/meta-_6KA8l-u.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/image-cNt8ozvO.css", "/assets/route-Cxtq1QNG.css"] }, "routes/uses": { "id": "routes/uses", "parentId": "root", "path": "uses", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-BdmHsKzE.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/components-zDhStzPH.js", "/assets/heading-DFWC3-0l.js", "/assets/theme-provider-iTxONrHh.js", "/assets/config-DPRwYq_l.js", "/assets/image-DeBoGKLP.js", "/assets/meta-REu5jWRl.js", "/assets/link-D6ZS9WYB.js", "/assets/project-B0ZC9Vg8.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/link-0uB5mRf5.css", "/assets/image-cNt8ozvO.css", "/assets/meta-_6KA8l-u.css", "/assets/project-CMTDR1YT.css", "/assets/route-f8IImIqG.css"] }, "routes/$": { "id": "routes/$", "parentId": "root", "path": "*", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": true, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": true, "module": "/assets/_-CQpuzf3T.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/components-zDhStzPH.js", "/assets/heading-DFWC3-0l.js", "/assets/index-BegcTpmo.js", "/assets/visually-hidden-D4-l-pco.js", "/assets/use-spring-Diupg0CB.js", "/assets/decoder-text-BjiAfcNF.js", "/assets/error-CIvZsKp5.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/error-Cq_yTnRj.css"] }, "routes/home/route": { "id": "routes/home/route", "parentId": "root", "path": "/", "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasErrorBoundary": false, "module": "/assets/route-DPl7Tggv.js?client-route=1", "imports": ["/assets/jsx-runtime-BgQc5Su6.js", "/assets/components-zDhStzPH.js", "/assets/heading-DFWC3-0l.js", "/assets/config-DPRwYq_l.js", "/assets/index-BegcTpmo.js", "/assets/visually-hidden-D4-l-pco.js", "/assets/use-spring-Diupg0CB.js", "/assets/theme-provider-iTxONrHh.js", "/assets/slice-app-CvtkH059.js", "/assets/spr-lesson-builder-dark-2npVmSdB.js", "/assets/meta-REu5jWRl.js", "/assets/decoder-text-BjiAfcNF.js", "/assets/useScrollToHash-D8T-7EyW.js", "/assets/image-DeBoGKLP.js", "/assets/useWindowSize-D2B5biJg.js", "/assets/route-VHQNz51t.js"], "css": ["/assets/heading-CXQ7GA1i.css", "/assets/meta-_6KA8l-u.css", "/assets/visually-hidden-NrYl-3i8.css", "/assets/decoder-text-BAWoexd9.css", "/assets/image-cNt8ozvO.css", "/assets/route-Cxtq1QNG.css"] } }, "url": "/assets/manifest-63b471be.js", "version": "63b471be" };
const mode = "production";
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "v3_fetcherPersist": false, "v3_relativeSplatPath": false, "v3_throwAbortReason": false };
const isSpaMode = false;
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/articles.modern-styling-in-react": {
    id: "routes/articles.modern-styling-in-react",
    parentId: "root",
    path: "articles/modern-styling-in-react",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/projects.volkihar-knight": {
    id: "routes/projects.volkihar-knight",
    parentId: "root",
    path: "projects/volkihar-knight",
    index: void 0,
    caseSensitive: void 0,
    module: route2
  },
  "routes/projects.smart-sparrow": {
    id: "routes/projects.smart-sparrow",
    parentId: "root",
    path: "projects/smart-sparrow",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/articles.hello-world": {
    id: "routes/articles.hello-world",
    parentId: "root",
    path: "articles/hello-world",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/projects.slice": {
    id: "routes/projects.slice",
    parentId: "root",
    path: "projects/slice",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route7
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route11
  },
  "routes/uses": {
    id: "routes/uses",
    parentId: "root",
    path: "uses",
    index: void 0,
    caseSensitive: void 0,
    module: route9
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: route10
  },
  "routes/home/route": {
    id: "routes/home/route",
    parentId: "root",
    path: "/",
    index: true,
    caseSensitive: void 0,
    module: route11
  }
};
export {
  Loader as L,
  ModelAnimationType as M,
  Section as S,
  Transition as T,
  classes as a,
  useWindowSize as b,
  cssProps as c,
  numToPx as d,
  media as e,
  useTheme as f,
  mode as g,
  assetsBuildDirectory as h,
  basename as i,
  future as j,
  isSpaMode as k,
  entry as l,
  msToNum as m,
  numToMs as n,
  routes as o,
  publicPath as p,
  resolveSrcFromSrcSet as r,
  serverManifest as s,
  tokens as t,
  useInViewport as u
};
