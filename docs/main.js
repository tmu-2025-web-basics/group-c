// Adobe Fonts (Typekit) の読み込み
(function(d) {
  var config = {
    kitId: 'vkk0vhe',
    scriptTimeout: 3000,
    async: true
  },
  h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/\bwf-loading\b/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
})(document);

// ドアクリック時のアニメーション（index.htmlページのみ適用）
document.addEventListener('DOMContentLoaded', function() {
  // index.htmlページでのみ実行
  if (document.body.classList.contains('indexpage')) {
    document.querySelectorAll('.door-item a').forEach(link => {
      link.addEventListener('click', e => {
        e.preventDefault();             // 即時遷移を止め
        link.classList.add('open');     // open クラスでアニメ開始
        setTimeout(() => {
          window.location.href = link.href;
        }, 400);  // アニメーション期間と合わせる
      });
    });
  }
});