<script type='text/javascript'>
function linkJuicerBlogger() {
  var postBody = document.getElementsByClassName('post-body')[0];
  if (postBody) {
    var content = postBody.innerHTML;
    var keywords = [
      {word: "AI Tool", url: "https://errstein.com/search/label/AI%20Tools"},
      {word: "Blogging", url: "https://errstein.com/search/label/Blogging"},
      {word: "SEO", url: "https://errstein.com/search/label/SEO"}
    ];
    keywords.forEach(function(item) {
      var regex = new RegExp('\\b(' + item.word + ')\\b', 'i'); 
      content = content.replace(regex, '<a href="' + item.url + '" style="color:#007bff;font-weight:bold;text-decoration:underline;">$1</a>');
    });
    postBody.innerHTML = content;
  }
}
window.addEventListener('DOMContentLoaded', linkJuicerBlogger);
</script>
