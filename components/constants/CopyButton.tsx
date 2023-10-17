import { CheckCircleIcon } from '@chakra-ui/icons';
import { IconButton, useClipboard } from '@chakra-ui/react';
import { MdOutlineContentCopy } from 'react-icons/md';
import React, { useState } from 'react'

type PropsType = {
  copyText: string,
  h?: string,
  boxSize?: string | number
}

const CopyButton = ({copyText, boxSize, ...props} : PropsType) => {
  const [isCopy, setIsCopy] = useState(false);
  const { onCopy } = useClipboard(copyText);
  
  return (
    <IconButton aria-label='copy' colorScheme={"messenger"} icon={isCopy ? <CheckCircleIcon/> : <MdOutlineContentCopy/>} onClick={() => {
      setIsCopy(true);
      setTimeout(() => setIsCopy(false), 3000);
      onCopy();
  }} {...props}/>
  )
}

export default CopyButton