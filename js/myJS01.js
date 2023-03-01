
			var t1= document.getElementById("t1");
			var t2= document.getElementById("t2");
			
			var t3= document.getElementById("tjxw");
			var t4= document.getElementById("wdgz");
			
			t1.onclick=function(){
				t3.style.display="block";
				t4.style.display="none";
			}
			t2.onclick=function(){
				t4.style.display="block";
				t3.style.display="none";
			}
			t1.onmouseenter=function(){
				black(this);
			}
			t1.onmouseleave=function(){
				gray(this);
			}
			t2.onmouseenter=function(){
				black(this);
			}
			t2.onmouseleave=function(){
				gray(this);
			}
			function gray(a){
				a.style.color="#ccc";
			}
			function black(a){
				a.style.color="#222222";
			}
			function blue(a){
				a.style.color="blue";
			}
			function underline(a){
				a.style.textdecoration="underline";
			}
			
			var re = document.getElementsByClassName("re");
			for(var i=0;i<re.length;i++){
				re[i].onmouseenter=function(){
					blue(this);
				}
				re[i].onmouseleave=function(){
					black(this);
				}
			}


			document.body.onscroll=function(){
				var s_top = document.documentElement.scrollTop;
				var resou=document.getElementById("resou");
				if(s_top>300){
					resou.style.position="fixed";
					resou.style.top="153px";
					resou.style.right="100px";
					up2.style.display="block";
				}
				else if(s_top==0){
					up2.style.display="none";
				}
				else{
					resou.style.position="absolute";
					resou.style.top="450px";
					resou.style.right="100px";
					up2.style.display="block";
				}
			}
			
			// back to up
			var up1= document.getElementById("up-1");
			var up2= document.getElementById("up-2");
			var qr = document.getElementById("return-l");
			
			up1.onmouseenter=function(){
				this.style.color="blue";
				this.style.boxShadow="2px 2px 2px #706D6D"
				qr.style.display="block";
			}
			up1.onmouseleave=function(){
				this.style.color="#7F7F7F";
				this.style.boxShadow="none";
				qr.style.display="none";
			}
			
			up2.onmouseenter=function(){
				this.style.color="blue";
				this.style.boxShadow="2px 2px 4px #706D6D"
			}
			up2.onmouseleave=function(){
				this.style.color="#7F7F7F";
				this.style.boxShadow="none"
			}
			up2.onclick=function(){
				document.body.scrollIntoView({behavior: "smooth", block: "start",})
			}						
	