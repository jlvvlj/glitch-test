import React, { useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';
import { throttle } from 'lodash';

import { getContrastWithDarkText, getContrastWithLightText } from 'Models/collection';
import TextInput from 'Components/inputs/text-input';
import ColorInput from 'Components/inputs/color';
import Button from 'Components/buttons/button';
import { PopoverWithButton, PopoverDialog, PopoverInfo, PopoverActions } from 'Components/popover';
import styles from './edit-collection-color-pop.styl';

const formatAndValidateHex = (hex) => {
  if (!hex) return null;
  hex = hex.trim();
  if (!hex.startsWith('#')) {
    hex = `#${hex}`;
  }
  // #ff00ff
  if (/^#?[0-9A-Fa-f]{6}$/.test(hex)) {
    return hex;
  }
  // #f0f
  if (/^#?[0-9A-Fa-f]{3}$/.test(hex)) {
    const [, r, g, b] = hex.split('');
    return ['#', r, r, g, g, b, b].join('');
  }
  return null;
};

const isGoodColorContrast = (hex) => getContrastWithDarkText(hex) >= 4.5 || getContrastWithLightText(hex) >= 4.5;

function EditCollectionColorPop({ initialColor, updateColor, togglePopover }) {
  const [color, setColor] = useState(initialColor);
  const [hex, setHex] = useState(initialColor);
  const [error, setError] = useState(false);

  const changeColor = (value) => {
    setColor(value);
    setHex(value);
    updateColor(value);
  };

  const setRandomColor = () => {
    const newColor = randomColor({ luminosity: 'light' });
    if (isGoodColorContrast(newColor)) {
      changeColor(newColor);
      return;
    }
    setRandomColor();
  };

  const onChangeColorPicker = useMemo(() => throttle(changeColor, 100), []);

  const onChangeHex = (value) => {
    setHex(value);

    const formatted = formatAndValidateHex(value);
    if (!formatted) {
      setError('Invalid Hex');
      return;
    }

    const hexIsGoodColorContrast = isGoodColorContrast(value);
    if (!hexIsGoodColorContrast) {
      setError('This color might make text hard to read. Try another!');
      return;
    }

    setColor(formatted);
    updateColor(formatted);
    setError(false);
  };

  const keyPress = (e) => {
    if (e.key === 'Enter') {
      togglePopover();
    } else {
      setError(false);
    }
  };

  return (
    <PopoverDialog align="left" className={styles.container}>
      <PopoverInfo>
        <div className={styles.colorFormWrap}>
          <ColorInput value={color} onChange={onChangeColorPicker} />
          <div className={styles.hexWrap}>
            <TextInput
              autoFocus
              opaque
              value={hex}
              onChange={onChangeHex}
              onKeyPress={keyPress}
              placeholder="Hex"
              labelText="Custom color hex"
              error={error}
            />
          </div>
        </div>
      </PopoverInfo>

      <PopoverActions type="secondary">
        <Button size="small" type="tertiary" emoji="bouquet" onClick={setRandomColor}>
          Random
        </Button>
      </PopoverActions>
    </PopoverDialog>
  );
}

const EditCollectionColor = ({ update, initialColor }) => (
  <PopoverWithButton containerClass="edit-collection-color-btn" buttonClass="add-project" buttonText="Color">
    {({ togglePopover }) => <EditCollectionColorPop updateColor={update} initialColor={initialColor} togglePopover={togglePopover} />}
  </PopoverWithButton>
);

EditCollectionColor.propTypes = {
  update: PropTypes.func.isRequired,
  initialColor: PropTypes.string.isRequired,
};

export default EditCollectionColor;
