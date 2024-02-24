const EventEmitter = require('events');

const createEE = ({ fn, interval, signal }) => {
  const emitter = new EventEmitter();

  // Émettre immédiatement le premier événement data.
  try {
    emitter.emit('data', fn());
  } catch (error) {
    emitter.emit('error', error);
  }

  // Créer un intervalle pour émettre des événements data.
  const intervalId = setInterval(() => {
    try {
      emitter.emit('data', fn());
    } catch (error) {
      emitter.emit('error', error);
    }
  }, interval);

  // Gérer l'arrêt de l'intervalle à l'aide du signal.
  signal.addEventListener('abort', () => {
    clearInterval(intervalId);
    emitter.emit('close');
  });

  return emitter;
};

module.exports = createEE; // Exporter la fonction si nécessaire
