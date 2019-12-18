const tabKeys = {
  ALL: "All",
  PAID: "Paid",
  TO_BE_PAID: "To Be Paid",
  APPROVED: "Approved",
  DISPUTE_RAISED: "Dispute Raised",
  SETTLED: "Settled"
};

const tabData = [
  { tab: tabKeys.ALL, key: tabKeys.ALL },
  { tab: tabKeys.PAID, key: tabKeys.PAID },
  { tab: tabKeys.TO_BE_PAID, key: tabKeys.TO_BE_PAID },
  { tab: tabKeys.APPROVED, key: tabKeys.APPROVED },
  { tab: tabKeys.DISPUTE_RAISED, key: tabKeys.DISPUTE_RAISED },
  { tab: tabKeys.SETTLED, key: tabKeys.SETTLED }
];

export { tabData, tabKeys };
