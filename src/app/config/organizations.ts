// Organization and assignment mappings
export const ORGANIZATIONS = {
  "PurdueCS193-F25": {
    name: "PurdueCS193-F25",
    owner: "PurdueCS193-F25", // GitHub organization/owner name
    assignments: {
      "Homework-0": "homework-0",
      "Homework-1": "homework-1",
      "Homework-2": "homework-2",
      "Homework-3": "homework-3",
      "Homework-4": "homework-4",
      "Homework-5": "homework-5",
      "Homework-6": "homework-6",
      "Extra-Credit-Assignment": "extra-credit-assignment"
    }
  }
} as const;

export type OrganizationKey = keyof typeof ORGANIZATIONS;
