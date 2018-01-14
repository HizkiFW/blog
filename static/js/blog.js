function init() {
    console.log("blog.js initialized");
    // Parse emojis on page
    twemoji.parse(document.getElementById("post-body"));
}

init();
