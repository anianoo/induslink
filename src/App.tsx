import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { SiteLayout } from "@/components/layout/SiteLayout"
import Home from "@/pages/Home"
import About from "@/pages/About"
import Services from "@/pages/Services"
import ServiceDetail from "@/pages/ServiceDetail"
import Solutions from "@/pages/Solutions"
import SolutionDetail from "@/pages/SolutionDetail"
import Cases from "@/pages/Cases"
import CaseDetail from "@/pages/CaseDetail"
import Qualifications from "@/pages/Qualifications"
import News from "@/pages/News"
import NewsDetail from "@/pages/NewsDetail"
import Support from "@/pages/Support"
import Downloads from "@/pages/Downloads"
import DownloadDetail from "@/pages/DownloadDetail"
import Careers from "@/pages/Careers"
import CareerDetail from "@/pages/CareerDetail"
import Contact from "@/pages/Contact"
import Faq from "@/pages/Faq"
import Privacy from "@/pages/Privacy"
import Terms from "@/pages/Terms"
import Sitemap from "@/pages/Sitemap"
import Search from "@/pages/Search"
import NotFound from "@/pages/NotFound"

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:slug" element={<SolutionDetail />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:slug" element={<CaseDetail />} />
          <Route path="/qualifications" element={<Qualifications />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:slug" element={<NewsDetail />} />
          <Route path="/support" element={<Support />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/downloads/:slug" element={<DownloadDetail />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/careers/:slug" element={<CareerDetail />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  )
}
