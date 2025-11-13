(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/dashboard/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Dashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next-auth/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function Dashboard() {
    _s();
    const { data: session, status, update } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"])(); // 👈 include update()
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    console.log("Dashboard session:", session);
    // ✅ Immediately refresh session after login
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (status === "authenticated" && !session?.backendUser) {
                // Force call to /api/auth/session
                update();
            }
        }
    }["Dashboard.useEffect"], [
        status,
        session,
        update
    ]);
    // ✅ Redirect unauthenticated users
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Dashboard.useEffect": ()=>{
            if (status === "loading") return;
            if (!session) {
                router.push("/login");
                return;
            }
            if (session?.backendUser) {
                setIsLoading(false);
            } else {
                const timer = setTimeout({
                    "Dashboard.useEffect.timer": ()=>setIsLoading(false)
                }["Dashboard.useEffect.timer"], 1000);
                return ({
                    "Dashboard.useEffect": ()=>clearTimeout(timer)
                })["Dashboard.useEffect"];
            }
        }
    }["Dashboard.useEffect"], [
        session,
        status,
        router
    ]);
    // ✅ Handle loading states
    if (status === "loading" || isLoading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-[#fffbeb] flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-[#A27B5C] mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 44,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-[#6B4F4F]",
                        children: "Loading your dashboard..."
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 45,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 43,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.js",
            lineNumber: 42,
            columnNumber: 7
        }, this);
    }
    if (!session) return null;
    const backendUser = session?.backendUser;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-[#fffbeb] p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "max-w-4xl mx-auto",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-xl shadow-lg p-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl font-bold text-[#3E2723] mb-6",
                        children: "Dashboard"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    backendUser ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-[#FFFDF6] border border-[#E9DCCF] rounded-lg p-6 mb-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-semibold text-[#6B4F4F] mb-4",
                                children: "User Information"
                            }, void 0, false, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 63,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Name:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 65,
                                                columnNumber: 20
                                            }, this),
                                            " ",
                                            backendUser.name
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 65,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Email:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 66,
                                                columnNumber: 20
                                            }, this),
                                            " ",
                                            backendUser.email
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 66,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                children: "Role:"
                                            }, void 0, false, {
                                                fileName: "[project]/app/dashboard/page.js",
                                                lineNumber: 67,
                                                columnNumber: 20
                                            }, this),
                                            " ",
                                            backendUser.role
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 67,
                                        columnNumber: 17
                                    }, this),
                                    backendUser.profileImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: backendUser.profileImage,
                                        alt: "Profile Image",
                                        width: 100,
                                        height: 100,
                                        className: "rounded-full mt-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/dashboard/page.js",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/dashboard/page.js",
                                lineNumber: 64,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 62,
                        columnNumber: 13
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-yellow-800",
                            children: "User data is still loading. If this persists, please try refreshing the page."
                        }, void 0, false, {
                            fileName: "[project]/app/dashboard/page.js",
                            lineNumber: 81,
                            columnNumber: 15
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 80,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["signOut"])({
                                callbackUrl: "/login"
                            }),
                        className: "bg-[#6B4F4F] text-white px-6 py-2 rounded-md hover:bg-[#5A4038] transition-colors",
                        children: "Sign Out"
                    }, void 0, false, {
                        fileName: "[project]/app/dashboard/page.js",
                        lineNumber: 87,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/dashboard/page.js",
                lineNumber: 58,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/dashboard/page.js",
            lineNumber: 57,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/dashboard/page.js",
        lineNumber: 56,
        columnNumber: 5
    }, this);
} // "use client";
 // import { useSession, signOut } from "next-auth/react";
 // import { useRouter } from "next/navigation";
 // import { useEffect, useState } from "react";
 // import Image from "next/image";
 // export default function Dashboard() {
 //   const { data: session, status } = useSession();
 //   const router = useRouter();
 //   const [isLoading, setIsLoading] = useState(true);
 //   // ✅ Redirect unauthenticated users
 //   useEffect(() => {
 //     if (status === "loading") return;
 //     if (!session) {
 //       router.push("/login");
 //       return;
 //     }
 //     // ✅ Wait for backendUser data to be available
 //     if (session?.backendUser) {
 //       setIsLoading(false);
 //     } else {
 //       // If backendUser is not available yet, wait a bit
 //       const timer = setTimeout(() => {
 //         setIsLoading(false);
 //       }, 1000);
 //       return () => clearTimeout(timer);
 //     }
 //   }, [session, status, router]);
 //   // ✅ Handle loading states
 //   if (status === "loading" || isLoading) {
 //     return (
 //       <div className="min-h-screen bg-[#fffbeb] flex items-center justify-center">
 //         <div className="text-center">
 //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A27B5C] mx-auto"></div>
 //           <p className="mt-4 text-[#6B4F4F]">Loading your dashboard...</p>
 //         </div>
 //       </div>
 //     );
 //   }
 //   // ✅ Handle unauthenticated
 //   if (!session) {
 //     return null;
 //   }
 //   const backendUser = session?.backendUser;
 //   return (
 //     <div className="min-h-screen bg-[#fffbeb] p-8">
 //       <div className="max-w-4xl mx-auto">
 //         <div className="bg-white rounded-xl shadow-lg p-8">
 //           <h1 className="text-3xl font-bold text-[#3E2723] mb-6">Dashboard</h1>
 //           {backendUser ? (
 //             <div className="bg-[#FFFDF6] border border-[#E9DCCF] rounded-lg p-6 mb-6">
 //               <h2 className="text-xl font-semibold text-[#6B4F4F] mb-4">
 //                 User Information
 //               </h2>
 //               <div className="space-y-2">
 //                 <p>
 //                   <strong>Name:</strong> {backendUser.name}
 //                 </p>
 //                 <p>
 //                   <strong>Email:</strong> {backendUser.email}
 //                 </p>
 //                 <p>
 //                   <strong>Role:</strong> {backendUser.role}
 //                 </p>
 //                 {backendUser.profileImage && (
 //                   <Image
 //                     src={backendUser.profileImage}
 //                     alt="Profile Image"
 //                     width={100}
 //                     height={100}
 //                     className="rounded-full mt-4"
 //                   />
 //                 )}
 //               </div>
 //             </div>
 //           ) : (
 //             <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
 //               <p className="text-yellow-800">
 //                 User data is still loading. If this persists, please try refreshing the page.
 //               </p>
 //             </div>
 //           )}
 //           <button
 //             onClick={() => signOut({ callbackUrl: "/login" })}
 //             className="bg-[#6B4F4F] text-white px-6 py-2 rounded-md hover:bg-[#5A4038] transition-colors"
 //           >
 //             Sign Out
 //           </button>
 //         </div>
 //       </div>
 //     </div>
 //   );
 // }
_s(Dashboard, "zSZyMuioQ1RJRIWs9mMc2KkH0Lk=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2d$auth$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSession"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Dashboard;
var _c;
__turbopack_context__.k.register(_c, "Dashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_dashboard_page_00148990.js.map