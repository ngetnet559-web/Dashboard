import { useState } from "react";
import assets from "../assets/assets";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import Copyright from "../components/Copyright";
import Toggle from "../components/Toggle";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const initialForm = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    bio: "",
    language: "",
    timezone: "",
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
    twoFA: false,
    authentication: false,
    authenticator: false,
    getNotified: false,
    updates: false,
    reports: false,
    news: false,
    showNotify: false,
    sound: false,
    mobile: false,
    theme: "",
    accent: "",
  };

  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Settings saved successfully ✅");
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    alert("Password is Updated Successfully 👍👍👍");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const isPasswordInvalid =
    !form.currentPassword ||
    !form.newPassword ||
    !form.confirmNewPassword ||
    form.newPassword !== form.confirmNewPassword;

  const menuItemClass = (tab) =>
    `flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${
      activeTab === tab
        ? "bg-gray-200 dark:bg-[rgba(113,132,141,1)] font-bold"
        : "hover:bg-[rgba(113,132,141,0.15)]"
    }`;

  return (
    <div className="min-h-screen bg-linear-to-br from-[#ffffff] via-[#e8eeee] to-[#d8f6f9] dark:bg-[radial-gradient(circle_at_20%_20%,rgba(25,120,102,0.35),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(218,169,87,0.18),transparent_30%),linear-gradient(135deg,rgba(16,41,31,0.95),rgba(26,40,28,0.9),rgba(40,58,43,0.92))]  px-3 sm:px-4 lg:px-6 ">
      <div className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center py-6">
        <div className="flex flex-col">
          <h1 className="text-2xl sm:text-3xl font-bold dark:text-white text-gray-800">
            Settings
          </h1>
          <p className="text-sm font-semibold dark:text-white text-gray-500 mt-1">
            <Link
              to="/"
              className="hover:underline dark:text-blue-200 text-blue-600"
            >
              Dashboard
            </Link>
            <span className="mx-1">/</span> Settings
          </p>
        </div>

        <div className="w-full sm:w-auto">
          <Navbar />
        </div>
      </div>

      <div className="flex flex-col dark:text-white lg:flex-row gap-4 min-h-screen">
        <div className="border dark:text-white  rounded-2xl w-full lg:w-72 p-4 shrink-0">
          <ul className="space-y-3">
            <li
              onClick={() => setActiveTab("profile")}
              className={menuItemClass("profile")}
            >
              <img
                className="size-5 dark:invert sm:size-6"
                src={assets.Suser}
                alt=""
              />
              <h1 className="text-base sm:text-lg">Profile</h1>
            </li>

            <li
              onClick={() => setActiveTab("security")}
              className={menuItemClass("security")}
            >
              <img
                className="size-5 dark:invert sm:size-6"
                src={assets.lock}
                alt=""
              />
              <h1 className="text-base sm:text-lg">Security</h1>
            </li>

            <li
              onClick={() => setActiveTab("notification")}
              className={menuItemClass("notification")}
            >
              <img
                className="size-5 dark:invert sm:size-6"
                src={assets.bell}
                alt=""
              />
              <h1 className="text-base sm:text-lg">Notification</h1>
            </li>

            <li
              onClick={() => setActiveTab("appearance")}
              className={menuItemClass("appearance")}
            >
              <img
                className="size-5 dark:invert sm:size-6"
                src={assets.moon}
                alt=""
              />
              <h1 className="text-base sm:text-lg">Appearance</h1>
            </li>

            <li
              onClick={() => setActiveTab("billing")}
              className={menuItemClass("billing")}
            >
              <img
                className="size-5 dark:invert sm:size-6"
                src={assets.cart}
                alt=""
              />
              <h1 className="text-base sm:text-lg">Billing</h1>
            </li>
          </ul>
        </div>

        {activeTab === "profile" && (
          <div className="border rounded-2xl flex-1 overflow-hidden">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 p-4 sm:p-6">
              <div className="relative w-fit">
                <div className="flex items-center justify-center text-2xl bg-gradient-to-tr from-green-200 to-blue-300 border rounded-2xl h-20 w-20">
                  TM
                </div>
                <div className="absolute -bottom-2 -right-2 border rounded-xl p-1 h-8 w-8 flex items-center justify-center z-30 dark:bg-indigo-300 bg-green-100 hover:border-green-400">
                  <img
                    className="w-full dark:invert h-full object-contain"
                    src={assets.Suser}
                    alt=""
                  />
                </div>
              </div>

              <div>
                <h1 className="text-lg font-semibold">Profile</h1>
                <p className="text-sm dark:text-white text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>

            <div className="px-4 sm:px-6 pb-6">
              <h1 className="font-semibold">Profile Information</h1>
              <hr className="mb-4 mt-4 text-[#dccdcd]" />

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 dark:text-white md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label className="text-sm font-medium dark:text-white text-gray-600 mb-1">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="text-sm font-medium dark:text-white text-gray-600 mb-1">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium dark:text-white text-gray-600 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@gmail.com"
                    className="border rounded-lg p-2  focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium dark:text-white text-gray-600 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-sm font-medium dark:text-white text-gray-600 mb-1">
                    Bio
                  </label>
                  <textarea
                    name="bio"
                    value={form.bio}
                    onChange={handleChange}
                    placeholder="Type something..."
                    rows="4"
                    className="border  rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                <div>
                  <h1 className="font-semibold">Preferences</h1>
                  <hr className="mb-4 mt-4 text-[#dccdcdb5]" />
                </div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                  <div>
                    <h1 className="font-medium">Language</h1>
                    <p className="text-sm dark:text-white text-gray-500">
                      Select your preferred language
                    </p>
                  </div>

                  <select
                    name="language"
                    value={form.language}
                    onChange={handleChange}
                    className="bg-gray-300 dark:bg-blue-300 dark:text-gray-900  p-2 rounded w-full md:w-56"
                  >
                    <option value="">English (US)</option>
                    <option value="en-uk">English (UK)</option>
                    <option value="es">Spanish</option>
                    <option value="fr">French</option>
                    <option value="de">German</option>
                  </select>
                </div>

                <hr className="mb-4 mt-4 text-[#dccdcdb5]" />

                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
                  <div>
                    <h1 className="font-medium">Time Zone</h1>
                    <p className="text-sm dark:text-white text-gray-500">
                      Set your local timezone
                    </p>
                  </div>

                  <select
                    name="timezone"
                    value={form.timezone}
                    onChange={handleChange}
                    className="bg-gray-300 dark:bg-blue-300 dark:text-gray-900 p-2 rounded w-full md:w-56"
                  >
                    <option value="">UTC -08:00 (Pacific)</option>
                    <option value="est">UTC -05:00 (Eastern)</option>
                    <option value="gmt">UTC +00:00 (London)</option>
                    <option value="cet">UTC +01:00 (Berlin)</option>
                    <option value="jst">UTC +09:00 (Tokyo)</option>
                  </select>
                </div>

                <div className="flex flex-wrap gap-3">
                  <button
                    type="submit"
                    disabled={!form.firstName || !form.email || !form.lastName}
                    className={`px-4 py-2 rounded-lg transition ${
                      !form.firstName || !form.email || !form.lastName
                        ? "bg-gray-300 dark:bg-blue-50 dark:text-gray-400 cursor-not-allowed"
                        : "bg-blue-500 text-white hover:bg-blue-600"
                    }`}
                  >
                    Save Changes
                  </button>

                  <button
                    type="button"
                    onClick={() => setForm(initialForm)}
                    className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {activeTab === "security" && (
          <div className="border rounded-2xl flex-1 p-4 sm:p-6">
            <div>
              <p className="text-xl sm:text-2xl font-serif">Change Password</p>
              <hr className="mb-4 mt-4 text-[#dccdcdb5]" />
            </div>

            <div className="space-y-4">
              <div className="flex flex-col gap-2">
                <label className="text-base sm:text-lg font-medium text-gray-600">
                  Current Password
                </label>
                <input
                  type="password"
                  name="currentPassword"
                  value={form.currentPassword}
                  onChange={handleChange}
                  placeholder="Enter current password"
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col gap-2">
                  <label className="text-base sm:text-lg font-medium text-gray-600">
                    New Password
                  </label>
                  <input
                    type="password"
                    name="newPassword"
                    value={form.newPassword}
                    onChange={handleChange}
                    placeholder="Enter new password"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-base sm:text-lg font-medium text-gray-600">
                    Confirm New Password
                  </label>
                  <input
                    type="password"
                    name="confirmNewPassword"
                    value={form.confirmNewPassword}
                    onChange={handleChange}
                    placeholder="Enter the new password again"
                    className={`w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-400 ${
                      form.confirmNewPassword &&
                      form.newPassword !== form.confirmNewPassword
                        ? "border-red-500"
                        : ""
                    }`}
                  />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xl sm:text-2xl font-serif">
                Two-Factor Authentication
              </p>
              <hr className="mb-4 mt-4 text-[#dccdcdb5]" />

              {[
                {
                  title: "Enable 2FA",
                  desc: "Add an extra layer of security to your account",
                  value: form.twoFA,
                  key: "twoFA",
                },
                {
                  title: "SMS Authentication",
                  desc: "Receive codes via SMS",
                  value: form.authentication,
                  key: "authentication",
                },
                {
                  title: "Authenticator App",
                  desc: "Use Google Authenticator or similar",
                  value: form.authenticator,
                  key: "authenticator",
                },
              ].map((item) => (
                <div key={item.key}>
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-4">
                    <div>
                      <h1 className="font-medium">{item.title}</h1>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                    <Toggle
                      value={item.value}
                      onChange={(val) => setForm({ ...form, [item.key]: val })}
                    />
                  </div>
                  <hr className="text-[#dccdcdb5]" />
                </div>
              ))}

              <div className="mt-6">
                <h1 className="text-lg font-semibold">Active Sessions</h1>
                <hr className="mb-4 mt-2 text-[#dccdcdb5]" />
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <h1>Chrome on MacOS</h1>
                    <p className="text-gray-400 text-sm">
                      San Francisco, CA • Current session
                    </p>
                  </div>
                  <div className="flex gap-2 border rounded-full px-3 py-1 items-center bg-gray-200 border-gray-300 w-fit">
                    <div className="h-3 w-3 rounded-full bg-green-300"></div>
                    <p className="text-sm text-green-500">Active</p>
                  </div>
                </div>

                <hr className="text-[#dccdcdb5]" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <h1>Safari on iPhone</h1>
                    <p className="text-gray-400 text-sm">
                      San Francisco, CA • 2 hours ago
                    </p>
                  </div>
                  <button className="border-2 px-4 py-2 rounded-xl hover:border-[#28f858] bg-gray-100 border-gray-300 w-fit">
                    Revoke
                  </button>
                </div>

                <hr className="text-[#dccdcdb5]" />

                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3">
                  <div>
                    <h1>Firefox on Windows</h1>
                    <p className="text-gray-400 text-sm">
                      New York, NY • 3 days ago
                    </p>
                  </div>
                  <button className="border-2 px-4 py-2 rounded-xl hover:border-[#28f858] bg-gray-100 border-gray-300 w-fit">
                    Revoke
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                type="submit"
                disabled={isPasswordInvalid}
                onClick={handleUpdate}
                className={`px-4 py-2 rounded-lg transition ${
                  isPasswordInvalid
                    ? "bg-gray-300 cursor-not-allowed"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Update Password
              </button>

              <button
                type="button"
                onClick={() => setForm(initialForm)}
                className="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition"
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Notification */}
        {activeTab === "notification" && (
          <div className="border rounded-2xl flex-1 p-4 sm:p-6">
            <div>
              <h1 className="font-semibold font-serif text-lg sm:text-xl">
                Email Notification
              </h1>
              <hr className="mb-4 mt-2 text-[#dccdcdb5]" />
            </div>

            {[
              {
                title: "Account Activity",
                desc: "Get notified about sign-ins and security changes",
                key: "getNotified",
              },
              {
                title: "New Features",
                desc: "Learn about new features and updates",
                key: "updates",
              },
              {
                title: "Weekly Reports",
                desc: "Receive weekly analytics summary",
                key: "reports",
              },
              {
                title: "Marketing Emails",
                desc: "Receive news about promotions and offers",
                key: "news",
              },
            ].map((item) => (
              <div key={item.key}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-4">
                  <div>
                    <h1 className="font-semibold">{item.title}</h1>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                  <Toggle
                    value={form[item.key]}
                    onChange={(val) => setForm({ ...form, [item.key]: val })}
                  />
                </div>
                <hr className="text-[#dccdcdb5]" />
              </div>
            ))}

            <div className="mt-8">
              <h1 className="font-semibold font-serif text-lg sm:text-xl">
                Push Notifications
              </h1>
              <hr className="mb-4 mt-2 text-[#dccdcdb5]" />
            </div>

            {[
              {
                title: "Desktop Notifications",
                desc: "Show notifications on your desktop",
                key: "showNotify",
              },
              {
                title: "Mobile Push",
                desc: "Receive push notifications on mobile",
                key: "mobile",
              },
              {
                title: "Sound",
                desc: "Play sound for notifications",
                key: "sound",
              },
            ].map((item) => (
              <div key={item.key}>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 py-4">
                  <div>
                    <h1 className="font-semibold">{item.title}</h1>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                  <Toggle
                    value={form[item.key]}
                    onChange={(val) => setForm({ ...form, [item.key]: val })}
                  />
                </div>
                <hr className="text-[#dccdcdb5]" />
              </div>
            ))}

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="border-2 border-gray-400 rounded-xl px-4 py-2 hover:border-blue-400 hover:scale-105 hover:shadow-lg hover:shadow-[#7bdaf8] bg-blue-400 transition">
                Save Preferences
              </button>
              <button className="border-2 border-gray-400 rounded-xl px-4 py-2 hover:border-blue-400 bg-transparent transition">
                Reset To Default
              </button>
            </div>
          </div>
        )}

        {/* Appearance */}
        {activeTab === "appearance" && (
          <div className="border rounded-2xl flex-1 p-4 sm:p-6">
            <p className="font-semibold text-xl sm:text-2xl">Theme</p>
            <hr className="mb-8 mt-4 text-[#dccdcdb5]" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
              <div>
                <h1 className="font-semibold">Color Mode</h1>
                <p className="text-gray-400 text-sm">
                  Choose your preferred color mode
                </p>
              </div>
              <select
                name="theme"
                value={form.theme}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded w-full md:w-56"
              >
                <option value="">Dark Mode</option>
                <option value="lg">Light</option>
                <option value="df">Default</option>
              </select>
            </div>

            <hr className="mb-8 mt-4 text-[#dccdcdb5]" />

            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-3">
              <div>
                <h1 className="font-semibold">Accent Color</h1>
                <p className="text-gray-400 text-sm">
                  Choose your preferred accent color
                </p>
              </div>
              <select
                name="accent"
                value={form.accent}
                onChange={handleChange}
                className="bg-gray-300 p-2 rounded w-full md:w-56"
              >
                <option value="">Emerald(default)</option>
                <option value="lg">Blue</option>
                <option value="df">Purple</option>
                <option value="or">Orange</option>
                <option value="pn">Pink</option>
              </select>
            </div>
          </div>
        )}

        {/* Billing */}
        {activeTab === "billing" && (
          <div className="border rounded-2xl flex-1 p-4 sm:p-6">
            <div>
              <h1 className="font-semibold text-lg">Current Plan</h1>
              <hr className="mb-8 mt-4 text-[#dccdcdb5]" />

              <div className="border rounded-xl bg-[#affad6a4]">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4 p-6">
                  <div>
                    <h1 className="font-bold">Pro Plan</h1>
                    <p className="text-gray-600">Billed monthly</p>
                  </div>

                  <div className="flex items-end gap-1">
                    <p className="text-4xl sm:text-5xl">$29</p>
                    <span className="text-gray-400 text-sm mb-1">/month</span>
                  </div>
                </div>

                <div className="p-4 flex flex-wrap gap-3">
                  <button className="border border-gray-300 px-4 py-2 rounded-2xl hover:bg-[#149cca] transition">
                    Upgrade Plan
                  </button>
                  <button className="border border-gray-300 px-4 py-2 rounded-2xl hover:bg-[#149cca] transition">
                    Cancel Subscription
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h1 className="font-bold">Payment Method</h1>
              <hr className="mb-8 mt-4 text-[#dccdcdb5]" />

              <div className="flex flex-wrap justify-center  sm:justify-between gap-4 mt-20">
                <div className="flex w-full sm:w-[48%] md:w-60 h-24 items-center justify-center p-4 sm:p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary transition-all duration-300 mb-4">
                  <img
                    className="h-10 sm:h-12 md:h-14 object-contain"
                    src={assets.visa2}
                    alt="visa"
                  />
                </div>

                <div className="flex w-full sm:w-[48%] md:w-60 h-24 items-center justify-center p-4 sm:p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary transition-all duration-300">
                  <img
                    className="h-10 sm:h-12 md:h-14 dark:invert object-contain"
                    src={assets.mastercard}
                    alt="Mastercard"
                  />
                </div>

                <div className="flex w-full sm:w-[48%] md:w-60 h-24 items-center justify-center p-4 sm:p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary transition-all duration-300">
                  <img
                    className="h-10 sm:h-12 md:h-14 object-contain dark:invert"
                    src={assets.paypal2}
                    alt="PayPal"
                  />
                </div>

                <div className="flex w-full sm:w-[48%] md:w-60 h-24 items-center justify-center p-4 sm:p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary transition-all duration-300">
                  <img
                    className="h-10 sm:h-12 md:h-14 object-contain"
                    src={assets.bank}
                    alt="bank"
                  />
                </div>

                <div className="flex w-full sm:w-[48%] md:w-60 h-24 items-center justify-center p-4 sm:p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary transition-all duration-300">
                  <img
                    className="h-10 sm:h-12 md:h-14 object-contain"
                    src={assets.googlePay}
                    alt="Google Pay"
                  />
                </div>

                <div className="flex w-full sm:w-[48%] md:w-60 h-24 items-center justify-center p-4 sm:p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl cursor-pointer shadow-sm hover:shadow-lg hover:-translate-y-1 hover:border-primary transition-all duration-300">
                  <img
                    className="h-10 sm:h-12 dark:invert md:h-14 object-contain "
                    src={assets.amazon}
                    alt="Apple Pay"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="text-center font-semibold p-4">
        <Copyright />
      </div>
    </div>
  );
};

export default Settings;
