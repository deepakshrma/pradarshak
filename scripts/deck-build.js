const fs = require("fs");
const path = require("path");

const docsPath = path.resolve(__dirname, "../docs");
const metaDocPath = path.resolve(__dirname, "../docs/.meta-data.json");
const cleanName = name => {
  return name
    .replace(/^\d+-/, '')
    .replace(/\.md/g, '')
    // .replace(/([A-Z])/g, (str, cap, index) =>  (index && cap) ? ('-' + cap) : cap)
    .split(/-/g)
    .map(s => s.charAt(0).toUpperCase() + s.substr(1))
    .join(" ");
};
const isDirectory = (folder, file) =>
  fs.statSync(path.resolve(folder, file)).isDirectory();
const docsFolders = fs
  .readdirSync(docsPath)
  .filter(file => isDirectory(docsPath, file))
  .map((file, index) => {
    const currentDir = path.resolve(docsPath, file)
    return {
      index: index,
      name: `${cleanName(file)}`,
      path: file,
      fullPath: currentDir,
      docs: fs
        .readdirSync(currentDir)
        .filter(file => !isDirectory(currentDir, file) && path.extname(path.resolve(currentDir, file)) === '.md')
        .map((doc, index) => {
            const fullPath = path.resolve(currentDir, doc)
            return {
                index: index,
                name: `${cleanName(doc)}`,
                path: doc,
                fullPath,
                text: fs.readFileSync(fullPath).toString()
            }
        })
    };
  });
fs.writeFileSync(metaDocPath, JSON.stringify(docsFolders, null, 4))
