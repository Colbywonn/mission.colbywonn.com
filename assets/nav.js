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
