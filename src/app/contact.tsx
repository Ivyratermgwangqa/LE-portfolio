// "use client";

// import Header from './components/layout/Header';
// import Footer from './components/layout/Footer';

// const siteProps = {
//     name: "Lerato Mgwangqa",
//     title: "Software Engineer | Aspiring AI Engineer",
//     email: "ivyratermgwangqa@gmail.com",
//     gitHub: "Ivyratermgwangqa",
//     instagram: "ivyrater0411",
//     linkedIn: "lerato-mgwangqa-941344238",
//     medium: "Lerato Mgwangqa",
//     twitter: "LeratoMgwangqa",
//     facebook: "Lerato Mgwangqa",
//     whatsapp: "27672544756",
//     youTube: "..........",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//     return (
//         <html lang="en">
//             <body className="bg-gray-100">
//                 <div className="flex flex-col min-h-screen">
//                     <Header />
//                     <main className="flex-grow container mx-auto p-6">
//                         {children}
//                     </main>
//                     <Footer
//                         name={siteProps.name}
//                         email={siteProps.email}
//                         gitHub={siteProps.gitHub}
//                         instagram={siteProps.instagram}
//                         linkedIn={siteProps.linkedIn}
//                         medium={siteProps.medium}
//                         twitter={siteProps.twitter}
//                         facebook={siteProps.facebook}
//                         whatsapp={siteProps.whatsapp}
//                         youTube={siteProps.youTube}
//                         primaryColor="#0ed0de" // Optional
//                     />
//                 </div>
//             </body>
//         </html>
//     );
// }