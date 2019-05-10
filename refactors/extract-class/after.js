/**** Extract class for reuse ***/

class Text {
  constructor(rst, html) {
    this.rst = rst
    this.html = html
  }

  getRst() {
    return this.rst
  }

  getHtml() {
    return this.html
  }
}

class BlogPost {
  constructor() {
    this.previewText = null
    this.text = null
  }

  setPreviewText(rst, html) {
    this.previewText = new Text(rst, html)
    console.log('this', this)
  }
  setText(rst, html) {
    this.text = new Text(rst, html)
    console.log('this', this)
  }
}


const instanceBlogPost = new BlogPost()

instanceBlogPost.setPreviewText('Hello, my name is Ruben i am searching info about nextjs', '<span>Hello, my name is Ruben i am searching info about nextjs</span>')
instanceBlogPost.setText('Hello, my name is Juan, What do you need?', '<span>Hello, my name is Juan, What do you need?</span>')
