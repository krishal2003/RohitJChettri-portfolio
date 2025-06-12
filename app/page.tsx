// "use client";

// import type React from "react";

// import { useState, useEffect } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import {
//   Play,
//   Pause,
//   Calendar,
//   MapPin,
//   Instagram,
//   Twitter,
//   Youtube,
//   AirplayIcon as Spotify,
//   Link,
//   Facebook,
// } from "lucide-react";
// import Image from "next/image";

// export default function SingerPortfolio() {
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTrack, setCurrentTrack] = useState(0);
//   const [scrollY, setScrollY] = useState(0);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   const [volume, setVolume] = useState(0.7);
//   const [showStats, setShowStats] = useState(false);
//   const [contactForm, setContactForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [submitStatus, setSubmitStatus] = useState("");

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

// const albums = [
//   {
//     title: "Bistarai Bistarai",
//     year: "",
//     cover: "/slow.JPG?height=300&width=300",
//     tracks: [
//       {
//         title: "Bistarai",
//         link: "https://youtu.be/UyKyqjnxy-4?si=hf5Yl65yGywAIXcI",
//       },
//       {
//         title: "Timra Dui Ankhama",
//         link: "https://youtu.be/3gPFdMOgOOA?si=pbKFZYcKpGpe6E-T",
//       },
//       {
//         title: "Pani Paryo",
//         link: "https://youtu.be/VKeGxIPoleg?si=8CKJiyO8BUEpbRKA",
//       },
//       {
//         title: "Timi Nai",
//         link: "https://youtu.be/x-1BAzBSDOQ?si=STM98DGcoTEqSGd5",
//       },
//     ],
//     duration: "17:31",
//     genre: "",
//   },
//   {
//     title: "Bidaai",
//     year: "",
//     cover: "/bidai.jpg?height=300&width=300",
//     tracks: [
//       {
//         title: "Bidaai",
//         link: "https://youtu.be/s9sEKEpFNQ8?si=B4u-Tg6Q-OK5twle",
//       },
//       {
//         title: "Badal",
//         link: "https://youtu.be/v9HvwMPWMfs?si=H7BFgeKhTlH1OplI",
//       },
//       {
//         title: "Chahana",
//         link: "https://youtu.be/07Y4aRVQngE?si=udc6bMxpDVW0jMTY",
//       },
//       {
//         title: "Jooni Jooni",
//         link: "https://youtu.be/VMme3dXf8WA?si=2NR4tCRFPEPPbPRK",
//       },
//     ],
//     duration: "18:52",
//     genre: "",
//   },
//   {
//     title: "Top",
//     year: "",
//     cover: "/nayan.jpg?height=300&width=300",
//     tracks: [
//       {
//         title: "Sannani",
//         link: "https://youtu.be/cDIDL3cDuJc?si=2WWThkq7agH14Ara",
//       },
//       {
//         title: "Sapani Ma",
//         link: "https://youtu.be/p3IIdLNkCis?si=L1SyPVkDDizF15LT",
//       },
//       {
//         title: "Nayan Ma",
//         link: "https://youtu.be/gKOHprU827E?si=Vo-0gVioBTOuNbhr",
//       },
//       {
//         title: "Har Sas",
//         link: "https://youtu.be/UCokM6haT68?si=1Lc5UHwe5KPh78Jm",
//       },
//     ],
//     duration: "16:46",
//     genre: "",
//   },
// ];

//   const stats = [
//     { label: "Albums Released", value: "12+", icon: "🎵" },
//     { label: "Live Concerts", value: "150+", icon: "🎤" },
//     { label: "Streaming Hours", value: "2M+", icon: "📻" },
//     { label: "Years Active", value: "15+", icon: "⭐" },
//   ];

//   const handleContactSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     // Simulate form submission
//     await new Promise((resolve) => setTimeout(resolve, 2000));

//     setSubmitStatus("Thank you for your message! I'll get back to you soon.");
//     setContactForm({ name: "", email: "", message: "" });
//     setIsSubmitting(false);

