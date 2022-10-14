function newElement(type, object){
    var element = document.createElement(type);    
    for(var i in object){
        element[i] = object[i];
    }
    return element;
}
function hide(event){
    event.target.parentNode.style.display = "none";
}

function closebtn() {
    var closebtn = newElement("span", {"className": "close btn","innerHTML": "&times;"});
    closebtn.addEventListener("click", hide);
    return closebtn;
}

var conditions = newElement("div",{"id":"conditions","style":"display:none","innerHTML":"<h1>Mentions légales</h1><div><h2>Editeur du Site :</h2> Celui-ci &agrave; &eacute;t&eacute; d&eacute;veloppp&eacute; dans le cadre d&#39;un projet d&#39;&eacute;tude.</p><h2>H&eacute;bergement :</h2><p>FranceServ Hébergement<br />17 rue du collège de l'arc<br />39100 DOLE<br />France</p><h2>Cookies :</h2><p>Notre site internet utilise des cookies. Il s&rsquo;agit de petits fichiers texte enregistr&eacute;s sur votre disque dur. La plupart des cookies sont destin&eacute;s &agrave; permettre ou faciliter votre navigation et sont n&eacute;cessaires au fonctionnement du site. L&rsquo;utilisation de cookies, propres ou tiers, n&rsquo;&eacute;tant pas obligatoirement n&eacute;cessaires au fonctionnement du site n&eacute;cessite un consentement expr&egrave;s de votre part. Vous pouvez manifester votre consentement ou vous opposer &agrave; l&rsquo;utilisation des cookies en param&eacute;trant votre dispositif de connexion de mani&egrave;re appropri&eacute;e. Reportez-vous pour cela notamment au guide d&rsquo;utilisation de votre navigateur.</p><h2>Comment accepter, param&eacute;trer ou refuser un cookie ?</h2><p>Vous pouvez configurer votre navigateur de fa&ccedil;on &agrave; ce que les cookies soient enregistr&eacute;s ou rejet&eacute;s.</p><h2>Pour Microsoft Internet Explorer :</h2><ul><li>Choisissez le menu &nbsp;<strong>Outils</strong> &nbsp;puis &nbsp;<strong>Options Internet&nbsp;</strong></li><li>Cliquez sur l&rsquo;onglet &laquo; Confidentialit&eacute; &raquo;</li><li>S&eacute;lectionnez le niveau souhait&eacute; &agrave; l&rsquo;aide du curseur</li></ul><h2>Pour Mozilla Firefox :</h2><ul><li>Choisissez le menu <strong>Outils&nbsp;</strong>puis&nbsp;<strong>Options</strong></li><li>Cliquez sur l&rsquo;option <strong>Vie priv&eacute;e</strong></li></ul><h2>Pour Chrome :</h2><ul><li>Choisissez le menu <strong>Edition</strong> puis&nbsp;<strong>Pr&eacute;f&eacute;rences</strong>&nbsp;</li><li>Cliquez sur l&rsquo;option <strong>Donn&eacute;es personnelles</strong></li><li>Rubrique <strong>Cookies</strong>&nbsp;</li></ul><h2>Pour Safari :</h2><ul><li>Choisissez le menu <strong>Edition</strong> puis&nbsp;<strong>Pr&eacute;f&eacute;rences</strong>&nbsp;</li><li>Cliquez sur l&rsquo;option <strong>Donn&eacute;es personnelles</strong></li><li>Rubrique <strong>Cookies</strong>&nbsp;</li></ul><h2>Protection des donn&eacute;es personnelles :</h2><p>Aucune information personnelle n&rsquo;est collect&eacute;e &agrave; votre insu.<br />Aucune information personnelle n&rsquo;est c&eacute;d&eacute;e &agrave; des tiers.</p></div>"});
conditions.appendChild(closebtn());
document.body.appendChild(conditions);
document.body.appendChild(newElement("style",{"innerHTML":"#conditions { background-color: rgba(0, 0, 0, 0.75);position: absolute;top: 0px;left: 0px;width: 100vw;color: white;padding: 10px;text-align: center;overflow: auto;-ms-overflow-style: none;scrollbar-width: none;height: 100vh;z-index: 15;} #conditions p {max-width: 50%;transform: translate(50%, 0);} .close {position: absolute;top: 5vh;right: 5vw;background-color: red;padding: 4px 10px;font-size: 28px;}"}));