import ApiServise from './apiServise.js';
import templateCardImages from '../temlates/images-card.hbs';
import getRefs from './get-refs';
import scrollToWithAnimation from 'scrollto-with-animation';


const refs = getRefs();
const apiServise = new ApiServise();

console.log(apiServise);

refs.form.addEventListener('submit', searchImages);
refs.button.addEventListener('click', fetchImagesMore);

function searchImages(e) { 
  e.preventDefault();  
  if (refs.input.value.length === 0) {     
   return refs.button.disabled = true;
  }
  clearGallery();

  refs.button.disabled = false;

  apiServise.query = refs.input.value;
  apiServise.resetPage();
  fetchImagesMore();
}

async function fetchImagesMore() {
  try {
    const hits = await apiServise.fecthContent();
    markup(hits);
    
    scrollToWithAnimation(
      element = body,
      direction = 'scrollTop',
      to = 12,
      duration = 10000,
      transition = 'easeInOutCirc',
    );

  } catch (error) { 
    console.log(error);
  }
}

function markup(img) {
  const card = templateCardImages(img);
  refs.galerry.insertAdjacentHTML('beforeend', card);
}

function clearGallery() {
  refs.galerry.innerHTML = '';
}