//     setTimeout(() => setSubmitStatus(""), 5000);
//   };

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
//   ) => {
//     setContactForm((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const tours = [
//     {
//       date: "Dec 15, 2025",
//       venue: "Pragya Pratisthan",
//       city: "Kathmandu, Nepal",
//     },
//     { date: "Sep 22, 2025", venue: "Pokhara Stadium", city: "Pokhara, Nepal" },
//     { date: "Aug 5, 2025", venue: "Music Hall", city: "Darjeeling, India" },
//   ];

//   return (
//     <div className="min-h-screen bg-black text-white overflow-x-hidden">
//       {/* Animated Background */}
//       {/* Full Screen Background Image */}
//       <div
//         className="fixed inset-0 z-0 bg-cover bg-center"
//         style={{
//           backgroundImage: `url('landscape.png')`, // Use the URL of your image
//           opacity: 0.6, // You can adjust the opacity for a more subtle effect
//         }}
//       />
//       <div className="fixed inset-0 z-0">
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
//         <div
//           className="absolute inset-0 opacity-30"
//           style={{
//             backgroundImage: `radial-gradient(circle at ${
//               50 + scrollY * 0.01
//             }% ${
//               50 + scrollY * 0.005
//             }%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
//           }}
//         />
//       </div>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
//         <div className="container mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//               RJC
//             </div>
//             <div className="hidden md:flex space-x-8">
//               <a
//                 href="#home"
//                 className="hover:text-purple-400 transition-colors"
//               >
//                 Home
//               </a>

//               <a
//                 href="#about"
//                 className="hover:text-purple-400 transition-colors"
//               >
//                 About
//               </a>
//               <a
//                 href="#music"
//                 className="hover:text-purple-400 transition-colors"
//               >
//                 Music
//               </a>
//               <a
//                 href="#favorite"
//                 className="hover:text-purple-400 transition-colors"
//               >
//                 Fan Favorite
//               </a>
//               <a
//                 href="#tours"
//                 className="hover:text-purple-400 transition-colors"
//               >
//                 Tours
//               </a>
//               <a
//                 href="#contact"
//                 className="hover:text-purple-400 transition-colors"
//               >
//                 Contact
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section
//         id="home"
//         className="relative min-h-screen flex items-center justify-center z-10"
//       >
//         <div className="text-center space-y-8 px-6">
//           <div className="relative">
//             <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-pulse">
//               <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
//                 Rohit Jung
//               </span>
//             </h1>
//             <h2 className="text-4xl md:text-6xl font-bold">
//               <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
//                 Chettri
//               </span>
//             </h2>
//           </div>
//           <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
//             Nepali Singer • Songwriter • Music Producer
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//             <a
//               href="https://open.spotify.com/artist/5CzMXgbioXfdYjkS0Kpqcu?si=OoXOVosxQwuL80b983oQMw"
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <Button
//                 size="lg"
//                 className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
//               >
//                 <Play className="mr-2 h-5 w-5" />
//                 Listen Now
//               </Button>
//             </a>
//             <a href="#contact">
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
//               >
//                 Reach Me Out
//               </Button>
//             </a>
//           </div>
//         </div>

//         {/* Floating Elements */}
//         <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-60" />
//         <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-pink-400 rounded-full animate-pulse opacity-40" />
//         <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-50" />
//       </section>

