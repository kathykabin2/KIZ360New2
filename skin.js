// Garden Gnome Software - Skin
// Pano2VR 5.2.5/15998
// Filename: skin.ggsk
// Generated จ. ส.ค. 25 10:47:17 2025

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._logo=document.createElement('div');
		this._logo__img=document.createElement('img');
		this._logo__img.className='ggskin ggskin_svg';
		this._logo__img.setAttribute('src',basePath + 'images/logo.svg');
		this._logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._logo__img['ondragstart']=function() { return false; };
		this._logo.appendChild(this._logo__img);
		this._logo.ggId="logo";
		this._logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo.ggVisible=true;
		this._logo.className='ggskin ggskin_svg ';
		this._logo.ggType='svg';
		hs ='';
		hs+='height : 117px;';
		hs+='left : 32px;';
		hs+='position : absolute;';
		hs+='top : 30px;';
		hs+='visibility : inherit;';
		hs+='width : 267px;';
		hs+='pointer-events:auto;';
		this._logo.setAttribute('style',hs);
		this._logo.style[domTransform + 'Origin']='50% 50%';
		me._logo.ggIsActive=function() {
			return false;
		}
		me._logo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._logo.ggCurrentLogicStatePosition = -1;
		me._logo.ggCurrentLogicStateSize = -1;
		this._logo.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._logo.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._logo.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._logo.style[domTransition]='left none, top none, width none, height none';
				if (me._logo.ggCurrentLogicStatePosition == 0) {
					me._logo.style.left='11px';
					me._logo.style.top='25px';
				}
				else {
					me._logo.style.left='32px';
					me._logo.style.top='30px';
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStateSize = 1;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._logo.ggCurrentLogicStateSize != newLogicStateSize) {
				me._logo.ggCurrentLogicStateSize = newLogicStateSize;
				me._logo.style[domTransition]='left none, top none, width none, height none';
				if (me._logo.ggCurrentLogicStateSize == 0) {
					me._logo.style.width='253px';
					me._logo.style.height='109px';
					me.updateSize(me._logo);
				}
				else if (me._logo.ggCurrentLogicStateSize == 1) {
					me._logo.style.width='140px';
					me._logo.style.height='50px';
					me.updateSize(me._logo);
				}
				else {
					me._logo.style.width='267px';
					me._logo.style.height='117px';
					me.updateSize(me._logo);
				}
			}
		}
		this._logo.ggUpdatePosition=function (useTransition) {
			me._logo.ggUpdateConditionResize();
		}
		this.divSkin.appendChild(this._logo);
		this._info=document.createElement('div');
		this._info.ggId="info";
		this._info.ggLeft=-60;
		this._info.ggTop=-65;
		this._info.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._info.ggVisible=true;
		this._info.className='ggskin ggskin_container ';
		this._info.ggType='container';
		hs ='';
		hs+='height : 41px;';
		hs+='left : -60px;';
		hs+='position : absolute;';
		hs+='top : -65px;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:none;';
		this._info.setAttribute('style',hs);
		this._info.style[domTransform + 'Origin']='50% 50%';
		me._info.ggIsActive=function() {
			return false;
		}
		me._info.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._info.ggCurrentLogicStateSize = -1;
		this._info.ggUpdateConditionResize=function () {
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._info.ggCurrentLogicStateSize != newLogicStateSize) {
				me._info.ggCurrentLogicStateSize = newLogicStateSize;
				me._info.style[domTransition]='width none, height none';
				if (me._info.ggCurrentLogicStateSize == 0) {
					me._info.style.width='20px';
					me._info.style.height='20px';
					me.updateSize(me._info);
				}
				else {
					me._info.style.width='41px';
					me._info.style.height='41px';
					me.updateSize(me._info);
				}
			}
		}
		this._info.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			me._info.ggUpdateConditionResize();
		}
		this._in1=document.createElement('div');
		this._in1__img=document.createElement('img');
		this._in1__img.className='ggskin ggskin_svg';
		this._in1__img.setAttribute('src',basePath + 'images/in1.svg');
		this._in1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._in1__img['ondragstart']=function() { return false; };
		this._in1.appendChild(this._in1__img);
		this._in1.ggId="in1";
		this._in1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._in1.ggVisible=true;
		this._in1.className='ggskin ggskin_svg ';
		this._in1.ggType='svg';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		this._in1.setAttribute('style',hs);
		this._in1.style[domTransform + 'Origin']='50% 50%';
		me._in1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._in1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._in1.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._logo.style[domTransition]='none';
			} else {
				me._logo.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._logo.style.opacity='0';
			me._logo.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._topr.style[domTransition]='none';
			} else {
				me._topr.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._topr.style.opacity='0';
			me._topr.style.visibility='hidden';
			me._in1.style[domTransition]='none';
			me._in1.style.opacity='0';
			me._in1.style.visibility='hidden';
			me._in2.style[domTransition]='none';
			me._in2.style.opacity='1';
			me._in2.style.visibility=me._in2.ggVisible?'inherit':'hidden';
		}
		this._in1.ggUpdatePosition=function (useTransition) {
		}
		this._info.appendChild(this._in1);
		this._in2=document.createElement('div');
		this._in2__img=document.createElement('img');
		this._in2__img.className='ggskin ggskin_svg';
		this._in2__img.setAttribute('src',basePath + 'images/in2.svg');
		this._in2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._in2__img['ondragstart']=function() { return false; };
		this._in2.appendChild(this._in2__img);
		this._in2.ggId="in2";
		this._in2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._in2.ggVisible=true;
		this._in2.className='ggskin ggskin_svg ';
		this._in2.ggType='svg';
		hs ='';
		hs+='height : 41px;';
		hs+='left : 0px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : hidden;';
		hs+='width : 41px;';
		hs+='pointer-events:auto;';
		this._in2.setAttribute('style',hs);
		this._in2.style[domTransform + 'Origin']='50% 50%';
		me._in2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._in2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._in2.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._logo.style[domTransition]='none';
			} else {
				me._logo.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._logo.style.opacity='1';
			me._logo.style.visibility=me._logo.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._topr.style[domTransition]='none';
			} else {
				me._topr.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._topr.style.opacity='1';
			me._topr.style.visibility=me._topr.ggVisible?'inherit':'hidden';
			me._in1.style[domTransition]='none';
			me._in1.style.opacity='1';
			me._in1.style.visibility=me._in1.ggVisible?'inherit':'hidden';
			me._in2.style[domTransition]='none';
			me._in2.style.opacity='0';
			me._in2.style.visibility='hidden';
		}
		this._in2.ggUpdatePosition=function (useTransition) {
		}
		this._info.appendChild(this._in2);
		this._play=document.createElement('div');
		this._play__img=document.createElement('img');
		this._play__img.className='ggskin ggskin_svg';
		this._play__img.setAttribute('src',basePath + 'images/play.svg');
		this._play__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._play__img['ondragstart']=function() { return false; };
		this._play.appendChild(this._play__img);
		this._play.ggId="play";
		this._play.ggLeft=40;
		this._play.ggTop=-41;
		this._play.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._play.ggVisible=true;
		this._play.className='ggskin ggskin_svg ';
		this._play.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 40px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -41px;';
		hs+='visibility : hidden;';
		hs+='width : 40px;';
		hs+='pointer-events:auto;';
		this._play.setAttribute('style',hs);
		this._play.style[domTransform + 'Origin']='50% 50%';
		me._play.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._play.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._play.onclick=function (e) {
			me.player.startAutorotate("0.05","0.3");
			me._stop.style[domTransition]='none';
			me._stop.style.opacity='1';
			me._stop.style.visibility=me._stop.ggVisible?'inherit':'hidden';
			me._play.style[domTransition]='none';
			me._play.style.opacity='0';
			me._play.style.visibility='hidden';
		}
		me._play.ggCurrentLogicStatePosition = -1;
		this._play.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._play.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._play.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._play.style[domTransition]='left none, top none';
				if (me._play.ggCurrentLogicStatePosition == 0) {
					me._play.ggLeft=49;
					me._play.ggTop=-20;
					me._play.ggUpdatePosition(true);
				}
				else {
					me._play.ggLeft=40;
					me._play.ggTop=-41;
					me._play.ggUpdatePosition(true);
				}
			}
		}
		this._play.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			me._play.ggUpdateConditionResize();
		}
		this._info.appendChild(this._play);
		this._stop=document.createElement('div');
		this._stop__img=document.createElement('img');
		this._stop__img.className='ggskin ggskin_svg';
		this._stop__img.setAttribute('src',basePath + 'images/stop.svg');
		this._stop__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._stop__img['ondragstart']=function() { return false; };
		this._stop.appendChild(this._stop__img);
		this._stop.ggId="stop";
		this._stop.ggLeft=42;
		this._stop.ggTop=-40;
		this._stop.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stop.ggVisible=true;
		this._stop.className='ggskin ggskin_svg ';
		this._stop.ggType='svg';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 42px;';
		hs+='position : absolute;';
		hs+='top : -40px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		this._stop.setAttribute('style',hs);
		this._stop.style[domTransform + 'Origin']='50% 50%';
		me._stop.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._stop.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._stop.onclick=function (e) {
			me.player.stopAutorotate();
			me._stop.style[domTransition]='none';
			me._stop.style.opacity='0';
			me._stop.style.visibility='hidden';
			me._play.style[domTransition]='none';
			me._play.style.opacity='1';
			me._play.style.visibility=me._play.ggVisible?'inherit':'hidden';
		}
		me._stop.ggCurrentLogicStatePosition = -1;
		this._stop.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._stop.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._stop.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._stop.style[domTransition]='left none, top none';
				if (me._stop.ggCurrentLogicStatePosition == 0) {
					me._stop.ggLeft=49;
					me._stop.ggTop=-19;
					me._stop.ggUpdatePosition(true);
				}
				else {
					me._stop.ggLeft=42;
					me._stop.ggTop=-40;
					me._stop.ggUpdatePosition(true);
				}
			}
		}
		this._stop.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
			me._stop.ggUpdateConditionResize();
		}
		this._info.appendChild(this._stop);
		this._esc=document.createElement('div');
		this._esc__img=document.createElement('img');
		this._esc__img.className='ggskin ggskin_svg';
		this._esc__img.setAttribute('src',basePath + 'images/esc.svg');
		this._esc__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._esc__img['ondragstart']=function() { return false; };
		this._esc.appendChild(this._esc__img);
		this._esc.ggId="esc";
		this._esc.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._esc.ggVisible=true;
		this._esc.className='ggskin ggskin_svg ';
		this._esc.ggType='svg';
		hs ='';
		hs+='height : 43px;';
		hs+='left : 120px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : hidden;';
		hs+='width : 43px;';
		hs+='pointer-events:auto;';
		this._esc.setAttribute('style',hs);
		this._esc.style[domTransform + 'Origin']='50% 50%';
		me._esc.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._esc.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._esc.onclick=function (e) {
			me.player.exitFullscreen();
			me._full.style[domTransition]='none';
			me._full.style.opacity='1';
			me._full.style.visibility=me._full.ggVisible?'inherit':'hidden';
			me._esc.style[domTransition]='none';
			me._esc.style.opacity='0';
			me._esc.style.visibility='hidden';
		}
		me._esc.ggCurrentLogicStatePosition = -1;
		this._esc.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._esc.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._esc.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._esc.style[domTransition]='left none, top none';
				if (me._esc.ggCurrentLogicStatePosition == 0) {
					me._esc.style.left='114px';
					me._esc.style.top='-2px';
				}
				else {
					me._esc.style.left='120px';
					me._esc.style.top='-3px';
				}
			}
		}
		this._esc.ggUpdatePosition=function (useTransition) {
			me._esc.ggUpdateConditionResize();
		}
		this._info.appendChild(this._esc);
		this._full=document.createElement('div');
		this._full__img=document.createElement('img');
		this._full__img.className='ggskin ggskin_svg';
		this._full__img.setAttribute('src',basePath + 'images/full.svg');
		this._full__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._full__img['ondragstart']=function() { return false; };
		this._full.appendChild(this._full__img);
		this._full.ggId="full";
		this._full.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._full.ggVisible=true;
		this._full.className='ggskin ggskin_svg ';
		this._full.ggType='svg';
		hs ='';
		hs+='height : 45px;';
		hs+='left : 119px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 45px;';
		hs+='pointer-events:auto;';
		this._full.setAttribute('style',hs);
		this._full.style[domTransform + 'Origin']='50% 50%';
		me._full.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._full.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._full.onclick=function (e) {
			me.player.enterFullscreen();
			me._full.style[domTransition]='none';
			me._full.style.opacity='0';
			me._full.style.visibility='hidden';
			me._esc.style[domTransition]='none';
			me._esc.style.opacity='1';
			me._esc.style.visibility=me._esc.ggVisible?'inherit':'hidden';
		}
		me._full.ggCurrentLogicStatePosition = -1;
		this._full.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 800)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._full.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._full.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._full.style[domTransition]='left none, top none';
				if (me._full.ggCurrentLogicStatePosition == 0) {
					me._full.style.left='114px';
					me._full.style.top='-2px';
				}
				else {
					me._full.style.left='119px';
					me._full.style.top='-2px';
				}
			}
		}
		this._full.ggUpdatePosition=function (useTransition) {
			me._full.ggUpdateConditionResize();
		}
		this._info.appendChild(this._full);
		this.divSkin.appendChild(this._info);
		this._topr=document.createElement('div');
		this._topr.ggId="topr";
		this._topr.ggLeft=-690;
		this._topr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._topr.ggVisible=true;
		this._topr.className='ggskin ggskin_container ';
		this._topr.ggType='container';
		hs ='';
		hs+='height : 563px;';
		hs+='left : -690px;';
		hs+='position : absolute;';
		hs+='top : -1px;';
		hs+='visibility : inherit;';
		hs+='width : 708px;';
		hs+='pointer-events:none;';
		this._topr.setAttribute('style',hs);
		this._topr.style[domTransform + 'Origin']='50% 50%';
		me._topr.ggIsActive=function() {
			return false;
		}
		me._topr.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._topr.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._mapsml=document.createElement('div');
		this._mapsml__img=document.createElement('img');
		this._mapsml__img.className='ggskin ggskin_svg';
		this._mapsml__img.setAttribute('src',basePath + 'images/mapsml.svg');
		this._mapsml__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mapsml__img['ondragstart']=function() { return false; };
		this._mapsml.appendChild(this._mapsml__img);
		this._mapsml.ggId="mapsml";
		this._mapsml.ggLeft=-493;
		this._mapsml.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapsml.ggVisible=true;
		this._mapsml.className='ggskin ggskin_svg ';
		this._mapsml.ggType='svg';
		hs ='';
		hs+='height : 336px;';
		hs+='left : -493px;';
		hs+='position : absolute;';
		hs+='top : 64px;';
		hs+='visibility : inherit;';
		hs+='width : 426px;';
		hs+='pointer-events:auto;';
		this._mapsml.setAttribute('style',hs);
		this._mapsml.style[domTransform + 'Origin']='100% 0%';
		me._mapsml.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mapsml.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._mapsml.ggCurrentLogicStatePosition = -1;
		me._mapsml.ggCurrentLogicStateSize = -1;
		this._mapsml.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._mapsml.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._mapsml.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._mapsml.style[domTransition]='left none, top none, width none, height none';
				if (me._mapsml.ggCurrentLogicStatePosition == 0) {
					me._mapsml.ggLeft=-307;
					me._mapsml.style.top='51px';
					me._mapsml.ggUpdatePosition(true);
				}
				else {
					me._mapsml.ggLeft=-493;
					me._mapsml.style.top='64px';
					me._mapsml.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._mapsml.ggCurrentLogicStateSize != newLogicStateSize) {
				me._mapsml.ggCurrentLogicStateSize = newLogicStateSize;
				me._mapsml.style[domTransition]='left none, top none, width none, height none';
				if (me._mapsml.ggCurrentLogicStateSize == 0) {
					me._mapsml.style.width='288px';
					me._mapsml.style.height='220px';
					me.updateSize(me._mapsml);
				}
				else {
					me._mapsml.style.width='426px';
					me._mapsml.style.height='336px';
					me.updateSize(me._mapsml);
				}
			}
		}
		this._mapsml.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			me._mapsml.ggUpdateConditionResize();
		}
		this._p3bsml=document.createElement('div');
		this._p3bsml__img=document.createElement('img');
		this._p3bsml__img.className='ggskin ggskin_svg';
		this._p3bsml__img.setAttribute('src',basePath + 'images/p3bsml.svg');
		this._p3bsml__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p3bsml__img['ondragstart']=function() { return false; };
		this._p3bsml.appendChild(this._p3bsml__img);
		this._p3bsml.ggId="p3bsml";
		this._p3bsml.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p3bsml.ggVisible=true;
		this._p3bsml.className='ggskin ggskin_svg ';
		this._p3bsml.ggType='svg';
		hs ='';
		hs+='height : 29px;';
		hs+='left : 265px;';
		hs+='position : absolute;';
		hs+='top : 222px;';
		hs+='visibility : inherit;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		this._p3bsml.setAttribute('style',hs);
		this._p3bsml.style[domTransform + 'Origin']='50% 50%';
		me._p3bsml.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p3bsml.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._p3bsml.onclick=function (e) {
			me.player.openNext("{node3}","$cur");
			me._p1bsml.style[domTransition]='none';
			me._p1bsml.style.opacity='1';
			me._p1bsml.style.visibility=me._p1bsml.ggVisible?'inherit':'hidden';
			me._p2bsml.style[domTransition]='none';
			me._p2bsml.style.opacity='1';
			me._p2bsml.style.visibility=me._p2bsml.ggVisible?'inherit':'hidden';
			me._p3bsml.style[domTransition]='none';
			me._p3bsml.style.opacity='0';
			me._p3bsml.style.visibility='hidden';
			me._p1asml.style[domTransition]='none';
			me._p1asml.style.opacity='0';
			me._p1asml.style.visibility='hidden';
			me._p2asml.style[domTransition]='none';
			me._p2asml.style.opacity='0';
			me._p2asml.style.visibility='hidden';
			me._p3asml.style[domTransition]='none';
			me._p3asml.style.opacity='1';
			me._p3asml.style.visibility=me._p3asml.ggVisible?'inherit':'hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='0';
			me._p2.style.visibility='hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='1';
			me._p3.style.visibility=me._p3.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp3.style[domTransition]='none';
			} else {
				me._upsmlp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp3.style.opacity='1';
			me._upsmlp3.style.visibility=me._upsmlp3.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp3.style[domTransition]='none';
			} else {
				me._losmlp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp3.style.opacity='1';
			me._losmlp3.style.visibility=me._losmlp3.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp3.style[domTransition]='none';
			} else {
				me._upbigp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp3.style.opacity='0';
			me._upbigp3.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp3.style[domTransition]='none';
			} else {
				me._lobigp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp3.style.opacity='0';
			me._lobigp3.style.visibility='hidden';
		}
		me._p3bsml.ggCurrentLogicStatePosition = -1;
		this._p3bsml.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p3bsml.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p3bsml.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p3bsml.style[domTransition]='left none, top none';
				if (me._p3bsml.ggCurrentLogicStatePosition == 0) {
					me._p3bsml.style.left='175px';
					me._p3bsml.style.top='141px';
				}
				else {
					me._p3bsml.style.left='265px';
					me._p3bsml.style.top='222px';
				}
			}
		}
		this._p3bsml.ggUpdatePosition=function (useTransition) {
			me._p3bsml.ggUpdateConditionResize();
		}
		this._mapsml.appendChild(this._p3bsml);
		this._p2bsml=document.createElement('div');
		this._p2bsml__img=document.createElement('img');
		this._p2bsml__img.className='ggskin ggskin_svg';
		this._p2bsml__img.setAttribute('src',basePath + 'images/p2bsml.svg');
		this._p2bsml__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p2bsml__img['ondragstart']=function() { return false; };
		this._p2bsml.appendChild(this._p2bsml__img);
		this._p2bsml.ggId="p2bsml";
		this._p2bsml.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p2bsml.ggVisible=true;
		this._p2bsml.className='ggskin ggskin_svg ';
		this._p2bsml.ggType='svg';
		hs ='';
		hs+='height : 29px;';
		hs+='left : 144px;';
		hs+='position : absolute;';
		hs+='top : 96px;';
		hs+='visibility : inherit;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		this._p2bsml.setAttribute('style',hs);
		this._p2bsml.style[domTransform + 'Origin']='50% 50%';
		me._p2bsml.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p2bsml.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._p2bsml.onclick=function (e) {
			me.player.openNext("{node2}","$cur");
			me._p1bsml.style[domTransition]='none';
			me._p1bsml.style.opacity='1';
			me._p1bsml.style.visibility=me._p1bsml.ggVisible?'inherit':'hidden';
			me._p2bsml.style[domTransition]='none';
			me._p2bsml.style.opacity='0';
			me._p2bsml.style.visibility='hidden';
			me._p3bsml.style[domTransition]='none';
			me._p3bsml.style.opacity='1';
			me._p3bsml.style.visibility=me._p3bsml.ggVisible?'inherit':'hidden';
			me._p1asml.style[domTransition]='none';
			me._p1asml.style.opacity='0';
			me._p1asml.style.visibility='hidden';
			me._p2asml.style[domTransition]='none';
			me._p2asml.style.opacity='1';
			me._p2asml.style.visibility=me._p2asml.ggVisible?'inherit':'hidden';
			me._p3asml.style[domTransition]='none';
			me._p3asml.style.opacity='0';
			me._p3asml.style.visibility='hidden';
			me._p1.style[domTransition]='none';
			me._p1.style.opacity='0';
			me._p1.style.visibility='hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='1';
			me._p2.style.visibility=me._p2.ggVisible?'inherit':'hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp2.style[domTransition]='none';
			} else {
				me._upsmlp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp2.style.opacity='1';
			me._upsmlp2.style.visibility=me._upsmlp2.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp2.style[domTransition]='none';
			} else {
				me._losmlp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp2.style.opacity='1';
			me._losmlp2.style.visibility=me._losmlp2.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp2.style[domTransition]='none';
			} else {
				me._upbigp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp2.style.opacity='0';
			me._upbigp2.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp2.style[domTransition]='none';
			} else {
				me._lobigp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp2.style.opacity='0';
			me._lobigp2.style.visibility='hidden';
		}
		me._p2bsml.ggCurrentLogicStatePosition = -1;
		this._p2bsml.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p2bsml.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p2bsml.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p2bsml.style[domTransition]='left none, top none';
				if (me._p2bsml.ggCurrentLogicStatePosition == 0) {
					me._p2bsml.style.left='92px';
					me._p2bsml.style.top='58px';
				}
				else {
					me._p2bsml.style.left='144px';
					me._p2bsml.style.top='96px';
				}
			}
		}
		this._p2bsml.ggUpdatePosition=function (useTransition) {
			me._p2bsml.ggUpdateConditionResize();
		}
		this._mapsml.appendChild(this._p2bsml);
		this._p1bsml=document.createElement('div');
		this._p1bsml__img=document.createElement('img');
		this._p1bsml__img.className='ggskin ggskin_svg';
		this._p1bsml__img.setAttribute('src',basePath + 'images/p1bsml.svg');
		this._p1bsml__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p1bsml__img['ondragstart']=function() { return false; };
		this._p1bsml.appendChild(this._p1bsml__img);
		this._p1bsml.ggId="p1bsml";
		this._p1bsml.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p1bsml.ggVisible=true;
		this._p1bsml.className='ggskin ggskin_svg ';
		this._p1bsml.ggType='svg';
		hs ='';
		hs+='height : 29px;';
		hs+='left : 70px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 96px;';
		hs+='visibility : hidden;';
		hs+='width : 29px;';
		hs+='pointer-events:auto;';
		this._p1bsml.setAttribute('style',hs);
		this._p1bsml.style[domTransform + 'Origin']='50% 50%';
		me._p1bsml.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p1bsml.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._p1bsml.onclick=function (e) {
			me.player.openNext("{node1}","$cur");
			me._p1bsml.style[domTransition]='none';
			me._p1bsml.style.opacity='0';
			me._p1bsml.style.visibility='hidden';
			me._p2bsml.style[domTransition]='none';
			me._p2bsml.style.opacity='1';
			me._p2bsml.style.visibility=me._p2bsml.ggVisible?'inherit':'hidden';
			me._p3bsml.style[domTransition]='none';
			me._p3bsml.style.opacity='1';
			me._p3bsml.style.visibility=me._p3bsml.ggVisible?'inherit':'hidden';
			me._p1asml.style[domTransition]='none';
			me._p1asml.style.opacity='1';
			me._p1asml.style.visibility=me._p1asml.ggVisible?'inherit':'hidden';
			me._p2asml.style[domTransition]='none';
			me._p2asml.style.opacity='0';
			me._p2asml.style.visibility='hidden';
			me._p3asml.style[domTransition]='none';
			me._p3asml.style.opacity='0';
			me._p3asml.style.visibility='hidden';
			me._p1.style[domTransition]='none';
			me._p1.style.opacity='1';
			me._p1.style.visibility=me._p1.ggVisible?'inherit':'hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='0';
			me._p2.style.visibility='hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp1.style[domTransition]='none';
			} else {
				me._upsmlp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp1.style.opacity='1';
			me._upsmlp1.style.visibility=me._upsmlp1.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp1.style[domTransition]='none';
			} else {
				me._losmlp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp1.style.opacity='1';
			me._losmlp1.style.visibility=me._losmlp1.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp1.style[domTransition]='none';
			} else {
				me._upbigp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp1.style.opacity='0';
			me._upbigp1.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp1.style[domTransition]='none';
			} else {
				me._lobigp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp1.style.opacity='0';
			me._lobigp1.style.visibility='hidden';
		}
		me._p1bsml.ggCurrentLogicStatePosition = -1;
		this._p1bsml.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p1bsml.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p1bsml.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p1bsml.style[domTransition]='left none, top none';
				if (me._p1bsml.ggCurrentLogicStatePosition == 0) {
					me._p1bsml.style.left='42px';
					me._p1bsml.style.top='58px';
				}
				else {
					me._p1bsml.style.left='70px';
					me._p1bsml.style.top='96px';
				}
			}
		}
		this._p1bsml.ggUpdatePosition=function (useTransition) {
			me._p1bsml.ggUpdateConditionResize();
		}
		this._mapsml.appendChild(this._p1bsml);
		this._p3asml=document.createElement('div');
		this._p3asml__img=document.createElement('img');
		this._p3asml__img.className='ggskin ggskin_svg';
		this._p3asml__img.setAttribute('src',basePath + 'images/p3asml.svg');
		this._p3asml__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p3asml__img['ondragstart']=function() { return false; };
		this._p3asml.appendChild(this._p3asml__img);
		this._p3asml.ggId="p3asml";
		this._p3asml.ggLeft=-186;
		this._p3asml.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p3asml.ggVisible=true;
		this._p3asml.className='ggskin ggskin_svg ';
		this._p3asml.ggType='svg';
		hs ='';
		hs+='height : 83px;';
		hs+='left : -186px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 195px;';
		hs+='visibility : hidden;';
		hs+='width : 79px;';
		hs+='pointer-events:none;';
		this._p3asml.setAttribute('style',hs);
		this._p3asml.style[domTransform + 'Origin']='50% 50%';
		me._p3asml.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p3asml.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._p3asml.ggCurrentLogicStatePosition = -1;
		this._p3asml.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p3asml.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p3asml.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p3asml.style[domTransition]='left none, top none';
				if (me._p3asml.ggCurrentLogicStatePosition == 0) {
					me._p3asml.ggLeft=-137;
					me._p3asml.style.top='114px';
					me._p3asml.ggUpdatePosition(true);
				}
				else {
					me._p3asml.ggLeft=-186;
					me._p3asml.style.top='195px';
					me._p3asml.ggUpdatePosition(true);
				}
			}
		}
		this._p3asml.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			me._p3asml.ggUpdateConditionResize();
		}
		this._mapsml.appendChild(this._p3asml);
		this._p2asml=document.createElement('div');
		this._p2asml__img=document.createElement('img');
		this._p2asml__img.className='ggskin ggskin_svg';
		this._p2asml__img.setAttribute('src',basePath + 'images/p2asml.svg');
		this._p2asml__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p2asml__img['ondragstart']=function() { return false; };
		this._p2asml.appendChild(this._p2asml__img);
		this._p2asml.ggId="p2asml";
		this._p2asml.ggLeft=-306;
		this._p2asml.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p2asml.ggVisible=true;
		this._p2asml.className='ggskin ggskin_svg ';
		this._p2asml.ggType='svg';
		hs ='';
		hs+='height : 83px;';
		hs+='left : -306px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 69px;';
		hs+='visibility : hidden;';
		hs+='width : 79px;';
		hs+='pointer-events:none;';
		this._p2asml.setAttribute('style',hs);
		this._p2asml.style[domTransform + 'Origin']='50% 50%';
		me._p2asml.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p2asml.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._p2asml.ggCurrentLogicStatePosition = -1;
		this._p2asml.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p2asml.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p2asml.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p2asml.style[domTransition]='left none, top none';
				if (me._p2asml.ggCurrentLogicStatePosition == 0) {
					me._p2asml.ggLeft=-220;
					me._p2asml.style.top='31px';
					me._p2asml.ggUpdatePosition(true);
				}
				else {
					me._p2asml.ggLeft=-306;
					me._p2asml.style.top='69px';
					me._p2asml.ggUpdatePosition(true);
				}
			}
		}
		this._p2asml.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			me._p2asml.ggUpdateConditionResize();
		}
		this._mapsml.appendChild(this._p2asml);
		this._p1asml=document.createElement('div');
		this._p1asml__img=document.createElement('img');
		this._p1asml__img.className='ggskin ggskin_svg';
		this._p1asml__img.setAttribute('src',basePath + 'images/p1asml.svg');
		this._p1asml__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p1asml__img['ondragstart']=function() { return false; };
		this._p1asml.appendChild(this._p1asml__img);
		this._p1asml.ggId="p1asml";
		this._p1asml.ggLeft=-380;
		this._p1asml.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p1asml.ggVisible=true;
		this._p1asml.className='ggskin ggskin_svg ';
		this._p1asml.ggType='svg';
		hs ='';
		hs+='height : 83px;';
		hs+='left : -380px;';
		hs+='position : absolute;';
		hs+='top : 69px;';
		hs+='visibility : inherit;';
		hs+='width : 79px;';
		hs+='pointer-events:none;';
		this._p1asml.setAttribute('style',hs);
		this._p1asml.style[domTransform + 'Origin']='50% 50%';
		me._p1asml.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p1asml.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._p1asml.ggCurrentLogicStatePosition = -1;
		this._p1asml.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p1asml.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p1asml.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p1asml.style[domTransition]='left none, top none';
				if (me._p1asml.ggCurrentLogicStatePosition == 0) {
					me._p1asml.ggLeft=-270;
					me._p1asml.style.top='31px';
					me._p1asml.ggUpdatePosition(true);
				}
				else {
					me._p1asml.ggLeft=-380;
					me._p1asml.style.top='69px';
					me._p1asml.ggUpdatePosition(true);
				}
			}
		}
		this._p1asml.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			me._p1asml.ggUpdateConditionResize();
		}
		this._mapsml.appendChild(this._p1asml);
		this._topr.appendChild(this._mapsml);
		this._mapbig=document.createElement('div');
		this._mapbig__img=document.createElement('img');
		this._mapbig__img.className='ggskin ggskin_svg';
		this._mapbig__img.setAttribute('src',basePath + 'images/mapbig.svg');
		this._mapbig__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._mapbig__img['ondragstart']=function() { return false; };
		this._mapbig.appendChild(this._mapbig__img);
		this._mapbig.ggId="mapbig";
		this._mapbig.ggLeft=-685;
		this._mapbig.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._mapbig.ggVisible=true;
		this._mapbig.className='ggskin ggskin_svg ';
		this._mapbig.ggType='svg';
		hs ='';
		hs+='height : 519px;';
		hs+='left : -685px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 22px;';
		hs+='visibility : hidden;';
		hs+='width : 673px;';
		hs+='pointer-events:auto;';
		this._mapbig.setAttribute('style',hs);
		this._mapbig.style[domTransform + 'Origin']='50% 50%';
		me._mapbig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._mapbig.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._mapbig.ggCurrentLogicStatePosition = -1;
		me._mapbig.ggCurrentLogicStateSize = -1;
		me._mapbig.ggCurrentLogicStateAlpha = -1;
		this._mapbig.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._mapbig.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._mapbig.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._mapbig.style[domTransition]='left none, top none, width none, height none, opacity none, visibility none';
				if (me._mapbig.ggCurrentLogicStatePosition == 0) {
					me._mapbig.ggLeft=-604;
					me._mapbig.style.top='25px';
					me._mapbig.ggUpdatePosition(true);
				}
				else {
					me._mapbig.ggLeft=-685;
					me._mapbig.style.top='22px';
					me._mapbig.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._mapbig.ggCurrentLogicStateSize != newLogicStateSize) {
				me._mapbig.ggCurrentLogicStateSize = newLogicStateSize;
				me._mapbig.style[domTransition]='left none, top none, width none, height none, opacity none, visibility none';
				if (me._mapbig.ggCurrentLogicStateSize == 0) {
					me._mapbig.style.width='550px';
					me._mapbig.style.height='420px';
					me.updateSize(me._mapbig);
				}
				else {
					me._mapbig.style.width='673px';
					me._mapbig.style.height='519px';
					me.updateSize(me._mapbig);
				}
			}
			var newLogicStateAlpha;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._mapbig.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._mapbig.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._mapbig.style[domTransition]='left none, top none, width none, height none, opacity none, visibility none';
				if (me._mapbig.ggCurrentLogicStateAlpha == 0) {
					me._mapbig.style.visibility="hidden";
					me._mapbig.style.opacity=0;
				}
				else {
					me._mapbig.style.visibility="hidden";
					me._mapbig.style.opacity=0;
				}
			}
		}
		this._mapbig.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			me._mapbig.ggUpdateConditionResize();
		}
		this._p3bbig=document.createElement('div');
		this._p3bbig__img=document.createElement('img');
		this._p3bbig__img.className='ggskin ggskin_svg';
		this._p3bbig__img.setAttribute('src',basePath + 'images/p3bbig.svg');
		this._p3bbig__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p3bbig__img['ondragstart']=function() { return false; };
		this._p3bbig.appendChild(this._p3bbig__img);
		this._p3bbig.ggId="P3Bbig";
		this._p3bbig.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p3bbig.ggVisible=true;
		this._p3bbig.className='ggskin ggskin_svg ';
		this._p3bbig.ggType='svg';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 401px;';
		hs+='position : absolute;';
		hs+='top : 327px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		this._p3bbig.setAttribute('style',hs);
		this._p3bbig.style[domTransform + 'Origin']='50% 50%';
		me._p3bbig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p3bbig.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._p3bbig.onclick=function (e) {
			me.player.openNext("{node3}","$cur");
			me._p1bbig.style[domTransition]='none';
			me._p1bbig.style.opacity='1';
			me._p1bbig.style.visibility=me._p1bbig.ggVisible?'inherit':'hidden';
			me._p2bbig.style[domTransition]='none';
			me._p2bbig.style.opacity='1';
			me._p2bbig.style.visibility=me._p2bbig.ggVisible?'inherit':'hidden';
			me._p3bbig.style[domTransition]='none';
			me._p3bbig.style.opacity='0';
			me._p3bbig.style.visibility='hidden';
			me._p1abig.style[domTransition]='none';
			me._p1abig.style.opacity='0';
			me._p1abig.style.visibility='hidden';
			me._p2abig.style[domTransition]='none';
			me._p2abig.style.opacity='0';
			me._p2abig.style.visibility='hidden';
			me._p3abig.style[domTransition]='none';
			me._p3abig.style.opacity='1';
			me._p3abig.style.visibility=me._p3abig.ggVisible?'inherit':'hidden';
			me._p1.style[domTransition]='none';
			me._p1.style.opacity='0';
			me._p1.style.visibility='hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='0';
			me._p2.style.visibility='hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='1';
			me._p3.style.visibility=me._p3.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp3.style[domTransition]='none';
			} else {
				me._upsmlp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp3.style.opacity='0';
			me._upsmlp3.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp3.style[domTransition]='none';
			} else {
				me._losmlp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp3.style.opacity='0';
			me._losmlp3.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp3.style[domTransition]='none';
			} else {
				me._upbigp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp3.style.opacity='1';
			me._upbigp3.style.visibility=me._upbigp3.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp3.style[domTransition]='none';
			} else {
				me._lobigp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp3.style.opacity='1';
			me._lobigp3.style.visibility=me._lobigp3.ggVisible?'inherit':'hidden';
		}
		me._p3bbig.ggCurrentLogicStatePosition = -1;
		me._p3bbig.ggCurrentLogicStateSize = -1;
		this._p3bbig.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p3bbig.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p3bbig.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p3bbig.style[domTransition]='left none, top none, width none, height none';
				if (me._p3bbig.ggCurrentLogicStatePosition == 0) {
					me._p3bbig.style.left='327px';
					me._p3bbig.style.top='265px';
				}
				else {
					me._p3bbig.style.left='401px';
					me._p3bbig.style.top='327px';
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._p3bbig.ggCurrentLogicStateSize != newLogicStateSize) {
				me._p3bbig.ggCurrentLogicStateSize = newLogicStateSize;
				me._p3bbig.style[domTransition]='left none, top none, width none, height none';
				if (me._p3bbig.ggCurrentLogicStateSize == 0) {
					me._p3bbig.style.width='68px';
					me._p3bbig.style.height='68px';
					me.updateSize(me._p3bbig);
				}
				else {
					me._p3bbig.style.width='80px';
					me._p3bbig.style.height='80px';
					me.updateSize(me._p3bbig);
				}
			}
		}
		this._p3bbig.ggUpdatePosition=function (useTransition) {
			me._p3bbig.ggUpdateConditionResize();
		}
		this._mapbig.appendChild(this._p3bbig);
		this._p2bbig=document.createElement('div');
		this._p2bbig__img=document.createElement('img');
		this._p2bbig__img.className='ggskin ggskin_svg';
		this._p2bbig__img.setAttribute('src',basePath + 'images/p2bbig.svg');
		this._p2bbig__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p2bbig__img['ondragstart']=function() { return false; };
		this._p2bbig.appendChild(this._p2bbig__img);
		this._p2bbig.ggId="P2Bbig";
		this._p2bbig.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p2bbig.ggVisible=true;
		this._p2bbig.className='ggskin ggskin_svg ';
		this._p2bbig.ggType='svg';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 207px;';
		hs+='position : absolute;';
		hs+='top : 132px;';
		hs+='visibility : inherit;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		this._p2bbig.setAttribute('style',hs);
		this._p2bbig.style[domTransform + 'Origin']='50% 50%';
		me._p2bbig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p2bbig.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._p2bbig.onclick=function (e) {
			me.player.openNext("{node2}","$cur");
			me._p1bbig.style[domTransition]='none';
			me._p1bbig.style.opacity='1';
			me._p1bbig.style.visibility=me._p1bbig.ggVisible?'inherit':'hidden';
			me._p2bbig.style[domTransition]='none';
			me._p2bbig.style.opacity='0';
			me._p2bbig.style.visibility='hidden';
			me._p3bbig.style[domTransition]='none';
			me._p3bbig.style.opacity='1';
			me._p3bbig.style.visibility=me._p3bbig.ggVisible?'inherit':'hidden';
			me._p1abig.style[domTransition]='none';
			me._p1abig.style.opacity='0';
			me._p1abig.style.visibility='hidden';
			me._p2abig.style[domTransition]='none';
			me._p2abig.style.opacity='1';
			me._p2abig.style.visibility=me._p2abig.ggVisible?'inherit':'hidden';
			me._p3abig.style[domTransition]='none';
			me._p3abig.style.opacity='0';
			me._p3abig.style.visibility='hidden';
			me._p1.style[domTransition]='none';
			me._p1.style.opacity='0';
			me._p1.style.visibility='hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='1';
			me._p2.style.visibility=me._p2.ggVisible?'inherit':'hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp2.style[domTransition]='none';
			} else {
				me._upsmlp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp2.style.opacity='0';
			me._upsmlp2.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp2.style[domTransition]='none';
			} else {
				me._losmlp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp2.style.opacity='0';
			me._losmlp2.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp2.style[domTransition]='none';
			} else {
				me._upbigp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp2.style.opacity='1';
			me._upbigp2.style.visibility=me._upbigp2.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp2.style[domTransition]='none';
			} else {
				me._lobigp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp2.style.opacity='1';
			me._lobigp2.style.visibility=me._lobigp2.ggVisible?'inherit':'hidden';
		}
		me._p2bbig.ggCurrentLogicStatePosition = -1;
		me._p2bbig.ggCurrentLogicStateSize = -1;
		this._p2bbig.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p2bbig.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p2bbig.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p2bbig.style[domTransition]='left none, top none, width none, height none';
				if (me._p2bbig.ggCurrentLogicStatePosition == 0) {
					me._p2bbig.style.left='173px';
					me._p2bbig.style.top='103px';
				}
				else {
					me._p2bbig.style.left='207px';
					me._p2bbig.style.top='132px';
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._p2bbig.ggCurrentLogicStateSize != newLogicStateSize) {
				me._p2bbig.ggCurrentLogicStateSize = newLogicStateSize;
				me._p2bbig.style[domTransition]='left none, top none, width none, height none';
				if (me._p2bbig.ggCurrentLogicStateSize == 0) {
					me._p2bbig.style.width='68px';
					me._p2bbig.style.height='68px';
					me.updateSize(me._p2bbig);
				}
				else {
					me._p2bbig.style.width='80px';
					me._p2bbig.style.height='80px';
					me.updateSize(me._p2bbig);
				}
			}
		}
		this._p2bbig.ggUpdatePosition=function (useTransition) {
			me._p2bbig.ggUpdateConditionResize();
		}
		this._mapbig.appendChild(this._p2bbig);
		this._p1bbig=document.createElement('div');
		this._p1bbig__img=document.createElement('img');
		this._p1bbig__img.className='ggskin ggskin_svg';
		this._p1bbig__img.setAttribute('src',basePath + 'images/p1bbig.svg');
		this._p1bbig__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p1bbig__img['ondragstart']=function() { return false; };
		this._p1bbig.appendChild(this._p1bbig__img);
		this._p1bbig.ggId="P1Bbig";
		this._p1bbig.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p1bbig.ggVisible=true;
		this._p1bbig.className='ggskin ggskin_svg ';
		this._p1bbig.ggType='svg';
		hs ='';
		hs+='height : 80px;';
		hs+='left : 94px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 132px;';
		hs+='visibility : hidden;';
		hs+='width : 80px;';
		hs+='pointer-events:auto;';
		this._p1bbig.setAttribute('style',hs);
		this._p1bbig.style[domTransform + 'Origin']='50% 50%';
		me._p1bbig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p1bbig.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._p1bbig.onclick=function (e) {
			me.player.openNext("{node1}","$cur");
			me._p1bbig.style[domTransition]='none';
			me._p1bbig.style.opacity='0';
			me._p1bbig.style.visibility='hidden';
			me._p2bbig.style[domTransition]='none';
			me._p2bbig.style.opacity='1';
			me._p2bbig.style.visibility=me._p2bbig.ggVisible?'inherit':'hidden';
			me._p3bbig.style[domTransition]='none';
			me._p3bbig.style.opacity='1';
			me._p3bbig.style.visibility=me._p3bbig.ggVisible?'inherit':'hidden';
			me._p1abig.style[domTransition]='none';
			me._p1abig.style.opacity='1';
			me._p1abig.style.visibility=me._p1abig.ggVisible?'inherit':'hidden';
			me._p2abig.style[domTransition]='none';
			me._p2abig.style.opacity='0';
			me._p2abig.style.visibility='hidden';
			me._p3abig.style[domTransition]='none';
			me._p3abig.style.opacity='0';
			me._p3abig.style.visibility='hidden';
			me._p1.style[domTransition]='none';
			me._p1.style.opacity='1';
			me._p1.style.visibility=me._p1.ggVisible?'inherit':'hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='0';
			me._p2.style.visibility='hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp1.style[domTransition]='none';
			} else {
				me._upsmlp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp1.style.opacity='0';
			me._upsmlp1.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp1.style[domTransition]='none';
			} else {
				me._losmlp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp1.style.opacity='0';
			me._losmlp1.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp1.style[domTransition]='none';
			} else {
				me._upbigp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp1.style.opacity='1';
			me._upbigp1.style.visibility=me._upbigp1.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp1.style[domTransition]='none';
			} else {
				me._lobigp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp1.style.opacity='1';
			me._lobigp1.style.visibility=me._lobigp1.ggVisible?'inherit':'hidden';
		}
		me._p1bbig.ggCurrentLogicStatePosition = -1;
		me._p1bbig.ggCurrentLogicStateSize = -1;
		this._p1bbig.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p1bbig.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p1bbig.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p1bbig.style[domTransition]='left none, top none, width none, height none';
				if (me._p1bbig.ggCurrentLogicStatePosition == 0) {
					me._p1bbig.style.left='74px';
					me._p1bbig.style.top='105px';
				}
				else {
					me._p1bbig.style.left='94px';
					me._p1bbig.style.top='132px';
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._p1bbig.ggCurrentLogicStateSize != newLogicStateSize) {
				me._p1bbig.ggCurrentLogicStateSize = newLogicStateSize;
				me._p1bbig.style[domTransition]='left none, top none, width none, height none';
				if (me._p1bbig.ggCurrentLogicStateSize == 0) {
					me._p1bbig.style.width='68px';
					me._p1bbig.style.height='68px';
					me.updateSize(me._p1bbig);
				}
				else {
					me._p1bbig.style.width='80px';
					me._p1bbig.style.height='80px';
					me.updateSize(me._p1bbig);
				}
			}
		}
		this._p1bbig.ggUpdatePosition=function (useTransition) {
			me._p1bbig.ggUpdateConditionResize();
		}
		this._mapbig.appendChild(this._p1bbig);
		this._p3abig=document.createElement('div');
		this._p3abig__img=document.createElement('img');
		this._p3abig__img.className='ggskin ggskin_svg';
		this._p3abig__img.setAttribute('src',basePath + 'images/p3abig.svg');
		this._p3abig__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p3abig__img['ondragstart']=function() { return false; };
		this._p3abig.appendChild(this._p3abig__img);
		this._p3abig.ggId="P3Abig";
		this._p3abig.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p3abig.ggVisible=true;
		this._p3abig.className='ggskin ggskin_svg ';
		this._p3abig.ggType='svg';
		hs ='';
		hs+='height : 235px;';
		hs+='left : 309px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 249px;';
		hs+='visibility : hidden;';
		hs+='width : 270px;';
		hs+='pointer-events:none;';
		this._p3abig.setAttribute('style',hs);
		this._p3abig.style[domTransform + 'Origin']='50% 50%';
		me._p3abig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p3abig.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._p3abig.ggCurrentLogicStatePosition = -1;
		me._p3abig.ggCurrentLogicStateSize = -1;
		this._p3abig.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p3abig.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p3abig.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p3abig.style[domTransition]='left none, top none, width none, height none';
				if (me._p3abig.ggCurrentLogicStatePosition == 0) {
					me._p3abig.style.left='249px';
					me._p3abig.style.top='200px';
				}
				else {
					me._p3abig.style.left='309px';
					me._p3abig.style.top='249px';
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._p3abig.ggCurrentLogicStateSize != newLogicStateSize) {
				me._p3abig.ggCurrentLogicStateSize = newLogicStateSize;
				me._p3abig.style[domTransition]='left none, top none, width none, height none';
				if (me._p3abig.ggCurrentLogicStateSize == 0) {
					me._p3abig.style.width='229px';
					me._p3abig.style.height='199px';
					me.updateSize(me._p3abig);
				}
				else {
					me._p3abig.style.width='270px';
					me._p3abig.style.height='235px';
					me.updateSize(me._p3abig);
				}
			}
		}
		this._p3abig.ggUpdatePosition=function (useTransition) {
			me._p3abig.ggUpdateConditionResize();
		}
		this._mapbig.appendChild(this._p3abig);
		this._p2abig=document.createElement('div');
		this._p2abig__img=document.createElement('img');
		this._p2abig__img.className='ggskin ggskin_svg';
		this._p2abig__img.setAttribute('src',basePath + 'images/p2abig.svg');
		this._p2abig__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p2abig__img['ondragstart']=function() { return false; };
		this._p2abig.appendChild(this._p2abig__img);
		this._p2abig.ggId="P2Abig";
		this._p2abig.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p2abig.ggVisible=true;
		this._p2abig.className='ggskin ggskin_svg ';
		this._p2abig.ggType='svg';
		hs ='';
		hs+='height : 235px;';
		hs+='left : 115px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : hidden;';
		hs+='width : 270px;';
		hs+='pointer-events:none;';
		this._p2abig.setAttribute('style',hs);
		this._p2abig.style[domTransform + 'Origin']='50% 50%';
		me._p2abig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p2abig.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._p2abig.ggCurrentLogicStatePosition = -1;
		me._p2abig.ggCurrentLogicStateSize = -1;
		this._p2abig.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p2abig.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p2abig.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p2abig.style[domTransition]='left none, top none, width none, height none';
				if (me._p2abig.ggCurrentLogicStatePosition == 0) {
					me._p2abig.style.left='94px';
					me._p2abig.style.top='37px';
				}
				else {
					me._p2abig.style.left='115px';
					me._p2abig.style.top='54px';
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._p2abig.ggCurrentLogicStateSize != newLogicStateSize) {
				me._p2abig.ggCurrentLogicStateSize = newLogicStateSize;
				me._p2abig.style[domTransition]='left none, top none, width none, height none';
				if (me._p2abig.ggCurrentLogicStateSize == 0) {
					me._p2abig.style.width='229px';
					me._p2abig.style.height='199px';
					me.updateSize(me._p2abig);
				}
				else {
					me._p2abig.style.width='270px';
					me._p2abig.style.height='235px';
					me.updateSize(me._p2abig);
				}
			}
		}
		this._p2abig.ggUpdatePosition=function (useTransition) {
			me._p2abig.ggUpdateConditionResize();
		}
		this._mapbig.appendChild(this._p2abig);
		this._p1abig=document.createElement('div');
		this._p1abig__img=document.createElement('img');
		this._p1abig__img.className='ggskin ggskin_svg';
		this._p1abig__img.setAttribute('src',basePath + 'images/p1abig.svg');
		this._p1abig__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._p1abig__img['ondragstart']=function() { return false; };
		this._p1abig.appendChild(this._p1abig__img);
		this._p1abig.ggId="P1Abig";
		this._p1abig.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p1abig.ggVisible=true;
		this._p1abig.className='ggskin ggskin_svg ';
		this._p1abig.ggType='svg';
		hs ='';
		hs+='height : 235px;';
		hs+='left : 1px;';
		hs+='position : absolute;';
		hs+='top : 54px;';
		hs+='visibility : inherit;';
		hs+='width : 270px;';
		hs+='pointer-events:none;';
		this._p1abig.setAttribute('style',hs);
		this._p1abig.style[domTransform + 'Origin']='50% 50%';
		me._p1abig.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p1abig.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._p1abig.ggCurrentLogicStatePosition = -1;
		me._p1abig.ggCurrentLogicStateSize = -1;
		this._p1abig.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._p1abig.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._p1abig.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._p1abig.style[domTransition]='left none, top none, width none, height none';
				if (me._p1abig.ggCurrentLogicStatePosition == 0) {
					me._p1abig.style.left='-5px';
					me._p1abig.style.top='39px';
				}
				else {
					me._p1abig.style.left='1px';
					me._p1abig.style.top='54px';
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._p1abig.ggCurrentLogicStateSize != newLogicStateSize) {
				me._p1abig.ggCurrentLogicStateSize = newLogicStateSize;
				me._p1abig.style[domTransition]='left none, top none, width none, height none';
				if (me._p1abig.ggCurrentLogicStateSize == 0) {
					me._p1abig.style.width='229px';
					me._p1abig.style.height='199px';
					me.updateSize(me._p1abig);
				}
				else {
					me._p1abig.style.width='270px';
					me._p1abig.style.height='235px';
					me.updateSize(me._p1abig);
				}
			}
		}
		this._p1abig.ggUpdatePosition=function (useTransition) {
			me._p1abig.ggUpdateConditionResize();
		}
		this._mapbig.appendChild(this._p1abig);
		this._topr.appendChild(this._mapbig);
		this._composs1=document.createElement('div');
		this._composs1__img=document.createElement('img');
		this._composs1__img.className='ggskin ggskin_svg';
		this._composs1__img.setAttribute('src',basePath + 'images/composs1.svg');
		this._composs1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._composs1__img['ondragstart']=function() { return false; };
		this._composs1.appendChild(this._composs1__img);
		this._composs1.ggId="composs1";
		this._composs1.ggLeft=-146;
		this._composs1.ggParameter={ rx:0,ry:0,a:0,sx:0.9,sy:0.9 };
		this._composs1.ggVisible=true;
		this._composs1.className='ggskin ggskin_svg ';
		this._composs1.ggType='svg';
		hs ='';
		hs+='height : 101px;';
		hs+='left : -146px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 99px;';
		hs+='pointer-events:auto;';
		this._composs1.setAttribute('style',hs);
		this._composs1.style[domTransform + 'Origin']='100% 0%';
		this._composs1.style[domTransform]=parameterToTransform(this._composs1.ggParameter);
		me._composs1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._composs1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._composs1.ggCurrentLogicStatePosition = -1;
		me._composs1.ggCurrentLogicStateSize = -1;
		this._composs1.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._composs1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._composs1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._composs1.style[domTransition]='left none, top none, width none, height none';
				if (me._composs1.ggCurrentLogicStatePosition == 0) {
					me._composs1.ggLeft=-107;
					me._composs1.style.top='27px';
					me._composs1.ggUpdatePosition(true);
				}
				else {
					me._composs1.ggLeft=-146;
					me._composs1.style.top='29px';
					me._composs1.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._composs1.ggCurrentLogicStateSize != newLogicStateSize) {
				me._composs1.ggCurrentLogicStateSize = newLogicStateSize;
				me._composs1.style[domTransition]='left none, top none, width none, height none';
				if (me._composs1.ggCurrentLogicStateSize == 0) {
					me._composs1.style.width='65px';
					me._composs1.style.height='65px';
					me.updateSize(me._composs1);
				}
				else {
					me._composs1.style.width='99px';
					me._composs1.style.height='101px';
					me.updateSize(me._composs1);
				}
			}
		}
		this._composs1.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			me._composs1.ggUpdateConditionResize();
		}
		this._composs2=document.createElement('div');
		this._composs2__img=document.createElement('img');
		this._composs2__img.className='ggskin ggskin_svg';
		this._composs2__img.setAttribute('src',basePath + 'images/composs2.svg');
		this._composs2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._composs2__img['ondragstart']=function() { return false; };
		this._composs2.appendChild(this._composs2__img);
		this._composs2.ggId="composs2";
		this._composs2.ggLeft=-21;
		this._composs2.ggTop=-39;
		this._composs2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._composs2.ggVisible=true;
		this._composs2.className='ggskin ggskin_svg ';
		this._composs2.ggType='svg';
		hs ='';
		hs+='height : 75px;';
		hs+='left : -21px;';
		hs+='position : absolute;';
		hs+='top : -39px;';
		hs+='visibility : inherit;';
		hs+='width : 48px;';
		hs+='pointer-events:auto;';
		this._composs2.setAttribute('style',hs);
		this._composs2.style[domTransform + 'Origin']='50% 50%';
		me._composs2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._composs2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._composs2.ggCurrentLogicStatePosition = -1;
		me._composs2.ggCurrentLogicStateSize = -1;
		this._composs2.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._composs2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._composs2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._composs2.style[domTransition]='left none, top none, width none, height none';
				if (me._composs2.ggCurrentLogicStatePosition == 0) {
					me._composs2.ggLeft=-17;
					me._composs2.ggTop=-36;
					me._composs2.ggUpdatePosition(true);
				}
				else {
					me._composs2.ggLeft=-21;
					me._composs2.ggTop=-39;
					me._composs2.ggUpdatePosition(true);
				}
			}
			var newLogicStateSize;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStateSize = 0;
			}
			else {
				newLogicStateSize = -1;
			}
			if (me._composs2.ggCurrentLogicStateSize != newLogicStateSize) {
				me._composs2.ggCurrentLogicStateSize = newLogicStateSize;
				me._composs2.style[domTransition]='left none, top none, width none, height none';
				if (me._composs2.ggCurrentLogicStateSize == 0) {
					me._composs2.style.width='35px';
					me._composs2.style.height='65px';
					me.updateSize(me._composs2);
				}
				else {
					me._composs2.style.width='48px';
					me._composs2.style.height='75px';
					me.updateSize(me._composs2);
				}
			}
		}
		this._composs2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h/2) + 'px';
			}
			me._composs2.ggUpdateConditionResize();
		}
		this._composs1.appendChild(this._composs2);
		this._topr.appendChild(this._composs1);
		this._p1=document.createElement('div');
		this._p1.ggId="p1";
		this._p1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p1.ggVisible=true;
		this._p1.className='ggskin ggskin_container ';
		this._p1.ggType='container';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 205px;';
		hs+='position : absolute;';
		hs+='top : 397px;';
		hs+='visibility : inherit;';
		hs+='width : 260px;';
		hs+='pointer-events:none;';
		this._p1.setAttribute('style',hs);
		this._p1.style[domTransform + 'Origin']='50% 50%';
		me._p1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._p1.ggCurrentLogicStateVisible = -1;
		this._p1.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p1.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p1.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p1.style[domTransition]='';
				if (me._p1.ggCurrentLogicStateVisible == 0) {
					me._p1.style.visibility="hidden";
					me._p1.ggVisible=false;
				}
				else {
					me._p1.style.visibility=(Number(me._p1.style.opacity)>0||!me._p1.style.opacity)?'inherit':'hidden';
					me._p1.ggVisible=true;
				}
			}
		}
		this._p1.ggUpdatePosition=function (useTransition) {
			me._p1.ggUpdateConditionResize();
		}
		this._losmlp1=document.createElement('div');
		this._losmlp1__img=document.createElement('img');
		this._losmlp1__img.className='ggskin ggskin_svg';
		this._losmlp1__img.setAttribute('src',basePath + 'images/losmlp1.svg');
		this._losmlp1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._losmlp1__img['ondragstart']=function() { return false; };
		this._losmlp1.appendChild(this._losmlp1__img);
		this._losmlp1.ggId="losmlp1";
		this._losmlp1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._losmlp1.ggVisible=true;
		this._losmlp1.className='ggskin ggskin_svg ';
		this._losmlp1.ggType='svg';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 182px;';
		hs+='position : absolute;';
		hs+='top : -99px;';
		hs+='visibility : inherit;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		this._losmlp1.setAttribute('style',hs);
		this._losmlp1.style[domTransform + 'Origin']='50% 50%';
		me._losmlp1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._losmlp1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._losmlp1.ggUpdatePosition=function (useTransition) {
		}
		this._p1.appendChild(this._losmlp1);
		this._upsmlp1=document.createElement('div');
		this._upsmlp1__img=document.createElement('img');
		this._upsmlp1__img.className='ggskin ggskin_svg';
		this._upsmlp1__img.setAttribute('src',basePath + 'images/upsmlp1.svg');
		this._upsmlp1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._upsmlp1__img['ondragstart']=function() { return false; };
		this._upsmlp1.appendChild(this._upsmlp1__img);
		this._upsmlp1.ggId="upsmlp1";
		this._upsmlp1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._upsmlp1.ggVisible=true;
		this._upsmlp1.className='ggskin ggskin_svg ';
		this._upsmlp1.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 126px;';
		hs+='position : absolute;';
		hs+='top : -99px;';
		hs+='visibility : inherit;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		this._upsmlp1.setAttribute('style',hs);
		this._upsmlp1.style[domTransform + 'Origin']='50% 50%';
		me._upsmlp1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._upsmlp1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._upsmlp1.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._mapsml.style[domTransition]='none';
			} else {
				me._mapsml.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapsml.style.opacity='0';
			me._mapsml.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._mapbig.style[domTransition]='none';
			} else {
				me._mapbig.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapbig.style.opacity='1';
			me._mapbig.style.visibility=me._mapbig.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp1.style[domTransition]='none';
			} else {
				me._upsmlp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp1.style.opacity='0';
			me._upsmlp1.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp1.style[domTransition]='none';
			} else {
				me._losmlp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp1.style.opacity='0';
			me._losmlp1.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp1.style[domTransition]='none';
			} else {
				me._upbigp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp1.style.opacity='1';
			me._upbigp1.style.visibility=me._upbigp1.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp1.style[domTransition]='none';
			} else {
				me._lobigp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp1.style.opacity='1';
			me._lobigp1.style.visibility=me._lobigp1.ggVisible?'inherit':'hidden';
			me._p1bbig.style[domTransition]='none';
			me._p1bbig.style.opacity='0';
			me._p1bbig.style.visibility='hidden';
			me._p2bbig.style[domTransition]='none';
			me._p2bbig.style.opacity='1';
			me._p2bbig.style.visibility=me._p2bbig.ggVisible?'inherit':'hidden';
			me._p3bbig.style[domTransition]='none';
			me._p3bbig.style.opacity='1';
			me._p3bbig.style.visibility=me._p3bbig.ggVisible?'inherit':'hidden';
			me._p1abig.style[domTransition]='none';
			me._p1abig.style.opacity='1';
			me._p1abig.style.visibility=me._p1abig.ggVisible?'inherit':'hidden';
			me._p2abig.style[domTransition]='none';
			me._p2abig.style.opacity='0';
			me._p2abig.style.visibility='hidden';
			me._p3abig.style[domTransition]='none';
			me._p3abig.style.opacity='0';
			me._p3abig.style.visibility='hidden';
			me._p1.style[domTransition]='none';
			me._p1.style.opacity='1';
			me._p1.style.visibility=me._p1.ggVisible?'inherit':'hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='0';
			me._p2.style.visibility='hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
		}
		this._upsmlp1.ggUpdatePosition=function (useTransition) {
		}
		this._p1.appendChild(this._upsmlp1);
		this._lobigp1=document.createElement('div');
		this._lobigp1__img=document.createElement('img');
		this._lobigp1__img.className='ggskin ggskin_svg';
		this._lobigp1__img.setAttribute('src',basePath + 'images/lobigp1.svg');
		this._lobigp1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._lobigp1__img['ondragstart']=function() { return false; };
		this._lobigp1.appendChild(this._lobigp1__img);
		this._lobigp1.ggId="lobigp1";
		this._lobigp1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._lobigp1.ggVisible=true;
		this._lobigp1.className='ggskin ggskin_svg ';
		this._lobigp1.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 76px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		this._lobigp1.setAttribute('style',hs);
		this._lobigp1.style[domTransform + 'Origin']='50% 50%';
		me._lobigp1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._lobigp1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._lobigp1.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._mapsml.style[domTransition]='none';
			} else {
				me._mapsml.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapsml.style.opacity='1';
			me._mapsml.style.visibility=me._mapsml.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._mapbig.style[domTransition]='none';
			} else {
				me._mapbig.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapbig.style.opacity='0';
			me._mapbig.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp1.style[domTransition]='none';
			} else {
				me._upsmlp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp1.style.opacity='1';
			me._upsmlp1.style.visibility=me._upsmlp1.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp1.style[domTransition]='none';
			} else {
				me._losmlp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp1.style.opacity='1';
			me._losmlp1.style.visibility=me._losmlp1.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp1.style[domTransition]='none';
			} else {
				me._upbigp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp1.style.opacity='0';
			me._upbigp1.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp1.style[domTransition]='none';
			} else {
				me._lobigp1.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp1.style.opacity='0';
			me._lobigp1.style.visibility='hidden';
			me._p1bsml.style[domTransition]='none';
			me._p1bsml.style.opacity='0';
			me._p1bsml.style.visibility='hidden';
			me._p2bsml.style[domTransition]='none';
			me._p2bsml.style.opacity='1';
			me._p2bsml.style.visibility=me._p2bsml.ggVisible?'inherit':'hidden';
			me._p3bsml.style[domTransition]='none';
			me._p3bsml.style.opacity='1';
			me._p3bsml.style.visibility=me._p3bsml.ggVisible?'inherit':'hidden';
			me._p1asml.style[domTransition]='none';
			me._p1asml.style.opacity='1';
			me._p1asml.style.visibility=me._p1asml.ggVisible?'inherit':'hidden';
			me._p2asml.style[domTransition]='none';
			me._p2asml.style.opacity='0';
			me._p2asml.style.visibility='hidden';
			me._p3asml.style[domTransition]='none';
			me._p3asml.style.opacity='0';
			me._p3asml.style.visibility='hidden';
			me._p1.style[domTransition]='none';
			me._p1.style.opacity='1';
			me._p1.style.visibility=me._p1.ggVisible?'inherit':'hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='0';
			me._p2.style.visibility='hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
		}
		me._lobigp1.ggCurrentLogicStatePosition = -1;
		this._lobigp1.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lobigp1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lobigp1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lobigp1.style[domTransition]='left none, top none';
				if (me._lobigp1.ggCurrentLogicStatePosition == 0) {
					me._lobigp1.style.left='105px';
					me._lobigp1.style.top='-56px';
				}
				else {
					me._lobigp1.style.left='76px';
					me._lobigp1.style.top='6px';
				}
			}
		}
		this._lobigp1.ggUpdatePosition=function (useTransition) {
			me._lobigp1.ggUpdateConditionResize();
		}
		this._p1.appendChild(this._lobigp1);
		this._upbigp1=document.createElement('div');
		this._upbigp1__img=document.createElement('img');
		this._upbigp1__img.className='ggskin ggskin_svg';
		this._upbigp1__img.setAttribute('src',basePath + 'images/upbigp1.svg');
		this._upbigp1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._upbigp1__img['ondragstart']=function() { return false; };
		this._upbigp1.appendChild(this._upbigp1__img);
		this._upbigp1.ggId="upbigp1";
		this._upbigp1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._upbigp1.ggVisible=true;
		this._upbigp1.className='ggskin ggskin_svg ';
		this._upbigp1.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 14px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		this._upbigp1.setAttribute('style',hs);
		this._upbigp1.style[domTransform + 'Origin']='50% 50%';
		me._upbigp1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._upbigp1.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._upbigp1.ggCurrentLogicStatePosition = -1;
		this._upbigp1.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._upbigp1.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._upbigp1.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._upbigp1.style[domTransition]='left none, top none';
				if (me._upbigp1.ggCurrentLogicStatePosition == 0) {
					me._upbigp1.style.left='45px';
					me._upbigp1.style.top='-56px';
				}
				else {
					me._upbigp1.style.left='14px';
					me._upbigp1.style.top='6px';
				}
			}
		}
		this._upbigp1.ggUpdatePosition=function (useTransition) {
			me._upbigp1.ggUpdateConditionResize();
		}
		this._p1.appendChild(this._upbigp1);
		this._topr.appendChild(this._p1);
		this._p2=document.createElement('div');
		this._p2.ggId="p2";
		this._p2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p2.ggVisible=true;
		this._p2.className='ggskin ggskin_container ';
		this._p2.ggType='container';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 203px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 358px;';
		hs+='visibility : hidden;';
		hs+='width : 260px;';
		hs+='pointer-events:none;';
		this._p2.setAttribute('style',hs);
		this._p2.style[domTransform + 'Origin']='50% 50%';
		me._p2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._p2.ggCurrentLogicStateVisible = -1;
		this._p2.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p2.style[domTransition]='';
				if (me._p2.ggCurrentLogicStateVisible == 0) {
					me._p2.style.visibility="hidden";
					me._p2.ggVisible=false;
				}
				else {
					me._p2.style.visibility=(Number(me._p2.style.opacity)>0||!me._p2.style.opacity)?'inherit':'hidden';
					me._p2.ggVisible=true;
				}
			}
		}
		this._p2.ggUpdatePosition=function (useTransition) {
			me._p2.ggUpdateConditionResize();
		}
		this._losmlp2=document.createElement('div');
		this._losmlp2__img=document.createElement('img');
		this._losmlp2__img.className='ggskin ggskin_svg';
		this._losmlp2__img.setAttribute('src',basePath + 'images/losmlp2.svg');
		this._losmlp2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._losmlp2__img['ondragstart']=function() { return false; };
		this._losmlp2.appendChild(this._losmlp2__img);
		this._losmlp2.ggId="losmlp2";
		this._losmlp2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._losmlp2.ggVisible=true;
		this._losmlp2.className='ggskin ggskin_svg ';
		this._losmlp2.ggType='svg';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 184px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : hidden;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		this._losmlp2.setAttribute('style',hs);
		this._losmlp2.style[domTransform + 'Origin']='50% 50%';
		me._losmlp2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._losmlp2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._losmlp2.ggUpdatePosition=function (useTransition) {
		}
		this._p2.appendChild(this._losmlp2);
		this._upsmlp2=document.createElement('div');
		this._upsmlp2__img=document.createElement('img');
		this._upsmlp2__img.className='ggskin ggskin_svg';
		this._upsmlp2__img.setAttribute('src',basePath + 'images/upsmlp2.svg');
		this._upsmlp2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._upsmlp2__img['ondragstart']=function() { return false; };
		this._upsmlp2.appendChild(this._upsmlp2__img);
		this._upsmlp2.ggId="upsmlp2";
		this._upsmlp2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._upsmlp2.ggVisible=true;
		this._upsmlp2.className='ggskin ggskin_svg ';
		this._upsmlp2.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 128px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -60px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		this._upsmlp2.setAttribute('style',hs);
		this._upsmlp2.style[domTransform + 'Origin']='50% 50%';
		me._upsmlp2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._upsmlp2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._upsmlp2.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._mapsml.style[domTransition]='none';
			} else {
				me._mapsml.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapsml.style.opacity='0';
			me._mapsml.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._mapbig.style[domTransition]='none';
			} else {
				me._mapbig.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapbig.style.opacity='1';
			me._mapbig.style.visibility=me._mapbig.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp2.style[domTransition]='none';
			} else {
				me._upsmlp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp2.style.opacity='0';
			me._upsmlp2.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp2.style[domTransition]='none';
			} else {
				me._losmlp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp2.style.opacity='0';
			me._losmlp2.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp2.style[domTransition]='none';
			} else {
				me._upbigp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp2.style.opacity='1';
			me._upbigp2.style.visibility=me._upbigp2.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp2.style[domTransition]='none';
			} else {
				me._lobigp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp2.style.opacity='1';
			me._lobigp2.style.visibility=me._lobigp2.ggVisible?'inherit':'hidden';
			me._p1bbig.style[domTransition]='none';
			me._p1bbig.style.opacity='1';
			me._p1bbig.style.visibility=me._p1bbig.ggVisible?'inherit':'hidden';
			me._p2bbig.style[domTransition]='none';
			me._p2bbig.style.opacity='0';
			me._p2bbig.style.visibility='hidden';
			me._p3bbig.style[domTransition]='none';
			me._p3bbig.style.opacity='1';
			me._p3bbig.style.visibility=me._p3bbig.ggVisible?'inherit':'hidden';
			me._p1abig.style[domTransition]='none';
			me._p1abig.style.opacity='0';
			me._p1abig.style.visibility='hidden';
			me._p2abig.style[domTransition]='none';
			me._p2abig.style.opacity='1';
			me._p2abig.style.visibility=me._p2abig.ggVisible?'inherit':'hidden';
			me._p3abig.style[domTransition]='none';
			me._p3abig.style.opacity='0';
			me._p3abig.style.visibility='hidden';
			me._p1.style[domTransition]='none';
			me._p1.style.opacity='0';
			me._p1.style.visibility='hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='1';
			me._p2.style.visibility=me._p2.ggVisible?'inherit':'hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
		}
		this._upsmlp2.ggUpdatePosition=function (useTransition) {
		}
		this._p2.appendChild(this._upsmlp2);
		this._lobigp2=document.createElement('div');
		this._lobigp2__img=document.createElement('img');
		this._lobigp2__img.className='ggskin ggskin_svg';
		this._lobigp2__img.setAttribute('src',basePath + 'images/lobigp2.svg');
		this._lobigp2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._lobigp2__img['ondragstart']=function() { return false; };
		this._lobigp2.appendChild(this._lobigp2__img);
		this._lobigp2.ggId="lobigp2";
		this._lobigp2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._lobigp2.ggVisible=true;
		this._lobigp2.className='ggskin ggskin_svg ';
		this._lobigp2.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 78px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		this._lobigp2.setAttribute('style',hs);
		this._lobigp2.style[domTransform + 'Origin']='50% 50%';
		me._lobigp2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._lobigp2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._lobigp2.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._mapsml.style[domTransition]='none';
			} else {
				me._mapsml.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapsml.style.opacity='1';
			me._mapsml.style.visibility=me._mapsml.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._mapbig.style[domTransition]='none';
			} else {
				me._mapbig.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapbig.style.opacity='0';
			me._mapbig.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp2.style[domTransition]='none';
			} else {
				me._upsmlp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp2.style.opacity='1';
			me._upsmlp2.style.visibility=me._upsmlp2.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp2.style[domTransition]='none';
			} else {
				me._losmlp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp2.style.opacity='1';
			me._losmlp2.style.visibility=me._losmlp2.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp2.style[domTransition]='none';
			} else {
				me._upbigp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp2.style.opacity='0';
			me._upbigp2.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp2.style[domTransition]='none';
			} else {
				me._lobigp2.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp2.style.opacity='0';
			me._lobigp2.style.visibility='hidden';
			me._p1bsml.style[domTransition]='none';
			me._p1bsml.style.opacity='1';
			me._p1bsml.style.visibility=me._p1bsml.ggVisible?'inherit':'hidden';
			me._p2bsml.style[domTransition]='none';
			me._p2bsml.style.opacity='0';
			me._p2bsml.style.visibility='hidden';
			me._p3bsml.style[domTransition]='none';
			me._p3bsml.style.opacity='1';
			me._p3bsml.style.visibility=me._p3bsml.ggVisible?'inherit':'hidden';
			me._p1asml.style[domTransition]='none';
			me._p1asml.style.opacity='0';
			me._p1asml.style.visibility='hidden';
			me._p2asml.style[domTransition]='none';
			me._p2asml.style.opacity='1';
			me._p2asml.style.visibility=me._p2asml.ggVisible?'inherit':'hidden';
			me._p3asml.style[domTransition]='none';
			me._p3asml.style.opacity='0';
			me._p3asml.style.visibility='hidden';
			me._p1.style[domTransition]='none';
			me._p1.style.opacity='0';
			me._p1.style.visibility='hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='1';
			me._p2.style.visibility=me._p2.ggVisible?'inherit':'hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
		}
		me._lobigp2.ggCurrentLogicStatePosition = -1;
		this._lobigp2.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lobigp2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lobigp2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lobigp2.style[domTransition]='left none, top none';
				if (me._lobigp2.ggCurrentLogicStatePosition == 0) {
					me._lobigp2.style.left='107px';
					me._lobigp2.style.top='-17px';
				}
				else {
					me._lobigp2.style.left='78px';
					me._lobigp2.style.top='45px';
				}
			}
		}
		this._lobigp2.ggUpdatePosition=function (useTransition) {
			me._lobigp2.ggUpdateConditionResize();
		}
		this._p2.appendChild(this._lobigp2);
		this._upbigp2=document.createElement('div');
		this._upbigp2__img=document.createElement('img');
		this._upbigp2__img.className='ggskin ggskin_svg';
		this._upbigp2__img.setAttribute('src',basePath + 'images/upbigp2.svg');
		this._upbigp2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._upbigp2__img['ondragstart']=function() { return false; };
		this._upbigp2.appendChild(this._upbigp2__img);
		this._upbigp2.ggId="upbigp2";
		this._upbigp2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._upbigp2.ggVisible=true;
		this._upbigp2.className='ggskin ggskin_svg ';
		this._upbigp2.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 16px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 45px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		this._upbigp2.setAttribute('style',hs);
		this._upbigp2.style[domTransform + 'Origin']='50% 50%';
		me._upbigp2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._upbigp2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._upbigp2.ggCurrentLogicStatePosition = -1;
		this._upbigp2.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._upbigp2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._upbigp2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._upbigp2.style[domTransition]='left none, top none';
				if (me._upbigp2.ggCurrentLogicStatePosition == 0) {
					me._upbigp2.style.left='47px';
					me._upbigp2.style.top='-17px';
				}
				else {
					me._upbigp2.style.left='16px';
					me._upbigp2.style.top='45px';
				}
			}
		}
		this._upbigp2.ggUpdatePosition=function (useTransition) {
			me._upbigp2.ggUpdateConditionResize();
		}
		this._p2.appendChild(this._upbigp2);
		this._topr.appendChild(this._p2);
		this._p3=document.createElement('div');
		this._p3.ggId="p3";
		this._p3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._p3.ggVisible=true;
		this._p3.className='ggskin ggskin_container ';
		this._p3.ggType='container';
		hs ='';
		hs+='height : 155px;';
		hs+='left : 205px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 397px;';
		hs+='visibility : hidden;';
		hs+='width : 260px;';
		hs+='pointer-events:none;';
		this._p3.setAttribute('style',hs);
		this._p3.style[domTransform + 'Origin']='50% 50%';
		me._p3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._p3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._p3.ggCurrentLogicStateVisible = -1;
		this._p3.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().width <= 1000)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._p3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._p3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._p3.style[domTransition]='';
				if (me._p3.ggCurrentLogicStateVisible == 0) {
					me._p3.style.visibility="hidden";
					me._p3.ggVisible=false;
				}
				else {
					me._p3.style.visibility=(Number(me._p3.style.opacity)>0||!me._p3.style.opacity)?'inherit':'hidden';
					me._p3.ggVisible=true;
				}
			}
		}
		this._p3.ggUpdatePosition=function (useTransition) {
			me._p3.ggUpdateConditionResize();
		}
		this._losmlp3=document.createElement('div');
		this._losmlp3__img=document.createElement('img');
		this._losmlp3__img.className='ggskin ggskin_svg';
		this._losmlp3__img.setAttribute('src',basePath + 'images/losmlp3.svg');
		this._losmlp3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._losmlp3__img['ondragstart']=function() { return false; };
		this._losmlp3.appendChild(this._losmlp3__img);
		this._losmlp3.ggId="losmlp3";
		this._losmlp3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._losmlp3.ggVisible=true;
		this._losmlp3.className='ggskin ggskin_svg ';
		this._losmlp3.ggType='svg';
		hs ='';
		hs+='height : 39px;';
		hs+='left : 182px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -99px;';
		hs+='visibility : hidden;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		this._losmlp3.setAttribute('style',hs);
		this._losmlp3.style[domTransform + 'Origin']='50% 50%';
		me._losmlp3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._losmlp3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._losmlp3.ggUpdatePosition=function (useTransition) {
		}
		this._p3.appendChild(this._losmlp3);
		this._upsmlp3=document.createElement('div');
		this._upsmlp3__img=document.createElement('img');
		this._upsmlp3__img.className='ggskin ggskin_svg';
		this._upsmlp3__img.setAttribute('src',basePath + 'images/upsmlp3.svg');
		this._upsmlp3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._upsmlp3__img['ondragstart']=function() { return false; };
		this._upsmlp3.appendChild(this._upsmlp3__img);
		this._upsmlp3.ggId="upsmlp3";
		this._upsmlp3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._upsmlp3.ggVisible=true;
		this._upsmlp3.className='ggskin ggskin_svg ';
		this._upsmlp3.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 126px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -99px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		this._upsmlp3.setAttribute('style',hs);
		this._upsmlp3.style[domTransform + 'Origin']='50% 50%';
		me._upsmlp3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._upsmlp3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._upsmlp3.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._mapsml.style[domTransition]='none';
			} else {
				me._mapsml.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapsml.style.opacity='0';
			me._mapsml.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._mapbig.style[domTransition]='none';
			} else {
				me._mapbig.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapbig.style.opacity='1';
			me._mapbig.style.visibility=me._mapbig.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp3.style[domTransition]='none';
			} else {
				me._upsmlp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp3.style.opacity='0';
			me._upsmlp3.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp3.style[domTransition]='none';
			} else {
				me._losmlp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp3.style.opacity='0';
			me._losmlp3.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp3.style[domTransition]='none';
			} else {
				me._upbigp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp3.style.opacity='1';
			me._upbigp3.style.visibility=me._upbigp3.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp3.style[domTransition]='none';
			} else {
				me._lobigp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp3.style.opacity='1';
			me._lobigp3.style.visibility=me._lobigp3.ggVisible?'inherit':'hidden';
			me._p1bbig.style[domTransition]='none';
			me._p1bbig.style.opacity='1';
			me._p1bbig.style.visibility=me._p1bbig.ggVisible?'inherit':'hidden';
			me._p2bbig.style[domTransition]='none';
			me._p2bbig.style.opacity='1';
			me._p2bbig.style.visibility=me._p2bbig.ggVisible?'inherit':'hidden';
			me._p3bbig.style[domTransition]='none';
			me._p3bbig.style.opacity='0';
			me._p3bbig.style.visibility='hidden';
			me._p1abig.style[domTransition]='none';
			me._p1abig.style.opacity='0';
			me._p1abig.style.visibility='hidden';
			me._p2abig.style[domTransition]='none';
			me._p2abig.style.opacity='0';
			me._p2abig.style.visibility='hidden';
			me._p3abig.style[domTransition]='none';
			me._p3abig.style.opacity='1';
			me._p3abig.style.visibility=me._p3abig.ggVisible?'inherit':'hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='0';
			me._p2.style.visibility='hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='1';
			me._p3.style.visibility=me._p3.ggVisible?'inherit':'hidden';
		}
		this._upsmlp3.ggUpdatePosition=function (useTransition) {
		}
		this._p3.appendChild(this._upsmlp3);
		this._lobigp3=document.createElement('div');
		this._lobigp3__img=document.createElement('img');
		this._lobigp3__img.className='ggskin ggskin_svg';
		this._lobigp3__img.setAttribute('src',basePath + 'images/lobigp3.svg');
		this._lobigp3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._lobigp3__img['ondragstart']=function() { return false; };
		this._lobigp3.appendChild(this._lobigp3__img);
		this._lobigp3.ggId="lobigp3";
		this._lobigp3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._lobigp3.ggVisible=true;
		this._lobigp3.className='ggskin ggskin_svg ';
		this._lobigp3.ggType='svg';
		hs ='';
		hs+='height : 40px;';
		hs+='left : 76px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		this._lobigp3.setAttribute('style',hs);
		this._lobigp3.style[domTransform + 'Origin']='50% 50%';
		me._lobigp3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._lobigp3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._lobigp3.onclick=function (e) {
			if (me.player.transitionsDisabled) {
				me._mapsml.style[domTransition]='none';
			} else {
				me._mapsml.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapsml.style.opacity='1';
			me._mapsml.style.visibility=me._mapsml.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._mapbig.style[domTransition]='none';
			} else {
				me._mapbig.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._mapbig.style.opacity='0';
			me._mapbig.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._upsmlp3.style[domTransition]='none';
			} else {
				me._upsmlp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upsmlp3.style.opacity='1';
			me._upsmlp3.style.visibility=me._upsmlp3.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._losmlp3.style[domTransition]='none';
			} else {
				me._losmlp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._losmlp3.style.opacity='1';
			me._losmlp3.style.visibility=me._losmlp3.ggVisible?'inherit':'hidden';
			if (me.player.transitionsDisabled) {
				me._upbigp3.style[domTransition]='none';
			} else {
				me._upbigp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._upbigp3.style.opacity='0';
			me._upbigp3.style.visibility='hidden';
			if (me.player.transitionsDisabled) {
				me._lobigp3.style[domTransition]='none';
			} else {
				me._lobigp3.style[domTransition]='all 500ms ease-out 0ms';
			}
			me._lobigp3.style.opacity='0';
			me._lobigp3.style.visibility='hidden';
			me._p1bsml.style[domTransition]='none';
			me._p1bsml.style.opacity='1';
			me._p1bsml.style.visibility=me._p1bsml.ggVisible?'inherit':'hidden';
			me._p2bsml.style[domTransition]='none';
			me._p2bsml.style.opacity='1';
			me._p2bsml.style.visibility=me._p2bsml.ggVisible?'inherit':'hidden';
			me._p3bsml.style[domTransition]='none';
			me._p3bsml.style.opacity='0';
			me._p3bsml.style.visibility='hidden';
			me._p1asml.style[domTransition]='none';
			me._p1asml.style.opacity='0';
			me._p1asml.style.visibility='hidden';
			me._p2asml.style[domTransition]='none';
			me._p2asml.style.opacity='0';
			me._p2asml.style.visibility='hidden';
			me._p3asml.style[domTransition]='none';
			me._p3asml.style.opacity='1';
			me._p3asml.style.visibility=me._p3asml.ggVisible?'inherit':'hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='0';
			me._p3.style.visibility='hidden';
			me._p2.style[domTransition]='none';
			me._p2.style.opacity='0';
			me._p2.style.visibility='hidden';
			me._p3.style[domTransition]='none';
			me._p3.style.opacity='1';
			me._p3.style.visibility=me._p3.ggVisible?'inherit':'hidden';
		}
		me._lobigp3.ggCurrentLogicStatePosition = -1;
		this._lobigp3.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._lobigp3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._lobigp3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._lobigp3.style[domTransition]='left none, top none';
				if (me._lobigp3.ggCurrentLogicStatePosition == 0) {
					me._lobigp3.style.left='105px';
					me._lobigp3.style.top='-56px';
				}
				else {
					me._lobigp3.style.left='76px';
					me._lobigp3.style.top='6px';
				}
			}
		}
		this._lobigp3.ggUpdatePosition=function (useTransition) {
			me._lobigp3.ggUpdateConditionResize();
		}
		this._p3.appendChild(this._lobigp3);
		this._upbigp3=document.createElement('div');
		this._upbigp3__img=document.createElement('img');
		this._upbigp3__img.className='ggskin ggskin_svg';
		this._upbigp3__img.setAttribute('src',basePath + 'images/upbigp3.svg');
		this._upbigp3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._upbigp3__img['ondragstart']=function() { return false; };
		this._upbigp3.appendChild(this._upbigp3__img);
		this._upbigp3.ggId="upbigp3";
		this._upbigp3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._upbigp3.ggVisible=true;
		this._upbigp3.className='ggskin ggskin_svg ';
		this._upbigp3.ggType='svg';
		hs ='';
		hs+='height : 36px;';
		hs+='left : 14px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : hidden;';
		hs+='width : 47px;';
		hs+='pointer-events:auto;';
		this._upbigp3.setAttribute('style',hs);
		this._upbigp3.style[domTransform + 'Origin']='50% 50%';
		me._upbigp3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._upbigp3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._upbigp3.ggCurrentLogicStatePosition = -1;
		this._upbigp3.ggUpdateConditionResize=function () {
			var newLogicStatePosition;
			if (
				(me.player.getViewerSize().width <= 1500) && 
				(me.player.getViewerSize().width >= 1000)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._upbigp3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._upbigp3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._upbigp3.style[domTransition]='left none, top none';
				if (me._upbigp3.ggCurrentLogicStatePosition == 0) {
					me._upbigp3.style.left='45px';
					me._upbigp3.style.top='-56px';
				}
				else {
					me._upbigp3.style.left='14px';
					me._upbigp3.style.top='6px';
				}
			}
		}
		this._upbigp3.ggUpdatePosition=function (useTransition) {
			me._upbigp3.ggUpdateConditionResize();
		}
		this._p3.appendChild(this._upbigp3);
		this._topr.appendChild(this._p3);
		this.divSkin.appendChild(this._topr);
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		var hs='';
		if (me._p3asml.ggParameter) {
			hs+=parameterToTransform(me._p3asml.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._p3asml.style[domTransform]=hs;
		var hs='';
		if (me._p2asml.ggParameter) {
			hs+=parameterToTransform(me._p2asml.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._p2asml.style[domTransform]=hs;
		var hs='';
		if (me._p1asml.ggParameter) {
			hs+=parameterToTransform(me._p1asml.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._p1asml.style[domTransform]=hs;
		var hs='';
		if (me._p3abig.ggParameter) {
			hs+=parameterToTransform(me._p3abig.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._p3abig.style[domTransform]=hs;
		var hs='';
		if (me._p2abig.ggParameter) {
			hs+=parameterToTransform(me._p2abig.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._p2abig.style[domTransform]=hs;
		var hs='';
		if (me._p1abig.ggParameter) {
			hs+=parameterToTransform(me._p1abig.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._p1abig.style[domTransform]=hs;
		var hs='';
		if (me._composs2.ggParameter) {
			hs+=parameterToTransform(me._composs2.ggParameter) + ' ';
		}
		hs+='rotate(' + (-1.0*(1 * me.player.getPanNorth() + 0)) + 'deg) ';
		me._composs2.style[domTransform]=hs;
	};
	this.addSkin();
};