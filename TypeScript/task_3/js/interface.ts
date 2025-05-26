// Type alias for RowID
type RowID = number;

// Interface for RowElement
interface RowElement {
  firstName: string;
  lastName: string;
  age?: number;
}

export { RowID, RowElement };
