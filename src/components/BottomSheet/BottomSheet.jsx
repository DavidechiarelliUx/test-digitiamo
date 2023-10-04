import { useState } from 'react';
import React  from 'react';
import { useSpring, animated } from 'react-spring';
import { useDrag } from 'react-use-gesture';

import Styles from "./BottomSheet.module.scss";

function BottomSheet() {
  const [props, set] = useSpring(() => ({
    y: 450
  }));

  const [offset, setOffset] = useState(450);

  const bind = useDrag(({ movement: [mx, my], down }) => {
    if (down) {
      set({ y: my + offset, immediate: true });
    } else {
      if (my + offset < 200) {
        setOffset(0);
        set({ y: 0, immediate: false });
      } else {
        setOffset(450);
        set({ y: 450, immediate: false });
      }
    }
});


  return (
    <animated.div
      {...bind()}
      className={Styles.BottomSheet}
      style={{
        transform: props.y.to(y => `translateY(${y}px)`),
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '350px',
        background: 'white',
        borderTopLeftRadius: '15px',
        borderTopRightRadius: '15px',
        boxShadow: '0px -2px 10px rgba(0,0,0,0.1)'
      }}
    >
      <div className={Styles.sheetBar}></div>
      <div>
        <h2> sono il contenuto della bottom </h2>
      </div>
    </animated.div>
  );
}

export default BottomSheet;

