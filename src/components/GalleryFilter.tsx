import { createSignal, onMount } from 'solid-js';

type Category = { id: string; label: string };

// Progressive enhancement: the full grid renders in HTML at build time. This
// island adds the filter chips and shows/hides grid items by data-category.
export default function GalleryFilter(props: { categories: readonly Category[] }) {
  const [active, setActive] = createSignal('all');
  const [ready, setReady] = createSignal(false);

  onMount(() => setReady(true));

  function choose(id: string) {
    setActive(id);
    const items = document.querySelectorAll<HTMLElement>('[data-category]');
    items.forEach((el) => {
      const show = id === 'all' || el.dataset.category === id;
      el.hidden = !show;
    });
  }

  return (
    <div class="gal-filter" role="group" aria-label="Filter photos by type of work">
      {props.categories.map((c) => (
        <button
          type="button"
          class="gal-chip"
          classList={{ on: active() === c.id }}
          aria-pressed={active() === c.id}
          disabled={!ready()}
          onClick={() => choose(c.id)}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
