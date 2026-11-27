(() => {
  const buttons = '[data-button-motion], [data-ax-route] :is(button, a[href]).ax-btn:not(.ax-btn--link, .ax-btn--icon)';
  const canHover = window.matchMedia('(any-hover: hover)');
  const allowMotion = window.matchMedia('(prefers-reduced-motion: no-preference)');
  const animations = new WeakMap();
  const keyframes = [
    { transform: 'translateY(0)', offset: 0, easing: 'cubic-bezier(.3333, 0, .6667, 0)' },
    { transform: 'translateY(-150%)', offset: 0.5 },
    { transform: 'translateY(150%)', offset: 0.5, easing: 'cubic-bezier(.3333, .6667, .6667, 1)' },
    { transform: 'translateY(0)', offset: 1 },
  ];

  if (document.documentElement.hasAttribute('data-ax-route')) {
    const styles = document.createElement('link');
    styles.rel = 'stylesheet';
    styles.href = '/assets/css/button-motion.css';
    document.head.append(styles);
  }

  function getLabel(button) {
    const existing = button.querySelector('[data-button-label]');
    if (existing || !button.matches('.ax-btn')) return existing;

    // Static CMS controls may use plain text or a separate span beside their icon.
    if (button.matches('[x-text], [x-html]')) return null;
    const labelSpan = button.querySelector(':scope > span:not([aria-hidden="true"], .sr-only, .visually-hidden, [class*="icon"], [x-text], [x-html])');
    const text = [button, labelSpan].filter(Boolean).flatMap((element) => Array.from(element.childNodes))
      .find((node) => node.nodeType === Node.TEXT_NODE && /[\p{L}\p{N}]/u.test(node.textContent));
    if (!text) return null;

    const mask = document.createElement('span');
    const label = document.createElement('span');
    mask.className = 'ra-button-label';
    label.setAttribute('data-button-label', '');
    text.before(mask);
    mask.append(label);
    label.append(text);
    return label;
  }

  document.addEventListener('pointerover', (event) => {
    if (!canHover.matches || !allowMotion.matches || event.buttons || !['mouse', 'pen'].includes(event.pointerType)) return;
    if (!(event.target instanceof Element)) return;
    const button = event.target.closest(buttons);
    if (!button || button.contains(event.relatedTarget) || button.matches(':disabled, [aria-disabled="true"], :focus-visible')) return;

    const label = getLabel(button);
    if (!label?.animate) return;
    animations.get(label)?.cancel();
    animations.set(label, label.animate(keyframes, { duration: 400 }));
  });
})();
