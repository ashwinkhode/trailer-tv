import { useState, useEffect } from 'react';

const useConnectionType = (defaultConnectionType: string) => {
  const navi: any = navigator;

  if (navi && navi.connection) {
    const isSupported = navi?.connection?.effectiveType ? true : false;

    const [connectionType, setNetworkStatus] = useState(
      isSupported ? navi.connection.effectiveType : defaultConnectionType
    );

    // eslint-disable-next-line consistent-return
    useEffect(() => {
      if (isSupported) {
        const { connection } = navi;
        const updateConnectionType = () => {
          setNetworkStatus(connection.effectiveType);
        };

        connection.addEventListener('change', updateConnectionType);

        return () => {
          connection.removeEventListener('change', updateConnectionType);
        };
      }
    }, []);

    return [connectionType, setNetworkStatus];
  }

  return ['4g'];
};

const SmartCompressedImage = (src: string, width: string) => {
  const [connectionType] = useConnectionType('4g');

  let compressionLevel = 0;

  switch (connectionType) {
    case 'slow-2g':
      compressionLevel = 65;
      break;
    case '2g':
      compressionLevel = 50;
      break;
    case '3g':
      compressionLevel = 35;
      break;
    case '4g':
      compressionLevel = 0;
      break;
  }

  return `${src}?imgeng=/${
    width ? `w_${width}/` : ''
  }cmpr_${compressionLevel}/`;
};

export default SmartCompressedImage;
