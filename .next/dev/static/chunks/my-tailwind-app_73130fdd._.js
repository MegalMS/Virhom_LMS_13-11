(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/my-tailwind-app/src/components/AuthError.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function AuthError() {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const error = searchParams.get("error");
    if (!error) return null;
    const errorMessages = {
        OAuthSignin: "Error initiating OAuth sign in. Please try again.",
        OAuthCallback: "Error processing OAuth callback.",
        OAuthCreateAccount: "Could not create OAuth account.",
        EmailCreateAccount: "Could not create email account.",
        Callback: "Error in authentication callback.",
        OAuthAccountNotLinked: "Email already exists with another provider.",
        EmailSignin: "Check your email address.",
        CredentialsSignin: "Sign in failed. Check your credentials.",
        SessionRequired: "Please sign in to access this page.",
        Default: "An authentication error occurred."
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mb-4 p-4 bg-red-50 border border-red-200 rounded-md",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center gap-2 text-red-800",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertCircle$3e$__["AlertCircle"], {
                    size: 18
                }, void 0, false, {
                    fileName: "[project]/my-tailwind-app/src/components/AuthError.js",
                    lineNumber: 27,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "text-sm font-medium",
                    children: errorMessages[error] || errorMessages.Default
                }, void 0, false, {
                    fileName: "[project]/my-tailwind-app/src/components/AuthError.js",
                    lineNumber: 28,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/my-tailwind-app/src/components/AuthError.js",
            lineNumber: 26,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/my-tailwind-app/src/components/AuthError.js",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
_s(AuthError, "a+DZx9DY26Zf8FVy1bxe3vp9l1w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = AuthError;
var _c;
__turbopack_context__.k.register(_c, "AuthError");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-tailwind-app/app/login/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LoginPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$src$2f$components$2f$AuthError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/src/components/AuthError.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
const FadeInDiv = ({ children, className = "", delay = 0 })=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FadeInDiv.useEffect": ()=>{
            const timer = setTimeout({
                "FadeInDiv.useEffect.timer": ()=>setIsVisible(true)
            }["FadeInDiv.useEffect.timer"], delay);
            return ({
                "FadeInDiv.useEffect": ()=>clearTimeout(timer)
            })["FadeInDiv.useEffect"];
        }
    }["FadeInDiv.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/my-tailwind-app/app/login/page.js",
        lineNumber: 19,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FadeInDiv, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = FadeInDiv;
function LoginPage() {
    _s1();
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [email, setEmail] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [password, setPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [focusedInput, setFocusedInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [googleLoading, setGoogleLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
    const { data: session, status } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LoginPage.useEffect": ()=>{
            if (status === "loading") return;
            if (session) {
                console.log("User already logged in, redirecting to dashboard...");
                router.push("/dashboard");
            }
        }
    }["LoginPage.useEffect"], [
        session,
        status,
        router
    ]);
    if (status === "loading") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#fffbeb]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#A27B5C] mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                        lineNumber: 57,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-[#6B4F4F]",
                        children: "Checking authentication..."
                    }, void 0, false, {
                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                        lineNumber: 58,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-tailwind-app/app/login/page.js",
                lineNumber: 56,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-tailwind-app/app/login/page.js",
            lineNumber: 55,
            columnNumber: 7
        }, this);
    }
    if (session) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen flex items-center justify-center bg-[#fffbeb]",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#A27B5C] mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-[#6B4F4F]",
                        children: "Redirecting to dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                        lineNumber: 70,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-tailwind-app/app/login/page.js",
                lineNumber: 68,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/my-tailwind-app/app/login/page.js",
            lineNumber: 67,
            columnNumber: 7
        }, this);
    }
    const handleEmailLogin = async (e)=>{
        e.preventDefault();
        setLoading(true);
        try {
            console.log("Login attempt:", {
                email,
                password
            });
        // Add your email/password login logic here
        } catch (error) {
            console.error("Login failed:", error);
        } finally{
            setLoading(false);
        }
    };
    const handleGoogleLogin = async ()=>{
        setGoogleLoading(true);
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signIn"])("google", {
                callbackUrl: "/dashboard"
            });
        } catch (error) {
            console.error("Google login error:", error);
        } finally{
            setGoogleLoading(false);
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen flex items-center justify-center bg-[#fffbeb] relative overflow-hidden p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-24 left-12 w-64 h-64 bg-[#DCC7AA]/25 rounded-full blur-3xl animate-[pulse_7s_ease-in-out_infinite]"
                    }, void 0, false, {
                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-20 right-12 w-72 h-72 bg-[#6B4F4F]/20 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite]",
                        style: {
                            animationDelay: "1.5s"
                        }
                    }, void 0, false, {
                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                        lineNumber: 109,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/my-tailwind-app/app/login/page.js",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                className: "w-full max-w-md z-10",
                delay: 200,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-white/90 backdrop-blur-md shadow-[0_12px_35px_rgba(107,79,79,0.15)] border border-[#EADCCF] rounded-xl p-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$src$2f$components$2f$AuthError$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/my-tailwind-app/app/login/page.js",
                            lineNumber: 119,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                            delay: 300,
                            className: "flex flex-col items-center mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-16 h-16 flex items-center justify-center rounded-lg shadow-md",
                                    style: {
                                        background: "linear-gradient(135deg, #6B4F4F 0%, #A27B5C 80%)"
                                    },
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"], {
                                        className: "text-white w-8 h-8"
                                    }, void 0, false, {
                                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                    lineNumber: 123,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "mt-5 text-3xl font-semibold text-[#3E2723]",
                                    style: {
                                        fontFamily: "'Playfair Display', serif"
                                    },
                                    children: "Welcome Back"
                                }, void 0, false, {
                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-[#8B7355] text-center max-w-[20rem] leading-relaxed",
                                    children: "Sign in to your account to continue."
                                }, void 0, false, {
                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-tailwind-app/app/login/page.js",
                            lineNumber: 122,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleEmailLogin,
                            className: "mt-6 space-y-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                                    delay: 400,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-[#6B4F4F] mb-2",
                                            children: "Email address"
                                        }, void 0, false, {
                                            fileName: "[project]/my-tailwind-app/app/login/page.js",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                                    size: 18,
                                                    className: `absolute left-3 top-1/2 -translate-y-1/2 ${focusedInput === "email" ? "text-[#A27B5C]" : "text-[#CBB59D]"} transition-colors`
                                                }, void 0, false, {
                                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "email",
                                                    value: email,
                                                    onChange: (e)=>setEmail(e.target.value),
                                                    onFocus: ()=>setFocusedInput("email"),
                                                    onBlur: ()=>setFocusedInput(null),
                                                    required: true,
                                                    placeholder: "you@domain.com",
                                                    className: "w-full pl-10 pr-4 py-3 rounded-md bg-[#FFFDF6] border border-[#E9DCCF] text-[#3E2723] placeholder-[#CBB59D] focus:outline-none focus:ring-2 focus:ring-[#A27B5C]/30"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                    lineNumber: 159,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-tailwind-app/app/login/page.js",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                                    delay: 500,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-[#6B4F4F] mb-2",
                                            children: "Password"
                                        }, void 0, false, {
                                            fileName: "[project]/my-tailwind-app/app/login/page.js",
                                            lineNumber: 174,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Lock$3e$__["Lock"], {
                                                    size: 18,
                                                    className: `absolute left-3 top-1/2 -translate-y-1/2 ${focusedInput === "password" ? "text-[#A27B5C]" : "text-[#CBB59D]"} transition-colors`
                                                }, void 0, false, {
                                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                    lineNumber: 178,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: showPassword ? "text" : "password",
                                                    value: password,
                                                    onChange: (e)=>setPassword(e.target.value),
                                                    onFocus: ()=>setFocusedInput("password"),
                                                    onBlur: ()=>setFocusedInput(null),
                                                    required: true,
                                                    placeholder: "Enter your password",
                                                    className: "w-full pl-10 pr-10 py-3 rounded-md bg-[#FFFDF6] border border-[#E9DCCF] text-[#3E2723] placeholder-[#CBB59D] focus:outline-none focus:ring-2 focus:ring-[#A27B5C]/30"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                    lineNumber: 186,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>setShowPassword(!showPassword),
                                                    className: "absolute right-3 top-1/2 -translate-y-1/2 text-[#8B7355] hover:text-[#6B4F4F]",
                                                    children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                        lineNumber: 201,
                                                        columnNumber: 35
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        size: 18
                                                    }, void 0, false, {
                                                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                        lineNumber: 201,
                                                        columnNumber: 58
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                    lineNumber: 196,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-tailwind-app/app/login/page.js",
                                            lineNumber: 177,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                                    delay: 600,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: loading,
                                        className: "w-full py-3 font-semibold text-white rounded-md transition-transform duration-200 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed",
                                        style: {
                                            background: "linear-gradient(90deg,#A27B5C 0%, #6B4F4F 100%)",
                                            boxShadow: "0 6px 15px rgba(107,79,79,0.15)"
                                        },
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center justify-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    children: loading ? "Signing in..." : "Login to Account"
                                                }, void 0, false, {
                                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                    lineNumber: 218,
                                                    columnNumber: 19
                                                }, this),
                                                !loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                    size: 18
                                                }, void 0, false, {
                                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                    lineNumber: 219,
                                                    columnNumber: 32
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/my-tailwind-app/app/login/page.js",
                                            lineNumber: 217,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                                        lineNumber: 208,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-tailwind-app/app/login/page.js",
                            lineNumber: 144,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                            delay: 700,
                            className: "relative mt-8 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full border-t border-[#CBB59D]/30"
                                    }, void 0, false, {
                                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                                        lineNumber: 228,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                    lineNumber: 227,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative flex justify-center text-sm",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "px-3 bg-white/90 text-[#8B7355]",
                                        children: "Or continue with"
                                    }, void 0, false, {
                                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                                        lineNumber: 231,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/my-tailwind-app/app/login/page.js",
                            lineNumber: 226,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInDiv, {
                            delay: 800,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleGoogleLogin,
                                disabled: googleLoading,
                                className: "w-full py-3 bg-white border border-[#E9DCCF] rounded-md shadow-sm hover:shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#4285F4",
                                                d: "M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26    1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92    3.28-4.74 3.28-8.09z"
                                            }, void 0, false, {
                                                fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                lineNumber: 250,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#34A853",
                                                d: "M12 23c2.97 0 5.46-.98    7.28-2.66l-3.57-2.77c-.98.66-2.23    1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99    20.53 7.7 23 12 23z"
                                            }, void 0, false, {
                                                fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                lineNumber: 256,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#FBBC05",
                                                d: "M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43    8.55 1 10.22 1 12s.43 3.45 1.18    4.93l2.85-2.22.81-.62z"
                                            }, void 0, false, {
                                                fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                lineNumber: 263,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                fill: "#EA4335",
                                                d: "M12 5.38c1.62 0 3.06.56    4.21 1.64l3.15-3.15C17.45    2.09 14.97 1 12 1 7.7 1 3.99 3.47    2.18 7.07l3.66 2.84c.87-2.6    3.3-4.53 6.16-4.53z"
                                            }, void 0, false, {
                                                fileName: "[project]/my-tailwind-app/app/login/page.js",
                                                lineNumber: 269,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                                        lineNumber: 245,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-sm text-[#6B4F4F] font-medium",
                                        children: googleLoading ? "Signing in..." : "Continue with Google"
                                    }, void 0, false, {
                                        fileName: "[project]/my-tailwind-app/app/login/page.js",
                                        lineNumber: 278,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/my-tailwind-app/app/login/page.js",
                                lineNumber: 239,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/my-tailwind-app/app/login/page.js",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/my-tailwind-app/app/login/page.js",
                    lineNumber: 117,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/my-tailwind-app/app/login/page.js",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/my-tailwind-app/app/login/page.js",
        lineNumber: 105,
        columnNumber: 5
    }, this);
} // "use client";
 // import React, { useState, useEffect } from "react";
 // import { Mail, Lock, Eye, EyeOff, ArrowRight, Sparkles } from "lucide-react";
 // const FadeInDiv = ({ children, className = "", delay = 0 }) => {
 //   const [isVisible, setIsVisible] = useState(false);
 //   useEffect(() => {
 //     const timer = setTimeout(() => setIsVisible(true), delay);
 //     return () => clearTimeout(timer);
 //   }, [delay]);
 //   return (
 //     <div
 //       className={`transition-all duration-700 ease-out ${
 //         isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
 //       } ${className}`}
 //     >
 //       {children}
 //     </div>
 //   );
 // };
 // export default function LoginPage() {
 //   const [showPassword, setShowPassword] = useState(false);
 //   const [email, setEmail] = useState("");
 //   const [password, setPassword] = useState("");
 //   const [focusedInput, setFocusedInput] = useState(null);
 //   const handleSubmit = (e) => {
 //     e.preventDefault();
 //     console.log("Login attempt:", { email, password });
 //   };
 //   return (
 //     <div className="min-h-screen flex items-center justify-center bg-[#fffbeb] relative overflow-hidden p-6">
 //       {/* Subtle background effects */}
 //       <div className="absolute inset-0 pointer-events-none">
 //         <div className="absolute top-24 left-12 w-64 h-64 bg-[#DCC7AA]/25 rounded-full blur-3xl animate-[pulse_7s_ease-in-out_infinite]" />
 //         <div
 //           className="absolute bottom-20 right-12 w-72 h-72 bg-[#6B4F4F]/20 rounded-full blur-3xl animate-[pulse_9s_ease-in-out_infinite]"
 //           style={{ animationDelay: "1.5s" }}
 //         />
 //       </div>
 //       {/* Card Container */}
 //       <FadeInDiv className="w-full max-w-md z-10" delay={200}>
 //         <div className="bg-white/90 backdrop-blur-md shadow-[0_12px_35px_rgba(107,79,79,0.15)] border border-[#EADCCF] rounded-xl p-10">
 //           {/* Logo & Heading */}
 //           <FadeInDiv delay={300} className="flex flex-col items-center mb-6">
 //             <div
 //               className="w-16 h-16 flex items-center justify-center rounded-lg shadow-md"
 //               style={{
 //                 background:
 //                   "linear-gradient(135deg, #6B4F4F 0%, #A27B5C 80%)",
 //               }}
 //             >
 //               <Sparkles className="text-white w-8 h-8" />
 //             </div>
 //             <h1
 //               className="mt-5 text-3xl font-semibold text-[#3E2723]"
 //               style={{ fontFamily: "'Playfair Display', serif" }}
 //             >
 //               Welcome Back
 //             </h1>
 //             <p className="mt-2 text-sm text-[#8B7355] text-center max-w-[20rem] leading-relaxed">
 //               Sign in to your account to continue.
 //             </p>
 //           </FadeInDiv>
 //           {/* Form */}
 //           <form onSubmit={handleSubmit} className="mt-6 space-y-5">
 //             {/* Email */}
 //             <FadeInDiv delay={400}>
 //               <label className="block text-sm font-medium text-[#6B4F4F] mb-2">
 //                 Email address
 //               </label>
 //               <div className="relative">
 //                 <Mail
 //                   size={18}
 //                   className={`absolute left-3 top-1/2 -translate-y-1/2 ${
 //                     focusedInput === "email"
 //                       ? "text-[#A27B5C]"
 //                       : "text-[#CBB59D]"
 //                   } transition-colors`}
 //                 />
 //                 <input
 //                   type="email"
 //                   value={email}
 //                   onChange={(e) => setEmail(e.target.value)}
 //                   onFocus={() => setFocusedInput("email")}
 //                   onBlur={() => setFocusedInput(null)}
 //                   required
 //                   placeholder="you@domain.com"
 //                   className="w-full pl-10 pr-4 py-3 rounded-md bg-[#FFFDF6] border border-[#E9DCCF] text-[#3E2723] placeholder-[#CBB59D] focus:outline-none focus:ring-2 focus:ring-[#A27B5C]/30"
 //                 />
 //               </div>
 //             </FadeInDiv>
 //             {/* Password */}
 //             <FadeInDiv delay={500}>
 //               <label className="block text-sm font-medium text-[#6B4F4F] mb-2">
 //                 Password
 //               </label>
 //               <div className="relative">
 //                 <Lock
 //                   size={18}
 //                   className={`absolute left-3 top-1/2 -translate-y-1/2 ${
 //                     focusedInput === "password"
 //                       ? "text-[#A27B5C]"
 //                       : "text-[#CBB59D]"
 //                   } transition-colors`}
 //                 />
 //                 <input
 //                   type={showPassword ? "text" : "password"}
 //                   value={password}
 //                   onChange={(e) => setPassword(e.target.value)}
 //                   onFocus={() => setFocusedInput("password")}
 //                   onBlur={() => setFocusedInput(null)}
 //                   required
 //                   placeholder="Enter your password"
 //                   className="w-full pl-10 pr-10 py-3 rounded-md bg-[#FFFDF6] border border-[#E9DCCF] text-[#3E2723] placeholder-[#CBB59D] focus:outline-none focus:ring-2 focus:ring-[#A27B5C]/30"
 //                 />
 //                 <button
 //                   type="button"
 //                   onClick={() => setShowPassword(!showPassword)}
 //                   className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8B7355] hover:text-[#6B4F4F]"
 //                 >
 //                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
 //                 </button>
 //               </div>
 //             </FadeInDiv>
 //             {/* Submit */}
 //             <FadeInDiv delay={600}>
 //               <button
 //                 type="submit"
 //                 className="w-full py-3 font-semibold text-white rounded-md transition-transform duration-200 hover:scale-[1.02]"
 //                 style={{
 //                   background:
 //                     "linear-gradient(90deg,#A27B5C 0%, #6B4F4F 100%)",
 //                   boxShadow: "0 6px 15px rgba(107,79,79,0.15)",
 //                 }}
 //               >
 //                 <div className="flex items-center justify-center gap-2">
 //                   <span>Login to Account</span>
 //                   <ArrowRight size={18} />
 //                 </div>
 //               </button>
 //             </FadeInDiv>
 //           </form>
 //           {/* Divider */}
 //           <FadeInDiv delay={700} className="relative mt-8 mb-6">
 //             <div className="absolute inset-0 flex items-center">
 //               <div className="w-full border-t border-[#CBB59D]/30" />
 //             </div>
 //             <div className="relative flex justify-center text-sm">
 //               <span className="px-3 bg-white/90 text-[#8B7355]">
 //                 Or continue with
 //               </span>
 //             </div>
 //           </FadeInDiv>
 //           {/* Google Button */}
 //           <FadeInDiv delay={800}>
 //             <button
 //               type="button"
 //               onClick={() => console.log("https://anglo-link.")}
 //               className="w-full py-3 bg-white border border-[#E9DCCF] rounded-md shadow-sm hover:shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02]"
 //             >
 //               <svg
 //                 className="w-5 h-5"
 //                 viewBox="0 0 24 24"
 //                 xmlns="http://www.w3.org/2000/svg"
 //               >
 //                 <path
 //                   fill="#4285F4"
 //                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 
 //                   1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 
 //                   3.28-4.74 3.28-8.09z"
 //                 />
 //                 <path
 //                   fill="#34A853"
 //                   d="M12 23c2.97 0 5.46-.98 
 //                   7.28-2.66l-3.57-2.77c-.98.66-2.23 
 //                   1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 
 //                   20.53 7.7 23 12 23z"
 //                 />
 //                 <path
 //                   fill="#FBBC05"
 //                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 
 //                   8.55 1 10.22 1 12s.43 3.45 1.18 
 //                   4.93l2.85-2.22.81-.62z"
 //                 />
 //                 <path
 //                   fill="#EA4335"
 //                   d="M12 5.38c1.62 0 3.06.56 
 //                   4.21 1.64l3.15-3.15C17.45 
 //                   2.09 14.97 1 12 1 7.7 1 3.99 3.47 
 //                   2.18 7.07l3.66 2.84c.87-2.6 
 //                   3.3-4.53 6.16-4.53z"
 //                 />
 //               </svg>
 //               <span className="text-sm text-[#6B4F4F] font-medium">
 //                 Continue with Google
 //               </span>
 //             </button>
 //           </FadeInDiv>
 //         </div>
 //       </FadeInDiv>
 //     </div>
 //   );
 // }
_s1(LoginPage, "M2rOo5BQM3dJISoiPyQPIpDKQ7o=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"],
        __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"]
    ];
});
_c1 = LoginPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "FadeInDiv");
__turbopack_context__.k.register(_c1, "LoginPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Lock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "rect",
        {
            width: "18",
            height: "11",
            x: "3",
            y: "11",
            rx: "2",
            ry: "2",
            key: "1w4ew1"
        }
    ],
    [
        "path",
        {
            d: "M7 11V7a5 5 0 0 1 10 0v4",
            key: "fwvmzm"
        }
    ]
];
const Lock = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("lock", __iconNode);
;
 //# sourceMappingURL=lock.js.map
}),
"[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript) <export default as Lock>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Lock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$lock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/lock.js [app-client] (ecmascript)");
}),
"[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Eye
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
            key: "1nclc0"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Eye = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("eye", __iconNode);
