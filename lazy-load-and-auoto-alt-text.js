<script type='text/javascript'>
var images = document.querySelectorAll('img');
for (var i = 0; i < images.length; i++) {
  images[i].setAttribute('loading', 'lazy');
  if (!images[i].getAttribute('alt')) {
    images[i].setAttribute('alt', '<data:blog.pageName/>');
  }
}
</script>
