import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, test } from "vitest";
import UserCard from ".";

describe("UserCard", () => {
  beforeEach(() => {
    render(
      <UserCard
        profile={{
          avatar: {
            high: "https://via.placeholder.com/150",
            medium: "https://via.placeholder.com/100",
            low: "https://via.placeholder.com/50",
          },
          name: "John Doe",
          email: "jhondoe@gmail.com",
        }}
      />
    );
  });

  test("renders UserCard component", () => {
    expect(screen.getByText("Profile picture")).toBeInTheDocument();
  });

  test("renders UserCard component with name and email", () => {
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("jhondoe@gmail.com")).toBeInTheDocument();
  });
});
