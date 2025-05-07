import { interpret } from "xstate";
import { MemoryRouter } from "react-router-dom";
import SignInForm from "./SignInForm";
import { authMachine } from "../machines/authMachine";

describe("SignInForm", () => {
  let authService;
  beforeEach(() => {
    authService = interpret(authMachine);
    authService.start();

    expect(authService.state.value).to.equal("unauthorized");
    cy.intercept("POST", "http://localhost:3001/login", {
      user: {
        id: "t45AiwidW",
        uuid: "6383f84e-b511-44c5-a835-3ece1d781fa8",
        firstName: "Edgar",
        lastName: "Johns",
        username: "Katharina_Bernier",
        password: "$2a$10$5PXHGtcsckWtAprT5/JmluhR13f16BL8SIGhvAKNP.Dhxkt69FfzW",
        email: "Norene39@yahoo.com",
        phoneNumber: "625-316-9882",
        avatar: "https://cypress-realworld-app-svgs.s3.amazonaws.com/t45AiwidW.svg",
        defaultPrivacyLevel: "public",
        balance: 168137,
        createdAt: "2019-08-27T23:47:05.637Z",
        modifiedAt: "2020-05-21T11:02:22.857Z",
      },
    }).as("loginPost");
  });

  it("submits the username and password to the backend", () => { // Ini contoh bawaan dari cypress
    cy.mount(
      <MemoryRouter>
        <SignInForm authService={authService} />
      </MemoryRouter>
    );
    cy.get("[data-test*=signin-username]").type("Katharina_Bernier");
    cy.get("[data-test*=signin-password]").type("s3cret");
    cy.get("[data-test*=signin-submit]").click(); //.should("be.disabled");

    cy.wait("@loginPost");

    cy.get("[data-test*=signin-error]").should("not.exist");

    //expect(authService.state.value).to.equal("authorized");
  });

  it("tidak bisa submit jika username dan password kosong", () => { // 1
    cy.mount(
      <MemoryRouter>
        <SignInForm authService={authService} />
      </MemoryRouter>
    );
  
    cy.get("[data-test*=signin-submit]").should("be.disabled");
  });

  it("menampilkan error jika username kosong", () => { // 2
    cy.mount(
      <MemoryRouter>
        <SignInForm authService={authService} />
      </MemoryRouter>
    );
  
    // Mengetik username dan kemudian menghapusnya
    cy.get("[data-test*=signin-username]").find("input").type("Katharina_Bernier").clear().blur();
  
    // Memeriksa apakah pesan error muncul untuk username kosong
    cy.get("#username-helper-text").should("contain", "Username is required");
  });  

  it("mengirim form login ke server", () => { // 3
    cy.intercept("POST", "http://localhost:3001/login").as("loginPost");
  
    cy.mount(
      <MemoryRouter>
        <SignInForm authService={authService} />
      </MemoryRouter>
    );
  
    cy.get("[data-test*=signin-username]").type("Katharina_Bernier");
    cy.get("[data-test*=signin-password]").type("s3cret");
    cy.get("[data-test*=signin-submit]").click();
  
    cy.wait("@loginPost").its("request.body").should("include", {
      username: "Katharina_Bernier",
      password: "s3cret",
    });
  });  
  
});
