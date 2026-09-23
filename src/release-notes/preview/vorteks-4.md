Vorteks 4 Release Notes
=====================

## 4.0.1858.2
09/23/2026

## Breaking Changes

### Style Legend (was Color Legend)
- Color Legend renamed **Style Legend** with **no backward compatibility** (no SQLite/type migration).
- SQLite table `ColorLegends` → `StyleLegends`. Existing project DBs that still have `ColorLegends` will not load those rows.
- Serialized types: `ColorLegend*` → `StyleLegend*`; `ColorEncoding` → `StyleLegendEncoding`; `ColorValue` → `StyleLegendValue`. Older serialized blobs will not deserialize.
- Stream Graph setting `UseColorLegend` → `UseStyleLegend`. Saved views that stored the old property name will not keep that flag; turn **Use Style Legend** on again.
- Panel key `ColorLegend` → `StyleLegend`; localization keys `StyleLegend.*` (including Stream Graph toggle and Project Explorer **New Style Legend**).
- App Search suggestion is **Show Style Legend Panel**; the old **Color Legend Panel** phrasing still matches.

### Non-Lexical Extractor
- Phrase extraction only. SSN, email, phone, and number extract options are obsolete/removed from this module.
- Include numbers in phrases defaults to off.
- Use Regex Extractor for structured formats that Non-Lex no longer covers.

## New Features

### Processing SDK

Third-party developers can create custom processing modules in C# and load them into Vorteks as external plugins. Download the Processing SDK authoring kit from the Vorteks website, next to the application installer.

- Start from the included Visual Studio or .NET template.
- Use the SDK contracts and base classes to implement a module and its settings.
- Test modules with the included compliance tests and test harness, then package them for installation.

### Image Manager
- Title bar **Images**; node **Image** field opens the same window as a picker (read-only name + image+ button). Style Legend Images tab opens the same window (not as a picker) and reloads the catalog when it closes.
- Tree of **sets** and nested **categories**. Selecting a set shows all images in that set; selecting a category shows that subtree.
- Built-in **Standard** set under app `Resources/Images/Standard/{Category}/` (not copied to Documents at launch).
- User catalog at `Documents\Vorteks4\Images` (not under Data). Add Image, Add Set, Import Set (nested folders = categories), Delete (user items only).
- Search as you type (debounced) across the whole catalog.
- User-added images stored in the project file (`ProjectImages`) so they appear when the project is opened on another machine.
- Thumbnails load in memory so files are not locked; folder delete retries after clearing the grid.

### Style Legend images
- Value / Term List / Document Field encodings store optional `ImageKey` (`builtin:` / `user:` catalog UniqueKey) next to color. Numeric and Temporal (range) legends remain color-only.
- Images apply only to `INode` visuals. `ImageDictionary.UniqueKey` shows a picture only when every assigned key is the same distinct key; mixed keys or empty → no image. Groups, edges, and other objects are not given legend pictures.
- Geographic `SetColors` applies legend colors only; legend images are not used as map pins (disabled for this release).
- Legend editor appearance pane: **Colors** | **Images** SelectorBar. Colors: used swatches + ColorPicker. Images: **Image set** ComboBox, search within the selected set, collapsible categories and thumbnails. **Clear image** on the values list. Image Manager button opens `ShowImageManagerDialogAsync` then reloads the catalog. No automatic image assignment. Default value-legend dialog size 1000×720 (range legends stay 1200×1000).

### Named Entity Recognition (NER)
- New processing module using Catalyst English WikiNER.
- Selected fields are analyzed; entities (Person, Organization, Location, Misc, etc.) are written under a configurable results group (default `NERResults`).
- Optional advanced model tag/version settings; first run may download the model into the local Catalyst cache.

### Dataset Dashboard
- **Image widget** — file, URL, clipboard, or drag-and-drop; fit vs fill stretch.
- **Website widget** — live URL or local HTML file/folder (WebView2).
- Visual widget picker with preview icons.
- Rename widgets; manual resize on the dashboard.
- Chart and word cloud widgets support multiple fields.
- Screenshot export can add the capture as a dashboard image widget.
- Card chrome / ThemeShadow for widgets; improved notes widget behavior.

### Dataset
- Command bar: **Remove From Dataset** and **Delete From Project** for selected documents.
- Default columns include `@row_number` with auto-sort on that column.
- Inline **Name** field on open Dataset and Term List editors (saves on Enter/blur; PE and tab title update).