;
 //# sourceMappingURL=eye.js.map
}),
"[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Eye",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript)");
}),
"[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>EyeOff
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
            key: "ct8e1f"
        }
    ],
    [
        "path",
        {
            d: "M14.084 14.158a3 3 0 0 1-4.242-4.242",
            key: "151rxh"
        }
    ],
    [
        "path",
        {
            d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
            key: "13bj9a"
        }
    ],
    [
        "path",
        {
            d: "m2 2 20 20",
            key: "1ooewy"
        }
    ]
];
const EyeOff = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("eye-off", __iconNode);
;
 //# sourceMappingURL=eye-off.js.map
}),
"[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EyeOff",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript)");
}),
"[project]/my-tailwind-app/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/my-tailwind-app/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * @license lucide-react v0.553.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>CircleAlert
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "10",
            key: "1mglay"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "8",
            y2: "12",
            key: "1pkeuh"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12.01",
            y1: "16",
            y2: "16",
            key: "4dfq90"
        }
    ]
];
const CircleAlert = (0, __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("circle-alert", __iconNode);
;
 //# sourceMappingURL=circle-alert.js.map
}),
"[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript) <export default as AlertCircle>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AlertCircle",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$my$2d$tailwind$2d$app$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/my-tailwind-app/node_modules/lucide-react/dist/esm/icons/circle-alert.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=my-tailwind-app_73130fdd._.js.map