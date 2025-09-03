const seasonTicketsTabsContainer = document.querySelector('.season-tickets-tabs');
const seasonTicketsPageContainer = document.querySelector('.season-tickets__pages');
const BUTTON_ACTIVE_CLASS = 'active';

const setActiveClass = (target) => {
  if (target.classList.contains(BUTTON_ACTIVE_CLASS)) {
    return;
  }

  const activeTabButton = seasonTicketsTabsContainer.querySelector(`.${BUTTON_ACTIVE_CLASS}`);
  activeTabButton.classList.remove(BUTTON_ACTIVE_CLASS);
  target.classList.add(BUTTON_ACTIVE_CLASS);
};

const showSelectedPage = (selectedTabButton) => {
  const targetPageId = selectedTabButton.dataset.tab;
  const targetTabPage = seasonTicketsPageContainer.querySelector(`#${targetPageId}`);
  const activeTabPage = seasonTicketsPageContainer.querySelector('.season-tickets__tab-page.is-active');

  if (targetTabPage) {
    activeTabPage.classList.remove('is-active');
    targetTabPage.classList.add('is-active');
  }
};

function showSelectSeasonTicketsPage() {
  seasonTicketsTabsContainer.addEventListener('click', (evt) => {
    const selectedTabButton = evt.target.closest('.season-tickets-tabs__button');

    if (selectedTabButton) {
      setActiveClass(selectedTabButton);
      showSelectedPage(selectedTabButton);
    }
  });
}

export {showSelectSeasonTicketsPage};
