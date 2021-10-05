import React, { useEffect, useState } from 'react';
import { SERVER_URL } from '../../utils/constants';

interface Prop {
  input: any;
}

export const FileRenderer = (props: Prop) => {
  const [file, setFile] = useState<any>();

  useEffect(() => {
    if (!(props.input instanceof Blob)) {
      setFile(SERVER_URL + props.input);
      return;
    }
    let reader = new FileReader();

    reader.onloadend = () => {
      setFile(reader.result);
    };

    reader.readAsDataURL(props.input);
  }, [props.input]);

  if (!file) {
    return null;
  }

  return (
    <div>
      <img src={file} alt={file.name} height={200} />
    </div>
  );
};
