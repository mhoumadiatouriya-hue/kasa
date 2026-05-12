import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "../components/Card";

describe("Card", () => {
  test("affiche le titre du logement", () => {
    render(
      <BrowserRouter>
        <Card id="abc123" title="Appartement cosy" cover="/image.jpg" />
      </BrowserRouter>
    );

    expect(screen.getByText("Appartement cosy")).toBeInTheDocument();
  });

  test("affiche l'image du logement", () => {
    render(
      <BrowserRouter>
        <Card id="abc123" title="Appartement cosy" cover="/image.jpg" />
      </BrowserRouter>
    );

    expect(screen.getByAltText("Appartement cosy")).toBeInTheDocument();
  });

  test("redirige vers la bonne page logement", () => {
    render(
      <BrowserRouter>
        <Card id="abc123" title="Appartement cosy" cover="/image.jpg" />
      </BrowserRouter>
    );

    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/logement/abc123"
    );
  });
});