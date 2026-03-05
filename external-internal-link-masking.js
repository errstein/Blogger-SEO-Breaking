<script type='text/javascript'>
function maskLinks() {
    var links = document.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        if (links[i].hostname !== window.location.hostname && links[i].hostname !== '') {
            var originalUrl = links[i].href;
            links[i].href = window.location.origin + "/search?q=redirect&url=" + btoa(originalUrl);
            links[i].setAttribute('target', '_blank');
        }
    }
}
window.onload = maskLinks;
</script>
