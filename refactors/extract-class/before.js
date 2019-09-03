/**** How rst, html is repeat it smell ***/

class BlogPost {
  constructor() {
    this.previewTextRst = null
    this.previewTextHtml = null
    this.textRst = null
    this.textHtml = null
  }

  setPreviewText(rst, html) {
    this.previewTextRst = rst
    this.previewTextHtml = html
    console.log('this', this)
  }
  setText(rst, html) {
    this.textRst = rst
    this.textHtml = html
    console.log('this', this)
  }
}


const instanceBlogPost = new BlogPost()

instanceBlogPost.setPreviewText('Hello, my name is Ruben i am searching info about nextjs', '<span>Hello, my name is Ruben i am searching info about nextjs</span>')
instanceBlogPost.setText('Hello, my name is Juan, What do you need?', '<span>Hello, my name is Juan, What do you need?</span>')
