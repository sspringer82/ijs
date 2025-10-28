const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries());
});
obs.observe({ entryTypes: ['function'], buffered: true });

performance.mark('start');
doHeavyWork();
performance.mark('end');
performance.measure('HeavyWork', 'start', 'end');

function doHeavyWork() {
  let sum = 0;
  for (let i = 0; i < 1e6; i++) sum += i;
}

const timeryfyIt = performance.timerify(doHeavyWork);
timeryfyIt();

performance.mark('start');
setTimeout(() => {
  performance.mark('end');
  performance.measure('TimeoutTask', 'start', 'end');
}, 100);
