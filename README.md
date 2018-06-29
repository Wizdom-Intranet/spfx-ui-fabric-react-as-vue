# spfx-ui-fabric-react-as-vue
Office ui fabric react, implemented as vue components made specific for SPFx.

## Component status
Component      |Implemented | ui-fabric-react | Notes
---            | :---:      |:---:            |---
Datepicker     | Yes        | Yes             | beware of the increased size!

## Features
 - ES Modules! every component can be used indivudually. No need to load a huge bundle, just to show ex. a button
 - Styles are automatically loaded and respect SPFX themes
 - Font files are not needed. All components uses svgs instead for their icons

 ## Todo
  - Datepicker still leaks a few non-scoped styles for the icons