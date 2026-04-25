import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Copyright from "../components/Copyright";
import assets from "../assets/assets";

const Logout = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const handleLogin = () => {
    const newErrors = {
      email: !form.email || !isValidEmail(form.email),
      password: !form.password,
    };

    setErrors(newErrors);

    if (newErrors.email || newErrors.password) return;

    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (value) {
      setErrors((prev) => ({ ...prev, [name]: false }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#dfeee4] via-[#d9e6ea] to-[#f2dede] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(25,120,102,0.35),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(218,169,87,0.18),transparent_30%),linear-gradient(135deg,rgba(16,41,31,0.95),rgba(26,40,28,0.9),rgba(40,58,43,0.92))] dark:text-white px-4">
      <div className="w-full max-w-md border shadow-2xl shadow-gray-400 dark:shadow-green-900 border-t-red-400 border-r-blue-400 border-b-green-400 border-l-yellow-400 rounded-2xl p-6 sm:p-8 text-center mt-4 bg-transparent">
        {/* Logo */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold text-2xl sm:text-4xl bg-gradient-to-r from-primary to-secondary">
          G
        </div>

        {/* Title */}
        <p className="font-bold text-2xl sm:text-3xl mb-2">Welcome Back</p>
        <p className="text-gray-700 font-semibold dark:text-gray-100 text-sm sm:text-base">
          Sign in to continue
        </p>

        {/* Form */}
        <form className="flex flex-col items-start mt-6 dark:text-white w-full">
          {/* Email */}
          <label className="mb-2 text-sm sm:text-base">Email Address</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
          />

          {/* Password */}
          <label className="mt-4 mb-2 text-sm sm:text-base">Password</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Enter your password"
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
          />

          {/* Remember / Forgot */}
          <div className="flex flex-col sm:flex-row sm:justify-between w-full gap-3 mt-4">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" className="scale-125" />
              Remember me
            </label>

            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={handleLogin}
            className="flex justify-center items-center gap-3 mt-6 w-full h-10 bg-[#53c278] rounded-2xl transition hover:shadow-lg hover:-translate-y-1"
          >
            Sign In
            <img className="w-5 h-5" src={assets.arrow_right} alt="" />
          </button>

          {/* Divider */}
          <div className="flex items-center gap-2 w-full mt-6">
            <div className="flex-1 border"></div>
            <span className="text-gray-200 text-sm">Or continue with</span>
            <div className="flex-1 border"></div>
          </div>

          {/* Social buttons */}
          <div className="flex justify-center gap-4 mt-5 w-full">
            <button className="h-10 w-16 flex items-center justify-center border rounded-lg hover:border-green-400">
              <img className="w-5 h-5" src={assets.google} alt="" />
            </button>

            <button className="h-10 w-16 flex items-center justify-center border rounded-lg hover:border-green-400">
              <img className="w-5 h-5" src={assets.apple} alt="" />
            </button>

            <button className="h-10 w-16 flex items-center justify-center border rounded-lg hover:border-green-400">
              <img className="w-5 h-5" src={assets.gitHub} alt="" />
            </button>
          </div>

          {/* Signup */}
          <p className="mt-6 text-sm text-center w-full">
            Don't have an account?{" "}
            <a className="text-blue-500 underline" href="/signup">
              Create an account
            </a>
          </p>
        </form>
      </div>

      {/* Footer */}
      <div className="mt-6">
        <Copyright />
      </div>
    </div>
  );
};

export default Logout;
