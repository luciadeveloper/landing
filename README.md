=== HTML5 & Sass Landing page ===

Simple landing page created from design provided

HTML5
Sass, compiled, minimized and prefixed with Gulp.
Responsive - tested in Firefox, Safari, Chome and Edge. (Max Edge 15)
Accessible

=== How to install ===

run 'npm install' to install the dependencies specified in the package.json file. 
run 'gulp sass' to compile, prefix and minimize the sass files in the sass folder. The files will be merged in the css/styles.min.css

=== Next steps ===

- Fix colour contrast on paragraphs. The colour provided in the design does not comply with WCAG 2 AA
- Add compatibility with old IE versions. Adding a JS library to detect the IE version. Adding a class to body tag and adding CSS fixes to the elements using CSS Grid.
- Mobile version: convert long sections like 'features' and 'testimonials' into a carousel (using Slick.js for example.)