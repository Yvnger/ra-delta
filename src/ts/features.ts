const featureItems = document.querySelectorAll<HTMLElement>('.feature-item');
const featureDetailWrap: HTMLElement | null = document.querySelector('.js-features-detail-wrap');
const featureDetailDescription: HTMLParagraphElement | null = featureDetailWrap?.querySelector('.js-feature-description') as HTMLParagraphElement;
const featureDetailPicture: HTMLPictureElement | null = featureDetailWrap?.querySelector('picture') as HTMLPictureElement;

const featureActiveClass: string = 'feature-item--current';
const intervalTime: number = 5000;

let currentIndex: number = 0; // Индекс текущего активного элемента
let intervalId: any = null; // Переменная для хранения идентификатора интервала

featureItems.forEach(item => {
  item.addEventListener('click', () => {
    const itemIdString = item.dataset.id;

    if (itemIdString) {
      const itemId = parseInt(itemIdString, 10);
      if (!isNaN(itemId)) {
        currentIndex = itemId - 1; // Предполагаем, что itemId начинается с 1
        if (intervalId) clearInterval(intervalId); // Очищаем предыдущий интервал
        updateActiveItem();
        startAutoUpdate(); // Запускаем новый интервал
      }
    }
  });
});

function updateActiveItem(): void {
  featureItems.forEach((item) => item.classList.remove(featureActiveClass));

  const current: HTMLElement = featureItems[currentIndex];
  const currentId: string | undefined = current.dataset.id;
  const currentDescription: string | undefined = current.dataset.description;

  current.classList.add(featureActiveClass);

  if (currentId && currentDescription) {
    updateDetailInfo(currentId, currentDescription);
  }

  updateProgress(featureItems[currentIndex]);
}

function updateDetailInfo(id: string, description: string): void {
  const changingClass: string = 'features-detail--changing';

  featureDetailWrap?.classList.add(changingClass);

  setTimeout(() => {
    if (featureDetailDescription) {
      featureDetailDescription.textContent = description;
    }

    if (featureDetailPicture) {
      const imgElement = featureDetailPicture.querySelector('img') as HTMLImageElement;
      const sources = featureDetailPicture.querySelectorAll('source');

      const newFileName = `${id}-features-image`;

      if (imgElement) {
        imgElement.src = `./img/features/${newFileName}.png`;
        imgElement.srcset = `./img/features/${newFileName}@2x.png`;
      }

      sources.forEach((source) => {
        const type = source.getAttribute('type');
        if (type === 'image/webp') {
          source.srcset = `./img/features/${newFileName}@2x.webp 2x, ./img/features/${newFileName}.webp`;
        } else if (type === 'image/png') {
          source.srcset = `./img/features/${newFileName}@2x.png 2x, ./img/features/${newFileName}.png`;
        }
      });
    }
  }, 300);

  setTimeout(() => featureDetailWrap?.classList.remove(changingClass), 300);
}

function updateProgress(item: HTMLElement): void {
  const progressElement = item.querySelector<HTMLElement>('[data-progress]');
  const duration = intervalTime;
  const startTime = performance.now();

  const animateProgress = (): void => {
    const currentTime = performance.now();
    const elapsed = currentTime - startTime;
    const progress = Math.round(Math.min((elapsed / duration) * 100, 100));

    if (progressElement) {
      progressElement.setAttribute('data-progress', progress.toString());
    }

    if (elapsed < duration) {
      requestAnimationFrame(animateProgress);
    } else {
      if (progressElement) {
        progressElement.setAttribute('data-progress', '100');
      }
    }
  };

  animateProgress();
}

// Функция для автоматического обновления активного элемента
function startAutoUpdate() {
  intervalId = setInterval(() => {
    currentIndex = (currentIndex + 1) % featureItems.length;
    updateActiveItem();
  }, intervalTime);
}

// Инициализируем первый элемент и прогресс
updateActiveItem();
startAutoUpdate();
