
function Form({ type, onSubmit, username, setUsername, password, setPassword, role, setRole }) {

    return (
        <div className="w-full min-h-screen bg-gray-800 flex flex-col justify-center items-center">
            <form className="bg-gray-900 p-6 rounded-lg shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-bold text-indigo-500 mb-4">
                {type === "login" ? "Login" : "Sign Up"}
                </h2>
                <p className="text-blue-400 mb-6">
                {type === "login" ? "Welcome back! Please login to your account." : "Create a new account by filling in the details below."}
                </p>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-300 mb-2">Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                </div>
                {type === "signup" ? (
                    <div className="mb-4">
                        <label className="block text-gray-300 mb-2">Role</label>
                        <select
                            value={role}
                            onChange={(e) => setRole(e.target.value)}
                            className="w-full p-2 border border-gray-700 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        >
                            <option value="">Select Role</option>
                            <option value="USER">USER</option>
                            <option value="ADMIN">ADMIN</option>
                        </select>
                    </div>
                ) : null}
                <button
                    type="submit"
                    onClick={onSubmit}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
                >
                    {type === "login" ? "Login" : "Sign Up"}
                </button>
            </form>
            {type === "login" ? (
                <p className="text-gray-300 mt-4">
                    Don't have an account? <a href="/signup" className="text-blue-500 hover:underline">Sign Up</a>
                </p>
            ) : (
                <p className="text-gray-300 mt-4">
                    Already have an account? <a href="/login" className="text-blue-500 hover:underline">Login</a>
                </p>
            )}
        </div>
    );
}

export default Form;