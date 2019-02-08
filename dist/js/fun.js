//WhatsApp widgets

(function() {
  var options = {
    whatsapp: "+5511986917325", // Número do WhatsApp
    company_logo_url: "http://127.0.0.1:5500/dist/index.html", // URL com o logo da empresa
    greeting_message:// Texto principal
    call_to_action: "Olá no que posso ajudar?", // Chamada para ação
    position: "left" // Posição do widget na página 'right' ou 'left'
  };
  var proto = document.location.protocol,
    host = "whatshelp.io",
    url = proto + "//static." + host;
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = url + "/widget-send-button/js/init.js";
  s.onload = function() {
    WhWidgetSendButton.init(host, proto, options);
  };
  var x = document.getElementsByTagName("script")[0];
  x.parentNode.insertBefore(s, x);
})();
