import CursorFollower from './_components/CursorFollower';
import OhrLandingView from './_components/OhrLandingView';

export default function Home() {
  return (
    <main className="overflow-x-hidden bg-white">
      <OhrLandingView />
      <CursorFollower />
    </main>
  );
}
