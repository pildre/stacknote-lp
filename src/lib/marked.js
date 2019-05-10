import marked from 'marked';
import hljs from 'highlight.js';

var renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  var link = marked.Renderer.prototype.link.call(this, href, title, text);
  return link.replace('<a', "<a target='_blank' ");
};

marked.setOptions({
  renderer: renderer,
  breaks: true,
  sanitize: false,
  highlight: function(code, lang) {
    const highlighted = hljs.highlightAuto(code);
    return highlighted.value;
  }
});

export default marked;
