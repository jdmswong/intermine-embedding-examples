((function(){this.JST||(this.JST={}),this.JST["./publications/_paginator"]=function(a){a||(a={});var b=[],c=function(a){var c=b,d;return b=[],a.call(this),d=b.join(""),b=c,e(d)},d=function(a){return a&&a.ecoSafe?a:typeof a!="undefined"&&a!=null?g(a):""},e,f=a.safe,g=a.escape;return e=a.safe=function(a){if(a&&a.ecoSafe)return a;if(typeof a=="undefined"||a==null)a="";var b=new String(a);return b.ecoSafe=!0,b},g||(g=a.escape=function(a){return(""+a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")}),function(){((function(){var a,c;b.push('<div class="paginator btn-group">\n  ');for(a=0,c=this.pages;0<=c?a<=c:a>=c;0<=c?a++:a--)b.push('\n    <a class="btn '),a===this.current&&b.push(d("active")),b.push('">'),b.push(d(a)),b.push("</a>\n  ");b.push("\n</div>")})).call(this)}.call(a),a.safe=f,a.escape=g,b.join("")}})).call(this);