export default function Loading() {
  return (
    <div className="min-h-screen bg-bg flex flex-col">
      {/* Hero Skeleton */}
      <div className="bg-hero-gradient pt-36 pb-20 animate-pulse">
        <div className="container">
          <div className="h-4 w-32 bg-white/20 rounded-full mx-auto mb-4" />
          <div className="h-12 w-3/4 max-w-lg bg-white/20 rounded-2xl mx-auto mb-6" />
          <div className="h-4 w-1/2 max-w-sm bg-white/10 rounded-full mx-auto" />
        </div>
      </div>

      {/* Content Skeleton */}
      <div className="flex-1 py-20">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-3xl p-8 shadow-card border border-border/50 animate-pulse">
                <div className="w-16 h-16 bg-bg rounded-2xl mb-6" />
                <div className="h-6 w-3/4 bg-bg rounded-lg mb-4" />
                <div className="space-y-3">
                  <div className="h-3 w-full bg-bg/70 rounded" />
                  <div className="h-3 w-full bg-bg/70 rounded" />
                  <div className="h-3 w-2/3 bg-bg/70 rounded" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 space-y-12">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-4 animate-pulse">
                <div className="h-4 w-24 bg-accent-pale rounded-full" />
                <div className="h-10 w-3/4 bg-bg rounded-xl" />
                <div className="space-y-3 pt-4">
                  <div className="h-4 w-full bg-bg/70 rounded" />
                  <div className="h-4 w-full bg-bg/70 rounded" />
                  <div className="h-4 w-5/6 bg-bg/70 rounded" />
                </div>
              </div>
              <div className="flex-1 aspect-[4/3] bg-bg rounded-3xl animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
