export default function getLabelName(name) {
  if (name !== null && name !== undefined && typeof name === "string") {
    if (name.toLowerCase().includes("container")) {
      return name
        .replace("container", "function")
        .replace("Container", "Function");
    } else if (name.toLowerCase().includes("entity group")) {
      return name
        .replace("entity group", "entity")
        .replace("Entity Group", "Entity");
    } else if (
      name.toLowerCase().includes("entity") &&
      !name.toLowerCase().includes("group") &&
      !name.toLowerCase().includes("business") &&
      !name.toLowerCase().includes("type") &&
      !name.toLowerCase().includes("short")
      // &&name.toLowerCase() !== "entity name"
    ) {
      return name
        .replace("entity", "entity group")
        .replace("Entity", "Entity Group");
    } else {
      return name;
    }
  } else return name;
}

export function resetFields(page, method, recordData, action, defaultColVals) {
  console.log("Reset fields", page, method, action, defaultColVals, recordData);
  console.log("Form Values::::", method.getValues());
  switch (page) {
    case "businessentity":
      action.toLowerCase() === "create"
        ? method.reset(defaultColVals)
        : method.reset(recordData);
      break;
    default:
      console.log("No reset action");
      break;
  }
}
