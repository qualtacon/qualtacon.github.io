## Release 3.1.41.5

### Downloads:
* [Vorteks_3.1.41.5](https://qualta.sharepoint.com/:u:/s/Qualta580/EVs0PMpy4I5NtCLSopZIYP0BoTr_FNinoWcxHJM6BM1SuA)
* [Vorteks_3.1.41.5_NoLicense](https://qualta.sharepoint.com/:u:/s/Qualta580/ER80YEIQalBOiaxsBIbsnm8BNCNMVHsScJdInVAPhI9HQQ)

### Release Notes:

Processing Environment
   *  Fixes
     - Universal Converter
       * Fixed issue with the first number being removed from spreadsheet headers that start with numbers.
   *  Improvements
     - Dependences
       * Update Newtonsoft.Json
       * Add external algorithm library
     - API Reader
       * Convert algorithm to use external library
       * Add Accepted Media Type option
       * Add error handling when the API response is successful but documents fail in the Universal Converter
   *  New Features
     - Add API Processor Module
       * Processing module for sending data to an API Server for processing
       * Create new documents from results
       * Append results to current documents
       * Use available fields to choose data being sent
 Visualizing Environment
   * Fixes
     - Fixed issue with app crashing when moving Timeline pane next to View Info pane
     - Center Visualization buttons' captions
     - Fixed issue with nodes disappearing when monitor goes to sleep
     - Fixed importing excel with missing headers. Empty headers will have names generated for them.
   *  Improvements
     - Updated Timeline UI - enlarged font, better Y-axis label spacing
     - Added Print Settings to application Settings for changing and saving default print settings.
     - Added Print Settings to Export dialog for changing the settings for the current export.
     - Added grayscale Color Legend color set
     - Update Visualization libraries to the latest version