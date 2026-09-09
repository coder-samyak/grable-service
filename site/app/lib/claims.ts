export type ClaimStatus = "approved" | "pending" | "hidden";

export type Claim = {
  id: string;
  label: string;
  value: string;
  status: ClaimStatus;
  neutral?: string;
};

export const claims: Claim[] = [
  {
    id: "procurement-profile",
    label: "Procurement profile",
    value: "",
    status: "pending",
    neutral: "Procurement details available through direct proposal channels"
  },
  {
    id: "small-business",
    label: "Small business status",
    value: "",
    status: "pending",
    neutral: "Public-sector contracting information available by request"
  },
  {
    id: "ibm-relationship",
    label: "IBM relationship",
    value: "",
    status: "pending",
    neutral: "IBM technology delivery support"
  },
  {
    id: "federal-hosting",
    label: "Federal hosting",
    value: "",
    status: "pending",
    neutral: "Federal hosting posture reviewed per engagement"
  }
];

export function approvedClaims() {
  return claims.filter((claim) => claim.status === "approved" && claim.value);
}

export function neutralClaims() {
  return claims.filter((claim) => claim.status === "pending" && claim.neutral);
}

export function safeClaimValue(claim: Claim) {
  if (claim.status === "approved" && claim.value) return claim.value;
  if (claim.status === "pending") return claim.neutral ?? "Available by request";
  return "";
}
