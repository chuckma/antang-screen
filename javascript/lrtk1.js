function getDir(){
	var canvas = document.getElementById("dir");
	var ctx = canvas.getContext("2d");
	var org = {
		x: 232,
		y: 220
	};
	var now = {
		x:412,
		y: 220
	};
	var newxy = {
		x: 0,
		y: 0
	};
	function init() {
		/*             ctx.beginPath();
		 ctx.moveTo(org.x, org.y);
		 ctx.lineTo(now.x, now.y);
		 ctx.stroke();
		 ctx.beginPath ();
		 ctx.fillStyle = "green";
		 ctx.moveTo (now.x, now.y);
		 ctx.lineTo (now.x-10, now.y - 2 * 5);
		 ctx.lineTo (now.x-10, now.y + 2 * 5);
		 ctx.fill ();
		 ctx.stroke (); */
		math();
	}

	var i = 1;
	function math() {
		var wid = Math.abs(now.x - org.x);//x轴的长，绝对值
		var hei = Math.abs(now.y - org.y);//y轴长
		var length = Math.pow(Math.pow(wid, 2) + Math.pow(hei, 2), 1 / 2);//（长平方＋宽平方）开根 ，其实就是直角三角关系
		if (i < length) {//通过SetInterval，按照Length方向每次运行1px
			if (org.x < now.x) {
				newxy.x = org.x +wid / length * i;
			}
			else {
				newxy.x = org.x - wid / length * i;
			}
			if (org.y < now.y) {
				newxy.y = org.y + hei / length * i;
			}
			else {
				newxy.y = org.y - hei / length * i;
			}

			if(i>length-11){
				i=1;
			}else{
				i=i+3;
			}

		}
		comment();
	}
	function comment() {
		ctx.beginPath();
		ctx.fillStyle = "#43b6c0";
		ctx.arc(newxy.x, newxy.y, 8, 0, Math.PI * 2, true);
		ctx.fill ();
		ctx.stroke();

	}
	function clean() {
		ctx.clearRect(0, 0, canvas.width, canvas.height);
	}
	setInterval(function () {
		clean();
		init();
	}, 10);
};
function globeKeyWordLeft(){
	var radius = 60;
	var dtr = Math.PI/180;
	var d=300;

	var mcList = [];
	var active = false;
	var lasta = 1;
	var lastb = 1;
	var distr = true;
	var tspeed=2;
	var size=20;

	var mouseX=0;
	var mouseY=0;

	var howElliptical=1;

	var aA=null;
	var oDiv=null;

	//window.onload=function ()
	linit();
	function linit()
	{
		var i=0;
		var oTag=null;

		oDiv=document.getElementById('div1');

		aA=oDiv.getElementsByTagName('a');

		for(i=0;i<aA.length;i++)
		{
			oTag={};

			oTag.offsetWidth=aA[i].offsetWidth;
			oTag.offsetHeight=aA[i].offsetHeight;

			mcList.push(oTag);
		}

		sineCosine( 0,0,0 );

		positionAll();

		oDiv.onmouseover=function ()
		{
			active=true;
		};

		oDiv.onmouseout=function ()
		{
			active=false;
		};

		oDiv.onmousemove=function (ev)
		{
			var oEvent=window.event || ev;

			mouseX=oEvent.clientX-(oDiv.offsetLeft+oDiv.offsetWidth/2);
			mouseY=oEvent.clientY-(oDiv.offsetTop+oDiv.offsetHeight/2);

			mouseX/=5;
			mouseY/=5;
		};

		setInterval(update, 30);
	};

	function update()
	{
		var a;
		var b;

		if(active)
		{
			a = (-Math.min( Math.max( -mouseY, -size ), size ) / radius ) * tspeed;
			b = (Math.min( Math.max( -mouseX, -size ), size ) / radius ) * tspeed;
		}
		else
		{
			a = lasta * 0.98;
			b = lastb * 0.98;
		}

		lasta=a;
		lastb=b;

		if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
		{
			return;
		}

		var c=0;
		sineCosine(a,b,c);
		for(var j=0;j<mcList.length;j++)
		{
			var rx1=mcList[j].cx;
			var ry1=mcList[j].cy*ca+mcList[j].cz*(-sa);
			var rz1=mcList[j].cy*sa+mcList[j].cz*ca;

			var rx2=rx1*cb+rz1*sb;
			var ry2=ry1;
			var rz2=rx1*(-sb)+rz1*cb;

			var rx3=rx2*cc+ry2*(-sc);
			var ry3=rx2*sc+ry2*cc;
			var rz3=rz2;

			mcList[j].cx=rx3;
			mcList[j].cy=ry3;
			mcList[j].cz=rz3;

			per=d/(d+rz3);

			mcList[j].x=(howElliptical*rx3*per)-(howElliptical*2);
			mcList[j].y=ry3*per;
			mcList[j].scale=per;
			mcList[j].alpha=per;

			mcList[j].alpha=(mcList[j].alpha-0.6)*(10/6);
		}

		doPosition();
		depthSort();
	}

	function depthSort()
	{
		var i=0;
		var aTmp=[];

		for(i=0;i<aA.length;i++)
		{
			aTmp.push(aA[i]);
		}

		aTmp.sort
		(
			function (vItem1, vItem2)
			{
				if(vItem1.cz>vItem2.cz)
				{
					return -1;
				}
				else if(vItem1.cz<vItem2.cz)
				{
					return 1;
				}
				else
				{
					return 0;
				}
			}
		);

		for(i=0;i<aTmp.length;i++)
		{
			aTmp[i].style.zIndex=i;
		}
	}

	function positionAll()
	{
		var phi=0;
		var theta=0;
		var max=mcList.length;
		var i=0;

		var aTmp=[];
		var oFragment=document.createDocumentFragment();

		//�������
		for(i=0;i<aA.length;i++)
		{
			aTmp.push(aA[i]);
		}

		aTmp.sort
		(
			function ()
			{
				return Math.random()<0.5?1:-1;
			}
		);

		for(i=0;i<aTmp.length;i++)
		{
			oFragment.appendChild(aTmp[i]);
		}

		oDiv.appendChild(oFragment);

		for( var i=1; i<max+1; i++){
			if( distr )
			{
				phi = Math.acos(-1+(2*i-1)/max);
				theta = Math.sqrt(max*Math.PI)*phi;
			}
			else
			{
				phi = Math.random()*(Math.PI);
				theta = Math.random()*(2*Math.PI);
			}
			//����任
			mcList[i-1].cx = radius * Math.cos(theta)*Math.sin(phi);
			mcList[i-1].cy = radius * Math.sin(theta)*Math.sin(phi);
			mcList[i-1].cz = radius * Math.cos(phi);

			aA[i-1].style.left=mcList[i-1].cx+oDiv.offsetWidth/2-mcList[i-1].offsetWidth/2+'px';
			aA[i-1].style.top=mcList[i-1].cy+oDiv.offsetHeight/2-mcList[i-1].offsetHeight/2+'px';
		}
	}

	function doPosition()
	{
		var l=oDiv.offsetWidth/2;
		var t=oDiv.offsetHeight/2;
		for(var i=0;i<mcList.length;i++)
		{
			aA[i].style.left=mcList[i].cx+l-mcList[i].offsetWidth/2+'px';
			aA[i].style.top=mcList[i].cy+t-mcList[i].offsetHeight/2+'px';

			aA[i].style.fontSize=Math.ceil(12*mcList[i].scale/2)+8+'px';

			aA[i].style.filter="alpha(opacity="+100*mcList[i].alpha+")";
			aA[i].style.opacity=mcList[i].alpha;
		}
	}

	function sineCosine( a, b, c)
	{
		sa = Math.sin(a * dtr);
		ca = Math.cos(a * dtr);
		sb = Math.sin(b * dtr);
		cb = Math.cos(b * dtr);
		sc = Math.sin(c * dtr);
		cc = Math.cos(c * dtr);
	}
};
function globeKeyWordCenter() {
	var radius = 150;
	var dtr = Math.PI/180;
	var d=300;

	var mcList = [];
	var active = false;
	var lasta = 1;
	var lastb = 1;
	var distr = true;
	var tspeed=2;
	var size=250;

	var mouseX=0;
	var mouseY=0;

	var howElliptical=1;

	var aAs=null;
	var oDivs=null;
	cinit();

	//window.onload=function ()
	function cinit()
	{
		var i=0;
		var oTag=null;

		oDivs=document.getElementById('centerDataCloud');

		aAs=oDivs.getElementsByTagName('a');

		for(i=0;i<aAs.length;i++)
		{
			oTag={};

			oTag.offsetWidth=aAs[i].offsetWidth;
			oTag.offsetHeight=aAs[i].offsetHeight;

			mcList.push(oTag);
		}

		sineCosines( 0,0,0 );

		positionAlls();

		oDivs.onmouseover=function ()
		{
			active=true;
		};

		oDivs.onmouseout=function ()
		{
			active=false;
		};

		oDivs.onmousemove=function (ev)
		{
			var oEvent=window.event || ev;

			mouseX=oEvent.clientX-(oDivs.offsetLeft+oDivs.offsetWidth/2);
			mouseY=oEvent.clientY-(oDivs.offsetTop+oDivs.offsetHeight/2);

			mouseX/=5;
			mouseY/=5;
		};

		setInterval(updates, 30);
	};

	function updates()
	{
		var a;
		var b;

		if(active)
		{
			a = (-Math.min( Math.max( -mouseY, -size ), size ) / radius ) * tspeed;
			b = (Math.min( Math.max( -mouseX, -size ), size ) / radius ) * tspeed;
		}
		else
		{
			a = lasta * 0.98;
			b = lastb * 0.98;
		}

		lasta=a;
		lastb=b;

		if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
		{
			return;
		}

		var c=0;
		sineCosines(a,b,c);
		for(var j=0;j<mcList.length;j++)
		{
			var rx1=mcList[j].cx;
			var ry1=mcList[j].cy*ca+mcList[j].cz*(-sa);
			var rz1=mcList[j].cy*sa+mcList[j].cz*ca;

			var rx2=rx1*cb+rz1*sb;
			var ry2=ry1;
			var rz2=rx1*(-sb)+rz1*cb;

			var rx3=rx2*cc+ry2*(-sc);
			var ry3=rx2*sc+ry2*cc;
			var rz3=rz2;

			mcList[j].cx=rx3;
			mcList[j].cy=ry3;
			mcList[j].cz=rz3;

			per=d/(d+rz3);

			mcList[j].x=(howElliptical*rx3*per)-(howElliptical*2);
			mcList[j].y=ry3*per;
			mcList[j].scale=per;
			mcList[j].alpha=per;

			mcList[j].alpha=(mcList[j].alpha-0.6)*(10/6);
		}

		doPositions();
		depthSorts();
	}

	function depthSorts()
	{
		var i=0;
		var aTmp=[];

		for(i=0;i<aAs.length;i++)
		{
			aTmp.push(aAs[i]);
		}

		aTmp.sort
		(
			function (vItem1, vItem2)
			{
				if(vItem1.cz>vItem2.cz)
				{
					return -1;
				}
				else if(vItem1.cz<vItem2.cz)
				{
					return 1;
				}
				else
				{
					return 0;
				}
			}
		);

		for(i=0;i<aTmp.length;i++)
		{
			aTmp[i].style.zIndex=i;
		}
	}

	function positionAlls()
	{
		var phi=0;
		var theta=0;
		var max=mcList.length;
		var i=0;

		var aTmp=[];
		var oFragment=document.createDocumentFragment();

		//随机排序
		for(i=0;i<aAs.length;i++)
		{
			aTmp.push(aAs[i]);
		}

		aTmp.sort
		(
			function ()
			{
				return Math.random()<0.5?1:-1;
			}
		);

		for(i=0;i<aTmp.length;i++)
		{
			oFragment.appendChild(aTmp[i]);
		}

		oDivs.appendChild(oFragment);

		for( var i=1; i<max+1; i++){
			if( distr )
			{
				phi = Math.acos(-1+(2*i-1)/max);
				theta = Math.sqrt(max*Math.PI)*phi;
			}
			else
			{
				phi = Math.random()*(Math.PI);
				theta = Math.random()*(2*Math.PI);
			}
			//坐标变换
			mcList[i-1].cx = radius * Math.cos(theta)*Math.sin(phi);
			mcList[i-1].cy = radius * Math.sin(theta)*Math.sin(phi);
			mcList[i-1].cz = radius * Math.cos(phi);

			aAs[i-1].style.left=mcList[i-1].cx+oDivs.offsetWidth/2-mcList[i-1].offsetWidth/2+'px';
			aAs[i-1].style.top=mcList[i-1].cy+oDivs.offsetHeight/2-mcList[i-1].offsetHeight/2+'px';
		}
	}

	function doPositions()
	{
		var l=oDivs.offsetWidth/2;
		var t=oDivs.offsetHeight/2;
		for(var i=0;i<mcList.length;i++)
		{
			aAs[i].style.left=mcList[i].cx+l-mcList[i].offsetWidth/2+'px';
			aAs[i].style.top=mcList[i].cy+t-mcList[i].offsetHeight/2+'px';

			aAs[i].style.fontSize=Math.ceil(12*mcList[i].scale/2)+8+'px';

			aAs[i].style.filter="alpha(opacity="+100*mcList[i].alpha+")";
			aAs[i].style.opacity=mcList[i].alpha;
		}
	}

	function sineCosines( a, b, c)
	{
		sa = Math.sin(a * dtr);
		ca = Math.cos(a * dtr);
		sb = Math.sin(b * dtr);
		cb = Math.cos(b * dtr);
		sc = Math.sin(c * dtr);
		cc = Math.cos(c * dtr);
	}
};
