const faqTabsContainer = document.querySelector('.faq-tabs');
const faqTabs = document.querySelectorAll('.faq-tab');
const pagesContainer = document.querySelector('.faq__pages');
const accordionList = document.querySelectorAll('.questions-list');
const ELEMENT_ACTIVE_CLASS = 'is-active';

const setElementActiveClass = (target, container) => {
  if (target.classList.contains(ELEMENT_ACTIVE_CLASS)) {
    return;
  }

  const activeElement = container.querySelector(`.${ELEMENT_ACTIVE_CLASS}`);
  activeElement.classList.remove(ELEMENT_ACTIVE_CLASS);
  target.classList.add(ELEMENT_ACTIVE_CLASS);
};

const initTabs = () => {
  faqTabs.forEach((tab) => {
    tab.addEventListener('click', (evt) => {
      evt.preventDefault();
      const linkedTabPage = document.querySelector(tab.hash);
      setElementActiveClass(tab,faqTabsContainer);
      setElementActiveClass(linkedTabPage, pagesContainer);
    });
  });
};

const initAccordion = () => {
  accordionList.forEach((accordion) => {
    accordion.addEventListener('click', (evt) => {
      const faqButton = evt.target.closest('.faq-button');
      const questionsItem = evt.target.closest('.questions-item');
      if (faqButton) {
        faqButton.classList.toggle('open');
        questionsItem.classList.toggle('open');
      }
    });
  });
};

function initFaqBlock() {
  initTabs();
  initAccordion();
}

export {initFaqBlock};
