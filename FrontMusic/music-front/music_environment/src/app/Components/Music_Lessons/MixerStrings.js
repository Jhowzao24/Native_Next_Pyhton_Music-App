// StringMixer.js
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const instruments = [
  { id: 'violin', label: 'Violino', sound: '/sounds/violin.mp3' },
  { id: 'viola', label: 'Viola', sound: '/sounds/viola.mp3' },
  { id: 'cello', label: 'Violoncelo', sound: '/sounds/cello.mp3' }
];

export default function StringMixer() {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current)
      .attr('width', 700)
      .attr('height', 450);

    svg.append('rect')
      .attr('x', 250).attr('y', 180)
      .attr('width', 200).attr('height', 100)
      .attr('fill', '#ddd').attr('stroke', '#444');

    const drag = d3.drag()
      .on('drag', function (event) {
        d3.select(this)
          .attr('x', event.x - 30)
          .attr('y', event.y - 30);
      })
      .on('end', function (event, d) {
        const [x, y] = [event.x, event.y];
        if (x >= 250 && x <= 450 && y >= 180 && y <= 280) {
          playSound(d.sound);
        }
      });

    svg.selectAll('rect.instrument')
      .data(instruments)
      .enter()
      .append('rect')
      .attr('class', 'instrument')
      .attr('x', 80)
      .attr('y', (d, i) => 60 + i * 100)
      .attr('width', 60).attr('height', 60)
      .attr('fill', '#6A5ACD')
      .call(drag);

    svg.selectAll('text.label')
      .data(instruments)
      .enter()
      .append('text')
      .attr('x', 110)
      .attr('y', (d, i) => 95 + i * 100)
      .attr('text-anchor', 'middle')
      .style('fill', '#fff')
      .style('font-size', '14px')
      .text(d => d.label);
  }, []);

  const playSound = async (url) => {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const response = await fetch(url);
    const arrayBuffer = await response.arrayBuffer();
    const audioBuffer = await audioCtx.decodeAudioData(arrayBuffer);
    const source = audioCtx.createBufferSource();
    source.buffer = audioBuffer;
    source.connect(audioCtx.destination);
    source.start();
  };

  return (
    <div>
      <h2>🎶 Mixer de Instrumentos de Cordas</h2>
      <svg ref={svgRef}></svg>
    </div>
  );
}