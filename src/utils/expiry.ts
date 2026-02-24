// expiry.ts → Expiry check logic

export function checkExpiry(manufactureDate: string) {
  // manufactureDate format: "YYYY-MM-DD"
  const expiryDate = new Date(manufactureDate);
  expiryDate.setFullYear(expiryDate.getFullYear() + 2); // 2 years validity

  const today = new Date();

  if (today > expiryDate) {
    return { status: "Expired ❌", expiryDate: expiryDate.toDateString() };
  } else {
    return { status: "Valid ✅", expiryDate: expiryDate.toDateString() };
  }
}