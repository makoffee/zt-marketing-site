import { globalStyle, globalKeyframes } from "@vanilla-extract/css"
import { theme } from "./theme.css"

globalStyle("*"  , {
  transition: "all .25s ease-out",
})

globalStyle("body", {
  margin: 0,
  fontFamily: theme.fonts.text,
  color: theme.colors.text,
  background: theme.colors.background,
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  lineHeight: "1.65em",
})

globalStyle("a", {  
  color: theme.colors.text,
  textDecoration: "underline"
})

globalStyle("a:hover", {  
  color: theme.colors.primary,
})

globalStyle("p", {  
  position: 'relative',
})

globalStyle("code", {  
  background: theme.colors.black,
  color: "#cccccc",
  marginTop: "1rem ",
  display: "block",
  padding: theme.space[4],
  borderRadius: "12px",
})


globalStyle("*", {
  boxSizing: "border-box",
})

globalKeyframes("zoomInUp", {
  "0%": {
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    transform: "scale(1), translateY(0) translateX(-50%)",
    visibility: "visible",
  },
})

globalKeyframes("zoomOutDown", {
  "0%": {
    transform: "scale(1) translateY(0) translateX(-50%)",
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    transform: "scale(0.95) translateY(10px) translateX(-50%)",
    visibility: "hidden",
  },
})

globalKeyframes("fadeIn", {
  "0%": {
    visibility: "hidden",
    opacity: 0,
  },
  "100%": {
    opacity: 1,
    visibility: "visible",
  },
})

globalKeyframes("fadeOut", {
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0,
    visibility: "hidden",
  },
})
