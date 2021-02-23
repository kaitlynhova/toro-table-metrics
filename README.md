[![Netlify Status](https://api.netlify.com/api/v1/badges/6e67729d-bd80-4fd9-9f4a-778a890df23e/deploy-status)](https://app.netlify.com/sites/priceless-roentgen-81cb50/deploys)

## About

This is a tabbed interface where you can view several table's metrics.


[View it on the Netlify staging environment](https://priceless-roentgen-81cb50.netlify.app/)

This Project used:

- [Figma](https://www.figma.com/file/wLD3OslFCvKxOq3tq3JFKC/Untitled?node-id=0%3A1) wires (turned mocks) for generic reusable structure planning
- [Create React App](https://github.com/facebook/create-react-app) + Typescript
- [styled-components](https://styled-components.com/docs/basics)
- [Deductive Component Language](https://www.hovalabs.com/blog/deductive-component-language)

## Starting the app

1. Pull this repo onto your local.
2. Run these scripts:

   ```
   yarn install
   // then,
   yarn start
   ```

3. Open [http://localhost:3000](http://localhost:3000) on Chrome.

# Testing

To run tests, run this script:

```
yarn test
```

# Notes

If this was a project that would see production (and had more time) I would have liked to do a few more things:

- **Typescript**
  - Make sure to type request response data and to process it based on it's type (ex: timestamps need to be processed so it's human legible)
- **Tests**
  - Set up continuous integration.
  - Written endpoint tests to verify that we are getting the data that we expect.
  - Written component tests using [enzyme](https://enzymejs.github.io/enzyme/).
  - Written e2e tests.
- **Optimization**
  - Done more for web accessibility.
  - Caching api request responses.
- **Documentation**
  - Coordinated more between Figma and the App so that the Figma file is the delivery file (designs & component names).
  - Install [Storybook](https://storybook.js.org/) to document the reusable components.
- **Styles**
  - Made the UI responsive on mobile.
  - Support all browsers.
  - Kept track of more styles in the Theme besides palette.
- **Glitter**
  - Loading state logic
  - Finish implementing `isActive` styles
