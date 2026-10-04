export const companyName = "Raj Global Ventures";

export const logoUrl = "/raj-logo-full.png";
export const logoIconUrl = "/raj-logo-icon.png";
export const logoBannerUrl = "/raj-logo-banner.png";

export const companyDescription =
  "Three generations of business experience have given us more than knowledge—they’ve given us the ability to recognize problems before they become barriers. We turn complex business challenges into clear, practical solutions, backed by real experience and measurable results.";

export const contactDetails = {
  email: "contact@rajgv.com",
  phone: "+91 98657 98157",
  phoneHref: "+919865798157",
  address: [
    "Raj Global Ventures",
    "Tirunelveli, Tamil Nadu, India",
    "Pincode 627359"
  ],
  hours: "Mon–Fri, 9:00 AM – 4:00 PM IST"
};

export const weeklySchedule = [
  { day: "Monday", hours: "9:00 AM – 4:00 PM", status: "open" },
  { day: "Tuesday", hours: "9:00 AM – 4:00 PM", status: "open" },
  { day: "Wednesday", hours: "9:00 AM – 4:00 PM", status: "open" },
  { day: "Thursday", hours: "9:00 AM – 4:00 PM", status: "open" },
  { day: "Friday", hours: "9:00 AM – 4:00 PM", status: "open" },
  { day: "Saturday", hours: "Closed", status: "closed" },
  { day: "Sunday", hours: "Closed", status: "closed" }
];

export const publicHolidays = [
  { date: "Jan 14 – 16", name: "Pongal & Thiruvalluvar Day", status: "Holiday – Closed" },
  { date: "Jan 26", name: "Republic Day", status: "Holiday – Closed" },
  { date: "Apr 14", name: "Tamil New Year / Dr. Ambedkar Jayanti", status: "Holiday – Closed" },
  { date: "Apr 18", name: "Good Friday", status: "Holiday – Closed" },
  { date: "May 01", name: "May Day", status: "Holiday – Closed" },
  { date: "Jun 07", name: "Bakrid / Eid al-Adha", status: "Holiday – Closed" },
  { date: "Aug 15", name: "Independence Day", status: "Holiday – Closed" },
  { date: "Sep 04", name: "Vinayakar Chathurthi", status: "Holiday – Closed" },
  { date: "Oct 02", name: "Gandhi Jayanti", status: "Holiday – Closed" },
  { date: "Oct 20", name: "Ayutha Pooja / Vijaya Dasami", status: "Holiday – Closed" },
  { date: "Nov 08", name: "Deepavali", status: "Holiday – Closed" },
  { date: "Dec 25", name: "Christmas", status: "Holiday – Closed" }
];

export const inquiryTypes = [
  {
    id: "personal",
    title: "Personal",
    description: "For individual inquiries, general questions, and support."
  },
  {
    id: "business",
    title: "Business",
    description: "For business inquiries, partnerships, collaborations, and corporate requirements."
  }
];

export const personalInterests = [
  "General Support & Questions",
  "Early Beta Access (TradingFootprint)",
  "Individual Solutions",
  "Other Inquiries"
];

export const businessInterests = [
  "Customize Software Solution",
  "Crushed Stone / Aggregates Supply",
  "TradingFootprint Desk Access",
  "Partnerships & Strategic Collaborations",
  "Corporate Enterprise Requirements"
];

export const contactInterests = [
  ...personalInterests,
  ...businessInterests
];