// {/* About Section */}
// <section id="about" className="relative py-20 z-10">
//   <div className="container mx-auto px-6">
//     <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
//       <div className="space-y-6">
//         <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//           About the Artist
//         </h2>
//         <p className="text-lg text-gray-300 leading-relaxed">
//           Rohit Jung Chettri is a renowned Nepali singer and songwriter
//           known for his soulful voice and contemporary approach to Nepali
//           music. His unique blend of traditional Nepali melodies with
//           modern production has captivated audiences across Nepal and
//           beyond.
//         </p>
//         <p className="text-lg text-gray-300 leading-relaxed">
//           With multiple hit albums and countless live performances, he has
//           established himself as one of the leading voices in contemporary
//           Nepali music, touching hearts with his emotional depth and
//           musical versatility.
//         </p>
//         <div className="flex flex-wrap gap-3">
//           <Badge
//             variant="secondary"
//             className="bg-purple-900/50 text-purple-300 border-purple-400"
//           >
//             Folk
//           </Badge>
//           <Badge
//             variant="secondary"
//             className="bg-blue-900/50 text-blue-300 border-blue-400"
//           >
//             Contemporary
//           </Badge>
//           <Badge
//             variant="secondary"
//             className="bg-pink-900/50 text-pink-300 border-pink-400"
//           >
//             Acoustic
//           </Badge>
//           <Badge
//             variant="secondary"
//             className="bg-teal-900/50 text-teal-300 border-teal-400"
//           >
//             World Music
//           </Badge>
//         </div>
//       </div>
//       <div className="relative">
//         <div className="relative overflow-hidden rounded-2xl">
//           <Image
//             src="/Rohit_J_Chettri.jpg"
//             alt="Rohit Jung Chettri"
//             width={400}
//             height={500}
//             className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
//         </div>
//       </div>
//     </div>
//   </div>
// </section>

//       {/* About Section */}

// {/* favorite Section */}
// <section id="favorite" className="relative py-20 z-10">
//   <div className="container mx-auto px-6">
//     <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
//       Favorite Picks
//     </h2>
//     <div className="grid md:grid-cols-3 gap-8 mb-12">
//       {albums.map((album, index) => (
//         <Card
//           key={index}
//           className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
//         >
//           <CardContent className="p-6">
//             <div className="relative mb-4 overflow-hidden rounded-lg">
//               <Image
//                 src={album.cover || "/placeholder.svg"}
//                 alt={album.title}
//                 width={300}
//                 height={300}
//                 className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
//               />
//             </div>
//             <h3 className="text-xl font-bold mb-2">{album.title}</h3>

//             <p className="text-sm text-gray-500 mb-3">
//               Duration: {album.duration}
//             </p>

//             {/* Track List */}
//             <div className="space-y-2">
//               <h4 className="text-sm font-semibold text-purple-400">
//                 Tracks:
//               </h4>
//               {album.tracks.map((track, trackIndex) => (
//                 <div
//                   key={trackIndex}
//                   className="flex items-center justify-between text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
//                 >
//                   <span>
//                     {trackIndex + 1}. {track.title}
//                   </span>
//                   <a
//                     href={track.link}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="opacity-0 group-hover:opacity-100 transition-opacity"
//                   >
//                     <Link className="h-3 w-3" />
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>

//     {/* Music Player */}
//     {isPlaying && (
//       <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-2xl mx-auto">
//         <CardContent className="p-6">
//           <div className="flex items-center gap-4 mb-4">
//             <Image
//               src={albums[currentTrack]?.cover || "/placeholder.svg"}
//               alt="Now Playing"
//               width={60}
//               height={60}
//               className="rounded-lg"
//             />
//             <div className="flex-1">
//               <h4 className="font-bold">{albums[currentTrack]?.title}</h4>
//               <p className="text-sm text-gray-400">Rohit Jung Chettri</p>
//             </div>
//             <Button
//               size="icon"
//               variant="ghost"
//               onClick={() => setIsPlaying(false)}
//               className="text-gray-400 hover:text-white"
//             >
//               <Pause className="h-5 w-5" />
//             </Button>
//           </div>

//           {/* Progress Bar */}
//           <div className="space-y-2">
//             <div className="flex justify-between text-xs text-gray-400">
//               <span>1:23</span>
//               <span>3:45</span>
//             </div>
//             <div className="w-full bg-gray-700 rounded-full h-2">
//               <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full w-1/3"></div>
//             </div>
//           </div>

//           {/* Volume Control */}
//           <div className="flex items-center gap-2 mt-4">
//             <span className="text-xs text-gray-400">Volume</span>
//             <div className="flex-1 bg-gray-700 rounded-full h-1">
//               <div
//                 className="bg-gradient-to-r from-purple-600 to-pink-600 h-1 rounded-full"
//                 style={{ width: `${volume * 100}%` }}
//               ></div>
//             </div>
//             <span className="text-xs text-gray-400">
//               {Math.round(volume * 100)}%
//             </span>
//           </div>
//         </CardContent>
//       </Card>
//     )}
//   </div>
// </section>

