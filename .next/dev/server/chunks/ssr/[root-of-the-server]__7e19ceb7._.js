module.exports = [
"[next]/internal/font/google/montserrat_9ea4a3df.module.css [app-rsc] (css module)", ((__turbopack_context__) => {

__turbopack_context__.v({
  "className": "montserrat_9ea4a3df-module__vsqJaq__className",
  "variable": "montserrat_9ea4a3df-module__vsqJaq__variable",
});
}),
"[next]/internal/font/google/montserrat_9ea4a3df.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_9ea4a3df$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__ = __turbopack_context__.i("[next]/internal/font/google/montserrat_9ea4a3df.module.css [app-rsc] (css module)");
;
const fontData = {
    className: __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_9ea4a3df$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].className,
    style: {
        fontFamily: "'Montserrat', 'Montserrat Fallback'",
        fontStyle: "normal"
    }
};
if (__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_9ea4a3df$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable != null) {
    fontData.variable = __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_9ea4a3df$2e$module$2e$css__$5b$app$2d$rsc$5d$__$28$css__module$29$__["default"].variable;
}
const __TURBOPACK__default__export__ = fontData;
}),
"[project]/src/components/Navbar.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-rsc] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-rsc] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/book-open.js [app-rsc] (ecmascript) <export default as BookOpen>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-rsc] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/award.js [app-rsc] (ecmascript) <export default as Award>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chart-column.js [app-rsc] (ecmascript) <export default as BarChart3>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-rsc] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-rsc] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/video.js [app-rsc] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mic.js [app-rsc] (ecmascript) <export default as Mic>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-rsc] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-rsc] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-rsc] (ecmascript) <export default as Sparkles>");
"use ";
;
;
;
;
function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [lastScrollY, setLastScrollY] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isNavbarVisible, setIsNavbarVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(true);
    const [activeDropdown, setActiveDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isScrolled, setIsScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileDropdown, setMobileDropdown] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleScroll = ()=>{
            const currentScrollY = window.scrollY;
            setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
            setIsScrolled(currentScrollY > 50);
            setLastScrollY(currentScrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return ()=>window.removeEventListener("scroll", handleScroll);
    }, [
        lastScrollY
    ]);
    const menuItems = {
        features: [
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
                label: "Study material",
                href: "/features/study-material",
                desc: "Study related content"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"],
                label: "Video lessons",
                href: "/features/video-lessons",
                desc: "HD video content"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$book$2d$open$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BookOpen$3e$__["BookOpen"],
                label: "Practice material",
                href: "/features/practice-material",
                desc: "Interactive exercises"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mic$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Mic$3e$__["Mic"],
                label: "Voice recognition",
                href: "/features/voice-recognition",
                desc: "AI-powered feedback"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"],
                label: "Study tools",
                href: "/features/study-tools",
                desc: "Custom learning aids"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$award$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Award$3e$__["Award"],
                label: "Offline study",
                href: "/features/offline-study",
                desc: "Learn anywhere"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chart$2d$column$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BarChart3$3e$__["BarChart3"],
                label: "Progress tracking",
                href: "/features/progress-tracking",
                desc: "Monitor your growth"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"],
                label: "Reward system",
                href: "/features/reward-system",
                desc: "Earn achievements"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                label: "One-to-one lessons",
                href: "/features/one-to-one-lessons",
                desc: "Personal tutoring"
            },
            {
                icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"],
                label: "Support system",
                href: "/features/support-system",
                desc: "24/7 assistance"
            }
        ]
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-8dca918abf3713ba" + " " + `hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isNavbarVisible ? "translate-y-0" : "-translate-y-full"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-8dca918abf3713ba" + " " + "max-w-7xl mx-auto px-6 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8dca918abf3713ba" + " " + `rounded-2xl transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-lg shadow-xl border border-[#7B68EE]/20" : "bg-white/80 backdrop-blur-md shadow-lg border border-[#7B68EE]/10"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-8dca918abf3713ba" + " " + "flex justify-between items-center px-8 py-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/",
                                    className: "jsx-8dca918abf3713ba" + " " + "text-3xl font-bold bg-gradient-to-r from-[#4169E1] to-[#7B68EE] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300",
                                    children: "VirHom"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 121,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                    className: "jsx-8dca918abf3713ba" + " " + "flex items-center gap-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            onMouseEnter: ()=>setActiveDropdown("features"),
                                            onMouseLeave: (e)=>{
                                                if (!e.currentTarget.contains(e.relatedTarget)) {
                                                    setActiveDropdown(null);
                                                }
                                            },
                                            className: "jsx-8dca918abf3713ba" + " " + "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "jsx-8dca918abf3713ba" + " " + "flex items-center gap-1 text-[#333333] hover:text-[#4169E1] transition-colors py-2 font-medium",
                                                    children: [
                                                        "Features",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                            size: 18,
                                                            className: `transition-transform duration-300 ${activeDropdown === "features" ? "rotate-180" : ""}`
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 142,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navbar.js",
                                                    lineNumber: 140,
                                                    columnNumber: 19
                                                }, this),
                                                activeDropdown === "features" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-8dca918abf3713ba" + " " + "absolute left-0 w-[500px] bg-white rounded-2xl shadow-2xl py-6 px-6 border border-[#7B68EE]/30 animate-fadeIn",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8dca918abf3713ba" + " " + "grid grid-cols-2 gap-3",
                                                            children: menuItems.features.map((item, idx)=>{
                                                                const Icon = item.icon;
                                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                    href: item.href,
                                                                    className: "jsx-8dca918abf3713ba" + " " + "flex items-start gap-3 p-3 hover:bg-gradient-to-r hover:from-[#F0E6FF] hover:to-[#E8D9FF] rounded-xl transition-all duration-300 hover:scale-[1.02]",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-8dca918abf3713ba" + " " + "mt-0.5 p-2 bg-gradient-to-br from-[#4169E1] to-[#7B68EE] rounded-lg shadow-md",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                                size: 18,
                                                                                className: "jsx-8dca918abf3713ba" + " " + "text-white"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/src/components/Navbar.js",
                                                                                lineNumber: 162,
                                                                                columnNumber: 33
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/components/Navbar.js",
                                                                            lineNumber: 161,
                                                                            columnNumber: 31
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            className: "jsx-8dca918abf3713ba" + " " + "flex-1",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8dca918abf3713ba" + " " + "font-semibold text-[#333333] text-sm",
                                                                                    children: item.label
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Navbar.js",
                                                                                    lineNumber: 165,
                                                                                    columnNumber: 33
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                                    className: "jsx-8dca918abf3713ba" + " " + "text-xs text-[#7B68EE] mt-0.5",
                                                                                    children: item.desc
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/src/components/Navbar.js",
                                                                                    lineNumber: 168,
                                                                                    columnNumber: 33
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/components/Navbar.js",
                                                                            lineNumber: 164,
                                                                            columnNumber: 31
                                                                        }, this)
                                                                    ]
                                                                }, idx, true, {
                                                                    fileName: "[project]/src/components/Navbar.js",
                                                                    lineNumber: 156,
                                                                    columnNumber: 29
                                                                }, this);
                                                            })
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 152,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-8dca918abf3713ba" + " " + "pt-4 mt-4 border-t border-[#7B68EE]/30",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                                href: "/features",
                                                                className: "jsx-8dca918abf3713ba" + " " + "inline-flex items-center gap-2 text-[#4169E1] font-semibold text-sm hover:text-[#7B68EE] transition-colors group",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                                                        size: 16,
                                                                        className: "group-hover:rotate-12 transition-transform"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Navbar.js",
                                                                        lineNumber: 181,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "Explore all features",
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                                        size: 16,
                                                                        className: "rotate-[-90deg]"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/components/Navbar.js",
                                                                        lineNumber: 186,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/components/Navbar.js",
                                                                lineNumber: 177,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 176,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/components/Navbar.js",
                                                    lineNumber: 151,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/membership",
                                            className: "jsx-8dca918abf3713ba" + " " + "text-[#333333] hover:text-[#4169E1] transition-colors py-2 font-medium",
                                            children: "Membership"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 194,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/level-guide",
                                            className: "jsx-8dca918abf3713ba" + " " + "text-[#333333] hover:text-[#4169E1] transition-colors py-2 font-medium",
                                            children: "Level Guide"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 202,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 129,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8dca918abf3713ba" + " " + "flex items-center gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/trial",
                                            className: "jsx-8dca918abf3713ba" + " " + "px-6 py-2 bg-gradient-to-r from-[#4169E1] to-[#7B68EE] text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300",
                                            children: "Free Trial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 212,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/login",
                                            className: "jsx-8dca918abf3713ba" + " " + "px-6 py-2 border-2 border-[#4169E1] text-[#4169E1] font-bold rounded-lg hover:bg-[#4169E1] hover:text-white transition-all duration-300",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 218,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 211,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 119,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 112,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/Navbar.js",
                    lineNumber: 111,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "jsx-8dca918abf3713ba" + " " + "lg:hidden bg-gradient-to-r from-[#4169E1] to-[#7B68EE] text-white sticky top-0 z-50 shadow-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8dca918abf3713ba" + " " + "flex justify-between items-center p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/",
                                className: "jsx-8dca918abf3713ba" + " " + "text-3xl font-bold text-[#FFF7AE]",
                                children: "VirHom"
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 233,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setIsMenuOpen(!isMenuOpen),
                                className: "jsx-8dca918abf3713ba" + " " + "text-white hover:scale-110 transition-transform",
                                children: isMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 240,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 32
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 240,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/Navbar.js",
                                lineNumber: 236,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 232,
                        columnNumber: 9
                    }, this),
                    isMenuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-8dca918abf3713ba" + " " + "bg-gradient-to-b from-[#4169E1] to-[#2d5aad] px-6 pb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "jsx-8dca918abf3713ba" + " " + "flex flex-col gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8dca918abf3713ba" + " " + "bg-white/10 backdrop-blur-sm rounded-xl p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setMobileDropdown(mobileDropdown === "features" ? null : "features"),
                                            className: "jsx-8dca918abf3713ba" + " " + "w-full flex justify-between items-center text-lg font-semibold",
                                            children: [
                                                "Features",
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                    size: 20,
                                                    className: `transition-transform ${mobileDropdown === "features" ? "rotate-180" : ""}`
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/Navbar.js",
                                                    lineNumber: 259,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 250,
                                            columnNumber: 17
                                        }, this),
                                        mobileDropdown === "features" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-8dca918abf3713ba" + " " + "mt-3 space-y-2 pt-3 border-t border-white/20",
                                            children: menuItems.features.slice(0, 6).map((item, idx)=>{
                                                const Icon = item.icon;
                                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                    href: item.href,
                                                    onClick: ()=>setIsMenuOpen(false),
                                                    className: "jsx-8dca918abf3713ba" + " " + "flex items-center gap-3 py-2 px-3 bg-white/5 rounded-lg hover:bg-white/10 transition",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                            size: 18,
                                                            className: "jsx-8dca918abf3713ba" + " " + "text-[#FFF7AE]"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 277,
                                                            columnNumber: 27
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "jsx-8dca918abf3713ba" + " " + "text-sm",
                                                            children: item.label
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/components/Navbar.js",
                                                            lineNumber: 278,
                                                            columnNumber: 27
                                                        }, this)
                                                    ]
                                                }, idx, true, {
                                                    fileName: "[project]/src/components/Navbar.js",
                                                    lineNumber: 271,
                                                    columnNumber: 25
                                                }, this);
                                            })
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 267,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 249,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8dca918abf3713ba" + " " + "bg-white/10 backdrop-blur-sm rounded-xl p-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: "/membership",
                                        onClick: ()=>setIsMenuOpen(false),
                                        className: "jsx-8dca918abf3713ba" + " " + "w-full flex items-center text-lg font-semibold hover:text-[#FFF7AE] transition",
                                        children: "Memberships"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/Navbar.js",
                                        lineNumber: 288,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 287,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/level-guide",
                                    onClick: ()=>setIsMenuOpen(false),
                                    className: "jsx-8dca918abf3713ba" + " " + "bg-white/10 backdrop-blur-sm rounded-xl p-4 text-lg font-semibold hover:bg-white/15 transition",
                                    children: "Level Guide"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 298,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-8dca918abf3713ba" + " " + "pt-4 space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/trial",
                                            className: "jsx-8dca918abf3713ba" + " " + "block w-full text-center px-6 py-3 bg-[#FFF7AE] text-[#4169E1] font-bold rounded-xl hover:bg-white transition",
                                            children: "Free Trial"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 308,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/login",
                                            className: "jsx-8dca918abf3713ba" + " " + "block w-full text-center px-6 py-3 border-2 border-[#FFF7AE] font-bold rounded-xl hover:bg-white/10 transition",
                                            children: "Login"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/Navbar.js",
                                            lineNumber: 314,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/Navbar.js",
                                    lineNumber: 307,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/Navbar.js",
                            lineNumber: 247,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/Navbar.js",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 231,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-8dca918abf3713ba" + " " + "hidden lg:block h-24"
            }, void 0, false, {
                fileName: "[project]/src/components/Navbar.js",
                lineNumber: 327,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(void 0, {
                id: "8dca918abf3713ba",
                children: "@keyframes fadeIn{0%{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}.animate-fadeIn.jsx-8dca918abf3713ba{animation:.2s ease-out fadeIn}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
} //-------------------------------------------------------------------------------------------------------
 // "use client";
 // import { useState, useEffect } from "react";
 // import {
 //   Menu,
 //   X,
 //   Globe,
 //   BookOpen,
 //   Users,
 //   Award,
 //   BarChart3,
 //   MessageSquare,
 //   Settings,
 //   Video,
 //   Mic,
 //   Target,
 //   ChevronDown,
 //   Sparkles,
 //   WifiOff,
 // } from "lucide-react";
 // import { useSession, signOut } from "next-auth/react";
 // export default function Navbar() {
 //   const [isMenuOpen, setIsMenuOpen] = useState(false);
 //   const [lastScrollY, setLastScrollY] = useState(0);
 //   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
 //   const [activeDropdown, setActiveDropdown] = useState(null);
 //   const [isScrolled, setIsScrolled] = useState(false);
 //   const [mobileDropdown, setMobileDropdown] = useState(null);
 //   const { data: session, status } = useSession();
 //   useEffect(() => {
 //     const handleScroll = () => {
 //       const currentScrollY = window.scrollY;
 //       setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
 //       setIsScrolled(currentScrollY > 50);
 //       setLastScrollY(currentScrollY);
 //     };
 //     window.addEventListener("scroll", handleScroll);
 //     return () => window.removeEventListener("scroll", handleScroll);
 //   }, [lastScrollY]);
 //   const menuItems = {
 //     features: [
 //       {
 //         icon: Video,
 //         label: "Study material",
 //         href: "/features/study-material",
 //         desc: "Study related mete",
 //       },
 //       {
 //         icon: Video,
 //         label: "Video lessons",
 //         href: "/features/video-lessons",
 //         desc: "HD video content",
 //       },
 //       {
 //         icon: BookOpen,
 //         label: "Practice material",
 //         href: "/features/practice-material",
 //         desc: "Interactive exercises",
 //       },
 //       {
 //         icon: Mic,
 //         label: "Voice recognition",
 //         href: "/features/voice-recognition",
 //         desc: "AI-powered feedback",
 //       },
 //       {
 //         icon: Settings,
 //         label: "Study tools",
 //         href: "/features/study-tools",
 //         desc: "Custom learning aids",
 //       },
 //       {
 //         icon: Award,
 //         label: "Offline study",
 //         href: "/features/offline-study",
 //         desc: "Learn anywhere",
 //       },
 //       {
 //         icon: BarChart3,
 //         label: "Progress tracking",
 //         href: "/features/progress-tracking",
 //         desc: "Monitor your growth",
 //       },
 //       {
 //         icon: Target,
 //         label: "Reward system",
 //         href: "/features/reward-system",
 //         desc: "Earn achievements",
 //       },
 //       {
 //         icon: Users,
 //         label: "One-to-one lessons",
 //         href: "/features/one-to-one-lessons",
 //         desc: "Personal tutoring",
 //       },
 //       {
 //         icon: MessageSquare,
 //         label: "Support system",
 //         href: "/features/support-system",
 //         desc: "24/7 assistance",
 //       },
 //     ],
 //   };
 //   return (
 //     <>
 //       {/* Desktop Navbar */}
 //       <header
 //         className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
 //           isNavbarVisible ? "translate-y-0" : "-translate-y-full"
 //         }`}
 //       >
 //         <div className="max-w-7xl mx-auto px-6 py-4">
 //           <div
 //             className={`rounded-2xl transition-all duration-300 ${
 //               isScrolled
 //                 ? "bg-white/95 backdrop-blur-lg shadow-xl"
 //                 : "bg-white/80 backdrop-blur-md shadow-lg"
 //             }`}
 //           >
 //             <div className="flex justify-between items-center px-8 py-4">
 //               {/* Logo */}
 //               <a
 //                 href="/"
 //                 className="text-3xl font-bold bg-gradient-to-r from-[#6B4F4F] to-[#A27B5C] bg-clip-text text-transparent hover:scale-105 transition-transform duration-300"
 //               >
 //                 Anglo-Link
 //               </a>
 //               {/* Desktop Navigation */}
 //               <nav className="flex items-center gap-8">
 //                 {/* Features Dropdown */}
 //                 <div
 //                   className="relative"
 //                   onMouseEnter={() => setActiveDropdown("features")}
 //                   onMouseLeave={(e) => {
 //                     // Ensure the mouse truly left the dropdown area
 //                     if (!e.currentTarget.contains(e.relatedTarget)) {
 //                       setActiveDropdown(null);
 //                     }
 //                   }}
 //                 >
 //                   <button className="flex items-center gap-1 text-[#6B4F4F] hover:text-[#A27B5C] transition-colors py-2 font-medium">
 //                     Features
 //                     <ChevronDown
 //                       size={18}
 //                       className={`transition-transform duration-300 ${
 //                         activeDropdown === "features" ? "rotate-180" : ""
 //                       }`}
 //                     />
 //                   </button>
 //                   {activeDropdown === "features" && (
 //                     <div className="absolute left-0  w-[500px] bg-white rounded-2xl shadow-2xl py-6 px-6 border border-[#CBB59D]/30 animate-fadeIn">
 //                       <div className="grid grid-cols-2 gap-3">
 //                         {menuItems.features.map((item, idx) => {
 //                           const Icon = item.icon;
 //                           return (
 //                             <a
 //                               key={idx}
 //                               href={item.href}
 //                               className="flex items-start gap-3 p-3 hover:bg-gradient-to-r hover:from-[#F5F1ED] hover:to-[#EDE5DD] rounded-xl transition-all duration-300 hover:scale-[1.02]"
 //                             >
 //                               <div className="mt-0.5 p-2 bg-gradient-to-br from-[#CBB59D] to-[#A27B5C] rounded-lg shadow-md">
 //                                 <Icon size={18} className="text-white" />
 //                               </div>
 //                               <div className="flex-1">
 //                                 <div className="font-semibold text-[#3E2723] text-sm">
 //                                   {item.label}
 //                                 </div>
 //                                 <div className="text-xs text-[#8B7355] mt-0.5">
 //                                   {item.desc}
 //                                 </div>
 //                               </div>
 //                             </a>
 //                           );
 //                         })}
 //                       </div>
 //                       <div className="pt-4 mt-4 border-t border-[#CBB59D]/30">
 //                         <a
 //                           href="/features"
 //                           className="inline-flex items-center gap-2 text-[#6B4F4F] font-semibold text-sm hover:text-[#A27B5C] transition-colors group"
 //                         >
 //                           <Sparkles
 //                             size={16}
 //                             className="group-hover:rotate-12 transition-transform"
 //                           />
 //                           Explore all features
 //                           <ChevronDown size={16} className="rotate-[-90deg]" />
 //                         </a>
 //                       </div>
 //                     </div>
 //                   )}
 //                 </div>
 //                 {/* Memberships Dropdown */}
 //                 <a
 //                   href="/membership"
 //                   className="text-[#6B4F4F] hover:text-[#A27B5C] transition-colors py-2 font-medium"
 //                 >
 //                   Membership
 //                 </a>
 //                 <a
 //                   href="/level-guide"
 //                   className="text-[#6B4F4F] hover:text-[#A27B5C] transition-colors py-2 font-medium"
 //                 >
 //                   Level Guide
 //                 </a>
 //               </nav>
 //               {/* Right Side Actions */}
 //               {session?.user ? (
 //                 // ✅ Logged in
 //                 <div className="flex items-center gap-4">
 //                   <a
 //                     href="/trial"
 //                     className="px-6 py-2 bg-gradient-to-r from-[#A27B5C] to-[#6B4F4F] text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
 //                   >
 //                     Free trial
 //                   </a>
 //                   <a
 //                     href="/dashboard"
 //                     className="px-6 py-2 border-2 border-[#A27B5C] text-[#6B4F4F] font-bold rounded-lg hover:bg-[#A27B5C] hover:text-white transition-all duration-300"
 //                   >
 //                     My Dashboard
 //                   </a>
 //                 </div>
 //               ) : (
 //                 // ❌ Not logged in
 //                 <div className="flex items-center gap-4">
 //                   <a
 //                     href="/trial"
 //                     className="px-6 py-2 bg-gradient-to-r from-[#A27B5C] to-[#6B4F4F] text-white font-bold rounded-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
 //                   >
 //                     Free trial
 //                   </a>
 //                   <a
 //                     href="/login"
 //                     className="px-6 py-2 border-2 border-[#A27B5C] text-[#6B4F4F] font-bold rounded-lg hover:bg-[#A27B5C] hover:text-white transition-all duration-300"
 //                   >
 //                     Login
 //                   </a>
 //                 </div>
 //               )}
 //             </div>
 //           </div>
 //         </div>
 //       </header>
 //       {/* Mobile Navbar */}
 //       <header className="lg:hidden bg-gradient-to-r from-[#6B4F4F] to-[#A27B5C] text-white sticky top-0 z-50 shadow-lg">
 //         <div className="flex justify-between items-center p-6">
 //           <a href="/" className="text-3xl font-bold text-[#DCC7AA]">
 //             Anglo-Link
 //           </a>
 //           <button
 //             onClick={() => setIsMenuOpen(!isMenuOpen)}
 //             className="text-white hover:scale-110 transition-transform"
 //           >
 //             {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
 //           </button>
 //         </div>
 //         {/* Mobile Menu */}
 //         {isMenuOpen && (
 //           <div className="bg-gradient-to-b from-[#6B4F4F] to-[#8B7355] px-6 pb-6">
 //             <nav className="flex flex-col gap-3">
 //               {/* Features Accordion */}
 //               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
 //                 <button
 //                   onClick={() =>
 //                     setMobileDropdown(
 //                       mobileDropdown === "features" ? null : "features"
 //                     )
 //                   }
 //                   className="w-full flex justify-between items-center text-lg font-semibold"
 //                 >
 //                   Features
 //                   <ChevronDown
 //                     size={20}
 //                     className={`transition-transform ${
 //                       mobileDropdown === "features" ? "rotate-180" : ""
 //                     }`}
 //                   />
 //                 </button>
 //                 {mobileDropdown === "features" && (
 //                   <div className="mt-3 space-y-2 pt-3 border-t border-white/20">
 //                     {menuItems.features.slice(0, 6).map((item, idx) => {
 //                       const Icon = item.icon;
 //                       return (
 //                         <a
 //                           key={idx}
 //                           href={item.href}
 //                           className="flex items-center gap-3 py-2 px-3 bg-white/5 rounded-lg hover:bg-white/10 transition"
 //                           onClick={() => setIsMenuOpen(false)}
 //                         >
 //                           <Icon size={18} className="text-[#DCC7AA]" />
 //                           <span className="text-sm">{item.label}</span>
 //                         </a>
 //                       );
 //                     })}
 //                   </div>
 //                 )}
 //               </div>
 //               <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
 //                 <button
 //                   onClick={() =>
 //                     setMobileDropdown(
 //                       mobileDropdown === "memberships" ? null : "memberships"
 //                     )
 //                   }
 //                   className="w-full flex justify-between items-center text-lg font-semibold"
 //                 >
 //                   Memberships
 //                   <ChevronDown
 //                     size={20}
 //                     className={`transition-transform ${
 //                       mobileDropdown === "memberships" ? "rotate-180" : ""
 //                     }`}
 //                   />
 //                 </button>
 //               </div>
 //               <a
 //                 href="/level-guide"
 //                 className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-lg font-semibold hover:bg-white/15 transition"
 //                 onClick={() => setIsMenuOpen(false)}
 //               >
 //                 Level Guide
 //               </a>
 //               {/* Action Buttons */}
 //               <div className="pt-4 space-y-3">
 //                 {/* <button className="w-full px-4 py-3 border-2 border-white rounded-xl flex items-center justify-center gap-2 font-medium hover:bg-white/10 transition">
 //                   <Globe size={18} />
 //                   <span>English</span>
 //                 </button> */}
 //                 <a
 //                   href="/trial"
 //                   className="block w-full text-center px-6 py-3 bg-white text-[#6B4F4F] font-bold rounded-xl hover:bg-[#DCC7AA] transition"
 //                 >
 //                   Free trial
 //                 </a>
 //                 <a
 //                   href="/login"
 //                   className="block w-full text-center px-6 py-3 border-2 border-white font-bold rounded-xl hover:bg-white/10 transition"
 //                 >
 //                   Login
 //                 </a>
 //               </div>
 //             </nav>
 //           </div>
 //         )}
 //       </header>
 //       {/* Spacer for fixed navbar on desktop */}
 //       <div className="hidden lg:block h-24"></div>
 //       <style jsx>{`
 //         @keyframes fadeIn {
 //           from {
 //             opacity: 0;
 //             transform: translateY(-8px);
 //           }
 //           to {
 //             opacity: 1;
 //             transform: translateY(0);
 //           }
 //         }
 //         .animate-fadeIn {
 //           animation: fadeIn 0.2s ease-out;
 //         }
 //       `}</style>
 //     </>
 //   );
 // }
 // -------------------------------------------------------------------------------------------------------
 // "use client";
 // import React, { useState, useEffect } from "react";
 // import {
 //   Menu,
 //   X,
 //   Globe,
 //   BookOpen,
 //   Users,
 //   Award,
 //   BarChart3,
 //   MessageSquare,
 //   Settings,
 // } from "lucide-react";
 // import { useRouter } from "next/navigation";
 // export default function Navbar() {
 //   const [isMenuOpen, setIsMenuOpen] = useState(false);
 //   const [lastScrollY, setLastScrollY] = useState(0);
 //   const [isNavbarVisible, setIsNavbarVisible] = useState(true);
 //   const [activeDropdown, setActiveDropdown] = useState(null);
 // const router = useRouter();
 //   useEffect(() => {
 //     const handleScroll = () => {
 //       const currentScrollY = window.scrollY;
 //       setIsNavbarVisible(currentScrollY < lastScrollY || currentScrollY < 100);
 //       setLastScrollY(currentScrollY);
 //     };
 //     window.addEventListener("scroll", handleScroll);
 //     return () => window.removeEventListener("scroll", handleScroll);
 //   }, [lastScrollY]);
 //   const menuItems = {
 //     features: [
 //       // { icon: BookOpen, label: "Study material", href: "/study-material" },
 //       { icon: Users, label: "Video lessons", href: "#" },
 //       { icon: Settings, label: "Practice material", href: "#" },
 //       { icon: BarChart3, label: "Voice recognition", href: "#" },
 //       { icon: Settings, label: "Study tools", href: "#" },
 //       { icon: Award, label: "Offline study", href: "#" },
 //       { icon: MessageSquare, label: "Progress tracking", href: "#" },
 //       { icon: Settings, label: "Reward system", href: "#" },
 //       { icon: Users, label: "One-to-one lessons", href: "#" },
 //       { icon: MessageSquare, label: "Support system", href: "#" },
 //     ],
 //     memberships: [
 //       { label: "Basic Plan", href: "#" },
 //       { label: "Premium Plan", href: "#" },
 //       { label: "Student Discount", href: "#" },
 //     ],
 //   };
 //   return (
 //     <div className="bg-white">
 //       <header className="bg-[#207FC5] text-white relative">
 //         {/* Mobile Header */}
 //         <div className="flex justify-between items-center p-6 lg:hidden">
 //           <h1 className="text-3xl font-bold text-[#7ED957]">Anglo-Link</h1>
 //           <button
 //             onClick={() => setIsMenuOpen(!isMenuOpen)}
 //             className="text-white"
 //           >
 //             {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
 //           </button>
 //         </div>
 //         {/* Desktop Header */}
 //         <div
 //           className={`hidden lg:flex justify-between items-center px-30 py-3 max-w-8xl transition-all duration-300 fixed top-0 left-0 right-0 bg-[#207FC5] z-50 ${
 //             isNavbarVisible ? "translate-y-0" : "-translate-y-full"
 //           } ${
 //             lastScrollY > 100 ? "bg-opacity-95 shadow-md" : "bg-opacity-100"
 //           }`}
 //         >
 //           <div className="flex items-center gap-12">
 //             <a href="/" className="text-4xl font-bold text-[#7ED957]">
 //               Angao-Link
 //             </a>
 //             <nav className="flex gap-8 text-lg">
 //               {/* Features Dropdown */}
 //               <div
 //                 className="relative group"
 //                 onMouseEnter={() => setActiveDropdown("features")}
 //                 onMouseLeave={() => setActiveDropdown(null)}
 //               >
 //                 <button className="hover:text-[#7ED957] transition py-2">
 //                   Features
 //                 </button>
 //                 {activeDropdown === "features" && (
 //                   <div className="absolute left-0 mt-0 w-80 bg-white text-gray-800 rounded-lg shadow-xl py-4 px-6 grid grid-cols-2 gap-3 animate-in fade-in duration-200">
 //                     {menuItems.features.map((item, idx) => {
 //                       const Icon = item.icon;
 //                       return (
 //                         <a
 //                           key={idx}
 //                           href={item.href}
 //                           className="flex items-center gap-3 py-2 px-3 hover:bg-gray-100 rounded-lg transition"
 //                         >
 //                           <Icon size={18} className="text-[#207FC5]" />
 //                           <span className="text-sm">{item.label}</span>
 //                         </a>
 //                       );
 //                     })}
 //                     <div className="col-span-2 pt-2 border-t">
 //                       <a
 //                         href="#"
 //                         className="text-[#207FC5] font-semibold text-sm hover:underline"
 //                       >
 //                         Learn more &gt;
 //                       </a>
 //                     </div>
 //                   </div>
 //                 )}
 //               </div>
 //               {/* Memberships Dropdown */}
 //               <div
 //                 className="relative group"
 //                 onMouseEnter={() => setActiveDropdown("memberships")}
 //                 onMouseLeave={() => setActiveDropdown(null)}
 //               >
 //                 <button className="hover:text-[#7ED957] transition py-2">
 //                   Memberships
 //                 </button>
 //                 {activeDropdown === "memberships" && (
 //                   <div className="absolute left-0 mt-0 w-48 bg-white text-gray-800 rounded-lg shadow-xl py-3 px-4 animate-in fade-in duration-200">
 //                     {menuItems.memberships.map((item, idx) => (
 //                       <a
 //                         key={idx}
 //                         href={item.href}
 //                         className="block py-2 px-3 hover:bg-gray-100 rounded-lg transition text-sm"
 //                       >
 //                         {item.label}
 //                       </a>
 //                     ))}
 //                   </div>
 //                 )}
 //               </div>
 //               {/* Level Guide Dropdown */}
 //               <div
 //                 className="relative group"
 //               >
 //                 <button
 //                   className="hover:text-[#7ED957] transition py-2"
 //                   onClick={() => router.push("/level-guide")}
 //                 >
 //                   Level Guide
 //                 </button>
 //               </div>
 //             </nav>
 //           </div>
 //           <div className="flex items-center gap-4">
 //             <button className="flex items-center gap-2 px-4 py-2 border-2 border-white rounded-lg text-sm hover:bg-white hover:bg-opacity-10 transition">
 //               <Globe size={16} />
 //               <span>English</span>
 //             </button>
 //             <a
 //               href="/trial"
 //               className="px-6 py-3 bg-white text-[#207FC5] font-bold rounded-lg hover:bg-gray-100 transition"
 //             >
 //               Free trial
 //             </a>
 //             <a
 //               href="/login"
 //               className="px-6 py-3 border-2 border-white font-bold rounded-lg hover:bg-white hover:bg-opacity-20 transition"
 //             >
 //               Login
 //             </a>
 //           </div>
 //         </div>
 //         {/* Mobile Menu */}
 //         {isMenuOpen && (
 //           <div className="lg:hidden bg-[#207FC5] p-6">
 //             <nav className="flex flex-col gap-4">
 //               <a
 //                 href="#features"
 //                 className="py-2 text-lg"
 //                 onClick={() => setIsMenuOpen(false)}
 //               >
 //                 Features
 //               </a>
 //               <a
 //                 href="#memberships"
 //                 className="py-2 text-lg"
 //                 onClick={() => setIsMenuOpen(false)}
 //               >
 //                 Memberships
 //               </a>
 //               <a
 //                 href="/level-guide"
 //                 className="py-2 text-lg"
 //                 onClick={() => setIsMenuOpen(false)}
 //               >
 //                 Level Guide
 //               </a>
 //               <div className="pt-4 space-y-3">
 //                 <button className="w-full px-4 py-2 border-2 border-white rounded-lg flex items-center justify-center gap-2">
 //                   <Globe size={16} />
 //                   <span>English</span>
 //                 </button>
 //                 <a
 //                   href="/trial"
 //                   className="block w-full text-center px-6 py-3 bg-white text-[#207FC5] font-bold rounded-lg"
 //                 >
 //                   Free trial
 //                 </a>
 //                 <a
 //                   href="/login"
 //                   className="block w-full text-center px-6 py-3 border-2 border-white font-bold rounded-lg"
 //                 >
 //                   Login
 //                 </a>
 //               </div>
 //             </nav>
 //           </div>
 //         )}
 //       </header>
 //     </div>
 //   );
 // }
}),
"[project]/src/components/Join.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Join.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Join.js <module evaluation>", "default");
}),
"[project]/src/components/Join.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Join.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Join.js", "default");
}),
"[project]/src/components/Join.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Join$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Join.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Join$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Join.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Join$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/Footer.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Footer.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Footer.js <module evaluation>", "default");
}),
"[project]/src/components/Footer.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/Footer.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/Footer.js", "default");
}),
"[project]/src/components/Footer.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/Footer.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/Footer.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/SessionProvider.js [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/SessionProvider.js <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/SessionProvider.js <module evaluation>", "default");
}),
"[project]/src/components/SessionProvider.js [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

