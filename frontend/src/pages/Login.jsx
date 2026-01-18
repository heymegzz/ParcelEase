import { Link } from "react-router-dom";

export default function Login() {
    return (
        <div className="min-h-screen bg-dark-950 flex items-center justify-center px-6 py-12">
            <div className="w-full max-w-md">
                <Link
                    to="/"
                    className="text-dark-600 hover:text-beige-300 text-sm mb-8 inline-flex items-center gap-2 transition-colors duration-200"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back to home</span>
                </Link>

                <div className="bg-dark-900 rounded-xl p-8 border border-dark-800 shadow-soft">
                    <div className="mb-8">
                        <h1 className="text-2xl font-bold text-beige-100 mb-2">
                            Welcome back
                        </h1>
                        <p className="text-dark-500 text-sm">
                            Sign in to access your parcel dashboard
                        </p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-beige-300 mb-2"
                            >
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="you@college.edu"
                                className="w-full px-4 py-3 rounded-lg border border-dark-700 bg-dark-950 text-beige-100 placeholder:text-dark-600 focus:outline-none focus:border-beige-500/50 focus:ring-1 focus:ring-beige-500/50 transition-all duration-200"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-beige-300 mb-2"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full px-4 py-3 rounded-lg border border-dark-700 bg-dark-950 text-beige-100 placeholder:text-dark-600 focus:outline-none focus:border-beige-500/50 focus:ring-1 focus:ring-beige-500/50 transition-all duration-200"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-3 mt-6 bg-beige-100 text-dark-950 rounded-lg font-medium hover:bg-white transition-colors duration-200"
                        >
                            Sign in
                        </button>
                    </form>

                    <p className="text-center text-sm text-dark-500 mt-8">
                        Don&apos;t have an account?{" "}
                        <Link
                            to="/register"
                            className="text-beige-400 font-medium hover:text-beige-200 transition-colors"
                        >
                            Register
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
