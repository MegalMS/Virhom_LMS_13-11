(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/StudyToolsSection.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudyToolsSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
;
function StudyToolsSection({ title, description, image }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative w-full py-24 flex flex-col items-center justify-center overflow-hidden",
        style: {
            background: "linear-gradient(180deg, #7B68EE 0%, #4169E1 100%)"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 bg-gradient-to-br from-[#7B68EE]/40 via-transparent to-[#4169E1]/40"
            }, void 0, false, {
                fileName: "[project]/src/components/StudyToolsSection.js",
                lineNumber: 12,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 text-center px-6 max-w-5xl mx-auto",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-lg",
                        style: {
                            color: "#FFFFFF"
                        },
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/src/components/StudyToolsSection.js",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed font-medium",
                        style: {
                            color: "#FFFFFF",
                            opacity: 0.9
                        },
                        children: description
                    }, void 0, false, {
                        fileName: "[project]/src/components/StudyToolsSection.js",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/StudyToolsSection.js",
                lineNumber: 15,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-[3px] rounded-full",
                style: {
                    background: "linear-gradient(90deg, #7B68EE 0%, #FFFFFF 50%, #4169E1 100%)"
                }
            }, void 0, false, {
                fileName: "[project]/src/components/StudyToolsSection.js",
                lineNumber: 52,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/StudyToolsSection.js",
        lineNumber: 5,
        columnNumber: 5
    }, this);
} // import Image from "next/image";
 // export default function StudyToolsSection({ title, description, image }) {
 //   return (
 //     <section className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
 //       {/* Background Image */}
 //       {/* <Image
 //         src={image || "/default-bg.jpg"} // fallback image
 //         alt={title}
 //         fill
 //         priority
 //         className="object-cover brightness-90"
 //       /> */}
 //       {/* Overlay with brown tint */}
 //       <div className="absolute inset-0 bg-gradient-to-t from-[#926F59]/80 via-[#A27B5C]/40 to-transparent" />
 //       {/* Content */}
 //       <div className="relative z-10 text-center px-6">
 //         <h1 className="text-4xl md:text-6xl font-bold text-[#926F59] drop-shadow-md mb-4">
 //           {title}
 //         </h1>
 //         {description && (
 //           <p className="text-lg font-bold md:text-xl text-[#705350] max-w-3xl mx-auto">
 //             {description}
 //           </p>
 //         )}
 //       </div>
 //     </section>
 //   );
 // }
_c = StudyToolsSection;
var _c;
__turbopack_context__.k.register(_c, "StudyToolsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/studyToolsData.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "studyToolsData",
    ()=>studyToolsData
]);
const studyToolsData = {
    'features': {
        title: 'Study Material',
        description: 'Access comprehensive study materials designed to help you master English. Our curated resources cover all levels and topics to support your learning journey with quality content and interactive exercises.',
        image: '/study.png'
    },
    'study-material': {
        title: 'Study Material',
        description: 'Access comprehensive study materials designed to help you master English. Our curated resources cover all levels and topics to support your learning journey with quality content and interactive exercises.',
        image: '/study.png'
    },
    'practice-material': {
        title: 'Practice Material',
        description: 'Practice makes perfect! Work through hundreds of exercises and questions to strengthen your English skills. Get detailed feedback on every attempt and track your progress.',
        image: '/study.png'
    },
    'study-tools': {
        title: 'Study Tools',
        description: 'Use our powerful study tools to enhance your learning experience. From flashcards to note-taking, we have everything you need to succeed in your English learning.',
        image: '/study.png'
    },
    'progress-tracking': {
        title: 'Progress Tracking',
        description: 'Monitor your learning journey with detailed analytics and progress reports. See exactly how much you\'ve improved and identify areas for further development.',
        image: '/study.png'
    },
    'one-to-one-lessons': {
        title: 'One-to-One Lessons',
        description: 'Get personalized instruction from expert tutors. Our one-to-one lessons are tailored to your specific needs and learning style for maximum effectiveness.',
        image: '/study.png'
    },
    'video-lessons': {
        title: 'Video Lessons',
        description: 'Learn from engaging video tutorials. Our video lessons break down complex concepts into easy-to-understand segments with clear explanations and examples.',
        image: '/study.png'
    },
    'voice-recognition': {
        title: 'Voice Recognition',
        description: 'Improve your pronunciation with our AI-powered voice recognition technology. Get instant feedback on your speaking and work towards perfect pronunciation.',
        image: '/study.png'
    },
    'offline-study': {
        title: 'Offline Study',
        description: 'Study anytime, anywhere without internet. Download your materials and continue learning on the go with full functionality offline.',
        image: '/study.png'
    },
    'reward-system': {
        title: 'Reward System',
        description: 'Earn badges, points, and rewards as you progress. Our gamified learning system keeps you motivated and engaged throughout your learning journey.',
        image: '/study.png'
    },
    'support-system': {
        title: 'Support System',
        description: 'Get help whenever you need it. Our dedicated support team is available 24/7 to answer your questions and provide assistance.',
        image: '/study.png'
    }
}; // export const studyToolsData = {
 //     'features': {
 //     title: 'Study Material',
 //     description: 'Access comprehensive study materials designed to help you master English. Our curated resources cover all levels and topics to support your learning journey with quality content and interactive exercises.',
 //     image: '/study.png',
 //   },
 //   'study-material': {
 //     title: 'Study Material',
 //     description: 'Access comprehensive study materials designed to help you master English. Our curated resources cover all levels and topics to support your learning journey with quality content and interactive exercises.',
 //     image: '/study.png',
 //   },
 //   'practice-material': {
 //     title: 'Practice Material',
 //     description: 'Practice makes perfect! Work through hundreds of exercises and questions to strengthen your English skills. Get detailed feedback on every attempt and track your progress.',
 //     image: '/study.png',
 //   },
 //   'study-tools': {
 //     title: 'Study Tools',
 //     description: 'Use our powerful study tools to enhance your learning experience. From flashcards to note-taking, we have everything you need to succeed in your English learning.',
 //     image: '/study.png',
 //   },
 //   'progress-tracking': {
 //     title: 'Progress Tracking',
 //     description: 'Monitor your learning journey with detailed analytics and progress reports. See exactly how much you\'ve improved and identify areas for further development.',
 //     image: '/study.png',
 //   },
 //   'one-to-one-lessons': {
 //     title: 'One-to-One Lessons',
 //     description: 'Get personalized instruction from expert tutors. Our one-to-one lessons are tailored to your specific needs and learning style for maximum effectiveness.',
 //     image: '/study.png',
 //   },
 //   'video-lessons': {
 //     title: 'Video Lessons',
 //     description: 'Learn from engaging video tutorials. Our video lessons break down complex concepts into easy-to-understand segments with clear explanations and examples.',
 //     image: '/study.png',
 //   },
 //   'voice-recognition': {
 //     title: 'Voice Recognition',
 //     description: 'Improve your pronunciation with our AI-powered voice recognition technology. Get instant feedback on your speaking and work towards perfect pronunciation.',
 //     image: '/study.png',
 //   },
 //   'offline-study': {
 //     title: 'Offline Study',
 //     description: 'Study anytime, anywhere without internet. Download your materials and continue learning on the go with full functionality offline.',
 //     image: '/study.png',
 //   },
 //   'reward-system': {
 //     title: 'Reward System',
 //     description: 'Earn badges, points, and rewards as you progress. Our gamified learning system keeps you motivated and engaged throughout your learning journey.',
 //     image: '/study.png',
 //   },
 //   'support-system': {
 //     title: 'Support System',
 //     description: 'Get help whenever you need it. Our dedicated support team is available 24/7 to answer your questions and provide assistance.',
 //     image: '/study.png',
 //   },
 // };
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/features/support-system/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SupportFromMinooPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StudyToolsSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/StudyToolsSection.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$studyToolsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/studyToolsData.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
/* ────────────────────── Reusable Helpers ────────────────────── */ const CHECK_ICON = "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";
// ✅ Unified heading style
function Heading({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
        className: "relative font-semibold text-2xl md:text-3xl leading-[1.3] mb-6 inline-block pb-2",
        style: {
            color: "#4169E1",
            borderBottom: "3px solid #4169E1",
            fontFamily: "Montserrat, sans-serif"
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/features/support-system/page.js",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = Heading;
// ✅ Reusable check item
function CheckItem({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-3 text-gray-700",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: CHECK_ICON,
                alt: "check",
                className: "w-5 h-5 mt-1 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/app/features/support-system/page.js",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "leading-relaxed text-[16px] md:text-[17px]",
                children: children
            }, void 0, false, {
                fileName: "[project]/app/features/support-system/page.js",
                lineNumber: 37,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/features/support-system/page.js",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c1 = CheckItem;
function SupportFromMinooPage() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const slug = pathname.split("/").pop();
    const toolData = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$studyToolsData$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["studyToolsData"][slug];
    if (!toolData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "text-center mt-10 text-red-500 text-lg font-Montserrat",
            children: "404 - Not Found"
        }, void 0, false, {
            fileName: "[project]/app/features/support-system/page.js",
            lineNumber: 50,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen",
        style: {
            fontFamily: "Montserrat, sans-serif",
            color: "#333333"
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$StudyToolsSection$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: toolData.title,
                description: toolData.description,
                image: toolData.image
            }, void 0, false, {
                fileName: "[project]/app/features/support-system/page.js",
                lineNumber: 65,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "py-20 flex justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl w-full px-6 md:px-10 text-left bg-white p-10 rounded-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                            children: "Support from Minoo"
                        }, void 0, false, {
                            fileName: "[project]/app/features/support-system/page.js",
                            lineNumber: 74,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "leading-relaxed text-[16px] md:text-[17px] mb-4",
                            children: "Send Minoo any questions you have about the programme or about the English language. You can do this:"
                        }, void 0, false, {
                            fileName: "[project]/app/features/support-system/page.js",
                            lineNumber: 76,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "list-none pl-0 space-y-3 mb-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                    children: "By posting your question in the Students' Forum"
                                }, void 0, false, {
                                    fileName: "[project]/app/features/support-system/page.js",
                                    lineNumber: 82,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                    children: "By messaging Minoo directly from your course dashboard"
                                }, void 0, false, {
                                    fileName: "[project]/app/features/support-system/page.js",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                    children: "By opening a 'Teacher Support' ticket"
                                }, void 0, false, {
                                    fileName: "[project]/app/features/support-system/page.js",
                                    lineNumber: 84,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/features/support-system/page.js",
                            lineNumber: 81,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "leading-relaxed text-[16px] md:text-[17px] mb-6",
                            children: "Join Minoo’s weekly LIVE workshops and Q&A sessions to actively revise and practise the course materials with her and with your peers."
                        }, void 0, false, {
                            fileName: "[project]/app/features/support-system/page.js",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "leading-relaxed text-[16px] md:text-[17px] mb-10",
                            children: "Book one-to-one sessions with Minoo for your specific needs, such as improving your pronunciation, confidence training, presentation or job interview practice, or exam preparation (IELTS, TOEFL)."
                        }, void 0, false, {
                            fileName: "[project]/app/features/support-system/page.js",
                            lineNumber: 92,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                            children: "Technical / Sales Support"
                        }, void 0, false, {
                            fileName: "[project]/app/features/support-system/page.js",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "leading-relaxed text-[16px] md:text-[17px] mb-8",
                            children: "If you have any questions about the features, or if you need help using the platform, you are welcome to open a ticket for the technical or sales team."
                        }, void 0, false, {
                            fileName: "[project]/app/features/support-system/page.js",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-10",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/features",
                                className: "inline-flex items-center font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl",
                                style: {
                                    backgroundColor: "#4169E1",
                                    color: "#FFFFFF"
                                },
                                onMouseEnter: (e)=>e.currentTarget.style.backgroundColor = "#7B68EE",
                                onMouseLeave: (e)=>e.currentTarget.style.backgroundColor = "#4169E1",
                                children: [
                                    "View all features",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        className: "ml-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
                                            fill: "currentColor"
                                        }, void 0, false, {
                                            fileName: "[project]/app/features/support-system/page.js",
                                            lineNumber: 131,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/support-system/page.js",
                                        lineNumber: 124,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/features/support-system/page.js",
                                lineNumber: 109,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/features/support-system/page.js",
                            lineNumber: 108,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/features/support-system/page.js",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/features/support-system/page.js",
                lineNumber: 72,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/features/support-system/page.js",
        lineNumber: 57,
        columnNumber: 5
    }, this);
}
_s(SupportFromMinooPage, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c2 = SupportFromMinooPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Heading");
__turbopack_context__.k.register(_c1, "CheckItem");
__turbopack_context__.k.register(_c2, "SupportFromMinooPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_7584bbb1._.js.map