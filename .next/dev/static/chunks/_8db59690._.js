(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/level-guide/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/target.js [app-client] (ecmascript) <export default as Target>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
// Animation wrapper
const FadeInView = ({ children, className, delay = 0 })=>{
    _s();
    const [isVisible, setIsVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FadeInView.useEffect": ()=>{
            const timer = setTimeout({
                "FadeInView.useEffect.timer": ()=>setIsVisible(true)
            }["FadeInView.useEffect.timer"], delay);
            return ({
                "FadeInView.useEffect": ()=>clearTimeout(timer)
            })["FadeInView.useEffect"];
        }
    }["FadeInView.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`,
        children: children
    }, void 0, false, {
        fileName: "[project]/app/level-guide/page.js",
        lineNumber: 15,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FadeInView, "J3yJOyGdBT4L7hs1p1XQYVGMdrY=");
_c = FadeInView;
function Page() {
    _s1();
    const levels = [
        {
            tab: "Beginner (A1)",
            title: "Beginner (A1)",
            cefr: "A1",
            abilities: "You understand and can use some basic English phrases to say hello, goodbye, thank you, etc. You can also say a few things about yourself (name, nationality, age, possessions), but you are not able to understand or engage in a conversation or any form of written exchange.",
            goals: [
                "Learn the basic structure and the most common daily vocabulary and phrases.",
                "Open your ears to English sounds and rhythm by hearing English in the background (without trying to understand anything)."
            ],
            milestones: [
                "Master basic greetings",
                "Learn personal details",
                "Build confidence"
            ]
        },
        {
            tab: "Elementary (A2)",
            title: "Elementary (A2)",
            cefr: "A2",
            abilities: "You can understand frequently used expressions and communicate in simple tasks requiring a direct exchange of information. You can describe your background and immediate environment.",
            goals: [
                "Expand your vocabulary and improve your pronunciation.",
                "Understand short phrases and simple sentences used in daily life."
            ],
            milestones: [
                "Expand vocabulary",
                "Improve pronunciation",
                "Simple conversations"
            ]
        },
        {
            tab: "Intermediate (B1-B2)",
            title: "Intermediate (B1-B2)",
            cefr: "B1-B2",
            abilities: "You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, and leisure.",
            goals: [
                "Learn to express opinions, agree/disagree, and describe events clearly.",
                "Start reading and listening to English media for comprehension."
            ],
            milestones: [
                "Express opinions",
                "Understand media",
                "Complex sentences"
            ]
        },
        {
            tab: "Advanced (C1)",
            title: "Advanced (C1)",
            cefr: "C1",
            abilities: "You can express yourself fluently and spontaneously without much obvious searching for expressions. You use language flexibly for social, academic, and professional purposes.",
            goals: [
                "Improve advanced grammar and idiomatic expressions.",
                "Work on writing essays and formal correspondence."
            ],
            milestones: [
                "Master idioms",
                "Write formally",
                "Professional English"
            ]
        },
        {
            tab: "Fluent (C1+)",
            title: "Fluent (C1+)",
            cefr: "C1+",
            abilities: "You can understand demanding texts and recognize implicit meaning. You can express ideas fluently and use language effectively for professional purposes.",
            goals: [
                "Refine your accent and vocabulary range.",
                "Engage in debates and discussions on complex topics."
            ],
            milestones: [
                "Refine accent",
                "Advanced vocabulary",
                "Debate fluency"
            ]
        },
        {
            tab: "Proficient (C2)",
            title: "Proficient (C2)",
            cefr: "C2",
            abilities: "You can understand practically everything you hear or read and express yourself spontaneously, fluently, and precisely.",
            goals: [
                "Perfect your understanding of cultural nuances in communication.",
                "Write and speak with precision and natural flow."
            ],
            milestones: [
                "Cultural nuance",
                "Precise expression",
                "Natural fluency"
            ]
        },
        {
            tab: "Expert (C2+)",
            title: "Expert (Near Native) (C2+)",
            cefr: "C2+",
            abilities: "You have a level of English comparable to that of a well-educated native speaker.",
            goals: [
                "Master stylistic variety and cultural references in all contexts.",
                "Communicate effortlessly with full natural fluency."
            ],
            milestones: [
                "Master stylistic variety",
                "Native-like fluency",
                "Expert proficiency"
            ]
        }
    ];
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    // Color Palette
    const colors = {
        primary: "#4169E1",
        secondary: "#7B68EE",
        accent: "#FFF7AE",
        white: "#FFFFFF",
        dark: "#333333",
        lightBg: "#F8FAFF"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-f9d5b850abd8f637" + " " + "fixed inset-0 bg-gradient-to-br from-white via-[#F8FAFF] to-[#F0F4FF] -z-10"
            }, void 0, false, {
                fileName: "[project]/app/level-guide/page.js",
                lineNumber: 128,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-f9d5b850abd8f637" + " " + "fixed inset-0 overflow-hidden pointer-events-none -z-5",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: colors.primary,
                            animation: "float 8s ease-in-out infinite"
                        },
                        className: "jsx-f9d5b850abd8f637" + " " + "absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/app/level-guide/page.js",
                        lineNumber: 132,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            backgroundColor: colors.secondary,
                            animation: "float 10s ease-in-out infinite 1s"
                        },
                        className: "jsx-f9d5b850abd8f637" + " " + "absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl opacity-20"
                    }, void 0, false, {
                        fileName: "[project]/app/level-guide/page.js",
                        lineNumber: 136,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/level-guide/page.js",
                lineNumber: 131,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-f9d5b850abd8f637" + " " + "relative pt-16 pb-8",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-f9d5b850abd8f637" + " " + "max-w-6xl mx-auto px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInView, {
                        delay: 0,
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-f9d5b850abd8f637" + " " + "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4169E1]/10 border border-[#4169E1]/20 mb-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            backgroundColor: colors.primary
                                        },
                                        className: "jsx-f9d5b850abd8f637" + " " + "w-2 h-2 rounded-full"
                                    }, void 0, false, {
                                        fileName: "[project]/app/level-guide/page.js",
                                        lineNumber: 147,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            color: colors.primary
                                        },
                                        className: "jsx-f9d5b850abd8f637" + " " + "text-sm font-semibold",
                                        children: "English Proficiency Levels"
                                    }, void 0, false, {
                                        fileName: "[project]/app/level-guide/page.js",
                                        lineNumber: 148,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/level-guide/page.js",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                style: {
                                    color: colors.dark
                                },
                                className: "jsx-f9d5b850abd8f637" + " " + "text-4xl md:text-5xl font-bold mb- 4",
                                children: [
                                    "From Beginner to",
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        style: {
                                            backgroundImage: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`
                                        },
                                        className: "jsx-f9d5b850abd8f637" + " " + "bg-gradient-to-r bg-clip-text text-transparent",
                                        children: "Expert Fluency"
                                    }, void 0, false, {
                                        fileName: "[project]/app/level-guide/page.js",
                                        lineNumber: 154,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/level-guide/page.js",
                                lineNumber: 152,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    color: "#666666"
                                },
                                className: "jsx-f9d5b850abd8f637" + " " + "text-lg max-w-2xl mx-auto",
                                children: "Aligned with CEFR standards, our structured levels help you track progress and achieve your English language goals"
                            }, void 0, false, {
                                fileName: "[project]/app/level-guide/page.js",
                                lineNumber: 163,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/level-guide/page.js",
                        lineNumber: 145,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/level-guide/page.js",
                    lineNumber: 144,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/level-guide/page.js",
                lineNumber: 143,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-f9d5b850abd8f637" + " " + "relative py-12",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-f9d5b850abd8f637" + " " + "max-w-6xl mx-auto px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInView, {
                        delay: 100,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-f9d5b850abd8f637" + " " + "group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-[#E8E8E8]/50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-f9d5b850abd8f637" + " " + "overflow-x-auto",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                        className: "jsx-f9d5b850abd8f637" + " " + "w-full",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                                className: "jsx-f9d5b850abd8f637",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    style: {
                                                        background: `linear-gradient(to right, ${colors.primary}05, ${colors.secondary}05)`,
                                                        borderColor: "#E8E8E8"
                                                    },
                                                    className: "jsx-f9d5b850abd8f637" + " " + "border-b",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                color: colors.dark
                                                            },
                                                            className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 text-left text-sm font-semibold",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-f9d5b850abd8f637" + " " + "flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"], {
                                                                        className: "w-4 h-4",
                                                                        style: {
                                                                            color: colors.primary
                                                                        }
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/level-guide/page.js",
                                                                        lineNumber: 188,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    "VirHom Level"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/level-guide/page.js",
                                                                lineNumber: 187,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 186,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                color: colors.dark
                                                            },
                                                            className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 text-left text-sm font-semibold",
                                                            children: "CEFR"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 192,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                color: colors.dark
                                                            },
                                                            className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 text-left text-sm font-semibold",
                                                            children: "IELTS"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 193,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                color: colors.dark
                                                            },
                                                            className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 text-left text-sm font-semibold",
                                                            children: "Cambridge"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 194,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                            style: {
                                                                color: colors.dark
                                                            },
                                                            className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 text-left text-sm font-semibold",
                                                            children: "TOEFL iBT"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 195,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/level-guide/page.js",
                                                    lineNumber: 179,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/level-guide/page.js",
                                                lineNumber: 178,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                                className: "jsx-f9d5b850abd8f637",
                                                children: levels.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                        onClick: ()=>setActiveTab(i),
                                                        className: "jsx-f9d5b850abd8f637" + " " + `border-b border-[#E8E8E8] cursor-pointer transition-all duration-300 ${activeTab === i ? "bg-[#4169E1]/8 hover:bg-[#4169E1]/12" : "hover:bg-[#F8F8F8]"}`,
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                style: {
                                                                    color: colors.dark
                                                                },
                                                                className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 text-sm font-semibold",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "jsx-f9d5b850abd8f637" + " " + "flex items-center gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                backgroundColor: activeTab === i ? colors.primary : colors.secondary,
                                                                                transform: activeTab === i ? "scale(1.2)" : "scale(1)"
                                                                            },
                                                                            className: "jsx-f9d5b850abd8f637" + " " + "w-3 h-3 rounded-full transition-transform duration-300"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/level-guide/page.js",
                                                                            lineNumber: 211,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        row.title
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/level-guide/page.js",
                                                                    lineNumber: 210,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/level-guide/page.js",
                                                                lineNumber: 209,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 text-sm",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    style: {
                                                                        backgroundColor: colors.primary + "10",
                                                                        color: colors.primary
                                                                    },
                                                                    className: "jsx-f9d5b850abd8f637" + " " + "px-2 py-1 rounded-md font-medium text-xs",
                                                                    children: row.cefr
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/level-guide/page.js",
                                                                    lineNumber: 222,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/level-guide/page.js",
                                                                lineNumber: 221,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 text-sm text-[#999999]",
                                                                children: "–"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/level-guide/page.js",
                                                                lineNumber: 232,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 text-sm text-[#999999]",
                                                                children: "–"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/level-guide/page.js",
                                                                lineNumber: 233,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                                className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 text-sm text-[#999999]",
                                                                children: "–"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/level-guide/page.js",
                                                                lineNumber: 234,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/level-guide/page.js",
                                                        lineNumber: 200,
                                                        columnNumber: 23
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/level-guide/page.js",
                                                lineNumber: 198,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/level-guide/page.js",
                                        lineNumber: 177,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/level-guide/page.js",
                                    lineNumber: 176,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        backgroundColor: "#F8F8F8",
                                        borderTop: "1px solid #E8E8E8",
                                        color: "#666666"
                                    },
                                    className: "jsx-f9d5b850abd8f637" + " " + "px-6 py-4 space-y-2 text-xs",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-f9d5b850abd8f637",
                                            children: "* CEFR: Common European Framework of Reference for Languages"
                                        }, void 0, false, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 243,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "jsx-f9d5b850abd8f637",
                                            children: "** Cambridge: KET (Key), PET (Preliminary), FCE (First), CAE (Advanced), CPE (Proficiency)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 244,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/level-guide/page.js",
                                    lineNumber: 242,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/level-guide/page.js",
                            lineNumber: 174,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/level-guide/page.js",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/level-guide/page.js",
                    lineNumber: 172,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/level-guide/page.js",
                lineNumber: 171,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-f9d5b850abd8f637" + " " + "relative py-8 sticky top-0 z-30 bg-gradient-to-b from-white to-white/80 backdrop-blur-md border-b border-[#E8E8E8]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-f9d5b850abd8f637" + " " + "max-w-6xl mx-auto px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-f9d5b850abd8f637" + " " + "flex gap-2 overflow-x-auto pb-2 scrollbar-hide",
                        children: levels.map((level, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: ()=>setActiveTab(i),
                                style: activeTab === i ? {
                                    background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                                    boxShadow: `0 8px 16px ${colors.primary}40`
                                } : {},
                                className: "jsx-f9d5b850abd8f637" + " " + `flex-shrink-0 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 border ${activeTab === i ? "border-transparent text-white shadow-lg" : "border-[#E8E8E8] text-[#666666] hover:text-[#333333] hover:border-[#4169E1]/30"}`,
                                children: level.tab
                            }, i, false, {
                                fileName: "[project]/app/level-guide/page.js",
                                lineNumber: 256,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/level-guide/page.js",
                        lineNumber: 254,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/level-guide/page.js",
                    lineNumber: 253,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/level-guide/page.js",
                lineNumber: 252,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-f9d5b850abd8f637" + " " + "relative py-20",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-f9d5b850abd8f637" + " " + "max-w-6xl mx-auto px-6 lg:px-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FadeInView, {
                        delay: 200,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: {
                                background: `linear-gradient(135deg, ${colors.primary}15 0%, ${colors.secondary}08 100%)`,
                                border: `2px solid ${colors.primary}20`
                            },
                            className: "jsx-f9d5b850abd8f637" + " " + "rounded-2xl overflow-hidden shadow-2xl",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-f9d5b850abd8f637" + " " + "px-8 lg:px-12 pt-12 pb-8 border-b border-[#E8E8E8]",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-f9d5b850abd8f637" + " " + "flex items-start gap-6 mb-6",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    backgroundColor: colors.accent
                                                },
                                                className: "jsx-f9d5b850abd8f637" + " " + "p-4 rounded-xl",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                                    size: 32,
                                                    style: {
                                                        color: colors.primary
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/app/level-guide/page.js",
                                                    lineNumber: 298,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/app/level-guide/page.js",
                                                lineNumber: 294,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-f9d5b850abd8f637",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        style: {
                                                            color: colors.dark
                                                        },
                                                        className: "jsx-f9d5b850abd8f637" + " " + "text-3xl md:text-4xl font-bold mb-2",
                                                        children: levels[activeTab].title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/level-guide/page.js",
                                                        lineNumber: 301,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        style: {
                                                            color: "#666666"
                                                        },
                                                        className: "jsx-f9d5b850abd8f637",
                                                        children: "Progress toward fluency and professional proficiency"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/level-guide/page.js",
                                                        lineNumber: 304,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/level-guide/page.js",
                                                lineNumber: 300,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/level-guide/page.js",
                                        lineNumber: 293,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/level-guide/page.js",
                                    lineNumber: 292,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "jsx-f9d5b850abd8f637" + " " + "px-8 lg:px-12 py-12",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-f9d5b850abd8f637" + " " + "grid md:grid-cols-2 gap-12",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-f9d5b850abd8f637",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-f9d5b850abd8f637" + " " + "flex items-center gap-3 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                                    size: 24,
                                                                    style: {
                                                                        color: colors.primary
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/level-guide/page.js",
                                                                    lineNumber: 317,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    style: {
                                                                        color: colors.dark
                                                                    },
                                                                    className: "jsx-f9d5b850abd8f637" + " " + "text-xl font-semibold",
                                                                    children: "Your Abilities"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/level-guide/page.js",
                                                                    lineNumber: 318,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 316,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: "#666666"
                                                            },
                                                            className: "jsx-f9d5b850abd8f637" + " " + "leading-relaxed text-base",
                                                            children: levels[activeTab].abilities
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 322,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/level-guide/page.js",
                                                    lineNumber: 315,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-f9d5b850abd8f637",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "jsx-f9d5b850abd8f637" + " " + "flex items-center gap-3 mb-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$target$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Target$3e$__["Target"], {
                                                                    size: 24,
                                                                    style: {
                                                                        color: colors.primary
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/level-guide/page.js",
                                                                    lineNumber: 330,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                    style: {
                                                                        color: colors.dark
                                                                    },
                                                                    className: "jsx-f9d5b850abd8f637" + " " + "text-xl font-semibold",
                                                                    children: "Your Goals"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/level-guide/page.js",
                                                                    lineNumber: 331,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 329,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            style: {
                                                                color: "#666666"
                                                            },
                                                            className: "jsx-f9d5b850abd8f637" + " " + "mb-4 text-base",
                                                            children: "Working through this level, you will:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 335,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                            className: "jsx-f9d5b850abd8f637" + " " + "space-y-3",
                                                            children: levels[activeTab].goals.map((goal, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    className: "jsx-f9d5b850abd8f637" + " " + "flex gap-3",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                            style: {
                                                                                backgroundColor: colors.primary
                                                                            },
                                                                            className: "jsx-f9d5b850abd8f637" + " " + "w-2 h-2 rounded-full mt-2 flex-shrink-0"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/level-guide/page.js",
                                                                            lineNumber: 341,
                                                                            columnNumber: 27
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            style: {
                                                                                color: "#666666"
                                                                            },
                                                                            className: "jsx-f9d5b850abd8f637" + " " + "leading-relaxed",
                                                                            children: goal
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/level-guide/page.js",
                                                                            lineNumber: 345,
                                                                            columnNumber: 27
                                                                        }, this)
                                                                    ]
                                                                }, i, true, {
                                                                    fileName: "[project]/app/level-guide/page.js",
                                                                    lineNumber: 340,
                                                                    columnNumber: 25
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 338,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/level-guide/page.js",
                                                    lineNumber: 328,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 313,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "jsx-f9d5b850abd8f637" + " " + "mt-12 pt-12 border-t border-[#E8E8E8]",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                    style: {
                                                        color: colors.dark
                                                    },
                                                    className: "jsx-f9d5b850abd8f637" + " " + "text-lg font-semibold mb-6",
                                                    children: "Key Milestones"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/level-guide/page.js",
                                                    lineNumber: 356,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "jsx-f9d5b850abd8f637" + " " + "grid grid-cols-1 sm:grid-cols-3 gap-4",
                                                    children: levels[activeTab].milestones.map((milestone, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            style: {
                                                                backgroundColor: colors.accent + "80",
                                                                borderColor: colors.primary + "40"
                                                            },
                                                            className: "jsx-f9d5b850abd8f637" + " " + "p-4 rounded-lg border-2 transition-all duration-300 hover:shadow-lg",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "jsx-f9d5b850abd8f637" + " " + "flex items-start gap-3",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                        style: {
                                                                            backgroundColor: colors.primary
                                                                        },
                                                                        className: "jsx-f9d5b850abd8f637" + " " + "w-6 h-6 rounded-full flex items-center justify-center text-white text-sm font-bold mt-0.5 flex-shrink-0",
                                                                        children: i + 1
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/level-guide/page.js",
                                                                        lineNumber: 370,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            color: colors.dark
                                                                        },
                                                                        className: "jsx-f9d5b850abd8f637" + " " + "font-medium text-sm",
                                                                        children: milestone
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/level-guide/page.js",
                                                                        lineNumber: 376,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/level-guide/page.js",
                                                                lineNumber: 369,
                                                                columnNumber: 25
                                                            }, this)
                                                        }, i, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 361,
                                                            columnNumber: 23
                                                        }, this))
                                                }, void 0, false, {
                                                    fileName: "[project]/app/level-guide/page.js",
                                                    lineNumber: 359,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 355,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/level-guide/page.js",
                                    lineNumber: 312,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/level-guide/page.js",
                            lineNumber: 284,
                            columnNumber: 13
                        }, this)
                    }, activeTab, false, {
                        fileName: "[project]/app/level-guide/page.js",
                        lineNumber: 283,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/level-guide/page.js",
                    lineNumber: 282,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/level-guide/page.js",
                lineNumber: 281,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "f9d5b850abd8f637",
                children: "@keyframes float{0%,to{transform:translateY(0)}50%{transform:translateY(-30px)}}.scrollbar-hide.jsx-f9d5b850abd8f637::-webkit-scrollbar{display:none}.scrollbar-hide.jsx-f9d5b850abd8f637{-ms-overflow-style:none;scrollbar-width:none}"
            }, void 0, false, void 0, this)
        ]
    }, void 0, true);
} // // // "use client";
 // // // import React from "react";
 // // // export default function Page() {
 // // //   const levels = [
 // // //     {
 // // //       level: "Beginner",
 // // //       CEFR: "A1",
 // // //       IELTS: "1.0",
 // // //       Cambridge: "KET Pass (100-119)",
 // // //       TOEFL: "0 - 19",
 // // //     },
 // // //     {
 // // //       level: "Lower Elementary",
 // // //       CEFR: "A2",
 // // //       IELTS: "3.0",
 // // //       Cambridge: "KET/PET Pass (120-139)",
 // // //       TOEFL: "20 - 31",
 // // //     },
 // // //     {
 // // //       level: "Upper Elementary",
 // // //       CEFR: "B1",
 // // //       IELTS: "4.0",
 // // //       Cambridge: "PET (140 - 148)",
 // // //       TOEFL: "32 - 38",
 // // //     },
 // // //     {
 // // //       level: "Lower Intermediate",
 // // //       CEFR: "B1+",
 // // //       IELTS: "5.0",
 // // //       Cambridge: "PET (150 - 159)",
 // // //       TOEFL: "39 - 45",
 // // //     },
 // // //     {
 // // //       level: "Upper Intermediate",
 // // //       CEFR: "B2",
 // // //       IELTS: "6.0",
 // // //       Cambridge: "FCE (160 - 169)",
 // // //       TOEFL: "46 - 70",
 // // //     },
 // // //     {
 // // //       level: "Lower Advanced",
 // // //       CEFR: "B2+",
 // // //       IELTS: "6.5",
 // // //       Cambridge: "FCE (170 - 179)",
 // // //       TOEFL: "71 - 83",
 // // //     },
 // // //     {
 // // //       level: "Upper Advanced",
 // // //       CEFR: "C1",
 // // //       IELTS: "7.0",
 // // //       Cambridge: "CAE (180 - 189)",
 // // //       TOEFL: "94 - 101",
 // // //     },
 // // //     {
 // // //       level: "Fluent",
 // // //       CEFR: "C1+",
 // // //       IELTS: "7.5",
 // // //       Cambridge: "CAE (190 - 199)",
 // // //       TOEFL: "102 - 114",
 // // //     },
 // // //     {
 // // //       level: "Proficient",
 // // //       CEFR: "C2",
 // // //       IELTS: "8.0",
 // // //       Cambridge: "CPE (200 - 219)",
 // // //       TOEFL: "115 - 117",
 // // //     },
 // // //     {
 // // //       level: "Expert (near-native)",
 // // //       CEFR: "C2+",
 // // //       IELTS: "9.0",
 // // //       Cambridge: "CPE (220 - 230)",
 // // //       TOEFL: "118 - 120",
 // // //     },
 // // //   ];
 // // //   return (
 // // //     <section className="bg-white py-20">
 // // //       <div className="max-w-5xl mx-auto px-4">
 // // //         {/* Heading */}
 // // //         <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
 // // //           VirHom's ranks in the framework of international tests
 // // //         </h2>
 // // //         {/* Table */}
 // // //         <div className="overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md">
 // // //           <table className="w-full text-center border-collapse">
 // // //             <thead>
 // // //               <tr className="bg-[#E8F3FC] border-b border-blue-300">
 // // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 // // //                   VirHom level
 // // //                 </th>
 // // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 // // //                   CEFR
 // // //                 </th>
 // // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 // // //                   IELTS
 // // //                 </th>
 // // //                 <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 // // //                   Cambridge
 // // //                 </th>
 // // //                 <th className="p-3 text-sm font-semibold text-gray-800">
 // // //                   TOEFL iBT
 // // //                 </th>
 // // //               </tr>
 // // //             </thead>
 // // //             <tbody>
 // // //               {levels.map((row, i) => (
 // // //                 <tr
 // // //                   key={i}
 // // //                   className={`text-gray-700 text-sm ${
 // // //                     i % 2 === 0 ? "bg-gray-50" : "bg-white"
 // // //                   } hover:bg-blue-50 transition`}
 // // //                 >
 // // //                   <td className="p-3 border border-gray-200">{row.level}</td>
 // // //                   <td className="p-3 border border-gray-200">{row.CEFR}</td>
 // // //                   <td className="p-3 border border-gray-200">{row.IELTS}</td>
 // // //                   <td className="p-3 border border-gray-200">
 // // //                     {row.Cambridge}
 // // //                   </td>
 // // //                   <td className="p-3 border border-gray-200">{row.TOEFL}</td>
 // // //                 </tr>
 // // //               ))}
 // // //             </tbody>
 // // //           </table>
 // // //         </div>
 // // //         {/* Notes */}
 // // //         <div className="mt-6 text-sm text-gray-600">
 // // //           <p className="mt-2">
 // // //             * The Common European Framework of Reference for Languages{" "}
 // // //             <a href="#" className="text-[#207FC5] hover:underline font-medium">
 // // //               (CEFR)
 // // //             </a>
 // // //           </p>
 // // //           <p className="mt-1">
 // // //             ** Cambridge English Scales: KET: Key, PET: Preliminary, FCE: First,
 // // //             CAE: Advanced, CPE: Proficiency
 // // //           </p>
 // // //         </div>
 // // //         {/* Tabs */}
 // // //         <div className="flex justify-center mt-10 overflow-x-hidden whitespace-nowrap">
 // // //           {[
 // // //             "Beginner (A1)",
 // // //             "Elementary (A2)",
 // // //             "Intermediate (B1-B2)",
 // // //             "Advanced (C1)",
 // // //             "Fluent (C1+)",
 // // //             "Proficient (C2)",
 // // //             "Expert (Near Native) (C2+)",
 // // //           ].map((tab, i) => (
 // // //             <button
 // // //               key={i}
 // // //               className={`text-xs px-3 py-1.5 border-t-2 border-x border-b-0 ${
 // // //                 i === 0
 // // //                   ? "bg-[#207FC5] text-white border-[#207FC5]"
 // // //                   : "bg-[#E8F3FC] text-gray-700 border-[#C8E0F5]"
 // // //               } hover:bg-[#207FC5]/90 hover:text-white transition`}
 // // //             >
 // // //               {tab}
 // // //             </button>
 // // //           ))}
 // // //         </div>
 // // //       </div>
 // // //     </section>
 // // //   );
 // // // }
 // // "use client";
 // // import React from "react";
 // // import { GraduationCap } from "lucide-react";
 // // export default function Page() {
 // //   const levels = [
 // //     {
 // //       level: "Beginner",
 // //       CEFR: "A1",
 // //       IELTS: "1.0",
 // //       Cambridge: "KET Pass (100-119)",
 // //       TOEFL: "0 - 19",
 // //     },
 // //     {
 // //       level: "Lower Elementary",
 // //       CEFR: "A2",
 // //       IELTS: "3.0",
 // //       Cambridge: "KET/PET Pass (120-139)",
 // //       TOEFL: "20 - 31",
 // //     },
 // //     {
 // //       level: "Upper Elementary",
 // //       CEFR: "B1",
 // //       IELTS: "4.0",
 // //       Cambridge: "PET (140 - 148)",
 // //       TOEFL: "32 - 38",
 // //     },
 // //     {
 // //       level: "Lower Intermediate",
 // //       CEFR: "B1+",
 // //       IELTS: "5.0",
 // //       Cambridge: "PET (150 - 159)",
 // //       TOEFL: "39 - 45",
 // //     },
 // //     {
 // //       level: "Upper Intermediate",
 // //       CEFR: "B2",
 // //       IELTS: "6.0",
 // //       Cambridge: "FCE (160 - 169)",
 // //       TOEFL: "46 - 70",
 // //     },
 // //     {
 // //       level: "Lower Advanced",
 // //       CEFR: "B2+",
 // //       IELTS: "6.5",
 // //       Cambridge: "FCE (170 - 179)",
 // //       TOEFL: "71 - 83",
 // //     },
 // //     {
 // //       level: "Upper Advanced",
 // //       CEFR: "C1",
 // //       IELTS: "7.0",
 // //       Cambridge: "CAE (180 - 189)",
 // //       TOEFL: "94 - 101",
 // //     },
 // //     {
 // //       level: "Fluent",
 // //       CEFR: "C1+",
 // //       IELTS: "7.5",
 // //       Cambridge: "CAE (190 - 199)",
 // //       TOEFL: "102 - 114",
 // //     },
 // //     {
 // //       level: "Proficient",
 // //       CEFR: "C2",
 // //       IELTS: "8.0",
 // //       Cambridge: "CPE (200 - 219)",
 // //       TOEFL: "115 - 117",
 // //     },
 // //     {
 // //       level: "Expert (near-native)",
 // //       CEFR: "C2+",
 // //       IELTS: "9.0",
 // //       Cambridge: "CPE (220 - 230)",
 // //       TOEFL: "118 - 120",
 // //     },
 // //   ];
 // //   return (
 // //     <>
 // //       {/* ---------------- Table Section ---------------- */}
 // //       <section className="bg-white py-20">
 // //         <div className="max-w-5xl mx-auto px-4">
 // //           <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
 // //             VirHom's ranks in the framework of international tests
 // //           </h2>
 // //           <div className="overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md">
 // //             <table className="w-full text-center border-collapse">
 // //               <thead>
 // //                 <tr className="bg-[#E8F3FC] border-b border-blue-300">
 // //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 // //                     VirHom level
 // //                   </th>
 // //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 // //                     CEFR
 // //                   </th>
 // //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 // //                     IELTS
 // //                   </th>
 // //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 // //                     Cambridge
 // //                   </th>
 // //                   <th className="p-3 text-sm font-semibold text-gray-800">
 // //                     TOEFL iBT
 // //                   </th>
 // //                 </tr>
 // //               </thead>
 // //               <tbody>
 // //                 {levels.map((row, i) => (
 // //                   <tr
 // //                     key={i}
 // //                     className={`text-gray-700 text-sm ${
 // //                       i % 2 === 0 ? "bg-gray-50" : "bg-white"
 // //                     } hover:bg-blue-50 transition`}
 // //                   >
 // //                     <td className="p-3 border border-gray-200">{row.level}</td>
 // //                     <td className="p-3 border border-gray-200">{row.CEFR}</td>
 // //                     <td className="p-3 border border-gray-200">{row.IELTS}</td>
 // //                     <td className="p-3 border border-gray-200">
 // //                       {row.Cambridge}
 // //                     </td>
 // //                     <td className="p-3 border border-gray-200">{row.TOEFL}</td>
 // //                   </tr>
 // //                 ))}
 // //               </tbody>
 // //             </table>
 // //           </div>
 // //           <div className="mt-6 text-sm text-gray-600">
 // //             <p className="mt-2">
 // //               * The Common European Framework of Reference for Languages{" "}
 // //               <a
 // //                 href="#"
 // //                 className="text-[#207FC5] hover:underline font-medium"
 // //               >
 // //                 (CEFR)
 // //               </a>
 // //             </p>
 // //             <p className="mt-1">
 // //               ** Cambridge English Scales: KET: Key, PET: Preliminary, FCE:
 // //               First, CAE: Advanced, CPE: Proficiency
 // //             </p>
 // //           </div>
 // //         </div>
 // //       </section>
 // //       {/* ---------------- Beginner Section ---------------- */}
 // //       <section className="bg-[#1E5373] text-white py-12 md:py-20">
 // //         {/* Tabs */}
 // //         <div className="flex justify-center flex-wrap gap-1 mb-8">
 // //           {[
 // //             "Beginner (A1)",
 // //             "Elementary (A2)",
 // //             "Intermediate (B1-B2)",
 // //             "Advanced (C1)",
 // //             "Fluent (C1+)",
 // //             "Proficient (C2)",
 // //             "Expert (Near Native) (C2+)",
 // //           ].map((tab, i) => (
 // //             <button
 // //               key={i}
 // //               className={`text-xs md:text-sm px-3 py-2 font-medium ${
 // //                 i === 0
 // //                   ? "bg-[#207FC5] text-white"
 // //                   : "bg-[#F2F2F2] text-[#333]"
 // //               } rounded-t-md`}
 // //             >
 // //               {tab}
 // //             </button>
 // //           ))}
 // //         </div>
 // //         {/* Content */}
 // //         <div className="max-w-4xl mx-auto text-center px-6">
 // //           <h2 className="text-xl md:text-2xl font-semibold mb-6">
 // //             Beginner (A1)
 // //           </h2>
 // //           <div className="flex justify-center mb-6">
 // //             <div className="bg-white/10 p-3 rounded-md">
 // //               <GraduationCap size={36} className="text-white" />
 // //             </div>
 // //           </div>
 // //           <div className="text-sm md:text-base leading-relaxed space-y-6">
 // //             <div>
 // //               <h3 className="font-semibold mb-2">Your abilities</h3>
 // //               <p className="text-gray-100 max-w-2xl mx-auto">
 // //                 You understand and can use some basic English phrases to say
 // //                 hello, goodbye, thank you, etc. You can also say a few things
 // //                 about yourself (name, nationality, age, possessions), but you
 // //                 are not able to understand or engage in a conversation or any
 // //                 form of written exchange.
 // //               </p>
 // //             </div>
 // //             <div>
 // //               <h3 className="font-semibold mb-2">Your goals</h3>
 // //               <p className="text-gray-100 max-w-2xl mx-auto">
 // //                 Your goals working through this level are to:
 // //               </p>
 // //               <ul className="text-gray-100 text-sm md:text-base list-decimal list-inside mt-2 space-y-1 max-w-2xl mx-auto text-left">
 // //                 <li>
 // //                   Learn the basic structure and the most common daily vocabulary
 // //                   and phrases.
 // //                 </li>
 // //                 <li>
 // //                   Open your ears to English sounds and rhythm by hearing English
 // //                   in the background (without trying to understand anything).
 // //                 </li>
 // //               </ul>
 // //             </div>
 // //           </div>
 // //         </div>
 // //       </section>
 // //     </>
 // //   );
 // // }
 // "use client";
 // import React, { useState } from "react";
 // import { GraduationCap } from "lucide-react";
 // export default function Page() {
 //   const levels = [
 //     {
 //       tab: "Beginner (A1)",
 //       title: "Beginner (A1)",
 //       abilities:
 //         "You understand and can use some basic English phrases to say hello, goodbye, thank you, etc. You can also say a few things about yourself (name, nationality, age, possessions), but you are not able to understand or engage in a conversation or any form of written exchange.",
 //       goals: [
 //         "Learn the basic structure and the most common daily vocabulary and phrases.",
 //         "Open your ears to English sounds and rhythm by hearing English in the background (without trying to understand anything).",
 //       ],
 //       bg: "#1E5373",
 //     },
 //     {
 //       tab: "Elementary (A2)",
 //       title: "Elementary (A2)",
 //       abilities:
 //         "You can understand frequently used expressions and communicate in simple tasks requiring a direct exchange of information. You can describe your background and immediate environment.",
 //       goals: [
 //         "Expand your vocabulary and improve your pronunciation.",
 //         "Understand short phrases and simple sentences used in daily life.",
 //       ],
 //       bg: "#1E5373",
 //     },
 //     {
 //       tab: "Intermediate (B1-B2)",
 //       title: "Intermediate (B1-B2)",
 //       abilities:
 //         "You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, and leisure.",
 //       goals: [
 //         "Learn to express opinions, agree/disagree, and describe events clearly.",
 //         "Start reading and listening to English media for comprehension.",
 //       ],
 //       bg: "#1E5373",
 //     },
 //     {
 //       tab: "Advanced (C1)",
 //       title: "Advanced (C1)",
 //       abilities:
 //         "You can express yourself fluently and spontaneously without much obvious searching for expressions. You use language flexibly for social, academic, and professional purposes.",
 //       goals: [
 //         "Improve advanced grammar and idiomatic expressions.",
 //         "Work on writing essays and formal correspondence.",
 //       ],
 //       bg: "#1E5373",
 //     },
 //     {
 //       tab: "Fluent (C1+)",
 //       title: "Fluent (C1+)",
 //       abilities:
 //         "You can understand demanding texts and recognize implicit meaning. You can express ideas fluently and use language effectively for professional purposes.",
 //       goals: [
 //         "Refine your accent and vocabulary range.",
 //         "Engage in debates and discussions on complex topics.",
 //       ],
 //       bg: "#1E5373",
 //     },
 //     {
 //       tab: "Proficient (C2)",
 //       title: "Proficient (C2)",
 //       abilities:
 //         "You can understand practically everything you hear or read and express yourself spontaneously, fluently, and precisely.",
 //       goals: [
 //         "Perfect your understanding of cultural nuances in communication.",
 //         "Write and speak with precision and natural flow.",
 //       ],
 //       bg: "#1E5373",
 //     },
 //     {
 //       tab: "Expert (Near Native) (C2+)",
 //       title: "Expert (Near Native) (C2+)",
 //       abilities:
 //         "You have a level of English comparable to that of a well-educated native speaker.",
 //       goals: [
 //         "Master stylistic variety and cultural references in all contexts.",
 //         "Communicate effortlessly with full natural fluency.",
 //       ],
 //       bg: "#1E5373",
 //     },
 //   ];
 //   const [activeTab, setActiveTab] = useState(0);
 //   return (
 //     <>
 //       {/* ---------- Table Section ---------- */}
 //       <section className="bg-white py-20 relative">
 //         <div className="max-w-5xl mx-auto px-4">
 //           <h2 className="text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10">
 //             VirHom's ranks in the framework of international tests
 //           </h2>
 //           {/* Table */}
 //           <div className="overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md mb-20">
 //             <table className="w-full text-center border-collapse">
 //               <thead>
 //                 <tr className="bg-[#E8F3FC] border-b border-blue-300">
 //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 //                     VirHom level
 //                   </th>
 //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 //                     CEFR
 //                   </th>
 //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 //                     IELTS
 //                   </th>
 //                   <th className="p-3 text-sm font-semibold text-gray-800 border-r border-blue-300">
 //                     Cambridge
 //                   </th>
 //                   <th className="p-3 text-sm font-semibold text-gray-800">
 //                     TOEFL iBT
 //                   </th>
 //                 </tr>
 //               </thead>
 //               <tbody>
 //                 {levels.map((row, i) => (
 //                   <tr
 //                     key={i}
 //                     className={`text-gray-700 text-sm ${
 //                       i % 2 === 0 ? "bg-gray-50" : "bg-white"
 //                     } hover:bg-blue-50 transition`}
 //                   >
 //                     <td className="p-3 border border-gray-200">{row.title}</td>
 //                     <td className="p-3 border border-gray-200">
 //                       {row.tab.match(/\(([^)]+)\)/)?.[1] || ""}
 //                     </td>
 //                     <td className="p-3 border border-gray-200">–</td>
 //                     <td className="p-3 border border-gray-200">–</td>
 //                     <td className="p-3 border border-gray-200">–</td>
 //                   </tr>
 //                 ))}
 //               </tbody>
 //             </table>
 //           </div>
 //           {/* Notes */}
 //           <div className="mt-6 text-sm text-gray-600">
 //             <p className="mt-2">
 //               * The Common European Framework of Reference for Languages{" "}
 //               <a
 //                 href="#"
 //                 className="text-[#207FC5] hover:underline font-medium"
 //               >
 //                 (CEFR)
 //               </a>
 //             </p>
 //             <p className="mt-1">
 //               ** Cambridge English Scales: KET: Key, PET: Preliminary, FCE:
 //               First, CAE: Advanced, CPE: Proficiency
 //             </p>
 //           </div>
 //         </div>
 //         {/* Tabs overlapping between white and blue section */}
 //         <div className="absolute left-1/2 -bottom-[24px] transform -translate-x-1/2 z-20 flex flex-wrap justify-center bg-transparent">
 //           {levels.map((level, i) => (
 //             <button
 //               key={i}
 //               onClick={() => setActiveTab(i)}
 //               className={`text-xs md:text-sm px-3 py-2 font-medium border-t-2 border-x border-b-0 transition ${
 //                 activeTab === i
 //                   ? "bg-[#207FC5] text-white border-[#207FC5]"
 //                   : "bg-[#E8F3FC] text-[#333] border-[#C8E0F5] hover:bg-[#207FC5]/90 hover:text-white"
 //               }`}
 //             >
 //               {level.tab}
 //             </button>
 //           ))}
 //         </div>
 //       </section>
 //       {/* ---------- Dynamic Blue Section ---------- */}
 //       <section
 //         className="text-white py-16 md:py-20 relative z-10"
 //         style={{ backgroundColor: levels[activeTab].bg }}
 //       >
 //         <div className="max-w-4xl mx-auto text-center px-6">
 //           <h2 className="text-xl md:text-2xl font-semibold mb-6">
 //             {levels[activeTab].title}
 //           </h2>
 //           <div className="flex justify-center mb-6">
 //             <div className="bg-white/10 p-3 rounded-md">
 //               <GraduationCap size={36} className="text-white" />
 //             </div>
 //           </div>
 //           <div className="text-sm md:text-base leading-relaxed space-y-6">
 //             <div>
 //               <h3 className="font-semibold mb-2">Your abilities</h3>
 //               <p className="text-gray-100 max-w-2xl mx-auto">
 //                 {levels[activeTab].abilities}
 //               </p>
 //             </div>
 //             <div>
 //               <h3 className="font-semibold mb-2">Your goals</h3>
 //               <p className="text-gray-100 max-w-2xl mx-auto">
 //                 Your goals working through this level are to:
 //               </p>
 //               <ul className="text-gray-100 text-sm md:text-base list-decimal list-inside mt-2 space-y-1 max-w-2xl mx-auto text-left">
 //                 {levels[activeTab].goals.map((goal, i) => (
 //                   <li key={i}>{goal}</li>
 //                 ))}
 //               </ul>
 //             </div>
 //           </div>
 //         </div>
 //       </section>
 //     </>
 //   );
 // }
_s1(Page, "9RTnV4k8xQ8Z7mmUeyiKoXdA+A8=");
_c1 = Page;
var _c, _c1;
__turbopack_context__.k.register(_c, "FadeInView");
__turbopack_context__.k.register(_c1, "Page");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>GraduationCap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
            key: "j76jl0"
        }
    ],
    [
        "path",
        {
            d: "M22 10v6",
            key: "1lu8f3"
        }
    ],
    [
        "path",
        {
            d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5",
            key: "1r8lef"
        }
    ]
];
const GraduationCap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("graduation-cap", __iconNode);
;
 //# sourceMappingURL=graduation-cap.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GraduationCap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    ()=>TrendingUp
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M16 7h6v6",
            key: "box55l"
        }
    ],
    [
        "path",
        {
            d: "m22 7-8.5 8.5-5-5L2 17",
            key: "1t1m79"
        }
    ]
];
const TrendingUp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("trending-up", __iconNode);
;
 //# sourceMappingURL=trending-up.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TrendingUp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript)");
}),
]);

//# sourceMappingURL=_8db59690._.js.map