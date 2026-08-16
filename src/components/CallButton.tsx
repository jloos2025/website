import { createSignal, onCleanup, onMount } from 'solid-js';

// Reactive click-to-call button: pulses gently, and after 8s of idling on the
// page nudges with the "still open" line to catch the hesitating caller.
export default function CallButton(props: { phone: string; display: string }) {
  const [nudge, setNudge] = createSignal(false);

  onMount(() => {
    const t = setTimeout(() => setNudge(true), 8000);
    onCleanup(() => clearTimeout(t));
  });

  return (
    <a class="call-btn" classList={{ nudge: nudge() }} href={`tel:${props.phone}`}>
      <span class="call-btn-label">{nudge() ? "We're open — call now" : 'Call us'}</span>
      <span class="call-btn-number">{props.display}</span>
    </a>
  );
}
