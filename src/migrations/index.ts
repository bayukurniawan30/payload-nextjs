import * as migration_20241218_075751_initial from './20241218_075751_initial';

export const migrations = [
  {
    up: migration_20241218_075751_initial.up,
    down: migration_20241218_075751_initial.down,
    name: '20241218_075751_initial'
  },
];
