import { Link } from "react-router-dom";

export default function Register() {
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
                            Create an account
                        </h1>
                        <p className="text-dark-500 text-sm">
                            Get started with ParcelEase
                        </p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label
                                htmlFor="name"
                                className="block text-sm font-medium text-beige-300 mb-2"
                            >
                                Full name
                            </label>
                            <input
                                type="text"
                                id="name"
                                placeholder="John Doe"
                                className="w-full px-4 py-3 rounded-lg border border-dark-700 bg-dark-950 text-beige-100 placeholder:text-dark-600 focus:outline-none focus:border-beige-500/50 focus:ring-1 focus:ring-beige-500/50 transition-all duration-200"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-beige-300 mb-2"
                            >
                                College Email
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
                                htmlFor="role"
                                className="block text-sm font-medium text-beige-300 mb-2"
                            >
                                Role
                            </label>
                            <select
                                id="role"
                                className="w-full px-4 py-3 rounded-lg border border-dark-700 bg-dark-950 text-beige-100 focus:outline-none focus:border-beige-500/50 focus:ring-1 focus:ring-beige-500/50 transition-all duration-200"
                            >
                                <option value="student" className="bg-dark-950">Student</option>
                                <option value="security" className="bg-dark-950">Security Staff</option>
                                <option value="admin" className="bg-dark-950">Administrator</option>
                            </select>
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
                            Create account
                        </button>
                    </form>

                    <p className="text-center text-sm text-dark-500 mt-8">
                        Already have an account?{" "}
                        <Link
                            to="/login"
                            className="text-beige-400 font-medium hover:text-beige-200 transition-colors"
                        >
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
