(function() {
    function InsertXFacesWidget() {
        const targetDiv = document.getElementById('x-faces-target');
        if (!targetDiv) {
            console.warn('Div "x-faces-target" not found');
            return;
        }

        const iframe = document.createElement('iframe');
        iframe.src = 'https://api.rud.fftz.space/v1/user/verify/80b21cc1-a408-40f0-b335-c9dd1e65f115';
        iframe.width = '100%';
        iframe.height = '1000px';
        iframe.style.border = 'none';

        targetDiv.appendChild(iframe);
    }

    document.addEventListener('DOMContentLoaded', InsertXFacesWidget);
})();
