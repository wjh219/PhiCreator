import React from 'react';
import { observer } from 'mobx-react-lite';
import { useHotkeys } from 'react-hotkeys-hook';
import { control, music, project } from '/@/managers';

export default observer(function Hotkeys() {
  useHotkeys('space', (e) => {
    e.preventDefault();
    music.toggle();
  });
  useHotkeys('alt+r', () => {
    project.reload();
  });
  useHotkeys('alt+f', () => {
    control.toggleFull();
  });
  useHotkeys('ctrl+s', () => {
    project.save();
  });

  return <></>;
});