<script type='text/javascript'>
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        var fakeEvent = new MouseEvent('click', {
            'view': window,
            'bubbles': true,
            'cancelable': true
        });
        document.body.dispatchEvent(fakeEvent);
    }, 5000); 
});
</script>
