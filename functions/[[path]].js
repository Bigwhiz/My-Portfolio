var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name2 in all)
    __defProp(target, name2, { get: all[name2], enumerable: !0 });
};

// app/utils/style.js
function cssProps(props, style = {}) {
  let result = {}, keys = Object.keys(props);
  for (let key of keys) {
    let value = props[key];
    typeof value == "number" && key === "delay" && (value = numToMs(value)), typeof value == "number" && key !== "opacity" && (value = numToPx(value)), typeof value == "number" && key === "opacity" && (value = `${value * 100}%`), result[`--${key}`] = value;
  }
  return { ...result, ...style };
}
function classes(...classes2) {
  return classes2.filter(Boolean).join(" ");
}
var media, numToPx, pxToRem, msToNum, numToMs, init_style = __esm({
  "app/utils/style.js"() {
    media = {
      desktop: 2080,
      laptop: 1680,
      tablet: 1040,
      mobile: 696,
      mobileS: 400
    }, numToPx = (num) => `${num}px`, pxToRem = (px) => `${px / 16}rem`, msToNum = (msString) => Number(msString.replace("ms", "")), numToMs = (num) => `${num}ms`;
  }
});

// app/components/theme-provider/theme.js
var baseTokens, tokensDesktop, tokensLaptop, tokensTablet, tokensMobile, tokensMobileSmall, dark, light, tokens, themes, init_theme = __esm({
  "app/components/theme-provider/theme.js"() {
    init_style();
    baseTokens = {
      black: "oklch(0% 0 0)",
      white: "oklch(100% 0 0)",
      bezierFastoutSlowin: "cubic-bezier(0.4, 0.0, 0.2, 1)",
      durationXS: "200ms",
      durationS: "300ms",
      durationM: "400ms",
      durationL: "600ms",
      durationXL: "800ms",
      systemFontStack: "system-ui, -apple-system, BlinkMacSystemFont, San Francisco, Roboto, Segoe UI, Ubuntu, Helvetica Neue, sans-serif",
      fontStack: "Gotham, var(--systemFontStack)",
      monoFontStack: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",
      japaneseFontStack: "IPA Gothic, \u30D2\u30E9\u30AE\u30CE\u89D2\u30B4 Pro W3, Hiragino Kaku Gothic Pro, Hiragino Sans, Osaka, \u30E1\u30A4\u30EA\u30AA, Meiryo, Segoe UI, sans-serif",
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
    }, tokensDesktop = {
      fontSizeH0: pxToRem(120),
      fontSizeH1: pxToRem(80)
    }, tokensLaptop = {
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
    }, tokensTablet = {
      fontSizeH0: pxToRem(80),
      fontSizeH1: pxToRem(60),
      fontSizeH2: pxToRem(48),
      fontSizeH3: pxToRem(32),
      fontSizeH4: pxToRem(24),
      fontSizeH5: pxToRem(20)
    }, tokensMobile = {
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
    }, tokensMobileSmall = {
      spaceOuter: "16px",
      fontSizeH0: pxToRem(42),
      fontSizeH1: pxToRem(38),
      fontSizeH2: pxToRem(28),
      fontSizeH3: pxToRem(24),
      fontSizeH4: pxToRem(20)
    }, dark = {
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
    }, light = {
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
    }, tokens = {
      base: baseTokens,
      desktop: tokensDesktop,
      laptop: tokensLaptop,
      tablet: tokensTablet,
      mobile: tokensMobile,
      mobileS: tokensMobileSmall
    }, themes = { dark, light };
  }
});

// app/components/text/text.module.css
var text_module_default, init_text_module = __esm({
  "app/components/text/text.module.css"() {
    text_module_default = { text: "KmYWM" };
  }
});

// app/components/text/text.jsx
import { jsx as jsx4 } from "react/jsx-runtime";
var Text, init_text = __esm({
  "app/components/text/text.jsx"() {
    init_style();
    init_text_module();
    Text = ({
      children,
      size = "m",
      as: Component = "span",
      align = "auto",
      weight = "auto",
      secondary,
      className,
      ...rest
    }) => /* @__PURE__ */ jsx4(
      Component,
      {
        className: classes(text_module_default.text, className),
        "data-align": align,
        "data-size": size,
        "data-weight": weight,
        "data-secondary": secondary,
        ...rest,
        children
      }
    );
  }
});

// app/components/text/index.js
var init_text2 = __esm({
  "app/components/text/index.js"() {
    init_text();
  }
});

// app/components/loader/loader.module.css
var loader_module_default, init_loader_module = __esm({
  "app/components/loader/loader.module.css"() {
    loader_module_default = { loader: "CLh4a", text: "hJb7K", span: "HPbpu", loaderSpan: "WKqtW" };
  }
});

// app/components/loader/loader.jsx
import { useReducedMotion } from "framer-motion";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Loader, init_loader = __esm({
  "app/components/loader/loader.jsx"() {
    init_text2();
    init_style();
    init_loader_module();
    Loader = forwardRef2(
      ({ className, style, width = 32, height = 4, text = "Loading...", center, ...rest }, ref) => useReducedMotion() ? /* @__PURE__ */ jsx5(Text, { className: classes(loader_module_default.text, className), weight: "medium", ...rest, children: text }) : /* @__PURE__ */ jsx5(
        "div",
        {
          ref,
          className: classes(loader_module_default.loader, className),
          "data-center": center,
          style: cssProps({ width, height }, style),
          ...rest,
          children: /* @__PURE__ */ jsx5("div", { className: loader_module_default.span })
        }
      )
    );
  }
});

// app/components/loader/index.js
var init_loader2 = __esm({
  "app/components/loader/index.js"() {
    init_loader();
  }
});

// app/components/transition/transition.jsx
import { AnimatePresence, usePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
var Transition, TransitionContent, init_transition = __esm({
  "app/components/transition/transition.jsx"() {
    Transition = ({ children, in: show, unmount, initial = !0, ...props }) => {
      let enterTimeout = useRef(), exitTimeout = useRef();
      return useEffect(() => {
        clearTimeout(show ? exitTimeout.current : enterTimeout.current);
      }, [show]), /* @__PURE__ */ jsx6(AnimatePresence, { children: (show || !unmount) && /* @__PURE__ */ jsx6(
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
    }, TransitionContent = ({
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
      let [status, setStatus] = useState(initial ? "exited" : "entered"), [isPresent, safeToRemove] = usePresence(), [hasEntered, setHasEntered] = useState(!initial), splitTimeout = typeof timeout == "object", internalNodeRef = useRef(null), nodeRef = defaultNodeRef || internalNodeRef, visible = hasEntered && show ? isPresent : !1;
      return useEffect(() => {
        if (hasEntered || !show)
          return;
        let actualTimeout = splitTimeout ? timeout.enter : timeout;
        clearTimeout(enterTimeout.current), clearTimeout(exitTimeout.current), setHasEntered(!0), setStatus("entering"), onEnter?.(), nodeRef.current?.offsetHeight, enterTimeout.current = setTimeout(() => {
          setStatus("entered"), onEntered?.();
        }, actualTimeout);
      }, [onEnter, onEntered, timeout, status, show]), useEffect(() => {
        if (isPresent && show)
          return;
        let actualTimeout = splitTimeout ? timeout.exit : timeout;
        clearTimeout(enterTimeout.current), clearTimeout(exitTimeout.current), setStatus("exiting"), onExit?.(), nodeRef.current?.offsetHeight, exitTimeout.current = setTimeout(() => {
          setStatus("exited"), safeToRemove?.(), onExited?.();
        }, actualTimeout);
      }, [isPresent, onExit, safeToRemove, timeout, onExited, show]), children({ visible, status, nodeRef });
    };
  }
});

// app/components/transition/index.js
var init_transition2 = __esm({
  "app/components/transition/index.js"() {
    init_transition();
  }
});

// app/hooks/useFormInput.js
import { useState as useState2 } from "react";
var init_useFormInput = __esm({
  "app/hooks/useFormInput.js"() {
  }
});

// app/hooks/useHasMounted.js
import { useEffect as useEffect3, useState as useState3 } from "react";
function useHasMounted() {
  let [mounted, setMounted] = useState3(!1);
  return useEffect3(() => {
    setMounted(!0);
  }, []), mounted;
}
var init_useHasMounted = __esm({
  "app/hooks/useHasMounted.js"() {
  }
});

// app/hooks/useInterval.js
import { useEffect as useEffect4, useRef as useRef3 } from "react";
function useInterval(callback, delay2, reset) {
  let savedCallback = useRef3();
  useEffect4(() => {
    savedCallback.current = callback;
  }), useEffect4(() => {
    function tick() {
      savedCallback.current();
    }
    if (delay2 !== null) {
      let id = setInterval(tick, delay2);
      return () => clearInterval(id);
    }
  }, [delay2, reset]);
}
var init_useInterval = __esm({
  "app/hooks/useInterval.js"() {
  }
});

// app/hooks/useInViewport.js
import { useEffect as useEffect5, useState as useState4 } from "react";
function useInViewport(elementRef, unobserveOnIntersect, options = {}, shouldObserve = !0) {
  let [intersect, setIntersect] = useState4(!1), [isUnobserved, setIsUnobserved] = useState4(!1);
  return useEffect5(() => {
    if (!elementRef?.current)
      return;
    let observer = new IntersectionObserver(([entry2]) => {
      let { isIntersecting, target } = entry2;
      setIntersect(isIntersecting), isIntersecting && unobserveOnIntersect && (observer.unobserve(target), setIsUnobserved(!0));
    }, options);
    return !isUnobserved && shouldObserve && observer.observe(elementRef.current), () => observer.disconnect();
  }, [elementRef, unobserveOnIntersect, options, isUnobserved, shouldObserve]), intersect;
}
var init_useInViewport = __esm({
  "app/hooks/useInViewport.js"() {
  }
});

// app/hooks/useParallax.js
import { useReducedMotion as useReducedMotion3 } from "framer-motion";
import { useEffect as useEffect6 } from "react";
function useParallax(multiplier, onChange) {
  let reduceMotion = useReducedMotion3();
  useEffect6(() => {
    let ticking = !1, animationFrame = null, animate3 = () => {
      let { innerHeight } = window, offsetValue = Math.max(0, window.scrollY) * multiplier, clampedOffsetValue = Math.max(
        -innerHeight,
        Math.min(innerHeight, offsetValue)
      );
      onChange(clampedOffsetValue), ticking = !1;
    }, handleScroll = () => {
      ticking || (ticking = !0, animationFrame = requestAnimationFrame(animate3));
    };
    return reduceMotion || (window.addEventListener("scroll", handleScroll), handleScroll()), () => {
      window.removeEventListener("scroll", handleScroll), cancelAnimationFrame(animationFrame);
    };
  }, [multiplier, onChange, reduceMotion]);
}
var init_useParallax = __esm({
  "app/hooks/useParallax.js"() {
  }
});

// app/hooks/usePrevious.js
import { useEffect as useEffect7, useRef as useRef4 } from "react";
function usePrevious(value) {
  let ref = useRef4();
  return useEffect7(() => {
    ref.current = value;
  }, [value]), ref.current;
}
var init_usePrevious = __esm({
  "app/hooks/usePrevious.js"() {
  }
});

// app/hooks/useScrollToHash.js
import { useReducedMotion as useReducedMotion4 } from "framer-motion";
import { useLocation, useNavigate } from "@remix-run/react";
import { useCallback, useRef as useRef5 } from "react";
function useScrollToHash() {
  let scrollTimeout = useRef5(), location = useLocation(), navigate = useNavigate(), reduceMotion = useReducedMotion4();
  return useCallback(
    (hash, onDone) => {
      let id = hash.split("#")[1];
      document.getElementById(id).scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      let handleScroll = () => {
        clearTimeout(scrollTimeout.current), scrollTimeout.current = setTimeout(() => {
          window.removeEventListener("scroll", handleScroll), window.location.pathname === location.pathname && (onDone?.(), navigate(`${location.pathname}#${id}`, { scroll: !1 }));
        }, 50);
      };
      return window.addEventListener("scroll", handleScroll), () => {
        window.removeEventListener("scroll", handleScroll), clearTimeout(scrollTimeout.current);
      };
    },
    [navigate, reduceMotion, location.pathname]
  );
}
var init_useScrollToHash = __esm({
  "app/hooks/useScrollToHash.js"() {
  }
});

// app/hooks/useWindowSize.js
import { useCallback as useCallback2, useEffect as useEffect8, useRef as useRef6, useState as useState5 } from "react";
function useWindowSize() {
  let dimensions = useRef6(() => ({ w: 1280, h: 800 })), createRuler = useCallback2(() => {
    let ruler = document.createElement("div");
    ruler.style.position = "fixed", ruler.style.height = "100vh", ruler.style.width = 0, ruler.style.top = 0, document.documentElement.appendChild(ruler), dimensions.current.w = window.innerWidth, dimensions.current.h = ruler.offsetHeight, document.documentElement.removeChild(ruler), ruler = null;
  }, []), getHeight = useCallback2(() => navigator?.userAgent.match(/iphone|ipod|ipad/i) ? (createRuler(), dimensions.current.h) : window.innerHeight, [createRuler]), getSize = useCallback2(() => ({
    width: window.innerWidth,
    height: getHeight()
  }), [getHeight]), [windowSize, setWindowSize] = useState5(dimensions.current);
  return useEffect8(() => {
    let handleResize = () => {
      setWindowSize(getSize());
    };
    return window.addEventListener("resize", handleResize), handleResize(), () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [getSize]), windowSize;
}
var init_useWindowSize = __esm({
  "app/hooks/useWindowSize.js"() {
  }
});

// app/hooks/index.js
var init_hooks = __esm({
  "app/hooks/index.js"() {
    init_useFormInput();
    init_useHasMounted();
    init_useInterval();
    init_useInViewport();
    init_useParallax();
    init_usePrevious();
    init_useScrollToHash();
    init_useWindowSize();
  }
});

// app/utils/image.js
async function loadImageFromSrcSet({ src, srcSet, sizes }) {
  return new Promise((resolve, reject) => {
    try {
      if (!src && !srcSet)
        throw new Error("No image src or srcSet provided");
      let tempImage = new Image();
      src && (tempImage.src = src), srcSet && (tempImage.srcset = srcSet), sizes && (tempImage.sizes = sizes);
      let onLoad = () => {
        tempImage.removeEventListener("load", onLoad);
        let source = tempImage.currentSrc;
        tempImage = null, resolve(source);
      };
      tempImage.addEventListener("load", onLoad);
    } catch (error) {
      reject(`Error loading ${srcSet}: ${error}`);
    }
  });
}
async function generateImage(width = 1, height = 1) {
  return new Promise((resolve) => {
    let canvas = document.createElement("canvas"), ctx = canvas.getContext("2d");
    canvas.width = width, canvas.height = height, ctx.fillStyle = "rgba(0, 0, 0, 0)", ctx.fillRect(0, 0, width, height), canvas.toBlob(async (blob) => {
      if (!blob)
        throw new Error("Video thumbnail failed to load");
      let image = URL.createObjectURL(blob);
      canvas.remove(), resolve(image);
    });
  });
}
async function resolveSrcFromSrcSet({ srcSet, sizes }) {
  let sources = await Promise.all(
    srcSet.split(", ").map(async (srcString) => {
      let [src, width] = srcString.split(" "), size = Number(width.replace("w", "")), image = await generateImage(size);
      return { src, image, width };
    })
  ), fakeSrcSet = sources.map(({ image, width }) => `${image} ${width}`).join(", "), fakeSrc = await loadImageFromSrcSet({ srcSet: fakeSrcSet, sizes });
  return sources.find((src) => src.image === fakeSrc).src;
}
var init_image = __esm({
  "app/utils/image.js"() {
  }
});

// app/components/section/section.module.css
var section_module_default, init_section_module = __esm({
  "app/components/section/section.module.css"() {
    section_module_default = { section: "_0LpwB" };
  }
});

// app/components/section/section.jsx
import { forwardRef as forwardRef7 } from "react";
import { jsx as jsx22 } from "react/jsx-runtime";
var Section, init_section = __esm({
  "app/components/section/section.jsx"() {
    init_style();
    init_section_module();
    Section = forwardRef7(
      ({ as: Component = "div", children, className, ...rest }, ref) => /* @__PURE__ */ jsx22(Component, { className: classes(section_module_default.section, className), ref, ...rest, children })
    );
  }
});

// app/components/section/index.js
var init_section2 = __esm({
  "app/components/section/index.js"() {
    init_section();
  }
});

// app/utils/three.js
import { Cache, TextureLoader } from "three";
import { DRACOLoader, GLTFLoader } from "three-stdlib";
var dracoLoader, gltfLoader, modelLoader, textureLoader, cleanScene, cleanMaterial, cleanRenderer, removeLights, getChild, init_three = __esm({
  "app/utils/three.js"() {
    Cache.enabled = !0;
    dracoLoader = new DRACOLoader(), gltfLoader = new GLTFLoader();
    dracoLoader.setDecoderPath("/draco/");
    gltfLoader.setDRACOLoader(dracoLoader);
    modelLoader = gltfLoader, textureLoader = new TextureLoader(), cleanScene = (scene) => {
      scene?.traverse((object) => {
        if (object.isMesh)
          if (object.geometry.dispose(), object.material.isMaterial)
            cleanMaterial(object.material);
          else
            for (let material of object.material)
              cleanMaterial(material);
      });
    }, cleanMaterial = (material) => {
      material.dispose();
      for (let key of Object.keys(material)) {
        let value = material[key];
        value && typeof value == "object" && "minFilter" in value && (value.dispose(), value.source?.data?.close?.());
      }
    }, cleanRenderer = (renderer) => {
      renderer.dispose(), renderer = null;
    }, removeLights = (lights) => {
      for (let light2 of lights)
        light2.parent.remove(light2);
    }, getChild = (name2, object) => {
      let node;
      return object.traverse((child) => {
        child.name === name2 && (node = child);
      }), node;
    };
  }
});

// app/components/carousel/carousel.module.css
var carousel_module_default, init_carousel_module = __esm({
  "app/components/carousel/carousel.module.css"() {
    carousel_module_default = { carousel: "VMfuy", content: "_3EbHu", imageWrapper: "Ip-dB", canvasWrapper: "_9srfA", canvas: "NZTS0", placeholder: "P-DcB", button: "MBfGb", nav: "_9nvIC", navButton: "_0Q4nb" };
  }
});

// app/components/carousel/carousel.jsx
import { animate, useReducedMotion as useReducedMotion6 } from "framer-motion";
import { useCallback as useCallback4, useEffect as useEffect13, useRef as useRef11, useState as useState9 } from "react";
import {
  Color,
  LinearFilter,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  LinearSRGBColorSpace,
  Scene,
  ShaderMaterial,
  WebGLRenderer
} from "three";
import { jsx as jsx25, jsxs as jsxs14 } from "react/jsx-runtime";
function determineIndex(imageIndex, index, images, direction) {
  if (index !== null)
    return index;
  let length = images.length, prevIndex = (imageIndex - 1 + length) % length, nextIndex = (imageIndex + 1) % length;
  return direction > 0 ? nextIndex : prevIndex;
}
function ArrowLeft() {
  return /* @__PURE__ */ jsx25("svg", { fill: "currentColor", width: "18", height: "42", viewBox: "0 0 18 42", children: /* @__PURE__ */ jsx25("path", { d: "M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z" }) });
}
function ArrowRight() {
  return /* @__PURE__ */ jsx25("svg", { fill: "currentColor", width: "18", height: "42", viewBox: "0 0 18 42", children: /* @__PURE__ */ jsx25("path", { d: "M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z" }) });
}
var Carousel, init_carousel = __esm({
  "app/components/carousel/carousel.jsx"() {
    init_hooks();
    init_image();
    init_style();
    init_three();
    init_carousel_module();
    Carousel = ({ width, height, images, placeholder, ...rest }) => {
      let [dragging, setDragging] = useState9(!1), [imageIndex, setImageIndex] = useState9(0), [loaded, setLoaded] = useState9(!1), [showPlaceholder, setShowPlaceholder] = useState9(!0), [textures, setTextures] = useState9(), [canvasRect, setCanvasRect] = useState9(), canvas = useRef11(), imagePlane = useRef11(), geometry = useRef11(), material = useRef11(), scene = useRef11(), camera = useRef11(), renderer = useRef11(), animating = useRef11(!1), swipeDirection = useRef11(), lastSwipePosition = useRef11(), scheduledAnimationFrame = useRef11(), reduceMotion = useReducedMotion6(), inViewport = useInViewport(canvas, !0), placeholderRef = useRef11(), initSwipeX = useRef11(), currentImageAlt = `Slide ${imageIndex + 1} of ${images.length}. ${images[imageIndex].alt}`;
      useEffect13(() => (dragging && (document.body.style.cursor = "grabbing"), () => {
        document.body.style.cursor = "";
      }), [dragging]), useEffect13(() => {
        let cameraOptions = [width / -2, width / 2, height / 2, height / -2, 1, 1e3];
        return renderer.current = new WebGLRenderer({
          canvas: canvas.current,
          antialias: !1,
          alpha: !0,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: !0
        }), camera.current = new OrthographicCamera(...cameraOptions), scene.current = new Scene(), renderer.current.setPixelRatio(2), renderer.current.setClearColor(1118481, 1), renderer.current.setSize(width, height), renderer.current.domElement.style.width = "100%", renderer.current.domElement.style.height = "auto", scene.current.background = new Color(1118481), camera.current.position.z = 1, () => {
          animating.current = !1, cleanScene(scene.current), cleanRenderer(renderer.current);
        };
      }, [height, width]), useEffect13(() => {
        let mounted = !0;
        return inViewport && !loaded && (async () => {
          let anisotropy = renderer.current.capabilities.getMaxAnisotropy(), texturePromises = images.map(async (image) => {
            let imageSrc = image.srcSet ? await resolveSrcFromSrcSet(image) : image.src, imageTexture = await textureLoader.loadAsync(imageSrc);
            return await renderer.current.initTexture(imageTexture), imageTexture.colorSpace = LinearSRGBColorSpace, imageTexture.minFilter = LinearFilter, imageTexture.magFilter = LinearFilter, imageTexture.anisotropy = anisotropy, imageTexture.generateMipmaps = !1, imageTexture;
          }), textures2 = await Promise.all(texturePromises);
          mounted && (material.current = new ShaderMaterial({
            uniforms: {
              dispFactor: { type: "f", value: 0 },
              direction: { type: "f", value: 1 },
              currentImage: { type: "t", value: textures2[0] },
              nextImage: { type: "t", value: textures2[1] },
              reduceMotion: { type: "b", value: reduceMotion }
            },
            vertexShader: vertex,
            fragmentShader: fragment,
            transparent: !1,
            opacity: 1
          }), geometry.current = new PlaneGeometry(width, height, 1), imagePlane.current = new Mesh(geometry.current, material.current), imagePlane.current.position.set(0, 0, 0), scene.current.add(imagePlane.current), setLoaded(!0), setTextures(textures2), requestAnimationFrame(() => {
            renderer.current.render(scene.current, camera.current);
          }));
        })(), () => {
          mounted = !1;
        };
      }, [height, images, inViewport, loaded, reduceMotion, width]);
      let goToIndex = useCallback4(
        ({ index, direction = 1 }) => {
          if (!textures)
            return;
          setImageIndex(index);
          let { uniforms } = material.current;
          uniforms.nextImage.value = textures[index], uniforms.direction.value = direction;
          let onComplete = () => {
            uniforms.currentImage.value = textures[index], uniforms.dispFactor.value = 0, animating.current = !1;
          };
          uniforms.dispFactor.value !== 1 && (animating.current = !0, animate(uniforms.dispFactor.value, 1, {
            type: "spring",
            stiffness: 100,
            damping: 20,
            restSpeed: 1e-3,
            restDelta: 1e-3,
            onUpdate: (value) => {
              uniforms.dispFactor.value = value;
            },
            onComplete
          }));
        },
        [textures]
      ), navigate = useCallback4(
        ({ direction, index = null, ...rest2 }) => {
          if (!loaded)
            return;
          if (animating.current) {
            cancelAnimationFrame(scheduledAnimationFrame.current), scheduledAnimationFrame.current = requestAnimationFrame(
              () => navigate({ direction, index, ...rest2 })
            );
            return;
          }
          let finalIndex = determineIndex(imageIndex, index, textures, direction);
          goToIndex({ index: finalIndex, direction, ...rest2 });
        },
        [goToIndex, imageIndex, loaded, textures]
      ), onNavClick = useCallback4(
        (index) => {
          if (index === imageIndex)
            return;
          let direction = index > imageIndex ? 1 : -1;
          navigate({ direction, index });
        },
        [imageIndex, navigate]
      );
      useEffect13(() => {
        let handleResize = () => {
          let rect = canvas.current.getBoundingClientRect();
          setCanvasRect(rect);
        };
        return window.addEventListener("resize", handleResize), handleResize(), () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []), useEffect13(() => {
        let animation, animate3 = () => {
          animation = requestAnimationFrame(animate3), animating.current && renderer.current.render(scene.current, camera.current);
        };
        return animation = requestAnimationFrame(animate3), () => {
          cancelAnimationFrame(animation);
        };
      }, []), useEffect13(() => {
        if (placeholder) {
          let purgePlaceholder = () => {
            setShowPlaceholder(!1);
          }, placeholderElement = placeholderRef.current;
          return placeholderElement.addEventListener("transitionend", purgePlaceholder), () => {
            placeholderElement && placeholderElement.removeEventListener("transitionend", purgePlaceholder);
          };
        }
      }, [placeholder]);
      let onSwipeMove = useCallback4(
        (x) => {
          if (animating.current || !material.current || !textures)
            return;
          lastSwipePosition.current = x;
          let absoluteX = Math.abs(x), containerWidth = canvasRect.width;
          swipeDirection.current = x > 0 ? -1 : 1;
          let swipePercentage = 1 - (absoluteX - containerWidth) / containerWidth * -1, nextIndex = determineIndex(imageIndex, null, images, swipeDirection.current), uniforms = material.current.uniforms, displacementClamp = Math.min(Math.max(swipePercentage, 0), 1);
          uniforms.currentImage.value = textures[imageIndex], uniforms.nextImage.value = textures[nextIndex], uniforms.direction.value = swipeDirection.current, uniforms.dispFactor.value = displacementClamp, requestAnimationFrame(() => {
            renderer.current.render(scene.current, camera.current);
          });
        },
        [canvasRect, imageIndex, images, textures]
      ), onSwipeEnd = useCallback4(() => {
        if (!material.current)
          return;
        let uniforms = material.current.uniforms, duration = (1 - uniforms.dispFactor.value) * 1e3, position = Math.abs(lastSwipePosition.current), minSwipeDistance = canvasRect.width * 0.2;
        lastSwipePosition.current = 0, !animating.current && (position === 0 || !position || (position > minSwipeDistance ? navigate({
          duration,
          direction: swipeDirection.current
        }) : (uniforms.currentImage.value = uniforms.nextImage.value, uniforms.nextImage.value = uniforms.currentImage.value, uniforms.dispFactor.value = 1 - uniforms.dispFactor.value, navigate({
          direction: swipeDirection.current * -1,
          index: imageIndex
        }))));
      }, [canvasRect, imageIndex, navigate]), handlePointerMove = useCallback4(
        (event) => {
          onSwipeMove(event.clientX - initSwipeX.current);
        },
        [onSwipeMove]
      ), handlePointerUp = useCallback4(() => {
        setDragging(!1), onSwipeEnd(), document.removeEventListener("pointerup", handlePointerUp), document.removeEventListener("pointermove", handlePointerMove);
      }, [handlePointerMove, onSwipeEnd]), handlePointerDown = useCallback4(
        (event) => {
          initSwipeX.current = event.clientX, setDragging(!0), document.addEventListener("pointermove", handlePointerMove), document.addEventListener("pointerup", handlePointerUp);
        },
        [handlePointerMove, handlePointerUp]
      ), handleKeyDown = (event) => {
        switch (event.key) {
          case "ArrowRight":
            navigate({ direction: 1 });
            break;
          case "ArrowLeft":
            navigate({ direction: -1 });
            break;
        }
      };
      return (
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        /* @__PURE__ */ jsxs14("div", { className: carousel_module_default.carousel, onKeyDown: handleKeyDown, ...rest, children: [
          /* @__PURE__ */ jsxs14("div", { className: carousel_module_default.content, children: [
            /* @__PURE__ */ jsxs14(
              "div",
              {
                className: carousel_module_default.imageWrapper,
                "data-dragging": dragging,
                onPointerDown: handlePointerDown,
                style: cssProps({ aspectRatio: `${width} / ${height}` }),
                children: [
                  /* @__PURE__ */ jsx25(
                    "div",
                    {
                      "aria-atomic": !0,
                      className: carousel_module_default.canvasWrapper,
                      "aria-live": "polite",
                      "aria-label": currentImageAlt,
                      role: "img",
                      children: /* @__PURE__ */ jsx25("canvas", { "aria-hidden": !0, className: carousel_module_default.canvas, ref: canvas })
                    }
                  ),
                  showPlaceholder && placeholder && /* @__PURE__ */ jsx25(
                    "img",
                    {
                      "aria-hidden": !0,
                      className: carousel_module_default.placeholder,
                      "data-loaded": loaded && !!textures,
                      src: placeholder,
                      ref: placeholderRef,
                      alt: "",
                      role: "presentation"
                    }
                  )
                ]
              }
            ),
            /* @__PURE__ */ jsx25(
              "button",
              {
                className: carousel_module_default.button,
                "data-prev": !0,
                "aria-label": "Previous slide",
                onClick: () => navigate({ direction: -1 }),
                children: /* @__PURE__ */ jsx25(ArrowLeft, {})
              }
            ),
            /* @__PURE__ */ jsx25(
              "button",
              {
                className: carousel_module_default.button,
                "data-next": !0,
                "aria-label": "Next slide",
                onClick: () => navigate({ direction: 1 }),
                children: /* @__PURE__ */ jsx25(ArrowRight, {})
              }
            )
          ] }),
          /* @__PURE__ */ jsx25("div", { className: carousel_module_default.nav, children: images.map(
            (image, index) => /* @__PURE__ */ jsx25(
              "button",
              {
                className: carousel_module_default.navButton,
                onClick: () => onNavClick(index),
                "aria-label": `Jump to slide ${index + 1}`,
                "aria-pressed": index === imageIndex
              },
              image.alt
            )
          ) })
        ] })
      );
    };
  }
});

// app/components/carousel/index.js
var carousel_exports = {};
__export(carousel_exports, {
  Carousel: () => Carousel
});
var init_carousel2 = __esm({
  "app/components/carousel/index.js"() {
    init_carousel();
  }
});

// app/assets/volkihar-cube-nx.jpg
var volkihar_cube_nx_default, init_volkihar_cube_nx = __esm({
  "app/assets/volkihar-cube-nx.jpg"() {
    volkihar_cube_nx_default = "/assets/_assets/volkihar-cube-nx-MFIMTLYF.jpg";
  }
});

// app/assets/volkihar-cube-ny.jpg
var volkihar_cube_ny_default, init_volkihar_cube_ny = __esm({
  "app/assets/volkihar-cube-ny.jpg"() {
    volkihar_cube_ny_default = "/assets/_assets/volkihar-cube-ny-6LBFMIGT.jpg";
  }
});

// app/assets/volkihar-cube-nz.jpg
var volkihar_cube_nz_default, init_volkihar_cube_nz = __esm({
  "app/assets/volkihar-cube-nz.jpg"() {
    volkihar_cube_nz_default = "/assets/_assets/volkihar-cube-nz-BFG5BMZH.jpg";
  }
});

// app/assets/volkihar-cube-px.jpg
var volkihar_cube_px_default, init_volkihar_cube_px = __esm({
  "app/assets/volkihar-cube-px.jpg"() {
    volkihar_cube_px_default = "/assets/_assets/volkihar-cube-px-ZMAH6DUL.jpg";
  }
});

// app/assets/volkihar-cube-py.jpg
var volkihar_cube_py_default, init_volkihar_cube_py = __esm({
  "app/assets/volkihar-cube-py.jpg"() {
    volkihar_cube_py_default = "/assets/_assets/volkihar-cube-py-I3IS6N2S.jpg";
  }
});

// app/assets/volkihar-cube-pz.jpg
var volkihar_cube_pz_default, init_volkihar_cube_pz = __esm({
  "app/assets/volkihar-cube-pz.jpg"() {
    volkihar_cube_pz_default = "/assets/_assets/volkihar-cube-pz-47DP52Y5.jpg";
  }
});

// app/assets/volkihar-knight.glb
var volkihar_knight_default, init_volkihar_knight = __esm({
  "app/assets/volkihar-knight.glb"() {
    volkihar_knight_default = "/assets/_assets/volkihar-knight-2YXUC67A.glb";
  }
});

// app/utils/throttle.js
function throttle(func, timeFrame) {
  let lastTime = 0;
  return function(...args) {
    let now = /* @__PURE__ */ new Date();
    now - lastTime >= timeFrame && (func(...args), lastTime = now);
  };
}
var init_throttle = __esm({
  "app/utils/throttle.js"() {
  }
});

// app/routes/projects.volkihar-knight/armor.module.css
var armor_module_default, init_armor_module = __esm({
  "app/routes/projects.volkihar-knight/armor.module.css"() {
    armor_module_default = { armor: "bN7R0", loader: "JIDiX", canvas: "Jnb1A" };
  }
});

// app/routes/projects.volkihar-knight/armor.jsx
var armor_exports = {};
__export(armor_exports, {
  Armor: () => Armor
});
import { useReducedMotion as useReducedMotion7, useSpring as useSpring2 } from "framer-motion";
import { startTransition, useCallback as useCallback5, useEffect as useEffect14, useRef as useRef12, useState as useState10 } from "react";
import {
  ACESFilmicToneMapping,
  CubeTextureLoader,
  DirectionalLight,
  Group,
  PMREMGenerator,
  PerspectiveCamera,
  Scene as Scene2,
  WebGLRenderer as WebGLRenderer2,
  MathUtils,
  SRGBColorSpace
} from "three";
import { jsx as jsx26, jsxs as jsxs15 } from "react/jsx-runtime";
var rotationSpringConfig, Armor, init_armor = __esm({
  "app/routes/projects.volkihar-knight/armor.jsx"() {
    init_volkihar_cube_nx();
    init_volkihar_cube_ny();
    init_volkihar_cube_nz();
    init_volkihar_cube_px();
    init_volkihar_cube_py();
    init_volkihar_cube_pz();
    init_volkihar_knight();
    init_loader2();
    init_theme();
    init_transition2();
    init_hooks();
    init_style();
    init_three();
    init_throttle();
    init_armor_module();
    rotationSpringConfig = {
      stiffness: 40,
      damping: 20,
      mass: 1.5
    }, Armor = ({
      showDelay = 0,
      cameraPosition = { x: 0, y: 0, z: 6 },
      className,
      alt,
      ...rest
    }) => {
      let [loaded, setLoaded] = useState10(!1), [visible, setVisible] = useState10(!1), [loaderVisible, setLoaderVisible] = useState10(!1), container = useRef12(), canvas = useRef12(), camera = useRef12(), modelGroup = useRef12(), scene = useRef12(), renderer = useRef12(), lights = useRef12(), isInViewport = useInViewport(container, !1, { threshold: 0.4 }), reduceMotion = useReducedMotion7(), rotationX = useSpring2(0, rotationSpringConfig), rotationY = useSpring2(0, rotationSpringConfig);
      useEffect14(() => {
        let { clientWidth, clientHeight } = container.current;
        renderer.current = new WebGLRenderer2({
          canvas: canvas.current,
          alpha: !0,
          antialias: !1,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: !0
        }), renderer.current.setPixelRatio(2), renderer.current.setSize(clientWidth, clientHeight), renderer.current.outputColorSpace = SRGBColorSpace, renderer.current.toneMapping = ACESFilmicToneMapping, camera.current = new PerspectiveCamera(36, clientWidth / clientHeight, 0.1, 100), camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z), scene.current = new Scene2();
        let cubeTextureLoader = new CubeTextureLoader();
        modelGroup.current = new Group(), scene.current.add(modelGroup.current);
        let pmremGenerator = new PMREMGenerator(renderer.current);
        pmremGenerator.compileCubemapShader();
        let keyLight = new DirectionalLight(16777215, 2.6), fillLight = new DirectionalLight(16777215, 1), backLight = new DirectionalLight(16777215, 1.3);
        keyLight.position.set(1, 0.1, 2), fillLight.position.set(-1, 0.1, 8), backLight.position.set(-2, 2, -3), lights.current = [backLight, keyLight, fillLight], lights.current.forEach((light2) => scene.current.add(light2));
        let load = async () => {
          let loadGltf = modelLoader.loadAsync(volkihar_knight_default), loadEnv = cubeTextureLoader.loadAsync([volkihar_cube_nx_default, volkihar_cube_ny_default, volkihar_cube_nz_default, volkihar_cube_px_default, volkihar_cube_py_default, volkihar_cube_pz_default]), [gltf, envTexture] = await Promise.all([loadGltf, loadEnv]);
          modelGroup.current.add(gltf.scene), gltf.scene.rotation.y = MathUtils.degToRad(180), gltf.scene.position.y = -1.6;
          let { texture } = pmremGenerator.fromCubemap(envTexture);
          scene.current.environment = texture, pmremGenerator.dispose(), await renderer.current.initTexture(scene.current.environment), modelGroup.current.traverse(async (node) => {
            node.material && await renderer.current.initTexture(node.material);
          }), setLoaded(!0), renderFrame();
        };
        startTransition(() => {
          load(), setTimeout(() => {
            setLoaderVisible(!0);
          }, 1e3);
        });
        let unsubscribeX = rotationX.on("change", (value) => {
          modelGroup.current.rotation.x = value, renderFrame();
        }), unsubscribeY = rotationY.on("change", (value) => {
          modelGroup.current.rotation.y = value, renderFrame();
        });
        return () => {
          removeLights(lights.current), cleanScene(scene.current), cleanRenderer(renderer.current), unsubscribeX(), unsubscribeY();
        };
      }, []);
      let renderFrame = useCallback5(() => {
        renderer.current.render(scene.current, camera.current);
      }, []);
      return useEffect14(() => {
        let onMouseMove = throttle((event) => {
          let { innerWidth, innerHeight } = window, position = {
            x: (event.clientX - innerWidth / 2) / innerWidth,
            y: (event.clientY - innerHeight / 2) / innerHeight
          };
          rotationX.set(position.y / 2), rotationY.set(position.x / 2);
        }, 100);
        return isInViewport && setVisible(!0), isInViewport && !reduceMotion && window.addEventListener("mousemove", onMouseMove), () => {
          window.removeEventListener("mousemove", onMouseMove);
        };
      }, [isInViewport, reduceMotion, rotationX, rotationY]), useEffect14(() => {
        let handleResize = () => {
          if (!container.current)
            return;
          let { clientWidth, clientHeight } = container.current;
          renderer.current.setSize(clientWidth, clientHeight), camera.current.aspect = clientWidth / clientHeight, camera.current.updateProjectionMatrix(), renderFrame();
        };
        return window.addEventListener("resize", handleResize), handleResize(), () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [renderFrame]), /* @__PURE__ */ jsxs15(
        "div",
        {
          className: classes(armor_module_default.armor, className),
          ref: container,
          role: "img",
          "aria-label": alt,
          ...rest,
          children: [
            /* @__PURE__ */ jsx26(
              Transition,
              {
                unmount: !0,
                in: !loaded && loaderVisible,
                timeout: msToNum(tokens.base.durationL),
                children: ({ visible: visible2 }) => /* @__PURE__ */ jsx26(Loader, { className: armor_module_default.loader, "data-visible": visible2 })
              }
            ),
            /* @__PURE__ */ jsx26(
              "canvas",
              {
                className: armor_module_default.canvas,
                ref: canvas,
                "data-loaded": loaded && visible,
                style: cssProps({ delay: numToMs(showDelay) })
              }
            )
          ]
        }
      );
    };
  }
});

// app/assets/earth.glb
var earth_default, init_earth = __esm({
  "app/assets/earth.glb"() {
    earth_default = "/assets/_assets/earth-KECVD2W3.glb";
  }
});

// app/assets/milkyway-nx.hdr
var milkyway_nx_default, init_milkyway_nx = __esm({
  "app/assets/milkyway-nx.hdr"() {
    milkyway_nx_default = "/assets/_assets/milkyway-nx-B2LSWIPY.hdr";
  }
});

// app/assets/milkyway-ny.hdr
var milkyway_ny_default, init_milkyway_ny = __esm({
  "app/assets/milkyway-ny.hdr"() {
    milkyway_ny_default = "/assets/_assets/milkyway-ny-ABSFT437.hdr";
  }
});

// app/assets/milkyway-nz.hdr
var milkyway_nz_default, init_milkyway_nz = __esm({
  "app/assets/milkyway-nz.hdr"() {
    milkyway_nz_default = "/assets/_assets/milkyway-nz-L425LJDA.hdr";
  }
});

// app/assets/milkyway-px.hdr
var milkyway_px_default, init_milkyway_px = __esm({
  "app/assets/milkyway-px.hdr"() {
    milkyway_px_default = "/assets/_assets/milkyway-px-FERHKW3X.hdr";
  }
});

// app/assets/milkyway-py.hdr
var milkyway_py_default, init_milkyway_py = __esm({
  "app/assets/milkyway-py.hdr"() {
    milkyway_py_default = "/assets/_assets/milkyway-py-PLXMGDNB.hdr";
  }
});

// app/assets/milkyway-pz.hdr
var milkyway_pz_default, init_milkyway_pz = __esm({
  "app/assets/milkyway-pz.hdr"() {
    milkyway_pz_default = "/assets/_assets/milkyway-pz-B33EWIJV.hdr";
  }
});

// app/assets/milkyway.jpg
var milkyway_default, init_milkyway = __esm({
  "app/assets/milkyway.jpg"() {
    milkyway_default = "/assets/_assets/milkyway-37ER5DRR.jpg";
  }
});

// app/utils/clamp.js
var clamp, init_clamp = __esm({
  "app/utils/clamp.js"() {
    clamp = (number, boundOne, boundTwo) => {
      if (boundTwo) {
        if (Math.min(number, boundOne) === number)
          return boundOne;
        if (Math.max(number, boundTwo) === number)
          return boundTwo;
      } else
        return Math.max(number, boundOne) === boundOne ? number : boundOne;
      return number;
    };
  }
});

// app/routes/projects.smart-sparrow/earth.module.css
var earth_module_default, init_earth_module = __esm({
  "app/routes/projects.smart-sparrow/earth.module.css"() {
    earth_module_default = { earth: "eI03r", loader: "FgryW", viewport: "jyNGg", canvas: "_1-1Px", labels: "pWKoQ", label: "MSTaL", vignette: "OZkiK", sections: "RoQEw", section: "uBo-5" };
  }
});

// app/routes/projects.smart-sparrow/earth.jsx
var earth_exports = {};
__export(earth_exports, {
  Earth: () => Earth,
  EarthSection: () => EarthSection
});
import { useReducedMotion as useReducedMotion8, useSpring as useSpring3 } from "framer-motion";
import {
  createContext as createContext3,
  memo as memo2,
  startTransition as startTransition2,
  useCallback as useCallback7,
  useContext as useContext3,
  useEffect as useEffect16,
  useRef as useRef14,
  useState as useState12
} from "react";
import { HDRCubeTextureLoader, OrbitControls } from "three-stdlib";
import {
  ACESFilmicToneMapping as ACESFilmicToneMapping2,
  AmbientLight,
  AnimationMixer,
  Clock,
  DirectionalLight as DirectionalLight2,
  LoopOnce,
  PMREMGenerator as PMREMGenerator2,
  PerspectiveCamera as PerspectiveCamera2,
  Raycaster,
  SRGBColorSpace as SRGBColorSpace2,
  Scene as Scene3,
  Sprite,
  Vector2,
  Vector3,
  WebGLRenderer as WebGLRenderer3
} from "three";
import { LinearFilter as LinearFilter2 } from "three";
import { EquirectangularReflectionMapping } from "three";
import { jsx as jsx29, jsxs as jsxs18 } from "react/jsx-runtime";
var nullTarget, interpolatePosition, positionToString, getPositionValues, isEqualPosition, cameraSpringConfig, chunkSpringConfig, opacitySpringConfig, EarthContext, Earth, EarthSection, init_earth2 = __esm({
  "app/routes/projects.smart-sparrow/earth.jsx"() {
    init_earth();
    init_milkyway_nx();
    init_milkyway_ny();
    init_milkyway_nz();
    init_milkyway_px();
    init_milkyway_py();
    init_milkyway_pz();
    init_milkyway();
    init_loader2();
    init_section2();
    init_theme();
    init_transition2();
    init_hooks();
    init_clamp();
    init_style();
    init_three();
    init_throttle();
    init_earth_module();
    nullTarget = { x: 0, y: 0, z: 2 }, interpolatePosition = (value, nextValue, percent) => value + percent * (nextValue - value), positionToString = (value) => Object.keys(value).map((key) => parseFloat(Math.round(value[key] * 100) / 100).toFixed(2)).join(", "), getPositionValues = (section) => !section || !section.camera ? nullTarget : {
      x: section.camera[0],
      y: section.camera[1],
      z: section.camera[2]
    }, isEqualPosition = (position1, position2) => {
      let round = (num = 0) => Math.round((num + Number.EPSILON) * 100) / 100;
      return round(position1?.x) === round(position2?.x) && round(position1?.y) === round(position2?.y) && round(position1?.z) === round(position2?.z);
    }, cameraSpringConfig = {
      stiffness: 80,
      damping: 40,
      mass: 2,
      restSpeed: 1e-3,
      restDelta: 1e-3
    }, chunkSpringConfig = {
      stiffness: 40,
      damping: 30,
      mass: 2,
      restSpeed: 1e-3,
      restDelta: 1e-3
    }, opacitySpringConfig = {
      stiffness: 40,
      damping: 30
    }, EarthContext = createContext3({}), Earth = ({
      position = [0, 0, 0],
      scale = 1,
      hideMeshes = [],
      labels = [],
      className,
      children
    }) => {
      let [loaded, setLoaded] = useState12(!1), [grabbing, setGrabbing] = useState12(!1), [visible, setVisible] = useState12(!1), [loaderVisible, setLoaderVisible] = useState12(!1), sectionRefs = useRef14([]), container = useRef14(), labelContainer = useRef14(), canvas = useRef14(), scene = useRef14(), renderer = useRef14(), camera = useRef14(), clock = useRef14(), mouse = useRef14(), raycaster = useRef14(), sceneModel = useRef14(), animations = useRef14(), mixer = useRef14(), inViewport = useInViewport(canvas), animationFrame = useRef14(), initCameraPosition = useRef14(getPositionValues(sectionRefs.current[0])), labelElements = useRef14([]), controls = useRef14(), envMap = useRef14(), contentAdded = useRef14(), mounted = useRef14(), { width: windowWidth, height: windowHeight } = useWindowSize(), reduceMotion = useReducedMotion8(), cameraXSpring = useSpring3(0, cameraSpringConfig), cameraYSpring = useSpring3(0, cameraSpringConfig), cameraZSpring = useSpring3(0, cameraSpringConfig), chunkXSpring = useSpring3(0, chunkSpringConfig), chunkYSpring = useSpring3(0, chunkSpringConfig), chunkZSpring = useSpring3(0, chunkSpringConfig), opacitySpring = useSpring3(0, opacitySpringConfig), renderFrame = useCallback7(() => {
        if (!inViewport) {
          cancelAnimationFrame(animationFrame.current);
          return;
        }
        animationFrame.current = requestAnimationFrame(renderFrame);
        let delta = clock.current.getDelta();
        mixer.current.update(delta), controls.current.update(), renderer.current.render(scene.current, camera.current), labelElements.current.forEach((label) => {
          let { element, position: position2, sprite } = label, vector = new Vector3(...position2), meshDistance = camera.current.position.distanceTo(
            sceneModel.current.position
          ), spriteBehindObject = camera.current.position.distanceTo(sprite.position) > meshDistance;
          vector.project(camera.current), vector.x = Math.round((0.5 + vector.x / 2) * window.innerWidth), vector.y = Math.round((0.5 - vector.y / 2) * window.innerHeight), element.style.setProperty("--posX", numToPx(vector.x)), element.style.setProperty("--posY", numToPx(vector.y)), spriteBehindObject ? element.dataset.occluded = !0 : element.dataset.occluded = !1;
        });
      }, [inViewport]);
      useEffect16(() => {
        mounted.current = !0;
        let { innerWidth, innerHeight } = window;
        renderer.current = new WebGLRenderer3({
          canvas: canvas.current,
          antialias: !1,
          alpha: !0,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: !0
        }), renderer.current.setPixelRatio(1), renderer.current.outputColorSpace = SRGBColorSpace2, renderer.current.toneMapping = ACESFilmicToneMapping2, camera.current = new PerspectiveCamera2(54, innerWidth / innerHeight, 0.1, 100), camera.current.position.x = initCameraPosition.current.x, camera.current.position.y = initCameraPosition.current.y, camera.current.position.z = initCameraPosition.current.z, camera.current.lookAt(0, 0, 0), cameraXSpring.set(camera.current.position.x, !1), cameraYSpring.set(camera.current.position.y, !1), cameraZSpring.set(camera.current.position.z, !1), scene.current = new Scene3(), clock.current = new Clock(), raycaster.current = new Raycaster();
        let ambientLight = new AmbientLight(2236962, 0.05), dirLight = new DirectionalLight2(16777215, 1.5);
        dirLight.position.set(3, 0, 1);
        let lights = [ambientLight, dirLight];
        return lights.forEach((light2) => scene.current.add(light2)), controls.current = new OrbitControls(camera.current, canvas.current), controls.current.enableZoom = !1, controls.current.enablePan = !1, controls.current.enableDamping = !1, controls.current.rotateSpeed = 0.5, () => {
          mounted.current = !1, cancelAnimationFrame(animationFrame.current), removeLights(lights), cleanScene(scene.current), cleanRenderer(renderer.current);
        };
      }, []), useEffect16(() => {
        let handleControlStart = () => {
          setGrabbing(!0), cameraXSpring.stop(), cameraYSpring.stop(), cameraZSpring.stop();
        }, handleControlEnd = () => {
          cameraXSpring.set(camera.current.position.x, !1), cameraYSpring.set(camera.current.position.y, !1), cameraZSpring.set(camera.current.position.z, !1), setGrabbing(!1);
        };
        return controls.current.addEventListener("start", handleControlStart), controls.current.addEventListener("end", handleControlEnd), () => {
          controls.current.removeEventListener("start", handleControlStart), controls.current.removeEventListener("end", handleControlEnd);
        };
      }, [cameraXSpring, cameraYSpring, cameraZSpring]), useEffect16(
        () => {
          if (!loaded)
            return;
          let chunk = getChild("Chunk", sceneModel.current), atmosphere = getChild("Atmosphere", sceneModel.current), handleCameraChange = (axis, value) => {
            camera.current.position[axis] = value;
          }, unsubscribeCameraX = cameraXSpring.on(
            "change",
            (value) => handleCameraChange("x", value)
          ), unsubscribeCameraY = cameraYSpring.on(
            "change",
            (value) => handleCameraChange("y", value)
          ), unsubscribeCameraZ = cameraZSpring.on(
            "change",
            (value) => handleCameraChange("z", value)
          ), handleChunkChange = (axis, value) => {
            chunk.position[axis] = value;
          }, unsubscribeChunkX = chunkXSpring.on(
            "change",
            (value) => handleChunkChange("x", value)
          ), unsubscribeChunkY = chunkYSpring.on(
            "change",
            (value) => handleChunkChange("y", value)
          ), unsubscribeChunkZ = chunkZSpring.on(
            "change",
            (value) => handleChunkChange("z", value)
          ), unsubscribeOpacity = opacitySpring.on("change", (value) => {
            atmosphere.material.opacity = value;
          });
          return () => {
            unsubscribeCameraX(), unsubscribeCameraY(), unsubscribeCameraZ(), unsubscribeChunkX(), unsubscribeChunkY(), unsubscribeChunkZ(), unsubscribeOpacity();
          };
        },
        [
          cameraXSpring,
          cameraYSpring,
          cameraZSpring,
          chunkXSpring,
          chunkYSpring,
          chunkZSpring,
          loaded,
          opacitySpring
        ]
      ), useEffect16(() => {
        windowWidth <= media.tablet && (controls.current.enabled = !1);
      }, [windowWidth]), useEffect16(() => {
        if (loaded)
          return;
        let hdrLoader = new HDRCubeTextureLoader(), pmremGenerator = new PMREMGenerator2(renderer.current);
        pmremGenerator.compileCubemapShader();
        let loadModel = async () => {
          let gltf = await modelLoader.loadAsync(earth_default);
          sceneModel.current = gltf.scene, animations.current = gltf.animations, mixer.current = new AnimationMixer(sceneModel.current), mixer.current.timeScale = 0.1, sceneModel.current.traverse(async (child) => {
            let { material, name: name2 } = child;
            name2 === "Atmosphere" && (material.alphaMap = material.map), material && await renderer.current.initTexture(material);
          }), sceneModel.current.position.x = position[0], sceneModel.current.position.y = position[1], sceneModel.current.position.z = position[2], sceneModel.current.scale.x = scale, sceneModel.current.scale.y = scale, sceneModel.current.scale.z = scale;
        }, loadEnv = async () => {
          let hdrTexture = await hdrLoader.loadAsync([milkyway_nx_default, milkyway_ny_default, milkyway_nz_default, milkyway_px_default, milkyway_py_default, milkyway_pz_default]);
          hdrTexture.magFilter = LinearFilter2, envMap.current = pmremGenerator.fromCubemap(hdrTexture), pmremGenerator.dispose(), await renderer.current.initTexture(envMap.current.texture);
        }, loadBackground = async () => {
          let backgroundTexture = await textureLoader.loadAsync(milkyway_default);
          backgroundTexture.mapping = EquirectangularReflectionMapping, backgroundTexture.colorSpace = SRGBColorSpace2, scene.current.background = backgroundTexture, await renderer.current.initTexture(backgroundTexture);
        }, handleLoad = async () => {
          await Promise.all([loadBackground(), loadEnv(), loadModel()]), sceneModel.current.traverse(({ material }) => {
            material && (material.envMap = envMap.current.texture, material.needsUpdate = !0);
          }), mounted.current && setLoaded(!0);
        };
        startTransition2(() => {
          handleLoad(), setTimeout(() => {
            setLoaderVisible(!0);
          }, 1e3);
        });
      }, [loaded, position, scale]), useEffect16(() => (loaded && !contentAdded.current && (scene.current.add(sceneModel.current), contentAdded.current = !0), loaded && inViewport && (setVisible(!0), renderFrame()), () => {
        cancelAnimationFrame(animationFrame.current);
      }), [renderFrame, inViewport, loaded]), useEffect16(() => {
        loaded && (labelContainer.current.innerHTML = "", labelElements.current = labels.map((label) => {
          let element = document.createElement("div");
          element.classList.add(earth_module_default.label), element.dataset.hidden = !0, element.style.setProperty("--delay", `${label.delay || 0}ms`), element.textContent = label.text, labelContainer.current.appendChild(element);
          let sprite = new Sprite();
          return sprite.position.set(...label.position), sprite.scale.set(60, 60, 1), { element, ...label, sprite };
        }));
      }, [labels, loaded]), useEffect16(() => {
        renderer.current.setSize(windowWidth, windowHeight), camera.current.aspect = windowWidth / windowHeight, camera.current.updateProjectionMatrix();
      }, [windowWidth, windowHeight]), useEffect16(() => {
        let currentCanvas = canvas.current, handleMouseUp = (event) => {
          let { innerWidth, innerHeight } = window, cameraPosition = positionToString(camera.current.position);
          console.info({ cameraPosition }), mouse.current = new Vector2(
            event.clientX / innerWidth * 2 - 1,
            -(event.clientY / innerHeight) * 2 + 1
          ), raycaster.current.setFromCamera(mouse.current, camera.current);
          let intersects = raycaster.current.intersectObjects(scene.current.children, !0);
          if (intersects.length > 0) {
            let clickPosition = positionToString(intersects[0].point);
            console.info({ clickPosition });
          }
        };
        return () => {
          currentCanvas.removeEventListener("click", handleMouseUp);
        };
      }, []);
      let handleScroll = useCallback7(
        () => {
          if (!container.current)
            return;
          let { offsetTop } = container.current, { innerHeight } = window, currentScrollY = window.scrollY - offsetTop, prevTarget, updateMeshes = (index) => {
            let visibleMeshes = sectionRefs.current[index].meshes;
            sceneModel.current.traverse((child) => {
              let { name: name2 } = child, chunk = getChild("Chunk", sceneModel.current), isVisible = visibleMeshes?.includes(name2), isHidden = hideMeshes?.includes(name2);
              if (isVisible)
                if (name2 === "Atmosphere")
                  child.visible = !0, opacitySpring.set(1);
                else if (name2 === "Chunk") {
                  let chunkTarget = new Vector3(-0.4, 0.4, 0.4);
                  child.visible = !0, reduceMotion ? child.position.set(...chunkTarget.toArray()) : (chunkXSpring.set(chunkTarget.x), chunkYSpring.set(chunkTarget.y), chunkZSpring.set(chunkTarget.z));
                } else
                  name2 === "EarthFull" && chunk.visible ? child.visible = !1 : child.visible = !0;
              else if (isHidden && !isVisible)
                if (name2 === "Atmosphere")
                  opacitySpring.set(0);
                else if (name2 === "Chunk") {
                  let chunkTarget = new Vector3(0, 0, 0);
                  isEqualPosition(chunkTarget, chunk.position) && (child.visible = !1), chunkXSpring.set(chunkTarget.x), chunkYSpring.set(chunkTarget.y), chunkZSpring.set(chunkTarget.z);
                } else
                  name2 === "EarthPartial" && chunk.visible ? child.visible = !0 : child.visible = !1;
            });
          }, updateAnimation = (index) => {
            let sectionAnimations = sectionRefs.current[index].animations;
            reduceMotion || (animations.current.forEach((clip, index2) => {
              sectionAnimations.find((section) => section.includes(index2.toString())) || mixer.current.clipAction(clip).reset().stop();
            }), animations.current.length && sectionRefs.current[index].animations && sectionAnimations.forEach((animItem) => {
              let values = animItem.split(":"), clip = animations.current[Number(values[0])], animation = mixer.current.clipAction(clip);
              (!values[1] || values[1] !== "loop") && (animation.clampWhenFinished = !0, animation.loop = LoopOnce), animation.play();
            }));
          }, updateLabels = (index) => {
            labelElements.current.forEach((label) => {
              label.hidden && (label.element.dataset.hidden = !0, label.element.setAttribute("aria-hidden", !0));
            }), sectionRefs.current[index].labels.forEach((label) => {
              labelElements.current.filter((item) => item.text === label).forEach((match) => {
                match.element.dataset.hidden = !1, match.element.setAttribute("aria-hidden", !1);
              });
            });
          };
          requestAnimationFrame(() => {
            let sectionCount = sectionRefs.current.length - 1, absoluteSection = Math.floor(currentScrollY / innerHeight), currentSectionIndex = clamp(absoluteSection, 0, sectionCount), currentSection = sectionRefs.current[currentSectionIndex], nextSection = sectionRefs.current[currentSectionIndex + 1], currentTarget = getPositionValues(currentSection) || nullTarget, nextTarget = getPositionValues(nextSection) || nullTarget, sectionScrolled = (currentScrollY - innerHeight * currentSectionIndex) / innerHeight, scrollPercent = clamp(sectionScrolled, 0, 1), currentX = interpolatePosition(currentTarget.x, nextTarget.x, scrollPercent), currentY = interpolatePosition(currentTarget.y, nextTarget.y, scrollPercent), currentZ = interpolatePosition(currentTarget.z, nextTarget.z, scrollPercent);
            if (prevTarget !== currentTarget && sectionRefs.current.length && currentSection && (updateMeshes(currentSectionIndex), updateAnimation(currentSectionIndex), updateLabels(currentSectionIndex)), prevTarget = currentTarget, !grabbing) {
              if (reduceMotion) {
                camera.current.position.set(currentX, currentY, currentZ);
                return;
              }
              cameraXSpring.set(currentX), cameraYSpring.set(currentY), cameraZSpring.set(currentZ);
            }
          });
        },
        [
          cameraXSpring,
          cameraYSpring,
          cameraZSpring,
          chunkXSpring,
          chunkYSpring,
          chunkZSpring,
          grabbing,
          hideMeshes,
          opacitySpring,
          reduceMotion
        ]
      );
      useEffect16(() => {
        let throttledScroll = throttle(handleScroll, 100);
        return loaded && inViewport && window.addEventListener("scroll", throttledScroll), () => {
          window.removeEventListener("scroll", throttledScroll);
        };
      }, [handleScroll, inViewport, loaded, opacitySpring]);
      let registerSection = useCallback7((section) => {
        sectionRefs.current = [...sectionRefs.current, section];
      }, []), unregisterSection = useCallback7((section) => {
        sectionRefs.current = sectionRefs.current.filter((item) => item !== section);
      }, []);
      return /* @__PURE__ */ jsx29(EarthContext.Provider, { value: { registerSection, unregisterSection }, children: /* @__PURE__ */ jsxs18("div", { className: classes(earth_module_default.earth, className), ref: container, children: [
        /* @__PURE__ */ jsxs18("div", { className: earth_module_default.viewport, children: [
          /* @__PURE__ */ jsx29(
            "canvas",
            {
              className: earth_module_default.canvas,
              "data-visible": loaded && visible,
              "data-grabbing": grabbing,
              ref: canvas
            }
          ),
          /* @__PURE__ */ jsx29("div", { className: earth_module_default.labels, "aria-live": "polite", ref: labelContainer }),
          /* @__PURE__ */ jsx29("div", { className: earth_module_default.vignette })
        ] }),
        /* @__PURE__ */ jsx29("div", { className: earth_module_default.sections, children }),
        /* @__PURE__ */ jsx29(
          Transition,
          {
            unmount: !0,
            in: !loaded && loaderVisible,
            timeout: msToNum(tokens.base.durationL),
            children: (visible2) => /* @__PURE__ */ jsx29(Section, { className: earth_module_default.loader, "data-visible": visible2, children: /* @__PURE__ */ jsx29(Loader, {}) })
          }
        )
      ] }) });
    }, EarthSection = memo2(
      ({
        children,
        scrim,
        scrimReverse,
        className,
        camera = [0, 0, 0],
        animations = [],
        meshes = [],
        labels = []
      }) => {
        let { registerSection, unregisterSection } = useContext3(EarthContext), sectionRef = useRef14(), stringifiedDeps = JSON.stringify(animations) + JSON.stringify(camera) + JSON.stringify(labels) + JSON.stringify(meshes);
        return useEffect16(() => {
          let section = {
            camera,
            animations,
            meshes,
            labels,
            sectionRef
          };
          return registerSection(section), () => {
            unregisterSection(section);
          };
        }, [stringifiedDeps, registerSection, unregisterSection]), /* @__PURE__ */ jsx29(
          "div",
          {
            className: classes(earth_module_default.section, className),
            "data-scrim": scrim,
            "data-scrim-reverse": scrimReverse,
            ref: sectionRef,
            children
          }
        );
      }
    );
  }
});

// app/assets/iphone-11.glb
var iphone_11_default, init_iphone_11 = __esm({
  "app/assets/iphone-11.glb"() {
    iphone_11_default = "/assets/_assets/iphone-11-S4EFIVYB.glb";
  }
});

// app/assets/macbook-pro.glb
var macbook_pro_default, init_macbook_pro = __esm({
  "app/assets/macbook-pro.glb"() {
    macbook_pro_default = "/assets/_assets/macbook-pro-C6DU7EB5.glb";
  }
});

// app/components/model/device-models.js
var ModelAnimationType, deviceModels, init_device_models = __esm({
  "app/components/model/device-models.js"() {
    init_iphone_11();
    init_macbook_pro();
    ModelAnimationType = {
      SpringUp: "spring-up",
      LaptopOpen: "laptop-open"
    }, deviceModels = {
      phone: {
        url: iphone_11_default,
        width: 374,
        height: 512,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.SpringUp
      },
      laptop: {
        url: macbook_pro_default,
        width: 1280,
        height: 800,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.LaptopOpen
      }
    };
  }
});

// app/components/model/model.module.css
var model_module_default, init_model_module = __esm({
  "app/components/model/model.module.css"() {
    model_module_default = { model: "qMqUg", canvas: "iryn2" };
  }
});

// app/components/model/model.jsx
import { animate as animate2, useReducedMotion as useReducedMotion9, useSpring as useSpring4 } from "framer-motion";
import {
  createRef,
  startTransition as startTransition3,
  useCallback as useCallback8,
  useEffect as useEffect18,
  useRef as useRef15,
  useState as useState15
} from "react";
import {
  AmbientLight as AmbientLight2,
  Color as Color2,
  DirectionalLight as DirectionalLight3,
  Group as Group2,
  MathUtils as MathUtils2,
  Mesh as Mesh2,
  MeshBasicMaterial,
  MeshDepthMaterial,
  OrthographicCamera as OrthographicCamera2,
  PerspectiveCamera as PerspectiveCamera3,
  PlaneGeometry as PlaneGeometry2,
  SRGBColorSpace as SRGBColorSpace3,
  Scene as Scene4,
  ShaderMaterial as ShaderMaterial2,
  Vector3 as Vector32,
  WebGLRenderTarget,
  WebGLRenderer as WebGLRenderer4
} from "three";
import { HorizontalBlurShader, VerticalBlurShader } from "three-stdlib";
import { jsx as jsx37, jsxs as jsxs26 } from "react/jsx-runtime";
var MeshType, rotationSpringConfig2, Model, Device, init_model = __esm({
  "app/components/model/model.jsx"() {
    init_hooks();
    init_image();
    init_style();
    init_three();
    init_device_models();
    init_throttle();
    init_model_module();
    MeshType = {
      Frame: "Frame",
      Logo: "Logo",
      Screen: "Screen"
    }, rotationSpringConfig2 = {
      stiffness: 40,
      damping: 20,
      mass: 1.4,
      restSpeed: 1e-3
    }, Model = ({
      models,
      show = !0,
      showDelay = 0,
      cameraPosition = { x: 0, y: 0, z: 8 },
      style,
      className,
      onLoad,
      alt,
      ...rest
    }) => {
      let [loaded, setLoaded] = useState15(!1), container = useRef15(), canvas = useRef15(), camera = useRef15(), modelGroup = useRef15(), scene = useRef15(), renderer = useRef15(), shadowGroup = useRef15(), renderTarget = useRef15(), renderTargetBlur = useRef15(), shadowCamera = useRef15(), depthMaterial = useRef15(), horizontalBlurMaterial = useRef15(), verticalBlurMaterial = useRef15(), plane = useRef15(), lights = useRef15(), blurPlane = useRef15(), fillPlane = useRef15(), isInViewport = useInViewport(container, !1, { threshold: 0.2 }), reduceMotion = useReducedMotion9(), rotationX = useSpring4(0, rotationSpringConfig2), rotationY = useSpring4(0, rotationSpringConfig2);
      useEffect18(() => {
        let { clientWidth, clientHeight } = container.current;
        renderer.current = new WebGLRenderer4({
          canvas: canvas.current,
          alpha: !0,
          antialias: !1,
          powerPreference: "high-performance",
          failIfMajorPerformanceCaveat: !0
        }), renderer.current.setPixelRatio(2), renderer.current.setSize(clientWidth, clientHeight), renderer.current.outputColorSpace = SRGBColorSpace3, camera.current = new PerspectiveCamera3(36, clientWidth / clientHeight, 0.1, 100), camera.current.position.set(cameraPosition.x, cameraPosition.y, cameraPosition.z), scene.current = new Scene4(), modelGroup.current = new Group2(), scene.current.add(modelGroup.current);
        let ambientLight = new AmbientLight2(16777215, 1.2), keyLight = new DirectionalLight3(16777215, 1.1), fillLight = new DirectionalLight3(16777215, 0.8);
        fillLight.position.set(-6, 2, 2), keyLight.position.set(0.5, 0, 0.866), lights.current = [ambientLight, keyLight, fillLight], lights.current.forEach((light2) => scene.current.add(light2)), shadowGroup.current = new Group2(), scene.current.add(shadowGroup.current), shadowGroup.current.position.set(0, 0, -0.8), shadowGroup.current.rotateX(Math.PI / 2);
        let renderTargetSize = 512, planeWidth = 8, planeHeight = 8, cameraHeight = 1.5, shadowOpacity = 0.8, shadowDarkness = 3;
        renderTarget.current = new WebGLRenderTarget(renderTargetSize, renderTargetSize), renderTarget.current.texture.generateMipmaps = !1, renderTargetBlur.current = new WebGLRenderTarget(renderTargetSize, renderTargetSize), renderTargetBlur.current.texture.generateMipmaps = !1;
        let planeGeometry = new PlaneGeometry2(planeWidth, planeHeight).rotateX(Math.PI / 2), planeMaterial = new MeshBasicMaterial({
          map: renderTarget.current.texture,
          opacity: shadowOpacity,
          transparent: !0
        });
        plane.current = new Mesh2(planeGeometry, planeMaterial), plane.current.scale.y = -1, shadowGroup.current.add(plane.current), blurPlane.current = new Mesh2(planeGeometry), blurPlane.current.visible = !1, shadowGroup.current.add(blurPlane.current);
        let fillMaterial = new MeshBasicMaterial({
          color: 16777215,
          opacity: 0,
          transparent: !0
        });
        fillPlane.current = new Mesh2(planeGeometry, fillMaterial), fillPlane.current.rotateX(Math.PI), fillPlane.current.position.y -= 1e-5, shadowGroup.current.add(fillPlane.current), shadowCamera.current = new OrthographicCamera2(
          -planeWidth / 2,
          planeWidth / 2,
          planeHeight / 2,
          -planeHeight / 2,
          0,
          cameraHeight
        ), shadowCamera.current.rotation.x = Math.PI / 2, shadowGroup.current.add(shadowCamera.current), depthMaterial.current = new MeshDepthMaterial(), depthMaterial.current.userData.darkness = { value: shadowDarkness }, depthMaterial.current.onBeforeCompile = (shader) => {
          shader.uniforms.darkness = depthMaterial.current.userData.darkness, shader.fragmentShader = `
        uniform float darkness;
        ${shader.fragmentShader.replace(
            "gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );",
            "gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );"
          )}
      `;
        }, depthMaterial.current.depthTest = !1, depthMaterial.current.depthWrite = !1, horizontalBlurMaterial.current = new ShaderMaterial2(HorizontalBlurShader), horizontalBlurMaterial.current.depthTest = !1, verticalBlurMaterial.current = new ShaderMaterial2(VerticalBlurShader), verticalBlurMaterial.current.depthTest = !1;
        let unsubscribeX = rotationX.on("change", renderFrame), unsubscribeY = rotationY.on("change", renderFrame);
        return () => {
          renderTarget.current.dispose(), renderTargetBlur.current.dispose(), removeLights(lights.current), cleanScene(scene.current), cleanRenderer(renderer.current), unsubscribeX(), unsubscribeY();
        };
      }, []);
      let blurShadow = useCallback8((amount) => {
        blurPlane.current.visible = !0, blurPlane.current.material = horizontalBlurMaterial.current, blurPlane.current.material.uniforms.tDiffuse.value = renderTarget.current.texture, horizontalBlurMaterial.current.uniforms.h.value = amount * (1 / 256), renderer.current.setRenderTarget(renderTargetBlur.current), renderer.current.render(blurPlane.current, shadowCamera.current), blurPlane.current.material = verticalBlurMaterial.current, blurPlane.current.material.uniforms.tDiffuse.value = renderTargetBlur.current.texture, verticalBlurMaterial.current.uniforms.v.value = amount * (1 / 256), renderer.current.setRenderTarget(renderTarget.current), renderer.current.render(blurPlane.current, shadowCamera.current), blurPlane.current.visible = !1;
      }, []), renderFrame = useCallback8(() => {
        let initialBackground = scene.current.background;
        scene.current.background = null, scene.current.overrideMaterial = depthMaterial.current, renderer.current.setRenderTarget(renderTarget.current), renderer.current.render(scene.current, shadowCamera.current), scene.current.overrideMaterial = null, blurShadow(5), blurShadow(5 * 0.4), renderer.current.setRenderTarget(null), scene.current.background = initialBackground, modelGroup.current.rotation.x = rotationX.get(), modelGroup.current.rotation.y = rotationY.get(), renderer.current.render(scene.current, camera.current);
      }, [blurShadow, rotationX, rotationY]);
      return useEffect18(() => {
        let onMouseMove = throttle((event) => {
          let { innerWidth, innerHeight } = window, position = {
            x: (event.clientX - innerWidth / 2) / innerWidth,
            y: (event.clientY - innerHeight / 2) / innerHeight
          };
          rotationY.set(position.x / 2), rotationX.set(position.y / 2);
        }, 100);
        return isInViewport && !reduceMotion && window.addEventListener("mousemove", onMouseMove), () => {
          window.removeEventListener("mousemove", onMouseMove);
        };
      }, [isInViewport, reduceMotion, rotationX, rotationY]), useEffect18(() => {
        let handleResize = () => {
          if (!container.current)
            return;
          let { clientWidth, clientHeight } = container.current;
          renderer.current.setSize(clientWidth, clientHeight), camera.current.aspect = clientWidth / clientHeight, camera.current.updateProjectionMatrix(), renderFrame();
        };
        return window.addEventListener("resize", handleResize), handleResize(), () => {
          window.removeEventListener("resize", handleResize);
        };
      }, [renderFrame]), /* @__PURE__ */ jsxs26(
        "div",
        {
          className: classes(model_module_default.model, className),
          "data-loaded": loaded,
          style: cssProps({ delay: numToMs(showDelay) }, style),
          ref: container,
          role: "img",
          "aria-label": alt,
          ...rest,
          children: [
            /* @__PURE__ */ jsx37("canvas", { className: model_module_default.canvas, ref: canvas }),
            models.map(
              (model, index) => /* @__PURE__ */ jsx37(
                Device,
                {
                  renderer,
                  modelGroup,
                  show,
                  showDelay,
                  renderFrame,
                  index,
                  setLoaded,
                  onLoad,
                  model
                },
                JSON.stringify(model.position)
              )
            )
          ]
        }
      );
    }, Device = ({
      renderer,
      model,
      modelGroup,
      renderFrame,
      index,
      showDelay,
      setLoaded,
      onLoad,
      show
    }) => {
      let [loadDevice, setLoadDevice] = useState15(), reduceMotion = useReducedMotion9(), placeholderScreen = createRef();
      useEffect18(() => {
        let applyScreenTexture = async (texture, node) => {
          texture.colorSpace = SRGBColorSpace3, texture.flipY = !1, texture.anisotropy = renderer.current.capabilities.getMaxAnisotropy(), texture.generateMipmaps = !1, await renderer.current.initTexture(texture), node.material.color = new Color2(16777215), node.material.transparent = !0, node.material.map = texture;
        };
        setLoadDevice({ start: async () => {
          let { texture, position, url: url2 } = model, loadFullResTexture, playAnimation, [placeholder, gltf] = await Promise.all(
            [
              await textureLoader.loadAsync(texture.placeholder),
              await modelLoader.loadAsync(url2)
            ]
          );
          modelGroup.current.add(gltf.scene), gltf.scene.traverse(async (node) => {
            node.material && (node.material.color = new Color2(2039845)), node.name === MeshType.Screen && (placeholderScreen.current = node.clone(), placeholderScreen.current.material = node.material.clone(), node.parent.add(placeholderScreen.current), placeholderScreen.current.material.opacity = 1, placeholderScreen.current.position.z += 1e-3, applyScreenTexture(placeholder, placeholderScreen.current), loadFullResTexture = async () => {
              let image = await resolveSrcFromSrcSet(texture), fullSize = await textureLoader.loadAsync(image);
              await applyScreenTexture(fullSize, node), animate2(1, 0, {
                onUpdate: (value) => {
                  placeholderScreen.current.material.opacity = value, renderFrame();
                }
              });
            });
          });
          let targetPosition = new Vector32(position.x, position.y, position.z);
          return reduceMotion && gltf.scene.position.set(...targetPosition.toArray()), model.animation === ModelAnimationType.SpringUp && (playAnimation = () => {
            let startPosition = new Vector32(
              targetPosition.x,
              targetPosition.y - 1,
              targetPosition.z
            );
            gltf.scene.position.set(...startPosition.toArray()), animate2(startPosition.y, targetPosition.y, {
              type: "spring",
              delay: (300 * index + showDelay) / 1e3,
              stiffness: 60,
              damping: 20,
              mass: 1,
              restSpeed: 1e-4,
              restDelta: 1e-4,
              onUpdate: (value) => {
                gltf.scene.position.y = value, renderFrame();
              }
            });
          }), model.animation === ModelAnimationType.LaptopOpen && (playAnimation = () => {
            let frameNode = gltf.scene.children.find(
              (node) => node.name === MeshType.Frame
            ), startRotation = new Vector32(MathUtils2.degToRad(90), 0, 0), endRotation = new Vector32(0, 0, 0);
            return gltf.scene.position.set(...targetPosition.toArray()), frameNode.rotation.set(...startRotation.toArray()), animate2(startRotation.x, endRotation.x, {
              type: "spring",
              delay: (300 * index + showDelay + 300) / 1e3,
              stiffness: 80,
              damping: 20,
              restSpeed: 1e-4,
              restDelta: 1e-4,
              onUpdate: (value) => {
                frameNode.rotation.x = value, renderFrame();
              }
            });
          }), { loadFullResTexture, playAnimation };
        } });
      }, []), useEffect18(() => {
        if (!loadDevice || !show)
          return;
        let animation, onModelLoad = async () => {
          let { loadFullResTexture, playAnimation } = await loadDevice.start();
          setLoaded(!0), onLoad?.(), reduceMotion || (animation = playAnimation()), await loadFullResTexture(), reduceMotion && renderFrame();
        };
        return startTransition3(() => {
          onModelLoad();
        }), () => {
          animation?.stop();
        };
      }, [loadDevice, show]);
    };
  }
});

// app/components/model/index.js
var model_exports = {};
__export(model_exports, {
  Model: () => Model
});
var init_model2 = __esm({
  "app/components/model/index.js"() {
    init_model();
  }
});

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.cloudflare.tsx
var entry_server_cloudflare_exports = {};
__export(entry_server_cloudflare_exports, {
  default: () => handleRequest
});
import { RemixServer } from "@remix-run/react";
import * as isbotModule from "isbot";
import { renderToReadableStream } from "react-dom/server";
import { jsx } from "react/jsx-runtime";
async function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  let body = await renderToReadableStream(
    /* @__PURE__ */ jsx(RemixServer, { context: remixContext, url: request.url }),
    {
      signal: request.signal,
      onError(error) {
        console.error(error), responseStatusCode = 500;
      }
    }
  );
  return isBotRequest(request.headers.get("user-agent")) && await body.allReady, responseHeaders.set("Content-Type", "text/html"), new Response(body, {
    headers: responseHeaders,
    status: responseStatusCode
  });
}
function isBotRequest(userAgent) {
  return userAgent ? "isbot" in isbotModule && typeof isbotModule.isbot == "function" ? isbotModule.isbot(userAgent) : "default" in isbotModule && typeof isbotModule.default == "function" ? isbotModule.default(userAgent) : !1 : !1;
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  loader: () => loader
});
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useFetcher,
  useLoaderData,
  useNavigation as useNavigation2,
  useRouteError
} from "@remix-run/react";
import { createCookieSessionStorage, json } from "@remix-run/cloudflare";

// app/assets/fonts/gotham-bold-italic.woff2
var gotham_bold_italic_default = "/assets/_assets/gotham-bold-italic-OLGVLVDA.woff2";

// app/assets/fonts/gotham-bold.woff2
var gotham_bold_default = "/assets/_assets/gotham-bold-YCA2Z2KD.woff2";

// app/assets/fonts/gotham-book-italic.woff2
var gotham_book_italic_default = "/assets/_assets/gotham-book-italic-GDMS7P5O.woff2";

// app/assets/fonts/gotham-book.woff2
var gotham_book_default = "/assets/_assets/gotham-book-6DKF6M3J.woff2";

// app/assets/fonts/gotham-medium-italic.woff2
var gotham_medium_italic_default = "/assets/_assets/gotham-medium-italic-7A76FGFF.woff2";

// app/assets/fonts/gotham-medium.woff2
var gotham_medium_default = "/assets/_assets/gotham-medium-ZMMBQFZI.woff2";

// app/assets/fonts/ipa-gothic.woff2
var ipa_gothic_default = "/assets/_assets/ipa-gothic-UH26V325.woff2";

// app/components/theme-provider/theme-provider.jsx
init_style();
init_theme();
import { createContext, useContext } from "react";
import { jsx as jsx2, jsxs } from "react/jsx-runtime";
var ThemeContext = createContext({}), ThemeProvider = ({
  theme = "dark",
  children,
  className,
  as: Component = "div",
  toggleTheme,
  ...rest
}) => {
  let parentTheme = useTheme(), isRootProvider = !parentTheme.theme;
  return /* @__PURE__ */ jsxs(
    ThemeContext.Provider,
    {
      value: {
        theme,
        toggleTheme: toggleTheme || parentTheme.toggleTheme
      },
      children: [
        isRootProvider && children,
        !isRootProvider && /* @__PURE__ */ jsx2(Component, { className: classes(className), "data-theme": theme, ...rest, children })
      ]
    }
  );
};
function useTheme() {
  return useContext(ThemeContext);
}
function squish(styles) {
  return styles.replace(/\s\s+/g, " ");
}
function createThemeProperties(theme) {
  return squish(
    Object.keys(theme).map((key) => `--${key}: ${theme[key]};`).join(`

`)
  );
}
function createMediaTokenProperties() {
  return squish(
    Object.keys(media).map((key) => `
        @media (max-width: ${media[key]}px) {
          :root {
            ${createThemeProperties(tokens[key])}
          }
        }
      `).join(`
`)
  );
}
var layerStyles = squish(`
  @layer theme, base, components, layout;
`), tokenStyles = squish(`
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
`), fontStyles = squish(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${gotham_book_default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${gotham_book_italic_default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${gotham_medium_default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${gotham_medium_italic_default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${gotham_bold_default}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${gotham_bold_italic_default}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${ipa_gothic_default}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`), themeStyles = squish(`
  ${layerStyles}

  @layer theme {
    ${tokenStyles}
    ${fontStyles}
  }
`);

// app/root.jsx
import { useEffect as useEffect11 } from "react";

// app/components/icon/icon.jsx
init_style();

// app/components/icon/icon.module.css
var icon_module_default = { icon: "r1Pyw" };

// app/components/icon/icon.jsx
import { forwardRef } from "react";

// app/components/icon/icons.svg
var icons_default = "/assets/_assets/icons-VRQHNTZT.svg";

// app/components/icon/icon.jsx
import { jsx as jsx3 } from "react/jsx-runtime";
var Icon = forwardRef(({ icon, className, size, ...rest }, ref) => /* @__PURE__ */ jsx3(
  "svg",
  {
    "aria-hidden": !0,
    ref,
    className: classes(icon_module_default.icon, className),
    width: size || 24,
    height: size || 24,
    ...rest,
    children: /* @__PURE__ */ jsx3("use", { href: `${icons_default}#${icon}` })
  }
));

// app/components/button/button.jsx
init_loader2();
init_transition2();
init_style();
import { Link } from "@remix-run/react";
import { forwardRef as forwardRef3 } from "react";

// app/components/button/button.module.css
var button_module_default = { button: "SARA3", text: "_4sqkJ", loader: "VfprI", icon: "eDsbl" };

// app/components/button/button.jsx
import { jsx as jsx7, jsxs as jsxs2 } from "react/jsx-runtime";
function isExternalLink(href) {
  return href?.includes("://");
}
var Button = forwardRef3(({ href, ...rest }, ref) => isExternalLink(href) || !href ? /* @__PURE__ */ jsx7(ButtonContent, { href, ref, ...rest }) : /* @__PURE__ */ jsx7(
  ButtonContent,
  {
    unstable_viewTransition: !0,
    as: Link,
    prefetch: "intent",
    to: href,
    ref,
    ...rest
  }
)), ButtonContent = forwardRef3(
  ({
    className,
    as,
    secondary,
    loading,
    loadingText = "loading",
    icon,
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
    let isExternal = isExternalLink(href);
    return /* @__PURE__ */ jsxs2(
      as || (href ? "a" : "button"),
      {
        className: classes(button_module_default.button, className),
        "data-loading": loading,
        "data-icon-only": iconOnly,
        "data-secondary": secondary,
        "data-icon": icon,
        href,
        rel: rel || isExternal ? "noopener noreferrer" : void 0,
        target: target || isExternal ? "_blank" : void 0,
        disabled,
        ref,
        ...rest,
        children: [
          !!icon && /* @__PURE__ */ jsx7(
            Icon,
            {
              className: button_module_default.icon,
              "data-start": !iconOnly,
              "data-shift": iconHoverShift,
              icon
            }
          ),
          !!children && /* @__PURE__ */ jsx7("span", { className: button_module_default.text, children }),
          !!iconEnd && /* @__PURE__ */ jsx7(
            Icon,
            {
              className: button_module_default.icon,
              "data-end": !iconOnly,
              "data-shift": iconHoverShift,
              icon: iconEnd
            }
          ),
          /* @__PURE__ */ jsx7(Transition, { unmount: !0, in: loading, children: ({ visible, nodeRef }) => /* @__PURE__ */ jsx7(
            Loader,
            {
              ref: nodeRef,
              className: button_module_default.loader,
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

// app/components/visually-hidden/visually-hidden.jsx
init_style();
import { forwardRef as forwardRef4 } from "react";

// app/components/visually-hidden/visually-hidden.module.css
var visually_hidden_module_default = { hidden: "JJv3L" };

// app/components/visually-hidden/visually-hidden.jsx
import { jsx as jsx8 } from "react/jsx-runtime";
var VisuallyHidden = forwardRef4(
  ({ className, showOnFocus, as: Component = "span", children, visible, ...rest }, ref) => /* @__PURE__ */ jsx8(
    Component,
    {
      className: classes(visually_hidden_module_default.hidden, className),
      "data-hidden": !visible && !showOnFocus,
      "data-show-on-focus": showOnFocus,
      ref,
      ...rest,
      children
    }
  )
);

// app/components/decoder-text/decoder-text.jsx
import { useReducedMotion as useReducedMotion2, useSpring } from "framer-motion";
import { memo, useEffect as useEffect2, useRef as useRef2 } from "react";

// app/utils/delay.js
async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// app/components/decoder-text/decoder-text.jsx
init_style();

// app/components/decoder-text/decoder-text.module.css
var decoder_text_module_default = { text: "BHlln", glyph: "atVYn", value: "NNNE7" };

// app/components/decoder-text/decoder-text.jsx
import { jsx as jsx9, jsxs as jsxs3 } from "react/jsx-runtime";
var glyphs = [
  "\u30A2",
  "\u30A4",
  "\u30A6",
  "\u30A8",
  "\u30AA",
  "\u30AB",
  "\u30AD",
  "\u30AF",
  "\u30B1",
  "\u30B3",
  "\u30B5",
  "\u30B7",
  "\u30B9",
  "\u30BB",
  "\u30BD",
  "\u30BF",
  "\u30C1",
  "\u30C4",
  "\u30C6",
  "\u30C8",
  "\u30CA",
  "\u30CB",
  "\u30CC",
  "\u30CD",
  "\u30CE",
  "\u30CF",
  "\u30D2",
  "\u30D5",
  "\u30D8",
  "\u30DB",
  "\u30DE",
  "\u30DF",
  "\u30E0",
  "\u30E1",
  "\u30E2",
  "\u30E4",
  "\u30E6",
  "\u30E8",
  "\u30FC",
  "\u30E9",
  "\u30EA",
  "\u30EB",
  "\u30EC",
  "\u30ED",
  "\u30EF",
  "\u30F0",
  "\u30F1",
  "\u30F2",
  "\u30F3",
  "\u30AC",
  "\u30AE",
  "\u30B0",
  "\u30B2",
  "\u30B4",
  "\u30B6",
  "\u30B8",
  "\u30BA",
  "\u30BC",
  "\u30BE",
  "\u30C0",
  "\u30C2",
  "\u30C5",
  "\u30C7",
  "\u30C9",
  "\u30D0",
  "\u30D3",
  "\u30D6",
  "\u30D9",
  "\u30DC",
  "\u30D1",
  "\u30D4",
  "\u30D7",
  "\u30DA",
  "\u30DD"
], CharType = {
  Glyph: "glyph",
  Value: "value"
};
function shuffle(content, output, position) {
  return content.map((value, index) => {
    if (index < position)
      return { type: CharType.Value, value };
    if (position % 1 < 0.5) {
      let rand = Math.floor(Math.random() * glyphs.length);
      return { type: CharType.Glyph, value: glyphs[rand] };
    }
    return { type: CharType.Glyph, value: output[index].value };
  });
}
var DecoderText = memo(
  ({ text, start = !0, delay: startDelay = 0, className, ...rest }) => {
    let output = useRef2([{ type: CharType.Glyph, value: "" }]), container = useRef2(), reduceMotion = useReducedMotion2(), decoderSpring = useSpring(0, { stiffness: 8, damping: 5 });
    return useEffect2(() => {
      let containerInstance = container.current, content = text.split(""), animation, renderOutput = () => {
        let characterMap = output.current.map((item) => `<span class="${decoder_text_module_default[item.type]}">${item.value}</span>`);
        containerInstance.innerHTML = characterMap.join("");
      }, unsubscribeSpring = decoderSpring.on("change", (value) => {
        output.current = shuffle(content, output.current, value), renderOutput();
      });
      return start && !animation && !reduceMotion && (async () => {
        await delay(startDelay), decoderSpring.set(content.length);
      })(), reduceMotion && (output.current = content.map((value, index) => ({
        type: CharType.Value,
        value: content[index]
      })), renderOutput()), () => {
        unsubscribeSpring?.();
      };
    }, [decoderSpring, reduceMotion, start, startDelay, text]), /* @__PURE__ */ jsxs3("span", { className: classes(decoder_text_module_default.text, className), ...rest, children: [
      /* @__PURE__ */ jsx9(VisuallyHidden, { className: decoder_text_module_default.label, children: text }),
      /* @__PURE__ */ jsx9("span", { "aria-hidden": !0, className: decoder_text_module_default.content, ref: container })
    ] });
  }
);

// app/components/heading/heading.jsx
init_style();
import { Fragment } from "react";

// app/components/heading/heading.module.css
var heading_module_default = { heading: "AdbmM" };

// app/components/heading/heading.jsx
import { jsx as jsx10 } from "react/jsx-runtime";
var Heading = ({
  children,
  level = 1,
  as,
  align = "auto",
  weight = "medium",
  className,
  ...rest
}) => {
  let clampedLevel = Math.min(Math.max(level, 0), 5), Component = as || `h${Math.max(clampedLevel, 1)}`;
  return /* @__PURE__ */ jsx10(Fragment, { children: /* @__PURE__ */ jsx10(
    Component,
    {
      className: classes(heading_module_default.heading, className),
      "data-align": align,
      "data-weight": weight,
      "data-level": clampedLevel,
      ...rest,
      children
    }
  ) });
};

// app/layouts/error/error.jsx
init_text2();
init_transition2();

// app/layouts/error/error.module.css
var error_module_default = { page: "SuB3S", videoContainer: "ogiG-", video: "tJ3c4", credit: "_0Go7a", details: "JIUmS", text: "CCYV5", title: "rojWg", titleFlatline: "XbGLm", subheading: "_13Erg", description: "Kr-QX", button: "g2Qxx" };

// app/layouts/error/error.jsx
import { Fragment as Fragment2, jsx as jsx11, jsxs as jsxs4 } from "react/jsx-runtime";
function Error2({ error }) {
  let getMessage = () => {
    switch (error.status) {
      case 404:
        return {
          summary: "Error 404: Offside!",
          message: "This page missed the mark \u2014 maybe it was transferred, benched, or simply doesn\u2019t exist. Let\u2019s get you back in play."
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
  }, { summary, message } = getMessage();
  return /* @__PURE__ */ jsx11("section", { className: error_module_default.page, children: /* @__PURE__ */ jsx11(Transition, { in: !0, children: ({ visible }) => /* @__PURE__ */ jsxs4(Fragment2, { children: [
    /* @__PURE__ */ jsx11("div", { className: error_module_default.details, children: /* @__PURE__ */ jsxs4("div", { className: error_module_default.text, children: [
      /* @__PURE__ */ jsx11(
        Heading,
        {
          className: error_module_default.title,
          "data-visible": visible,
          level: 0,
          weight: "bold",
          children: error.status
        }
      ),
      /* @__PURE__ */ jsx11(
        Heading,
        {
          "aria-hidden": !0,
          className: error_module_default.subheading,
          "data-visible": visible,
          as: "h2",
          level: 4,
          children: /* @__PURE__ */ jsx11(DecoderText, { text: summary, start: visible, delay: 300 })
        }
      ),
      /* @__PURE__ */ jsx11(Text, { className: error_module_default.description, "data-visible": visible, as: "p", children: message }),
      /* @__PURE__ */ jsx11(
        Button,
        {
          secondary: !0,
          iconHoverShift: !0,
          className: error_module_default.button,
          "data-visible": visible,
          href: "/",
          icon: "chevron-right",
          children: "Back to homepage"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx11("div", { className: error_module_default.videoContainer, "data-visible": visible })
  ] }) }) });
}

// app/components/monogram/monogram.jsx
init_style();
import { forwardRef as forwardRef5, useId } from "react";

// app/components/monogram/monogram.module.css
var monogram_module_default = { monogram: "UE7Gm", highlight: "VBeuZ" };

// app/components/monogram/monogram.jsx
import { jsx as jsx12, jsxs as jsxs5 } from "react/jsx-runtime";
var Monogram = forwardRef5(({ highlight, className, ...props }, ref) => {
  let clipId = `${useId()}monogram-clip`;
  return /* @__PURE__ */ jsxs5(
    "svg",
    {
      "aria-hidden": !0,
      className: classes(monogram_module_default.monogram, className),
      width: "48",
      height: "29",
      viewBox: "0 0 48 29",
      ref,
      ...props,
      children: [
        /* @__PURE__ */ jsx12("defs", { children: /* @__PURE__ */ jsx12("clipPath", { id: clipId, children: /* @__PURE__ */ jsx12("path", { d: "M0 0h6.5a6 6 0 0 1 5.2 3.1L19.4 17l4-9L19 0h6.5a6 6 0 0 1 5.2 3.1L39.5 19 35 29 24.5 10 16 29 0 0Zm46.7 2.8A2 2 0 0 0 45 0h-7l5.5 10 3.2-7.2Z" }) }) }),
        /* @__PURE__ */ jsx12("rect", { clipPath: `url(#${clipId})`, width: "100%", height: "100%" }),
        highlight && /* @__PURE__ */ jsx12("g", { clipPath: `url(#${clipId})`, children: /* @__PURE__ */ jsx12("rect", { className: monogram_module_default.highlight, width: "100%", height: "100%" }) })
      ]
    }
  );
});

// app/layouts/navbar/navbar.jsx
init_theme();
init_transition2();
init_hooks();
init_style();
import { Link as RouterLink, useLocation as useLocation2 } from "@remix-run/react";
import { useEffect as useEffect9, useRef as useRef7, useState as useState6 } from "react";

// app/layouts/navbar/nav-toggle.module.css
var nav_toggle_module_default = { toggle: "gctfR", inner: "O1kfu", icon: "lwp7P" };

// app/layouts/navbar/nav-toggle.jsx
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var NavToggle = ({ menuOpen, ...rest }) => /* @__PURE__ */ jsx13(
  Button,
  {
    iconOnly: !0,
    className: nav_toggle_module_default.toggle,
    "aria-label": "Menu",
    "aria-expanded": menuOpen,
    ...rest,
    children: /* @__PURE__ */ jsxs6("div", { className: nav_toggle_module_default.inner, children: [
      /* @__PURE__ */ jsx13(Icon, { className: nav_toggle_module_default.icon, "data-menu": !0, "data-open": menuOpen, icon: "menu" }),
      /* @__PURE__ */ jsx13(
        Icon,
        {
          className: nav_toggle_module_default.icon,
          "data-close": !0,
          "data-open": menuOpen,
          icon: "close"
        }
      )
    ] })
  }
);

// app/layouts/navbar/theme-toggle.jsx
import { useId as useId2 } from "react";

// app/layouts/navbar/theme-toggle.module.css
var theme_toggle_module_default = { toggle: "ls80m", circle: "jvMd-", mask: "CPuNg", path: "rq6eK" };

// app/layouts/navbar/theme-toggle.jsx
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
var ThemeToggle = ({ isMobile, ...rest }) => {
  let id = useId2(), { toggleTheme } = useTheme(), maskId = `${id}theme-toggle-mask`;
  return /* @__PURE__ */ jsx14(
    Button,
    {
      iconOnly: !0,
      className: theme_toggle_module_default.toggle,
      "data-mobile": isMobile,
      "aria-label": "Toggle theme",
      onClick: () => toggleTheme(),
      ...rest,
      children: /* @__PURE__ */ jsxs7("svg", { "aria-hidden": !0, className: theme_toggle_module_default.svg, width: "38", height: "38", viewBox: "0 0 38 38", children: [
        /* @__PURE__ */ jsx14("defs", { children: /* @__PURE__ */ jsxs7("mask", { id: maskId, children: [
          /* @__PURE__ */ jsx14("circle", { className: theme_toggle_module_default.circle, "data-mask": !0, cx: "19", cy: "19", r: "13" }),
          /* @__PURE__ */ jsx14("circle", { className: theme_toggle_module_default.mask, cx: "25", cy: "14", r: "9" })
        ] }) }),
        /* @__PURE__ */ jsx14(
          "path",
          {
            className: theme_toggle_module_default.path,
            d: "M19 3v7M19 35v-7M32.856 11l-6.062 3.5M5.144 27l6.062-3.5M5.144 11l6.062 3.5M32.856 27l-6.062-3.5"
          }
        ),
        /* @__PURE__ */ jsx14(
          "circle",
          {
            className: theme_toggle_module_default.circle,
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

// app/config.json
var config_default = {
  name: "Wisdom Osas",
  role: "FullStack",
  disciplines: [
    "Frontend",
    "Backend",
    "UI/UX",
    "JavaScript",
    "Python"
  ],
  url: "",
  x: "https://x.com/BigWhiz_001",
  github: "https://github.com/Bigwhiz",
  gmail: "mailwisdomosas@gmail.com",
  repo: "",
  ascii: `__  __  __
\\ \\ \\ \\ \\\u2215
 \\ \\\u2215\\ \\
  \\\u2215  \\\u2215
`
};

// app/layouts/navbar/nav-data.js
var navLinks = [
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
], socialLinks = [
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

// app/layouts/navbar/navbar.module.css
var navbar_module_default = { navbar: "_46DuX", logo: "Z2qRL", nav: "DIzD5", navList: "a1gft", navLink: "_4J-M7", navIcons: "a2SJE", navIconLink: "VohwH", navIcon: "svnGC", mobileNav: "L4ba-", mobileNavLink: "n-kxj" };

// app/layouts/navbar/navbar.jsx
import { jsx as jsx15, jsxs as jsxs8 } from "react/jsx-runtime";
var Navbar = () => {
  let [current, setCurrent] = useState6(), [menuOpen, setMenuOpen] = useState6(!1), [target, setTarget] = useState6(), { theme } = useTheme(), location = useLocation2(), windowSize = useWindowSize(), headerRef = useRef7(), isMobile = windowSize.width <= media.mobile || windowSize.height <= 696, scrollToHash = useScrollToHash();
  useEffect9(() => {
    setCurrent(`${location.pathname}${location.hash}`);
  }, [location]), useEffect9(() => {
    !target || location.pathname !== "/" || (setCurrent(`${location.pathname}${target}`), scrollToHash(target, () => setTarget(null)));
  }, [location.pathname, scrollToHash, target]), useEffect9(() => {
    let navItems = document.querySelectorAll("[data-navbar-item]"), inverseTheme = theme === "dark" ? "light" : "dark", { innerHeight } = window, inverseMeasurements = [], navItemMeasurements = [], isOverlap = (rect1, rect2, scrollY) => !(rect1.bottom - scrollY < rect2.top || rect1.top - scrollY > rect2.bottom), resetNavTheme = () => {
      for (let measurement of navItemMeasurements)
        measurement.element.dataset.theme = "";
    }, handleInversion = () => {
      let invertedElements = document.querySelectorAll(
        `[data-theme='${inverseTheme}'][data-invert]`
      );
      if (!invertedElements)
        return;
      inverseMeasurements = Array.from(invertedElements).map((item) => ({
        element: item,
        top: item.offsetTop,
        bottom: item.offsetTop + item.offsetHeight
      }));
      let { scrollY } = window;
      resetNavTheme();
      for (let inverseMeasurement of inverseMeasurements)
        if (!(inverseMeasurement.top - scrollY > innerHeight || inverseMeasurement.bottom - scrollY < 0))
          for (let measurement of navItemMeasurements)
            isOverlap(inverseMeasurement, measurement, scrollY) ? measurement.element.dataset.theme = inverseTheme : measurement.element.dataset.theme = "";
    };
    return theme === "light" && (navItemMeasurements = Array.from(navItems).map((item) => {
      let rect = item.getBoundingClientRect();
      return {
        element: item,
        top: rect.top,
        bottom: rect.bottom
      };
    }), document.addEventListener("scroll", handleInversion), handleInversion()), () => {
      document.removeEventListener("scroll", handleInversion), resetNavTheme();
    };
  }, [theme, windowSize, location.key]);
  let getCurrent = (url2 = "") => {
    let nonTrailing = current?.endsWith("/") ? current?.slice(0, -1) : current;
    return url2 === nonTrailing ? "page" : "";
  }, handleNavItemClick = (event) => {
    let hash = event.currentTarget.href.split("#")[1];
    setTarget(null), hash && location.pathname === "/" && (setTarget(`#${hash}`), event.preventDefault());
  }, handleMobileNavClick = (event) => {
    handleNavItemClick(event), menuOpen && setMenuOpen(!1);
  };
  return /* @__PURE__ */ jsxs8("header", { className: navbar_module_default.navbar, ref: headerRef, children: [
    /* @__PURE__ */ jsx15(
      RouterLink,
      {
        unstable_viewTransition: !0,
        prefetch: "intent",
        to: location.pathname === "/" ? "/#intro" : "/",
        "data-navbar-item": !0,
        className: navbar_module_default.logo,
        "aria-label": `${config_default.name}, ${config_default.role}`,
        onClick: handleMobileNavClick,
        children: /* @__PURE__ */ jsx15(Monogram, { highlight: !0 })
      }
    ),
    /* @__PURE__ */ jsx15(NavToggle, { onClick: () => setMenuOpen(!menuOpen), menuOpen }),
    /* @__PURE__ */ jsxs8("nav", { className: navbar_module_default.nav, children: [
      /* @__PURE__ */ jsx15("div", { className: navbar_module_default.navList, children: navLinks.map(
        ({ label, pathname }) => /* @__PURE__ */ jsx15(
          RouterLink,
          {
            unstable_viewTransition: !0,
            prefetch: "intent",
            to: pathname,
            "data-navbar-item": !0,
            className: navbar_module_default.navLink,
            "aria-current": getCurrent(pathname),
            onClick: handleNavItemClick,
            children: label
          },
          label
        )
      ) }),
      /* @__PURE__ */ jsx15(NavbarIcons, { desktop: !0 })
    ] }),
    /* @__PURE__ */ jsx15(Transition, { unmount: !0, in: menuOpen, timeout: msToNum(tokens.base.durationL), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs8("nav", { className: navbar_module_default.mobileNav, "data-visible": visible, ref: nodeRef, children: [
      navLinks.map(
        ({ label, pathname }, index) => /* @__PURE__ */ jsx15(
          RouterLink,
          {
            unstable_viewTransition: !0,
            prefetch: "intent",
            to: pathname,
            className: navbar_module_default.mobileNavLink,
            "data-visible": visible,
            "aria-current": getCurrent(pathname),
            onClick: handleMobileNavClick,
            style: cssProps({
              transitionDelay: numToMs(
                Number(msToNum(tokens.base.durationS)) + index * 50
              )
            }),
            children: label
          },
          label
        )
      ),
      /* @__PURE__ */ jsx15(NavbarIcons, {}),
      /* @__PURE__ */ jsx15(ThemeToggle, { isMobile: !0 })
    ] }) }),
    !isMobile && /* @__PURE__ */ jsx15(ThemeToggle, { "data-navbar-item": !0 })
  ] });
}, NavbarIcons = ({ desktop }) => /* @__PURE__ */ jsx15("div", { className: navbar_module_default.navIcons, children: socialLinks.map(
  ({ label, url: url2, icon }) => /* @__PURE__ */ jsx15(
    "a",
    {
      "data-navbar-item": desktop || void 0,
      className: navbar_module_default.navIconLink,
      "aria-label": label,
      href: url2,
      target: "_blank",
      rel: "noopener noreferrer",
      children: /* @__PURE__ */ jsx15(Icon, { className: navbar_module_default.navIcon, icon })
    },
    label
  )
) });

// app/components/progress/progress.jsx
import { useNavigation } from "@remix-run/react";
import { useRef as useRef8, useEffect as useEffect10, useState as useState7 } from "react";

// app/components/progress/progress.module.css
var progress_module_default = { progress: "_06fop" };

// app/components/progress/progress.jsx
import { jsx as jsx16 } from "react/jsx-runtime";
function Progress() {
  let [animationComplete, setAnimationComplete] = useState7(!1), [visible, setVisible] = useState7(!1), { state } = useNavigation(), progressRef = useRef8(), timeout = useRef8(0);
  return useEffect10(() => {
    clearTimeout(timeout.current), state !== "idle" ? timeout.current = setTimeout(() => {
      setVisible(!0);
    }, 500) : animationComplete && (timeout.current = setTimeout(() => {
      setVisible(!1);
    }, 300));
  }, [state, animationComplete]), useEffect10(() => {
    if (!progressRef.current)
      return;
    let controller = new AbortController();
    return state !== "idle" ? setAnimationComplete(!1) : (Promise.all(
      progressRef.current.getAnimations({ subtree: !0 }).map((animation) => animation.finished)
    ).then(() => {
      controller.signal.aborted || setAnimationComplete(!0);
    }), () => {
      controller.abort();
    });
  }, [state]), /* @__PURE__ */ jsx16(
    "div",
    {
      className: progress_module_default.progress,
      "data-status": state,
      "data-visible": visible,
      "data-complete": animationComplete,
      ref: progressRef
    }
  );
}

// app/root.module.css
var root_module_default = { container: "UjqpW", skip: "UAFb7" };

// app/root.jsx
import { jsx as jsx17, jsxs as jsxs9 } from "react/jsx-runtime";
var links = () => [
  {
    rel: "preload",
    href: gotham_medium_default,
    as: "font",
    type: "font/woff2",
    crossOrigin: ""
  },
  {
    rel: "preload",
    href: gotham_book_default,
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
], loader = async ({ request, context }) => {
  let { url: url2 } = request, { pathname } = new URL(url2), pathnameSliced = pathname.endsWith("/") ? pathname.slice(0, -1) : url2, canonicalUrl = `${config_default.url}${pathnameSliced}`, { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
      name: "__session",
      httpOnly: !0,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: !0
    }
  }), session = await getSession(request.headers.get("Cookie")), theme = session.get("theme") || "dark";
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
  let { canonicalUrl, theme } = useLoaderData(), fetcher = useFetcher(), { state } = useNavigation2();
  fetcher.formData?.has("theme") && (theme = fetcher.formData.get("theme"));
  function toggleTheme(newTheme) {
    fetcher.submit(
      { theme: newTheme || (theme === "dark" ? "light" : "dark") },
      { action: "/api/set-theme", method: "post" }
    );
  }
  return useEffect11(() => {
    console.info(
      `${config_default.ascii}
`,
      `Taking a peek huh? Check out the source code: ${config_default.repo}

`
    );
  }, []), /* @__PURE__ */ jsxs9("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs9("head", { children: [
      /* @__PURE__ */ jsx17("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx17("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx17("meta", { name: "theme-color", content: theme === "dark" ? "#111" : "#F2F2F2" }),
      /* @__PURE__ */ jsx17(
        "meta",
        {
          name: "color-scheme",
          content: theme === "light" ? "light dark" : "dark light"
        }
      ),
      /* @__PURE__ */ jsx17("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx17(Meta, {}),
      /* @__PURE__ */ jsx17(Links, {}),
      /* @__PURE__ */ jsx17("link", { rel: "canonical", href: canonicalUrl })
    ] }),
    /* @__PURE__ */ jsxs9("body", { "data-theme": theme, children: [
      /* @__PURE__ */ jsxs9(ThemeProvider, { theme, toggleTheme, children: [
        /* @__PURE__ */ jsx17(Progress, {}),
        /* @__PURE__ */ jsx17(VisuallyHidden, { showOnFocus: !0, as: "a", className: root_module_default.skip, href: "#main-content", children: "Skip to main content" }),
        /* @__PURE__ */ jsx17(Navbar, {}),
        /* @__PURE__ */ jsx17(
          "main",
          {
            id: "main-content",
            className: root_module_default.container,
            tabIndex: -1,
            "data-loading": state === "loading",
            children: /* @__PURE__ */ jsx17(Outlet, {})
          }
        )
      ] }),
      /* @__PURE__ */ jsx17(ScrollRestoration, {}),
      /* @__PURE__ */ jsx17(Scripts, {})
    ] })
  ] });
}
function ErrorBoundary() {
  let error = useRouteError();
  return /* @__PURE__ */ jsxs9("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs9("head", { children: [
      /* @__PURE__ */ jsx17("meta", { charSet: "utf-8" }),
      /* @__PURE__ */ jsx17("meta", { name: "viewport", content: "width=device-width, initial-scale=1" }),
      /* @__PURE__ */ jsx17("meta", { name: "theme-color", content: "#111" }),
      /* @__PURE__ */ jsx17("meta", { name: "color-scheme", content: "dark light" }),
      /* @__PURE__ */ jsx17("style", { dangerouslySetInnerHTML: { __html: themeStyles } }),
      /* @__PURE__ */ jsx17(Meta, {}),
      /* @__PURE__ */ jsx17(Links, {})
    ] }),
    /* @__PURE__ */ jsxs9("body", { "data-theme": "dark", children: [
      /* @__PURE__ */ jsx17(Error2, { error }),
      /* @__PURE__ */ jsx17(ScrollRestoration, {}),
      /* @__PURE__ */ jsx17(Scripts, {})
    ] })
  ] });
}

// mdx:routes\articles.modern-styling-in-react.mdx
var articles_modern_styling_in_react_exports = {};
__export(articles_modern_styling_in_react_exports, {
  attributes: () => attributes,
  default: () => articles_modern_styling_in_react_default,
  filename: () => filename,
  handle: () => handle,
  headers: () => headers,
  meta: () => meta
});
import { Fragment as Fragment3, jsx as jsx18, jsxs as jsxs10 } from "react/jsx-runtime";
var attributes = {
  title: "You (probably) don't need CSS-in-JS",
  abstract: "Vanilla CSS is good now actually. Here's a couple nifty techniques for dynamically styling React components with CSS custom properties.",
  date: "2022-05-01",
  banner: "/static/modern-styling-in-react-banner.jpg",
  featured: !0
};
function _createMdxContent(props) {
  let _components = Object.assign({
    p: "p",
    a: "a",
    ol: "ol",
    li: "li",
    strong: "strong",
    h2: "h2",
    h3: "h3",
    em: "em",
    pre: "pre",
    code: "code",
    hr: "hr"
  }, props.components), { Embed } = _components;
  return Embed || _missingMdxReference("Embed", !0), /* @__PURE__ */ jsxs10(Fragment3, { children: [
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "When I first tried CSS-in-JS libraries like ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://styled-components.com/", children: "Styled Components" }),
      " and ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://emotion.sh", children: "Emotion" }),
      ", the thing that felt right about it was passing values or state directly into the styles for a component. It really closed the loop with the concept of React where the UI is a function of state. While this was a definite advancement over the traditional way of styling React with classes and pre-processed CSS, it still had its problems."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "To highlight some examples, I'll break down some typical examples using two main types of dynamic styles you'll run into with React components:" }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.ol, { children: [
      `
`,
      /* @__PURE__ */ jsxs10(_components.li, { children: [
        /* @__PURE__ */ jsx18(_components.strong, { children: "Values:" }),
        " like a color, delay, or position. Anything that represents a single value for a CSS property."
      ] }),
      `
`,
      /* @__PURE__ */ jsxs10(_components.li, { children: [
        /* @__PURE__ */ jsx18(_components.strong, { children: "States:" }),
        " like a primary button variant, or a loading state each having their own set of associated styles."
      ] }),
      `
`
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.h2, { children: "Where we are today" }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "Before we get started, for comparison I'll be using SCSS (with ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://css-tricks.com/bem-101/", children: "BEM syntax" }),
      ") and Styled Components in my examples for how styling is typically approached in React. I won't cover CSS-in-JS libraries that deal with writing CSS as JavaScript objects. I think there are already good solutions out there (I'd recommend ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://vanilla-extract.style/", children: "Vanilla Extract" }),
      ") if you prefer having type checking and living more fully on the JavaScript side of things. My solution is more for those of us that like writing CSS as CSS, but want to respond to the reactivity and state of components in a better way."
    ] }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "If you're already familiar with the problem, ",
      /* @__PURE__ */ jsx18(_components.a, { href: "#theres-a-better-way-vanilla-css", children: "skip to the solution" }),
      "."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.h3, { children: "Values" }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "Using vanilla CSS, or pre-processed CSS by means of LESS or SCSS, the traditional way of passing a ",
      /* @__PURE__ */ jsx18(_components.em, { children: "value" }),
      " to your styles on was to just use inline styles. So if we have a button component that allows a color, it would look something like this:"
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `function Button({ color, children }) {\r
  return (\r
    <button className="button" style={{ backgroundColor: color }}>\r
      {children}\r
    </button>\r
  );\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "The problem with this approach is that it brings with it all the problems of inline styles. It now has higher specificity making it harder to override, and the styles aren't co-located with the rest of our button styles." }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "CSS-in-JS (in the case of Styled Components or Emotion) solved this problem by allowing dynamic values like this to be directly as props" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `// We can pass the \`color\` value into the styled component as a prop\r
function Button({ color, children }) {\r
  return <StyledButton color={color}>{children}</StyledButton>;\r
}\r
\r
// The syntax is a little funky, but now in the styled component's styles\r
// we can use its props as a function\r
const StyledButton = styled.button\`\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: \${props => props.color};\r
\`;
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.h3, { children: "States" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "Traditionally, we'd use css classes and concatenate strings. This always felt messy and clunky, but it works nicely on the css side, particularly if you're using a naming convention like BEM along with a pre-processors. Say we have small, medium, and large button sizes, and a primary variant, it might look something like this:" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `function Button({ color, size, primary, children }) {\r
  return (\r
    <button\r
      className={['button', \`button--\${size}\`, primary ? 'button--primary' : null]\r
        .filter(Boolean)\r
        .join(' ')}\r
      style={{ backgroundColor: color }}\r
    >\r
      {children}\r
    </button>\r
  );\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-scss", children: `.button {\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: whitesmoke;\r
\r
  &--primary {\r
    background-color: $primary-color;\r
  }\r
\r
  &--small {\r
    height: 30px;\r
  }\r
\r
  &--medium {\r
    height: 40px;\r
  }\r
\r
  &--large {\r
    height: 60px;\r
  }\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "The SCSS is looking nice and clean. I've always liked the pattern of using nesting to concatenate elements and modifiers in SCSS using the BEM syntax." }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "Our JSX, however, isn't faring so well. That string concatenation on the ",
      /* @__PURE__ */ jsx18(_components.code, { children: "className" }),
      " in the is a mess. The size property isn't too bad, because we're appending the value directly onto the class. The primary variant though... yuck. Not to mention the wacky ",
      /* @__PURE__ */ jsx18(_components.code, { children: "filter(Boolean)" }),
      " in there to prevent a double space in the class list for non-primary buttons. There are better ways of handling this, for example the ",
      /* @__PURE__ */ jsx18(_components.code, { children: "classnames" }),
      " package on NPM. But they only make the problem marginally more bearable."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "Unlike dynamic values, Styled Components is still a bit cumbersome in dealing with states" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `function Button({ color, size, primary, children }) {\r
  return (\r
    <StyledButton color={color}>{children}</StyledButton>\r
  }\r
);\r
\r
const StyledButton = styled.button\`\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: whitesmoke;\r
\r
  \${props => props.primary && css\`\r
    background-color: $primary-color;\r
  \`}\r
\r
  \${props => props.size === 'small' && css\`\r
    height: 30px;\r
  \`}\r
\r
  \${props => props.size === 'medium' && css\`\r
    height: 40px;\r
  \`}\r
\r
  \${props => props.size === 'large' && css\`\r
    height: 60px;\r
  \`}\r
\`;
` }) }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "It's not ",
      /* @__PURE__ */ jsx18(_components.em, { children: "terrible" }),
      ", but the repeated functions to grab props gets repetitive and makes reading styles quite noisy. It can also get way worse depending on the type of state. If you have separate but mutually exclusive states sometimes it calls for a ternary expression that can end up looking even more convoluted and difficult to parse."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `const StyledButton = styled.button\`\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
\r
  \${props =>\r
    props.primary\r
      ? css\`\r
          height: 60px;\r
          background-color: darkslateblue;\r
        \`\r
      : css\`\r
          height: 40px;\r
          background-color: whitesmoke;\r
        \`}\r
\`;
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "If you're using Prettier for code formatting like I do, you'll end up with a monstrosity like you see above. Monstrosity is a strong way of putting it, but I find the indentation and formatting really difficult to read." }),
    `
`,
    /* @__PURE__ */ jsx18(_components.hr, {}),
    `
`,
    /* @__PURE__ */ jsx18(_components.h2, { children: "There's a better way: vanilla CSS" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "The solution was with us all along: CSS custom properties (AKA CSS variables). Well, not really. When the methods I've covered above were established, CSS custom properties weren't that well supported by browsers. Support these days is pretty much green across the board (unless you still need to support ie11)." }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "After making the journey through using SCSS to Styled Components, I've come full circle back to vanilla CSS. I feel like there's an emerging trend of sticking more to platform standards with frameworks like Remix and Deno adhering closer to web standards instead of doing their own thing. I think this will happen with CSS as well, we won't need to reach for pre-processors and CSS-in-JS libraries as much because the native features are becoming ",
      /* @__PURE__ */ jsx18(_components.em, { children: "better" }),
      " than what they have to offer."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "That being said, here's how I've approached styling React components with vanilla CSS. Well, mostly vanilla CSS. I'm using postcss to get support some up and coming features like native nesting and custom media queries. The beauty of postcss is that as browsers support new features, the tooling slowly melts away." }),
    `
`,
    /* @__PURE__ */ jsx18(_components.h3, { children: "Values" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "A really neat trick I've found for passing values into css is using custom properties. It's pretty simple, we can just drop variables into the style property and it works." }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `function Button({ color, children }) {\r
  return (\r
    <button className="button" style={{ '--color': color }}>\r
      {children}\r
    </button>\r
  );\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-css", children: `.button {\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: var(--color);\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      `Now you might be thinking "isn't this just inline styles with extra steps?", and while we are using inline styles to apply the variable, it doesn't come with the same downsides. For one, there's no specificity issue because we're declaring the property under the `,
      /* @__PURE__ */ jsx18(_components.code, { children: ".button" }),
      " selector in the css file. Secondly, all our styles are co-located, it's just the value of the custom property that's being passed down."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "This also makes it really convenient when working with properties like transforms or clip-paths where you only need to dynamically control one piece of the value" }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `// All we need to pass is the value needed by the transform, rather than\r
// polluting our jsx with the full transform in the inline style\r
function Button({ offset, children }) {\r
  return (\r
    <button className="button" style={{ '--offset': \`\${offset}px\` }}>\r
      {children}\r
    </button>\r
  );\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-css", children: `.button {\r
  border: 0;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: whitesmoke;\r
  transform: translate3d(0, var(--offset), 0);\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      `There's way more you can do with CSS custom properties, like setting defaults and allowing overrides from the cascade for any components that compose one another to hook into, like a "CSS API". `,
      /* @__PURE__ */ jsx18(_components.a, { href: "https://lea.verou.me/2021/10/custom-properties-with-defaults/", children: "This article from Lea Verou" }),
      " does a great job at explaining this technique."
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.h3, { children: "States" }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "The best way I've found to deal with component states and variants with vanilla CSS is using data attributes. What I like about this is that it pairs nicely with the upcoming native CSS nesting syntax. The old technique of targeting BEM modifiers with ",
      /* @__PURE__ */ jsx18(_components.code, { children: "&--modifier" }),
      " doesn't work like it does in pre-processors. But with data attributes, we get similar ergonomics"
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-jsx", children: `function Button({ color, size, primary, children }) {\r
  return (\r
    <button className="button" data-size={size} data-primary={primary}>\r
      {children}\r
    </button>\r
  );\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-css", children: `.button {\r
  border: 0;\r
  border-radius: 4px;\r
  padding: 8px 12px;\r
  font-size: 14px;\r
  color: dimgrey;\r
  background-color: whitesmoke;\r
\r
  &[data-primary='true'] {\r
    background-color: var(--colorPrimary);\r
  }\r
\r
  &[data-size='small'] {\r
    height: 30px;\r
  }\r
\r
  &[data-size='medium'] {\r
    height: 40px;\r
  }\r
\r
  &[data-size='large'] {\r
    height: 60px;\r
  }\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsx18(_components.p, { children: "Have a play with the example button component here:" }),
    `
`,
    /* @__PURE__ */ jsx18(Embed, { src: "https://stackblitz.com/edit/vitejs-vite-mjs1oh?embed=1&file=src/Button/Button.jsx" }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "This looks similar to how modifiers are written using BEM syntax. It's also much more straightforward and easy to read than the Styled Components function syntax. The one downside is that we do gain a level of specificity that we don't with BEM modifiers using the ",
      /* @__PURE__ */ jsx18(_components.code, { children: "&--modifier" }),
      " pattern, but I think that's an acceptable tradeoff."
    ] }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "It may seem kinda ",
      /* @__PURE__ */ jsx18(_components.em, { children: "weird" }),
      " at first to use data attributes for styling, but it gets around the problem of messy string concatenation using classes. It also mirrors how we can target accessibility attributes for interaction-based styling, for example:"
    ] }),
    `
`,
    /* @__PURE__ */ jsx18(_components.pre, { children: /* @__PURE__ */ jsx18(_components.code, { className: "language-css", children: `.button {\r
  &[aria-pressed='true'] {\r
    background-color: gainsboro;\r
  }\r
\r
  &[disabled] {\r
    opacity: 0.4;\r
  }\r
}
` }) }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "I like this approach because it helps structure styling, we can see that any class is styling the base element, andy any attribute is styling a state. As for avoiding style clashes, there are better options now that automate the process like ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://github.com/css-modules/css-modules", children: "CSS Modules" }),
      " which is included out of the box in most React frameworks like Next.js and Create React App."
    ] }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "Of course, these techniques don't require you to ",
      /* @__PURE__ */ jsx18(_components.em, { children: "only" }),
      " use vanilla CSS, you can just as easily combine them with CSS-in-JS or a pre-processor. However with new features like ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://www.w3.org/TR/css-nesting-1/", children: "nesting" }),
      " and ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://www.w3.org/TR/css-color-5/#relative-colors", children: "relative colors" }),
      " I think it's becoming less necessary to reach for these tools."
    ] }),
    `
`,
    /* @__PURE__ */ jsxs10(_components.p, { children: [
      "The entirety of this website is styled using these techniques, so if you want to see an example of how this applies to some real components, take a gander at the ",
      /* @__PURE__ */ jsx18(_components.a, { href: "https://github.com/HamishMW/portfolio", children: "source code" }),
      "."
    ] })
  ] });
}
function MDXContent(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsx18(MDXLayout, { ...props, children: /* @__PURE__ */ jsx18(_createMdxContent, { ...props }) }) : _createMdxContent(props);
}
var articles_modern_styling_in_react_default = MDXContent;
function _missingMdxReference(id, component) {
  throw new Error("Expected " + (component ? "component" : "object") + " `" + id + "` to be defined: you likely forgot to import, pass, or provide it.");
}
var filename = "articles.modern-styling-in-react.mdx", headers = typeof attributes < "u" && attributes.headers, meta = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// app/routes/projects.volkihar-knight/route.js
var route_exports = {};
__export(route_exports, {
  default: () => VolkiharKnight,
  meta: () => meta2
});

// app/assets/volkihar-background-large.jpg
var volkihar_background_large_default = "/assets/_assets/volkihar-background-large-GDDXT7YD.jpg";

// app/assets/volkihar-background-placeholder.jpg
var volkihar_background_placeholder_default = "/assets/_assets/volkihar-background-placeholder-MQSZJNAM.jpg";

// app/assets/volkihar-background.jpg
var volkihar_background_default = "/assets/_assets/volkihar-background-UXA75NF4.jpg";

// app/assets/volkihar-banner-large.jpg
var volkihar_banner_large_default = "/assets/_assets/volkihar-banner-large-MYFQJ53C.jpg";

// app/assets/volkihar-banner-placeholder.jpg
var volkihar_banner_placeholder_default = "/assets/_assets/volkihar-banner-placeholder-OQFJDMY5.jpg";

// app/assets/volkihar-banner.jpg
var volkihar_banner_default = "/assets/_assets/volkihar-banner-S73T2FVW.jpg";

// app/assets/volkihar-book-large.png
var volkihar_book_large_default = "/assets/_assets/volkihar-book-large-UC6SAWZL.png";

// app/assets/volkihar-book-placeholder.png
var volkihar_book_placeholder_default = "/assets/_assets/volkihar-book-placeholder-R4D2MEPG.png";

// app/assets/volkihar-book.png
var volkihar_book_default = "/assets/_assets/volkihar-book-7ABNINLY.png";

// app/assets/volkihar-enderal-large.jpg
var volkihar_enderal_large_default = "/assets/_assets/volkihar-enderal-large-2X5T7L7L.jpg";

// app/assets/volkihar-enderal-logo-large.png
var volkihar_enderal_logo_large_default = "/assets/_assets/volkihar-enderal-logo-large-USFSZCOR.png";

// app/assets/volkihar-enderal-logo-placeholder.png
var volkihar_enderal_logo_placeholder_default = "/assets/_assets/volkihar-enderal-logo-placeholder-TPP6TWWU.png";

// app/assets/volkihar-enderal-logo.png
var volkihar_enderal_logo_default = "/assets/_assets/volkihar-enderal-logo-26AM7KQJ.png";

// app/assets/volkihar-enderal-placeholder.jpg
var volkihar_enderal_placeholder_default = "/assets/_assets/volkihar-enderal-placeholder-SE5RHKUF.jpg";

// app/assets/volkihar-enderal.jpg
var volkihar_enderal_default = "/assets/_assets/volkihar-enderal-OWLHMZXF.jpg";

// app/assets/volkihar-slide-1-large.jpg
var volkihar_slide_1_large_default = "/assets/_assets/volkihar-slide-1-large-S2D4TOWV.jpg";

// app/assets/volkihar-slide-1.jpg
var volkihar_slide_1_default = "/assets/_assets/volkihar-slide-1-EDWX53L7.jpg";

// app/assets/volkihar-slide-2-large.jpg
var volkihar_slide_2_large_default = "/assets/_assets/volkihar-slide-2-large-DLYGTYGF.jpg";

// app/assets/volkihar-slide-2.jpg
var volkihar_slide_2_default = "/assets/_assets/volkihar-slide-2-YNQ4KBIP.jpg";

// app/assets/volkihar-slide-3-large.jpg
var volkihar_slide_3_large_default = "/assets/_assets/volkihar-slide-3-large-S5EYXEVD.jpg";

// app/assets/volkihar-slide-3.jpg
var volkihar_slide_3_default = "/assets/_assets/volkihar-slide-3-KFJGJIO2.jpg";

// app/assets/volkihar-slide-placeholder.jpg
var volkihar_slide_placeholder_default = "/assets/_assets/volkihar-slide-placeholder-K6JBVRXC.jpg";

// app/components/link/link.jsx
init_style();
import { forwardRef as forwardRef6 } from "react";
import { Link as RouterLink2 } from "@remix-run/react";

// app/components/link/link.module.css
var link_module_default = { link: "LvEEB" };

// app/components/link/link.jsx
import { jsx as jsx19 } from "react/jsx-runtime";
var VALID_EXT = ["txt", "png", "jpg"];
function isAnchor(href) {
  let isValidExtension = VALID_EXT.includes(href?.split(".").pop());
  return href?.includes("://") || href?.[0] === "#" || isValidExtension;
}
var Link2 = forwardRef6(
  ({ rel, target, children, secondary, className, href, ...rest }, ref) => {
    let isExternal = href?.includes("://"), relValue = rel || (isExternal ? "noreferrer noopener" : void 0), targetValue = target || (isExternal ? "_blank" : void 0), linkProps = {
      className: classes(link_module_default.link, className),
      ["data-secondary"]: secondary,
      rel: relValue,
      href,
      target: targetValue,
      ref,
      ...rest
    };
    return isAnchor(href) ? /* @__PURE__ */ jsx19("a", { ...linkProps, href, children }) : /* @__PURE__ */ jsx19(RouterLink2, { unstable_viewTransition: !0, prefetch: "intent", ...linkProps, to: href, children });
  }
);

// app/components/footer/footer.jsx
init_text2();
init_style();

// app/components/footer/footer.module.css
var footer_module_default = { footer: "KsomK", link: "tCL51", date: "RNpgt" };

// app/components/footer/footer.jsx
import { jsx as jsx20 } from "react/jsx-runtime";
var Footer = ({ className }) => /* @__PURE__ */ jsx20("footer", { className: classes(footer_module_default.footer, className), children: /* @__PURE__ */ jsx20(Text, { size: "s", align: "center", children: /* @__PURE__ */ jsx20("span", { className: footer_module_default.date, children: `\xA9 ${(/* @__PURE__ */ new Date()).getFullYear()} ${config_default.name}.` }) }) });

// app/components/image/image.jsx
init_hooks();
init_image();
init_style();
import { useReducedMotion as useReducedMotion5 } from "framer-motion";
import { Fragment as Fragment4, useCallback as useCallback3, useEffect as useEffect12, useRef as useRef9, useState as useState8 } from "react";

// app/components/image/image.module.css
var image_module_default = { image: "tpmj9", container: "_-6RB5", elementWrapper: "wili2", placeholder: "Y1AuN", element: "BJ3ki", button: "_9e7NM" };

// app/components/image/image.jsx
import { jsx as jsx21, jsxs as jsxs11 } from "react/jsx-runtime";
var Image2 = ({
  className,
  style,
  reveal,
  delay: delay2 = 0,
  raised,
  src: baseSrc,
  srcSet,
  placeholder,
  ...rest
}) => {
  let [loaded, setLoaded] = useState8(!1), { theme } = useTheme(), containerRef = useRef9(), src = baseSrc || srcSet.split(" ")[0], inViewport = useInViewport(containerRef, !getIsVideo(src)), onLoad = useCallback3(() => {
    setLoaded(!0);
  }, []);
  return /* @__PURE__ */ jsx21(
    "div",
    {
      className: classes(image_module_default.image, className),
      "data-visible": inViewport || loaded,
      "data-reveal": reveal,
      "data-raised": raised,
      "data-theme": theme,
      style: cssProps({ delay: numToMs(delay2) }, style),
      ref: containerRef,
      children: /* @__PURE__ */ jsx21(
        ImageElements,
        {
          delay: delay2,
          onLoad,
          loaded,
          inViewport,
          reveal,
          src,
          srcSet,
          placeholder,
          ...rest
        }
      )
    }
  );
}, ImageElements = ({
  onLoad,
  loaded,
  inViewport,
  srcSet,
  placeholder,
  delay: delay2,
  src,
  alt,
  play = !0,
  restartOnPause,
  reveal,
  sizes,
  width,
  height,
  noPauseButton,
  cover,
  ...rest
}) => {
  let reduceMotion = useReducedMotion5(), [showPlaceholder, setShowPlaceholder] = useState8(!0), [playing, setPlaying] = useState8(!reduceMotion), [videoSrc, setVideoSrc] = useState8(), [videoInteracted, setVideoInteracted] = useState8(!1), placeholderRef = useRef9(), videoRef = useRef9(), isVideo = getIsVideo(src), showFullRes = inViewport, hasMounted = useHasMounted();
  useEffect12(() => {
    isVideo && srcSet ? (async () => {
      let resolvedVideoSrc = await resolveSrcFromSrcSet({ srcSet, sizes });
      setVideoSrc(resolvedVideoSrc);
    })() : isVideo && setVideoSrc(src);
  }, [isVideo, sizes, src, srcSet]), useEffect12(() => {
    if (!videoRef.current || !videoSrc)
      return;
    let playVideo = () => {
      setPlaying(!0), videoRef.current.play();
    }, pauseVideo = () => {
      setPlaying(!1), videoRef.current.pause();
    };
    play || (pauseVideo(), restartOnPause && (videoRef.current.currentTime = 0)), !videoInteracted && (inViewport ? inViewport && !reduceMotion && play && playVideo() : pauseVideo());
  }, [inViewport, play, reduceMotion, restartOnPause, videoInteracted, videoSrc]);
  let togglePlaying = (event) => {
    event.preventDefault(), setVideoInteracted(!0), videoRef.current.paused ? (setPlaying(!0), videoRef.current.play()) : (setPlaying(!1), videoRef.current.pause());
  };
  return /* @__PURE__ */ jsxs11(
    "div",
    {
      className: image_module_default.elementWrapper,
      "data-reveal": reveal,
      "data-visible": inViewport || loaded,
      style: cssProps({ delay: numToMs(delay2 + 1e3) }),
      children: [
        isVideo && hasMounted && /* @__PURE__ */ jsxs11(Fragment4, { children: [
          /* @__PURE__ */ jsx21(
            "video",
            {
              muted: !0,
              loop: !0,
              playsInline: !0,
              className: image_module_default.element,
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
          !noPauseButton && /* @__PURE__ */ jsxs11(Button, { className: image_module_default.button, onClick: togglePlaying, children: [
            /* @__PURE__ */ jsx21(Icon, { icon: playing ? "pause" : "play" }),
            playing ? "Pause" : "Play"
          ] })
        ] }),
        !isVideo && /* @__PURE__ */ jsx21(
          "img",
          {
            className: image_module_default.element,
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
        showPlaceholder && /* @__PURE__ */ jsx21(
          "img",
          {
            "aria-hidden": !0,
            className: image_module_default.placeholder,
            "data-loaded": loaded,
            "data-cover": cover,
            style: cssProps({ delay: numToMs(delay2) }),
            ref: placeholderRef,
            src: placeholder,
            width,
            height,
            onTransitionEnd: () => setShowPlaceholder(!1),
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
  return typeof src == "string" && src.includes(".mp4");
}

// app/layouts/project/project.jsx
init_section2();
init_text2();
init_theme();
init_transition2();
init_hooks();
init_style();
import { forwardRef as forwardRef8, useRef as useRef10 } from "react";

// app/layouts/project/project.module.css
var project_module_default = { project: "w6Bx9", section: "JYVPr", sectionInner: "tMr2z", sectionBackground: "dCBAB", backgroundImage: "oD5ZT", backgroundImageElement: "DEKZB", backgroundScrim: "-VMCG", header: "CiZDP", headerContent: "wfPG-", details: "oT9Np", title: "rBDT0", projectFadeSlide: "_6FeYJ", description: "MRRKO", linkButton: "cSZhZ", meta: "-CO3B", metaItem: "sWJAP", image: "lwExx", sectionContent: "or9OZ", sectionHeading: "GErAq", sectionText: "bL-ex", textRow: "sfK04", sectionColumns: "mq-73" };

// app/layouts/project/project.jsx
import { jsx as jsx23, jsxs as jsxs12 } from "react/jsx-runtime";
var initDelay = 300;
function ProjectHeader({
  title: title4,
  description: description4,
  linkLabel = "Visit website",
  url: url2,
  roles: roles4,
  className
}) {
  return /* @__PURE__ */ jsx23(Section, { className: classes(project_module_default.header, className), as: "section", children: /* @__PURE__ */ jsxs12(
    "div",
    {
      className: project_module_default.headerContent,
      style: cssProps({ initDelay: numToMs(initDelay) }),
      children: [
        /* @__PURE__ */ jsxs12("div", { className: project_module_default.details, children: [
          /* @__PURE__ */ jsx23(Heading, { className: project_module_default.title, level: 2, as: "h1", children: title4 }),
          /* @__PURE__ */ jsx23(Text, { className: project_module_default.description, size: "xl", as: "p", children: description4 }),
          !!url2 && /* @__PURE__ */ jsx23(
            Button,
            {
              secondary: !0,
              iconHoverShift: !0,
              className: project_module_default.linkButton,
              icon: "chevron-right",
              href: url2,
              children: linkLabel
            }
          )
        ] }),
        !!roles4?.length && /* @__PURE__ */ jsx23("ul", { className: project_module_default.meta, children: roles4?.map(
          (role, index) => /* @__PURE__ */ jsx23(
            "li",
            {
              className: project_module_default.metaItem,
              style: cssProps({ delay: numToMs(initDelay + 300 + index * 140) }),
              children: /* @__PURE__ */ jsx23(Text, { secondary: !0, children: role })
            },
            role
          )
        ) })
      ]
    }
  ) });
}
var ProjectContainer = ({ className, ...rest }) => /* @__PURE__ */ jsx23("article", { className: classes(project_module_default.project, className), ...rest }), ProjectSection = forwardRef8(
  ({
    className,
    light: light2,
    padding = "both",
    fullHeight,
    backgroundOverlayOpacity = 0.9,
    backgroundElement,
    children,
    ...rest
  }, ref) => /* @__PURE__ */ jsxs12(
    "section",
    {
      className: classes(project_module_default.section, className),
      "data-light": light2,
      "data-full-height": fullHeight,
      ref,
      ...rest,
      children: [
        !!backgroundElement && /* @__PURE__ */ jsx23(
          "div",
          {
            className: project_module_default.sectionBackground,
            style: cssProps({ opacity: backgroundOverlayOpacity }),
            children: backgroundElement
          }
        ),
        /* @__PURE__ */ jsx23(Section, { className: project_module_default.sectionInner, "data-padding": padding, children })
      ]
    }
  )
), ProjectBackground = ({ opacity = 0.7, className, ...rest }) => {
  let imageRef = useRef10();
  return useParallax(0.6, (value) => {
    imageRef.current && imageRef.current.style.setProperty("--offset", `${value}px`);
  }), /* @__PURE__ */ jsx23(Transition, { in: !0, timeout: msToNum(tokens.base.durationM), children: ({ visible, nodeRef }) => /* @__PURE__ */ jsxs12(
    "div",
    {
      className: classes(project_module_default.backgroundImage, className),
      "data-visible": visible,
      ref: nodeRef,
      children: [
        /* @__PURE__ */ jsx23("div", { className: project_module_default.backgroundImageElement, ref: imageRef, children: /* @__PURE__ */ jsx23(Image2, { cover: !0, alt: "", role: "presentation", ...rest }) }),
        /* @__PURE__ */ jsx23("div", { className: project_module_default.backgroundScrim, style: cssProps({ opacity }) })
      ]
    }
  ) });
}, ProjectImage = ({ className, alt, ...rest }) => /* @__PURE__ */ jsx23("div", { className: classes(project_module_default.image, className), children: /* @__PURE__ */ jsx23(Image2, { reveal: !0, alt, delay: 300, ...rest }) }), ProjectSectionContent = ({ className, width = "l", ...rest }) => /* @__PURE__ */ jsx23(
  "div",
  {
    className: classes(project_module_default.sectionContent, className),
    "data-width": width,
    ...rest
  }
), ProjectSectionHeading = ({ className, level = 3, as = "h2", ...rest }) => /* @__PURE__ */ jsx23(
  Heading,
  {
    className: classes(project_module_default.sectionHeading, className),
    as,
    level,
    align: "auto",
    ...rest
  }
), ProjectSectionText = ({ className, ...rest }) => /* @__PURE__ */ jsx23(Text, { className: classes(project_module_default.sectionText, className), size: "l", as: "p", ...rest }), ProjectTextRow = ({
  center,
  stretch,
  justify = "center",
  width = "m",
  noMargin,
  className,
  centerMobile,
  ...rest
}) => /* @__PURE__ */ jsx23(
  "div",
  {
    className: classes(project_module_default.textRow, className),
    "data-center": center,
    "data-stretch": stretch,
    "data-center-mobile": centerMobile,
    "data-no-margin": noMargin,
    "data-width": width,
    "data-justify": justify,
    ...rest
  }
), ProjectSectionColumns = ({ className, centered, ...rest }) => /* @__PURE__ */ jsx23(
  ProjectSectionContent,
  {
    className: classes(project_module_default.sectionColumns, className),
    "data-centered": centered,
    ...rest
  }
);

// app/routes/projects.volkihar-knight/volkihar-knight.jsx
init_style();
import { Fragment as Fragment5, Suspense, lazy } from "react";

// app/utils/meta.js
var { name, url, twitter } = config_default, defaultOgImage = `${url}/social-image.png`;
function baseMeta({
  title: title4,
  description: description4,
  prefix = name,
  ogImage = defaultOgImage
}) {
  let titleText = [prefix, title4].filter(Boolean).join(" | ");
  return [
    { title: titleText },
    { name: "description", content: description4 },
    { name: "author", content: name },
    { property: "og:image", content: ogImage },
    { property: "og:image:alt", content: "Banner for the site" },
    { property: "og:image:width", content: "1280" },
    { property: "og:image:height", content: "800" },
    { property: "og:title", content: titleText },
    { property: "og:site_name", content: name },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:description", content: description4 },
    { property: "twitter:card", content: "summary_large_image" },
    { property: "twitter:description", content: description4 },
    { property: "twitter:title", content: titleText },
    { property: "twitter:site", content: url },
    { property: "twitter:creator", content: twitter },
    { property: "twitter:image", content: ogImage }
  ];
}

// app/routes/projects.volkihar-knight/volkihar-logo.jsx
import { jsx as jsx24, jsxs as jsxs13 } from "react/jsx-runtime";
function VolkiharLogo() {
  return /* @__PURE__ */ jsxs13("svg", { width: "532", height: "344", viewBox: "0 0 532 344", children: [
    /* @__PURE__ */ jsx24(
      "path",
      {
        d: "M294.971 81.133c22.724 29.428 35.373 45.546 37.95 48.354 5.486 5.982 8.123 9.267 19.709 16.895 6.486 4.394 14.942 7.61 25.37 9.651V159h-54.38L261 77.977V159C191.123 68.072 153.683 20.04 148.683 14.903c-5-5.136-12.56-8.026-22.683-8.668V0l69.584.14V6c-4.38 0-7.994.587-10.845 1.762-4.275 1.761-4.42 5.768-3.412 7.141 1.4 2.138 23.229 30.34 65.487 84.609v-70.08c0-11.449-6.327-16.432-11.333-20.102-3.337-2.447-9.281-3.557-17.832-3.33V.14H289V6c-5.556-.235-13.818.235-19.896 3.33-4.052 2.063-6.753 6.857-8.103 14.382v13.29a24524.908 24524.908 0 0 0 25.533 33.194c23.526-29.352 36.705-45.71 39.538-49.074 4.481-5.32 2.935-11.023-1.577-13.119-3.007-1.397-7.648-2.178-13.922-2.342V0H373v5.661c-7.55 0-13.964 1.666-18.393 3.891-2.954 1.483-6.835 4.828-11.644 10.035l-47.992 61.546z",
        fill: "currentColor"
      }
    ),
    /* @__PURE__ */ jsx24(
      "path",
      {
        d: "M18.3 254.75L6.05 224.1c-1.1-2.8-1.85-3.35-3.6-3.85-.75-.2-1.6-.2-1.9-.2-.3 0-.4-.15-.4-.35 0-.3.5-.35 1.3-.35 2.4 0 5.1.15 5.7.15.5 0 2.65-.15 4.55-.15.9 0 1.35.1 1.35.35 0 .25-.15.35-.5.35-.55 0-1.45.05-1.9.25-.55.25-.65.65-.65 1 0 .45.45 1.8 1 3.2l10.2 26.55c2.9-6.7 9.6-24.15 10.7-27.75.25-.75.45-1.45.45-1.9 0-.4-.15-.9-.65-1.15-.6-.2-1.35-.2-1.9-.2-.3 0-.55-.05-.55-.3 0-.3.3-.4 1.1-.4 2 0 4.3.15 4.9.15.3 0 2.45-.15 3.9-.15.55 0 .85.1.85.35 0 .25-.2.35-.6.35-.35 0-1.45 0-2.4.6-.65.45-1.4 1.3-2.75 4.7-.55 1.4-3.05 7.4-5.6 13.55-3.05 7.3-5.3 12.7-6.45 15.15-1.4 3-1.6 3.8-2.1 3.8-.6 0-.85-.7-1.8-3.1zM61 257.7c-12.25 0-17.25-9.1-17.25-16.7 0-6.65 5.15-16.6 17.5-16.6 9.9 0 17.45 5.9 17.45 15.95 0 9.55-7.05 17.35-17.7 17.35zm1.25-1.7C65.6 256 74 254.3 74 241.6c0-10.05-6.2-15.65-13.05-15.65-6.95 0-12.55 4.3-12.55 13.75 0 9.8 5.45 16.3 13.85 16.3zm33.6-18.7v7.6c0 5.75.2 8.65 1.05 9.45.8.7 1.8 1 5.25 1 2.2 0 4.2 0 5.3-1.4.5-.75.85-1.75.95-2.5.05-.4.15-.6.4-.6.2 0 .3.15.3.65s-.3 3.35-.6 4.5c-.3 1-.25 1.25-2.65 1.25-3.4 0-7.15-.25-12.15-.25-1.65 0-2.65.15-4.4.15-.5 0-.8-.1-.8-.4 0-.15.15-.3.55-.3s.8 0 1.2-.1c.85-.15 1.15-1.15 1.3-2.35.3-1.9.2-5.35.2-9.2v-7.5c0-6.6 0-7.7-.1-9.05-.1-1.4-.3-2.3-2-2.5-.3-.05-.85-.05-1.25-.05-.35 0-.55-.15-.55-.35 0-.25.25-.35.75-.35 2.1 0 5.1.15 5.2.15.7 0 3.75-.15 5.15-.15.5 0 .65.15.65.35 0 .2-.25.35-.55.35-.35 0-.85.05-1.35.1-1.4.2-1.7 1-1.8 2.45-.1 1.35-.05 2.45-.05 9.05zm29.2 0v2.35c2.3-2.05 7.75-7.25 10-9.7 2.4-2.65 2.6-2.9 2.6-3.45 0-.35-.2-.6-.8-.8-.35-.1-.55-.2-.55-.4 0-.15.1-.3.5-.3.3 0 1.8.15 3.4.15 1.5 0 4.25-.15 4.9-.15.7 0 .8.1.8.3 0 .2-.15.35-.55.4-.8.05-1.85.25-2.45.5-1.2.4-1.85.95-4.45 3.3-3.65 3.3-8 7.55-10.2 9.55 2.7 2.8 10.8 10.8 12.9 12.7 3.5 3.2 5.2 4.1 7.2 4.55.55.1.3.05 1.15.15.45.05.7.15.7.4 0 .2-.25.3-.8.3h-3.25c-3.9 0-4.9-.45-6.9-1.85-2.25-1.6-10.25-9.8-14.2-14.45v3.95c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1zm33.3 7.5v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm27-6.4h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3H185.3c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm52.2 6.55h-9.1c-.25 0-.4.15-.5.4l-2.2 6.25c-.5 1.4-.85 2.75-.85 3.55 0 .9.55 1.3 1.65 1.3h.35c.45 0 .6.15.6.35 0 .25-.4.35-.75.35-1.1 0-3.4-.15-3.95-.15-.5 0-2.7.15-4.8.15-.55 0-.8-.1-.8-.35 0-.2.2-.35.6-.35.25 0 .7 0 1-.05 2.15-.2 3-1.85 3.85-3.95l10-26.35c.55-1.45.7-1.7 1.05-1.7.25 0 .45.2 1 1.6.7 1.65 7.5 19.1 10.15 25.35 1.65 3.95 3.1 4.6 3.8 4.85.65.25 1.35.25 1.7.25.35 0 .6.1.6.35 0 .25-.2.35-.75.35-.5 0-4.25 0-7.6-.1-.95-.05-1.25-.1-1.25-.35 0-.15.15-.3.35-.35.2-.1.5-.35.2-1.1l-3.95-10.05c-.1-.15-.2-.25-.4-.25zm-8.6-1.75h8c.2 0 .2-.15.15-.3l-3.95-11.05c-.25-.7-.3-.7-.55 0l-3.75 11.05c-.1.2 0 .3.1.3zm31.15 1.6v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.45-2.1-2-2.4-.3-.05-.8-.1-1.2-.1-.35 0-.55-.1-.55-.3 0-.2.15-.35.6-.35 2.15 0 5.2.15 5.3.15.45 0 3.85-.15 5.25-.15 2.8 0 5.85.25 8.2 1.9.95.7 3 2.7 3 6.1 0 2.75-1.35 6.25-5.3 9.45 3.65 4.5 6.65 8.2 9.2 10.85 2.4 2.45 3.9 2.85 5.3 3.05.35.05 1.4.1 1.55.1.4 0 .55.15.55.35 0 .25-.2.35-.9.35h-3.5c-2.35 0-3.45-.15-4.55-.6-2.1-.9-3.6-3.15-6.2-6.5-1.95-2.4-3.95-5.1-4.8-6.15-.2-.2-.3-.3-.6-.3l-5.15-.05c-.2 0-.25.05-.25.25v.7c0 4 0 7.65.25 9.45.15 1.2.3 2.2 1.95 2.4.5.05 1.05.1 1.45.1.45 0 .65.15.65.3 0 .25-.2.4-.7.4-2.6 0-5.4-.15-5.6-.15-.8 0-3 .15-4.35.15-.5 0-.7-.1-.7-.4 0-.15.3-.3.6-.3.35 0 .7 0 1.1-.1.85-.15 1.15-.7 1.3-1.9.25-1.8.2-5.9.2-9.65zm3.85-17.55v13.6c0 .25.05.5.25.6.65.35 2.65.65 4.45.65 1.05 0 2.3-.05 3.35-.75 1.5-.95 2.5-3.15 2.5-6.35 0-5.45-2.9-8.45-7.35-8.45-1.25 0-2.3.1-2.9.25-.15.05-.3.2-.3.45zm56.85 6.6v3.2c1.55-1.5 8.35-8.65 11.4-11.8 3-3.1 3.2-3.6 3.2-4.2 0-.4-.25-.8-.65-.95-.35-.15-.45-.25-.45-.45s.3-.3.75-.3c1.45 0 1.3.15 3 .15 1.55 0 4.5-.15 5.3-.15.7 0 .85.15.85.35 0 .2-.1.3-.55.35-.95.1-1.85.3-2.55.6-1.25.5-2.2 1.1-5.2 4-4.4 4.25-10.1 9.9-11.4 11.35 3.15 3.45 12.25 12.7 14.6 14.9 4.1 3.85 5.85 4.95 8.25 5.4.45.1.95.15 1.45.15.4 0 .7.1.7.35 0 .25-.2.35-.75.35h-3.7c-4.35 0-5.5-.55-7.85-2.4-3-2.35-12-12-16.4-17.25v5.15c0 4.8 0 8.75.25 10.85.15 1.45.45 2.55 1.95 2.75.7.1 1.7.2 2 .2.45 0 .6.2.6.35 0 .25-.2.35-.75.35-2.75 0-5.9-.15-6.15-.15s-3.2.15-4.7.15c-.55 0-.8-.05-.8-.35 0-.15.1-.35.55-.35.3 0 .85-.05 1.3-.15 1-.2 1.3-1.35 1.5-2.8.25-2.1.25-6.05.25-10.85v-8.8c0-7.8 0-9.2-.1-10.8-.1-1.7-.6-2.55-1.7-2.8-.55-.15-1.45-.2-1.8-.2-.4 0-.55-.1-.55-.3 0-.3.25-.4.8-.4 1.65 0 5 .15 5.25.15s3.4-.15 4.9-.15c.55 0 .8.1.8.35 0 .2-.1.3-.55.35-.55.05-.6.05-1.1.1-1.35.15-1.75 1.15-1.85 2.9-.1 1.6-.1 3-.1 10.8zm34.15 17.05c0-23.85.05-16.15 0-24.45 0-1.55.15-2.05.55-2.05.35 0 1.2 1 1.55 1.35.45.5 7.4 7.6 14.4 14.75 3.9 3.8 8.9 8.95 10.2 10.15l-.55-20.8c-.05-2.7-.35-3.6-1.7-3.95-.85-.15-1.6-.2-1.95-.2-.5 0-.6-.2-.6-.4 0-.25.4-.3.9-.3 2.15 0 4.25.15 4.7.15.5 0 2.05-.15 4-.15.55 0 .7.05.7.3 0 .2-.15.35-.45.4-.3.05-.7.05-1.25.15-1.15.25-1.5.75-1.5 3.75l-.1 25.1c0 2.5-.1 2.75-.45 2.75s-.85-.35-3.3-2.65c-.2-.1-7.15-7-11.5-11.25-5.2-5.4-10.2-10.6-11.45-11.9l.65 19.55c.1 3.45.4 4.75 1.65 5.05.8.2 1.65.2 2.05.2.4 0 .6.15.6.35 0 .25-.25.35-.8.35-2.7 0-4.5-.15-4.85-.15-.35 0-2.2.15-4.35.15-.45 0-.75-.05-.75-.35 0-.2.2-.35.7-.35.35 0 .9 0 1.55-.2 1.1-.35 1.35-1.7 1.35-5.35zm46.3-6.1v-7.5c0-6.6 0-7.8-.1-9.15-.1-1.35-.4-2.1-1.45-2.3-.5-.1-.85-.1-1.15-.15-.35-.05-.55-.15-.55-.35 0-.25.2-.35.75-.35 1.55 0 4.4.15 4.55.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.15.3-.55.35-.3.05-.55.05-.9.1-1.45.2-1.6.95-1.7 2.4-.1 1.35-.05 2.5-.05 9.1v7.5c0 3.85-.05 7.35.2 9.15.2 1.45.4 2 1.7 2.3.65.15 1.7.2 1.9.2.45.05.55.15.55.35 0 .2-.2.35-.7.35-2.55 0-5.45-.15-5.7-.15-.15 0-3.1.15-4.5.15-.45 0-.8-.1-.8-.35 0-.2.2-.35.65-.35.25 0 .8-.05 1.2-.15.85-.2 1-1.2 1.15-2.4.25-1.8.25-5.35.25-9.1zm46.95 4.15v4.5c0 2-.05 2.05-.6 2.35-2.75 1.4-6.75 1.9-9.2 1.9-3.25 0-9.55-.25-14.65-4.5-2.7-2.25-5.4-6.45-5.4-12.15 0-6.8 3.45-11.65 7.55-14.1 3.85-2.25 8.1-2.55 11.15-2.55 3.2 0 5.35.4 7.15.7.8.15 2.75.4 3.8.45.4 0 .4.2.4.4 0 .6-.35 2.1-.35 6.5 0 .7-.05.9-.4.9-.25 0-.3-.3-.35-.6 0-.45-.2-2-.95-3.1-1.15-1.65-4.75-3.5-10.35-3.5-2.7 0-5.85.1-9.2 2.65-2.55 1.95-4.2 5.75-4.2 10.7 0 5.95 3.25 10.35 4.55 11.6 3.3 3.2 7 4.65 11.35 4.65 1.4 0 3.6-.25 4.75-.85.5-.3.85-.8.85-1.5v-7.2c0-3.3-.25-3.95-2-4.2-.3-.05-.8-.1-1.2-.1-.4 0-.6-.2-.6-.35 0-.25.2-.35.75-.35 2 0 4.9.1 5.1.1.2 0 3.15-.1 4.5-.1.5 0 .7.1.7.35 0 .15-.15.35-.6.35-.35 0-.45 0-.85.05-1.2.15-1.5 1.05-1.6 2.5-.1 1.45-.1 2.7-.1 4.5zm20.6-10.55h18.1c.15 0 .3 0 .3-.25v-.9c0-6.6 0-7.75-.1-9.1-.1-1.35-.3-2.05-1.95-2.35-.35-.05-.85-.1-1.25-.1-.35 0-.6-.15-.6-.35 0-.3.25-.35.7-.35 2.1 0 5.05.15 5.25.15.2 0 3-.15 4.5-.15.5 0 .8.05.8.35 0 .15-.15.35-.55.35-.3 0-.7.05-1 .1-1.35.2-1.55 1-1.65 2.4-.05 1.35-.05 2.5-.05 9.1v7.5c0 4.1 0 7.35.2 9.15.15 1.2.4 2.2 1.7 2.35.65.1 1.3.15 1.75.15.4 0 .65.15.65.35 0 .25-.25.35-.75.35-2.5 0-5.4-.15-5.65-.15-.2 0-3.1.15-4.45.15-.5 0-.75-.1-.75-.4 0-.15.15-.3.55-.3s.75 0 1.15-.1c.85-.15 1.1-1.25 1.25-2.4.25-1.8.25-4.95.25-9v-4.45c0-.2-.15-.3-.3-.3h-18.15c-.15 0-.25.05-.25.3v4.45c0 4.05 0 7.3.25 9.1.15 1.1.4 2.1 1.7 2.25.65.1 1.4.15 1.8.15.35 0 .6.15.6.35 0 .2-.2.35-.65.35-2.55 0-5.5-.15-5.75-.15-.15 0-3.2.15-4.5.15-.5 0-.8-.1-.8-.35 0-.15.1-.35.55-.35.4 0 .8-.05 1.2-.15.9-.2 1.1-1.15 1.25-2.25.3-1.8.25-5.15.25-9.25v-7.4c0-6.6 0-7.9-.1-9.25-.1-1.3-.45-2.25-1.9-2.4-.45-.05-.95-.1-1.35-.1-.35 0-.55-.15-.55-.3 0-.3.25-.35.75-.35 2.15 0 4.55.15 5.2.15.2 0 3.1-.15 4.5-.15.5 0 .75.1.75.35 0 .2-.2.3-.5.3s-.45 0-1 .1c-1.25.2-1.55 1.05-1.65 2.45-.05 1.35-.05 2.45-.05 9.05v.9c0 .25.15.25.3.25zm50.65-11.45v17.85c0 3.85.05 7.4.25 9.25.15 1.2.25 1.9 1.5 2.2.6.15 1.55.2 1.95.2.4 0 .6.15.6.3 0 .25-.15.4-.65.4-2.55 0-5.5-.15-5.7-.15-.2 0-3.15.15-4.45.15-.55 0-.75-.1-.75-.35 0-.15.15-.35.55-.35s.7 0 1.1-.05c.95-.15 1.1-.75 1.3-2.45.2-1.8.2-5.4.2-9.15v-17.85c-1.65 0-4.3 0-6.3.05-3.2.05-3.9.55-4.6 1.6-.45.7-.65 1.3-.75 1.55-.15.35-.25.4-.45.4s-.25-.2-.25-.45c-.05-.3.7-3.6 1-4.95.15-.6.3-.8.45-.8.35 0 1.3.45 2.2.55 1.75.2 3.15.25 3.2.25h16.4c1.4 0 2.9-.1 3.6-.25.65-.15.8-.2.95-.2.2 0 .3.25.3.45 0 1.4-.1 4.7-.1 5.1 0 .45-.2.6-.35.6-.25 0-.35-.2-.35-.6 0-.15 0-.2-.05-.7-.2-2-.85-2.5-5.9-2.55-1.9 0-3.45-.05-4.9-.05z",
        fill: "var(--primary)",
        fillRule: "nonzero"
      }
    ),
    /* @__PURE__ */ jsx24(
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

// app/routes/projects.volkihar-knight/volkihar-knight.module.css
var volkihar_knight_module_default = { textSection: "c9dWb", logoContainer: "xkGZt", armor: "sxUqu" };

// app/routes/projects.volkihar-knight/volkihar-knight.jsx
import { jsx as jsx27, jsxs as jsxs16 } from "react/jsx-runtime";
var Carousel2 = lazy(
  () => Promise.resolve().then(() => (init_carousel2(), carousel_exports)).then((module) => ({ default: module.Carousel }))
), Armor2 = lazy(() => Promise.resolve().then(() => (init_armor(), armor_exports)).then((module) => ({ default: module.Armor }))), title = "Volkihar Knight", description = "A lore-friendly armor mod for The Elder Scrolls V: Skyrim. Released on PC and Xbox One with over one million downloads across both platforms.", roles = ["3D Modelling", "Texturing", "Graphic Design"], meta2 = () => baseMeta({ title, description, prefix: "Projects" });
function VolkiharKnight() {
  return /* @__PURE__ */ jsxs16(Fragment5, { children: [
    /* @__PURE__ */ jsx27(
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
    /* @__PURE__ */ jsxs16(ProjectContainer, { children: [
      /* @__PURE__ */ jsx27(
        ProjectBackground,
        {
          srcSet: `${volkihar_background_default} 1280w, ${volkihar_background_large_default} 1920w`,
          width: 1280,
          height: 720,
          placeholder: volkihar_background_placeholder_default,
          opacity: 0.5
        }
      ),
      /* @__PURE__ */ jsx27(
        ProjectHeader,
        {
          title,
          description,
          linkLabel: "Get the mod",
          url: "https://www.nexusmods.com/skyrimspecialedition/mods/4806/",
          roles
        }
      ),
      /* @__PURE__ */ jsx27(ProjectSection, { children: /* @__PURE__ */ jsx27(ProjectSectionContent, { children: /* @__PURE__ */ jsx27(
        ProjectImage,
        {
          srcSet: `${volkihar_banner_default} 800w, ${volkihar_banner_large_default} 1100w`,
          width: 800,
          height: 436,
          placeholder: volkihar_banner_placeholder_default,
          alt: "A dark elf wearing the Volkihar Knight armor with the logo overlaid on the image.",
          sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
        }
      ) }) }),
      /* @__PURE__ */ jsx27(ProjectSection, { children: /* @__PURE__ */ jsx27(ProjectSectionContent, { children: /* @__PURE__ */ jsx27(
        Image2,
        {
          srcSet: `${volkihar_book_default} 490w, ${volkihar_book_large_default} 960w`,
          width: 480,
          height: 300,
          placeholder: volkihar_book_placeholder_default,
          alt: "A book containing a sketch depicting the logo and armor",
          sizes: `(max-width: ${media.mobile}px) 90vw, (max-width: ${media.tablet}px) 80vw, 70vw`
        }
      ) }) }),
      /* @__PURE__ */ jsx27(ProjectSection, { children: /* @__PURE__ */ jsxs16(ProjectSectionColumns, { children: [
        /* @__PURE__ */ jsx27("div", { className: volkihar_knight_module_default.armor, children: /* @__PURE__ */ jsx27(Suspense, { children: /* @__PURE__ */ jsx27(Armor2, { alt: "3D model of the Volkihar Knight armor" }) }) }),
        /* @__PURE__ */ jsxs16("div", { className: volkihar_knight_module_default.textSection, children: [
          /* @__PURE__ */ jsx27(ProjectSectionHeading, { children: "Armor design" }),
          /* @__PURE__ */ jsx27(ProjectSectionText, { children: "As a player I noticed there weren\u2019t any heavy armor options for the Volkihar faction. This kinda sucks when you\u2019ve specialised in heavy armor and decide to join the faction and discover they all wear light armor." }),
          /* @__PURE__ */ jsx27(ProjectSectionText, { children: "My solution was to create a mod that combines meshes from the Volkihar faction armor with heavy plate armor. The mod builds upon textures and meshes from the base game, so it unifies with Skyrim\u2019s overall aesthetic. I combined and modified the meshes in 3DS Max. To establish a cohesive design across the set, I edited existing textures, and designed custom textures in Photoshop." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx27(ProjectSection, { children: /* @__PURE__ */ jsxs16(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx27("div", { className: volkihar_knight_module_default.logoContainer, children: /* @__PURE__ */ jsx27(
          VolkiharLogo,
          {
            role: "img",
            "aria-label": "The Volkihar Knight logo, a monogram using the letters 'V' and 'K"
          }
        ) }),
        /* @__PURE__ */ jsxs16(ProjectTextRow, { center: !0, noMargin: !0, children: [
          /* @__PURE__ */ jsx27(ProjectSectionHeading, { children: "Identity design" }),
          /* @__PURE__ */ jsx27(ProjectSectionText, { children: "The monogram uses custom designed typography to get the right balance of weight and angularity. I combined this with Trajan for the text, which is also used for Skyrim\u2019s game title wordmark." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx27(ProjectSection, { children: /* @__PURE__ */ jsx27(ProjectSectionContent, { children: /* @__PURE__ */ jsx27(Suspense, { children: /* @__PURE__ */ jsx27(
        Carousel2,
        {
          placeholder: volkihar_slide_placeholder_default,
          images: [
            {
              srcSet: `${volkihar_slide_1_default} 960w, ${volkihar_slide_1_large_default} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A female character wearing the black coloured armor set."
            },
            {
              srcSet: `${volkihar_slide_2_default} 960w, ${volkihar_slide_2_large_default} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A close up of the custom gauntlets design."
            },
            {
              srcSet: `${volkihar_slide_3_default} 960w, ${volkihar_slide_3_large_default} 1920w`,
              sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 1096px`,
              alt: "A female character wielding a sword and wearing the red coloured armor."
            }
          ],
          width: 1920,
          height: 1080
        }
      ) }) }) }),
      /* @__PURE__ */ jsx27(
        ProjectSection,
        {
          backgroundElement: /* @__PURE__ */ jsx27(
            Image2,
            {
              srcSet: `${volkihar_enderal_default} 1280w, ${volkihar_enderal_large_default} 1920w`,
              width: 1280,
              height: 720,
              placeholder: volkihar_enderal_placeholder_default,
              alt: "A promotional image from Enderal showing several characters in the game overlooking a distant city.",
              sizes: "100vw"
            }
          ),
          children: /* @__PURE__ */ jsx27(ProjectSectionContent, { children: /* @__PURE__ */ jsxs16(ProjectTextRow, { center: !0, centerMobile: !0, noMargin: !0, children: [
            /* @__PURE__ */ jsx27(
              Image2,
              {
                srcSet: `${volkihar_enderal_logo_default} 180w, ${volkihar_enderal_logo_large_default} 360w`,
                width: 180,
                height: 200,
                placeholder: volkihar_enderal_logo_placeholder_default,
                alt: "The Enderal game logo",
                sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 220px`,
                style: { maxWidth: 220, width: "100%", marginBottom: 30 }
              }
            ),
            /* @__PURE__ */ jsx27(ProjectSectionHeading, { children: "Featured in Enderal" }),
            /* @__PURE__ */ jsx27(ProjectSectionText, { children: "I was super stoked to have my work featured in the major standalone mod Enderal, which won best fan creation at the game awards in 2016. Within the game my armor design can be found being used for the Wandering Mage armor set." }),
            /* @__PURE__ */ jsx27(
              Button,
              {
                secondary: !0,
                iconHoverShift: !0,
                icon: "chevron-right",
                href: "https://store.steampowered.com/app/933480/Enderal_Forgotten_Stories/",
                children: "View on Steam"
              }
            )
          ] }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx27(Footer, {})
  ] });
}

// app/routes/projects.smart-sparrow/route.js
var route_exports2 = {};
__export(route_exports2, {
  default: () => SmartSparrow,
  meta: () => meta3
});

// app/assets/spr-background-large.jpg
var spr_background_large_default = "/assets/_assets/spr-background-large-IFPZ2AZ6.jpg";

// app/assets/spr-background-placeholder.jpg
var spr_background_placeholder_default = "/assets/_assets/spr-background-placeholder-62USQQ5L.jpg";

// app/assets/spr-background-volcanism-large.jpg
var spr_background_volcanism_large_default = "/assets/_assets/spr-background-volcanism-large-NYHEAOG4.jpg";

// app/assets/spr-background-volcanism-placeholder.jpg
var spr_background_volcanism_placeholder_default = "/assets/_assets/spr-background-volcanism-placeholder-IFLTDHXR.jpg";

// app/assets/spr-background-volcanism.jpg
var spr_background_volcanism_default = "/assets/_assets/spr-background-volcanism-ZS4OKJYM.jpg";

// app/assets/spr-background.jpg
var spr_background_default = "/assets/_assets/spr-background-Y7TR2J6L.jpg";

// app/assets/spr-components-dark-large.png
var spr_components_dark_large_default = "/assets/_assets/spr-components-dark-large-535BSUQP.png";

// app/assets/spr-components-dark-placeholder.png
var spr_components_dark_placeholder_default = "/assets/_assets/spr-components-dark-placeholder-C4T3OU6P.png";

// app/assets/spr-components-dark.png
var spr_components_dark_default = "/assets/_assets/spr-components-dark-2E2X64CF.png";

// app/assets/spr-components-light-large.png
var spr_components_light_large_default = "/assets/_assets/spr-components-light-large-LZESPBX6.png";

// app/assets/spr-components-light-placeholder.png
var spr_components_light_placeholder_default = "/assets/_assets/spr-components-light-placeholder-QA5TPKLR.png";

// app/assets/spr-components-light.png
var spr_components_light_default = "/assets/_assets/spr-components-light-5BH5BULN.png";

// app/assets/spr-design-system-dark-large.png
var spr_design_system_dark_large_default = "/assets/_assets/spr-design-system-dark-large-D2JRFU23.png";

// app/assets/spr-design-system-dark-placeholder.png
var spr_design_system_dark_placeholder_default = "/assets/_assets/spr-design-system-dark-placeholder-DNWHJ7MV.png";

// app/assets/spr-design-system-dark.png
var spr_design_system_dark_default = "/assets/_assets/spr-design-system-dark-U2ZIIHBH.png";

// app/assets/spr-design-system-light-large.png
var spr_design_system_light_large_default = "/assets/_assets/spr-design-system-light-large-NV7JGHXV.png";

// app/assets/spr-design-system-light-placeholder.png
var spr_design_system_light_placeholder_default = "/assets/_assets/spr-design-system-light-placeholder-XBEH3ITW.png";

// app/assets/spr-design-system-light.png
var spr_design_system_light_default = "/assets/_assets/spr-design-system-light-4PLPOWM5.png";

// app/assets/spr-lesson-builder-dark-large.jpg
var spr_lesson_builder_dark_large_default = "/assets/_assets/spr-lesson-builder-dark-large-MH5MJ5XC.jpg";

// app/assets/spr-lesson-builder-dark-placeholder.jpg
var spr_lesson_builder_dark_placeholder_default = "/assets/_assets/spr-lesson-builder-dark-placeholder-IRHUAAEP.jpg";

// app/assets/spr-lesson-builder-dark.jpg
var spr_lesson_builder_dark_default = "/assets/_assets/spr-lesson-builder-dark-UCRRJFYS.jpg";

// app/assets/spr-lesson-builder-light-large.jpg
var spr_lesson_builder_light_large_default = "/assets/_assets/spr-lesson-builder-light-large-TFBMPFXH.jpg";

// app/assets/spr-lesson-builder-light-placeholder.jpg
var spr_lesson_builder_light_placeholder_default = "/assets/_assets/spr-lesson-builder-light-placeholder-7YNZKLR4.jpg";

// app/assets/spr-lesson-builder-light.jpg
var spr_lesson_builder_light_default = "/assets/_assets/spr-lesson-builder-light-C6UQLSZR.jpg";

// app/assets/spr-motion-large.mp4
var spr_motion_large_default = "/assets/_assets/spr-motion-large-QBSBKF6L.mp4";

// app/assets/spr-motion-placeholder.jpg
var spr_motion_placeholder_default = "/assets/_assets/spr-motion-placeholder-CDNOSRUW.jpg";

// app/assets/spr-motion.mp4
var spr_motion_default = "/assets/_assets/spr-motion-SF7EH5GU.mp4";

// app/assets/spr-schema-1-dark-large.png
var spr_schema_1_dark_large_default = "/assets/_assets/spr-schema-1-dark-large-256M7WW4.png";

// app/assets/spr-schema-1-dark-placeholder.png
var spr_schema_1_dark_placeholder_default = "/assets/_assets/spr-schema-1-dark-placeholder-LM2WJKH7.png";

// app/assets/spr-schema-1-dark.png
var spr_schema_1_dark_default = "/assets/_assets/spr-schema-1-dark-YS6YMAMX.png";

// app/assets/spr-schema-1-light-large.png
var spr_schema_1_light_large_default = "/assets/_assets/spr-schema-1-light-large-DJN3H47S.png";

// app/assets/spr-schema-1-light-placeholder.png
var spr_schema_1_light_placeholder_default = "/assets/_assets/spr-schema-1-light-placeholder-GFSPUDIT.png";

// app/assets/spr-schema-1-light.png
var spr_schema_1_light_default = "/assets/_assets/spr-schema-1-light-A5GLLMQB.png";

// app/assets/spr-schema-2-dark-large.png
var spr_schema_2_dark_large_default = "/assets/_assets/spr-schema-2-dark-large-MDWCXOKQ.png";

// app/assets/spr-schema-2-dark-placeholder.png
var spr_schema_2_dark_placeholder_default = "/assets/_assets/spr-schema-2-dark-placeholder-56FH2CJC.png";

// app/assets/spr-schema-2-dark.png
var spr_schema_2_dark_default = "/assets/_assets/spr-schema-2-dark-5J2MTTER.png";

// app/assets/spr-schema-2-light-large.png
var spr_schema_2_light_large_default = "/assets/_assets/spr-schema-2-light-large-Z57LUZCT.png";

// app/assets/spr-schema-2-light-placeholder.png
var spr_schema_2_light_placeholder_default = "/assets/_assets/spr-schema-2-light-placeholder-OYWM46SA.png";

// app/assets/spr-schema-2-light.png
var spr_schema_2_light_default = "/assets/_assets/spr-schema-2-light-LICHA5N3.png";

// app/assets/spr-storyboarder-dark-large.png
var spr_storyboarder_dark_large_default = "/assets/_assets/spr-storyboarder-dark-large-L6UBKWVN.png";

// app/assets/spr-storyboarder-dark-placeholder.png
var spr_storyboarder_dark_placeholder_default = "/assets/_assets/spr-storyboarder-dark-placeholder-ZLHHZ3NT.png";

// app/assets/spr-storyboarder-dark.png
var spr_storyboarder_dark_default = "/assets/_assets/spr-storyboarder-dark-HCARTMMI.png";

// app/assets/spr-storyboarder-light-large.png
var spr_storyboarder_light_large_default = "/assets/_assets/spr-storyboarder-light-large-C4COPX2S.png";

// app/assets/spr-storyboarder-light-placeholder.png
var spr_storyboarder_light_placeholder_default = "/assets/_assets/spr-storyboarder-light-placeholder-AKUPAFE2.png";

// app/assets/spr-storyboarder-light.png
var spr_storyboarder_light_default = "/assets/_assets/spr-storyboarder-light-DVCBWF4F.png";

// app/components/segmented-control/segmented-control.jsx
init_style();
import {
  createContext as createContext2,
  useCallback as useCallback6,
  useContext as useContext2,
  useEffect as useEffect15,
  useId as useId3,
  useRef as useRef13,
  useState as useState11
} from "react";

// app/components/segmented-control/segmented-control.module.css
var segmented_control_module_default = { container: "-t9v8", options: "f-Fnj", button: "TDZKT", indicator: "rEUvW" };

// app/components/segmented-control/segmented-control.jsx
import { jsx as jsx28, jsxs as jsxs17 } from "react/jsx-runtime";
var SegmentedControlContext = createContext2({}), SegmentedControl = ({
  children,
  currentIndex,
  onChange,
  label,
  ...props
}) => {
  let labelId = `${useId3()}segmented-control-label`, optionRefs = useRef13([]), [indicator, setIndicator] = useState11(), handleKeyDown = (event) => {
    let { length } = optionRefs.current, prevIndex = (currentIndex - 1 + length) % length, nextIndex = (currentIndex + 1) % length;
    ["ArrowLeft", "ArrowUp"].includes(event.key) ? (onChange(prevIndex), optionRefs.current[prevIndex].current.focus()) : ["ArrowRight", "ArrowDown"].includes(event.key) && (onChange(nextIndex), optionRefs.current[nextIndex].current.focus());
  }, registerOption = useCallback6((optionRef) => {
    optionRefs.current = [...optionRefs.current, optionRef];
  }, []), unRegisterOption = useCallback6((optionRef) => {
    optionRefs.current = optionRefs.current.filter((ref) => ref !== optionRef);
  }, []);
  return useEffect15(() => {
    let currentOption = optionRefs.current[currentIndex]?.current, resizeObserver = new ResizeObserver(() => {
      let rect = currentOption?.getBoundingClientRect(), left = currentOption?.offsetLeft;
      setIndicator({ width: rect?.width, left });
    });
    return resizeObserver.observe(currentOption), () => {
      resizeObserver.disconnect();
    };
  }, [currentIndex]), /* @__PURE__ */ jsx28(
    SegmentedControlContext.Provider,
    {
      value: { optionRefs, currentIndex, onChange, registerOption, unRegisterOption },
      children: /* @__PURE__ */ jsxs17(
        "div",
        {
          className: segmented_control_module_default.container,
          role: "radiogroup",
          tabIndex: "0",
          "aria-labelledby": labelId,
          onKeyDown: handleKeyDown,
          ...props,
          children: [
            /* @__PURE__ */ jsx28(VisuallyHidden, { as: "label", id: labelId, children: label }),
            /* @__PURE__ */ jsxs17("div", { className: segmented_control_module_default.options, children: [
              !!indicator && /* @__PURE__ */ jsx28(
                "div",
                {
                  className: segmented_control_module_default.indicator,
                  "data-last": currentIndex === optionRefs.current.length - 1,
                  style: cssProps(indicator)
                }
              ),
              children
            ] })
          ]
        }
      )
    }
  );
}, SegmentedControlOption = ({ children, ...props }) => {
  let { optionRefs, currentIndex, onChange, registerOption, unRegisterOption } = useContext2(SegmentedControlContext), optionRef = useRef13(), index = optionRefs.current.indexOf(optionRef), isSelected = currentIndex === index;
  return useEffect15(() => (registerOption(optionRef), () => {
    unRegisterOption(optionRef);
  }), [registerOption, unRegisterOption]), /* @__PURE__ */ jsx28(
    "button",
    {
      className: segmented_control_module_default.button,
      tabIndex: isSelected ? 0 : -1,
      role: "radio",
      "aria-checked": isSelected,
      onClick: () => onChange(index),
      ref: optionRef,
      ...props,
      children
    }
  );
};

// app/routes/projects.smart-sparrow/smart-sparrow.jsx
init_style();
import { Suspense as Suspense2, lazy as lazy2, useMemo } from "react";

// app/routes/projects.smart-sparrow/smart-sparrow.module.css
var smart_sparrow_module_default = { video: "doPda", sidebarImages: "Jg6Xg", sidebarImage: "ggrRe" };

// app/routes/projects.smart-sparrow/smart-sparrow.jsx
import { Fragment as Fragment6, jsx as jsx30, jsxs as jsxs19 } from "react/jsx-runtime";
var Earth2 = lazy2(() => Promise.resolve().then(() => (init_earth2(), earth_exports)).then((module) => ({ default: module.Earth }))), EarthSection2 = lazy2(
  () => Promise.resolve().then(() => (init_earth2(), earth_exports)).then((module) => ({ default: module.EarthSection }))
), title2 = "Designing the future of education", description2 = "I worked as the design lead on a major iteration of Smart Sparrow\u2019s product. We took the platform in a bold new direction, focusing on becoming the best tool for learning designers.", roles2 = [
  "Art Direction",
  "UX and UI Design",
  "Front End Development",
  "Motion Design"
], meta3 = () => baseMeta({ title: title2, description: description2, prefix: "Projects" }), SmartSparrow = () => {
  let { theme, toggleTheme } = useTheme(), isDark = theme === "dark", themes2 = ["dark", "light"], handleThemeChange = (index) => {
    toggleTheme(themes2[index]);
  };
  return /* @__PURE__ */ jsxs19(Fragment6, { children: [
    /* @__PURE__ */ jsxs19(ProjectContainer, { children: [
      /* @__PURE__ */ jsx30(
        ProjectBackground,
        {
          opacity: isDark ? 0.5 : 0.8,
          src: spr_background_default,
          srcSet: `${spr_background_default} 1080w, ${spr_background_large_default} 2160w`,
          placeholder: spr_background_placeholder_default
        }
      ),
      /* @__PURE__ */ jsx30(
        ProjectHeader,
        {
          title: title2,
          description: description2,
          url: "https://www.smartsparrow.com/",
          roles: roles2
        }
      ),
      /* @__PURE__ */ jsx30(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx30(ProjectSectionContent, { children: /* @__PURE__ */ jsx30(
        ProjectImage,
        {
          raised: !0,
          srcSet: isDark ? `${spr_lesson_builder_dark_default} 1280w, ${spr_lesson_builder_dark_large_default} 2560w` : `${spr_lesson_builder_light_default} 1280w, ${spr_lesson_builder_light_large_default} 2560w`,
          width: 1280,
          height: 800,
          placeholder: isDark ? spr_lesson_builder_dark_placeholder_default : spr_lesson_builder_light_placeholder_default,
          sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`,
          alt: "The aero lesson builder app dragging an audio component into a screen about plant cells."
        },
        theme
      ) }) }),
      /* @__PURE__ */ jsx30(ProjectSection, { children: /* @__PURE__ */ jsxs19(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx30(ProjectSectionHeading, { children: "The problem" }),
        /* @__PURE__ */ jsx30(ProjectSectionText, { children: "In 2017, Smart Sparrow began a project to build an entirely new platform to from the ground up to serve as the most powerful tool for educators to create online learning experiences. The old platform was built in Flash, and there were a number of user experience problems to solve in the process of moving the platform to Javascript. The primary goals for the project were reducing barriers to collaboration, and making the platform both easier for new users, but with plenty of room to scale for advanced users." })
      ] }) }),
      /* @__PURE__ */ jsx30(ProjectSection, { light: isDark, children: /* @__PURE__ */ jsxs19(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx30(
          Image2,
          {
            srcSet: isDark ? `${spr_components_dark_default} 1024w, ${spr_components_dark_large_default} 2048w` : `${spr_components_light_default} 1024w, ${spr_components_light_large_default} 2048w`,
            width: 1024,
            hright: 800,
            placeholder: isDark ? spr_components_dark_placeholder_default : spr_components_light_placeholder_default,
            alt: `A set of ${theme} themed components for the aero design system`,
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsx30(ProjectTextRow, { children: /* @__PURE__ */ jsxs19(
          SegmentedControl,
          {
            currentIndex: themes2.indexOf(theme),
            onChange: handleThemeChange,
            children: [
              /* @__PURE__ */ jsx30(SegmentedControlOption, { children: "Dark theme" }),
              /* @__PURE__ */ jsx30(SegmentedControlOption, { children: "Light theme" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxs19(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx30(ProjectSectionHeading, { children: "The aero design system" }),
          /* @__PURE__ */ jsx30(ProjectSectionText, { children: "To streamline the design process across designers and engineers for such a large project, it was important to lay the foundations with a strong, flexible design system that could evolve during the product\u2019s development cycle. This would inform both the aesthetics and user experience across the product itself as well as the website and marketing material." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx30(ProjectSection, { children: /* @__PURE__ */ jsxs19(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsx30(
          Image2,
          {
            raised: !0,
            srcSet: isDark ? `${spr_design_system_dark_default} 1280w, ${spr_design_system_dark_large_default} 2560w` : `${spr_design_system_light_default} 1280w, ${spr_design_system_light_large_default} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? spr_design_system_dark_placeholder_default : spr_design_system_light_placeholder_default,
            alt: "The homepage of the aero design system docs website linking to principles and components.",
            sizes: "100vw"
          },
          theme
        ),
        /* @__PURE__ */ jsxs19(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx30(ProjectSectionHeading, { children: "Design system docs" }),
          /* @__PURE__ */ jsx30(ProjectSectionText, { children: "A design system is useless if no one knows how to use it, so we put together a comprehensive documentation website to cover principles, ux, accessibility, and component guidelines for designers and engineers working with the system." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx30(ThemeProvider, { theme: "dark", "data-invert": !0, children: /* @__PURE__ */ jsx30(
        ProjectSection,
        {
          backgroundOverlayOpacity: 0.5,
          backgroundElement: /* @__PURE__ */ jsx30(
            Image2,
            {
              srcSet: `${spr_background_volcanism_default} 1280w, ${spr_background_volcanism_large_default} 2560w`,
              width: 1280,
              height: 900,
              placeholder: spr_background_volcanism_placeholder_default,
              alt: "A dramatic ocean scene with lava forming a new land mass.",
              sizes: "100vw"
            }
          ),
          children: /* @__PURE__ */ jsxs19(ProjectSectionColumns, { width: "full", children: [
            /* @__PURE__ */ jsx30(ProjectSectionContent, { width: "full", children: /* @__PURE__ */ jsxs19(ProjectTextRow, { width: "s", children: [
              /* @__PURE__ */ jsx30(ProjectSectionHeading, { children: "Motion design" }),
              /* @__PURE__ */ jsx30(ProjectSectionText, { children: "Animation was a core principle in making the authoring experience a more understandable process. Elements animate in ways that indicate the cause and effect of each interaction to improve the fluidity of the overall experience." })
            ] }) }),
            /* @__PURE__ */ jsx30(
              Image2,
              {
                raised: !0,
                className: smart_sparrow_module_default.video,
                srcSet: `${spr_motion_default} 1280w, ${spr_motion_large_default} 2560w`,
                width: 1280,
                height: 800,
                placeholder: spr_motion_placeholder_default,
                alt: "A learning designer building and deploying an interactive lesson on volcanism using the app.",
                sizes: `(max-width: ${media.mobile}px) 100vw, 50vw`
              }
            )
          ] })
        }
      ) }),
      /* @__PURE__ */ jsx30(ProjectSection, { children: /* @__PURE__ */ jsxs19(ProjectSectionContent, { children: [
        /* @__PURE__ */ jsxs19(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx30(ProjectSectionHeading, { children: "Encouraging adaptivity" }),
          /* @__PURE__ */ jsx30(ProjectSectionText, { children: "A major part of solving for collaboration was being able to visualize the learner experience in the editor. This was especially beneficial for subject matter experts and instructors need to review and give feedback on the higher level structure without having to dig through all of the adaptivity scenarios screen by screen." })
        ] }),
        /* @__PURE__ */ jsx30(
          Image2,
          {
            raised: !0,
            srcSet: isDark ? `${spr_storyboarder_dark_default} 1280w, ${spr_storyboarder_dark_large_default} 2560w` : `${spr_storyboarder_light_default} 1280w, ${spr_storyboarder_light_large_default} 2560w`,
            width: 1280,
            height: 800,
            placeholder: isDark ? spr_storyboarder_dark_placeholder_default : spr_storyboarder_light_placeholder_default,
            alt: "A drag and drop storyboard style editor for creating an adaptive lesson.",
            sizes: `(max-width: ${media.mobile}px) 100vw, 80vw`
          },
          theme
        )
      ] }) }),
      /* @__PURE__ */ jsx30(ProjectSection, { children: /* @__PURE__ */ jsxs19(ProjectSectionColumns, { children: [
        /* @__PURE__ */ jsx30(ProjectSectionContent, { children: /* @__PURE__ */ jsxs19(ProjectTextRow, { children: [
          /* @__PURE__ */ jsx30(ProjectSectionHeading, { children: "An extensible plugin ecosystem usable by everyone" }),
          /* @__PURE__ */ jsx30(ProjectSectionText, { children: "The most powerful aspect of the platform is the ability to create custom plugins for any content, whether it be a degree, course, lesson, screen, or interactive component. Out of the box these can be made configurable with minimal effort from developers. Learning designers can then edit everything using a common configuration interface." })
        ] }) }),
        /* @__PURE__ */ jsxs19("div", { className: smart_sparrow_module_default.sidebarImages, children: [
          /* @__PURE__ */ jsx30(
            Image2,
            {
              className: smart_sparrow_module_default.sidebarImage,
              srcSet: isDark ? `${spr_schema_2_dark_default} 260w, ${spr_schema_2_dark_large_default} 520w` : `${spr_schema_2_light_default} 260w, ${spr_schema_2_light_large_default} 520w`,
              width: 260,
              height: 660,
              placeholder: isDark ? spr_schema_2_dark_placeholder_default : spr_schema_2_light_placeholder_default,
              alt: "Configuration options for a component.",
              sizes: `(max-width: ${media.mobile}px) 50vw, 25vw`
            }
          ),
          /* @__PURE__ */ jsx30(
            Image2,
            {
              className: smart_sparrow_module_default.sidebarImage,
              srcSet: isDark ? `${spr_schema_1_dark_default} 260w, ${spr_schema_1_dark_large_default} 520w` : `${spr_schema_1_light_default} 260w, ${spr_schema_1_light_large_default} 520w`,
              width: 260,
              height: 660,
              placeholder: isDark ? spr_schema_1_dark_placeholder_default : spr_schema_1_light_placeholder_default,
              alt: "Configuration options for text.",
              sizes: `(max-width: ${media.mobile}px) 50vw, 25vw`
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsx30(ThemeProvider, { theme: "dark", "data-invert": !0, children: /* @__PURE__ */ jsx30(Suspense2, { children: /* @__PURE__ */ jsxs19(
        Earth2,
        {
          className: smart_sparrow_module_default.earth,
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
                hidden: !0
              },
              {
                position: [0.47, -0.38, 0.04],
                text: "Ruapehu",
                hidden: !0
              },
              {
                position: [0.22, 0.44, -0.35],
                text: "St. Helens",
                hidden: !0
              },
              {
                position: [0.16, -0.06, 0.58],
                text: "Krakatoa",
                hidden: !0
              },
              {
                position: [0.11, 0.2, -0.56],
                text: "Par\xEDcutin",
                hidden: !0
              },
              {
                position: [0.52, 0.2, -0.23],
                text: "K\u012Blauea",
                hidden: !0
              },
              {
                position: [-0.24, 0.75, 0.24],
                text: "Mantle",
                delay: 800,
                hidden: !0
              },
              {
                position: [-0.24, 0.55, 0.24],
                text: "Outer core",
                delay: 800,
                hidden: !0
              },
              {
                position: [-0.24, 0.35, 0.24],
                text: "Inner core",
                delay: 800,
                hidden: !0
              }
            ],
            []
          ),
          scale: 0.6,
          children: [
            /* @__PURE__ */ jsx30(
              EarthSection2,
              {
                scrim: !0,
                animations: ["0:loop"],
                camera: [0, 0, 1.5],
                meshes: ["Atmosphere", "EarthFull"],
                children: /* @__PURE__ */ jsx30(ProjectSection, { children: /* @__PURE__ */ jsx30(ProjectSectionContent, { children: /* @__PURE__ */ jsxs19(ProjectTextRow, { center: !0, children: [
                  /* @__PURE__ */ jsx30(ProjectSectionHeading, { children: "Next-generation learning experiences" }),
                  /* @__PURE__ */ jsx30(ProjectSectionText, { children: "The flexibility of the product allowed for developers to create engaging interactive experiences as highly configurable plugins that could then be used and manipulated by learning designers." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx30(
              EarthSection2,
              {
                animations: ["0:loop"],
                camera: [0, 0, 2.4],
                meshes: ["Atmosphere", "EarthFull"]
              }
            ),
            /* @__PURE__ */ jsx30(
              EarthSection2,
              {
                animations: ["0:loop"],
                camera: [1.14, -1.39, 0.94],
                meshes: ["Atmosphere", "EarthFull"],
                children: /* @__PURE__ */ jsx30(ProjectSection, { children: /* @__PURE__ */ jsx30(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs19(ProjectTextRow, { justify: "end", width: "s", children: [
                  /* @__PURE__ */ jsx30(ProjectSectionHeading, { level: 4, as: "h3", children: "Bringing 3D into learning" }),
                  /* @__PURE__ */ jsx30(ProjectSectionText, { children: "One really cool example is the 3D screen plugin. Learning designers can load any model into it and then configure camera positions to animate to for each section." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx30(
              EarthSection2,
              {
                animations: ["0:loop"],
                camera: [1.17, 0.69, -1.47],
                meshes: ["Atmosphere", "EarthFull"],
                labels: [
                  "Pacific ring of fire",
                  "Ruapehu",
                  "St. Helens",
                  "Krakatoa",
                  "Par\xEDcutin",
                  "K\u012Blauea"
                ],
                children: /* @__PURE__ */ jsx30(ProjectSection, { children: /* @__PURE__ */ jsx30(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs19(ProjectTextRow, { justify: "start", width: "s", children: [
                  /* @__PURE__ */ jsx30(ProjectSectionHeading, { level: 4, as: "h3", children: "Interactivity" }),
                  /* @__PURE__ */ jsx30(ProjectSectionText, { children: "Learners can then be directed to specific parts of the model and shown labels. They\u2019re also able to click and drag to orbit around and freely explore at any time." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx30(
              EarthSection2,
              {
                animations: ["0:loop"],
                camera: [1.81, 0.51, 0.43],
                meshes: ["Atmosphere", "EarthFull"],
                labels: [
                  "Pacific ring of fire",
                  "Ruapehu",
                  "St. Helens",
                  "Krakatoa",
                  "Par\xEDcutin",
                  "K\u012Blauea"
                ]
              }
            ),
            /* @__PURE__ */ jsx30(
              EarthSection2,
              {
                animations: ["0:loop"],
                camera: [0.37, 1.02, 1.84],
                meshes: ["EarthPartial", "Chunk"],
                labels: ["Mantle", "Outer core", "Inner core"],
                children: /* @__PURE__ */ jsx30(ProjectSection, { children: /* @__PURE__ */ jsx30(ProjectSectionContent, { width: "xl", children: /* @__PURE__ */ jsxs19(ProjectTextRow, { justify: "end", width: "s", children: [
                  /* @__PURE__ */ jsx30(ProjectSectionHeading, { level: 4, as: "h3", children: "Animation" }),
                  /* @__PURE__ */ jsx30(ProjectSectionText, { children: "Learning designers can pick an animation included in the model to play or loop for any section without having to use any complex animation tools." })
                ] }) }) })
              }
            ),
            /* @__PURE__ */ jsx30(
              EarthSection2,
              {
                scrimReverse: !0,
                animations: ["0:loop"],
                camera: [0.37, 1.02, 1.84],
                meshes: ["Atmosphere", "EarthFull"]
              }
            )
          ]
        }
      ) }) }),
      /* @__PURE__ */ jsx30(ProjectSection, { children: /* @__PURE__ */ jsx30(ProjectSectionContent, { children: /* @__PURE__ */ jsxs19(ProjectTextRow, { center: !0, centerMobile: !0, noMargin: !0, children: [
        /* @__PURE__ */ jsxs19(
          "svg",
          {
            width: "141",
            height: "43",
            viewBox: "0 0 141 43",
            fill: "currentColor",
            style: { marginBottom: "2em" },
            children: [
              /* @__PURE__ */ jsx30("path", { d: "M87.92 30.05a.3.3 0 0 0-.34-.18l-.04.02c-.42.08-.74.06-.97-.1-.32-.2-.47-.69-.47-1.47V21.3c0-2.75-1.66-4.14-4.94-4.14-2.93 0-5.23 1.37-5.23 3.12 0 .9.55 1.55 1.37 1.64a1.7 1.7 0 0 0 1.42-.56c.72-.75.63-1.64-.25-2.6a3.52 3.52 0 0 1 2.48-.85c1.7 0 2.43 1 2.43 3.33v1.78c-.4.12-.77.24-1.45.4a18.9 18.9 0 0 0-4.7 1.52 3.19 3.19 0 0 0-1.78 2.99c0 1.46.98 3.17 3.73 3.17 1.54 0 2.92-.72 4.33-2.26.12 1.6.74 2.2 2.24 2.2.72 0 1.3-.16 1.98-.49a.4.4 0 0 0 .2-.49Zm-4.54-2.15c-.33.46-1.42 1.83-2.78 1.83-1.84 0-2.23-1.27-2.23-2.34 0-1.75 1.37-2.57 5.01-3.46v3.97Zm35.23 3.25c-3.9 0-6.83-3-6.83-7 0-3.9 3.06-7.09 6.83-7.09 3.81 0 6.8 3.06 6.8 6.98 0 4.4-3.53 7.11-6.8 7.11Zm-.15-13.34c-1.68 0-3.61.72-3.61 6.28 0 4.25 1.27 6.31 3.88 6.31 2.5 0 3.61-1.94 3.61-6.3 0-4.23-1.27-6.29-3.88-6.29Zm-60.06-.5c0 3.24-.8 5.02-4.94 5.02h-2.2v-9.78h2.29c4.28 0 4.85 2.4 4.85 4.76Zm-7.14 11.01v-5.09h1.99c2.96 0 5.22-.61 6.7-1.83a5.06 5.06 0 0 0 1.88-4.03c0-4.65-4.55-5.63-8.37-5.63h.01-7.74a.32.32 0 0 0-.32.31v.03-.01c0 .16.1.3.25.36.69.25 2.56-.1 2.56 1.88v14.01c0 1.02-.46 1.74-2.55 1.94a.31.31 0 0 0-.3.3v.06c0 .17.15.3.33.3h8.27c.18 0 .32-.13.32-.3v-.05a.3.3 0 0 0-.3-.3c-2.27-.19-2.73-.88-2.73-1.95v-5.08 5.08ZM68.1 17.06c-3.6 0-6.53 3.21-6.53 7.17 0 4 2.75 6.9 6.53 6.9 3.18 0 4.73-1.87 5.62-3.28a.31.31 0 0 0-.09-.42l-.04-.03a.32.32 0 0 0-.44.07c-1.17 1.44-2.19 2.28-3.96 2.28-2.23 0-4.62-1.52-4.62-5.79v-.71h9.15c.03 0 .05-.02.05-.05v-.07a5.72 5.72 0 0 0-1.4-4.42 5.67 5.67 0 0 0-4.27-1.65Zm-3.47 5.29c.3-2.92 1.45-4.52 3.26-4.52.91 0 1.58.25 2.06.76.65.7.93 1.96.82 3.76h-6.14Zm41.39.15c-2.5-.69-3.48-1.39-3.48-2.5 0-1.26 1.01-2.17 2.4-2.17 1.65 0 2.36.77 4.1 3.64l.01.03.03.03h.25c.18 0 .32-.14.32-.32v-4.1c0-.03-.02-.05-.02-.05h-.34c-.1 0-.19.04-.25.11l-.55.66a6.64 6.64 0 0 0-2.98-.77c-2.87 0-4.88 1.75-4.88 4.25 0 2.36 1.58 3.24 4.31 3.97 2.66.71 3.6 1.46 3.6 2.85 0 1.54-1.51 2.23-2.59 2.23-2 0-2.84-.73-4.76-4.13l-.02-.04-.02-.02h-.26a.32.32 0 0 0-.32.31v4.6c0 .03.02.06.05.06h.32c.09 0 .17-.04.23-.1l.87-.86c1.03.63 2.56.96 3.56.96 1.5 0 2.72-.47 3.55-1.36a4.54 4.54 0 0 0 1.15-3.14c0-2.14-1.16-3.26-4.28-4.14Zm-15.14 6.78c0 .7-.18.94-1.33 1.01a.32.32 0 0 0-.3.31c0 .18.15.31.32.31h5.66a.3.3 0 0 0 .31-.3c0-.17-.13-.3-.3-.31-1.3-.07-1.65-.28-1.65-1.02v-8.2c.94-1.52 1.6-2.32 2.74-2.56-.06.2-.1.42-.1.6 0 1 .7 1.7 1.72 1.7.99 0 1.68-.7 1.68-1.7 0-.93-.6-2.03-2.28-2.03-1.37 0-2.69.78-3.82 2.64v-2.1a.39.39 0 0 0-.4-.39l-3.56.1a.3.3 0 0 0-.3.3v.05c0 .16.1.3.26.31 1.19.17 1.35.73 1.35 1.3v9.98Zm39.15-12.05c.08 0 .16.04.22.1.06.05.1.13.1.22v2.33s1.17-2.74 4.94-2.74h.04c2.35 0 3.7 1.48 3.7 4.06v8.06c0 .71.18.95 1.32 1.02.17 0 .3.14.3.31 0 .17-.14.31-.32.31h-5.08a.32.32 0 0 1-.03-.63c.92-.08 1.07-.3 1.07-1v-7.29c0-2.4-.7-3.33-2.47-3.33-1.2 0-2.19 1.03-2.8 1.9 0 0-.31.38-.65 1.12l.03 7.6c0 .7.15.92 1.05 1a.32.32 0 0 1-.03.63h-5.06a.32.32 0 0 1-.31-.31c0-.17.13-.3.3-.31 1.14-.08 1.32-.3 1.32-1.02v-9.95c0-.58-.16-1.14-1.36-1.31a.31.31 0 0 1-.26-.31v-.05c0-.17.13-.3.3-.31l3.68-.1Z" }),
              /* @__PURE__ */ jsx30(
                "path",
                {
                  fillRule: "evenodd",
                  d: "M35.47 30.82c6.24-11.43 4.15-22.73-4.81-27.77C20.76-2.5 7.84.52 2.28 12.46c-3.84 8.2-2.1 22.48 6.82 27.6 8.92 5.1 20.9.81 26.37-9.23Zm-3.02-12.15c.3-2.3-.24-5.1-2-6.95l-.02-.02c-3.38-3.76-8.06-4-11.02-3.92a16.61 16.61 0 0 0-7.55 2.14c-1.68.86-3.2 2.35-3.81 3.08-.4.47-1.06 1.44-.7 2.31.29.73 1.4.68 1.81.37.22-.16.45-.37.7-.6l.72-.64c2.53-2.07 4.78-3.37 10-3.37 5.23 0 8.06 3.22 8.06 6.09 0 2.87-1.38 4.82-3.97 6.09a10.54 10.54 0 0 1-4.4 1.18c.13-2.78.2-5.41.2-5.41 0-.33.02-.65.03-.96.07-1.55.12-2.72-1.01-2.94-1.36-.27-3.86 0-3.9 1.52-.06-.23.25 12.51.31 12.77l.02.29c.03.32.15.6.35.83a1.38 1.38 0 0 0 .98.41c.28 0 .68-.05 1.09-.16.5-.15 1.02-.39 1.31-.77.15-.2.27-.38.34-.72.04-.24.13-1.72.15-2.15 2.75-.02 5.54-.53 7.67-1.8 2.68-1.62 4.29-4.04 4.64-6.67ZM18.23 32.41a2.12 2.12 0 0 1 1.69 1.99c0 .52-.22.99-.63 1.32-.35.28-.8.43-1.3.43h-.01c-.23 0-.46-.03-.69-.1-.39-.1-.7-.29-.9-.52-.19-.22-.31-.5-.37-.83-.08-.5.05-1.04.36-1.48a1.9 1.9 0 0 1 1.53-.84c.1 0 .22 0 .32.03Z"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx30(ProjectSectionHeading, { children: "Project outcomes" }),
        /* @__PURE__ */ jsxs19(ProjectSectionText, { children: [
          "Ultimately the project was successful after Smart Sparrow and the aero platform were",
          " ",
          /* @__PURE__ */ jsx30(Link2, { href: "https://www.prnewswire.com/news-releases/pearson-acquires-interactive-learning-technology-from-smart-sparrow-300987673.html", children: "acquired by Pearson in 2020" }),
          " ",
          "to become a foundation for their next generation learning platform."
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsx30(Footer, {})
  ] });
};

// mdx:routes\articles.hello-world.mdx
var articles_hello_world_exports = {};
__export(articles_hello_world_exports, {
  attributes: () => attributes2,
  default: () => articles_hello_world_default,
  filename: () => filename2,
  handle: () => handle2,
  headers: () => headers2,
  meta: () => meta4
});
import { Fragment as Fragment7, jsx as jsx31, jsxs as jsxs20 } from "react/jsx-runtime";
var attributes2 = {
  title: "Hello world: how I built this site",
  abstract: "I originally built this portfolio site back in 2018, and since then it's evolved quite a bit. Recently I migrated from Create React App to Next.js and made some major upgrades in the process.",
  date: "2022-04-21",
  banner: "/static/hello-world-banner.jpg"
};
function _createMdxContent2(props) {
  let _components = Object.assign({
    h2: "h2",
    p: "p",
    a: "a",
    img: "img",
    ul: "ul",
    li: "li",
    code: "code",
    h3: "h3"
  }, props.components);
  return /* @__PURE__ */ jsxs20(Fragment7, { children: [
    /* @__PURE__ */ jsx31(_components.h2, { children: "How it all started" }),
    `
`,
    /* @__PURE__ */ jsxs20(_components.p, { children: [
      `Back in 2018 I needed to update my portfolio site (as designers are wont to do). I thought I'd steer away from current trends and build a site that tapped into the 80s and 90s Cyberpunk aesthetic. The genre contains some of my favorite movies like Ghost in the Shell (1995), The Matrix (1999), and Akira (1988). That's where I borrowed few visual motifs like the bold katakana lettering on the homepage and the text decoding effect as a homage to the Matrix's "Digital rain" effect, which was itself inspired by Ghost in the Shell's opening credits. There's even a nod to Ghost in the Shell on my `,
      /* @__PURE__ */ jsx31(_components.a, { href: "/404", children: "404 page" }),
      "."
    ] }),
    `
`,
    /* @__PURE__ */ jsx31(_components.p, { children: /* @__PURE__ */ jsx31(_components.img, { src: "/static/inspiration.png", alt: "A scene from Ghost in the Shell (1995) with the Major cloaking with thermoptic camouflage; the poster for Akira; The Matrix's digital rain effect" }) }),
    `
`,
    /* @__PURE__ */ jsx31(_components.h2, { children: "The first iteration" }),
    `
`,
    /* @__PURE__ */ jsx31(_components.p, { children: "I was learning React when I first built this website, and while overkill for a personal portfolio site, it was a great opportunity to learn and experiment with learning it. I've found the best way to learn is by actually making something that you intend to use and ship." }),
    `
`,
    /* @__PURE__ */ jsx31(_components.p, { children: "The no-brainer choice at the time was Create React App. It served me well in getting things up and running without having to fuss about with config. On top of that, I was using Styled Components, Tween.js, and React Transition Group. I was also playing with some early Three.js effects like the displacement sphere that still resides on the homepage." }),
    `
`,
    /* @__PURE__ */ jsxs20(_components.p, { children: [
      "Since then I've used this website as a playground for experimenting with new tech and techniques, so over time I've overhauled pretty much everything. A big change along the way was replacing images of my work in static mockups with real-time rendered interactive 3D devices using models I created for the ",
      /* @__PURE__ */ jsx31(_components.a, { href: "https://www.figma.com/community/plugin/819335598581469537/Clay-Mockups-3D", children: "Clay Mockups 3D Figma plugin" }),
      "."
    ] }),
    `
`,
    /* @__PURE__ */ jsx31(_components.p, { children: /* @__PURE__ */ jsx31(_components.img, { src: "/static/clay-mockups.png", alt: "Thumbnail for my Clay Mockups 3D plugin" }) }),
    `
`,
    /* @__PURE__ */ jsx31(_components.h2, { children: "Migrating to Next.js" }),
    `
`,
    /* @__PURE__ */ jsx31(_components.p, { children: "With Create React App I was using a somewhat janky and unmaintained package to prerender the site as static HTML in Puppeteer. This worked okay for the most part, but I wanted a more robust solution for posting articles (like this one you're reading) using MDX. I had a half baked version of this lying dormant in the repo, but it never felt good enough to publish. I looked at a few options like Gatsby, Vite, and Parcel, and Remix, but Next.js stood out as the most suited to my needs." }),
    `
`,
    /* @__PURE__ */ jsxs20(_components.ul, { children: [
      `
`,
      /* @__PURE__ */ jsx31(_components.li, { children: "The site is now based on Next.js. Is a much better fit than Create React App. For now I'm just using it to create a static export, but maybe I'll add some server rendered stuff in the future." }),
      `
`,
      /* @__PURE__ */ jsx31(_components.li, { children: "Styling is now vanilla CSS with postcss to add support for the future native CSS nesting and custom media queries features. I'm using CSS modules instead of BEM syntax to avoid style conflicts." }),
      `
`,
      /* @__PURE__ */ jsxs20(_components.li, { children: [
        "For generating pages from ",
        /* @__PURE__ */ jsx31(_components.code, { children: ".mdx" }),
        " files, I'm using Kent C Dodds' ",
        /* @__PURE__ */ jsx31(_components.a, { href: "https://github.com/kentcdodds/mdx-bundler", children: "mdx-bundler" }),
        ". In combination with Next.js it makes generating pages from ",
        /* @__PURE__ */ jsx31(_components.code, { children: ".mdx" }),
        " files really quick and simple."
      ] }),
      `
`,
      /* @__PURE__ */ jsx31(_components.li, { children: "For animation I've moved from Tween.js and React Transition Group to just Framer Motion." }),
      `
`,
      /* @__PURE__ */ jsxs20(_components.li, { children: [
        "3D effects are still all using Three.js, but I've added ",
        /* @__PURE__ */ jsx31(_components.code, { children: "three-stdlib" }),
        " as a better maintained replacement for modules from Three's examples."
      ] }),
      `
`
    ] }),
    `
`,
    /* @__PURE__ */ jsx31(_components.h2, { children: "Not all smooth sailing" }),
    `
`,
    /* @__PURE__ */ jsx31(_components.p, { children: "For the most part, the migration was pretty straight-forward. The way I has structured the site with React Router lent itself well to conforming with Next.js's file-based routing, and I was already using postcss for styling. I did, however, encounter a couple of problems:" }),
    `
`,
    /* @__PURE__ */ jsx31(_components.h3, { children: "1. Route transitions" }),
    `
`,
    /* @__PURE__ */ jsxs20(_components.p, { children: [
      "There was a bit of a conflict when it came to animated route transitions. Next.js will immediately yank out all of the styles for the previous page when navigating to a new one. This works great when you're not animating between pages because it cleans up any unused styles form hanging around. When you are animating the page transition though, all of a sudden the previous page becomes jarringly completely unstyled as it transitions out. This problem one of ",
      /* @__PURE__ */ jsx31(_components.a, { href: "https://github.com/vercel/next.js/issues/17464", children: "the most commented and reacted to issues" }),
      " on the Next.js repo, so hopefully there's a fix soon, but for now I've dropped in a ",
      /* @__PURE__ */ jsx31(_components.a, { href: "https://github.com/vercel/next.js/issues/17464#issuecomment-796430107", children: "hack to fix things" }),
      " from the issue's comments."
    ] }),
    `
`,
    /* @__PURE__ */ jsx31(_components.h3, { children: "2. Scroll restoration" }),
    `
`,
    /* @__PURE__ */ jsx31(_components.p, { children: "Somewhat related to the route transitions, I had to opt out of both Next.js's and the native browser's scroll restoration in order to prevent the browser immediately scrolling to the top when the page started transitioning out. Next.js also doesn't appear to handle shifting focus when linking to the id of an element within the page, so I added that in for accessibility." }),
    `
`,
    /* @__PURE__ */ jsx31(_components.h2, { children: "Looking back, and forward" }),
    `
`,
    /* @__PURE__ */ jsx31(_components.p, { children: "It's been pretty neat to see how popular the site's been on Github, with 500 stars (as of writing this post). It's also neat seeing how people adapt it to their own style and modify it, which is part of the reason I made it open source. I want others to be able to take it apart and see how it's made, learn from and improve upon it. That's what inspect element used to be like on the web, but with modern sites compiling and minifying and injecting garbled strings into css classes that's not as simple these days. The next best thing I could do was to open source it." }),
    `
`,
    /* @__PURE__ */ jsx31(_components.p, { children: "I look forward to continuing to use this site as a playground, and it'll be interesting to compare the next iteration to where it is today." }),
    `
`,
    /* @__PURE__ */ jsx31(_components.h2, { children: "Update: Feb 2024" }),
    `
`,
    /* @__PURE__ */ jsxs20(_components.p, { children: [
      `I recently migrated the site to Remix now that they've got good support for CSS modules meaning I didn't need to convert all of my styling. It was mostly a process of deleting all of the hacks mentioned above in this post, and things just work and feel more "web standard". I'm now using the `,
      /* @__PURE__ */ jsx31(_components.a, { href: "https://developer.mozilla.org/en-US/docs/Web/API/View_Transitions_API", children: "CSS view transitions API" }),
      " to handle smoothly crossfading on route transitions, which is a feature baked into React Router (and as a result Remix). I don't need to do weird javascript hacks to try and set the correct theme (which still inevitably led to a flash of unthemed content) - I'm now storing the preferred theme in a session cookie which Remix makes really easy to do."
    ] }),
    `
`,
    /* @__PURE__ */ jsx31(_components.p, { children: "Overall I'm really happy with Remix, would totally recommend it. I would like to eventually replace a lot of animations triggered by Javascript with the upcoming scroll driven animations CSS API, but browser support isn't there yet, so maybe some time later this year." })
  ] });
}
function MDXContent2(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsx31(MDXLayout, { ...props, children: /* @__PURE__ */ jsx31(_createMdxContent2, { ...props }) }) : _createMdxContent2(props);
}
var articles_hello_world_default = MDXContent2, filename2 = "articles.hello-world.mdx", headers2 = typeof attributes2 < "u" && attributes2.headers, meta4 = typeof attributes2 < "u" && attributes2.meta, handle2 = typeof attributes2 < "u" && attributes2.handle;

// app/routes/projects.slice/route.js
var route_exports3 = {};
__export(route_exports3, {
  default: () => Slice,
  meta: () => meta5
});

// app/assets/slice-annotation-large.png
var slice_annotation_large_default = "/assets/_assets/slice-annotation-large-LJQ3JEQU.png";

// app/assets/slice-annotation-placeholder.png
var slice_annotation_placeholder_default = "/assets/_assets/slice-annotation-placeholder-UTVIR27F.png";

// app/assets/slice-annotation.png
var slice_annotation_default = "/assets/_assets/slice-annotation-LMJ4SHTG.png";

// app/assets/slice-app-large.jpg
var slice_app_large_default = "/assets/_assets/slice-app-large-SQA2X7QL.jpg";

// app/assets/slice-app-placeholder.jpg
var slice_app_placeholder_default = "/assets/_assets/slice-app-placeholder-5BEINETE.jpg";

// app/assets/slice-app.jpg
var slice_app_default = "/assets/_assets/slice-app-ZLTVDULD.jpg";

// app/assets/slice-background-bar-large.jpg
var slice_background_bar_large_default = "/assets/_assets/slice-background-bar-large-JM2XLI7V.jpg";

// app/assets/slice-background-bar-placeholder.jpg
var slice_background_bar_placeholder_default = "/assets/_assets/slice-background-bar-placeholder-CC6U754O.jpg";

// app/assets/slice-background-bar.jpg
var slice_background_bar_default = "/assets/_assets/slice-background-bar-HPSRTEPD.jpg";

// app/assets/slice-background-large.jpg
var slice_background_large_default = "/assets/_assets/slice-background-large-FXC34VWZ.jpg";

// app/assets/slice-background-placeholder.jpg
var slice_background_placeholder_default = "/assets/_assets/slice-background-placeholder-3JQ6HPDP.jpg";

// app/assets/slice-background.jpg
var slice_background_default = "/assets/_assets/slice-background-3HDNKLRZ.jpg";

// app/assets/slice-irl-placeholder.jpg
var slice_irl_placeholder_default = "/assets/_assets/slice-irl-placeholder-RFQ6HNVD.jpg";

// app/assets/slice-irl.jpg
var slice_irl_default = "/assets/_assets/slice-irl-3T3HH7DN.jpg";

// app/assets/slice-sidebar-annotations-large.png
var slice_sidebar_annotations_large_default = "/assets/_assets/slice-sidebar-annotations-large-FTIP6NCQ.png";

// app/assets/slice-sidebar-annotations-placeholder.png
var slice_sidebar_annotations_placeholder_default = "/assets/_assets/slice-sidebar-annotations-placeholder-YFXXAA2E.png";

// app/assets/slice-sidebar-annotations.png
var slice_sidebar_annotations_default = "/assets/_assets/slice-sidebar-annotations-5ITXTVIF.png";

// app/assets/slice-sidebar-layers-large.png
var slice_sidebar_layers_large_default = "/assets/_assets/slice-sidebar-layers-large-4GTTK7BF.png";

// app/assets/slice-sidebar-layers-placeholder.png
var slice_sidebar_layers_placeholder_default = "/assets/_assets/slice-sidebar-layers-placeholder-ROSLNJBM.png";

// app/assets/slice-sidebar-layers.png
var slice_sidebar_layers_default = "/assets/_assets/slice-sidebar-layers-7JQOI62D.png";

// app/assets/slice-slides-large.jpg
var slice_slides_large_default = "/assets/_assets/slice-slides-large-ULMCGDSJ.jpg";

// app/assets/slice-slides-placeholder.jpg
var slice_slides_placeholder_default = "/assets/_assets/slice-slides-placeholder-WF6KXRTC.jpg";

// app/assets/slice-slides.jpg
var slice_slides_default = "/assets/_assets/slice-slides-TKNQTCXE.jpg";

// app/routes/projects.slice/slice.jsx
init_style();
import { Fragment as Fragment8 } from "react";

// app/routes/projects.slice/slice.module.css
var slice_module_default = { columns: "hu83r", grid: "_641lY", gridImage: "lpgHB", gridBackground: "m1bL-", gridForeground: "zie1W", gridText: "ZkM9r", sidebarImages: "JoOcp", sidebarImagesText: "Am-Wf", sidebarImage: "O1A2-" };

// app/routes/projects.slice/slice.jsx
import { jsx as jsx32, jsxs as jsxs21 } from "react/jsx-runtime";
var title3 = "Biomedical image collaboration", description3 = "This project involved designing a better way for biomedical educators and learners to annotate digital slides together.", roles3 = ["User Research", "UX Design", "Interface Design"], meta5 = () => baseMeta({ title: title3, description: description3, prefix: "Projects" }), Slice = () => /* @__PURE__ */ jsxs21(Fragment8, { children: [
  /* @__PURE__ */ jsxs21(ProjectContainer, { className: slice_module_default.slice, children: [
    /* @__PURE__ */ jsx32(
      ProjectBackground,
      {
        src: slice_background_default,
        srcSet: `${slice_background_default} 1280w, ${slice_background_large_default} 2560w`,
        width: 1280,
        height: 800,
        placeholder: slice_background_placeholder_default,
        opacity: 0.8
      }
    ),
    /* @__PURE__ */ jsx32(
      ProjectHeader,
      {
        title: title3,
        description: description3,
        url: "https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1",
        roles: roles3
      }
    ),
    /* @__PURE__ */ jsx32(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsx32(ProjectSectionContent, { children: /* @__PURE__ */ jsx32(
      ProjectImage,
      {
        srcSet: `${slice_app_default} 800w, ${slice_app_large_default} 1920w`,
        width: 800,
        height: 500,
        placeholder: slice_app_placeholder_default,
        alt: "The Slice web application showing a selected user annotation.",
        sizes: `(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`
      }
    ) }) }),
    /* @__PURE__ */ jsx32(ProjectSection, { children: /* @__PURE__ */ jsxs21(ProjectSectionColumns, { centered: !0, className: slice_module_default.columns, children: [
      /* @__PURE__ */ jsxs21("div", { className: slice_module_default.imagesText, children: [
        /* @__PURE__ */ jsx32(ProjectSectionHeading, { children: "Bringing it together" }),
        /* @__PURE__ */ jsx32(ProjectSectionText, { children: "Teachers needed a better way to create collaborative group activities by annotating slides on Slice. Before starting this project, a layer could only be annotated by a single user, making it difficult for learners to work together." }),
        /* @__PURE__ */ jsx32(ProjectSectionText, { children: "Our solution was to allow users to be invited to a layer, where they can see others\u2019 annotations and make their own." })
      ] }),
      /* @__PURE__ */ jsxs21("div", { className: slice_module_default.sidebarImages, children: [
        /* @__PURE__ */ jsx32(
          Image2,
          {
            className: slice_module_default.sidebarImage,
            srcSet: `${slice_sidebar_layers_default} 350w, ${slice_sidebar_layers_large_default} 700w`,
            width: 350,
            height: 750,
            placeholder: slice_sidebar_layers_placeholder_default,
            alt: "The layers sidebar design, now with user profiles.",
            sizes: `(max-width: ${media.mobile}px) 200px, 343px`
          }
        ),
        /* @__PURE__ */ jsx32(
          Image2,
          {
            className: slice_module_default.sidebarImage,
            srcSet: `${slice_sidebar_annotations_default} 350w, ${slice_sidebar_annotations_large_default} 700w`,
            width: 350,
            height: 750,
            placeholder: slice_sidebar_annotations_placeholder_default,
            alt: "Multiple user annotations on a shared layer.",
            sizes: `(max-width: ${media.mobile}px) 200px, 343px`
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx32(ProjectSection, { light: !0, children: /* @__PURE__ */ jsxs21(ProjectSectionContent, { children: [
      /* @__PURE__ */ jsxs21(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx32(ProjectSectionHeading, { children: "Improving the experience" }),
        /* @__PURE__ */ jsx32(ProjectSectionText, { children: "A problem we heard about often form users was that it was difficult to find images they had previously seen or worked on. To solve this we added a new tab that lists all previously annotated slides. In addition, we added the ability to favorite slides, so if users find an interesting slide they want to annotate later, they can easily save it to their account." })
      ] }),
      /* @__PURE__ */ jsx32(
        Image2,
        {
          srcSet: `${slice_slides_default} 800w, ${slice_slides_large_default} 1920w`,
          width: 800,
          height: 500,
          placeholder: slice_slides_placeholder_default,
          alt: "The new My Slides tab in slice, showing annotated and favorited slides.",
          sizes: `(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`
        }
      )
    ] }) }),
    /* @__PURE__ */ jsx32(ProjectSection, { padding: "top", children: /* @__PURE__ */ jsxs21(ProjectSectionContent, { className: slice_module_default.grid, children: [
      /* @__PURE__ */ jsxs21("div", { className: slice_module_default.gridImage, children: [
        /* @__PURE__ */ jsx32("div", { className: slice_module_default.gridBackground, children: /* @__PURE__ */ jsx32(
          Image2,
          {
            srcSet: `${slice_background_bar_default} 440w, ${slice_background_bar_large_default} 880w`,
            width: 440,
            height: 790,
            placeholder: slice_background_bar_placeholder_default,
            alt: "",
            role: "presentation",
            sizes: `(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`
          }
        ) }),
        /* @__PURE__ */ jsx32("div", { className: slice_module_default.gridForeground, children: /* @__PURE__ */ jsx32(
          Image2,
          {
            srcSet: `${slice_annotation_default} 440w, ${slice_annotation_large_default} 880w`,
            width: 440,
            height: 340,
            placeholder: slice_annotation_placeholder_default,
            alt: "An annotation preview popover with statistics for shape perimeter and area.",
            sizes: `(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxs21("div", { className: slice_module_default.gridText, children: [
        /* @__PURE__ */ jsx32(ProjectSectionHeading, { children: "Meaningful details" }),
        /* @__PURE__ */ jsx32(ProjectSectionText, { children: "Marking and annotating areas on high resolution biomedical images is the core experience of the app, and it was easy to get lost or lose sense of scale when zooming in on details. Adding measurements for the perimeter and area of an annotation both helped to communicate the overall scale of the image and how large the annotated feature is in comparison." })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx32(ProjectSection, { children: /* @__PURE__ */ jsxs21(ProjectSectionContent, { children: [
      /* @__PURE__ */ jsxs21(ProjectTextRow, { children: [
        /* @__PURE__ */ jsx32(ProjectSectionHeading, { children: "Project outcomes" }),
        /* @__PURE__ */ jsx32(ProjectSectionText, { children: "Real-time collaborative annotation facilitated better collaboration between learners, and was much easier to run group exercises with the new shared layers feature. Learners gave feedback that is was enjoyable to work together and see what others were doing, and liked how interactive and easy to use the application was." })
      ] }),
      /* @__PURE__ */ jsx32(
        Image2,
        {
          src: slice_irl_default,
          width: 940,
          height: 500,
          placeholder: slice_irl_placeholder_default,
          alt: "Students at the University of New South Wales using the new collaborative annotation features"
        }
      )
    ] }) })
  ] }),
  /* @__PURE__ */ jsx32(Footer, {})
] });

// app/routes/api.set-theme.js
var api_set_theme_exports = {};
__export(api_set_theme_exports, {
  action: () => action
});
import { json as json2, createCookieSessionStorage as createCookieSessionStorage2 } from "@remix-run/cloudflare";
async function action({ request, context }) {
  let theme = (await request.formData()).get("theme"), { getSession, commitSession } = createCookieSessionStorage2({
    cookie: {
      name: "__session",
      httpOnly: !0,
      maxAge: 604800,
      path: "/",
      sameSite: "lax",
      secrets: [context.cloudflare.env.SESSION_SECRET || " "],
      secure: !0
    }
  }), session = await getSession(request.headers.get("Cookie"));
  return session.set("theme", theme), json2(
    { status: "success" },
    {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    }
  );
}

// app/routes/contact/route.js
var route_exports4 = {};
__export(route_exports4, {
  default: () => Contact,
  meta: () => meta6
});

// app/routes/contact/contact.jsx
init_section2();
import { Link as Link3 } from "@remix-run/react";

// app/routes/contact/contact.module.css
var contact_module_default = { contact: "n2XMS", form: "_4W4F-", title: "-fCli", divider: "TE-yZ", input: "ddk7S", botkiller: "_0uxaC", button: "Se1qR", complete: "RRn1U", completeTitle: "-Haq2", completeText: "twaFB", completeButton: "OwrQg", formError: "pNp7h", formErrorContent: "mdL26", formErrorMessage: "auRJo", formErrorIcon: "MZFlX", footer: "fJgYh", socialLinks: "Yuugy", socialItem: "yJktO", returnButton: "y7YwI", homeLink: "oiGbL" };

// app/routes/contact/contact.jsx
import { Fragment as Fragment9, jsx as jsx33, jsxs as jsxs22 } from "react/jsx-runtime";
var meta6 = () => baseMeta({
  title: "Contact",
  description: "Find me on the platforms below."
}), Contact = () => /* @__PURE__ */ jsxs22(Fragment9, { children: [
  /* @__PURE__ */ jsx33(Section, { className: contact_module_default.contact, children: /* @__PURE__ */ jsxs22("div", { className: contact_module_default.form, children: [
    /* @__PURE__ */ jsx33(Heading, { className: contact_module_default.title, level: 2, children: "Let\u2019s Connect" }),
    /* @__PURE__ */ jsxs22("div", { className: contact_module_default.socialLinks, children: [
      /* @__PURE__ */ jsxs22(
        "a",
        {
          href: "https://x.com/BigWhiz_001",
          target: "_blank",
          rel: "noopener noreferrer",
          className: contact_module_default.socialItem,
          children: [
            /* @__PURE__ */ jsx33(Icon, { icon: "x" }),
            " @BigWhiz_001"
          ]
        }
      ),
      /* @__PURE__ */ jsxs22(
        "a",
        {
          href: "https://github.com/Bigwhiz",
          target: "_blank",
          rel: "noopener noreferrer",
          className: contact_module_default.socialItem,
          children: [
            /* @__PURE__ */ jsx33(Icon, { icon: "github" }),
            " @Bigwhiz"
          ]
        }
      ),
      /* @__PURE__ */ jsxs22(
        "a",
        {
          href: "mailwisdomosas@gmail.com",
          className: contact_module_default.socialItem,
          children: [
            /* @__PURE__ */ jsx33(Icon, { icon: "mail" }),
            " mailwisdomosas@gmail.com"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsx33(Link3, { to: "/", className: contact_module_default.homeLink, children: /* @__PURE__ */ jsx33(Button, { className: contact_module_default.returnButton, icon: "arrow-left", children: "Return Home" }) })
  ] }) }),
  /* @__PURE__ */ jsx33(Footer, {})
] });

// app/routes/home/route.js
var route_exports5 = {};
__export(route_exports5, {
  default: () => Home,
  links: () => links2,
  meta: () => meta7
});

// app/assets/gamestack-list-large.jpg
var gamestack_list_large_default = "/assets/_assets/gamestack-list-large-HLKTAAY3.jpg";

// app/assets/gamestack-list-placeholder.jpg
var gamestack_list_placeholder_default = "/assets/_assets/gamestack-list-placeholder-N44KDLOZ.jpg";

// app/assets/gamestack-list.jpg
var gamestack_list_default = "/assets/_assets/gamestack-list-ILXDL3XB.jpg";

// app/assets/gamestack-login-large.jpg
var gamestack_login_large_default = "/assets/_assets/gamestack-login-large-46XCZRUN.jpg";

// app/assets/gamestack-login-placeholder.jpg
var gamestack_login_placeholder_default = "/assets/_assets/gamestack-login-placeholder-5V67XEFL.jpg";

// app/assets/gamestack-login.jpg
var gamestack_login_default = "/assets/_assets/gamestack-login-J33H7SGG.jpg";

// app/routes/home/intro.jsx
init_section2();
init_theme();
init_transition2();
init_hooks();
init_style();
import { Link as RouterLink3 } from "@remix-run/react";
import { useEffect as useEffect17, useState as useState13 } from "react";

// app/hooks/useHydrated.js
import { useSyncExternalStore } from "react";
function subscribe() {
  return () => {
  };
}
function useHydrated() {
  return useSyncExternalStore(
    subscribe,
    () => !0,
    () => !1
  );
}

// app/routes/home/intro.module.css
var intro_module_default = { intro: "_7k9vk", text: "-gIqp", name: "_75ymq", title: "I9wY1", row: "UbQTY", word: "BttZj", introTextReveal: "gigpy", line: "uWNLY", introLine: "_4GJDW", scrollIndicator: "oDnUq", introScrollIndicator: "-vEmE", mobileScrollIndicator: "uHDjV", introMobileScrollIndicator: "zweSQ", lottieWrapper: "BJcxD", lottie: "_-82Je" };

// app/routes/home/intro.jsx
import Lottie from "lottie-react";

// app/assets/hero-animation.json
var hero_animation_default = { v: "5.6.1", fr: 24, ip: 0, op: 141, w: 1e3, h: 563, nm: "Comp 1", ddd: 0, assets: [], layers: [{ ddd: 0, ind: 1, ty: 4, nm: "Layer 22/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 5, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 11, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 16, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 23, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 28, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 33, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 39, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 44, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 51, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 56, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 61, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 66, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 72, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 77, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 84, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 89, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 94, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 100, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 105, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 112, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 117, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 121, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 126, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 131, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 136, s: [2] }, { t: 141, s: [0] }], ix: 10 }, p: { a: 0, k: [495.764, 253.457, 0], ix: 2 }, a: { a: 0, k: [34.004, 23.976, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[9.423, -3.181], [0, 0], [3.489, -6.977], [0, 0], [0, 0], [0, 0], [0, 0], [-4.608, 3.763], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [1.611, 0.939], [0.125, 0]], o: [[-10.332, 3.489], [0, 0], [-3.488, 6.978], [0.94, -1.341], [3.429, 9.865], [2.953, -4.226], [6.18, 2.548], [6.911, 4.764], [4.495, 6.776], [1.074, 8.723], [1.811, -5.233], [2.13, 0.201], [7.65, -21.604], [-4.831, -19.189], [0, 0], [-0.141, -0.083], [-1.294, 0]], v: [[-14.766, -21.681], [-23.353, -8.665], [-31.539, -4.37], [-27.617, 17.103], [-25.205, 15.708], [-20.704, 29.049], [-18.79, 16.027], [-2.554, 14.415], [5.43, 12.471], [17.09, 17.842], [21.478, 27.232], [24.744, 13.732], [27.377, 14.827], [22.137, -7.188], [-0.541, -24.499], [-2.823, -28.926], [-3.219, -29.049]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 1, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.274509803922, 0.126331508861, 0.106574391384, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [35.277, 29.299], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0.055, -4.782], [3.868, 2.517]], o: [[0, 0], [-0.054, 4.782], [0, 0]], v: [[-0.458, -8.009], [3.671, -3.041], [-3.726, 5.492]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.995999983245, 0.694000004787, 0.620000023935, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [60.48, 51.039], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-0.704, -4.729], [-3.489, 3.018]], o: [[0, 0], [0.705, 4.731], [0, 0]], v: [[-0.476, -7.975], [-3.892, -2.492], [4.596, 4.957]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.995999983245, 0.694000004787, 0.620000023935, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [10.548, 52.982], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-13.989, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [13.99, 0], [0, 0], [0, 0], [0, 0]], v: [[-20.554, 0.156], [1.822, 23.801], [21.627, -1.66], [21.627, -23.801], [-21.627, -23.801]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.995999983245, 0.694000004787, 0.620000023935, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [35.128, 58.191], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 3, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 142, st: 0, bm: 0 }, { ddd: 0, ind: 2, ty: 4, nm: "Layer 14/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [504.5, 394.5, 0], ix: 2 }, a: { a: 0, k: [41.5, 24, 0], ix: 1 }, s: { a: 0, k: [106.557, 106.557, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-8.872, 24.573], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [25.989, -2.689]], v: [[41.158, -23.631], [33.526, 23.631], [-41.158, 23.631], [-15.845, 20.99]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.049950019986, 0.490288139792, 0.796078431373, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [41.408, 23.881], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 142, st: 0, bm: 0 }, { ddd: 0, ind: 3, ty: 4, nm: "Layer 17/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [501, 394.5, 0], ix: 2 }, a: { a: 0, k: [46, 30.5, 0], ix: 1 }, s: { a: 0, k: [106.557, 106.557, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-0.37, -2.4], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [2.448, 0]], o: [[-2.416, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0.386, -2.416], [0, 0]], v: [[-41.367, -26.779], [-45.281, -22.205], [-37.729, 26.779], [37.358, 26.779], [44.99, -20.483], [44.99, -20.498], [45.265, -22.173], [41.351, -26.779]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 1, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.133487117992, 0.555541932349, 0.850980392157, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [45.901, 27.029], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.778, 0], [0, 0], [0, 1.779], [-1.778, 0], [0, 0], [0, -1.779]], o: [[0, 0], [-1.778, 0], [0, -1.779], [0, 0], [1.778, 0], [0, 1.779]], v: [[36.835, 3.22], [-36.835, 3.22], [-40.055, 0], [-36.835, -3.22], [36.835, -3.22], [40.055, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [45.41, 57.021], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 142, st: 0, bm: 0 }, { ddd: 0, ind: 4, ty: 4, nm: "Layer 16/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 5, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 11, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 17, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 22, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 28, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 33, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 38, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 44, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 50, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 55, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 61, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 67, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 72, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 78, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 84, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 89, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 95, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 100, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 105, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 111, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 117, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 122, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 128, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 132, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 137, s: [2] }, { t: 141, s: [0] }], ix: 10 }, p: { a: 0, k: [584, 388, 0], ix: 2 }, a: { a: 0, k: [67, 1, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-33.551, 17.835], [-33.551, -17.835], [33.55, -17.835], [33.55, 17.835]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [-7.777, 14.217], [-0.467, 1.899], [0, 0], [7.085, 2.85], [2.739, 0]], o: [[0, 0], [0, 0], [0, 0], [0.853, -1.563], [0.016, -0.018], [0.838, -6.327], [-1.957, -0.789], [-17.551, 1e-3]], v: [[-30.651, -3.822], [-33.55, 15.501], [-10.732, 15.501], [30.732, 3.618], [32.713, -1.583], [32.713, -1.601], [24.291, -16.704], [17.166, -17.835]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "tr", p: { a: 0, k: [0, 0], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 1, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.254901960784, 0.388235294118, 0.58431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [33.8, 18.085], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 4, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 142, st: 0, bm: 0 }, { ddd: 0, ind: 5, ty: 4, nm: "Layer 3/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 20, s: [497.5, 375.5, 0], to: [-166.5, 13, 0], ti: [7.5, 29, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 29, s: [287.5, 147.5, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 41, s: [287.5, 147.5, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 82, s: [287.5, 116.5, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 140, s: [287.5, 146.5, 0] }], ix: 2 }, a: { a: 0, k: [34, 47.5, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] }, o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] }, t: 20, s: [0, 0, 100] }, { t: 29, s: [100, 100, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.695], [1.695, 0], [0, 1.695], [-1.696, 0]], o: [[0, 1.695], [-1.696, 0], [0, -1.695], [1.695, 0]], v: [[3.07, -1e-3], [1e-3, 3.069], [-3.07, -1e-3], [1e-3, -3.069]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [53.423, 82.742], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.695], [1.695, 0], [0, 1.695], [-1.696, 0]], o: [[0, 1.695], [-1.696, 0], [0, -1.695], [1.695, 0]], v: [[3.07, 0], [1e-3, 3.069], [-3.07, 0], [1e-3, -3.069]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [53.423, 70.765], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.695], [1.695, 0], [0, 1.695], [-1.696, 0]], o: [[0, 1.695], [-1.696, 0], [0, -1.695], [1.695, 0]], v: [[3.07, -1e-3], [1e-3, 3.069], [-3.07, -1e-3], [1e-3, -3.069]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [53.423, 58.79], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.056, 0], [0, 0], [0, 1.057], [-1.056, 0], [0, 0], [0, -1.055]], o: [[0, 0], [-1.056, 0], [0, -1.055], [0, 0], [1.056, 0], [0, 1.057]], v: [[11.272, 1.912], [-11.272, 1.912], [-13.184, -1e-3], [-11.272, -1.912], [11.272, -1.912], [13.184, -1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [27.558, 82.742], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 3, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.056, 0], [0, 0], [0, 1.056], [-1.056, 0], [0, 0], [0, -1.056]], o: [[0, 0], [-1.056, 0], [0, -1.056], [0, 0], [1.056, 0], [0, 1.056]], v: [[11.272, 1.912], [-11.272, 1.912], [-13.184, 0], [-11.272, -1.912], [11.272, -1.912], [13.184, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [27.558, 70.766], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 3, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.056, 0], [0, 0], [0, 1.056], [-1.056, 0], [0, 0], [0, -1.056]], o: [[0, 0], [-1.056, 0], [0, -1.056], [0, 0], [1.056, 0], [0, 1.056]], v: [[11.272, 1.912], [-11.272, 1.912], [-13.184, 0], [-11.272, -1.912], [11.272, -1.912], [13.184, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [27.558, 58.789], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 3, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.926, 0], [0, 0], [0, 0.926], [-0.927, 0], [0, 0], [0, -0.927]], o: [[0, 0], [-0.927, 0], [0, -0.927], [0, 0], [0.926, 0], [0, 0.926]], v: [[7.314, 1.677], [-7.313, 1.677], [-8.99, 1e-3], [-7.313, -1.677], [7.314, -1.677], [8.99, 1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [49.732, 36.615], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 3, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.926, 0], [0, 0], [0, 0.926], [-0.927, 0], [0, 0], [0, -0.927]], o: [[0, 0], [-0.927, 0], [0, -0.927], [0, 0], [0.926, 0], [0, 0.926]], v: [[7.314, 1.677], [-7.313, 1.677], [-8.99, 1e-3], [-7.313, -1.677], [7.314, -1.677], [8.99, 1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [49.732, 28.563], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 3, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.926, 0], [0, 0], [0, 0.927], [-0.927, 0], [0, 0], [0, -0.926]], o: [[0, 0], [-0.927, 0], [0, -0.926], [0, 0], [0.926, 0], [0, 0.927]], v: [[7.314, 1.677], [-7.313, 1.677], [-8.99, 0], [-7.313, -1.677], [7.314, -1.677], [8.99, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [49.732, 19.841], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 3, cix: 2, bm: 0, ix: 9, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[3.491, 0], [0, 3.491], [-3.476, 0], [0, -3.491]], o: [[-3.476, 0], [0, -3.491], [3.491, 0], [0, 3.491]], v: [[0, 6.31], [-6.31, 0], [0, -6.31], [6.311, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[5.121, 0], [0, -5.121], [-5.104, 0], [0, 5.121]], o: [[-5.104, 0], [0, 5.121], [5.121, 0], [0, -5.121]], v: [[0, -9.259], [-9.259, 0], [0, 9.259], [9.259, 0]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.486000001197, 0.651000019148, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [19.535, 25.678], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 5, cix: 2, bm: 0, ix: 10, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.499, -0.443], [0, 0], [0.443, 0.499], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [-0.498, 0.443], [0, 0], [0, 0], [0, 0], [0.442, 0.499]], v: [[5.005, 4.82], [4.219, 5.519], [2.514, 5.417], [-5.548, -3.66], [-2.956, -5.962], [5.106, 3.115]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.486000001197, 0.651000019148, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [27.89, 36.756], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 11", np: 3, cix: 2, bm: 0, ix: 11, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -1.665], [0, 0], [-1.665, 0], [0, 0], [0, 1.664], [0, 0], [1.665, 0]], o: [[-1.665, 0], [0, 0], [0, 1.664], [0, 0], [1.665, 0], [0, 0], [0, -1.665], [0, 0]], v: [[-27.475, -44.182], [-30.495, -41.162], [-30.495, 41.162], [-27.475, 44.181], [27.475, 44.181], [30.495, 41.162], [30.495, -41.162], [27.475, -44.182]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[2.553, 0], [0, 0], [0, 2.553], [0, 0], [-2.553, 0], [0, 0], [0, -2.554], [0, 0]], o: [[0, 0], [-2.553, 0], [0, 0], [0, -2.554], [0, 0], [2.553, 0], [0, 0], [0, 2.553]], v: [[27.475, 45.792], [-27.475, 45.792], [-32.105, 41.162], [-32.105, -41.162], [-27.475, -45.792], [27.475, -45.792], [32.105, -41.162], [32.105, 41.162]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.310000011968, 0.493999974868, 0.717999985639, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [32.354, 46.042], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 12", np: 5, cix: 2, bm: 0, ix: 12, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.112, 0], [0, 0], [0, 2.113], [0, 0], [-2.113, 0], [0, 0], [0, -2.112], [0, 0]], o: [[0, 0], [-2.113, 0], [0, 0], [0, -2.112], [0, 0], [2.112, 0], [0, 0], [0, 2.113]], v: [[27.475, 44.987], [-27.475, 44.987], [-31.299, 41.162], [-31.299, -41.162], [-27.475, -44.987], [27.475, -44.987], [31.299, -41.162], [31.299, 41.162]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.760784313725, 0.847058823529, 0.96862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [35.843, 49.53], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 13", np: 3, cix: 2, bm: 0, ix: 13, mn: "ADBE Vector Group", hd: !1 }], ip: 20, op: 142, st: 20, bm: 0 }, { ddd: 0, ind: 6, ty: 4, nm: "Layer 10/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 24, s: [500, 395.5, 0], to: [-95.667, 6, 0], ti: [0.333, -0.333, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 36, s: [376.25, 353.25, 0], to: [-0.333, 0.333, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 46, s: [376.25, 353.25, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 94, s: [353.25, 353.25, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 140, s: [376.25, 353.25, 0] }], ix: 2 }, a: { a: 0, k: [38, 30, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] }, o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] }, t: 24, s: [0, 0, 100] }, { t: 36, s: [100, 100, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.585, 0], [0, 0], [0, 0.585], [-0.585, 0], [0, 0], [0, -0.585]], o: [[0, 0], [-0.585, 0], [0, -0.585], [0, 0], [0.585, 0], [0, 0.585]], v: [[26.923, 1.06], [-26.923, 1.06], [-27.982, 0], [-26.923, -1.059], [26.923, -1.059], [27.982, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [36.28, 38.487], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.585, 0], [0, 0], [0, 0.585], [-0.585, 0], [0, 0], [0, -0.585]], o: [[0, 0], [-0.585, 0], [0, -0.585], [0, 0], [0.585, 0], [0, 0.585]], v: [[26.923, 1.059], [-26.923, 1.059], [-27.982, -1e-3], [-26.923, -1.059], [26.923, -1.059], [27.982, -1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [36.28, 31.955], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.585, 0], [0, 0], [0, 0.585], [-0.585, 0], [0, 0], [0, -0.585]], o: [[0, 0], [-0.585, 0], [0, -0.585], [0, 0], [0.585, 0], [0, 0.585]], v: [[26.923, 1.059], [-26.923, 1.059], [-27.982, -1e-3], [-26.923, -1.059], [26.923, -1.059], [27.982, -1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [36.28, 25.423], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.585, 0], [0, 0], [0, 0.585], [-0.585, 0], [0, 0], [0, -0.585]], o: [[0, 0], [-0.585, 0], [0, -0.585], [0, 0], [0.585, 0], [0, 0.585]], v: [[22.51, 1.059], [-22.509, 1.059], [-23.568, -1e-3], [-22.509, -1.059], [22.51, -1.059], [23.569, -1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [40.694, 18.891], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 3, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.585, 0], [0, 0], [0, 0.586], [-0.585, 0], [0, 0], [0, -0.585]], o: [[0, 0], [-0.585, 0], [0, -0.585], [0, 0], [0.585, 0], [0, 0.586]], v: [[7.768, 1.059], [-7.768, 1.059], [-8.827, -1e-3], [-7.768, -1.059], [7.768, -1.059], [8.827, -1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [17.125, 9.71], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 3, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.194, 0], [0, 0], [0, -2.194], [0, 0], [-2.194, 0], [0, 0], [0, 0], [0.401, 1.158], [0, 0], [0, 0], [0, 2.194], [0, 0]], o: [[0, 0], [-2.194, 0], [0, 0], [0, 2.194], [0, 0], [0, 0], [0.917, 0.813], [0, 0], [0, 0], [2.194, 0], [0, 0], [0, -2.194]], v: [[33.72, -29.628], [-33.72, -29.628], [-37.692, -25.656], [-37.692, 14.596], [-33.72, 18.568], [12.8, 18.568], [24.932, 29.322], [26.848, 28.041], [23.569, 18.568], [33.72, 18.568], [37.693, 14.596], [37.693, -25.656]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.760784313725, 0.847058823529, 0.96862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [37.693, 29.629], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 3, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: !1 }], ip: 24, op: 142, st: 24, bm: 0 }, { ddd: 0, ind: 7, ty: 4, nm: "Layer 6/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 13, s: [496, 384, 0], to: [-153.667, -27.167, 0], ti: [119.541, 91.384, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 23, s: [195, 273, 0], to: [-1.441, -1.102, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 32, s: [195, 273, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.833, y: 0.833 }, o: { x: 0.167, y: 0.167 }, t: 86, s: [195, 296, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 140, s: [195, 272, 0] }], ix: 2 }, a: { a: 0, k: [55.5, 37, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] }, o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] }, t: 13, s: [0, 0, 100] }, { t: 23, s: [100, 100, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.778, 0], [0, 0], [0, 0.778], [-0.779, 0], [0, 0], [0, -0.779]], o: [[0, 0], [-0.779, 0], [0, -0.779], [0, 0], [0.778, 0], [0, 0.778]], v: [[9.461, 1.409], [-9.46, 1.409], [-10.87, 0], [-9.46, -1.408], [9.461, -1.408], [10.87, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [69.509, 62.38], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.778, 0], [0, 0], [0, 0.778], [-0.779, 0], [0, 0], [0, -0.779]], o: [[0, 0], [-0.779, 0], [0, -0.779], [0, 0], [0.778, 0], [0, 0.778]], v: [[9.461, 1.409], [-9.46, 1.409], [-10.87, 0], [-9.46, -1.408], [9.461, -1.408], [10.87, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [42.403, 62.38], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.778, 0], [0, 0], [0, 0.777], [-0.779, 0], [0, 0], [0, -0.779]], o: [[0, 0], [-0.779, 0], [0, -0.779], [0, 0], [0.778, 0], [0, 0.777]], v: [[9.461, 1.408], [-9.46, 1.408], [-10.87, 1e-3], [-9.46, -1.408], [9.461, -1.408], [10.87, 1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [85.944, 52.316], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.778, 0], [0, 0], [0, 0.777], [-0.779, 0], [0, 0], [0, -0.779]], o: [[0, 0], [-0.779, 0], [0, -0.779], [0, 0], [0.778, 0], [0, 0.777]], v: [[9.461, 1.408], [-9.46, 1.408], [-10.87, 1e-3], [-9.46, -1.408], [9.461, -1.408], [10.87, 1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [58.838, 52.316], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 3, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.778, 0], [0, 0], [0, 0.777], [-0.778, 0], [0, 0], [0, -0.779]], o: [[0, 0], [-0.778, 0], [0, -0.779], [0, 0], [0.778, 0], [0, 0.777]], v: [[9.46, 1.408], [-9.461, 1.408], [-10.87, 1e-3], [-9.461, -1.408], [9.46, -1.408], [10.869, 1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [29.991, 52.316], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 3, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [88.763, 35.272], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 3, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-241.337, 18.188], [-237.311, 18.188], [-237.311, 0.029], [-241.337, 0.029]], c: !0 }, ix: 2 }, nm: "Path 4", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.910000011968, 0.246999987434, 0.328999986836, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [319.901, 21.625], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 3, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [72.258, 33.789], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 3, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.445, 0], [0, 0], [0, 0], [-0.445, 0], [0, -0.445], [0, 0], [0, 0], [0, -0.445]], o: [[0, 0], [0, 0], [0, -0.445], [0.445, 0], [0, 0], [0, 0], [0.445, 0], [0, 0.446]], v: [[15.297, 13.657], [-16.103, 13.657], [-16.103, -12.852], [-15.298, -13.657], [-14.493, -12.852], [-14.493, 12.047], [15.297, 12.047], [16.103, 12.852]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [79.772, 27.766], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 3, cix: 2, bm: 0, ix: 9, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -5.114], [2.106, -2.091], [0, 0], [0, 0]], o: [[0, 3.2], [0, 0], [0, 0], [4.581, 1.545]], v: [[5.805, 1.401], [2.4, 9.592], [-5.805, 1.401], [-2.085, -9.592]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.910000011968, 0.246999987434, 0.328999986836, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [43.112, 24.506], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 3, cix: 2, bm: 0, ix: 10, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [3.785, 0], [0, 7.536], [-7.536, 0], [-1.368, -0.468], [0, 0]], o: [[-2.464, 2.48], [-7.536, 0], [0, -7.552], [1.53, 0], [0, 0], [0, 0]], v: [[11.659, 9.653], [1.997, 13.663], [-11.659, 8e-3], [1.997, -13.663], [6.376, -12.938], [1.997, 8e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.486000001197, 0.651000019148, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [31.453, 26.954], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 11", np: 3, cix: 2, bm: 0, ix: 11, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -2.515], [0, 0], [-2.516, 0], [0, 0], [0, 2.515], [0, 0], [2.516, 0]], o: [[-2.516, 0], [0, 0], [0, 2.515], [0, 0], [2.516, 0], [0, 0], [0, -2.515], [0, 0]], v: [[-47.637, -33.413], [-52.199, -28.851], [-52.199, 28.851], [-47.637, 33.412], [47.637, 33.412], [52.199, 28.851], [52.199, -28.851], [47.637, -33.413]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[3.404, 0], [0, 0], [0, 3.402], [0, 0], [-3.404, 0], [0, 0], [0, -3.404], [0, 0]], o: [[0, 0], [-3.404, 0], [0, 0], [0, -3.404], [0, 0], [3.404, 0], [0, 0], [0, 3.402]], v: [[47.637, 35.023], [-47.637, 35.023], [-53.81, 28.851], [-53.81, -28.851], [-47.637, -35.023], [47.637, -35.023], [53.81, -28.851], [53.81, 28.851]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.310000011968, 0.493999974868, 0.717999985639, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [54.06, 35.273], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 12", np: 5, cix: 2, bm: 0, ix: 12, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.964, 0], [0, 0], [0, 2.965], [0, 0], [-2.964, 0], [0, 0], [0, -2.965], [0, 0]], o: [[0, 0], [-2.964, 0], [0, 0], [0, -2.965], [0, 0], [2.964, 0], [0, 0], [0, 2.965]], v: [[47.637, 34.218], [-47.637, 34.218], [-53.004, 28.85], [-53.004, -28.851], [-47.637, -34.219], [47.637, -34.219], [53.005, -28.851], [53.005, 28.85]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.760784313725, 0.847058823529, 0.96862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [57.968, 39.233], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 13", np: 3, cix: 2, bm: 0, ix: 13, mn: "ADBE Vector Group", hd: !1 }], ip: 13, op: 142, st: 13, bm: 0 }, { ddd: 0, ind: 8, ty: 4, nm: "Layer 24/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 28, s: [500.5, 375, 0], to: [94.833, 0.333, 0], ti: [-16.833, 12.667, 0] }, { i: { x: 0.667, y: 0.667 }, o: { x: 0.333, y: 0.333 }, t: 37, s: [601.5, 299, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 50, s: [601.5, 299, 0], to: [0, 3.667, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 93, s: [601.5, 321, 0], to: [0, 0, 0], ti: [0, 3.667, 0] }, { t: 140, s: [601.5, 299, 0] }], ix: 2 }, a: { a: 0, k: [34, 41, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 28, s: [0, 0, 100] }, { t: 37, s: [100, 100, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.66, 0], [0, 0], [0, 0.66], [-0.66, 0], [0, 0], [0, -0.66]], o: [[0, 0], [-0.66, 0], [0, -0.66], [0, 0], [0.66, 0], [0, 0.66]], v: [[9.472, 1.196], [-9.472, 1.196], [-10.668, 0], [-9.472, -1.196], [9.472, -1.196], [10.668, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [43.276, 69.358], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.66, 0], [0, 0], [0, 0.66], [-0.66, 0], [0, 0], [0, -0.661]], o: [[0, 0], [-0.66, 0], [0, -0.661], [0, 0], [0.66, 0], [0, 0.66]], v: [[9.472, 1.196], [-9.472, 1.196], [-10.668, 1e-3], [-9.472, -1.196], [9.472, -1.196], [10.668, 1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [43.276, 63.551], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [-5.183, 2.134], [0, 0], [0.022, -0.041]], o: [[0, 0], [0, 0], [0, 0], [1.118, -1.474], [0, 0], [-6.468, 2.664], [0, 0]], v: [[-2.892, 4.611], [-6.526, 0.563], [-5.328, -0.514], [-3.125, 1.945], [5.913, -4.611], [6.526, -3.123], [-2.339, 3.642]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.917999985639, 0.607999973671, 0.630999995213, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [21.425, 64.747], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-4.496, 5.703], [4.496, 5.703], [4.496, -5.702], [-4.496, -5.702]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[6.106, 7.313], [-6.107, 7.313], [-6.107, -7.313], [6.106, -7.313]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.486000001197, 0.651000019148, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [15.499, 66.582], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 5, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.66, 0], [0, 0], [0, 0.66], [-0.66, 0], [0, 0], [0, -0.66]], o: [[0, 0], [-0.66, 0], [0, -0.66], [0, 0], [0.66, 0], [0, 0.66]], v: [[9.472, 1.196], [-9.472, 1.196], [-10.668, 1e-3], [-9.472, -1.196], [9.472, -1.196], [10.668, 1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [43.276, 46.948], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 3, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.66, 0], [0, 0], [0, 0.661], [-0.66, 0], [0, 0], [0, -0.66]], o: [[0, 0], [-0.66, 0], [0, -0.66], [0, 0], [0.66, 0], [0, 0.661]], v: [[9.472, 1.196], [-9.472, 1.196], [-10.668, 0], [-9.472, -1.196], [9.472, -1.196], [10.668, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [43.276, 41.142], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 3, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [-5.183, 2.134], [0, 0], [0.022, -0.041]], o: [[0, 0], [0, 0], [0, 0], [1.118, -1.474], [0, 0], [-6.468, 2.664], [0, 0]], v: [[-2.892, 4.611], [-6.526, 0.562], [-5.328, -0.514], [-3.125, 1.945], [5.913, -4.611], [6.526, -3.123], [-2.339, 3.641]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.917999985639, 0.607999973671, 0.630999995213, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [21.425, 42.337], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 3, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-4.496, 5.703], [4.496, 5.703], [4.496, -5.703], [-4.496, -5.703]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[6.106, 7.313], [-6.107, 7.313], [-6.107, -7.313], [6.106, -7.313]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.486000001197, 0.651000019148, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [15.499, 44.172], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 5, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.66, 0], [0, 0], [0, 0.66], [-0.66, 0], [0, 0], [0, -0.661]], o: [[0, 0], [-0.66, 0], [0, -0.661], [0, 0], [0.66, 0], [0, 0.66]], v: [[9.472, 1.196], [-9.472, 1.196], [-10.668, 1e-3], [-9.472, -1.196], [9.472, -1.196], [10.668, 1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [43.276, 24.539], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 3, cix: 2, bm: 0, ix: 9, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.66, 0], [0, 0], [0, 0.66], [-0.66, 0], [0, 0], [0, -0.66]], o: [[0, 0], [-0.66, 0], [0, -0.66], [0, 0], [0.66, 0], [0, 0.66]], v: [[9.472, 1.196], [-9.472, 1.196], [-10.668, 0], [-9.472, -1.196], [9.472, -1.196], [10.668, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [43.276, 18.732], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 3, cix: 2, bm: 0, ix: 10, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [-5.183, 2.135], [0, 0], [0.022, -0.041]], o: [[0, 0], [0, 0], [0, 0], [1.118, -1.474], [0, 0], [-6.468, 2.663], [0, 0]], v: [[-2.892, 4.612], [-6.526, 0.562], [-5.328, -0.513], [-3.125, 1.945], [5.913, -4.612], [6.526, -3.123], [-2.339, 3.641]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.917999985639, 0.607999973671, 0.630999995213, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [21.425, 19.928], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 11", np: 3, cix: 2, bm: 0, ix: 11, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-4.496, 5.702], [4.496, 5.702], [4.496, -5.703], [-4.496, -5.703]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[6.106, 7.313], [-6.107, 7.313], [-6.107, -7.313], [6.106, -7.313]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.486000001197, 0.651000019148, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [15.499, 21.763], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 12", np: 5, cix: 2, bm: 0, ix: 12, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -1.666], [0, 0], [-1.665, 0], [0, 0], [0, 1.665], [0, 0], [1.666, 0]], o: [[-1.665, 0], [0, 0], [0, 1.665], [0, 0], [1.666, 0], [0, 0], [0, -1.666], [0, 0]], v: [[-27.475, -37.741], [-30.494, -34.721], [-30.494, 34.721], [-27.475, 37.74], [27.475, 37.74], [30.495, 34.721], [30.495, -34.721], [27.475, -37.741]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[2.553, 0], [0, 0], [0, 2.553], [0, 0], [-2.552, 0], [0, 0], [0, -2.552], [0, 0]], o: [[0, 0], [-2.552, 0], [0, 0], [0, -2.552], [0, 0], [2.553, 0], [0, 0], [0, 2.553]], v: [[27.475, 39.351], [-27.475, 39.351], [-32.105, 34.721], [-32.105, -34.721], [-27.475, -39.351], [27.475, -39.351], [32.105, -34.721], [32.105, 34.721]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.310000011968, 0.493999974868, 0.717999985639, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [34.789, 39.601], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 13", np: 5, cix: 2, bm: 0, ix: 13, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.112, 0], [0, 0], [0, 2.112], [0, 0], [-2.112, 0], [0, 0], [0, -2.112], [0, 0]], o: [[0, 0], [-2.112, 0], [0, 0], [0, -2.112], [0, 0], [2.112, 0], [0, 0], [0, 2.112]], v: [[27.475, 38.546], [-27.475, 38.546], [-31.299, 34.722], [-31.299, -34.721], [-27.475, -38.545], [27.475, -38.545], [31.3, -34.721], [31.3, 34.722]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.760784313725, 0.847058823529, 0.96862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [31.3, 42.955], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 14", np: 3, cix: 2, bm: 0, ix: 14, mn: "ADBE Vector Group", hd: !1 }], ip: 28, op: 142, st: 28, bm: 0 }, { ddd: 0, ind: 9, ty: 4, nm: "Layer 5/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 19, s: [500, 372, 0], to: [40.917, 1.75, 0], ti: [-49.292, 36.125, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 24, s: [690.5, 343.5, 0], to: [49.292, -36.125, 0], ti: [0.083, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 29, s: [775, 213, 0], to: [-0.083, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 38, s: [775, 213, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 89, s: [775, 229, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 140, s: [775, 213, 0] }], ix: 2 }, a: { a: 0, k: [34.5, 41.5, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 19, s: [0, 0, 100] }, { t: 29, s: [100, 100, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.557, 0], [0, 0], [0, 1.556], [-1.556, 0], [0, 0], [0, -1.557]], o: [[0, 0], [-1.556, 0], [0, -1.557], [0, 0], [1.557, 0], [0, 1.556]], v: [[11.272, 2.818], [-11.272, 2.818], [-14.09, 0], [-11.272, -2.818], [11.272, -2.818], [14.09, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.760784313725, 0.847058823529, 0.96862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [39.151, 71.333], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.557], [1.556, 0], [0, 1.556], [-1.556, 0]], o: [[0, 1.556], [-1.556, 0], [0, -1.557], [1.556, 0]], v: [[2.818, 0], [0, 2.818], [-2.818, 0], [0, -2.818]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [10.837, 71.333], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.557, 0], [0, 0], [0, 1.557], [-1.556, 0], [0, 0], [0, -1.556]], o: [[0, 0], [-1.556, 0], [0, -1.556], [0, 0], [1.557, 0], [0, 1.557]], v: [[11.272, 2.818], [-11.272, 2.818], [-14.09, 0], [-11.272, -2.818], [11.272, -2.818], [14.09, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [39.151, 58.652], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.557, 0], [0, 0], [0, 1.557], [-1.556, 0], [0, 0], [0, -1.556]], o: [[0, 0], [-1.556, 0], [0, -1.556], [0, 0], [1.557, 0], [0, 1.557]], v: [[11.272, 2.818], [-11.272, 2.818], [-14.09, 0], [-11.272, -2.818], [11.272, -2.818], [14.09, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [39.151, 46.173], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 3, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.556], [1.556, 0], [0, 1.557], [-1.556, 0]], o: [[0, 1.557], [-1.556, 0], [0, -1.556], [1.556, 0]], v: [[2.818, 0], [0, 2.818], [-2.818, 0], [0, -2.818]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [10.837, 58.653], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 3, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -1.556], [1.556, 0], [0, 1.557], [-1.556, 0]], o: [[0, 1.557], [-1.556, 0], [0, -1.556], [1.556, 0]], v: [[2.818, 0], [0, 2.818], [-2.818, 0], [0, -2.818]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [10.837, 46.173], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 3, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [2.818, -5.702]], o: [[0, 0], [5.905, 1.476], [0, 0]], v: [[-6.724, 5.099], [-0.283, -6.374], [5.622, 6.374]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.910000011968, 0.246999987434, 0.328999986836, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [26.417, 19.671], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 3, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, -5.336], [5.336, 0], [0, 5.336], [-5.336, 0]], o: [[0, 5.336], [-5.336, 0], [0, -5.336], [5.336, 0]], v: [[9.661, 0], [0, 9.661], [-9.662, 0], [0, -9.661]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.486000001197, 0.651000019148, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [17.144, 26.045], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 3, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -1.665], [0, 0], [-1.665, 0], [0, 0], [0, 1.664], [0, 0], [1.665, 0]], o: [[-1.665, 0], [0, 0], [0, 1.664], [0, 0], [1.665, 0], [0, 0], [0, -1.665], [0, 0]], v: [[-27.474, -37.741], [-30.495, -34.72], [-30.495, 34.721], [-27.474, 37.741], [27.475, 37.741], [30.495, 34.721], [30.495, -34.72], [27.475, -37.741]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[2.552, 0], [0, 0], [0, 2.553], [0, 0], [-2.553, 0], [0, 0], [0, -2.554], [0, 0]], o: [[0, 0], [-2.553, 0], [0, 0], [0, -2.554], [0, 0], [2.552, 0], [0, 0], [0, 2.553]], v: [[27.475, 39.35], [-27.474, 39.35], [-32.104, 34.721], [-32.104, -34.72], [-27.474, -39.35], [27.475, -39.35], [32.104, -34.72], [32.104, 34.721]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.310000011968, 0.493999974868, 0.717999985639, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [36.131, 39.601], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 5, cix: 2, bm: 0, ix: 9, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.112, 0], [0, 0], [0, 2.112], [0, 0], [-2.112, 0], [0, 0], [0, -2.112], [0, 0]], o: [[0, 0], [-2.112, 0], [0, 0], [0, -2.112], [0, 0], [2.112, 0], [0, 0], [0, 2.112]], v: [[27.475, 38.546], [-27.475, 38.546], [-31.299, 34.722], [-31.299, -34.721], [-27.475, -38.545], [27.475, -38.545], [31.3, -34.721], [31.3, 34.722]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.760784313725, 0.847058823529, 0.96862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [31.3, 43.993], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 3, cix: 2, bm: 0, ix: 10, mn: "ADBE Vector Group", hd: !1 }], ip: 19, op: 142, st: 19, bm: 0 }, { ddd: 0, ind: 10, ty: 4, nm: "Layer 4/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 1, k: [{ i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 13, s: [500, 386.5, 0], to: [143.5, -133.5, 0], ti: [0.25, 0.25, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 24, s: [557, 83.5, 0], to: [-0.25, -0.25, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 38, s: [557, 83.5, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { i: { x: 0.667, y: 1 }, o: { x: 0.333, y: 0 }, t: 92, s: [579, 83.5, 0], to: [0, 0, 0], ti: [0, 0, 0] }, { t: 140, s: [557, 83.5, 0] }], ix: 2 }, a: { a: 0, k: [59.5, 42.5, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 13, s: [0, 0, 100] }, { t: 24, s: [100, 100, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.334, 0], [0, 0], [0, 1.334], [-1.334, 0], [0, 0], [0, -1.334]], o: [[0, 0], [-1.334, 0], [0, -1.334], [0, 0], [1.334, 0], [0, 1.334]], v: [[32.104, 2.415], [-32.105, 2.415], [-34.52, -1e-3], [-32.105, -2.416], [32.104, -2.416], [34.52, -1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603921568627, 0.737254901961, 0.929411764706, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [56.862, 74.254], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1, 0], [0, 0], [0, 1.001], [-1.001, 0], [0, 0], [0, -1]], o: [[0, 0], [-1.001, 0], [0, -1], [0, 0], [1, 0], [0, 1.001]], v: [[8.672, 1.811], [-8.672, 1.811], [-10.483, 0], [-8.672, -1.811], [8.672, -1.811], [10.484, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [92.071, 59.292], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1, 0], [0, 0], [0, 1.001], [-1.001, 0], [0, 0], [0, -1]], o: [[0, 0], [-1.001, 0], [0, -1], [0, 0], [1, 0], [0, 1.001]], v: [[8.672, 1.811], [-8.672, 1.811], [-10.483, -1e-3], [-8.672, -1.812], [8.672, -1.812], [10.484, -1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [92.071, 51.107], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1, 0], [0, 0], [0, 1], [-1.001, 0], [0, 0], [0, -1.001]], o: [[0, 0], [-1.001, 0], [0, -1.001], [0, 0], [1, 0], [0, 1]], v: [[8.672, 1.812], [-8.672, 1.812], [-10.483, 0], [-8.672, -1.812], [8.672, -1.812], [10.484, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [92.071, 42.921], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 3, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1, 0], [0, 0], [0, 1], [-1.001, 0], [0, 0], [0, -1.001]], o: [[0, 0], [-1.001, 0], [0, -1.001], [0, 0], [1, 0], [0, 1]], v: [[8.672, 1.812], [-8.672, 1.812], [-10.483, 0], [-8.672, -1.811], [8.672, -1.811], [10.484, 0]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [92.071, 34.736], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 3, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.612, 0], [0, 0], [0, 1.611], [-1.612, 0], [0, 0], [0, -1.612]], o: [[0, 0], [-1.612, 0], [0, -1.612], [0, 0], [1.612, 0], [0, 1.611]], v: [[8.252, 2.919], [-8.253, 2.919], [-11.172, 1e-3], [-8.253, -2.918], [8.252, -2.918], [11.171, 1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [91.382, 18.13], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 3, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.139, 0], [0, 0], [0, 1.14], [0, 0], [-1.139, 0], [0, 0], [0, -1.14], [0, 0]], o: [[0, 0], [-1.139, 0], [0, 0], [0, -1.14], [0, 0], [1.139, 0], [0, 0], [0, 1.14]], v: [[28.733, 16.304], [-28.734, 16.304], [-30.797, 14.241], [-30.797, -14.24], [-28.734, -16.303], [28.733, -16.303], [30.796, -14.24], [30.796, 14.241]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.486000001197, 0.651000019148, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [42.169, 47.618], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 3, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.611, 0], [0, 0], [0, 1.611], [-1.611, 0], [0, 0], [0, -1.612]], o: [[0, 0], [-1.611, 0], [0, -1.612], [0, 0], [1.611, 0], [0, 1.611]], v: [[27.878, 2.919], [-27.878, 2.919], [-30.797, 1e-3], [-27.878, -2.918], [27.878, -2.918], [30.796, 1e-3]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.603999956916, 0.736999990426, 0.929000016755, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [42.169, 18.13], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 3, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, -3.219], [0, 0], [-3.219, 0], [0, 0], [0, 3.219], [0, 0], [3.218, 0]], o: [[-3.219, 0], [0, 0], [0, 3.219], [0, 0], [3.218, 0], [0, 0], [0, -3.219], [0, 0]], v: [[-50.321, -39.25], [-56.159, -33.413], [-56.159, 33.413], [-50.321, 39.25], [50.321, 39.25], [56.158, 33.413], [56.158, -33.413], [50.321, -39.25]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[4.105, 0], [0, 0], [0, 4.107], [0, 0], [-4.106, 0], [0, 0], [0, -4.107], [0, 0]], o: [[0, 0], [-4.106, 0], [0, 0], [0, -4.107], [0, 0], [4.105, 0], [0, 0], [0, 4.107]], v: [[50.321, 40.86], [-50.321, 40.86], [-57.768, 33.413], [-57.768, -33.413], [-50.321, -40.86], [50.321, -40.86], [57.768, -33.413], [57.768, 33.413]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 2", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.310000011968, 0.493999974868, 0.717999985639, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [60.453, 41.11], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 5, cix: 2, bm: 0, ix: 9, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[3.668, 0], [0, 0], [0, 3.668], [0, 0], [-3.669, 0], [0, 0], [0, -3.669], [0, 0]], o: [[0, 0], [-3.669, 0], [0, 0], [0, -3.669], [0, 0], [3.668, 0], [0, 0], [0, 3.668]], v: [[50.321, 40.055], [-50.321, 40.055], [-56.963, 33.413], [-56.963, -33.413], [-50.321, -40.055], [50.321, -40.055], [56.963, -33.413], [56.963, 33.413]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.759707821117, 0.845204192517, 0.96862745098, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [56.963, 44.8], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 3, cix: 2, bm: 0, ix: 10, mn: "ADBE Vector Group", hd: !1 }], ip: 13, op: 142, st: 0, bm: 0 }, { ddd: 0, ind: 11, ty: 4, nm: "Layer 15/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 1, k: [{ i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 0, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 5, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 11, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 17, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 23, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 28, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 33, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 39, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 45, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 51, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 56, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 61, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 67, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 73, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 78, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 83, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 88, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 94, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 100, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 104, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 109, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 115, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 121, s: [2] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 127, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 131, s: [0] }, { i: { x: [0.667], y: [1] }, o: { x: [0.333], y: [0] }, t: 136, s: [0] }, { t: 141, s: [0] }], ix: 10 }, p: { a: 0, k: [419.5, 394.5, 0], ix: 2 }, a: { a: 0, k: [6.5, 4.5, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.679, -0.431], [-1.659, -7.809], [-31.818, 0], [0, 0], [0, 0], [15.023, -1e-3]], o: [[-9.516, 2.447], [3.044, 9.935], [0, 0], [0, 0], [0, 0], [-1.906, 0]], v: [[-76.88, 123.666], [-86.848, 142.136], [-39.233, 152.86], [-35.062, 152.86], [-36.011, 134.938], [-71.476, 123.043]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.254901960784, 0.388235294118, 0.58431372549, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [88.757, -122.792], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 142, st: 0, bm: 0 }, { ddd: 0, ind: 12, ty: 4, nm: "Layer 7/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [500, 360.5, 0], ix: 2 }, a: { a: 0, k: [87.5, 62, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.531, -2.77], [5.024, 4.622], [0, 0], [0, 0], [0, 0]], o: [[-11.272, 13.236], [0.017, -4.299], [0, 0], [0, 0], [0.097, 3.897]], v: [[14.066, -1.554], [-13.809, -0.668], [-14.066, -8.542], [-14.066, -10.475], [12.986, -11.682]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 0.522000002394, 0.416000007181, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [83.219, 11.932], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[8.277, -0.209], [0, 0], [1.948, 0.869], [-0.113, 5.185], [0, 0.515], [0, 0], [0, 0], [0, 0], [-0.532, -2.77], [-0.017, -0.048]], o: [[0, 0], [-2.898, 0], [-4.734, -2.126], [0.016, -0.532], [0.016, -4.299], [0, 0], [0, 0], [0.096, 3.897], [0.015, 0.049], [1.546, 8.132]], v: [[0.62, 13.148], [0.121, 13.148], [-7.125, 11.683], [-14.613, -0.572], [-14.597, -2.133], [-14.855, -10.008], [-14.855, -11.941], [12.198, -13.148], [13.277, -3.02], [13.309, -2.891]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.995999983245, 0.694000004787, 0.620000023935, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [84.008, 13.397], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-6.683, -1.562], [18.195, 0], [0.837, 7.649], [-5.54, 0]], o: [[-0.677, 9.033], [-19.179, 0], [8.937, -3.462], [9.757, 0]], v: [[23.341, -11.602], [0.733, 13.888], [-23.341, -9.976], [-0.974, -13.888]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.122000002394, 0.224000010771, 0.368999974868, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [84.201, 19.501], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[64.275, 47.925], [-2.319, 18.476], [0, 0], [0, 0], [0, 0], [-8.33, -16.477]], o: [[8.344, -13.122], [0, 0], [0, 0], [0, 0], [-0.272, 17.561], [0, 0]], v: [[-52.669, 14.059], [-39.383, -35.744], [-32.137, 1.83], [30.663, 1.83], [42.203, -35.744], [52.67, 15.516]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.122000002394, 0.224000010771, 0.368999974868, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [88.216, 80.27], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 3, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 1, ty: "sh", ix: 2, ks: { a: 0, k: { i: [[8.937, -3.462], [10.161, -13.173], [-2.158, -11.544], [-0.177, -0.531], [-31.818, 0], [0, 0], [-7.777, 14.217], [-0.467, 1.899], [0, 0], [17.213, 21.981], [17.938, 4.203], [9.757, 0]], o: [[-9.356, 3.623], [-19.855, 25.764], [0.112, 0.597], [3.044, 9.935], [0, 0], [0, 0], [0.853, -1.563], [0, 0], [3.848, -15.425], [-14.075, -17.987], [-6.683, -1.561], [-5.54, 0]], v: [[-28.814, 41.832], [-58.829, 65.568], [-87.266, 140.444], [-86.848, 142.136], [-39.233, 152.86], [37.658, 152.86], [79.122, 140.977], [81.103, 135.776], [81.103, 135.758], [59.268, 72.54], [17.868, 40.206], [-6.447, 37.92]], c: !0 }, ix: 2 }, nm: "Path 2", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 1, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.152941176471, 0.278431372549, 0.462745098039, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [89.674, -32.307], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 4, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 142, st: 0, bm: 0 }, { ddd: 0, ind: 13, ty: 4, nm: "Layer 9/3327591 Outlines", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 5, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 8, s: [0] }, { t: 11, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [529, 430, 0], ix: 2 }, a: { a: 0, k: [1, 244.5, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.667, 0.667, 0.667], y: [1, 1, 1] }, o: { x: [0.333, 0.333, 0.333], y: [0, 0, 0] }, t: 5, s: [0, 0, 100] }, { t: 11, s: [100, 100, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-4.827, 3.527], [11.057, -9.185], [1.434, 8.917], [0.327, 5.938], [-2.519, -9.188], [1.311, 11.835], [-2.94, 3.825], [-7.592, 9.315]], o: [[0, 0], [-9.608, 7.983], [0, 0], [-0.328, -5.938], [0, 0], [3.62, 1.989], [0, 0], [0, 0]], v: [[19.802, -23.821], [11.243, 16.29], [-16.278, -0.07], [-21.972, -8.687], [-13.292, -4.689], [-9.695, -17.832], [0.082, -21.111], [10.675, -24.273]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.596000043084, 0.698000021542, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [109.642, 58.55], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-5.632, 0.127], [-2.313, 2.82], [0, 0], [-0.35, -3.458]], o: [[-0.846, -4.675], [0, 0], [-0.811, 1.418], [1.818, 18.227]], v: [[9.035, 13.752], [7.635, 1.133], [-7.896, -13.879], [-8.685, -6.694]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.475, 0.611999990426, 0.74900004069, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [104.44, 70.159], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[7.012, -11.589], [-14.894, 3.824], [0.637, 3.583], [-2.313, 2.82], [0, 0], [0, 0]], o: [[0, 0], [5.066, -1.301], [-0.846, -4.675], [0, 0], [0, 0], [0, 0]], v: [[-14.733, -0.808], [9.637, 18.723], [14.097, 8.396], [12.698, -4.222], [-2.833, -19.234], [-6.255, -22.548]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.596000043084, 0.698000021542, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [99.378, 75.515], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [2.506, 7.542], [0, 0], [16.485, -8.14], [3.772, -0.876], [0, 0], [2.281, -2.021], [4.761, -4.246], [-6.719, -12.239], [-2.79, -6.41], [-4.016, 0.399], [0, 0]], o: [[0, 0], [-2.505, -7.542], [0, 0], [0, 0], [-3.773, 0.877], [0, 0], [-2.282, 2.022], [-4.759, 4.247], [6.719, 12.238], [2.649, 6.088], [4.018, -0.398], [0, 0]], v: [[25.36, 6.802], [28.98, -13.828], [19.66, -18.181], [-0.092, -28.909], [-4.581, -33.847], [-12.64, -23.087], [-17.64, -27.26], [-24.197, -14.155], [-24.767, 7.132], [-18.247, 27.31], [-9.697, 36.65], [6.382, 17.411]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.365000017952, 0.486000001197, 0.626999978458, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [104.648, 37.299], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 3, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[2.416, -14.299], [18.518, 13.686], [2.302, 2.255], [0, 0], [-26.698, 20.209], [0, 0], [-0.476, -8.198], [2.067, -8.863], [0, 0]], o: [[0, 0], [-2.818, -2.094], [0, 0], [0, 0], [0, 0], [8.85, -3.976], [1.132, 19.53], [0, 0], [0, 0]], v: [[38.477, 17.414], [-22.906, 32.101], [-30.587, 25.546], [-40.893, 9.508], [-4.726, -41.795], [-4.711, -41.811], [13.862, -36.141], [-3.776, 4.259], [34.645, -3.519]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.757000014361, 0.811999990426, 0.898000021542, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [41.143, 131.841], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 3, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-6.508, -9.125], [0.134, 1.476], [0, 0], [2.038, -12.702], [7.648, -0.135], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [-0.134, -1.476], [0, 0], [-2.038, 12.703], [0, 0], [0, 0]], v: [[-15.256, 1.141], [-9.754, -1.005], [1.987, -6.373], [6.348, -10.533], [6.147, -14.156], [13.218, 0.515], [-4.252, 11.743], [-13.779, 15.499]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.596000043084, 0.698000021542, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [91.328, 130.401], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 3, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.063, -0.154], [0, 0], [0.154, 1.064], [0, 0], [-1.064, 0.155], [0, 0], [-0.154, -1.063], [0, 0]], o: [[0, 0], [-1.064, 0.154], [0, 0], [-0.154, -1.063], [0, 0], [1.063, -0.155], [0, 0], [0.155, 1.063]], v: [[22.223, 26.673], [-13.723, 31.891], [-15.928, 30.244], [-23.87, -24.468], [-22.223, -26.673], [13.724, -31.89], [15.929, -30.244], [23.869, 24.468]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.948999980852, 0.957000014361, 0.976000019148, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [80.007, 139.697], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 3, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-10.063, 6.844], [0.82, -10.741], [0.338, 0.096], [0, 0]], o: [[0, 0], [-9.372, -0.483], [-0.016, 0], [0, 0]], v: [[9.122, -11.425], [5.21, 11.425], [-9.106, 9.429], [-9.122, 9.412]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.592000026329, 0.702000038297, 0.819999964097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [129.079, 125.254], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 3, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[19.919, 5.04], [3.961, 11.755], [-9.437, -1.127], [-11.787, -4.315]], o: [[-14.412, -3.655], [7.89, -1.191], [0, 0], [1.385, 10.29]], v: [[2.77, 12.35], [-23.187, -16.022], [2.77, -16.263], [21.802, -9.904]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.808000033509, 0.851000019148, 0.917999985639, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [97.591, 90.078], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 3, cix: 2, bm: 0, ix: 9, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [1.176, -9.402], [0, 0], [0, 0], [8.301, -1.61], [0, 0], [3.494, -14.154], [0, 0]], o: [[-0.121, 12.494], [0, 0], [0, 0], [0, 0], [-6.506, 1.262], [-7.006, 9.535], [0, 0], [0, 0]], v: [[-8.115, -58.169], [-12.082, -24.167], [8.604, -28.355], [40.79, 3.468], [36.568, 14.402], [-0.339, 19.893], [-14.004, 58.169], [-44.868, 4.54]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.592000026329, 0.702000038297, 0.819999964097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [62.635, 157.598], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 3, cix: 2, bm: 0, ix: 10, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-3.221, -11.127], [33.267, -4.943], [7.858, 0.419], [0.338, 0.097], [0, 0], [-5.91, -24.428], [0, 0], [36.473, 30.031], [0, 0], [0, 0], [-26.698, 20.209], [0, 0], [-15.378, 2.254], [-9.437, -1.127], [-11.787, -4.315], [-8.549, -3.671], [0, 0], [-6.715, 15.571]], o: [[0, 0], [-14.879, 2.206], [-9.372, -0.482], [-0.017, 0], [0, 0], [5.893, 24.411], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [10.064, -7.632], [7.889, -1.192], [0, 0], [6.344, 2.319], [24.428, 10.468], [0, 0], [0, 0]], v: [[111.109, -76.069], [56.907, -15.379], [22.93, -13.366], [8.615, -15.362], [8.598, -15.379], [5.378, 26.054], [13.429, 55.57], [-67.889, 58.517], [-100.803, 7.342], [-111.109, -8.696], [-74.942, -59.999], [-74.925, -60.015], [-36.955, -75.988], [-10.998, -76.23], [8.036, -69.87], [30.594, -60.901], [61.737, -47.31], [94.474, -88.548]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.717999985639, 0.791999966491, 0.898000021542, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [111.358, 150.045], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 11", np: 3, cix: 2, bm: 0, ix: 11, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[1.261, 0.36], [0, 0], [0.068, -1.997], [0, 0], [0, 0], [0.783, 2.831]], o: [[-2.114, -0.604], [-1.689, 2.173], [-0.217, 5.576], [0, 0], [4.851, -6.249], [2.364, -3.533]], v: [[4.788, -12.089], [-1.62, -8.298], [-3.722, 0.201], [-6.049, 8.744], [0.216, 12.693], [2.698, -4.392]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.596000043084, 0.698000021542, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [213.626, 55.973], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 12", np: 3, cix: 2, bm: 0, ix: 12, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[3.905, -2.887], [-1.018, -2.022], [0, 0], [-2.426, -1.227], [0, 0], [-1.8, -0.794], [1.721, 1.588], [0, 0], [2.014, 1.083], [0, 0], [1.331, 1.011], [0, 0]], o: [[0, 0], [1.016, 2.021], [0, 0], [2.426, 1.227], [0, 0], [1.799, 0.794], [-1.721, -1.589], [0, 0], [-2.193, -1.179], [0, 0], [-1.33, -1.01], [0, 0]], v: [[-3.763, -7.038], [-9.702, 2.057], [-4.85, 0.901], [-5.556, 6.893], [0.626, 4.005], [-0.703, 9.131], [8.999, 1.552], [6.339, 1.263], [6.339, -3.213], [3.051, -2.274], [3.365, -5.884], [-0.783, -5.595]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.596000043084, 0.698000021542, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [228.633, 51.093], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 13", np: 3, cix: 2, bm: 0, ix: 13, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-4.562, 5.099], [-1.476, -2.684], [0, 0], [-4.831, -8.319], [0, 0], [0, 0], [0, 0]], o: [[0, 0], [4.563, -5.099], [1.477, 2.683], [0, 0], [4.83, 8.32], [0, 0], [0, 0], [0, 0]], v: [[-14.17, 10.863], [-7.313, -8.607], [11.205, -18.566], [0.201, -7.467], [10.669, -0.49], [-0.067, 14.273], [-3.154, 21.249], [-15.498, 13.467]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.475, 0.611999990426, 0.74900004069, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [223.076, 51.25], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 14", np: 3, cix: 2, bm: 0, ix: 14, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [7.092, -6.736], [0, 0], [0, 0], [0, 0]], o: [[-3.135, 10.388], [0, 0], [0, 0], [0, 0], [0, 0]], v: [[41.197, -10.064], [26.189, 15.93], [28.126, 24.154], [-41.197, 23.298], [-33.48, -24.154]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.475, 0.611999990426, 0.74900004069, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [58.963, 220.107], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 15", np: 3, cix: 2, bm: 0, ix: 15, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-5.627, -13.151], [0, 0], [5.74, 15.225]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[11.272, -20.128], [33.145, 20.129], [-24.141, 20.129], [-33.145, -10.941]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.365000017952, 0.486000001197, 0.626999978458, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [111.23, 224.132], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 16", np: 3, cix: 2, bm: 0, ix: 16, mn: "ADBE Vector Group", hd: !1 }], ip: 5, op: 142, st: 5, bm: 0 }, { ddd: 0, ind: 14, ty: 4, nm: "Layer 11/3327591 Outlines", sr: 1, ks: { o: { a: 1, k: [{ i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 5, s: [0] }, { i: { x: [0.833], y: [0.833] }, o: { x: [0.167], y: [0.167] }, t: 8, s: [0] }, { t: 11, s: [100] }], ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [469.5, 435, 0], ix: 2 }, a: { a: 0, k: [213.5, 201, 0], ix: 1 }, s: { a: 1, k: [{ i: { x: [0.833, 0.833, 0.833], y: [0.833, 0.833, 0.833] }, o: { x: [0.167, 0.167, 0.167], y: [0.167, 0.167, 0.167] }, t: 5, s: [0, 0, 100] }, { t: 11, s: [100, 100, 100] }], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[5.404, 2.557], [-12.587, -6.943], [0.266, 9.028], [0.795, 5.894], [0.746, -9.498], [0.937, 11.872], [3.607, 3.204], [9.209, 7.722]], o: [[0, 0], [10.938, 6.034], [0, 0], [-0.795, -5.893], [0, 0], [-3.181, 2.634], [0, 0], [0, 0]], v: [[-22.335, -20.83], [-6.388, 16.957], [17.568, -4.287], [21.54, -13.821], [13.766, -8.262], [7.762, -20.495], [-2.459, -21.876], [-13.457, -22.991]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.596000043084, 0.698000021542, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [115.635, 57.475], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[5.555, -0.935], [2.802, 2.335], [0, 0], [-0.306, -3.462]], o: [[-0.048, -4.751], [0, 0], [1.063, 1.239], [1.643, 18.244]], v: [[-7.101, 15.161], [-8.1, 2.504], [4.332, -15.161], [6.457, -8.253]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.475, 0.611999990426, 0.74900004069, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [125.332, 66.787], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-9.066, -10.063], [10.37, 1.803], [0.048, 3.639], [2.802, 2.335], [0, 0], [0, 0]], o: [[0, 0], [-5.153, -0.903], [-0.049, -4.751], [0, 0], [0, 0], [0, 0]], v: [[13.792, -2.094], [-6.449, 20.049], [-12.793, 12.368], [-13.792, -0.29], [-1.361, -17.953], [1.377, -21.852]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.596000043084, 0.698000021542, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [131.025, 69.58], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-1.043, 7.879], [0, 0], [-17.722, -4.895], [-3.87, -0.152], [0, 0], [-2.621, -1.556], [-5.474, -3.276], [4.298, -13.283], [1.535, -6.82], [4.02, -0.365], [0, 0]], o: [[0, 0], [1.042, -7.878], [0, 0], [0, 0], [3.869, 0.151], [0, 0], [2.621, 1.557], [5.474, 3.275], [-4.297, 13.284], [-1.457, 6.478], [-4.02, 0.364], [0, 0]], v: [[-22.557, 11.308], [-29.992, -8.273], [-21.656, -14.301], [-4.273, -28.551], [-0.793, -34.245], [9.145, -25.192], [13.272, -30.231], [22.175, -18.592], [26.737, 2.207], [24.129, 23.251], [17.486, 34.033], [-1.924, 18.161]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.365000017952, 0.486000001197, 0.626999978458, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [117.065, 34.647], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 3, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [29.491, -7.648], [-7.18, -8.252], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[20.195, -18.267], [-28.025, 0.152], [-24.939, 18.267], [32.118, 18.267]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.713999968884, 0.773000021542, 0.866999966491, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [144.05, 177.13], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 3, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [-6.14, 1.811], [-18.417, -1.007]], o: [[0, 0], [0, 0], [6.138, -1.812], [0, 0]], v: [[19.877, 8.353], [-19.877, 8.353], [-13.637, 1.107], [14.844, -7.346]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.596000043084, 0.698000021542, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [103.697, 187.044], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 3, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [-1.543, 38.848], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [0, 0]], v: [[-23.756, 37.896], [13.289, -37.896], [23.756, -5.154], [19.73, 28.934]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.592000026329, 0.702000038297, 0.819999964097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [148.36, 141.71], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 3, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-3.978, -0.515], [11.176, 0.193], [0.097, 6.296], [-6.264, 0.193], [0, 0]], o: [[-2.432, 15.459], [-8.984, -0.161], [5.153, -2.11], [0, 0], [0, 0]], v: [[19.742, -14.606], [-9.34, 14.944], [-19.742, -4.396], [-2.56, -7.778], [13.204, -15.137]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.808000033509, 0.851000019148, 0.917999985639, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [131.612, 82.623], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 3, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.257, -1.626], [0.145, 0.692], [6.667, -4.186], [0, 0]], o: [[-0.128, -0.692], [0, 0], [0, 0], [4.734, 18.229]], v: [[5.958, 13.575], [5.54, 11.498], [-5.958, 19.903], [-1.304, -19.903]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.592000026329, 0.702000038297, 0.819999964097, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [100.019, 133.378], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 9", np: 3, cix: 2, bm: 0, ix: 9, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [4.38, 23.977], [0.016, 0.112], [0.016, 0.08], [0.129, 0.628], [6.667, -4.187], [8.196, 2.351], [10.209, 23.091], [-10.193, 2.351], [-17.987, -6.441], [-7.504, 16.909], [-9.081, 3.671], [-6.264, 0.194], [0, 0], [-3.977, -0.514], [-9.936, -7.569], [0, 0]], o: [[0, 0], [0, 0], [0, -0.048], [-0.129, -0.628], [0, 0], [-8.003, 5.04], [-15.04, -4.3], [0, 0], [0, 0], [0, 0], [4.798, -10.789], [5.153, -2.11], [0, 0], [0, 0], [7.391, 0.967], [15.297, 11.658], [0, 0]], v: [[-17.044, 63.96], [-13.099, 15.668], [-13.131, 15.507], [-13.164, 15.314], [-13.55, 13.43], [-25.047, 21.835], [-51.922, 29.532], [-99.168, -27.101], [-83.87, -37.101], [-45.481, -3.478], [-28.316, -31.932], [-7.238, -53.219], [9.944, -56.601], [25.708, -63.96], [32.246, -63.429], [61.859, -52.188], [99.168, 63.96]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.717999985639, 0.791999966491, 0.898000021542, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [119.108, 131.446], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 10", np: 3, cix: 2, bm: 0, ix: 10, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-5.397, -1.514], [0.798, -3.321], [0, 0], [1.107, -1.309], [0, 0], [4.932, 0.907], [-4.757, 0.935], [-4.328, -2.316]], o: [[0, 0], [-0.797, 3.322], [0, 0], [-1.107, 1.307], [0, 0], [-4.931, -0.905], [0, 0], [0, 0]], v: [[2.287, -9.561], [8.884, 2.218], [4.362, 1.685], [6.678, 6.949], [1.444, 4.935], [1.444, 10.168], [-4.925, -0.973], [-1.173, -5.43]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.694000004787, 0.764999988032, 0.910000011968, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [9.931, 82.474], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 11", np: 3, cix: 2, bm: 0, ix: 11, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0, 0], [0, 0], [0, 0], [0, 0], [2.624, 4.621], [0, 0], [0.193, 1.417], [-6.231, -2.914], [0, 0], [-0.901, 0.918], [-3.72, -7.841], [0, 0], [0, 0]], o: [[0, 0], [0, 0], [0, 0], [-4.428, 1.112], [-2.609, -4.638], [-1.707, -5.121], [-0.193, -1.401], [6.248, 2.93], [1.111, -3.012], [0.902, -0.902], [3.735, 7.859], [0, 0], [0, 0]], v: [[15.845, 12.132], [5.894, 22.391], [1.739, 16.286], [0.354, 14.242], [-13.236, 2.07], [-5.378, -9.719], [-14.138, -19.477], [-6.393, -19.477], [5.282, -6.191], [2.367, -18.268], [11.82, -10.219], [13.333, 6.9], [13.382, 6.98]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.596000043084, 0.698000021542, 0.847000002394, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [17.965, 83.533], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 12", np: 3, cix: 2, bm: 0, ix: 12, mn: "ADBE Vector Group", hd: !1 }], ip: 5, op: 142, st: 21, bm: 0 }, { ddd: 0, ind: 15, ty: 4, nm: "Layer 8/3327591 Outlines", sr: 1, ks: { o: { a: 0, k: 100, ix: 11 }, r: { a: 0, k: 0, ix: 10 }, p: { a: 0, k: [499, 276.5, 0], ix: 2 }, a: { a: 0, k: [247, 155, 0], ix: 1 }, s: { a: 0, k: [100, 100, 100], ix: 6 } }, ao: 0, shapes: [{ ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[0.965, 0], [0, 0], [0, 0.965], [0, 0], [-0.965, 0], [0, 0], [0, -0.965], [0, 0]], o: [[0, 0], [-0.965, 0], [0, 0], [0, -0.965], [0, 0], [0.965, 0], [0, 0], [0, 0.965]], v: [[244.76, 5.233], [-244.759, 5.233], [-246.507, 3.487], [-246.507, -3.487], [-244.759, -5.233], [244.76, -5.233], [246.507, -3.487], [246.507, 3.487]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.757000014361, 0.783999992819, 0.827000038297, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [246.757, 304.383], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 1", np: 3, cix: 2, bm: 0, ix: 1, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-14.814, -34.621], [0, 0], [26.698, 10.451], [9.516, 0.756], [0.128, 1.094], [-10.257, -4.009]], o: [[0, 0], [-14.445, -33.075], [-9.694, -3.8], [-0.178, -1.08], [10.031, 0.724], [27.874, 10.918]], v: [[47.495, 37.68], [43.984, 37.68], [-17.979, -27.89], [-47.028, -34.427], [-47.495, -37.68], [-16.804, -30.885]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [63.466, 261.419], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 2", np: 3, cix: 2, bm: 0, ix: 2, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-1.127, 0.29], [3.719, -4.847], [8.744, -1.079], [1.015, 0], [4.412, 3.704], [3.092, 8.229], [-1.176, -0.048], [-5.04, -4.235], [-5.717, 0.708], [-4.413, 5.749], [-1.176, 4.782], [0, 0]], o: [[-1.24, 5.652], [-4.944, 6.473], [-1.047, 0.129], [-5.426, 0], [-5.829, -4.895], [1.192, 0.064], [2.866, 7.278], [4.509, 3.784], [7.858, -0.966], [3.059, -3.993], [0, 0], [1.223, -0.226]], v: [[29.42, -13.921], [22.286, 2.344], [1.658, 13.728], [-1.434, 13.921], [-16.248, 8.366], [-29.42, -12.358], [-25.877, -12.197], [-14.171, 5.902], [1.256, 10.54], [19.726, 0.411], [25.894, -13.147], [25.91, -13.147]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [206.578, 130.818], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 3", np: 3, cix: 2, bm: 0, ix: 3, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[36.843, -6.039], [3.494, 0], [14.347, 44.04], [-1.127, 0], [-26.199, 4.3], [6.586, 56.117], [-1.513, 17.375], [-1.208, 0.661], [-2.931, -24.911]], o: [[-3.317, 0.547], [-25.748, 0], [1.127, -0.016], [15.813, 47.276], [35.394, -5.797], [-2.834, -24.074], [1.143, -0.725], [-1.755, 17.697], [6.811, 58.099]], v: [[3.744, 82.236], [-6.498, 83.074], [-76.076, 23.43], [-72.696, 23.398], [3.213, 79.064], [66.061, -19.291], [64.611, -81.286], [68.155, -83.364], [69.266, -19.662]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [210.805, 94.112], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 4", np: 3, cix: 2, bm: 0, ix: 4, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.854, -29.033], [14.96, -23.575], [42.946, -8.775], [7.762, 0], [19.951, 15.394], [10.193, 31.593], [-1.014, 0.387], [-22.753, -17.567], [-31.947, 6.522], [2.995, 101.06], [-10.74, 16.248], [-1.305, -0.033]], o: [[1.562, 52.462], [-15.668, 24.701], [-8.003, 1.642], [-24.17, 0], [-23.204, -17.923], [0.998, -0.419], [9.984, 31.063], [25.571, 19.758], [79.868, -16.343], [-0.853, -28.695], [1.272, 0], [-11.176, 15.78]], v: [[115.15, -47.117], [95.778, 62.816], [11.03, 111.221], [-12.641, 113.684], [-79.531, 90.417], [-130.689, 13.913], [-127.694, 12.705], [-77.55, 87.872], [10.386, 108.081], [111.929, -47.019], [126.824, -114.602], [130.689, -114.537]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [199.059, 114.901], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 5", np: 3, cix: 2, bm: 0, ix: 5, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-17.793, -8.615], [0.193, -1.078], [10.951, 41.287], [-19.323, 32.044], [-0.724, -0.902], [-10.241, -38.646]], o: [[-0.161, 1.111], [-18.615, -8.743], [-10.579, -39.982], [0.757, 0.869], [-18.373, 31.046], [10.467, 39.5]], v: [[32.069, 84.981], [31.538, 88.283], [-21.49, 19.234], [-8.527, -88.283], [-6.321, -85.625], [-18.366, 18.414]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [457.835, 145.085], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 6", np: 3, cix: 2, bm: 0, ix: 6, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-5.797, -2.061], [0.29, -1.032], [6.392, 3.463], [11.369, 79.031], [-17.246, 29.967], [-0.966, -0.579], [-5.266, -36.634], [-28.759, -15.652]], o: [[-0.29, 1.063], [-5.942, -2.126], [-29.468, -16.006], [-4.895, -34.074], [0.998, 0.547], [-15.137, 26.28], [11.175, 77.631], [6.183, 3.365]], v: [[51.352, 114.601], [50.481, 117.742], [31.899, 109.432], [-46.457, -21.255], [-27.858, -117.742], [-24.895, -116.053], [-43.268, -21.723], [33.284, 106.518]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [1, 1, 1, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [433.738, 138.878], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 7", np: 3, cix: 2, bm: 0, ix: 7, mn: "ADBE Vector Group", hd: !1 }, { ty: "gr", it: [{ ind: 0, ty: "sh", ix: 1, ks: { a: 0, k: { i: [[-0.29, -39.355], [2.27, -14.783], [0.193, -1.078], [1.643, -6.2], [0.29, -1.031], [9.565, -5.507], [0, 0], [6.876, 42.414], [0.128, 1.095], [-18.502, 25.008], [-12.738, 5.458], [-1.015, 0.386], [-22.286, 0.354], [-1.127, 0], [-12.544, -0.5], [-1.175, -0.048], [-13.252, 2.431], [0, 0], [-1.127, 0.289], [0, 0], [5.202, 17.907], [-22.462, 14.058], [-1.208, 0.66], [-18.163, -0.049], [-1.305, -0.032], [-17.503, -5.813], [-8.132, -4.46], [-0.966, -0.58], [-11.11, -13.139], [-0.725, -0.902]], o: [[0.129, 18.229], [-0.161, 1.111], [-1.192, 7.199], [-0.29, 1.063], [-6.311, 22.061], [0, 0], [0, 0], [-0.177, -1.079], [-2.674, -21.11], [8.438, -11.384], [0.998, -0.419], [18.888, -7.391], [1.127, -0.016], [13.268, -0.096], [1.191, 0.064], [20.257, 0.854], [0, 0], [1.224, -0.226], [0, 0], [14.669, -3.591], [-10.08, -34.733], [1.144, -0.724], [12.706, -6.892], [1.273, 0], [15.442, 0.467], [9.42, 3.124], [0.998, 0.548], [15.942, 9.211], [0.757, 0.87], [28.872, 35.586]], v: [[239.921, 30.667], [236.556, 80.393], [236.025, 83.693], [231.741, 103.805], [230.871, 106.945], [206.025, 149.424], [-195.784, 149.424], [-236.91, 77.316], [-237.376, 74.064], [-217.248, 3.904], [-184.978, -20.861], [-181.983, -22.068], [-118.62, -32.132], [-115.238, -32.165], [-76.189, -31.214], [-72.647, -31.055], [-20.877, -32.003], [-20.861, -32.003], [-17.35, -32.776], [-17.334, -32.776], [-0.636, -62.6], [22.068, -136.849], [25.611, -138.926], [72.534, -149.375], [76.4, -149.311], [126.204, -139.988], [152.532, -128.539], [155.495, -126.849], [195.961, -92.872], [198.167, -90.215]], c: !0 }, ix: 2 }, nm: "Path 1", mn: "ADBE Vector Shape - Group", hd: !1 }, { ty: "mm", mm: 4, nm: "Merge Paths 1", mn: "ADBE Vector Filter - Merge", hd: !1 }, { ty: "fl", c: { a: 0, k: [0.894000004787, 0.922000002394, 0.969000004787, 1], ix: 4 }, o: { a: 0, k: 100, ix: 5 }, r: 1, bm: 0, nm: "Fill 1", mn: "ADBE Vector Graphic - Fill", hd: !1 }, { ty: "tr", p: { a: 0, k: [253.348, 149.674], ix: 2 }, a: { a: 0, k: [0, 0], ix: 1 }, s: { a: 0, k: [100, 100], ix: 3 }, r: { a: 0, k: 0, ix: 6 }, o: { a: 0, k: 100, ix: 7 }, sk: { a: 0, k: 0, ix: 4 }, sa: { a: 0, k: 0, ix: 5 }, nm: "Transform" }], nm: "Group 8", np: 3, cix: 2, bm: 0, ix: 8, mn: "ADBE Vector Group", hd: !1 }], ip: 0, op: 142, st: 0, bm: 0 }], markers: [] };

// app/routes/home/intro.jsx
import { Fragment as Fragment10, jsx as jsx34, jsxs as jsxs23 } from "react/jsx-runtime";
function Intro({ id, sectionRef, scrollIndicatorHidden, ...rest }) {
  let { theme } = useTheme(), { disciplines } = config_default, [disciplineIndex, setDisciplineIndex] = useState13(0), prevTheme = usePrevious(theme), introLabel = [disciplines.slice(0, -1).join(", "), disciplines.slice(-1)[0]].join(
    ", and "
  ), currentDiscipline = disciplines.find((item, index) => index === disciplineIndex), titleId = `${id}-title`, scrollToHash = useScrollToHash(), isHydrated = useHydrated();
  useInterval(
    () => {
      let index = (disciplineIndex + 1) % disciplines.length;
      setDisciplineIndex(index);
    },
    5e3,
    theme
  ), useEffect17(() => {
    prevTheme && prevTheme !== theme && setDisciplineIndex(0);
  }, [theme, prevTheme]);
  let handleScrollClick = (event) => {
    event.preventDefault(), scrollToHash(event.currentTarget.href);
  };
  return /* @__PURE__ */ jsx34(
    Section,
    {
      className: intro_module_default.intro,
      as: "section",
      ref: sectionRef,
      id,
      "aria-labelledby": titleId,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx34(Transition, { in: !0, timeout: 3e3, children: ({ visible, status }) => /* @__PURE__ */ jsxs23(Fragment10, { children: [
        isHydrated && /* @__PURE__ */ jsx34("div", { className: intro_module_default.lottieWrapper, children: /* @__PURE__ */ jsx34(
          Lottie,
          {
            animationData: hero_animation_default,
            loop: !0,
            autoplay: !0,
            className: intro_module_default.lottie
          }
        ) }),
        /* @__PURE__ */ jsxs23("header", { className: intro_module_default.text, children: [
          /* @__PURE__ */ jsx34("h1", { className: intro_module_default.name, "data-visible": visible, id: titleId, children: /* @__PURE__ */ jsx34(DecoderText, { text: config_default.name, delay: 500 }) }),
          /* @__PURE__ */ jsxs23(Heading, { level: 0, as: "h2", className: intro_module_default.title, children: [
            /* @__PURE__ */ jsx34(VisuallyHidden, { className: intro_module_default.label, children: `${config_default.role} + ${introLabel}` }),
            /* @__PURE__ */ jsxs23("span", { "aria-hidden": !0, className: intro_module_default.row, children: [
              /* @__PURE__ */ jsx34(
                "span",
                {
                  className: intro_module_default.word,
                  "data-status": status,
                  style: cssProps({ delay: tokens.base.durationXS }),
                  children: config_default.role
                }
              ),
              /* @__PURE__ */ jsx34("span", { className: intro_module_default.line, "data-status": status })
            ] }),
            /* @__PURE__ */ jsx34("div", { className: intro_module_default.row, children: disciplines.map(
              (item) => /* @__PURE__ */ jsx34(
                Transition,
                {
                  unmount: !0,
                  in: item === currentDiscipline,
                  timeout: { enter: 3e3, exit: 2e3 },
                  children: ({ status: status2, nodeRef }) => /* @__PURE__ */ jsx34(
                    "span",
                    {
                      "aria-hidden": !0,
                      ref: nodeRef,
                      className: intro_module_default.word,
                      "data-plus": !0,
                      "data-status": status2,
                      style: cssProps({ delay: tokens.base.durationL }),
                      children: item
                    }
                  )
                },
                item
              )
            ) })
          ] })
        ] }),
        /* @__PURE__ */ jsx34(
          RouterLink3,
          {
            to: "/#project-1",
            className: intro_module_default.scrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: /* @__PURE__ */ jsx34(VisuallyHidden, { children: "Scroll to projects" })
          }
        ),
        /* @__PURE__ */ jsxs23(
          RouterLink3,
          {
            to: "/#project-1",
            className: intro_module_default.mobileScrollIndicator,
            "data-status": status,
            "data-hidden": scrollIndicatorHidden,
            onClick: handleScrollClick,
            children: [
              /* @__PURE__ */ jsx34(VisuallyHidden, { children: "Scroll to projects" }),
              /* @__PURE__ */ jsx34(
                "svg",
                {
                  "aria-hidden": !0,
                  stroke: "currentColor",
                  width: "43",
                  height: "15",
                  viewBox: "0 0 43 15",
                  children: /* @__PURE__ */ jsx34("path", { d: "M1 1l20.5 12L42 1", strokeWidth: "2", fill: "none" })
                }
              )
            ]
          }
        )
      ] }) }, theme)
    }
  );
}

// app/assets/profile-large.jpg
var profile_large_default = "/assets/_assets/profile-large-TZQULEYR.jpg";

// app/assets/profile-placeholder.jpg
var profile_placeholder_default = "/assets/_assets/profile-placeholder-KNKUW3WA.jpg";

// app/assets/profile.jpg
var profile_default = "/assets/_assets/profile-TZQULEYR.jpg";

// app/components/divider/divider.jsx
init_style();

// app/components/divider/divider.module.css
var divider_module_default = { divider: "szpR-", line: "TdvjY", notch: "ZQYLT" };

// app/components/divider/divider.jsx
import { jsx as jsx35, jsxs as jsxs24 } from "react/jsx-runtime";
var Divider = ({
  lineWidth,
  lineHeight,
  notchWidth,
  notchHeight,
  collapseDelay,
  collapsed,
  className,
  style,
  ...rest
}) => /* @__PURE__ */ jsxs24(
  "div",
  {
    className: classes(divider_module_default.divider, className),
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
      /* @__PURE__ */ jsx35("div", { className: divider_module_default.line, "data-collapsed": collapsed }),
      /* @__PURE__ */ jsx35(
        "div",
        {
          className: divider_module_default.notch,
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
  collapsed: !1,
  collapseDelay: 0
};

// app/routes/home/profile.jsx
init_section2();
init_text2();
init_transition2();
import { Fragment as Fragment11, useState as useState14 } from "react";

// app/routes/home/katakana.svg
var katakana_default = "/assets/_assets/katakana-FXSAGDO3.svg";

// app/routes/home/profile.module.css
var profile_module_default = { profile: "_7hNxv", content: "_9BsSW", column: "czfVX", title: "-QwOv", description: "gJPD-", tag: "VVKtL", tagText: "XHBZ3", image: "lOqP1", svg: "FWH9p", button: "_3eYJe" };

// app/routes/home/profile.jsx
import { jsx as jsx36, jsxs as jsxs25 } from "react/jsx-runtime";
var ProfileText = ({ visible, titleId }) => /* @__PURE__ */ jsxs25(Fragment11, { children: [
  /* @__PURE__ */ jsx36(Heading, { className: profile_module_default.title, "data-visible": visible, level: 3, id: titleId, children: /* @__PURE__ */ jsx36(DecoderText, { text: "Hi there", start: visible, delay: 500 }) }),
  /* @__PURE__ */ jsx36(Text, { className: profile_module_default.description, "data-visible": visible, size: "l", as: "p", children: "I'm Wisdom, a Fullstack developer with a passion for building thoughtful, scalable digital experiences. My curiosity spans beyond the stack. I'm constantly diving into new fields like AI, automation, and design systems to push what I create even further." }),
  /* @__PURE__ */ jsx36(Text, { className: profile_module_default.description, "data-visible": visible, size: "l", as: "p", children: "When I\u2019m not coding, I\u2019m probably exploring emerging tech, fine-tuning a side project, or learning something entirely new. Always open to exciting ideas, feel free to reach out." })
] }), Profile = ({ id, visible, sectionRef }) => {
  let [focused, setFocused] = useState14(!1), titleId = `${id}-title`;
  return /* @__PURE__ */ jsx36(
    Section,
    {
      className: profile_module_default.profile,
      onFocus: () => setFocused(!0),
      onBlur: () => setFocused(!1),
      as: "section",
      id,
      ref: sectionRef,
      "aria-labelledby": titleId,
      tabIndex: -1,
      children: /* @__PURE__ */ jsx36(Transition, { in: visible || focused, timeout: 0, children: ({ visible: visible2, nodeRef }) => /* @__PURE__ */ jsxs25("div", { className: profile_module_default.content, ref: nodeRef, children: [
        /* @__PURE__ */ jsxs25("div", { className: profile_module_default.column, children: [
          /* @__PURE__ */ jsx36(ProfileText, { visible: visible2, titleId }),
          /* @__PURE__ */ jsx36(
            Button,
            {
              secondary: !0,
              className: profile_module_default.button,
              "data-visible": visible2,
              href: "/contact",
              icon: "send",
              children: "Send me a message"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs25("div", { className: profile_module_default.column, children: [
          /* @__PURE__ */ jsxs25("div", { className: profile_module_default.tag, "aria-hidden": !0, children: [
            /* @__PURE__ */ jsx36(
              Divider,
              {
                notchWidth: "64px",
                notchHeight: "8px",
                collapsed: !visible2,
                collapseDelay: 1e3
              }
            ),
            /* @__PURE__ */ jsx36("div", { className: profile_module_default.tagText, "data-visible": visible2, children: "About me" })
          ] }),
          /* @__PURE__ */ jsxs25("div", { className: profile_module_default.image, children: [
            /* @__PURE__ */ jsx36(
              Image2,
              {
                reveal: !0,
                delay: 100,
                placeholder: profile_placeholder_default,
                srcSet: `${profile_default} 480w, ${profile_large_default} 960w`,
                sizes: "(max-width: 600px) 480px, 560px",
                alt: "Your alt text here"
              }
            ),
            /* @__PURE__ */ jsx36("svg", { className: profile_module_default.svg, "data-visible": visible2, viewBox: "0 0 136 766", children: /* @__PURE__ */ jsx36("use", { href: `${katakana_default}#katakana-profile` }) })
          ] })
        ] })
      ] }) })
    }
  );
};

// app/routes/home/project-summary.jsx
init_device_models();
init_section2();
init_text2();
init_transition2();
init_loader2();
init_hooks();
init_style();
import { Suspense as Suspense4, lazy as lazy4, useState as useState16 } from "react";

// app/routes/home/project-summary.module.css
var project_summary_module_default = { summary: "Qfeul", content: "hnB2y", details: "_43CF1", preview: "byZvr", model: "l0LkK", loader: "Ztk-H", svg: "ImNuU", index: "_8moKJ", indexNumber: "ytF-w", title: "vDiPG", description: "Uw5Ku", button: "Sj79x" };

// app/routes/home/project-summary.jsx
import { Fragment as Fragment12, jsx as jsx38, jsxs as jsxs27 } from "react/jsx-runtime";
var Model2 = lazy4(
  () => Promise.resolve().then(() => (init_model2(), model_exports)).then((module) => ({ default: module.Model }))
);
function ProjectSummary({
  id,
  visible: sectionVisible,
  sectionRef,
  index,
  title: title4,
  description: description4,
  model,
  buttonText,
  buttonLink,
  alternate,
  ...rest
}) {
  let [focused, setFocused] = useState16(!1), [modelLoaded, setModelLoaded] = useState16(!1), { theme } = useTheme(), { width } = useWindowSize(), isHydrated = useHydrated(), titleId = `${id}-title`, isMobile = width <= media.tablet, svgOpacity = theme === "light" ? 0.7 : 1, indexText = index < 10 ? `0${index}` : index, phoneSizes = `(max-width: ${media.tablet}px) 30vw, 20vw`, laptopSizes = `(max-width: ${media.tablet}px) 80vw, 40vw`;
  function handleModelLoad() {
    setModelLoaded(!0);
  }
  function renderKatakana(device, visible) {
    return /* @__PURE__ */ jsx38(
      "svg",
      {
        type: "project",
        "data-visible": visible && modelLoaded,
        "data-light": theme === "light",
        style: cssProps({ opacity: svgOpacity }),
        className: project_summary_module_default.svg,
        "data-device": device,
        viewBox: "0 0 751 136",
        children: /* @__PURE__ */ jsx38("use", { href: `${katakana_default}#katakana-project` })
      }
    );
  }
  function renderDetails(visible) {
    return /* @__PURE__ */ jsxs27("div", { className: project_summary_module_default.details, children: [
      /* @__PURE__ */ jsxs27("div", { "aria-hidden": !0, className: project_summary_module_default.index, children: [
        /* @__PURE__ */ jsx38(
          Divider,
          {
            notchWidth: "64px",
            notchHeight: "8px",
            collapsed: !visible,
            collapseDelay: 1e3
          }
        ),
        /* @__PURE__ */ jsx38("span", { className: project_summary_module_default.indexNumber, "data-visible": visible, children: indexText })
      ] }),
      /* @__PURE__ */ jsx38(
        Heading,
        {
          level: 3,
          as: "h2",
          className: project_summary_module_default.title,
          "data-visible": visible,
          id: titleId,
          children: title4
        }
      ),
      /* @__PURE__ */ jsx38(Text, { className: project_summary_module_default.description, "data-visible": visible, as: "p", children: description4 }),
      /* @__PURE__ */ jsx38("div", { className: project_summary_module_default.button, "data-visible": visible, children: /* @__PURE__ */ jsx38(Button, { iconHoverShift: !0, href: buttonLink, iconEnd: "arrow-right", children: buttonText }) })
    ] });
  }
  function renderPreview(visible) {
    return /* @__PURE__ */ jsxs27("div", { className: project_summary_module_default.preview, children: [
      model.type === "laptop" && /* @__PURE__ */ jsxs27(Fragment12, { children: [
        renderKatakana("laptop", visible),
        /* @__PURE__ */ jsxs27("div", { className: project_summary_module_default.model, "data-device": "laptop", children: [
          !modelLoaded && /* @__PURE__ */ jsx38(Loader, { center: !0, className: project_summary_module_default.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx38(Suspense4, { children: /* @__PURE__ */ jsx38(
            Model2,
            {
              alt: model.alt,
              cameraPosition: { x: 0, y: 0, z: 8 },
              showDelay: 700,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.laptop,
                  texture: {
                    ...model.textures[0],
                    sizes: laptopSizes
                  }
                }
              ]
            }
          ) })
        ] })
      ] }),
      model.type === "phone" && /* @__PURE__ */ jsxs27(Fragment12, { children: [
        renderKatakana("phone", visible),
        /* @__PURE__ */ jsxs27("div", { className: project_summary_module_default.model, "data-device": "phone", children: [
          !modelLoaded && /* @__PURE__ */ jsx38(Loader, { center: !0, className: project_summary_module_default.loader, "data-visible": visible }),
          isHydrated && visible && /* @__PURE__ */ jsx38(Suspense4, { children: /* @__PURE__ */ jsx38(
            Model2,
            {
              alt: model.alt,
              cameraPosition: { x: 0, y: 0, z: 11.5 },
              showDelay: 300,
              onLoad: handleModelLoad,
              show: visible,
              models: [
                {
                  ...deviceModels.phone,
                  position: { x: -0.6, y: 1.1, z: 0 },
                  texture: {
                    ...model.textures[0],
                    sizes: phoneSizes
                  }
                },
                {
                  ...deviceModels.phone,
                  position: { x: 0.6, y: -0.5, z: 0.3 },
                  texture: {
                    ...model.textures[1],
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
  return /* @__PURE__ */ jsx38(
    Section,
    {
      className: project_summary_module_default.summary,
      "data-alternate": alternate,
      "data-first": index === 1,
      onFocus: () => setFocused(!0),
      onBlur: () => setFocused(!1),
      as: "section",
      "aria-labelledby": titleId,
      ref: sectionRef,
      id,
      tabIndex: -1,
      ...rest,
      children: /* @__PURE__ */ jsx38("div", { className: project_summary_module_default.content, children: /* @__PURE__ */ jsx38(Transition, { in: sectionVisible || focused, children: ({ visible }) => /* @__PURE__ */ jsxs27(Fragment12, { children: [
        !alternate && !isMobile && /* @__PURE__ */ jsxs27(Fragment12, { children: [
          renderDetails(visible),
          renderPreview(visible)
        ] }),
        (alternate || isMobile) && /* @__PURE__ */ jsxs27(Fragment12, { children: [
          renderPreview(visible),
          renderDetails(visible)
        ] })
      ] }) }) })
    }
  );
}

// app/routes/home/home.jsx
import { useEffect as useEffect19, useRef as useRef16, useState as useState17 } from "react";

// app/routes/home/home.module.css
var home_module_default = { home: "bDEQd" };

// app/routes/home/home.jsx
import { jsx as jsx39, jsxs as jsxs28 } from "react/jsx-runtime";
var links2 = () => [
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
], meta7 = () => baseMeta({
  title: "Designer + Developer",
  description: `Design portfolio of ${config_default.name} \u2014 a product designer working on web & mobile apps with a focus on motion, experience design, and accessibility.`
}), Home = () => {
  let [visibleSections, setVisibleSections] = useState17([]), [scrollIndicatorHidden, setScrollIndicatorHidden] = useState17(!1), intro = useRef16(), projectOne = useRef16(), projectTwo = useRef16(), projectThree = useRef16(), details = useRef16();
  return useEffect19(() => {
    let sections = [intro, projectOne, projectTwo, projectThree, details], sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry2) => {
          if (entry2.isIntersecting) {
            let section = entry2.target;
            if (observer.unobserve(section), visibleSections.includes(section))
              return;
            setVisibleSections((prevSections) => [...prevSections, section]);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.1 }
    ), indicatorObserver = new IntersectionObserver(
      ([entry2]) => {
        setScrollIndicatorHidden(!entry2.isIntersecting);
      },
      { rootMargin: "-100% 0px 0px 0px" }
    );
    return sections.forEach((section) => {
      sectionObserver.observe(section.current);
    }), indicatorObserver.observe(intro.current), () => {
      sectionObserver.disconnect(), indicatorObserver.disconnect();
    };
  }, [visibleSections]), /* @__PURE__ */ jsxs28("div", { className: home_module_default.home, children: [
    /* @__PURE__ */ jsx39(
      Intro,
      {
        id: "intro",
        sectionRef: intro,
        scrollIndicatorHidden
      }
    ),
    /* @__PURE__ */ jsx39(
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
              srcSet: `${spr_lesson_builder_dark_default} 1280w, ${spr_lesson_builder_dark_large_default} 2560w`,
              placeholder: spr_lesson_builder_dark_placeholder_default
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx39(
      ProjectSummary,
      {
        id: "project-2",
        alternate: !0,
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
              srcSet: `${gamestack_login_default} 375w, ${gamestack_login_large_default} 750w`,
              placeholder: gamestack_login_placeholder_default
            },
            {
              srcSet: `${gamestack_list_default} 375w, ${gamestack_list_large_default} 750w`,
              placeholder: gamestack_list_placeholder_default
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx39(
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
              srcSet: `${slice_app_default} 800w, ${slice_app_large_default} 1920w`,
              placeholder: slice_app_placeholder_default
            }
          ]
        }
      }
    ),
    /* @__PURE__ */ jsx39(
      Profile,
      {
        sectionRef: details,
        visible: visibleSections.includes(details.current),
        id: "details"
      }
    ),
    /* @__PURE__ */ jsx39(Footer, {})
  ] });
};

// app/routes/uses/route.js
var route_exports6 = {};
__export(route_exports6, {
  default: () => Uses,
  meta: () => meta8
});

// app/assets/uses-background-placeholder.jpg
var uses_background_placeholder_default = "/assets/_assets/uses-background-placeholder-FAJ4JRZS.jpg";

// app/assets/uses-background.mp4
var uses_background_default = "/assets/_assets/uses-background-63TXPIYB.mp4";

// app/components/list/list.jsx
init_style();

// app/components/list/list.module.css
var list_module_default = { list: "Uql6b", item: "ELv2e" };

// app/components/list/list.jsx
import { jsx as jsx40 } from "react/jsx-runtime";
var List = ({ ordered, children, className, ...rest }) => /* @__PURE__ */ jsx40(ordered ? "ol" : "ul", { className: classes(list_module_default.list, className), ...rest, children }), ListItem = ({ children, ...rest }) => /* @__PURE__ */ jsx40("li", { className: list_module_default.item, ...rest, children });

// app/components/table/table.module.css
var table_module_default = { table: "z4bD8", row: "_-1gYo", head: "gCEbh", headCell: "f6oyt", cell: "qK5Aw" };

// app/components/table/table.jsx
import { jsx as jsx41 } from "react/jsx-runtime";
var Table = ({ children }) => /* @__PURE__ */ jsx41("table", { className: table_module_default.table, children }), TableRow = ({ children }) => /* @__PURE__ */ jsx41("tr", { className: table_module_default.row, children });
var TableBody = ({ children }) => /* @__PURE__ */ jsx41("tbody", { className: table_module_default.body, children }), TableHeadCell = ({ children }) => /* @__PURE__ */ jsx41("th", { className: table_module_default.headCell, children }), TableCell = ({ children }) => /* @__PURE__ */ jsx41("td", { className: table_module_default.cell, children });

// app/routes/uses/uses.module.css
var uses_module_default = { uses: "Npis0", section: "pn-0u" };

// app/routes/uses/uses.jsx
import { Fragment as Fragment13, jsx as jsx42, jsxs as jsxs29 } from "react/jsx-runtime";
var meta8 = () => baseMeta({
  title: "Uses",
  description: "A list of hardware and software I use to do my thing"
}), Uses = () => /* @__PURE__ */ jsxs29(Fragment13, { children: [
  /* @__PURE__ */ jsxs29(ProjectContainer, { className: uses_module_default.uses, children: [
    /* @__PURE__ */ jsx42(
      ProjectBackground,
      {
        src: uses_background_default,
        placeholder: uses_background_placeholder_default,
        opacity: 0.7
      }
    ),
    /* @__PURE__ */ jsx42(
      ProjectHeader,
      {
        title: "Uses",
        description: "A somewhat comprehensive list of tools, apps, hardware, and more that I use on a daily basis to design and code things. And yeah, that is a Johnny Mnemonic GIF in the background."
      }
    ),
    /* @__PURE__ */ jsx42(ProjectSection, { padding: "none", className: uses_module_default.section, children: /* @__PURE__ */ jsx42(ProjectSectionContent, { children: /* @__PURE__ */ jsxs29(ProjectTextRow, { width: "m", children: [
      /* @__PURE__ */ jsx42(ProjectSectionHeading, { children: "Design" }),
      /* @__PURE__ */ jsx42(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs29(List, { children: [
        /* @__PURE__ */ jsxs29(ListItem, { children: [
          /* @__PURE__ */ jsx42(Link2, { href: "https://www.figma.com", children: "Figma" }),
          " is my primary tool for UI design these days. Made the switch from Sketch in 2020 and haven\u2019t looked back. I\u2019ve also created",
          " ",
          /* @__PURE__ */ jsx42(Link2, { href: "https://www.figma.com/@hamish", children: "a few plugins" }),
          " that you can install."
        ] }),
        /* @__PURE__ */ jsxs29(ListItem, { children: [
          "Any motion graphics I create are created in Adobe After Effects. So far I haven\u2019t found a non-Adobe product that\u2019s as good. If anyone has suggestions please ",
          /* @__PURE__ */ jsx42(Link2, { href: "/contact", children: "message me" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs29(ListItem, { children: [
          "For any 3D models and video editing I use",
          " ",
          /* @__PURE__ */ jsx42(Link2, { href: "https://www.blender.org/", children: "Blender" }),
          ". Since 2.8 it\u2019s become way simpler to use and in a lot of ways better than expensive paid tools like 3DS Max or Maya."
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx42(ProjectSection, { padding: "none", className: uses_module_default.section, children: /* @__PURE__ */ jsx42(ProjectSectionContent, { children: /* @__PURE__ */ jsxs29(ProjectTextRow, { width: "m", children: [
      /* @__PURE__ */ jsx42(ProjectSectionHeading, { children: "Development" }),
      /* @__PURE__ */ jsx42(ProjectSectionText, { as: "div", children: /* @__PURE__ */ jsxs29(List, { children: [
        /* @__PURE__ */ jsxs29(ListItem, { children: [
          "I use ",
          /* @__PURE__ */ jsx42(Link2, { href: "https://vscodium.com/", children: "VSCodium" }),
          " as my text editor, with the Tokyo Night theme and Operator Mono as my typeface of choice."
        ] }),
        /* @__PURE__ */ jsx42(ListItem, { children: "Firefox is my main browser for both development and general use." }),
        /* @__PURE__ */ jsxs29(ListItem, { children: [
          /* @__PURE__ */ jsx42(Link2, { href: "https://reactjs.org/", children: "React" }),
          " is my front end Javascript library of choice. The component-centric mental model is the first thing that truly made sense to me as a designer."
        ] }),
        /* @__PURE__ */ jsxs29(ListItem, { children: [
          "For 3D effects and image shaders I use",
          " ",
          /* @__PURE__ */ jsx42(Link2, { href: "https://threejs.org/", children: "three.js" }),
          ". It has a bit of a learning curve but you can do some really powerful stuff with it."
        ] }),
        /* @__PURE__ */ jsxs29(ListItem, { children: [
          "For CSS I\u2019ve used a myriad pre-processors and css-in-js solutions like styled-components, but these days I\u2019m using vanilla CSS with",
          " ",
          /* @__PURE__ */ jsx42(Link2, { href: "https://postcss.org/", children: "PostCSS" }),
          " to get upcoming CSS features today."
        ] }),
        /* @__PURE__ */ jsxs29(ListItem, { children: [
          "For Javascript animations I use",
          " ",
          /* @__PURE__ */ jsx42(Link2, { href: "https://www.framer.com/motion/", children: "Framer Motion" }),
          ", it\u2019s a great way to add spring animations to React and three.js."
        ] }),
        /* @__PURE__ */ jsxs29(ListItem, { children: [
          "For building and testing UI components in isolation I use",
          " ",
          /* @__PURE__ */ jsx42(Link2, { href: "https://storybook.js.org/", children: "Storybook" }),
          ". Check out the",
          " ",
          /* @__PURE__ */ jsx42(Link2, { href: "https://storybook.hamishw.com", children: "storybook for this website" }),
          "."
        ] })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx42(ProjectSection, { padding: "none", className: uses_module_default.section, children: /* @__PURE__ */ jsx42(ProjectSectionContent, { children: /* @__PURE__ */ jsxs29(ProjectTextRow, { stretch: !0, width: "m", children: [
      /* @__PURE__ */ jsx42(ProjectSectionHeading, { children: "System" }),
      /* @__PURE__ */ jsx42(Table, { children: /* @__PURE__ */ jsxs29(TableBody, { children: [
        /* @__PURE__ */ jsxs29(TableRow, { children: [
          /* @__PURE__ */ jsx42(TableHeadCell, { children: "Desktop" }),
          /* @__PURE__ */ jsx42(TableCell, { children: "Custom built" })
        ] }),
        /* @__PURE__ */ jsxs29(TableRow, { children: [
          /* @__PURE__ */ jsx42(TableHeadCell, { children: "Operating system" }),
          /* @__PURE__ */ jsx42(TableCell, { children: "Arch Linux (by the way)" })
        ] }),
        /* @__PURE__ */ jsxs29(TableRow, { children: [
          /* @__PURE__ */ jsx42(TableHeadCell, { children: "Browser" }),
          /* @__PURE__ */ jsx42(TableCell, { children: "Zen Browser" })
        ] }),
        /* @__PURE__ */ jsxs29(TableRow, { children: [
          /* @__PURE__ */ jsx42(TableHeadCell, { children: "Monitor" }),
          /* @__PURE__ */ jsx42(TableCell, { children: "1440p IPS 144hz LG 27GL850" })
        ] }),
        /* @__PURE__ */ jsxs29(TableRow, { children: [
          /* @__PURE__ */ jsx42(TableHeadCell, { children: "Keyboard" }),
          /* @__PURE__ */ jsx42(TableCell, { children: "Tofu65" })
        ] }),
        /* @__PURE__ */ jsxs29(TableRow, { children: [
          /* @__PURE__ */ jsx42(TableHeadCell, { children: "Mouse" }),
          /* @__PURE__ */ jsx42(TableCell, { children: "Logitech G403" })
        ] }),
        /* @__PURE__ */ jsxs29(TableRow, { children: [
          /* @__PURE__ */ jsx42(TableHeadCell, { children: "Laptop" }),
          /* @__PURE__ */ jsx42(TableCell, { children: "Macbook Pro 14\u2033" })
        ] }),
        /* @__PURE__ */ jsxs29(TableRow, { children: [
          /* @__PURE__ */ jsx42(TableHeadCell, { children: "Headphones" }),
          /* @__PURE__ */ jsx42(TableCell, { children: "Audio Technica ATH-M50x/Apple Airpods" })
        ] }),
        /* @__PURE__ */ jsxs29(TableRow, { children: [
          /* @__PURE__ */ jsx42(TableHeadCell, { children: "Microphone" }),
          /* @__PURE__ */ jsx42(TableCell, { children: "Blue Yeti" })
        ] })
      ] }) })
    ] }) }) })
  ] }),
  /* @__PURE__ */ jsx42(Footer, {})
] });

// app/routes/$.jsx
var __exports = {};
__export(__exports, {
  ErrorBoundary: () => ErrorBoundary2,
  loader: () => loader2,
  meta: () => meta9
});
import { useRouteError as useRouteError2 } from "@remix-run/react";
import { jsx as jsx43 } from "react/jsx-runtime";
async function loader2() {
  throw new Response(null, { status: 404, statusText: "Not found" });
}
var meta9 = () => [{ title: "404 | Redacted" }];
function ErrorBoundary2() {
  let error = useRouteError2();
  return /* @__PURE__ */ jsx43(Error2, { error });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/assets/entry.client-ZAN7E22O.js", imports: ["/assets/_shared/chunk-AUSCXEMO.js", "/assets/_shared/chunk-ZSCARA4Z.js", "/assets/_shared/chunk-F3TRQT5X.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/assets/root-RGOIBRFO.js", imports: ["/assets/_shared/chunk-FN3R2IN2.js", "/assets/_shared/chunk-YXI7OKH7.js", "/assets/_shared/chunk-MBS577NP.js", "/assets/_shared/chunk-6HAZSQ7R.js", "/assets/_shared/chunk-W2QAQDNY.js", "/assets/_shared/chunk-IRHCYEBL.js", "/assets/_shared/chunk-A4JF4TEP.js", "/assets/_shared/chunk-JBPE35RY.js", "/assets/_shared/chunk-OAGHZG5J.js", "/assets/_shared/chunk-3GAHIIES.js", "/assets/_shared/chunk-F4ODTSJS.js"], hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/$": { id: "routes/$", parentId: "root", path: "*", index: void 0, caseSensitive: void 0, module: "/assets/routes/$-ZMABVCHT.js", imports: void 0, hasAction: !1, hasLoader: !0, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !0 }, "routes/api.set-theme": { id: "routes/api.set-theme", parentId: "root", path: "api/set-theme", index: void 0, caseSensitive: void 0, module: "/assets/routes/api.set-theme-W3XGDHSS.js", imports: void 0, hasAction: !0, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/articles.hello-world": { id: "routes/articles.hello-world", parentId: "root", path: "articles/hello-world", index: void 0, caseSensitive: void 0, module: "/assets/routes/articles.hello-world-BSCPUVK2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/articles.modern-styling-in-react": { id: "routes/articles.modern-styling-in-react", parentId: "root", path: "articles/modern-styling-in-react", index: void 0, caseSensitive: void 0, module: "/assets/routes/articles.modern-styling-in-react-FS6643FJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/assets/routes/contact-KRALNKCA.js", imports: ["/assets/_shared/chunk-53HRJXKW.js", "/assets/_shared/chunk-PEYEMZWK.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/home": { id: "routes/home", parentId: "root", path: "home", index: void 0, caseSensitive: void 0, module: "/assets/routes/home-3I52S4CR.js", imports: ["/assets/_shared/chunk-CWG7RRNH.js", "/assets/_shared/chunk-J3AIXDIO.js", "/assets/_shared/chunk-MX2ERWFR.js", "/assets/_shared/chunk-L5P2ZKLM.js", "/assets/_shared/chunk-53HRJXKW.js", "/assets/_shared/chunk-PEYEMZWK.js", "/assets/_shared/chunk-JGEUZ5DB.js", "/assets/_shared/chunk-N6K2DFXZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects.slice": { id: "routes/projects.slice", parentId: "root", path: "projects/slice", index: void 0, caseSensitive: void 0, module: "/assets/routes/projects.slice-IBMWEBNU.js", imports: ["/assets/_shared/chunk-MX2ERWFR.js", "/assets/_shared/chunk-H5BSISL5.js", "/assets/_shared/chunk-L5P2ZKLM.js", "/assets/_shared/chunk-53HRJXKW.js", "/assets/_shared/chunk-PEYEMZWK.js", "/assets/_shared/chunk-JGEUZ5DB.js", "/assets/_shared/chunk-N6K2DFXZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects.smart-sparrow": { id: "routes/projects.smart-sparrow", parentId: "root", path: "projects/smart-sparrow", index: void 0, caseSensitive: void 0, module: "/assets/routes/projects.smart-sparrow-WRIYYHJO.js", imports: ["/assets/_shared/chunk-J3AIXDIO.js", "/assets/_shared/chunk-H5BSISL5.js", "/assets/_shared/chunk-L5P2ZKLM.js", "/assets/_shared/chunk-53HRJXKW.js", "/assets/_shared/chunk-PEYEMZWK.js", "/assets/_shared/chunk-JGEUZ5DB.js", "/assets/_shared/chunk-N6K2DFXZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/projects.volkihar-knight": { id: "routes/projects.volkihar-knight", parentId: "root", path: "projects/volkihar-knight", index: void 0, caseSensitive: void 0, module: "/assets/routes/projects.volkihar-knight-6OESLTJE.js", imports: ["/assets/_shared/chunk-H5BSISL5.js", "/assets/_shared/chunk-L5P2ZKLM.js", "/assets/_shared/chunk-53HRJXKW.js", "/assets/_shared/chunk-PEYEMZWK.js", "/assets/_shared/chunk-JGEUZ5DB.js", "/assets/_shared/chunk-N6K2DFXZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/uses": { id: "routes/uses", parentId: "root", path: "uses", index: void 0, caseSensitive: void 0, module: "/assets/routes/uses-KZCBMDST.js", imports: ["/assets/_shared/chunk-H5BSISL5.js", "/assets/_shared/chunk-L5P2ZKLM.js", "/assets/_shared/chunk-53HRJXKW.js", "/assets/_shared/chunk-PEYEMZWK.js", "/assets/_shared/chunk-JGEUZ5DB.js", "/assets/_shared/chunk-N6K2DFXZ.js"], hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "0ae0635b", hmr: void 0, url: "/assets/manifest-0AE0635B.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "production", assetsBuildDirectory = "build/client/assets", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1, v3_throwAbortReason: !1 }, publicPath = "/assets/", entry = { module: entry_server_cloudflare_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/articles.modern-styling-in-react": {
    id: "routes/articles.modern-styling-in-react",
    parentId: "root",
    path: "articles/modern-styling-in-react",
    index: void 0,
    caseSensitive: void 0,
    module: articles_modern_styling_in_react_exports
  },
  "routes/projects.volkihar-knight": {
    id: "routes/projects.volkihar-knight",
    parentId: "root",
    path: "projects/volkihar-knight",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/projects.smart-sparrow": {
    id: "routes/projects.smart-sparrow",
    parentId: "root",
    path: "projects/smart-sparrow",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports2
  },
  "routes/articles.hello-world": {
    id: "routes/articles.hello-world",
    parentId: "root",
    path: "articles/hello-world",
    index: void 0,
    caseSensitive: void 0,
    module: articles_hello_world_exports
  },
  "routes/projects.slice": {
    id: "routes/projects.slice",
    parentId: "root",
    path: "projects/slice",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports3
  },
  "routes/api.set-theme": {
    id: "routes/api.set-theme",
    parentId: "root",
    path: "api/set-theme",
    index: void 0,
    caseSensitive: void 0,
    module: api_set_theme_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports4
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: "home",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports5
  },
  "routes/uses": {
    id: "routes/uses",
    parentId: "root",
    path: "uses",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports6
  },
  "routes/$": {
    id: "routes/$",
    parentId: "root",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: __exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
