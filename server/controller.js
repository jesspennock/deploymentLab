const path = require("path")

module.exports = {
    getHTML: (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'))
    },
    getCSS: (req, res) => {
        res.sendFile(path.join(__dirname, '../public/styles.css'))
    }
}
console.log(__dirname)