import { neutralClaims, approvedClaims } from "../lib/claims";

export function UtilityStrip() {
  const approved = approvedClaims();
  const neutral = neutralClaims();
  const items = approved.length > 0 ? approved.map((claim) => claim.value) : neutral.map((claim) => claim.neutral ?? "");

  if (items.length === 0) return null;

  return (
    <div className="utility" aria-label="Company credential status">
      <div className="wrap utility-inner">
        {items.slice(0, 4).map((item) => (
          <span key={item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
