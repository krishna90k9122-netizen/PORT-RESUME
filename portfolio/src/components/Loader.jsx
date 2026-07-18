// Animated loading screen shown on initial page load
const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-950">
      <div className="relative">
        {/* Outer pulsing ring */}
        <div className="absolute inset-0 rounded-full bg-blue-500/20 animate-ping" />
        {/* Spinner */}
        <div className="loader relative z-10" />
      </div>
      <p className="mt-6 text-lg font-display font-semibold text-gradient">
        Krishna Gupta
      </p>
      <p className="text-sm text-gray-400 mt-1">Loading portfolio...</p>
    </div>
  )
}

export default Loader
