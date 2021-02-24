const gulp = require("gulp");
const gap = require("gulp-append-prepend");

gulp.task("licenses", async function() {
  // this is to addCodeMax licenses in the production mode for the minified js
  gulp
    .src("build/static/js/*chunk.js", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Now UI Kit PRO React - v1.0.0
=========================================================

* Product Page: http://www.codemaxsoftwares.com/product/now-ui-kit-pro-react
* Copyright 2020CodeMax (http://www.CodeMaxSoftwares.com)

* Coded byCodeMax

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to addCodeMax licenses in the production mode for the minified html
  gulp
    .src("build/index.html", { base: "./" })
    .pipe(
      gap.prependText(`<!--

=========================================================
* Now UI Kit PRO React - v1.0.0
=========================================================

* Product Page: http://www.codemaxsoftwares.com/product/now-ui-kit-pro-react
* Copyright 2020CodeMax (http://www.CodeMaxSoftwares.com)

* Coded byCodeMax

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

-->`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));

  // this is to addCodeMax licenses in the production mode for the minified css
  gulp
    .src("build/static/css/*chunk.css", { base: "./" })
    .pipe(
      gap.prependText(`/*!

=========================================================
* Now UI Kit PRO React - v1.0.0
=========================================================

* Product Page: http://www.codemaxsoftwares.com/product/now-ui-kit-pro-react
* Copyright 2020CodeMax (http://www.CodeMaxSoftwares.com)

* Coded byCodeMax

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/`)
    )
    .pipe(gulp.dest("./", { overwrite: true }));
  return;
});
