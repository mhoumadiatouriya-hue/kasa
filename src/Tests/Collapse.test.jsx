import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Collapse from "../components/Collapse/Collapse";

describe("Collapse", () => {

  test("affiche le titre", () => {
    render(
      <Collapse
        title="Description"
        content="Contenu du logement"
      />
    );

    expect(
      screen.getByText("Description")
    ).toBeInTheDocument();
  });

  test("le contenu est fermé au chargement", () => {
    render(
      <Collapse
        title="Description"
        content="Contenu du logement"
      />
    );

    expect(
      screen.queryByText("Contenu du logement")
    ).not.toBeInTheDocument();
  });

  test("ouvre le collapse après un clic", async () => {
    const user = userEvent.setup();

    render(
      <Collapse
        title="Description"
        content="Contenu du logement"
      />
    );

    const button = screen.getByRole("button");

    await user.click(button);

    expect(
      screen.getByText("Contenu du logement")
    ).toBeInTheDocument();
  });

  test("ferme le collapse après un second clic", async () => {
    const user = userEvent.setup();

    render(
      <Collapse
        title="Description"
        content="Contenu du logement"
      />
    );

    const button = screen.getByRole("button");

    await user.click(button);
    await user.click(button);

    expect(
      screen.queryByText("Contenu du logement")
    ).not.toBeInTheDocument();
  });

});