### Project Explorer
- Right-click context menu: Open, Rename, Delete; dataset Search / Split / Merge.
- Toolbar split into view mode (Hierarchy / List), sort order, and show associations.
- **F2** rename when the tree is focused (Enter/Delete accelerators intentionally not used).
- Soft highlight + bolder name for items open in the workspace.

### Document fields
- Rename fields from available-fields tree (right-click → Rename).
- `OriginalName` persistence; renames flow through import, document type conversion, and Universal Converter.
- Document Type Manager field-type and compound-field tooltips.

### File / folder paths and drag-and-drop
- FileFolderControl overhaul: modes, localization, validators, green drop borders.
- Drop onto path fields, import strip, and main command bar (import data / open project).
- **Select folder** button in folder mode.
- UiFileBox drag-drop for OpenSearch certificates, Geocoder DB path, File Writer output.

### Processors
- Wizard module selection overhaul:
  - Selection page: pipeline strip with fixed **file data source** and **dataset** bookends, center drop zone for processing modules, two-column catalog (drag/drop or double-click).
  - Reorder/remove processing modules; each type once; import-only (empty processing) supported.
  - Settings preserved across rebuild for modules that remain; skip rebuild when the processing sequence is unchanged; open first step with errors after Next.
  - Mid-wizard strip: free jump between steps when current is valid; red error badge on invalid steps; convert/copy Advanced and return-to-selection on the strip.
  - Fix Next crash when no processing modules are selected (empty chain still has input/output).
