import { Link } from 'react-router-dom'
import { Button } from '../ui/Button'
import { cn } from '../../lib/utils'

function FooterCol({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div>
      <h4 className="mb-4 text-sm font-bold text-[var(--text-primary)]">{title}</h4>
      <div className="flex flex-col gap-2 text-sm text-[var(--text-secondary)]">{children}</div>
    </div>
  )
}

function FooterLink({
  to,
  children,
}: {
  to: string
  children: React.ReactNode
}) {
  return (
    <Link
      to={to}
      className="transition-colors hover:text-[var(--saffron)]"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="relative border-t border-[var(--border)] bg-[var(--bg-primary)]">
      <div className="relative mx-auto max-w-[1280px] px-6 py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-3">
              <img
                src="/logotrick.png"
                alt="TruckMitr"
                className="h-9 w-auto object-contain"
              />
            </div>
            <p className="mb-4 text-[13px] leading-relaxed text-[var(--text-secondary)]">
              India&apos;s first driver-centric platform. Built for the person who keeps the
              country moving. Verified jobs, welfare support, health guidance, and future-ready
              skills — all in one place.
            </p>
            <Button variant="whatsapp" size="sm" as="a" href="#">
              💬 Chat on WhatsApp
            </Button>
          </div>

          <FooterCol title="For Drivers">
            <FooterLink to="/jobs">Job Board</FooterLink>
            <FooterLink to="/drivers">Health & Wellness</FooterLink>
            <FooterLink to="/drivers">Welfare Schemes Guide</FooterLink>
            <FooterLink to="/drivers">Learn & Upskill</FooterLink>
            <FooterLink to="#">Driver Stories</FooterLink>
            <FooterLink to="#">Driver FAQs</FooterLink>
          </FooterCol>

          <FooterCol title="For Business">
            <FooterLink to="/fleet">Fleet Owners</FooterLink>
            <FooterLink to="/oem">OEMs & Partners</FooterLink>
            <FooterLink to="#">CSR Programmes</FooterLink>
            <FooterLink to="#">Post a Job</FooterLink>
            <FooterLink to="#">Book a Demo</FooterLink>
          </FooterCol>

          <FooterCol title="Company">
            <FooterLink to="/about">About TruckMitr</FooterLink>
            <FooterLink to="#">Contact Us</FooterLink>
            <FooterLink to="#">Privacy Policy</FooterLink>
            <FooterLink to="#">Terms of Service</FooterLink>
            <FooterLink to="#">Careers</FooterLink>
          </FooterCol>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-[var(--border)] pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-[var(--text-muted)]">
            © 2026 TruckMitr. India&apos;s First Driver-Centric Platform.
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-[var(--border)] bg-[var(--bg-secondary)] px-3 py-1 text-xs text-[var(--text-secondary)]">
              🇮🇳 Made in India
            </span>
            <span className="rounded-full bg-[#138808]/15 px-3 py-1 text-xs font-semibold text-[#0f6e56]">
              Driver-First
            </span>
          </div>
        </div>

        <p
          className={cn(
            'mt-8 max-w-4xl text-[11px] leading-relaxed text-[var(--text-muted)]',
          )}
        >
          Disclaimer: TruckMitr provides information and guidance on government welfare schemes.
          Official approval, eligibility determination, and benefit issuance is handled by the
          respective government departments and portals. Driver shortage estimates are based on
          widely reported industry and government sources. TruckMitr does not charge drivers any
          placement fees. Data privacy: your profile information is used only for job matching
          and welfare support. We do not sell your data. Never share your OTP with unknown
          numbers.
        </p>
      </div>
    </footer>
  )
}
