# Criteria

This document is to help you understand what we will be looking for when reviewing your code. Please get in touch with us if you want further clarification.

## Must Have

- The application must start and run without errors in the console
- The application must be a single-page application (SPA)
- The application must be divided into components
- The file structure must be consistent and easy to follow
- The list and details page must cover all the [main goals](README.md#main-goals)
- The application must include examples of meaningful tests (meaningful tests validate logic or component behavior; superficial tests like snapshot tests, or tests that just validate if a component renders are not accepted). We do not need high code coverage, but we want to see that you know how to write tests

## Nice to Have

- The application must be visually appealing with a good user experience
- The application uses hooks where necessary to reduce rerenders / unnecessary computation
- The application has good naming conventions
- The application is responsive
- A "component" library is created where core functionality is reused. For example, a `Button` component is created and used in multiple places
- Secondary goals are completed

## Negative Points

- No componentization
- No modularization
- Inline styles
- No control over re-rendering (e.g. not using id for a list)
- Bad naming conventions
- Direct DOM manipulation
- Functional programming paradigm is not used or mixed with object-oriented paradigm
