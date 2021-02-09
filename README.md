=== HTML5 & Sass Landing page ===

Simple landing page created from design provided

HTML5
Sass, compiled, minimized and prefixed with Gulp.
Responsive - tested in Firefox, Safary, Chome and Edge. (Max Edge 15)
Accessible

=== How to install ===

run 'npm install' to install the dependencies specified in the package.json file. 
run 'gulp sass' to compile, prefix and minimize the sass files in the sass folder. The files will be merged in the css/styles.min.css

=== Next steps ===

- Fix color contrast on paragraphs. The color provided in design do not comply with WCAG 2 AA
- Add compatibility with old IE versions. Adding a JS library to detect the IE version. Adding a class to '<body>' and adding CSS fixes to the elements using CSS Grid. 
- Mobile version: convert long sections like 'features' and 'testimonials' into a carousel (using Slick.js for example.)