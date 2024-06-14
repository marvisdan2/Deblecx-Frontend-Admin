import { render, screen, waitFor, within } from "@testing-library/react";
import NewPage from "../NewPage";

describe("Work Order List Page", () => {
  it("should render a foo message", async () => {
    render(<NewPage />);
    const { getByText } = within(screen.getByTestId("newpage-text"));
    await waitFor(() => {
      expect(screen.getByTestId("newpage-text")).toBeInTheDocument();
      expect(getByText("foo")).toBeInTheDocument();
    });
  });
});
