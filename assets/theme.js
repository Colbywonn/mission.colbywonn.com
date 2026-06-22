(function(){
  var KEY='mj-theme';
  function mark(t){
    var b=document.querySelectorAll('[data-set-theme]');
    for(var i=0;i<b.length;i++){
      b[i].setAttribute('aria-pressed', b[i].getAttribute('data-set-theme')===t?'true':'false');
    }
  }
  function apply(t){
    document.documentElement.setAttribute('data-theme',t);
    try{localStorage.setItem(KEY,t);}catch(e){}
    mark(t);
  }
  document.addEventListener('click',function(e){
    var b=e.target.closest&&e.target.closest('[data-set-theme]');
    if(b){apply(b.getAttribute('data-set-theme'));}
  });
  function init(){mark(document.documentElement.getAttribute('data-theme')||'light');}
  if(document.readyState!=='loading'){init();}
  else{document.addEventListener('DOMContentLoaded',init);}
})();

/* arrow-key navigation between letters (only acts on post pages,
   which carry data-prev / data-next on <body>) */
(function(){
  var b=document.body;
  var prev=b&&b.getAttribute('data-prev');
  var next=b&&b.getAttribute('data-next');
  if(!prev&&!next){return;}
  document.addEventListener('keydown',function(e){
    if(e.defaultPrevented||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey){return;}
    var t=e.target,tag=t&&t.tagName;
    if(tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||(t&&t.isContentEditable)){return;}
    if(e.key==='ArrowLeft'&&prev){location.href=prev;}
    else if(e.key==='ArrowRight'&&next){location.href=next;}
  });
})();
