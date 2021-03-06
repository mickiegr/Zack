# CHANGELOG

## 1.4.0 - Ra Ra Rasputin's Disco Tiara
**New Features**
* Now works out of the box with Fusion 3
* Added support for changing the default query via FUSION_CONFIG.js
* Added support for date range facets type
* Added support for simple grouped results
* New loading state for range facets to prevent multiple selections while page is loading

**Bug Fixes**
* When redirected through login, inital page query will no longer be cleared
* Linked URLS with parameters now click through correctly
* Only show pagination arrows when pagination is possible
* Fixed typeahead autocomplete user entry race condition

**Package Updates**
* Updated ESLint to version 3.3.1.
* Updated angular-ui-router to version 0.4.2

**Deprecated API functions**
* URLService.setQuery()

  Instead of using `URLService.setQuery()` use `QueryService.setQuery()`

## 1.3.0 - Pikachu's Invisible Tiara - August 5, 2016
**New Features**
* Added a Windows packaged build, you can now run View on Windows
* Improved performance by minifying builds by default and turning off page change animations
* You can now specify which port View runs on
* Introduced developer mode, which allows you to develop with unminified build objects, just `npm run start-dev`

**Bug Fixes**
* Fixed a bug in `npm run build` command

## 1.2.0 - Cersei's Iron Tiara - June 30, 2016
**New Features**
* Now support range facet type
* Added multi select faceting, meaning you can facet on multiple items within a single query
* Added 'clear all' button to facet lists, clearing all selected facets
* Improved signals now pass in more information including position, language, and platform
* Enhanced signals service, adding additional functionality
* Improved field display in templates by setting set max-length

**Bug fixes**
* Fix typeahead of a query profile or pipeline
* Fixed field values: HTML entities are now properly truncated

## 1.1.0 - Tsarina Alexandra Tiara - May 4, 2016
**New Features**
* Highlighting support for fields when configured in Fusion
* Grouped results are now displayed when configured in the Fusion pipeline
* Add support for self signed certs with https on connections between Fusion and View
* Add ability to use View with https enabled. (You can even use your own cert!)
* Add context and instructions when starting via view.sh command
* Improved signals to work with more complex inputs

**Bug fixes**
* Fixed npm start command:   NPM start command now tracks changes to HTML files. Now you can change your HTML and templates with reckless abandon
* Fixed landing pages: Landing are now unique

## 1.0.0 - Initial release (Paper Tiara) - April 6, 2016

The first release of Lucidworks View

Contains out of the box support for:

Landing pages
- Fusion Field facets
- Document display templates
  - Slack, Twitter, JIRA, web, local file, default
- Color and logo customization
- Authentication
- Signals
- Typeahead
- Sorting
