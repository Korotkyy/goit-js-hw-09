// const STORAGE_KEY = "feedback-msg";
// const form = document.querySelector('.feedback-form');
// const textarea = form.querySelector("textarea");

// function formSubmitHandler(event){
//     event.preventDefault();
//     const text = textarea.value;
//     const email = form.elements.email.value;
//     const data = JSON.stringify({text, email});
//     localStorage.setItem(STORAGE_KEY, data);
// }

// form.addEventListener('submit', formSubmitHandler);

// const jsn = localStorage.getItem(STORAGE_KEY) ?? "";
// try {
//     const data = JSON.parse(jsn);
//     textarea.value = data.text;
//     form.elements.email.value = data.email;
// }
// catch {
//     console.log("No saved data!");
// }

const STORAGE_KEY = "feedback-form-state";
const form = document.querySelector('.feedback-form');
const textarea = form.querySelector("textarea");
const emailInput = form.querySelector("input[name='email']");

const saveFormData = () => localStorage.setItem(STORAGE_KEY, JSON.stringify({
  email: emailInput.value.trim(),
  message: textarea.value.trim()
}));

const loadFormData = () => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY) ?? "";
      if (savedData) {
        const { email, message } = JSON.parse(savedData);
        emailInput.value = email;
        textarea.value = message;
      }
    } catch (error) {
      console.error("Error loading form data:", error);
    }
  };

form.addEventListener('input', saveFormData);
window.addEventListener('load', loadFormData);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  console.log({
    email: emailInput.value.trim(),
    message: textarea.value.trim()
  });
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});
