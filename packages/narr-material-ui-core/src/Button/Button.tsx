import * as React from 'react';

function Button(props: any) {
  return (
    <div className="foo">
      <button onClick={props.onClick}>{props.children}</button>
    </div>
  );
}

export default Button;
