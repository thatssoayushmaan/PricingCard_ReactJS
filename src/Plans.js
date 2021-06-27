const plans = [
  {
    fee: 0,
    plan: "Free",
    user: "Single User",
    storage: "5GB Storage",
    feature_flags: [1, 1, 0, 0, 0, 0]
  },
  {
    fee: 9,
    plan: "Plus",
    user: "5 Users",
    storage: "50GB Storage",
    feature_flags: [1, 1, 1, 1, 1, 0]
  },
  {
    fee: 49,
    plan: "Pro",
    user: "Unlimited Users",
    storage: "150GB Storage",
    feature_flags: [1, 1, 1, 1, 1, 1]
  }
];

const features = [
  "Unlimited Public Projects",
  "Community Access",
  "Unlimited Private Projects",
  "Dedicated Phone Support",
  "Free Subdomain",
  "Monthly Status Reports"
];

export { plans, features };
