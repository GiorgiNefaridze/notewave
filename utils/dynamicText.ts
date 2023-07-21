export const dynamicHeaderText = (index: number): string => {
  switch (index) {
    case 1:
      return "Manage your notes easily";
    case 2:
      return "Organize your thougts";
    case 3:
      return "Create cards and easy styling";
    default:
      return "Invalid index";
  }
};

export const dynamicDescriptionText = (index: number): string => {
  switch (index) {
    case 1:
      return "A completely easy way to manage and customize your notes.";
    case 2:
      return "Most beautiful note taking application.";
    case 3:
      return "Making your content legible has never been easier.";
    default:
      return "Invalid index";
  }
};
