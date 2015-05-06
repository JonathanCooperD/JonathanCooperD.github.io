/*  ================================================================
    Slider
    ================================================================ */
        
function Slider(theSlider){
     this.slider     = theSlider;
     this.sliderW    = theSlider.offsetWidth;
     this.wrapper    = theSlider.children[0];
     this.lis        = theSlider.children[0].children[0];
     this.allLis     = theSlider.children[0].children;
     this.countLi    = theSlider.children[0].children.length;
     this.count      = 0;
}

Slider.prototype.sizes = function(){
     this.sliderW  = this.slider.offsetWidth;
     this.wrapperW = (this.countLi * this.sliderW) + 'px';
     this.wrapper.style.width = this.wrapperW;

     for (var i in this.allLis){
          // console.log(this.allLis[i]);
          this.allLis[i].style.width = this.sliderW + 'px';
     }
}
        
Slider.prototype.slide = function(){
     this.pos = -(this.sliderW * this.count);
     this.wrapper.style.marginLeft = this.pos + 'px';
}

Slider.prototype.next = function(){
     this.count = (this.count <= this.countLi - 2) ? this.count += 1 : this.count == 0;
     this.slide();
}

Slider.prototype.prev = function(){
     this.count = (this.count <= 0) ? this.count + this.countLi - 1 : this.count -= 1;
     this.slide();
}

/* Call New Obj
   ------------------------------------------------------ */

var ob = document.getElementsByClassName('slider')[0];
var slider = new Slider(ob);

/* Next Prev Controls
   ------------------------------------------------------ */

var ctrlNext = document.getElementsByClassName('next')[0]
    ctrlPrev = document.getElementsByClassName('prev')[0];

ctrlNext.addEventListener('click', function(e) {
     e.preventDefault();
    slider.next();
}, false);

ctrlPrev.addEventListener('click', function(e) {
     e.preventDefault();
    slider.prev();
}, false);

/* Next Prev Controls
   ------------------------------------------------------ */

window.onresize = function(){
     slider.slide();
     slider.sizes();
}

/* Setup Sizing for Reponsivity
   ------------------------------------------------------ */

slider.sizes();








// function proBar(){
// 	var prog    = $('.progress__bar'),
// 		toTop   = $(window).scrollTop(),
// 		wHeight = $(window).height(),
// 		dHeight = $(document).height(),
// 		sDist   = (toTop/(dHeight-wHeight))*100;

// 	prog.css({
// 		width: sDist + '%'
// 	});
// }

// $(window).scroll(function(){
// 	proBar();
// });