// This file is generated by next-core EcmascriptClientReferenceModule.
__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/SessionProvider.js from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/SessionProvider.js", "default");
}),
"[project]/src/components/SessionProvider.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionProvider$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/SessionProvider.js [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionProvider$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/SessionProvider.js [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionProvider$2e$js__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/querystring [external] (querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("querystring", () => require("querystring"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// app/layout.js
__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_9ea4a3df$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[next]/internal/font/google/montserrat_9ea4a3df.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Navbar.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Join$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Join.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/Footer.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/SessionProvider.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/index.js [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
const metadata = {
    title: "Anglo-Link",
    description: "Your roadmap to fluency and confidence in English"
};
async function RootLayout({ children }) {
    const session = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServerSession"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        suppressHydrationWarning: true,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            className: `${__TURBOPACK__imported__module__$5b$next$5d2f$internal$2f$font$2f$google$2f$montserrat_9ea4a3df$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].variable} font-sans antialiased`,
            suppressHydrationWarning: true,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$SessionProvider$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                session: session,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Navbar$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 32,
                        columnNumber: 16
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                        children: children
                    }, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Join$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$Footer$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                        fileName: "[project]/app/layout.js",
                        lineNumber: 35,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/layout.js",
                lineNumber: 31,
                columnNumber: 14
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/layout.js",
            lineNumber: 27,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/layout.js",
        lineNumber: 26,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7e19ceb7._.js.map