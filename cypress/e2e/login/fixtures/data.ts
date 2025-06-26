interface User {
  email: string,
  password: string
}

export const validUser: User = {
  email: Cypress.env('AIR_CANADA_EMAIL'),
  password: Cypress.env('AIR_CANADA_PASSWORD')
};

export const invalidUser: User = {
  email: 'mostafa',
  password: '1234'
}
