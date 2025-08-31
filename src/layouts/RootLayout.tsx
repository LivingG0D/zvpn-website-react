import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function RootLayout() {
  const location = useLocation()

  // Scroll to top when route changes
  useEffect(() => {
    // Smooth scroll to top with a small delay to ensure DOM is ready
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }

    // Use setTimeout to ensure the page content has rendered
    const timeoutId = setTimeout(scrollToTop, 0)

    return () => clearTimeout(timeoutId)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100">
      <Header />
      <main className="bg-slate-900">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
