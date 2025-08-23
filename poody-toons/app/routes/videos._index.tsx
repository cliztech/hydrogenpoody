import {TreeLayout} from '../components/TreeLayout';
import {YouTubeLite} from '../components/YouTubeLite';

const sampleVideos = [
  {id: 'dQw4w9WgXcQ', title: 'Sample Video'}
];

export default function Videos() {
  return (
    <TreeLayout>
      <div className="max-w-3xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold">Videos</h1>
        {sampleVideos.map((v) => (
          <YouTubeLite key={v.id} videoId={v.id} title={v.title} />
        ))}
      </div>
    </TreeLayout>
  );
}
