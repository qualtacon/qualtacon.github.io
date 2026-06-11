Vorteks 4 Release Notes
=====================

## 4.0.1579.0
06/11/2026

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

## Other Changes


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
