(function() {
    function InsertXFacesWidget() {
        const targetDiv = document.getElementById('x-faces-target');
        if (!targetDiv) {
            console.warn('Div с id "x-faces-target" не найден.');
            return;
        }

        // Создаем iframe
        const iframe = document.createElement('iframe');
        iframe.src = 'https://dev.anvio.com/certificate/?location=1&lang=en';
        iframe.width = '100%';
        iframe.height = '600';
        iframe.style.border = 'none';

        targetDiv.appendChild(iframe);
    }

    document.addEventListener('DOMContentLoaded', InsertXFacesWidget);
})();
