export interface ChecklistStep {
  id: number;
  section: "BEFORE ANYTHING GOES WRONG" | "WHEN THE FAULT APPEARS" | "WHEN A TECHNICIAN VISITS" | "IF THE CLAIM IS REFUSED";
  number: number;
  title: string;
  body: string;
}

export const CHECKLIST_STEPS: ChecklistStep[] = [
  // BEFORE ANYTHING GOES WRONG
  {
    id: 1,
    section: "BEFORE ANYTHING GOES WRONG",
    number: 1,
    title: "Keep the invoice.",
    body: "Save the original bill and a photo or PDF copy. The warranty normally starts on the invoice date."
  },
  {
    id: 2,
    section: "BEFORE ANYTHING GOES WRONG",
    number: 2,
    title: "Register the product.",
    body: "Many brands ask you to register on their website or app; some add extra warranty when you do."
  },
  {
    id: 3,
    section: "BEFORE ANYTHING GOES WRONG",
    number: 3,
    title: "Read the warranty card once.",
    body: "Note how long it lasts, what it covers, and what it excludes."
  },
  {
    id: 4,
    section: "BEFORE ANYTHING GOES WRONG",
    number: 4,
    title: "Record the condition.",
    body: "Take a few dated photos of the product once it is installed or unboxed."
  },

  // WHEN THE FAULT APPEARS
  {
    id: 5,
    section: "WHEN THE FAULT APPEARS",
    number: 5,
    title: "Record the fault.",
    body: "Take a clear photo or short video of the problem as soon as you see it, with the date visible if you can."
  },
  {
    id: 6,
    section: "WHEN THE FAULT APPEARS",
    number: 6,
    title: "Raise the complaint in writing.",
    body: "Use email, the brand's website or its app, not only a phone call, so there is a record."
  },
  {
    id: 7,
    section: "WHEN THE FAULT APPEARS",
    number: 7,
    title: "Note every reference number.",
    body: "Write down the complaint or ticket number, the date and the name of anyone you speak to."
  },

  // WHEN A TECHNICIAN VISITS
  {
    id: 8,
    section: "WHEN A TECHNICIAN VISITS",
    number: 8,
    title: "Ask for the job sheet.",
    body: "Ask the technician for a copy of the visit report or job sheet before they leave."
  },
  {
    id: 9,
    section: "WHEN A TECHNICIAN VISITS",
    number: 9,
    title: "Ask what was tested.",
    body: "Ask which test or instrument was used to reach the diagnosis."
  },
  {
    id: 10,
    section: "WHEN A TECHNICIAN VISITS",
    number: 10,
    title: "Take your own photos.",
    body: "Photograph the product and anything the technician points to, during the visit."
  },

  // IF THE CLAIM IS REFUSED
  {
    id: 11,
    section: "IF THE CLAIM IS REFUSED",
    number: 11,
    title: "Ask for the reason in writing.",
    body: "Request a written explanation that names the exact cause and the evidence for it."
  },
  {
    id: 12,
    section: "IF THE CLAIM IS REFUSED",
    number: 12,
    title: "Ask for the technical report.",
    body: "If the refusal rests on an inspection, ask for that inspection report."
  },
  {
    id: 13,
    section: "IF THE CLAIM IS REFUSED",
    number: 13,
    title: "Escalate inside the company.",
    body: "Most brands list a grievance or escalation contact on their website. Write to it, quoting your complaint number."
  },
  {
    id: 14,
    section: "IF THE CLAIM IS REFUSED",
    number: 14,
    title: "Keep it factual.",
    body: "Stick to dates, documents and photos. Calm, written records are what a consumer forum or regulator will look at."
  },
  {
    id: 15,
    section: "IF THE CLAIM IS REFUSED",
    number: 15,
    title: "Know your consumer helpline.",
    body: "Most countries run a free consumer helpline or online complaint portal that can guide you on the next step."
  }
];

export const CONTENT_DATA = {
  claimReady: "CLAIM READY",
  subtitle: "A free checklist for anyone about to file a warranty claim.",
  whoThisIsFor: {
    title: "WHO THIS IS FOR",
    body: "Anyone whose phone, TV, laptop or appliance stopped working while it is still under warranty, and who wants the claim to be decided on facts, in writing."
  },
  theIdeaInOneLine: {
    title: "THE IDEA IN ONE LINE",
    body: "A warranty claim is decided on records. Keep yours, and ask for theirs in writing."
  },
  sections: {
    beforeAnythingGoesWrong: "BEFORE ANYTHING GOES WRONG",
    whenTheFaultAppears: "WHEN THE FAULT APPEARS",
    whenATechnicianVisits: "WHEN A TECHNICIAN VISITS",
    ifTheClaimIsRefused: "IF THE CLAIM IS REFUSED"
  },
  keyNumbers: {
    title: "KEY NUMBERS FOR THE PAGE",
    stat15: "15 steps in the checklist.",
    stat4: "4 records to keep before anything goes wrong.",
    stat1: "1 rule: if it is not in writing, it did not happen."
  },
  callToAction: {
    title: "CALL TO ACTION",
    action1: "Download the checklist and keep it with your invoices.",
    action2: "Share it with a friend who just bought something expensive."
  },
  footerNote: {
    title: "FOOTER NOTE",
    body: "Claim Ready is a free, general guide. It is not legal advice. For your own case, check the warranty terms for your product and your country's consumer rules."
  }
};
