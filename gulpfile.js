const gulp = require("gulp")
const webserver = require("gulp-webserver");
const browserSync = require("browser-sync").create();
const {
    createProxyMiddleware
} = require("http-proxy-middleware");
const {
    create
} = require("browser-sync");


var proxyfn = createProxyMiddleware([
    "/api",
    "/subProgStudentApi"
], {
    target: "https://wx.wit-learn.com",
    changeOrigin: true,
    // pathRewrite: {
    //     "^/api": "",
    //     "^/hehe": ""
    // },
    logLevel: "debug"
});

gulp.task("default", function () {

    browserSync.init({
        server: {
            baseDir: "./src",
            middleware: [proxyfn]
        },
        port: 8080,
        open: false,
        notify: false
    })

    gulp.watch("src/**/*.{html,js}").on("change", browserSync.reload);

});