import rooms from '../data/rooms.json';
import {TreeLayout} from '../components/TreeLayout';
import {RoomCTA} from '../components/RoomCTA';

export default function Index() {
  return (
    <TreeLayout>
      <ul className="space-y-16 p-6">
        {rooms.map((room) => (
          <li key={room.slug} className="h-96 bg-white rounded-2xl shadow relative">
            <div className="p-6">
              <h2 className="text-3xl font-bold mb-2">{room.title}</h2>
              <p className="mb-4">{room.tagline}</p>
              <RoomCTA {...room.cta} />
            </div>
          </li>
        ))}
      </ul>
    </TreeLayout>
  );
}
