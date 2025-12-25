# Case Study 1 - Playwright

This is a test automation project using [Playwright](https://playwright.dev/), a Node.js library for end-to-end testing of web applications. It includes sample tests for basic functionality and a demo test for a to-do application.

## Features

- Cross-browser testing (Chromium, Firefox, WebKit)
- Screenshots and videos on test failures
- Parallel test execution
- HTML reports

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone the repository:

   ```
   git clone https://github.com/YassineElBachiri/Project-1-test-playwright.git
   cd case-study-1---playwright
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

### Running Tests

Run all tests:

```
npx playwright test
```

Run tests in a specific file:

```
npx playwright test tests/todo1-demo.spec.js
```

Run tests with UI mode:

```
npx playwright test --ui
```

### Generating Reports

After running tests, view the HTML report:

```
npx playwright show-report
```

## Project Structure

- `tests/` - Contains test files
  - `example.spec.js` - Basic example tests
  - `todo1-demo.spec.js` - Demo test for to-do app functionality
- `playwright.config.js` - Playwright configuration
- `package.json` - Project dependencies and scripts

## Configuration

The project uses Playwright's default configuration with the following settings:

- Test directory: `./tests`
- Browsers: Chromium, Firefox, WebKit
- Screenshots: Taken only on failure
- Videos: Retained on failure
- Traces: Retained on failure

See `playwright.config.js` for detailed configuration options.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything works
5. Submit a pull request

## License

This project is licensed under the ISC License.
