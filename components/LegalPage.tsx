import Footer from "@/components/Footer";
import { BUSINESS } from "@/lib/business";

export default function LegalPage({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <>
      <main className="blog-post-page">
        <div className="blog-post-container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li><a href="/">MapDominate</a></li>
              <li>{title}</li>
            </ol>
          </nav>
          <div className="blog-post-main legal-page">
            <h1 className="blog-post-title">{title}</h1>
            <p className="blog-post-updated">Last updated {BUSINESS.policiesUpdated}</p>
            <div className="blog-post-body">{children}</div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
