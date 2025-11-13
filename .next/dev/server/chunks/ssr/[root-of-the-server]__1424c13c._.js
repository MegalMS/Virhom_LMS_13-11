module.exports = [
"[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/favicon.ico.mjs { IMAGE => \"[project]/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/app/not-found.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/not-found.js [app-rsc] (ecmascript)"));
}),
"[project]/app/features/study-material/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// "use client"
// import React from 'react'
// import StudyToolsSection from '../../../src/components/StudyToolsSection'
// import {studyToolsData} from '../../../src/data/studyToolsData'
// import { useParams } from "next/navigation";
// import { usePathname } from 'next/navigation';
// export default function StudyMaterialPage() {
//     const pathname = usePathname(); // e.g. "/features/study-material"
//   const slug = pathname.split("/").pop(); // "study-material"
//   const toolData = studyToolsData[slug];
//   console.log("slug:", slug); // ✅ should log "study-material"
//   if (!toolData) {
//     return <p className="text-center mt-10 text-red-500">404 - Not Found</p>;
//   }
//   console.log("toolData:", toolData); // ✅ should log the data for "study-material"
//   return (
//     <main className=" bg-[#F3F9FE] mt-12">
// <StudyToolsSection
//         title={toolData.title}
//         description={toolData.description}
//         image={toolData.image}
//       />
//       {/* Hero Image Section */}
//       <div className="dark rounded-2xl mb-10">
//         <div className="container mx-auto p-6">
//           <div className="inner">
//             <section className="space-y-6 pl-80 pr-80">
//               <div>
//                 <h6 className="relative font-normal text-2xl leading-[1.2] mb-10 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolute after:bottom-[-5] after:left-0">
//   Complete and relevant content
// </h6>
//                 <p className="text-base leading-[2.2] mb-8">
//                   To become fluent in English, you need to master all its components:
//                   pronunciation, grammar, and vocabulary. You also need to practise all four
//                   skills: reading, writing, listening, and speaking.
//                 </p>
//                 <p className='text-base leading-[2.2] mb-20'> 
//                   We have divided your online course into three categories: pronunciation,
//                   grammar, and conversation. However, we have made sure that whichever category a
//                   particular lesson focuses on, it also allows you to review and practise relevant
//                   content from the other two categories. In this way, every lesson helps you to
//                   improve your English grammar, vocabulary, and pronunciation simultaneously. We
//                   have also made sure that you get the opportunity to practise all four skills in
//                   every lesson.
//                 </p>
//               </div>
//               <div>
//                                 <h6 className="relative font-normal text-2xl leading-[1.2] mb-10 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
//   Graded
// </h6>
//                 <p className='text-base leading-[2.2] mb-5'>
//                   Another important aspect of a self-study course is that the content needs to be
//                   graded, going from easy to more difficult.
//                 </p>
//                 <p className='mb-5'> We have made sure that:</p>
// <ul className="text-sm ml-4 space-y-3 mb-15">
//   <li className="flex items-start gap-2">
//     <img
//       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
//       alt="check"
//       className="w-5 h-5 flex-shrink-0"
//     />
//     <span>
//       The lessons in each category follow a logical sequence of easy to more
//       difficult, with difficulty levels clearly marked for you.
//     </span>
//   </li>
//   <li className="flex items-start gap-2">
//     <img
//       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
//       alt="check"
//       className="w-5 h-5 flex-shrink-0"
//     />
//     <span>
//       More advanced lessons revise and build on the contents of earlier lessons.
//     </span>
//   </li>
// </ul>
//               </div>
//               <div>
//                                           <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
//   Clear explanations
// </h6>
// <p className='text-base leading-[2.2] mb-3'>We have ensured that our explanations are clear and easy-to-follow by using:</p>
//                 <ul className="list-disc text-sm ml-6 mb-15">
//                   <li className='flex item-start gap-2'>
//                     <img
//       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
//       alt="check"
//       className="w-5 h-5 mt-1 flex-shrink-0"
//     />
//               <span>Simple English</span>   </li>
//                   <li className='flex item-start gap-2'>
//                     <img
//       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
//       alt="check"
//       className="w-5 h-5 mt-1 flex-shrink-0"
//     />
//                   <span> Tables</span></li>
//                   <li className='flex items-start gap-2'>
//                     <img
//       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
//       alt="check"
//       className="w-5 h-5 mt-1 flex-shrink-0"
//     />
//                   <span>  Timelines</span></li>
//                   <li className='flex item-start gap-2'>
//                     <img
//       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
//       alt="check"
//       className="w-5 h-5 mt-1 flex-shrink-0"
//     />
//                   <span>  Colour coding</span></li>
//                   <li className='flex item-start gap-2'>
//                     <img
//       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
//       alt="check"
//       className="w-5 h-5 mt-1 flex-shrink-0"
//     />
//               <span>    Tips &amp; notes</span></li>
//                 </ul>
//               </div>
//               <div>
//                                           <h6 className="relative font-normal text-2xl leading-[1.2] mb-8 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
//   Meaningful examples
// </h6>
// <p className='text-base leading-[2.2] mb-3'>We have made sure that our example phrases and sentences:</p>
//                 <ul className="list-disc text-sm ml-6">
//                   <li className='flex item-start gap-2'>
//                       <img
//       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
//       alt="check"
//       className="w-5 h-5 mt-1 flex-shrink-0"
//     />
//                   <span> Easily clarify the point you are learning.</span></li>
//                   <li className='flex item-start gap-2'>
//                       <img
//       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
//       alt="check"
//       className="w-5 h-5 mt-1 flex-shrink-0"
//     />
//                     <span>Include useful daily English expressions.</span></li>
//                   <li className='flex item-start gap-2'>
//                       <img
//       src="data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%23b1e974' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E"
//       alt="check"
//       className="w-5 h-5 mt-1 flex-shrink-0"
//     />
//                         <span>Perfectly match the language level you are studying.</span></li>
//                 </ul>
//               </div>
//             </section>
//           </div>
//         </div>
//       </div>
//       {/* Light Section */}
//       <div className="light bg-white rounded-2xl p-6 ">
//         <div className="container mx-auto ml-75 mr-75">
//           <div className="inner space-y-6">
//             <h5 className="text-3xl font-semibold flex item-center justify-center">What do I learn in each type of lesson?</h5>
//             <div>
//                                                       <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
// Pronunciation</h6>
//               <p className='text-base leading-[2.2]'>
//                 In pronunciation lessons, you learn about the sounds, stress patterns, and
//                 intonation patterns of Standard British English (Received Pronunciation).
//                 Understanding the sound system of the English language is essential in developing
//                 good listening skills so you can understand native speakers, movies, news, and
//                 other broadcasts in English. You can then use these resources to expand your active
//                 vocabulary. It is also important for you to develop a clear pronunciation yourself,
//                 and our self-study course gives you many opportunities to actively work on your own
//                 pronunciation.
//               </p>
//             </div>
//             <div>
//                                                         <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
// Grammar</h6>
//               <p className='text-base leading-[2.2]'>
//                 In Grammar lessons, you learn all the important grammatical structures in English.
//                 Mastering these is necessary for writing English fluently. A good knowledge of
//                 grammar also improves your reading and listening skills. It is true that absolute
//                 grammatical accuracy is not essential for speaking fluently. However, a good
//                 knowledge of grammatical structures can definitely increase your self-confidence.
//                 When we do not know the grammar rules, we may think we are making too many mistakes,
//                 and we can lose our confidence to speak English in front of others. On the
//                 contrary, when we know the rules, we are able to recognise and correct our mistakes,
//                 and this is a great boost to our self-confidence.
//               </p>
//             </div>
//             <div>
//                                                         <h6 className="relative font-normal text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:border-[#b1e974] after:absolsute after:bottom-2 after:left-0">
// Conversation</h6>
//               <p className='text-base leading-[2.2]'>
//                 In conversation lessons, you focus on expanding your range of vocabulary and
//                 expressions in a variety of everyday contexts. Learning English vocabulary in
//                 situational dialogues reduces the need for translation and ensures that you can use
//                 the vocabulary you learn reflexively. All the situational dialogues in the course
//                 have been voice-recorded so you can improve your listening skills and pronunciation
//                 at the same time as you learn new vocabulary and expressions.
//               </p>
//             </div>
//           </div>
//         </div>
//       <div className="text-center mt-8">
//   <a
//     href="https://anglo-link.com/features/"
//     className="inline-block text-blue-400 px-5 py-2 rounded-full transition"
//   >
//     View all features
// <img
//   src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z' fill='%2337aadc'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E"
//   alt="arrow"
//   className="inline-block ml-2 w-6 h-6 align-middle"
// />
//   </a>
// </div>
//       </div>
//     </main>
//   );
// }
__turbopack_context__.s([
    "default",
    ()=>StudyMaterialPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
;
;
const CHECK_ICON = "data:image/svg+xml,%3Csvg aria-hidden='true' data-prefix='fas' data-icon='check' class='svg-inline--fa fa-check fa-w-16' role='img' xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 512 512'%3E%3Cpath fill='%234169E1' d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z'%3E%3C/path%3E%3C/svg%3E";
function Heading({ children, isDark = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h6", {
        className: "relative font-semibold text-2xl leading-[1.2] mb-5 inline-block after:content-[''] after:block after:w-[60px] after:border-t-[3px] after:absolute after:bottom-[-5] after:left-0",
        style: {
            color: isDark ? '#FFF7AE' : '#4169E1',
            borderColor: isDark ? '#FFF7AE' : '#4169E1'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        h6::after {
          border-color: ${isDark ? '#FFF7AE' : '#4169E1'};
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/features/study-material/page.js",
                lineNumber: 259,
                columnNumber: 7
            }, this),
            children
        ]
    }, void 0, true, {
        fileName: "[project]/app/features/study-material/page.js",
        lineNumber: 252,
        columnNumber: 5
    }, this);
}
function CheckItem({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
        className: "flex items-start gap-2",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: CHECK_ICON,
                alt: "check",
                className: "w-5 h-5 mt-1 flex-shrink-0"
            }, void 0, false, {
                fileName: "[project]/app/features/study-material/page.js",
                lineNumber: 272,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: children
            }, void 0, false, {
                fileName: "[project]/app/features/study-material/page.js",
                lineNumber: 273,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/features/study-material/page.js",
        lineNumber: 271,
        columnNumber: 5
    }, this);
}
function StudyMaterialPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "min-h-screen p-8",
        style: {
            background: 'linear-gradient(135deg, #4169E1 0%, #7B68EE 50%, #4169E1 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center mb-12",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-bold mb-4",
                        style: {
                            background: 'linear-gradient(90deg, #FFF7AE 0%, #FFFFFF 100%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text'
                        },
                        children: "Study Materials"
                    }, void 0, false, {
                        fileName: "[project]/app/features/study-material/page.js",
                        lineNumber: 288,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg",
                        style: {
                            color: '#FFFFFF'
                        },
                        children: "Complete English learning resources"
                    }, void 0, false, {
                        fileName: "[project]/app/features/study-material/page.js",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/features/study-material/page.js",
                lineNumber: 287,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl mb-10 p-10 shadow-2xl",
                style: {
                    background: 'linear-gradient(135deg, #333333 0%, #4169E1 100%)',
                    border: '1px solid rgba(255, 247, 174, 0.2)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "space-y-10 max-w-4xl mx-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                        isDark: true,
                                        children: "Complete and relevant content"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 315,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-[2.2] mb-8",
                                        style: {
                                            color: '#FFFFFF'
                                        },
                                        children: "To become fluent in English, you need to master all its components: pronunciation, grammar, and vocabulary. You also need to practise all four skills: reading, writing, listening, and speaking."
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 316,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-[2.2] mb-8",
                                        style: {
                                            color: '#FFFFFF'
                                        },
                                        children: "We have divided your online course into three categories: pronunciation, grammar, and conversation. However, we have made sure that whichever category a particular lesson focuses on, it also allows you to review and practise relevant content from the other two categories."
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 321,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/features/study-material/page.js",
                                lineNumber: 314,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                        isDark: true,
                                        children: "Graded"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 331,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-[2.2] mb-4",
                                        style: {
                                            color: '#FFFFFF'
                                        },
                                        children: "Another important aspect of a self-study course is that the content needs to be graded, going from easy to more difficult."
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 332,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base mb-5",
                                        style: {
                                            color: '#FFFFFF'
                                        },
                                        children: "We have made sure that:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 336,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-3 ml-4 text-sm",
                                        style: {
                                            color: '#FFFFFF'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                                children: "The lessons in each category follow a logical sequence of easy to more difficult, with difficulty levels clearly marked for you."
                                            }, void 0, false, {
                                                fileName: "[project]/app/features/study-material/page.js",
                                                lineNumber: 338,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                                children: "More advanced lessons revise and build on the contents of earlier lessons."
                                            }, void 0, false, {
                                                fileName: "[project]/app/features/study-material/page.js",
                                                lineNumber: 342,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 337,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/features/study-material/page.js",
                                lineNumber: 330,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                        isDark: true,
                                        children: "Clear explanations"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 350,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-[2.2] mb-4",
                                        style: {
                                            color: '#FFFFFF'
                                        },
                                        children: "We have ensured that our explanations are clear and easy-to-follow by using:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 351,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 ml-4 text-sm",
                                        style: {
                                            color: '#FFFFFF'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                                children: "Simple English"
                                            }, void 0, false, {
                                                fileName: "[project]/app/features/study-material/page.js",
                                                lineNumber: 356,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                                children: "Tables"
                                            }, void 0, false, {
                                                fileName: "[project]/app/features/study-material/page.js",
                                                lineNumber: 357,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                                children: "Timelines"
                                            }, void 0, false, {
                                                fileName: "[project]/app/features/study-material/page.js",
                                                lineNumber: 358,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                                children: "Colour coding"
                                            }, void 0, false, {
                                                fileName: "[project]/app/features/study-material/page.js",
                                                lineNumber: 359,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                                children: "Tips & notes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/features/study-material/page.js",
                                                lineNumber: 360,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 355,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/features/study-material/page.js",
                                lineNumber: 349,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                        isDark: true,
                                        children: "Meaningful examples"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 365,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-base leading-[2.2] mb-4",
                                        style: {
                                            color: '#FFFFFF'
                                        },
                                        children: "We have made sure that our example phrases and sentences:"
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 366,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "space-y-2 ml-4 text-sm",
                                        style: {
                                            color: '#FFFFFF'
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                                children: "Easily clarify the point you are learning."
                                            }, void 0, false, {
                                                fileName: "[project]/app/features/study-material/page.js",
                                                lineNumber: 370,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                                children: "Include useful daily English expressions."
                                            }, void 0, false, {
                                                fileName: "[project]/app/features/study-material/page.js",
                                                lineNumber: 373,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckItem, {
                                                children: "Perfectly match the language level you are studying."
                                            }, void 0, false, {
                                                fileName: "[project]/app/features/study-material/page.js",
                                                lineNumber: 374,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 369,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/features/study-material/page.js",
                                lineNumber: 364,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/features/study-material/page.js",
                        lineNumber: 313,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/features/study-material/page.js",
                    lineNumber: 312,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/features/study-material/page.js",
                lineNumber: 305,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "rounded-3xl p-10 shadow-2xl",
                style: {
                    background: 'linear-gradient(135deg, #FFF7AE 0%, #FFFFFF 50%, #FFF7AE 100%)',
                    border: '1px solid rgba(65, 105, 225, 0.2)'
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-4xl space-y-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h5", {
                            className: "text-4xl font-bold text-center mb-8",
                            style: {
                                background: 'linear-gradient(90deg, #4169E1 0%, #7B68EE 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                                backgroundClip: 'text'
                            },
                            children: "What do I learn in each type of lesson?"
                        }, void 0, false, {
                            fileName: "[project]/app/features/study-material/page.js",
                            lineNumber: 392,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-6 shadow-lg",
                            style: {
                                background: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid rgba(65, 105, 225, 0.1)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                    children: "Pronunciation"
                                }, void 0, false, {
                                    fileName: "[project]/app/features/study-material/page.js",
                                    lineNumber: 411,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base leading-[2.2]",
                                    style: {
                                        color: '#333333'
                                    },
                                    children: "In pronunciation lessons, you learn about the sounds, stress patterns, and intonation patterns of Standard British English (Received Pronunciation). Understanding the sound system of the English language is essential in developing good listening skills so you can understand native speakers, movies, news, and other broadcasts in English."
                                }, void 0, false, {
                                    fileName: "[project]/app/features/study-material/page.js",
                                    lineNumber: 412,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/features/study-material/page.js",
                            lineNumber: 404,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-6 shadow-lg",
                            style: {
                                background: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid rgba(65, 105, 225, 0.1)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                    children: "Grammar"
                                }, void 0, false, {
                                    fileName: "[project]/app/features/study-material/page.js",
                                    lineNumber: 428,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base leading-[2.2]",
                                    style: {
                                        color: '#333333'
                                    },
                                    children: "In Grammar lessons, you learn all the important grammatical structures in English. Mastering these is necessary for writing English fluently. A good knowledge of grammar also improves your reading and listening skills. It is true that absolute grammatical accuracy is not essential for speaking fluently."
                                }, void 0, false, {
                                    fileName: "[project]/app/features/study-material/page.js",
                                    lineNumber: 429,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/features/study-material/page.js",
                            lineNumber: 421,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-2xl p-6 shadow-lg",
                            style: {
                                background: 'rgba(255, 255, 255, 0.7)',
                                border: '1px solid rgba(65, 105, 225, 0.1)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Heading, {
                                    children: "Conversation"
                                }, void 0, false, {
                                    fileName: "[project]/app/features/study-material/page.js",
                                    lineNumber: 445,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-base leading-[2.2]",
                                    style: {
                                        color: '#333333'
                                    },
                                    children: "In conversation lessons, you focus on expanding your range of vocabulary and expressions in a variety of everyday contexts. Learning English vocabulary in situational dialogues reduces the need for translation and ensures that you can use the vocabulary you learn reflexively."
                                }, void 0, false, {
                                    fileName: "[project]/app/features/study-material/page.js",
                                    lineNumber: 446,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/features/study-material/page.js",
                            lineNumber: 438,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-center mt-8",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "#",
                                className: "inline-flex items-center font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg transform hover:scale-105",
                                style: {
                                    background: 'linear-gradient(90deg, #4169E1 0%, #7B68EE 100%)',
                                    color: '#FFFFFF'
                                },
                                children: [
                                    "View all features",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        className: "ml-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z",
                                            fill: "white"
                                        }, void 0, false, {
                                            fileName: "[project]/app/features/study-material/page.js",
                                            lineNumber: 465,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/features/study-material/page.js",
                                        lineNumber: 464,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/features/study-material/page.js",
                                lineNumber: 455,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/features/study-material/page.js",
                            lineNumber: 454,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/features/study-material/page.js",
                    lineNumber: 391,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/features/study-material/page.js",
                lineNumber: 384,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/features/study-material/page.js",
        lineNumber: 280,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/features/study-material/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/app/features/study-material/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1424c13c._.js.map