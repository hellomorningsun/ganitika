// Ganitika lesson keywords: BUILT-IN FALLBACK copy.
// The teacher app loads the live list from https://ganitika.org/keywords.json (the student site),
// so new tools and explore pages appear here without re-uploading this app. This copy is used only
// when ganitika.org can't be reached. It never needs updating, but you may refresh it now and then.
//
// The teacher ticks keywords for a lesson; they are saved in the lesson's `topics` exactly as written here.
// The student app shows, beside that lesson, only the tools and explore pages the ticked keywords open.
// A lesson with no keyword from this list gets no tool panel.
//
// opens: { tool: '<tool id>', preset: {...} } or { page: '<page id>' }
//   tool ids: graph, geometry, numberline, fractions, proportion, numsystem, mensuration, numbers
//   page ids: numbers (The family of numbers), bases (Number systems for integers and fractions),
//             groups (Groups through symmetry), read (Computation and computer languages)
(function () {
  var KEYWORDS = [
    // Numbers
    { name: 'Natural numbers', group: 'Numbers', opens: [{ page: 'numbers' }, { tool: 'numsystem' }] },
    { name: 'Whole numbers', group: 'Numbers', opens: [{ page: 'numbers' }, { tool: 'numsystem' }] },
    { name: 'Integers', group: 'Numbers', opens: [{ tool: 'numberline' }, { page: 'numbers' }] },
    { name: 'Rational numbers', group: 'Numbers', opens: [{ tool: 'fractions' }, { page: 'numbers' }] },
    { name: 'Irrational numbers', group: 'Numbers', opens: [{ tool: 'numsystem' }, { page: 'numbers' }] },
    { name: 'Real numbers', group: 'Numbers', opens: [{ tool: 'numsystem' }, { page: 'numbers' }] },
    { name: 'Number system', group: 'Numbers', opens: [{ tool: 'numsystem' }, { page: 'numbers' }] },
    { name: 'Number bases (binary)', group: 'Numbers', opens: [{ page: 'bases' }] },
    { name: 'Number line', group: 'Numbers', opens: [{ tool: 'numberline' }] },
    { name: 'Fractions', group: 'Numbers', opens: [{ tool: 'fractions' }] },
    { name: 'Decimals and percentages', group: 'Numbers', opens: [{ tool: 'fractions' }] },
    { name: 'Prime numbers', group: 'Numbers', opens: [{ tool: 'numbers' }] },
    { name: 'Factors and multiples', group: 'Numbers', opens: [{ tool: 'numbers' }] },
    { name: 'HCF and LCM', group: 'Numbers', opens: [{ tool: 'numbers', preset: { tab: 1 } }] },
    { name: 'Square roots', group: 'Numbers', opens: [{ tool: 'numsystem', preset: { mode: 'spiral' } }] },

    // Ratio and proportion
    { name: 'Unitary method', group: 'Ratio and proportion', opens: [{ tool: 'proportion' }] },
    { name: 'Direct proportion', group: 'Ratio and proportion', opens: [{ tool: 'proportion', preset: { mode: 'direct' } }] },
    { name: 'Inverse proportion', group: 'Ratio and proportion', opens: [{ tool: 'proportion', preset: { mode: 'inverse' } }] },
    { name: 'Time and work', group: 'Ratio and proportion', opens: [{ tool: 'proportion', preset: { mode: 'inverse' } }] },

    // Shapes and mensuration
    { name: 'Triangles', group: 'Shapes and mensuration', opens: [{ tool: 'geometry' }] },
    { name: 'Pythagoras theorem', group: 'Shapes and mensuration', opens: [{ tool: 'geometry', preset: { squares: true } }] },
    { name: 'Area of a circle', group: 'Shapes and mensuration', opens: [{ tool: 'mensuration', preset: { mode: 'circle' } }] },
    { name: 'Area of parallelogram and triangle', group: 'Shapes and mensuration', opens: [{ tool: 'mensuration', preset: { mode: 'parallelogram' } }] },
    { name: 'Volume', group: 'Shapes and mensuration', opens: [{ tool: 'mensuration', preset: { mode: 'volume' } }] },

    // Graphs and calculus
    { name: 'Linear equations', group: 'Graphs and calculus', opens: [{ tool: 'graph', preset: { fns: ['m x + c'], params: { m: 1, c: 1 } } }] },
    { name: 'Quadratics and polynomials', group: 'Graphs and calculus', opens: [{ tool: 'graph', preset: { fns: ['a x^2 + b x + c'], params: { a: 1, b: 0, c: -2 } } }] },
    { name: 'Trigonometry', group: 'Graphs and calculus', opens: [{ tool: 'graph', preset: { fns: ['a sin(b x + c)'], params: { a: 1, b: 1, c: 0 } } }] },
    { name: 'Exponents and logarithms', group: 'Graphs and calculus', opens: [{ tool: 'graph', preset: { fns: ['e^x', 'ln(x)', 'x'] } }] },
    { name: 'Functions and graphs', group: 'Graphs and calculus', opens: [{ tool: 'graph' }] },
    { name: 'Limits', group: 'Graphs and calculus', opens: [{ tool: 'graph', preset: { fns: ['sin(x)/x'] } }] },
    { name: 'Derivatives', group: 'Graphs and calculus', opens: [{ tool: 'graph', preset: { fns: ['x^3 - 3x'], derivative: true } }] },
    { name: 'Integration', group: 'Graphs and calculus', opens: [{ tool: 'graph', preset: { fns: ['x^2'], area: [0, 2] } }] },

    // Explore pages
    { name: 'Groups and symmetry', group: 'Explore pages', opens: [{ page: 'groups' }] },
    { name: 'Computation and computer languages', group: 'Explore pages', opens: [{ page: 'read' }] },
  ];
  // Lowercased lookup, so "fractions" and "Fractions" are the same keyword.
  var byName = {};
  KEYWORDS.forEach(function (k) { byName[k.name.toLowerCase()] = k; });
  globalThis.GANITIKA_KEYWORDS = { list: KEYWORDS, find: function (name) { return byName[String(name).trim().toLowerCase()] || null; } };
})();
