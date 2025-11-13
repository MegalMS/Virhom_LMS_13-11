"use client";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Dashboard() {
  const { data: session, status, update } = useSession(); // 👈 include update()
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  console.log("Dashboard session:", session);

  // ✅ Immediately refresh session after login
  useEffect(() => {
    if (status === "authenticated" && !session?.backendUser) {
      // Force call to /api/auth/session
      update();
    }
  }, [status, session, update]);

  // ✅ Redirect unauthenticated users
  useEffect(() => {
    if (status === "loading") return;

    if (!session) {
      router.push("/login");
      return;
    }

    if (session?.backendUser) {
      setIsLoading(false);
    } else {
      const timer = setTimeout(() => setIsLoading(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [session, status, router]);

  // ✅ Handle loading states
  if (status === "loading" || isLoading) {
    return (
      <div className="min-h-screen bg-[#fffbeb] flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#A27B5C] mx-auto"></div>
          <p className="mt-4 text-[#6B4F4F]">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  if (!session) return null;

  const backendUser = session?.backendUser;

  return (
    <div className="min-h-screen bg-[#fffbeb] p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-[#3E2723] mb-6">Dashboard</h1>

          {backendUser ? (
            <div className="bg-[#FFFDF6] border border-[#E9DCCF] rounded-lg p-6 mb-6">
              <h2 className="text-xl font-semibold text-[#6B4F4F] mb-4">User Information</h2>
              <div className="space-y-2">
                <p><strong>Name:</strong> {backendUser.name}</p>
                <p><strong>Email:</strong> {backendUser.email}</p>
                <p><strong>Role:</strong> {backendUser.role}</p>
                {backendUser.profileImage && (
                  <Image
                    src={backendUser.profileImage}
                    alt="Profile Image"
                    width={100}
                    height={100}
                    className="rounded-full mt-4"
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6 mb-6">
              <p className="text-yellow-800">
                User data is still loading. If this persists, please try refreshing the page.
              </p>
            </div>
          )}

          <button
            onClick={() => signOut({ callbackUrl: "/login" })}
            className="bg-[#6B4F4F] text-white px-6 py-2 rounded-md hover:bg-[#5A4038] transition-colors"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}


// "use client";
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