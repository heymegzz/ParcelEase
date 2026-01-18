import { Link } from "react-router-dom";
import bgImage from "../assets/bg-parcels-bw.png";

export default function Landing() {
    return (
        <div className="h-screen w-full relative overflow-hidden font-sans selection:bg-[#eae5d9] selection:text-black">

            <div className="absolute inset-0 z-0">
                <img
                    src={bgImage}
                    alt="Background Texture"
                    className="w-full h-full object-cover grayscale-[0.8] contrast-110 opacity-60"
                />
                <div className="absolute inset-0 bg-[#0a0a0a]/70" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-[#0a0a0a]/50" />
            </div>

            <nav className="absolute top-0 w-full z-50 px-6 py-6 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
                <div className="flex items-center gap-3 select-none cursor-pointer">
                    <div className="w-10 h-10 bg-[#eae5d9] rounded-xl flex items-center justify-center relative shadow-lg shrink-0">
                        <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-2 border-black rounded-[3px]" />
                        <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 bg-black rounded-[2px]" />
                    </div>

                    <span className="text-white font-semibold text-xl tracking-tight leading-none pt-1">
                        ParcelEase
                    </span>
                </div>

                <div className="flex gap-6 items-center">
                    <Link to="/login" className="text-gray-300 hover:text-white text-sm font-medium transition-colors">Login</Link>
                    <Link to="/register" className="px-5 py-2 bg-[#eae5d9] text-black rounded-lg text-sm font-semibold hover:bg-white transition-colors">Register</Link>
                </div>
            </nav>

            <main className="relative z-10 h-full flex flex-col justify-center items-center px-6 text-center max-w-5xl mx-auto">

                <div className="flex items-center gap-4 mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-sm text-[#eae5d9] font-medium tracking-wider uppercase">
                        <svg className="w-4 h-4 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 3L1 9L12 15L21 10.09V17H23V9M5 13.18V17.18L12 21L19 17.18V13.18L12 17L5 13.18Z" />
                        </svg>
                        Campus Parcel Management
                    </span>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
                    Track Every Parcel. <br />
                    <span className="text-[#888] text-opacity-80">Notify Every Student.</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed font-light mb-10 mx-auto">
                    The centralized system for security staff to log deliveries
                    and students to verify pickups. Streamlined, secure, and simple.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                    <Link
                        to="/login"
                        className="px-8 py-4 bg-[#eae5d9] text-black font-bold rounded-xl hover:bg-white hover:scale-105 transition-all text-center min-w-[160px]"
                    >
                        Get Started
                    </Link>
                    <Link
                        to="/register"
                        className="px-8 py-4 border border-white/20 text-white font-medium rounded-xl hover:bg-white/10 transition-all text-center min-w-[160px]"
                    >
                        Create Account
                    </Link>
                </div>

            </main>
        </div>
    );
}
