// src/utils/data/medicines.ts

export type Medicine = {
  use: string;
  dose: string;
  expiry: string;
  reminder?: boolean;
};

export const medicines: Record<string, Medicine> = {
  paracetamol: {
    use: "Fever and pain relief",
    dose: "1 tablet after food",
    expiry: "12/2026",
    reminder: true,
  },

  cetirizine: {
    use: "Allergy relief",
    dose: "1 tablet at night",
    expiry: "08/2025",
    reminder: false,
  },

  ibuprofen: {
    use: "Pain and inflammation",
    dose: "1 tablet after meals",
    expiry: "10/2026",
    reminder: false,
  },
};