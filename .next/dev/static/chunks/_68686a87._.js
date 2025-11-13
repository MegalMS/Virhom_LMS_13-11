(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/level-guide/page.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// // // "use client";
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
__turbopack_context__.s([
    "default",
    ()=>Page
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/graduation-cap.js [app-client] (ecmascript) <export default as GraduationCap>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function Page() {
    _s();
    const levels = [
        {
            tab: "Beginner (A1)",
            title: "Beginner (A1)",
            abilities: "You understand and can use some basic English phrases to say hello, goodbye, thank you, etc. You can also say a few things about yourself (name, nationality, age, possessions), but you are not able to understand or engage in a conversation or any form of written exchange.",
            goals: [
                "Learn the basic structure and the most common daily vocabulary and phrases.",
                "Open your ears to English sounds and rhythm by hearing English in the background (without trying to understand anything)."
            ],
            bg: "#1E5373"
        },
        {
            tab: "Elementary (A2)",
            title: "Elementary (A2)",
            abilities: "You can understand frequently used expressions and communicate in simple tasks requiring a direct exchange of information. You can describe your background and immediate environment.",
            goals: [
                "Expand your vocabulary and improve your pronunciation.",
                "Understand short phrases and simple sentences used in daily life."
            ],
            bg: "#1E5373"
        },
        {
            tab: "Intermediate (B1-B2)",
            title: "Intermediate (B1-B2)",
            abilities: "You can understand the main points of clear standard input on familiar matters regularly encountered in work, school, and leisure.",
            goals: [
                "Learn to express opinions, agree/disagree, and describe events clearly.",
                "Start reading and listening to English media for comprehension."
            ],
            bg: "#1E5373"
        },
        {
            tab: "Advanced (C1)",
            title: "Advanced (C1)",
            abilities: "You can express yourself fluently and spontaneously without much obvious searching for expressions. You use language flexibly for social, academic, and professional purposes.",
            goals: [
                "Improve advanced grammar and idiomatic expressions.",
                "Work on writing essays and formal correspondence."
            ],
            bg: "#1E5373"
        },
        {
            tab: "Fluent (C1+)",
            title: "Fluent (C1+)",
            abilities: "You can understand demanding texts and recognize implicit meaning. You can express ideas fluently and use language effectively for professional purposes.",
            goals: [
                "Refine your accent and vocabulary range.",
                "Engage in debates and discussions on complex topics."
            ],
            bg: "#1E5373"
        },
        {
            tab: "Proficient (C2)",
            title: "Proficient (C2)",
            abilities: "You can understand practically everything you hear or read and express yourself spontaneously, fluently, and precisely.",
            goals: [
                "Perfect your understanding of cultural nuances in communication.",
                "Write and speak with precision and natural flow."
            ],
            bg: "#1E5373"
        },
        {
            tab: "Expert (Near Native) (C2+)",
            title: "Expert (Near Native) (C2+)",
            abilities: "You have a level of English comparable to that of a well-educated native speaker.",
            goals: [
                "Master stylistic variety and cultural references in all contexts.",
                "Communicate effortlessly with full natural fluency."
            ],
            bg: "#1E5373"
        }
    ];
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "bg-white py-20 relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-5xl mx-auto px-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-center text-2xl md:text-3xl font-semibold text-gray-800 mb-10",
                                children: "VirHom's ranks in the framework of international tests"
                            }, void 0, false, {
                                fileName: "[project]/app/level-guide/page.js",
                                lineNumber: 703,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "overflow-x-auto shadow-[0_0_8px_rgba(0,0,0,0.1)] rounded-md mb-20",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                                    className: "w-full text-center border-collapse",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                className: "bg-[#E8F3FC] border-b border-blue-300",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-sm font-semibold text-gray-800 border-r border-blue-300",
                                                        children: "VirHom level"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/level-guide/page.js",
                                                        lineNumber: 712,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-sm font-semibold text-gray-800 border-r border-blue-300",
                                                        children: "CEFR"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/level-guide/page.js",
                                                        lineNumber: 715,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-sm font-semibold text-gray-800 border-r border-blue-300",
                                                        children: "IELTS"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/level-guide/page.js",
                                                        lineNumber: 718,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-sm font-semibold text-gray-800 border-r border-blue-300",
                                                        children: "Cambridge"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/level-guide/page.js",
                                                        lineNumber: 721,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                        className: "p-3 text-sm font-semibold text-gray-800",
                                                        children: "TOEFL iBT"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/level-guide/page.js",
                                                        lineNumber: 724,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/level-guide/page.js",
                                                lineNumber: 711,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 710,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                            children: levels.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                                    className: `text-gray-700 text-sm ${i % 2 === 0 ? "bg-gray-50" : "bg-white"} hover:bg-blue-50 transition`,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 border border-gray-200",
                                                            children: row.title
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 737,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 border border-gray-200",
                                                            children: row.tab.match(/\(([^)]+)\)/)?.[1] || ""
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 738,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 border border-gray-200",
                                                            children: "–"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 741,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 border border-gray-200",
                                                            children: "–"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 742,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                            className: "p-3 border border-gray-200",
                                                            children: "–"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/level-guide/page.js",
                                                            lineNumber: 743,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, i, true, {
                                                    fileName: "[project]/app/level-guide/page.js",
                                                    lineNumber: 731,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 729,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/level-guide/page.js",
                                    lineNumber: 709,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/level-guide/page.js",
                                lineNumber: 708,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-6 text-sm text-gray-600",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-2",
                                        children: [
                                            "* The Common European Framework of Reference for Languages",
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: "#",
                                                className: "text-[#207FC5] hover:underline font-medium",
                                                children: "(CEFR)"
                                            }, void 0, false, {
                                                fileName: "[project]/app/level-guide/page.js",
                                                lineNumber: 754,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/level-guide/page.js",
                                        lineNumber: 752,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-1",
                                        children: "** Cambridge English Scales: KET: Key, PET: Preliminary, FCE: First, CAE: Advanced, CPE: Proficiency"
                                    }, void 0, false, {
                                        fileName: "[project]/app/level-guide/page.js",
                                        lineNumber: 761,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/level-guide/page.js",
                                lineNumber: 751,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/level-guide/page.js",
                        lineNumber: 702,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-1/2 -bottom-6 transform -translate-x-1/2 z-20 whitespace-nowrap overflow-x-auto scrollbar-hide",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center",
                            children: levels.map((level, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setActiveTab(i),
                                    className: `text-xs md:text-sm px-3 py-2 font-medium border-t-2 border-x border-b-0 transition ${activeTab === i ? "bg-[#207FC5] text-white border-[#207FC5]" : "bg-[#E8F3FC] text-[#333] border-[#C8E0F5] hover:bg-[#207FC5]/90 hover:text-white"}`,
                                    children: level.tab
                                }, i, false, {
                                    fileName: "[project]/app/level-guide/page.js",
                                    lineNumber: 772,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/level-guide/page.js",
                            lineNumber: 770,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/level-guide/page.js",
                        lineNumber: 769,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/level-guide/page.js",
                lineNumber: 701,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "text-white py-16 md:py-20 relative z-10",
                style: {
                    backgroundColor: levels[activeTab].bg
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-4xl mx-auto text-center px-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl md:text-2xl font-semibold mb-6",
                            children: levels[activeTab].title
                        }, void 0, false, {
                            fileName: "[project]/app/level-guide/page.js",
                            lineNumber: 794,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-center mb-6",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "bg-white/10 p-3 rounded-md",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$graduation$2d$cap$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GraduationCap$3e$__["GraduationCap"], {
                                    size: 36,
                                    className: "text-white"
                                }, void 0, false, {
                                    fileName: "[project]/app/level-guide/page.js",
                                    lineNumber: 800,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/level-guide/page.js",
                                lineNumber: 799,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/level-guide/page.js",
                            lineNumber: 798,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm md:text-base leading-relaxed space-y-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold mb-2",
                                            children: "Your abilities"
                                        }, void 0, false, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 806,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-100 max-w-2xl mx-auto",
                                            children: levels[activeTab].abilities
                                        }, void 0, false, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 807,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/level-guide/page.js",
                                    lineNumber: 805,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                            className: "font-semibold mb-2",
                                            children: "Your goals"
                                        }, void 0, false, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 813,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-gray-100 max-w-2xl mx-auto",
                                            children: "Your goals working through this level are to:"
                                        }, void 0, false, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 814,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                            className: "text-gray-100 text-sm md:text-base list-decimal list-inside mt-2 space-y-1 max-w-2xl mx-auto text-left",
                                            children: levels[activeTab].goals.map((goal, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                    children: goal
                                                }, i, false, {
                                                    fileName: "[project]/app/level-guide/page.js",
                                                    lineNumber: 819,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/app/level-guide/page.js",
                                            lineNumber: 817,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/level-guide/page.js",
                                    lineNumber: 812,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/level-guide/page.js",
                            lineNumber: 804,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/level-guide/page.js",
                    lineNumber: 793,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/level-guide/page.js",
                lineNumber: 789,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Page, "9RTnV4k8xQ8Z7mmUeyiKoXdA+A8=");
_c = Page;
var _c;
__turbopack_context__.k.register(_c, "Page");
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
]);

//# sourceMappingURL=_68686a87._.js.map