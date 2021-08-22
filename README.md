#TS Storybook setup
This is default setup for TypeScript component base with Storybook setup.

##Getting started
To start the storybook project just run:
```sh
npm run storybook
```
The app will be started on  ```http://localhost:6006/```

##File structure
All components are based in a components folder.
```sh
-.storybook/
|-main.js
|-preview.js
-components
|-layout
|-brandIdentity
|-interface
```
```brandIdentity``` - contains information about default setup of the components (corporate color palette, used Icons, Typography etc.)

Inside ```layout``` folder basic display components stored (Grid, Flex etc.);

```Interface``` contains UI components (Buttons, Dropdowns etc.)