Vorteks 4 Release Notes
=====================

## 4.0.1628.12
08/03/2026

## New Features

#### [Dataset Dashboard](Dataset)

**New Widgets**
- Image Widget — Add pictures from a file, web link, clipboard, or drag-and-drop. Choose whether the image fits inside the widget or fills it.
- Website Widget — Show a live webpage from a URL, or open a local HTML file or folder.

**Easier to build and manage**
- When adding a widget, you get a visual picker with preview icons so you can see what each widget looks like before choosing.
- You can rename widgets.
- You can resize widgets manually on the dashboard.
- Chart and word cloud widgets can use more than one field from your data.
- Notes widget behavior was improved.

**Screenshots straight to the dashboard**
- When exporting a visualization screenshot, you can:Add it directly to a dataset dashboard as an image widget

#### [Dataset](Dataset)

**New Command Bar Options**
- Remove From Dataset — Delete selected documents from the dataset.
- Delete From Project — Delete selected documents from the project (all datasets/views/etc).

#### [Project Explorer](ProjectExplorer)
Project Explorer supports right-click context menu

#### [Document Type Registration](DataSource)
Docment Type Registration now supports renaming of all fields. (Right click on a field to rename it.)


## Improvements and Optimizations
- Doc Type Manager field-type tooltips
- Word Cloud: multiple fields


## Bug Fixes
- Deleting a node (value) from project will now remove it from other views.
- RED borders on all required processor inputs
- All file paths in the processor modules now support drag-and-drop.
- XML re-import fails


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
