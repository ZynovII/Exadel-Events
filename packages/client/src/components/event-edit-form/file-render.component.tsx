import React from 'react';
import { SERVER_URL } from '../../utils/constants';

interface Prop {
  file: any;
}

export class FileRenderer extends React.Component<Prop> {
  state = {
    loading: false,
    thumb: undefined,
  };

  componentWillReceiveProps(nextProps: Prop) {
    if (!nextProps.file) {
      return;
    }

    if (!(nextProps.file instanceof Blob)) {
      this.setState({ thumb: SERVER_URL + nextProps.file });
      return;
    }
    this.setState({ loading: true }, () => {
      let reader = new FileReader();

      reader.onloadend = () => {
        this.setState({ loading: false, thumb: reader.result });
      };

      reader.readAsDataURL(nextProps.file);
    });
  }

  render() {
    const { file } = this.props;
    const { loading, thumb } = this.state;

    if (!file) {
      return null;
    }

    if (loading) {
      return <p>loading...</p>;
    }

    return (
      <div>
        <img
          src={thumb}
          alt={file.name}
          className="img-thumbnail mt-2"
          height={200}
        />
      </div>
    );
  }
}
