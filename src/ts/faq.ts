const faqItems = document.querySelectorAll<HTMLElement>('.js-faq-item');


const faqItemOpenedClass: string = 'faq-item--opened';
faqItems?.forEach(faqItem => {
  const faqItemHeading = faqItem.querySelector<HTMLElement>('.js-faq-item-heading');
  faqItemHeading?.addEventListener('click', () => faqItemCollapse(faqItem))
})

function faqItemCollapse(item: HTMLElement) {
  const faqItemContent = item.querySelector<HTMLElement>('.js-faq-item-content');

  if (!item.classList.contains(faqItemOpenedClass)) {
    faqItemContent?.setAttribute('style', `height: ${faqItemContent?.scrollHeight}px`);
    item.classList.add(faqItemOpenedClass);
  } else {
    faqItemContent?.removeAttribute('style');
    item.classList.remove(faqItemOpenedClass);
  }
}