//       {/* Tours Section */}
//       <section id="tours" className="relative py-20 z-10">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
//             Upcoming Tours
//           </h2>
//           <div className="max-w-4xl mx-auto space-y-4">
//             {tours.map((tour, index) => (
//               <Card
//                 key={index}
//                 className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
//               >
//                 <CardContent className="p-6">
//                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                     <div className="flex items-center gap-4">
//                       <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
//                         <Calendar className="h-6 w-6" />
//                       </div>
//                       <div>
//                         <h3 className="text-xl font-bold">{tour.date}</h3>
//                         <p className="text-gray-400 flex items-center gap-2">
//                           <MapPin className="h-4 w-4" />
//                           {tour.venue}, {tour.city}
//                         </p>
//                       </div>
//                     </div>
//                     <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
//                       Get Tickets
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="relative py-20 z-10">
//         <div className="container mx-auto px-6">
//           <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
//             Get In Touch
//           </h2>

//           <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
//             {/* Contact Form */}
//             <Card className="bg-white/5 backdrop-blur-md border-white/10">
//               <CardContent className="p-8">
//                 <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//                   Send a Message
//                 </h3>
//                 <form onSubmit={handleContactSubmit} className="space-y-6">
//                   <div>
//                     <label
//                       htmlFor="name"
//                       className="block text-sm font-medium text-gray-300 mb-2"
//                     >
//                       Your Name
//                     </label>
//                     <input
//                       type="text"
//                       id="name"
//                       name="name"
//                       value={contactForm.name}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
//                       placeholder="Enter your full name"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="email"
//                       className="block text-sm font-medium text-gray-300 mb-2"
//                     >
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={contactForm.email}
//                       onChange={handleInputChange}
//                       required
//                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
//                       placeholder="your.email@example.com"
//                     />
//                   </div>

//                   <div>
//                     <label
//                       htmlFor="message"
//                       className="block text-sm font-medium text-gray-300 mb-2"
//                     >
//                       Message
//                     </label>
//                     <textarea
//                       id="message"
//                       name="message"
//                       value={contactForm.message}
//                       onChange={handleInputChange}
//                       required
//                       rows={5}
//                       className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
//                       placeholder="Tell me about your project, collaboration ideas, or just say hello!"
//                     />
//                   </div>

//                   <Button
//                     type="submit"
//                     disabled={isSubmitting}
//                     className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
//                   >
//                     {isSubmitting ? (
//                       <div className="flex items-center justify-center gap-2">
//                         <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
//                         Sending...
//                       </div>
//                     ) : (
//                       "Send Message"
//                     )}
//                   </Button>

//                   {submitStatus && (
//                     <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
//                       {submitStatus}
//                     </div>
//                   )}
//                 </form>
//               </CardContent>
//             </Card>
//             <div className="space-y-8">
//               <Card className="bg-white/5 backdrop-blur-md border-white/10">
//                 <CardContent className="p-8">
//                   <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
//                     Connect With Me
//                   </h3>
//                   <p className="text-gray-300 mb-6">
//                     Follow me on social media for the latest updates,
//                     behind-the-scenes content, and new music releases.
//                   </p>
//                   <div className="grid grid-cols-2 gap-4">
//                     <Button
//                       className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 justify-start"
//                       onClick={() =>
//                         window.open(
//                           "https://www.instagram.com/rohit.john.chettri/?hl=en",
//                           "_blank"
//                         )
//                       }
//                     >
//                       <Instagram className="h-5 w-5 mr-3" />
//                       Instagram
//                     </Button>
//                     <Button
//                       className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 justify-start"
//                       onClick={() =>
//                         window.open(
//                           "https://www.facebook.com/rohitjohnchettri/",
//                           "_blank"
//                         )
//                       }
//                     >
//                       <Facebook className="h-5 w-5 mr-3" />
//                       Facebook
//                     </Button>
//                     <Button
//                       className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 justify-start"
//                       onClick={() =>
//                         window.open(
//                           "https://www.youtube.com/channel/UCNhLcFjUtFaOtsCwbQ8lQsw",
//                           "_blank"
//                         )
//                       }
//                     >
//                       <Youtube className="h-5 w-5 mr-3" />
//                       YouTube
//                     </Button>
//                     <Button
//                       className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 justify-start"
//                       onClick={() =>
//                         window.open(
//                           "https://open.spotify.com/artist/5CzMXgbioXfdYjkS0Kpqcu?si=OoXOVosxQwuL80b983oQMw",
//                           "_blank"
//                         )
//                       }
//                     >
//                       <Spotify className="h-5 w-5 mr-3" />
//                       Spotify
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </div>
//             s
//           </div>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="relative py-12 border-t border-white/10 z-10">
//         <div className="container mx-auto px-6 text-center">
//           <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             Rohit Jung Chettri
//           </div>
//           <p className="text-gray-400 mb-4">rohitjchettri@gmail.com</p>
//           <p className="text-sm text-gray-500">Made by Uddheshya Studio</p>
//         </div>
//       </footer>
//     </div>
//   );
// }

