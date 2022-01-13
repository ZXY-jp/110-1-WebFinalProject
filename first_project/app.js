let nav = document.querySelector("nav");
let navAnchor = document.querySelectorAll("nav ul li a")

window.addEventListener("scroll",()=>{
    if(window.pageYOffset>100){
        nav.style.backgroundColor=rgba(220,220,220,0.5);
        navAnchor.forEach(a=>{
            a.style.color ="black";
        })
    }
})

// /*************************利用node.js 將電腦作為server***************************** */ 
// const http = require("http");
// const url = require("url");
// const fs = require("fs");
// const path = require("path");

// const server = http.createServer( (req, res) => {
//     if (req.url == "/") {
//         fs.readFile(path.join(__dirname, "index.html"), (err, data) => {
//             res.writeHead(200, { "Content-Type": "text/html"});
//             res.write(data);
//             res.end();
//         });
//     } else {
//         let parsedURL = url.parse(req.url);
//         res.write("Hello, " + parsedURL.pathname);
//         res.end();
//     }
// });

// server.listen(5050, () => {
//     console.log("Server is running on port 5050.");
// });