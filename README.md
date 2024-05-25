Create a Assets viewer

> 📌 Build an Tree View Application that shows companies Assets (The tree is basically composed with > components, assets and locations)

- Components belong to assets
- Components can have a parent asset
- Components can be orfans (root tree)
- Components can have a parent location
- Usually has vibration, energy sensors with a _operating or alert status_
- If it has a sensorType is a component
- If does not have a location or parentId it means that he is at the root orfan
- If it has a parentId the parent is an asset, if have a locationId diferent from the parentId it means it is a child of an asset under that locationId

- All Assets have at least one component child
- There is no limit to the children number (optional virtual list??)
- Any item that has children are assets
- Assets can have components and other assets as children
- if it has a locationId and don't have a sensorType it is an asset with a location
- If it has a parentId and don't have a sensorType it is a asset child, has a parent asset

- Location hold one or more assets
- Locations can have locations as children
- The outer most location has a `parentId: null` attribute, sub location have an adrress

For the UI
Copy the UI from figma

- Tree: probaly use ul components, break down to one component `TreeView`, then create a `TreeRoot`, `Node`, `Leaf`
  -- TreeView: Manage data, proccess the receive data, filters and active views
  -- TreeRoot: Iterate the recivied data creating the nodes and leafs, controls open/close state
  -- Node: Same of the treeRoot, is a item that have childrens, iterate over it control open close state
  -- Leaf: Component level, display, Name and status, trigger target Visualization on main panel

- Viewer: Single component that recieves `Name`, `sensorType`, `sensorId`, `gatewayId`, `status`
  -- Smaller component: Title, Dropdown (Image + EmptyState), Stack (Title, Icon, Value), Select
- Misc: Button (Primary, outline), Breadcrumbs, Header

- Components
  - TreeView
    -- TreeRoot
    -- Node
    -- Leaf
  - Viwer
  - commom
    -- Button
    -- Default
    -- Outline
    -- DragAndDrop
    -- Select
    -- Icons
    -- Breadcrumbs
    -- Header

Logic, behaviour

- Will need to share state between Viewer component and the Leaf so we need to create a context `ViewerContext`
- Processing data into the tree?? probably use recursion to build the trees base case being related to the locationID and parentId, returning a <Leaf> component.
- Will also need to provide the current assets selection based on the client, don't need an context for that, but probably good to create a hook, useClientSelection => {assets}, so probably good to add a useSearch as a hook to add a chain dependency useClientSelection => {assets} => useSearch(assets) => {results}
- Needs a fake client to make the calls to the fake api

- Context
  - ViwerContext
- Hooks
  - useClientSelection
  - useSeach
- utils
  - proccessAssets
- api
  - client

Things can do after

- Better types, styles modularity
- Uses localstorage to persist the image uploaded
- Tests??
