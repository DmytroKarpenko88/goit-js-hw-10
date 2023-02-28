import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form.form'),
  btnSubmit: document.querySelector('button[type="submit"]'),
};

function getFormData(formRefs) {
  return [...formRefs.elements]
    .filter(item => item.hasAttribute('name'))
    .reduce(
      (acc, item) => ({
        ...acc,
        [item.getAttribute('name')]: Number(item.value),
      }),
      {}
    );
}

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        resolve({ position, delay });
      } else {
        // Reject
        reject({ position, delay });
      }
    }, delay);
  });
}

function onSubmitForm(event) {
  event.preventDefault();

  const { delay, step, amount } = getFormData(refs.form);

  for (let i = 1; i <= amount; i++) {
    const promise =
      i === 1
        ? createPromise(i, delay)
        : createPromise(i, delay + (i - 1) * step);

    promise
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
      });
  }
  event.currentTarget.reset();
}

refs.form.addEventListener('submit', onSubmitForm);
