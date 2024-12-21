document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('toggleButton');
    const previousEntries = document.querySelectorAll('.previous');

    toggleButton.addEventListener('click', function () {
        previousEntries.forEach(entry => {
            if (entry.classList.contains('hidden')) {
                entry.classList.remove('hidden');
                toggleButton.textContent = 'Ocultar versiones anteriores';
            } else {
                entry.classList.add('hidden');
                toggleButton.textContent = 'Mostrar versiones anteriores';
            }
        });
    });
});

function ChatbroLoader(chats,async){async=!1!==async;var params={embedChatsParameters:chats instanceof Array?chats:[chats],lang:navigator.language||navigator.userLanguage,needLoadCode:'undefined'==typeof Chatbro,embedParamsVersion:localStorage.embedParamsVersion,chatbroScriptVersion:localStorage.chatbroScriptVersion},xhr=new XMLHttpRequest;xhr.withCredentials=!0,xhr.onload=function(){eval(xhr.responseText)},xhr.onerror=function(){console.error('Chatbro loading error')},xhr.open('GET','https://www.chatbro.com/embed.js?'+btoa(unescape(encodeURIComponent(JSON.stringify(params)))),async),xhr.send()}/* Chatbro Widget Embed Code End */ChatbroLoader({encodedChatId: '1914N'});
