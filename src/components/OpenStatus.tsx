import { createSignal, onMount } from 'solid-js';

type Props = {
  schedule: Record<number, [number, number]>;
  timezone: string;
  hoursShort: string;
  afterHoursLine: string;
};

function fmtHour(h: number) {
  const ampm = h >= 12 ? 'pm' : 'am';
  const twelve = h % 12 === 0 ? 12 : h % 12;
  return `${twelve}${ampm}`;
}

// Renders the static schedule at build time, then hydrates to a live
// open/closed status computed in the shop's timezone.
export default function OpenStatus(props: Props) {
  const [line1, setLine1] = createSignal(props.hoursShort);
  const [line2, setLine2] = createSignal(props.afterHoursLine);

  onMount(() => {
    try {
      const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: props.timezone,
        weekday: 'short',
        hour: 'numeric',
        hour12: false,
      }).formatToParts(new Date());
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const day = days.indexOf(parts.find((p) => p.type === 'weekday')?.value ?? '');
      const hour = Number(parts.find((p) => p.type === 'hour')?.value);
      const win = props.schedule[day];
      if (win && hour >= win[0] && hour < win[1]) {
        setLine1(`Open now · closes ${fmtHour(win[1])}`);
        setLine2('A real person answers');
      } else {
        setLine1('Shop closed right now');
        setLine2('Emergency line rings the truck on duty');
      }
    } catch {
      // Leave the static schedule in place if anything goes sideways.
    }
  });

  return (
    <p class="hours">
      {line1()}
      <br />
      {line2()}
    </p>
  );
}
