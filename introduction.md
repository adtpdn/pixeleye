# Get started with Pixeleye
Get started with Pixeleye in just a few minutes. This guide will walk you through the steps to get up and running with Pixeleye from scratch.

## Register a new Pixeleye account
Head over to Pixeleye (or equivalent if self-hosting) and register a new account. You will receive an email with a confirmation code to verify your email address. Once you have confirmed your email address, you can log in to your Pixeleye account.

> Note: If you signed up with a vcs provider like Github, you should see any teams with access to Pixeleye. Find out more about teams and permissions.

## Install relevant VCs tools
If you want to use a VCs integration that wasn't installed automatically, you'll need to set it up first.

## Github
For GitHub, we require that our app is installed in your organization/account and that you have given it access to the relevant repositories. You can do this by going to the Github install page

## Other
You can add any git repo even if we don't officially support it. You can do this by selecting a generic git project.

## Create a new project
From the dashboard, click the New Project button. Depending on the team you're currently in, you may be asked to select a type of project, GitHub, custom, etc.

After creating the project, you'll be redirected to the project page. From here, you are given a project token. Make sure to keep this token safe. You will need it to authenticate your CI/CD with Pixeleye.

## Integrate with your project
We have separate guides for each integration. Pick the one that best suits your needs and follow the instructions there.

> We currently support the following official integrations:

- storybook
- cypress
- puppeteer
- playwright
- any other platform  

> Note: If you want to use another tool, you can use our CLI tool directly.

# Snapshots
Every picture of a component, page, or story is a snapshot. Pixeleye compares the baseline snapshot with the current snapshot and reports any differences. We can then use our UI to review the changes and decide whether to accept them or not.

## Snapshot identification
Each snapshot has 4 identifiers which are combined to create a unique identifier for the snapshot.

`Name` - The name of the component, page, or story. E.g. button, home, login, etc.  
`Variant` - The variant of the component, page, or story. E.g. primary, dark, primary-light, etc.  
`Viewport` - The viewport of the snapshot. E.g. 1920x1080, 1024x768, etc.  
`Target` - The target of the snapshot. E.g. chrome, firefox, etc.  

## Grouping
We will group all snapshots with the same name, variant and viewport together whilst reviewing. This helps streamline the review process given that browsers will often render the same component more or less the same way.

We choose to not group viewports together as we believe that the differences between viewports are often significant enough to warrant a separate review. A mobile view will often look drastically different from a desktop view.

