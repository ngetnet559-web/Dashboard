import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Copyright from "../components/Copyright";
import assets from "../assets/assets";

const Signup = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [agreed, setAgreed] = useState(false);

  const [errors, setErrors] = useState({
    name: false,
    email: false,
    password: false,
  });

  const navigate = useNavigate();

  const isValidEmail = (email) => /\S+@\S+\.\S+/.test(email);

  const isPasswordInvalid =
    !form.password ||
    !form.confirmPassword ||
    form.password !== form.confirmPassword;

  const isConfirmTouched = form.confirmPassword.length > 0;

  const handleLogin = () => {
    const newErrors = {
      name: !form.name,
      email: !form.email || !isValidEmail(form.email),
      password: !form.password,
    };

    setErrors(newErrors);

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.password ||
      isPasswordInvalid ||
      !agreed
    )
      return;

    navigate("/");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });

    if (value) {
      setErrors((prev) => ({
        ...prev,
        [name]: false,
      }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#dfeee4] via-[#d9e6ea] to-[#f2dede] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(25,120,102,0.35),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(218,169,87,0.18),transparent_30%),linear-gradient(135deg,rgba(16,41,31,0.95),rgba(26,40,28,0.9),rgba(40,58,43,0.92))] dark:text-white px-4">
      <div className="w-full mt-4 max-w-md border shadow-2xl shadow-gray-400 dark:shadow-green-900 border-t-red-400 border-r-blue-400 border-b-green-400 border-l-yellow-400 rounded-2xl p-6 sm:p-8 text-center bg-transparent">
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 flex items-center justify-center rounded-full text-white font-bold text-2xl sm:text-3xl bg-gradient-to-r from-primary to-secondary">
          G
        </div>

        <p className="font-bold text-2xl sm:text-3xl mb-2">Create Account</p>
        <p className="text-gray-700 font-semibold text-sm dark:text-gray-100 sm:text-base">
          Start your journey
        </p>

        {/* Form */}
        <form className="flex flex-col items-start dark:text-white mt-6 w-full">
          <label className="mb-2 text-sm sm:text-base">Full Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your full name"
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
          />

          <label className="mt-4 mb-2 text-sm sm:text-base">
            Email Address
          </label>
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

          <label className="mt-4 mb-2 text-sm sm:text-base">
            Confirm Password
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            placeholder="Confirm your password"
            className={`w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 ${
              isConfirmTouched && form.password !== form.confirmPassword
                ? "border-red-500"
                : "border-gray-300"
            }`}
          />

          <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-4 w-full">
            <label className="flex items-start gap-2 text-sm">
              <input
                type="checkbox"
                checked={agreed}
                onChange={() => setAgreed(!agreed)}
                className="scale-125 mt-1"
              />
              <span>
                I agree to the{" "}
                <a className="text-blue-600 underline" href="#">
                  Terms & Conditions
                </a>
              </span>
            </label>
          </div>

          <button
            type="button"
            disabled={isPasswordInvalid || !agreed}
            onClick={handleLogin}
            className={`flex justify-center items-center gap-3 mt-6 w-full h-10 rounded-2xl transition ${
              isPasswordInvalid || !agreed
                ? "bg-gray-300 dark:bg-gray-700 cursor-not-allowed"
                : "bg-[#53c278] hover:shadow-lg hover:-translate-y-1"
            }`}
          >
            Create Account
          </button>

          <div className="flex items-center gap-2 w-full mt-6">
            <div className="flex-1 border"></div>
            <span className="text-gray-200 text-sm">Or sign up with</span>
            <div className="flex-1 border"></div>
          </div>

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

          <p className="mt-6 text-sm text-center w-full">
            Already have an account?
            <a className="text-blue-500 underline ml-2" href="/logout">
              Sign In
            </a>
          </p>
        </form>
      </div>

      <div className="mt-6">
        <Copyright />
      </div>
    </div>
  );
};

export default Signup;
