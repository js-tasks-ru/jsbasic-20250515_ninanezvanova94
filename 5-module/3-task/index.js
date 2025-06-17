function initCarousel() {
  const slides = document.querySelector('.carousel__inner');
  const slide = document.querySelectorAll('.carousel__inner');

  const slidesCount = document.querySelectorAll('.carousel__slide').length;
  const width = slide[0].offsetWidth;

  document.querySelector('.carousel__arrow_left').style.display = 'none';

  slide.forEach((slide,i) => {
    document.querySelector('.carousel__arrow_right').onclick = function() {
      slides.style.transform = `translateX(-${width*(i+1)}px)`;
      i++;
      document.querySelector('.carousel__arrow_left').style.display = '';
      if(i==slidesCount-1){
        document.querySelector('.carousel__arrow_right').style.display = 'none';
      } 
    };   

    document.querySelector('.carousel__arrow_left').onclick = function() {
      slides.style.transform = `translateX(-${width*(i-1)}px)`;
      i--;
      document.querySelector('.carousel__arrow_right').style.display = '';
      if(i==0){
        document.querySelector('.carousel__arrow_left').style.display = 'none';
      } 
    }; 
  });
}

