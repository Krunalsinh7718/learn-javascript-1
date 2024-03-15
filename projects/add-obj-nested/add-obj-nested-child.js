function pushElementToChildById(arr, targetId, element) {
    for (const item of arr) {
        if (item.id === targetId) {
            // If the item's ID matches the target ID, push the element into its children array
            if (!item.children) {
                item.children = [];
            }
            item.children.push(element);
            return true;
        } else if (item.children) {
            // If the item has children, recursively search through them
            const childResult = pushElementToChildById(item.children, targetId, element);
            if (childResult) {
                return true;
            }
        }
    }
    return false; // If the target ID is not found in the array
}

// Example usage
const nestedArray = [{
    id : "uncategorized",
    children : [
        { id: "Item A1", children: [
            { id: "Item A1-a1" },
            { id: "Item A1-a2", children: [
                { id: "Item A1-a2-#1" },
                { id: "Item A1-a2-#2" },
                { id: "Item A1-a2-#3" },
            ]},
        ]},
        { id: "Item A2" },
        { id: "Item A3" },
    ]
}
];

const newElement = { id: "Item A4" };
const success = pushElementToChildById(nestedArray, "uncategorized", newElement);
if (success) {
    console.log("Element pushed successfully.");
} else {
    console.error("Target ID not found.");
}
console.log(nestedArray);