"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Play,
  Pause,
  Calendar,
  MapPin,
  Instagram,
  Twitter,
  Youtube,
  AirplayIcon as Spotify,
  Link,
  Facebook,
} from "lucide-react";
import Image from "next/image";

export default function SingerPortfolio() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);
  const [showStats, setShowStats] = useState(false);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const albums = [
    {
      title: "Bistarai Bistarai",
      year: "",
      cover: "/slow.JPG?height=300&width=300",
      tracks: [
        {
          title: "Bistarai",
          link: "https://youtu.be/UyKyqjnxy-4?si=hf5Yl65yGywAIXcI",
        },
        {
          title: "Timra Dui Ankhama",
          link: "https://youtu.be/3gPFdMOgOOA?si=pbKFZYcKpGpe6E-T",
        },
        {
          title: "Pani Paryo",
          link: "https://youtu.be/VKeGxIPoleg?si=8CKJiyO8BUEpbRKA",
        },
        {
          title: "Timi Nai",
          link: "https://youtu.be/x-1BAzBSDOQ?si=STM98DGcoTEqSGd5",
        },
      ],
      duration: "17:31",
      genre: "",
    },
    {
      title: "Bidaai",
      year: "",
      cover: "/bidai.jpg?height=300&width=300",
      tracks: [
        {
          title: "Bidaai",
          link: "https://youtu.be/s9sEKEpFNQ8?si=B4u-Tg6Q-OK5twle",
        },
        {
          title: "Badal",
          link: "https://youtu.be/v9HvwMPWMfs?si=H7BFgeKhTlH1OplI",
        },
        {
          title: "Chahana",
          link: "https://youtu.be/07Y4aRVQngE?si=udc6bMxpDVW0jMTY",
        },
        {
          title: "Jooni Jooni",
          link: "https://youtu.be/VMme3dXf8WA?si=2NR4tCRFPEPPbPRK",
        },
      ],
      duration: "18:52",
      genre: "",
    },
    {
      title: "Top",
      year: "",
      cover: "/nayan.jpg?height=300&width=300",
      tracks: [
        {
          title: "Sannani",
          link: "https://youtu.be/cDIDL3cDuJc?si=2WWThkq7agH14Ara",
        },
        {
          title: "Sapani Ma",
          link: "https://youtu.be/p3IIdLNkCis?si=L1SyPVkDDizF15LT",
        },
        {
          title: "Nayan Ma",
          link: "https://youtu.be/gKOHprU827E?si=Vo-0gVioBTOuNbhr",
        },
        {
          title: "Har Sas",
          link: "https://youtu.be/UCokM6haT68?si=1Lc5UHwe5KPh78Jm",
        },
      ],
      duration: "16:46",
      genre: "",
    },
  ];

  const stats = [
    { label: "Albums Released", value: "12+", icon: "🎵" },
    { label: "Live Concerts", value: "150+", icon: "🎤" },
    { label: "Streaming Hours", value: "2M+", icon: "📻" },
    { label: "Years Active", value: "15+", icon: "⭐" },
  ];

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setSubmitStatus("Thank you for your message! I'll get back to you soon.");
    setContactForm({ name: "", email: "", message: "" });
    setIsSubmitting(false);

    setTimeout(() => setSubmitStatus(""), 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setContactForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const tours = [
    {
      date: "Dec 15, 2024",
      venue: "Pragya Pratisthan",
      city: "Kathmandu, Nepal",
    },
    { date: "Dec 22, 2024", venue: "Pokhara Stadium", city: "Pokhara, Nepal" },
    { date: "Jan 5, 2025", venue: "Music Hall", city: "Darjeeling, India" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Animated Background */}
      {/* Full Screen Background Image */}
      <div
        className="fixed inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('landscape.png')`, // Use the URL of your image
          opacity: 0.6, // You can adjust the opacity for a more subtle effect
        }}
      />
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-teal-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at ${
              50 + scrollY * 0.01
            }% ${
              50 + scrollY * 0.005
            }%, rgba(139, 92, 246, 0.1) 0%, transparent 50%)`,
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              RJC
            </div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#home"
                className="hover:text-purple-400 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="hover:text-purple-400 transition-colors"
              >
                About
              </a>
              <a
                href="#favorite"
                className="hover:text-purple-400 transition-colors"
              >
                Fan Favorite
              </a>
              <a
                href="#music"
                className="hover:text-purple-400 transition-colors"
              >
                Music
              </a>
              <a
                href="#tours"
                className="hover:text-purple-400 transition-colors"
              >
                Tours
              </a>
              <a
                href="#contact"
                className="hover:text-purple-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center z-10"
      >
        <div className="text-center space-y-8 px-6">
          <div className="relative">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 animate-pulse">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Bistarai{" "}
              </span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="bg-gradient-to-r from-blue-400 via-teal-400 to-green-400 bg-clip-text text-transparent">
                {/* Bistarai */}
              </span>
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Now Streaming Everywhere!{" "}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://open.spotify.com/track/1XsYFNdIsiFLt7qbQPsUKN?si=93ce4f2843c24926">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                <Play className="mr-2 h-5 w-5" />
                Listen Now
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black px-8 py-3 rounded-full transform hover:scale-105 transition-all duration-300"
              >
                Contact Me
              </Button>
            </a>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-purple-400 rounded-full animate-bounce opacity-60" />
        <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-pink-400 rounded-full animate-pulse opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-50" />
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                About the Artist
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                Rohit Jung Chettri is a renowned Nepali singer and songwriter
                known for his soulful voice and contemporary approach to Nepali
                music. His unique blend of traditional Nepali melodies with
                modern production has captivated audiences across Nepal and
                beyond.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                With multiple hit albums and countless live performances, he has
                established himself as one of the leading voices in contemporary
                Nepali music, touching hearts with his emotional depth and
                musical versatility.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge
                  variant="secondary"
                  className="bg-purple-900/50 text-purple-300 border-purple-400"
                >
                  Folk
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-blue-900/50 text-blue-300 border-blue-400"
                >
                  Contemporary
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-pink-900/50 text-pink-300 border-pink-400"
                >
                  Acoustic
                </Badge>
                <Badge
                  variant="secondary"
                  className="bg-teal-900/50 text-teal-300 border-teal-400"
                >
                  World Music
                </Badge>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src="/Rohit_J_Chettri.jpg"
                  alt="Rohit Jung Chettri"
                  width={400}
                  height={500}
                  className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* favorite Section */}
      <section id="favorite" className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
            Favorite Picks
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {albums.map((album, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={album.cover || "/placeholder.svg"}
                      alt={album.title}
                      width={300}
                      height={300}
                      className="w-full h-auto group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{album.title}</h3>

                  <p className="text-sm text-gray-500 mb-3">
                    Duration: {album.duration}
                  </p>

                  {/* Track List */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-purple-400">
                      Tracks:
                    </h4>
                    {album.tracks.map((track, trackIndex) => (
                      <div
                        key={trackIndex}
                        className="flex items-center justify-between text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
                      >
                        <span>
                          {trackIndex + 1}. {track.title}
                        </span>
                        <a
                          href={track.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          <Link className="h-3 w-3" />
                        </a>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Music Player */}
          {isPlaying && (
            <Card className="bg-white/10 backdrop-blur-md border-white/20 max-w-2xl mx-auto">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <Image
                    src={albums[currentTrack]?.cover || "/placeholder.svg"}
                    alt="Now Playing"
                    width={60}
                    height={60}
                    className="rounded-lg"
                  />
                  <div className="flex-1">
                    <h4 className="font-bold">{albums[currentTrack]?.title}</h4>
                    <p className="text-sm text-gray-400">Rohit John Chettri</p>
                  </div>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => setIsPlaying(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <Pause className="h-5 w-5" />
                  </Button>
                </div>

                {/* Progress Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>1:23</span>
                    <span>3:45</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full w-1/3"></div>
                  </div>
                </div>

                {/* Volume Control */}
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-xs text-gray-400">Volume</span>
                  <div className="flex-1 bg-gray-700 rounded-full h-1">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-pink-600 h-1 rounded-full"
                      style={{ width: `${volume * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-xs text-gray-400">
                    {Math.round(volume * 100)}%
                  </span>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Music Section */}
      <section id="music" className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Music
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Large Featured Photo */}
            <div className="md:col-span-2 lg:row-span-2">
              <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group h-full">
                <CardContent className="p-0 relative h-full min-h-[400px]">
                  <Image
                    src="/sustari.jpg?height=400&width=600"
                    alt="I'm Someone New - Featured Album"
                    width={600}
                    height={400}
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-lg" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-bold mb-2 text-white">
                      Everyone's Favorite: Bistarai Bistarai{" "}
                    </h3>
                    <Button
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                      onClick={() =>
                        window.open(
                          "https://youtu.be/u1ZJpqnvWiU?si=G9tz7z2yCGdWMG0l",
                          "_blank"
                        )
                      }
                    >
                      <Spotify className="mr-2 h-4 w-4" />
                      Play Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Studio Session */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-0 relative">
                <Image
                  src="/placeolder.svg?height=250&width=300"
                  alt="Pani Paryo image"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full"
                    onClick={() =>
                      window.open(
                        "https://youtu.be/VKeGxIPoleg?si=whvJ3uSg4a2iFqi2",
                        "_blank"
                      )
                    }
                  >
                    <Spotify className="mr-2 h-3 w-3" />
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* No Complaint Album */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-0 relative">
                <Image
                  src="/placehoder.svg?height=250&width=300"
                  alt="Timra Dui Aankhama image
