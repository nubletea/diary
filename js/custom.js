window.addEventListener("DOMContentLoaded",() => {
	digital_clock();
	slide();
});
// 오브젝트 모음
const get_count={
	count:0,
	arr:[],
	for_arr_push:function(arrname,ME){
		for(let i=0;i<ME.length;i++){
			arrname.push(ME[i]);
		}
	}
};
const banner={
	remove_act:function(ME,act){
		for(let i=0;i<ME.length;i++){
			ME[i].classList.remove(act);
		}
	},
	add_act:function(ME,act){
		ME.classList.add(act);
	},
	add_left:function(ME,value){
		ME.style.left=value;
	},
	add_all_left:function(ME,get,value){
		for(let i=get;i<ME.length;i++){
			ME[i].style.left=value;
		}
	},
	for_all_zIndex:function(ME){
		for(let i=0;i<ME.length;i++){
			ME[i].style.zIndex=0;
		}
	}
};
		//slide 수정 예정!!**
		function slide(){
			let banner_li=document.querySelectorAll('.bannerin li');
			let bannerin=document.querySelector('.bannerin');
			let banner_clone=banner_li[0].cloneNode(true);
			bannerin.style.transition='all 1s'; 
			bannerin.style.left='-775px';
			setTimeout(()=>{
				bannerin.style.transition='none';
				bannerin.appendChild(banner_clone);
				bannerin.removeChild(banner_li[0]);
				bannerin.style.left='0';
			},1000);
			setTimeout(slide,3000);
		}
//시간 표시
function digital_clock(){
	let set_clock=setTimeout(digital_clock,1000);
	let time=new Date();
	let hour=time.getHours();
	let minute=time.getMinutes();
	let second=time.getSeconds();
	let hour_txt=document.querySelector('.hour');
	let mimit_txt=document.querySelector('.minute');
	let mning_afnoon=document.querySelector('.mning_afnoon');
	let sec_txt=document.querySelector('.second');
	mimit_txt.innerHTML=minute;
	sec_txt.innerHTML=second;
	if(hour>12){
		hour_txt.innerHTML=hour-12;
		mning_afnoon.innerHTML="PM";
	}else{
		hour_txt.innerHTML=hour;
		mning_afnoon.innerHTML="AM";
	};
	set_clock;
};
// 날짜표시
function date_gage(){
	let today=new Date();
	let last=new Date(2020,10-1,16);
	let start=new Date(2020,5-1,15);
	let l_start=((last.getTime()-start.getTime())/(1000*24*3600));
	let s_today=((today.getTime()-start.getTime())/(1000*24*3600));
	let Number_of_days_left=Math.ceil(l_start-s_today);
	let day_persent=Math.floor(s_today/l_start*100);
	let gage_text=document.querySelector('.gage_text');
	let gage_text_span=document.querySelector('.gage_text span');
	let myskill_gage_bar_text=document.querySelector('.myskill_gage_bar_text');
	let myskill_gage_bar=document.querySelector('.myskill_gage_bar');
	//지남
	if(Number_of_days_left<=0){
		gage_text.innerHTML='<span>'+Math.abs(Number_of_days_left)+'</span>일<br>지남';
	}else{
		gage_text_span.innerHTML=Number_of_days_left;
	};
	//퍼센트
	myskill_gage_bar_text.innerHTML=day_persent+'%';
	if(day_persent>=100){
		myskill_gage_bar.style.width='100%';
	}else{
		myskill_gage_bar.style.width=day_persent+'%';
	};
};
//popup box
function pop_gal(event,ME){
	event.preventDefault();
	let popup=document.querySelector('.popup');
	let img=ME.getAttribute('href');
	let imgbox='<img src="'+img+'" alt="'+img+'">';
	let img_box=document.querySelector('.img-box');
	popup.style.display="block";
	setTimeout(function(ME){
		ME.style.opacity='1';
	},0,popup);
	img_box.innerHTML=imgbox;
};
//close
function pop_cs(){
	let popup=document.querySelector('.popup');
	popup.style.opacity='0';
	setTimeout(function(ME){
		ME.style.display="none";
	},500,popup);	
};
