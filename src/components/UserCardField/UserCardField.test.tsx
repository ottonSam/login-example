import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import UserCardField from ".";

describe("UserCardField", () => {
  beforeEach(() => {
    render(<UserCardField label="Name" value="John Doe" />);
  });

  test("renders UserCardField component with Name and Label", () => {
    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  test("renders UserCardField component correct styles", () => {
    expect(screen.getByText("Name")).toHaveClass("font-bold");
    expect(screen.getByText("John Doe")).toHaveClass(
      "rounded-[9px] bg-cinza-input p-[16px] bg-branco-field text-[12px] text-preto-text"
    );
  });
});
