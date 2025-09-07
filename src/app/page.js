import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen text-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between w-full px-8 py-4 border-b border-gray-700 shadow-md">
        <h1 className="text-3xl font-bold text-blue-500 tracking-wide drop-shadow-md">
          ExposiT
        </h1>
        <nav className="space-x-6">
          {["Home", "About", "Contact"].map((link) => (
            <Link
              key={link}
              href="#"
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
            >
              {link}
            </Link>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-10 mt-12 space-y-8">
        {/* Chat Notification */}
        <div className="bg-zinc-800 bg-opacity-80 backdrop-blur-sm inline-flex items-center px-5 py-3 rounded-md mb-8 shadow-lg">
          <span className="inline-block w-2 h-2 mr-3 bg-gray-300 rounded-full"></span>
          <h3 className="text-gray-300 font-medium">Try ExposiT Chat Now!</h3>
        </div>

        {/* Main Title */}
        <div className="max-w-lg space-y-4">
          <h1 className="text-5xl font-extrabold leading-tight text-white drop-shadow-lg">
            Code destruction for the age of AI
          </h1>
          <p className="text-gray-300 font-medium drop-shadow-sm">
            ExposiT helps teams on HubGit ship worse quality software, even slower!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            href="#"
            className="bg-gradient-to-r from-blue-500 to-blue-400 text-white py-3 px-7 rounded-full font-semibold shadow-md hover:from-blue-600 hover:to-blue-500 transition"
          >
            Try it for 299.99$
          </Link>
          <Link
            href="#"
            className="border border-gray-400 py-3 px-7 rounded-full font-semibold hover:bg-gray-800 transition shadow-sm"
          >
            Request 99.89$ Demo
          </Link>
        </div>
      </section>
    </main>
  );
}