"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full"
                    onClick={() =>
                      window.open(
                        "https://youtu.be/3gPFdMOgOOA?si=9EPzEZTaPFdBO-pB",
                        "_blank"
                      )
                    }
                  >
                    <Spotify className="mr-2 h-3 w-3" />
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Photo Collage */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-0 relative">
                <Image
                  src="/placelder.svg?height=250&width=300"
                  alt="Bidaai image"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full"
                    onClick={() =>
                      window.open(
                        "https://youtu.be/wAp7DqRwM4w?si=4Bs3cZ4qMSNbYLB3",
                        "_blank"
                      )
                    }
                  >
                    <Spotify className="mr-2 h-3 w-3" />
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Dirtbag Koda Album 1 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-0 relative">
                <Image
                  src="/placelder.svg?height=250&width=300"
                  alt="Timi Nai image"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full"
                    onClick={() =>
                      window.open(
                        "https://youtu.be/x-1BAzBSDOQ?si=mVXNbhh7Ua8taixd",
                        "_blank"
                      )
                    }
                  >
                    <Spotify className="mr-2 h-3 w-3" />
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Dirtbag Koda Album 2 */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-0 relative">
                <Image
                  src="/placder.svg?height=250&width=300"
                  alt="Badal Image"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full"
                    onClick={() =>
                      window.open(
                        "https://youtu.be/v9HvwMPWMfs?si=Z7dO4vXKMoQO2fOt",
                        "_blank"
                      )
                    }
                  >
                    <Spotify className="mr-2 h-3 w-3" />
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Abstract Art Album */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-0 relative">
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Abstract Art Album"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full"
                    onClick={() =>
                      window.open(
                        "https://open.spotify.com/album/example7",
                        "_blank"
                      )
                    }
                  >
                    <Spotify className="mr-2 h-3 w-3" />
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Behind the Scenes */}
            <Card className="md:col-span-2 bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-0 relative">
                <Image
                  src="/1974.jpg?height=250&width=600"
                  alt="Behind the Scenes"
                  width={600}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold mb-2 text-white">
                    RJC and 1974 AD{" "}
                  </h3>
                  <Button
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white"
                    onClick={() =>
                      window.open(
                        "https://youtube.com/shorts/ll4DiGXtnsc?si=Fyu5MsG7hDL0OJpE",
                        "_blank"
                      )
                    }
                  >
                    <Spotify className="mr-2 h-4 w-4" />
                    Know More{" "}
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Live Performance */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-0 relative">
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Live Performance"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full"
                    onClick={() =>
                      window.open(
                        "https://open.spotify.com/album/example9",
                        "_blank"
                      )
                    }
                  >
                    <Spotify className="mr-2 h-3 w-3" />
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Acoustic Session */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group">
              <CardContent className="p-0 relative">
                <Image
                  src="/placeholder.svg?height=250&width=300"
                  alt="Acoustic Session"
                  width={300}
                  height={250}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white w-full"
                    onClick={() =>
                      window.open(
                        "https://open.spotify.com/album/example10",
                        "_blank"
                      )
                    }
                  >
                    <Spotify className="mr-2 h-3 w-3" />
                    Play Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section id="tours" className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
            Upcoming Tours
          </h2>
          <div className="max-w-4xl mx-auto space-y-4">
            {tours.map((tour, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur-md border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-full">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{tour.date}</h3>
                        <p className="text-gray-400 flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          {tour.venue}, {tour.city}
                        </p>
                      </div>
                    </div>
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                      Get Tickets
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 z-10">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-white/5 backdrop-blur-md border-white/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Send a Message
                </h3>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactForm.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactForm.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={contactForm.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 py-3 text-lg font-semibold transform hover:scale-105 transition-all duration-300"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Sending...
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>

                  {submitStatus && (
                    <div className="text-center p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300">
                      {submitStatus}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
            <div className="space-y-8">
              <Card className="bg-white/5 backdrop-blur-md border-white/10">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                    Connect With Me
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Follow me on social media for the latest updates,
                    behind-the-scenes content, and new music releases.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      className="bg-gradient-to-r from-pink-600 to-red-600 hover:from-pink-700 hover:to-red-700 justify-start"
                      onClick={() =>
                        window.open(
                          "https://www.instagram.com/rohit.john.chettri/?hl=en",
                          "_blank"
                        )
                      }
                    >
                      <Instagram className="h-5 w-5 mr-3" />
                      Instagram
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 justify-start"
                      onClick={() =>
                        window.open(
                          "https://www.facebook.com/rohitjohnchettri/",
                          "_blank"
                        )
                      }
                    >
                      <Facebook className="h-5 w-5 mr-3" />
                      Facebook
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 justify-start"
                      onClick={() =>
                        window.open(
                          "https://www.youtube.com/channel/UCNhLcFjUtFaOtsCwbQ8lQsw",
                          "_blank"
                        )
                      }
                    >
                      <Youtube className="h-5 w-5 mr-3" />
                      YouTube
                    </Button>
                    <Button
                      className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 justify-start"
                      onClick={() =>
                        window.open(
                          "https://open.spotify.com/artist/5CzMXgbioXfdYjkS0Kpqcu?si=OoXOVosxQwuL80b983oQMw",
                          "_blank"
                        )
                      }
                    >
                      <Spotify className="h-5 w-5 mr-3" />
                      Spotify
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10 z-10">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Rohit John Chettri
          </div>
          <p className="text-gray-400 mb-4">rohitjohnchettri@gmail.com</p>
          <p className="text-sm text-gray-500">Made by Uddheshya Studio.</p>
        </div>
      </footer>
    </div>
  );
}
