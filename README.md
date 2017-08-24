# ember-lux [![Build Status](https://travis-ci.org/dollarshaveclub/ember-lux.svg?branch=master)](https://travis-ci.org/dollarshaveclub/ember-lux)

Easily integrate [SpeedCurve LUX](https://speedcurve.com/features/lux/) into your ember app.

# Configuration

The only config that is required is your LUX ID. You can set your config in `config/environment.js`

Name | Type | Description | Default
:--- | :--- | :--- | :---
`id` | `int` | _[REQUIRED] Your LUX ID found within Admin -> Teams_ | `undefined`
`sampleRate` | `int` | _How many users should be sampled?_ | `1`
`enabled` | `Boolean` | _Set to `false` to not inject the lux script into the page._ | `true`

## Installation

* `git clone <repository-url>` this repository
* `cd ember-lux`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
