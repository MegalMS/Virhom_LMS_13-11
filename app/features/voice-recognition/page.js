"use client";
import React from "react";
import StudyToolsSection from "../../../src/components/StudyToolsSection";
import { studyToolsData } from "../../../src/data/studyToolsData";
import { usePathname } from "next/navigation";
import Link from "next/link";

// ✅ Reusable heading (same style as StudyToolsSection)
function Heading({ children, color = "#4169E1" }) {
  return (
    <h6
      className="relative font-semibold text-2xl leading-[1.3] mb-6 inline-block pb-2"
      style={{
        color: color,
        borderBottom: `3px solid ${color}`,
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      {children}
    </h6>
  );
}

export default function VoiceRecognitionPage() {
  const pathname = usePathname();
  const slug = pathname.split("/").pop();
  const toolData = studyToolsData[slug];

  if (!toolData) {
    return (
      <p className="text-center mt-10 text-red-500 text-lg font-Montserrat">
        404 - Not Found
      </p>
    );
  }

  return (
    <main
      style={{
        fontFamily: "Montserrat, sans-serif",
        color: "#333333",
      }}
      className="min-h-screen"
    >
      {/* === Header Section === */}
      <StudyToolsSection
        title={toolData.title}
        description={toolData.description}
        image={toolData.image}
      />

      {/* === Content Section === */}
      <section className="py-20 flex justify-center">
        <div className="max-w-4xl w-full px-6 md:px-10 text-left bg-white p-10 rounded-2xl">
          <div className="mb-16">
            <Heading color="#4169E1">Voice Recognition</Heading>

            <p className="leading-relaxed text-[16px] md:text-[17px] mb-6">
              A very important part of becoming fluent in English is speaking clearly and
              in a way that other people can easily understand you. Our voice recognition
              feature is a valuable tool that helps you identify and correct pronunciation
              mistakes that might affect the clarity of your message.
            </p>

            <p className="leading-relaxed text-[16px] md:text-[17px] mb-6">
              The software allows you to record yourself reading specific words or
              phrases, and it will provide feedback to show whether your pronunciation is
              clear and accurate.
            </p>

            <p className="leading-relaxed text-[16px] md:text-[17px] mb-6">
              To help you improve, you can listen to the teacher’s recording of the word
              or phrase several times before trying it yourself. You can also listen to
              your own recording to compare and practice.
            </p>

            <p className="leading-relaxed text-[16px] md:text-[17px] mb-8">
              Please note that not all devices support our voice recognition software.
            </p>
          </div>

          {/* === CTA Button (Consistent with StudyToolsSection) === */}
          <div className="text-center mt-10">
            <Link
              href="/features"
              className="inline-flex items-center font-semibold text-lg px-8 py-4 rounded-full transition-all shadow-md hover:shadow-xl"
              style={{
                backgroundColor: "#4169E1",
                color: "#FFFFFF",
                fontFamily: "Montserrat, sans-serif",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#7B68EE")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#4169E1")
              }
            >
              View all features
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="ml-2"
              >
                <path
                  d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
