import React from 'react';
import defaultTheme from 'prism-react-renderer/themes/oceanicNext';
import {
  LiveEditor,
  LiveError,
  LivePreview,
  LiveProvider,
  LiveProviderProps,
} from 'react-live';

interface Istyles {
  [k: string]: string | number;
}

interface ReactLiveWrapperProps extends Omit<LiveProviderProps, 'ref'> {
  wrapperStyle?: Istyles;
  title?: string;
  direction?: 'column' | 'row';
  livePreviewStyle?: Istyles;
  liveEditorStyle?: Istyles;
}

export const ReactLiveWrapper = (props: ReactLiveWrapperProps) => {
  const {
    theme = defaultTheme,
    wrapperStyle = {
      padding: 20,
    },
    title,
    direction = 'column',
    livePreviewStyle,
    liveEditorStyle,
    ...liveProviderProps
  } = props;

  let styles = {
    livePreviewStyle,
    liveEditorStyle,
  };
  if (direction === 'row') {
    styles = getRowDirectionStyles({
      livePreviewStyle,
      liveEditorStyle,
    });
  }
  return (
    <div className="wrapper" style={wrapperStyle}>
      {title && (
        <>
          <span className="text">{title}</span>
          <br />
          <br />
        </>
      )}
      <LiveProvider {...liveProviderProps} theme={theme}>
        <LiveError />
        <div
          style={{
            display: 'flex',
            flexDirection: direction,
            flexWrap: 'wrap',
          }}
        >
          <LivePreview style={styles && styles.livePreviewStyle} />
          {direction === 'column' && <br />}
          <LiveEditor style={styles && styles.liveEditorStyle} />
        </div>
      </LiveProvider>
    </div>
  );
};

function getRowDirectionStyles({
  livePreviewStyle,
  liveEditorStyle,
}: {
  livePreviewStyle?: Istyles;
  liveEditorStyle?: Istyles;
}) {
  return {
    livePreviewStyle: {
      ...livePreviewStyle,
    },
    liveEditorStyle: {
      marginLeft: 20,
      flex: 1,
      ...liveEditorStyle,
    },
  };
}
