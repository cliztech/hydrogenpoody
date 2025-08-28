/* eslint-env browser */
import React, { useRef, useState, useEffect } from 'react';

const COLORS = ['#000000', '#ff0000', '#00ff00', '#0000ff', '#ffff00'];

export function ColorNSave() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [color, setColor] = useState(COLORS[0]);
  const isDrawing = useRef(false);
  const undoStack = useRef<ImageData[]>([]);
  const redoStack = useRef<ImageData[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const saved = globalThis.localStorage?.getItem('poody-coloring');
    if (saved) {
      const img = new globalThis.Image();
      img.src = saved;
      img.onload = () => ctx.drawImage(img, 0, 0);
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
  }, []);

  function saveSnapshot() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    undoStack.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    redoStack.current = [];
  }

  function draw(e: React.PointerEvent<HTMLCanvasElement>) {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const rect = canvas.getBoundingClientRect();
    ctx.fillStyle = color;
    ctx.fillRect(e.clientX - rect.left, e.clientY - rect.top, 8, 8);
  }

  function handlePointerDown(e: React.PointerEvent<HTMLCanvasElement>) {
    saveSnapshot();
    isDrawing.current = true;
    draw(e);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLCanvasElement>) {
    if (!isDrawing.current) return;
    draw(e);
  }

  function handlePointerUp() {
    if (!isDrawing.current) return;
    isDrawing.current = false;
    const canvas = canvasRef.current;
    if (!canvas) return;
    globalThis.localStorage?.setItem('poody-coloring', canvas.toDataURL());
  }

  function handleUndo() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const last = undoStack.current.pop();
    if (!last) return;
    redoStack.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    ctx.putImageData(last, 0, 0);
    globalThis.localStorage?.setItem('poody-coloring', canvas.toDataURL());
  }

  function handleRedo() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const next = redoStack.current.pop();
    if (!next) return;
    undoStack.current.push(ctx.getImageData(0, 0, canvas.width, canvas.height));
    ctx.putImageData(next, 0, 0);
    globalThis.localStorage?.setItem('poody-coloring', canvas.toDataURL());
  }

  function handleSave() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = globalThis.document?.createElement('a');
    if (!link) return;
    link.download = 'poody-drawing.png';
    link.href = canvas.toDataURL();
    link.click();
  }

  return (
    <div className="space-y-2">
      <div className="flex gap-2">
        {COLORS.map((c) => (
          <button
            key={c}
            style={{ background: c }}
            className="h-8 w-8 rounded-full border"
            onClick={() => setColor(c)}
          />
        ))}
        <button className="rounded bg-gray-300 px-2" onClick={handleUndo}>
          Undo
        </button>
        <button className="rounded bg-gray-300 px-2" onClick={handleRedo}>
          Redo
        </button>
        <button className="rounded bg-green-500 px-2 text-white" onClick={handleSave}>
          Save
        </button>
      </div>
      <canvas
        ref={canvasRef}
        width={300}
        height={300}
        className="border touch-none"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      />
    </div>
  );
}
