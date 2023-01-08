module.exports = ({ markdownAST }) => {
    let hidden = false
    markdownAST.children = markdownAST.children.filter(node => {
      if (node.type === "paragraph") {
        const text = node.children[0].value
        if (text === "!hidden") {
          hidden = true
          return false
        }
      }
      if (hidden) {
        return false
      }
      return true
    })
    return markdownAST
  }