- Wizard: **Convert to Advanced** and **Copy as Advanced**.
- Advanced: import/export share packages (`.vpp`) with nested deps, remaps, optional input-data export; PE visibility for packages.
- Cross-processor copy/paste of modules and connections.
- Advanced: **Arrange modules** command — layered L→R auto-layout of modules (undoable); used on convert/copy to Advanced as well.
- Advanced: interactive edge routing uses straight/L/Z paths (fast; reverse-X / same-column safe); A* pathfinding disabled for edit interactions.
- Advanced: placement grid majors/minors aligned to module spacing; zoom-aware minor lines and opacity; caption scrims for label contrast; selected edges Z-order below nodes; rounded edge stroke joins.
- Processor grid drag-drop and undo/redo improvements.
- Advanced command bar uses short labels and tooltips, matching Dataset and Term List.
- Minimizable **Modules**, **Log**, and **Settings** panels (close/minimize headers; footer chips; persisted in processor settings).
- Arrange layout: keep free modules put unless blocking; center hubs on fan mean; shared mid-X corridor for fan-in/out.
- Context-sensitive Help for Wizard and Advanced (module-selected topics).
- External/plugin processing modules: discovery, **External** badge, developer flyout.
- Processing SDK authoring kit (templates, compliance tests, packaging) for custom modules.
- SDK: module settings appear correctly in Wizard (#1376).

### Settings and shell
- Options renamed to **Settings**; Windows Settings–style nav icons and card layout.
- Live theme switching and surface hierarchy across MainPage, secondary windows, panels, dashboard, DataGrid.
- Visualization views: minimizable sidebar and value-filter panels (footer chips; persisted on the view).
- Recent projects on the Windows taskbar Jump List.
- Import `.md` / `.markdown` as plain text (Tier 0).
- New [Workspace](Workspace) help topic (main window, action strips, drop-to-import).

### Term List
- Hybrid editor: optional replacement chips; **no replacement** vs empty string vs whitespace.
- Multi-select: click / Ctrl / Shift; Select All, Clear, Invert, Delete Selected (`Delete`) without slowing large lists.
- Data strip: **Open** renamed to **Import Term List**; **Export Term Lists** for one or more lists.
- Import one or more `.txt`/`.csv` files into a single list (Data menu and editor **Import From File**).
- Combined export and multi-file import resolve replacement conflicts in a dialog (null vs empty treated as different).

### Extractors
- Extractor type defaults to **None**.
- Regex Extractor mode is a combo box (Replace / Inline tagging).
- Stronger validation and serialization for extractor settings (including nested models).

### API and data sources
- API data source handles XML/HTML responses; default name for new models.
- Encrypted password handling unified for OpenSearch, API DS, and password UI.
- Nested validation models and red borders for required processor inputs and nested settings.

## Improvements and Optimizations
- Advanced processor canvas: faster connect/move path updates; clearer placement grid and module labels.
- UiGenerator validation borders and nested-model support; SafeErrorDictionary so bindings never throw.
- Shared DatasetOperations for PE and command bar.
- Main action strips refactored (MainActionStrip).
- Client logging: rolling files under App Logs; always-on crash dumps.
- User-settings file IO retries when OneDrive or another instance has the file open.
- Visualization command-bar captions shortened to one or two words (tooltips unchanged).
- NuGet / dependency updates (WindowsAppSDK, WinUIEx, Syncfusion, Mapsui pinned to 5.0.2, Serilog, AWS, Identity, etc.).
- MSIX installer trimmed to win-x64 runtimes only.
- Package identity Qualta.Vorteks; AppInstaller auto-update removed.
- Panel margin / corner layout tokens; dashboard surface hierarchy and spacing.

## Bug Fixes
- Deleting a field value from a view removes matching nodes from all related views.
- Visualization thresholds update when documents are deleted.
- Color legends: name/summary updates after edit, reload, and document-type import.
- WindowDialog flicker reduced (chrome before show; parent hit-test freeze for tooltips).
- File/folder drop hints when a path is already set; drop only accepts allowed MIME types.
- File Writer cleans DocumentTypeRootPath before write (re-import).
- Advanced processor no longer duplicates modules/connections on open.
- Re-importing a dataset no longer removes existing document search fields or disables Stream Graph data thresholds (bug 1350).
- Numeric legends fall back to document IDs for non-numeric or unrelated visual values, including geographic nodes built from coordinate fields.
- Extractor settings deserialize correctly after DCS; nested double-validation fixed.
- Data source validation fixes (File, API, RSS, OpenSearch, Dataset, DataSourceReader).
- RSS URL validation before fetch (no filesystem reads for invalid URLs).
- Live theme: DataGrid header/lines, Help launched light, Value Filter LiveCharts axis labels.
- DatasetWriter parsing of normalized numbers for attributes (`@row_number` sort).
- EmptyExtractorComponent no longer throws when passing available fields.
- Empty term-list replacement chips have a minimum width so they remain clickable.
- Term list row selection matches WinUI list ticks and hover.
- Processor module connection drag handles restored.
- TabView **Ctrl+F4** accelerator tooltip no longer paints over view content.
- HeaderTile HyperlinkButton hover border clipped to the card.
- Network view: fixed Custom Label Fields not appearing as a functional field-tree control in the command-bar overflow menu (bug 1275).

## 4.0.1628.12
07/03/2026

## New Features

### Geographic Network
- New geographic view with support for network visualizations overlaid on maps.
- Support for loading map files (including GeoTIFF `.tif` layers) with proper projection handling (e.g. 3857).
- Added default BlueMarble.tif map to Documents/Vorteks4/Maps.
- Online and file-based map error handling, map file path configuration, and layer management.
- Shortest path, hops, and other SNA capabilities hooked into Geo views.
- Improved map layer ordering (nodes drawn on top of edges) and view restoration.

### Python Processor Module and Script Module SDK
- New Python Processor module for running custom Python scripts in the processor.

### Presentation Mode
- New presentation mode that hides view tabs, panels for clean viewing.

### Node Context Menus and Interactions
- New node context menus with actions such as Lock Position, Add Data for visual, and more.
- Improvements to node selection, focus, and data addition workflows.
- `LockButton` control and consistent locking UI across sidebars.
- Multi-row selection support in sidebars and improved locked visual management.

### Minimap
- Complete redesign and rework of the Minimap.
- Drag-to-resize from the corner.
- Accurate visible area calculations using normalizers and internal zoomed-out area logic.
- Toggle visibility via the Panels menu in non-Geo views.
- Better integration with camera movement and layout rebuilding.

### Node Merging (Merge Nodes)
- New "Merge Nodes" feature using term lists.
- `MergedNodeValues` for project-wide persistence of merged data.
- `NodeMerger` and `MergedNetworkNode` implementation with tests.
- UI updates across views, data change detection, combo box handling, and serialization fixes.
- Dedicated help content and localization.

### Network Layout Algorithms
- Added Kamada-Kawai and Yifan-Hu layouts.
- Significant improvements to Force-Directed Layout for large networks (Barnes-Hut repulsion, stack overflow prevention, longer run tuning).
- `RectanglePacker` for better aspect ratio handling in visualizations.

### Locked Visuals System
- Built-in support for maintaining locked visuals across visualizations.
- Thread-safe implementation with HashSet.
- Consistent support in Network, Distribution, Stream Graph, and other views.
- Sidebar enhancements for managing locked items (sorting, symbols, multi-row selection).

### View Navigation and Breadcrumbs
- New navigation overlay with arrow buttons and keyboard shortcuts.
- Navigation implemented across Network, Hierarchy, Stream Graph, Correlation, and Distribution views.
- Breadcrumbs panel shows navigation history and current position; click to jump back to parent levels.
- Command bar navigation commands and hotkeys hooked up for Distribution and Network views.
- Global visualization settings for navigation behavior.
- Dedicated navigation help content and localization.

### App Search
- Global search box in the main window title bar for commands, project items, help topics, and document text.
- Simple Search and Advanced Search integration from the title bar.
- App Search documentation added to help system.

### Help System Overhaul
- Refactored help TOC with TreeView, async loading, and page-first search.
- Improved help index UI with async loading, slimmer keywords, and better scrolling.
- In-page help search with accent highlighting.
- Improved help search indexing; WhatsNew topics linked to help pages.
- Help files aligned with LocalizationDictionary; geographic network documentation completed.

### Get Started Screen
- Refactored Get Started UI and MainPage layout.
- Improved recent-projects list, layout, and drag-and-drop UX.
- Recent projects sync when the app regains focus.
- Wizard and advanced processor icons added.

### Visual Labels
- Added detailed visual labels for richer label content.
- Fixed field values for many container types (Distribution categories, Network nodes, Stream Graph categories, etc.).
- Added missing slider tooltips for label font size and count.

### Document View
- Improved DocumentView layout and interactive behavior.

### Screenshot Export
- Fixed screenshot export for different DPI and display scale settings.
- Improved viewport screen capture with display scale (labels still have known limitations).

### User Settings Persistence
- User settings persisted in `Documents/Vorteks4/Settings`.
- User settings manager moved to Shared project.

## Improvements and Optimizations
- Updated many dependencies to latest stable versions (WindowsAppSDK, Syncfusion, AWS SDKs, Microsoft.NET.Test.Sdk, etc.).
- Performance improvements for large networks in layouts and rendering.
- Minimap accuracy and performance improvements (normalizers, reduced unnecessary updates).
- Rectangle packer for better layout performance in wide aspect ratio views.
- Improved error handling and lifecycle management in Python processing.
- Various refactors for sidebars, visual objects, command infrastructure, and panel management.
- Better handling of locked visuals and reduced unnecessary updates in visualizations.
- General stability and responsiveness improvements across the application.
- Custom TitleBar control and improvements to window dragging behavior.
- Flexible panel management and better tray behavior.
- Numerous small refactors, test improvements, and localization updates.
- Replaced vendored WordCloudGenerator DLL with NuGet package.
- Localized dataset dashboard widget names and descriptions.
- Simplified timeline play/stop commands; transparent background on timeline chart.
- Tab tear-out feature disabled due to WinUI bugs (infrastructure retained).
- `OnDeactivateAsync` called before disposing tabs on close.
- Type resolution improvements for assembly version mismatches when loading saved projects.

## Bug Fixes
- Fixed application freezing when closing with pending changes from the Windows taskbar.
- Fixed minimap covering too much of the view.
- Hierarchy sorting crash and edges skipping tiers.
- Multicolored nodes.
- Panel tray and minimized panel issues when opening the app.
- Numerous fixes for labels disappearing, edges becoming invisible, fading issues, and color problems in Network, Stream Graph, Geo, and Hierarchy views.
- Fixed issues with loading and navigating locked visuals in Stream Graph and other visualizations.
- Tooltip localization keys no longer displayed in the UI.
- Various crashes and inconsistencies when working with hierarchies, sorting, collapsed networks, and data loading.
- Font scale and projection fixes for older setups.
- Many other stability and correctness fixes across views, sidebars, and data handling.
- Locked visuals: fixed select all / invert behavior, navigation between locked visuals, and sidebar selection (Distribution, Hierarchy, Network).
- Hierarchy: fixed sidebar order, faded edges, tier outline when adjusting scale, and nodes that could be dragged unintentionally.
- Correlation: fixed camera reset on clear, crash when sorting sidebar, and camera focus on nodes still laying out children.
- Stream Graph: fixed locked-visual selection selecting all, node scaling, edges in chart mode, duplicate color-legend values, and category label field values.
- Network Analysis: fixed IN/OUT degree to include undirected/bidirectional edges; close analysis window when building or changing tabs.
- Geographic: fixed double-click dataset creation.
- Project Explorer: fixed ancestors being deleted.
- Dataset: fixed column header artifacts on filler cell and teardown; catch cancellation exceptions on unload.
- Minimap: fixed resize cursor appearing after resize.
- Viewport: fixed events disabled after closing a tab that returns to the visualization.
- Camera: fixed focus/position when building for visuals still laying out children; skip locked-visual updates when none are locked.
- Value Filter: fixed playback when range is fully expanded.
- CSV conversion: fixed errors breaking the document processing chain.
- Term Lists: fixed row reordering after clicking a term with no changes.
- Regex Extractor: fixed clearing terms during Init() (incorrect @DocumentCount incrementing).
- Document Type Manager: fixed compound-field tree reloading, partial collapse, and available-fields updates when compounds change.
- Available Fields: fixed loading compound fields with all aliases; fixed DocumentFieldTree xpaths for compound fields.
- Processing: fixed processor load when reactivating a data source tab.
- Project loading: fixed assembly/DLL version mismatches in DbSerializer, DbProjectData, ProcessorPackager, Style Legends Db, and ProjectDataInfo.
- Network Analysis window: fixed stats grid not rendering until scrolled.
- Windows: fixed COM exceptions when closing windows (Title property wrapped in try/catch).
- Presentation mode: fixed Presentation button and CommandBarToggleButton behavior.
- Style Legend: fixed duplicate color values for special objects and node label color + details display.
- Main window: restored file drag-and-drop hit testing across the page chrome.
- User settings: added retry handling when settings files are temporarily locked by OneDrive or another application instance.
- Project Explorer and Style Legend: fixed recycled TreeView items displaying stale content or behavior.
- Image Manager: fixed deleting image sets and refreshing folders when the manager opens.
- Visualization settings: fixed a crash when configuring large graphs.
- File Writer: fixed output file extension handling.
- Processing: fixed XML attribute processing, automatic registration after available-field refresh, and hangs when connecting a second module.
- SDK: fixed preview settings synchronization.
- Geocoder: fixed available fields for attribute selections and US coordinate matching against the gazetteer.
- Hierarchy: fixed selection during camera movement and locked-category arrow navigation hangs.
- Stream Graph: fixed dragged visuals, value-filter restoration, chart-node sizing, node navigation state, logarithmic and timeline Y-axis labels, category icons, and layout-data serialization.
- Geo View: fixed value-filter restoration and hidden Mapsui diagnostic overlays.
- Visuals: fixed image handling during rebuilds, stuck selection boxes, node-label visibility on hover, label collision ordering, and expanded document bookmark rendering.
- Compound fields: fixed renaming, availability, layout, empty-group visibility, and group pluralization.
- Field trees: fixed the expander toggling a checkbox instead of expanding or collapsing.
- Non-Lexical Extractor: fixed preview formatting.
- Dataset re-import and reprocessing: fixed stale views, cell updates, and re-import state handling.
- Timeline: fixed duplicate value-filter trees after Document Type Manager refresh.
- Explore Mode: fixed duplicate placeholders.
- Style Legend: fixed the expander double-click opening the editor, saved color-legend invert/reflect behavior, and the add button icon.
- Numeric legends: improved document fallback handling.
- Converter wizard: fixed incorrect visibility of converter and file-type tabs.
- Stream Graph: fixed category tooltip keys and hidden periodicity settings.
- Nested fields: fixed concatenated-string nesting with the `/` delimiter.
- NER: fixed model version validation.
- Value Joiner: fixed the result field name incorrectly disabling Run.
- Custom Label Fields: fixed overflow in the fields flyout.
- AWS S3: fixed the login flow.


## 4.0.1420.10
03/30/2026

## New Features & Major Improvements

- Geographic View
- Correlation View
- Extractor Module (Non-Lexical, Regex, List Extractors)
- Universal Converter
	- Text Splitter is now built-in to Universal Converter (Access via Converter Settings)
	- Add 'Text' settings to Universal Converter Settings.
 
## Enhancements & UX Improvements

- Visualizations
	- Add Font Picker - Works for node labels. Will expand to other labels.
	- Add Color Picker - Set background color for views
	- Nodes selected via 'hops' will show hop color in the outline.
	- Add dark/light support for Shortcut Info
	- Detect when parent dataset is updated and prompt to rebuild the view (reprocessing, etc)
- Processing
	- Detect doc types that can be overwritten when reprocessing. (Fixes persisting document type changes that would remove fields from the previous document type)
- Fix problems with OS scaling

## Important Bug Fixes

- Views
	- Fix persisting overlay font when using 'Create View From Selected'
	- Fix multi-colored search
	- Fix multi-doc type search
	- Co-occurrence search shows message when not available
	- Improve default label size when not using weights
	- Fix possible crash when clicking on mini-map
	- Fix 'Search' label when dropping a term list on a view
- Selected Fields 
	- Fix updating compound groups when drag/dropping a field
	- Fix updating compound groups when double clicking
- Available Fields 
	- Fix showing Alias fields
	- Fix dragging disabled fields
- Geocoder - Fix possible port exhaustion
- Stream Graph
	- Fix camera distance when navigating categories
	- Fix node outline size
	- Use 'Rows' layout by default
	- Fix category label weight
	- Fix 'Combined Rows' typo
- Term Lists
	- Fix crash sorting 'Regex' or 'Format' columns
	- Fix crash when deleting a term
- Processing
	- Fix detecting changes to Doc Type Registration. Run available fields as needed.
	- Fix a bug when detecting available fields
- Relationship Finder - Fix splitting sentences on question marks and exclamations.


## 4.0.1336.13
02/05/2026

## Breaking Changes

- Saved projects will need to recreate datasets to take advantage of larger dataset support

## New Features & Major Improvements

- New API Processor implementation with support for multiple authentication types:  
  None, Bearer Token, Client Certificate (PEM/PFX), plus improved validation and UX
- Added UI and logic for toggling supported file types (MIME types) in data sources and processing
- Introduced SupportsFileTypes to data sources + refactored MIME type collection
- Added Shortest Path algorithm and visualization to Network view.
- Implemented Request Throttling in API Processor / ApiRequestSetting
- Added "Skip Last Rows" option to Universal Converter (Excel + Delimited)
- Added "Split Rows" toggle to Excel & CSV converters
- Introduced AlphaNumericWithDatesComparer for improved mixed-type sorting (numbers, letters, dates)
- DbImportQueue now limits number of documents in queues, significantly reducing out-of-memory errors
- Datasets can now handle many more documents, significantly reducing out-of-memory errors

## Enhancements & UX Improvements

- Improved optional argument handling in ConverterUserSettings
- Major refactor of UiGenerator system covering nearly all UI field types
- Better validation UX (InfoBar, nested messages, member names, improved red border display)
- Improved help system: better indexing, search, table of contents, localization, and file links
- Numerous localization improvements throughout the application
- Enhanced consistency and display of available fields templates
- Improved error message handling (nested exceptions, cleaner logs without large stack traces)
- Added word wrap support for error messages and many text fields
- Better handling of large cell values in Dataset view
- Improved widget titlebar tooltips and fixed recurse button cutoff
- Fixed progress and state issues in DatasetWriter (no longer stuck when no documents created)
- Sort datasets by flags and notes
- Enabled propagating of selected columns when creating datasets from existing datasets

## Important Bug Fixes

- Fixed multiple causes of empty or failing dataset creation during import/processing
- Fixed "Cancel All" not properly finishing document writing in processing preview
- Resolved several Advanced Processing node/edge connection and deletion issues
- Fixed Document Splitter error generating available fields
- Fixed various request building, body handling, and parsing issues in API Reader/Processor
- Fixed COM exceptions when loading saved scene views
- Fixed map widget after Mapsui breaking changes
- Fixed Value Filter crash after SkiaSharpView breaking changes
- Fixed homogeneous message blinking when settings dialog is open
- Fixed search results sorting with mixed alphanumeric and date values
- Reduced Document View lag by switching to WinUiEditor
- Fixed numerous drag & drop, validation, serialization, and certificate handling issues
- Fixed row selection being cleared after sorting or searching in Dataset view
- Fixed view info not updating after row selection in Dataset view
- 

## Technical / Infrastructure Changes

- Major refactoring of ProcessorNode, NetworkNode, and SceneVisualizationControl
- Multiple HttpClient improvements (no-retry client, SocketsHttpHandler, connection cleanup)
- Introduced ApiRequestBuilder infrastructure and dynamic UiGenDialog
- Removed outdated/hacky code (old ApiRequestDialog, search hack for notes, etc.)
- Expanded benchmarking infrastructure (DatasetQueryBenchmarks, LargeImportBenchmarks)
- Updated all 3rd party libraries and licenses
- Many unit and integration test additions/fixes (especially API and URI handling)
- Switched to x64 platform in several areas (build pipeline, UI project)
- Upgraded to .NET 10 including most system and Microsoft NuGet packages