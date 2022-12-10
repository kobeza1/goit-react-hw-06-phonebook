import Notiflix, { Notify } from 'notiflix';

Notiflix.Notify.init({
  width: '320px',
  position: 'right-top',
  distance: '10px',
  failure: {
    background: '#d22566',
  },
});

export const customNotiflix = text => {
  Notify.failure(text);
};

export default customNotiflix;
