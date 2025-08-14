import {Logout} from "@/components/logout";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <header className="bg-white shadow-md px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-indigo-600">My Dashboard</h1>
        <Logout />
      </header>
      <main className="flex-1 p-6">
        <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-xl p-6 shadow-lg">
          <h2 className="text-3xl font-bold mb-2">Welcome back, User! 👋</h2>
          <p className="text-lg opacity-90">
            Here’s what’s happening with your account today.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Account Balance
            </h3>
            <p className="text-3xl font-bold text-green-500">$5,230.75</p>
            <p className="text-sm text-gray-500 mt-1">Updated just now</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Recent Activity
            </h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>✅ Payment sent to John</li>
              <li>💳 Card payment received</li>
              <li>📦 Order #4532 shipped</li>
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-5 hover:shadow-xl transition-shadow">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">
              Notifications
            </h3>
            <ul className="text-gray-600 space-y-1 text-sm">
              <li>🔔 Your subscription renews tomorrow</li>
              <li>📧 New message from Support</li>
              <li>🆕 New feature update available</li>
            </ul>
          </div>
        </div>
        <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            Activity Overview
          </h3>
          <div className="h-48 flex items-center justify-center text-gray-400">
            📊 Chart placeholder (integrate Chart.js or Recharts here)
          </div>
        </div>
      </main>
      <footer className="bg-gray-100 text-gray-600 text-sm text-center py-4">
        &copy; {new Date().getFullYear()} My Dashboard. All rights reserved.
      </footer>
    </div>
  );
}
