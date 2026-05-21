import CursorFollower from './_components/CursorFollower';
import OhrLandingCanvas from './_components/OhrLandingCanvas';

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <OhrLandingCanvas />
      <CursorFollower />
    </main>
  );
}
