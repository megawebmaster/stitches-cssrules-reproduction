# Stitches CSSRules reproduction

It's a minimal reproduction repo for CSSRules access issue.

## How to run

1. Install [Meteor](https://meteor.com)
2. Run `meteor npm install`
3. Run `meteor npm run storybook`

Storybook will not show any stories even though there is one in 
`imports/ui/lib/button.stories.jsx`

## What causes the issue

The issue is caused by an invalid `<link>` tag inside 
`.storybook/preview-head.html` that is added to a preview by 
Storybook. Stitches tries to load their CSS rules to this tag causing

> SecurityError: CSSStyleSheet.cssRules getter: Not allowed to access cross-origin stylesheet
