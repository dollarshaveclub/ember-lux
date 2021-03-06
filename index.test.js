const lux = require('./')

test(`it should return the LUX snippet for {{ content-for 'head' }}`, () => {
  const contentFor = lux.contentFor('head', {
    lux: {
      id: 'MY-ID-123',
      enabled: true,
    },
  })

  expect(contentFor.replace(/\s/g, ''))
    .toEqual(expectedOutput())
})

test('it should throw an error if no ID is provided', () => {
  function contentFor () { lux.contentFor('head', {}) }
  expect(contentFor)
    .toThrowError(/provided an id/)
})

test('it should allow for configuration of the sample rate', () => {
  const contentFor = lux.contentFor('head', {
    lux: {
      id: 1,
      sampleRate: 5,
    },
  })
  expect(contentFor)
    .toMatch('samplerate = 5')
})

test('it should not include the LUX src if disabled', () => {
  const contentFor = lux.contentFor('head', {
    lux: {
      id: 'MY-ID-123',
      enabled: false,
    },
  })

  expect(contentFor.replace(/\s/g, ''))
    .toEqual(expectedOutput(false))
})

function expectedOutput (enabled = true) {
  let snippet = `
  <script>LUX=(function(){var a=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.gaMarks)?LUX.gaMarks:[]);var d=("undefined"!==typeof(LUX)&&"undefined"!==typeof(LUX.gaMeasures)?LUX.gaMeasures:[]);var h="LUX_start";var j=window.performance;var k=("undefined"!==typeof(LUX)&&LUX.ns?LUX.ns:(Date.now?Date.now():+(new Date())));if(j&&j.timing&&j.timing.navigationStart){k=j.timing.navigationStart}function e(){if(j){if(j.now){return j.now()}else{if(j.webkitNow){return j.now()}else{if(j.msNow){return j.now()}else{if(j.mozNow){return j.now()}}}}}var m=Date.now?Date.now():+(new Date());return m-k}function b(m){if(j){if(j.mark){return j.mark(m)}else{if(j.webkitMark){return j.webkitMark(m)}}}a.push({name:m,entryType:"mark",startTime:e(),duration:0});return}function l(o,s,m){if("undefined"===typeof(s)&&g(h)){s=h}if(j){if(j.measure){if(s){if(m){return j.measure(o,s,m)}else{return j.measure(o,s)}}else{return j.measure(o)}}else{if(j.webkitMeasure){return j.webkitMeasure(o,s,m)}}}var q=0,n=e();if(s){var r=g(s);if(r){q=r.startTime}else{if(j&&j.timing&&j.timing[s]){q=j.timing[s]-j.timing.navigationStart}else{return}}}if(m){var p=g(m);if(p){n=p.startTime}else{if(j&&j.timing&&j.timing[m]){n=j.timing[m]-j.timing.navigationStart}else{return}}}d.push({name:o,entryType:"measure",startTime:q,duration:(n-q)});return}function g(m){return c(m,f())}function c(p,o){for(i=o.length-1;i>=0;i--){var n=o[i];if(p===n.name){return n}}return undefined}function f(){if(j){if(j.getEntriesByType){return j.getEntriesByType("mark")}else{if(j.webkitGetEntriesByType){return j.webkitGetEntriesByType("mark")}}}return a}return{mark:b,measure:l,gaMarks:a,gaMeasures:d}})();LUX.ns=(Date.now?Date.now():+(new Date()));LUX.ac=[];LUX.cmd=function(a){LUX.ac.push(a)};LUX.samplerate = 1</script>
  `

  if (enabled) {
    snippet += `<script src="https://cdn.speedcurve.com/js/lux.js?id=MY-ID-123" async defer></script>`
  }

  return snippet.replace(/\s/g, '')
}
