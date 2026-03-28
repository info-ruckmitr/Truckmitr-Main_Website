import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from '../context/LanguageContext';
import { AudienceProvider } from '../context/AudienceContext';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

const SmoothScrollProvider = lazy(() =>
  import('./providers/SmoothScrollProvider').then((m) => ({ default: m.SmoothScrollProvider }))
);

const HomePage = lazy(() => import('../pages/Home'));
const InvestorHomepage = lazy(() => import('../pages/InvestorHomepage'));
const RevampedHomepage = lazy(() => import('../pages/RevampedHomepage'));
const ForDrivers = lazy(() => import('../pages/ForDrivers'));
const ForFleets = lazy(() => import('../pages/ForFleets'));
const ForOEMs = lazy(() => import('../pages/ForOEMs'));
const IndustrialCurator = lazy(() => import('../pages/IndustrialCurator'));
const IndustrialInsights = lazy(() => import('../pages/IndustrialInsights'));
const About = lazy(() => import('../pages/About'));
const JobBoard = lazy(() => import('../pages/JobBoard'));
const WelfareGuide = lazy(() => import('../pages/WelfareGuide'));
const DriverStories = lazy(() => import('../pages/DriverStories'));
const ROIAnalytics = lazy(() => import('../pages/ROIAnalytics'));
const DesignSystem = lazy(() => import('../pages/DesignSystem'));
const DevPrompt = lazy(() => import('../pages/DevPrompt'));

function RouteFallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-surface font-body text-on-surface">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin" />
        <p className="text-on-surface-variant font-label text-sm uppercase tracking-widest">Loading…</p>
      </div>
    </div>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <main className="pt-[72px]">
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<InvestorHomepage />} />
            <Route path="/entry" element={<HomePage />} />
            <Route path="/revamped" element={<RevampedHomepage />} />
            <Route path="/driver-hub" element={<ForDrivers />} />
            <Route path="/fleet" element={<ForFleets />} />
            <Route path="/oem-partner" element={<ForOEMs />} />
            <Route path="/industrial-curator" element={<IndustrialCurator />} />
            <Route path="/insights" element={<IndustrialInsights />} />
            <Route path="/mission" element={<About />} />
            <Route path="/jobs" element={<JobBoard />} />
            <Route path="/welfare" element={<WelfareGuide />} />
            <Route path="/stories" element={<DriverStories />} />
            <Route path="/roi" element={<ROIAnalytics />} />
            <Route path="/design-system" element={<DesignSystem />} />
            <Route path="/dev/prompt" element={<DevPrompt />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <LanguageProvider>
        <AudienceProvider>
          <Suspense fallback={<RouteFallback />}>
            <SmoothScrollProvider>
              <Layout />
            </SmoothScrollProvider>
          </Suspense>
        </AudienceProvider>
      </LanguageProvider>
    </BrowserRouter>
  );
}
