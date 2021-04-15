import React, {useState, useEffect} from 'react'

const useConnectionType = (defaultConnectionType) => {

  const isSupported = navigator?.connection?.effectiveType
    ? true
    : false

  const [connectionType, setNetworkStatus] = useState(
    isSupported
      ? navigator.connection.effectiveType
      : defaultConnectionType
  )

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (isSupported) {
      const {connection} = navigator
      const updateConnectionType = () => {
        setNetworkStatus(connection.effectiveType)
      }

      connection.addEventListener('change', updateConnectionType)

      return () => {
        connection.removeEventListener('change', updateConnectionType)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return [connectionType, setNetworkStatus]
}

const SmartCompressedImage = (src, width) => {

  const [connectionType] = useConnectionType('4g')

  let compressionLevel = 0

  switch (connectionType) {
    case 'slow-2g':
      compressionLevel = 65
      break
    case '2g':
      compressionLevel = 50
      break
    case '3g':
      compressionLevel = 35
      break
    case '4g':
      compressionLevel = 0
      break
  }

  return (
    `http://try.imgeng.in/${width ? `w_${width}/` : ''}cmpr_${compressionLevel}/${src}`
  )
}

export default SmartCompressedImage