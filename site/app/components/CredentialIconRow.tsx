import Image from "next/image";
import { credentialItems } from "../data/credentials";

export function CredentialIconRow() {
  return (
    <section className="section credential-section" aria-labelledby="credential-heading">
      <div className="section-heading">
        <p className="eyebrow">Credentials</p>
        <h2 id="credential-heading">Operating strengths for regulated and asset-intensive teams.</h2>
        <p>
          Grable combines Maximo depth, managed infrastructure practices, procurement support, and disciplined
          public-sector language so buyers can evaluate the right path without relying on overbroad claims.
        </p>
      </div>
      <div className="credential-grid">
        {credentialItems.map((item) => (
          <article className="credential-card" key={item.title}>
            <Image alt="" aria-hidden="true" height={44} src={item.icon} width={44} />
            <div>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
              <span>{item.status === "public" ? "Available for discussion" : "Available by request"}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
